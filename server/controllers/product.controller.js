const Product = require('../models/product');
const slugify = require('slugify');

// @desc    Tạo sản phẩm mới (Chỉ dành cho Admin)
const createProduct = async (req, res) => {
    try {
        // Kiểm tra xem có gửi dữ liệu lên không
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ success: false, mes: 'Thiếu thông tin sản phẩm' });
        }
        // Tự động tạo slug từ title
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        
        const newProduct = await Product.create(req.body);
        return res.status(200).json({ success: true, mes: 'Tạo sản phẩm thành công', newProduct });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
};
// @desc    Lấy danh sách sản phẩm (Có Lọc, Sắp xếp, Phân trang)
const getProducts = async (req, res) => {
    try {
        const queries = { ...req.query };
        const excludeFields = ['limit', 'sort', 'page', 'fields'];
        excludeFields.forEach(el => delete queries[el]);

        let formattedQueries = {};

        // --- ĐOẠN CODE FIX LỖI TRIỆT ĐỂ ---
        // Tự động bóc tách 'price[gte]' thành định dạng chuẩn { price: { $gte: 300000 } }
        for (let key in queries) {
            if (key.includes('[')) {
                let field = key.split('[')[0]; // Lấy chữ 'price'
                let operator = key.split('[')[1].replace(']', ''); // Lấy chữ 'gte'
                
                if (!formattedQueries[field]) formattedQueries[field] = {};
                formattedQueries[field]['$' + operator] = Number(queries[key]);
            } else {
                formattedQueries[key] = queries[key];
            }
        }

        // Tìm kiếm theo tên
        if (formattedQueries?.title) {
            formattedQueries.title = { $regex: formattedQueries.title, $options: 'i' };
        }

        console.log("Query chuẩn gửi vào MongoDB:", formattedQueries); 
        // ----------------------------------

        let queryCommand = Product.find(formattedQueries);

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            queryCommand = queryCommand.sort(sortBy);
        } else {
            queryCommand = queryCommand.sort('-createdAt'); 
        }

        const page = +req.query.page || 1; 
        const limit = +req.query.limit || 10; 
        const skip = (page - 1) * limit;
        queryCommand = queryCommand.skip(skip).limit(limit);

        const response = await queryCommand.exec();
        const counts = await Product.countDocuments(formattedQueries);

        return res.status(200).json({
            success: response ? true : false,
            counts, 
            products: response ? response : 'Không lấy được sản phẩm'
        });

    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
};

// @desc    Cập nhật sản phẩm (Chỉ Admin)
const updateProduct = async (req, res) => {
    const { pid } = req.params;
    try {
        if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
        
        const updatedProduct = await Product.findByIdAndUpdate(pid, req.body, { new: true });
        
        return res.status(200).json({
            success: updatedProduct ? true : false,
            mes: updatedProduct ? 'Cập nhật sản phẩm thành công' : 'Không tìm thấy sản phẩm để cập nhật',
            updatedProduct
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
};

// @desc    Xóa sản phẩm (Chỉ Admin)
const deleteProduct = async (req, res) => {
    const { pid } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(pid);
        
        return res.status(200).json({
            success: deletedProduct ? true : false,
            mes: deletedProduct ? 'Xóa sản phẩm thành công' : 'Không tìm thấy sản phẩm để xóa',
            deletedProduct
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
};
// @desc    Upload ảnh cho sản phẩm
// @route   PUT /api/product/uploadimage/:pid
const uploadImagesProduct = async (req, res) => {
    const { pid } = req.params;
    
    try {
        // req.files là mảng chứa các file ảnh đã được Multer đẩy lên Cloudinary thành công
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ success: false, mes: 'Không tìm thấy file ảnh nào' });
        }

        // Lọc lấy danh sách các đường link (path) của ảnh từ req.files
        const imagesPath = req.files.map(el => el.path);

        // Tìm sản phẩm theo ID và nhét thêm các link ảnh này vào mảng 'images'
        const updatedProduct = await Product.findByIdAndUpdate(
            pid, 
            { $push: { images: { $each: imagesPath } } }, 
            { returnDocument: 'after' } // Trả về data mới nhất sau khi update
        );

        return res.status(200).json({
            success: updatedProduct ? true : false,
            mes: updatedProduct ? 'Tải ảnh lên thành công' : 'Không tìm thấy sản phẩm',
            updatedProduct
        });

    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
};
// @desc    Đánh giá sản phẩm (Cần đăng nhập)
const ratings = async (req, res) => {
    const { _id } = req.user; // ID của user đang đăng nhập (lấy từ token)
    const { star, comment, pid } = req.body; // Lấy số sao, bình luận và ID sản phẩm từ client gửi lên

    if (!star || !pid) {
        return res.status(400).json({ success: false, mes: 'Thiếu thông tin: số sao hoặc ID sản phẩm' });
    }

    try {
        const ratingProduct = await Product.findById(pid);
        
        // 1. Kiểm tra xem user này đã từng đánh giá sản phẩm này chưa
        const alreadyRating = ratingProduct?.ratings?.find(el => el.postedBy.toString() === _id);

        if (alreadyRating) {
            // Nếu đánh giá rồi -> Cập nhật lại số sao và bình luận mới
            await Product.updateOne(
                { _id: pid, "ratings.postedBy": _id },
                { $set: { "ratings.$.star": star, "ratings.$.comment": comment } }
            );
        } else {
            // Nếu chưa đánh giá -> Thêm mới vào mảng ratings
            await Product.findByIdAndUpdate(pid, {
                $push: { ratings: { star, comment, postedBy: _id } }
            });
        }

        // 2. Tính toán lại tổng điểm đánh giá trung bình (totalRatings)
        const updatedProduct = await Product.findById(pid);
        const ratingCount = updatedProduct.ratings.length;
        const sumRatings = updatedProduct.ratings.reduce((sum, el) => sum + +el.star, 0);
        
        // Công thức tính điểm trung bình (làm tròn 1 chữ số thập phân, ví dụ: 4.5)
        updatedProduct.totalRatings = Math.round((sumRatings * 10) / ratingCount) / 10;
        await updatedProduct.save();

        return res.status(200).json({
            success: true,
            mes: 'Đánh giá sản phẩm thành công',
            updatedProduct
        });

    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
};
// @desc    Đánh giá sản phẩm (User)

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    uploadImagesProduct,
    ratings
};