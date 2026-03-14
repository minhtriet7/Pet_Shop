const { generateAccessToken } = require('../middlewares/jwt');
const User = require('../models/user');
const sendMail = require('../utils/sendMail'); // Import hàm gửi mail

const register = async (req, res) => {
    try {
        const { email, password, firstname, lastname, mobile } = req.body;

        if (!email || !password || !firstname || !lastname || !mobile) {
            return res.status(400).json({ success: false, mes: 'Vui lòng nhập đầy đủ thông tin' });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, mes: 'Email này đã được sử dụng!' });
        }

        const newUser = await User.create({
            firstname, lastname, email, password, mobile
        });

        // ĐOẠN MỚI THÊM: Chuẩn bị nội dung và gửi mail
        const html = `
            <h2>Chào mừng ${firstname} ${lastname} đến với Pet Shop!</h2>
            <p>Tài khoản của bạn đã được đăng ký thành công với email: <strong>${email}</strong></p>
            <p>Hãy nhanh tay đăng nhập để mua sắm và đặt lịch spa cho thú cưng của bạn nhé!</p>
        `;

        await sendMail({
            email: email, // Gửi tới email người dùng vừa nhập
            html: html,
            subject: 'Đăng ký tài khoản Pet Shop thành công'
        });

        return res.status(200).json({
            success: true,
            mes: 'Đăng ký thành công. Vui lòng kiểm tra email của bạn!',
        });

    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
};
// @desc    Đăng nhập
// @route   POST /api/user/login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Kiểm tra có nhập đủ chưa
        if (!email || !password) {
            return res.status(400).json({ success: false, mes: 'Vui lòng nhập email và mật khẩu' });
        }

        // 2. Tìm user theo email
        const user = await User.findOne({ email });

        // 3. Nếu user tồn tại VÀ mật khẩu đúng
        if (user && await user.isCorrectPassword(password)) {
            // Tách các thông tin nhạy cảm (password) ra, không gửi về cho Client
            const { password, role, ...userData } = user.toObject();

            // Tạo Token
            const accessToken = generateAccessToken(user._id, role);

            return res.status(200).json({
                success: true,
                mes: 'Đăng nhập thành công',
                accessToken,
                userData
            });
        } else {
            return res.status(400).json({ success: false, mes: 'Sai email hoặc mật khẩu!' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
};
// @desc    Lấy thông tin người dùng đang đăng nhập
// @route   GET /api/user/current
const getCurrentUser = async (req, res) => {
    try {
        const { _id } = req.user; // Lấy _id từ middleware verifyAccessToken truyền qua

        // Tìm user trong DB theo ID, loại bỏ trường password không trả về
        const user = await User.findById(_id).select('-password'); 
        
        return res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
};

// @desc    Thêm hoặc Bỏ sản phẩm yêu thích (Toggle)
// @route   PUT /api/user/wishlist/:pid
const toggleWishlist = async (req, res) => {
    const { pid } = req.params; // ID của sản phẩm muốn yêu thích
    const { _id } = req.user;   // ID của user đang đăng nhập (lấy từ token)

    try {
        // 1. Tìm xem user này là ai
        const user = await User.findById(_id);

        // 2. Kiểm tra xem sản phẩm này đã có trong danh sách yêu thích chưa
        const isAlreadyAdded = user.wishlist.find(el => el.toString() === pid);

        if (isAlreadyAdded) {
            // NẾU CÓ RỒI -> Bỏ yêu thích (Rút ID sản phẩm đó ra khỏi mảng wishlist bằng $pull)
            const updatedUser = await User.findByIdAndUpdate(
                _id, 
                { $pull: { wishlist: pid } }, 
                { new: true }
            ).select('-password -role -refreshToken'); // Không trả về mấy thông tin nhạy cảm

            return res.status(200).json({
                success: true,
                mes: 'Đã bỏ khỏi danh sách yêu thích',
                updatedUser
            });
        } else {
            // NẾU CHƯA CÓ -> Thêm yêu thích (Nhét ID sản phẩm đó vào mảng wishlist bằng $push)
            const updatedUser = await User.findByIdAndUpdate(
                _id, 
                { $push: { wishlist: pid } }, 
                { new: true }
            ).select('-password -role -refreshToken');

            return res.status(200).json({
                success: true,
                mes: 'Đã thêm vào danh sách yêu thích',
                updatedUser
            });
        }
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
};
// Nhớ xuất (export) hàm login ra nhé
// @desc    Thêm sản phẩm vào giỏ hàng / Cập nhật số lượng
// @route   PUT /api/user/cart
const updateCart = async (req, res) => {
    const { _id } = req.user; // ID user đang đăng nhập
    const { pid, quantity = 1, color } = req.body; // Client gửi lên ID sản phẩm, số lượng, màu sắc

    // Bắt buộc phải chọn sản phẩm và màu sắc
    if (!pid || !color) {
        return res.status(400).json({ success: false, mes: 'Vui lòng cung cấp ID sản phẩm và màu sắc' });
    }

    try {
        const user = await User.findById(_id);
        
        // 1. Kiểm tra xem sản phẩm (với màu sắc này) đã có trong giỏ hàng chưa?
        const alreadyProduct = user?.cart?.find(
            el => el.product.toString() === pid && el.color === color
        );

        if (alreadyProduct) {
            // NẾU CÓ RỒI -> Cập nhật lại số lượng
            await User.updateOne(
                { _id, "cart.product": pid, "cart.color": color },
                { $set: { "cart.$.quantity": quantity } }
            );
        } else {
            // NẾU CHƯA CÓ -> Đẩy nguyên một object mới vào mảng cart
            await User.findByIdAndUpdate(
                _id, 
                { $push: { cart: { product: pid, quantity, color } } }
            );
        }

        // Lấy lại data mới nhất để trả về cho Client
        const updatedUser = await User.findById(_id).select('-password -role -refreshToken');

        return res.status(200).json({
            success: true,
            mes: 'Cập nhật giỏ hàng thành công',
            updatedUser
        });

    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}
// @desc    Xóa sản phẩm khỏi giỏ hàng
// @route   DELETE /api/user/remove-cart/:pid/:color
const removeProductInCart = async (req, res) => {
    const { _id } = req.user; // ID user đang đăng nhập
    const { pid, color } = req.params; // Lấy ID sản phẩm và màu sắc từ thanh URL

    try {
        // Dùng $pull để kéo (xóa) object có chứa pid và color đó ra khỏi mảng cart
        const user = await User.findByIdAndUpdate(
            _id,
            { $pull: { cart: { product: pid, color: color } } },
            { new: true }
        ).select('-password -role -refreshToken');

        return res.status(200).json({
            success: true,
            mes: 'Đã xóa sản phẩm khỏi giỏ hàng',
            updatedUser: user
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// @desc    Thêm hoặc Xóa sản phẩm khỏi danh sách yêu thích (Wishlist)
// @route   PUT /api/user/wishlist/:pid
const updateWishlist = async (req, res) => {
    const { pid } = req.params; // Lấy ID sản phẩm từ thanh URL
    const { _id } = req.user;   // Lấy ID user đang đăng nhập

    try {
        const user = await User.findById(_id);
        
        // Kiểm tra xem sản phẩm này đã có trong wishlist của user chưa
        const alreadyAdded = user.wishlist?.find(id => id.toString() === pid);

        if (alreadyAdded) {
            // Nếu CÓ RỒI -> Khách muốn bỏ "thả tim" -> Xóa đi ($pull)
            const response = await User.findByIdAndUpdate(_id, { $pull: { wishlist: pid } }, { new: true }).select('-password -role -refreshToken');
            return res.status(200).json({ 
                success: true, 
                mes: 'Đã xóa khỏi danh sách yêu thích', 
                updatedUser: response 
            });
        } else {
            // Nếu CHƯA CÓ -> Khách muốn "thả tim" -> Thêm vào ($push)
            const response = await User.findByIdAndUpdate(_id, { $push: { wishlist: pid } }, { new: true }).select('-password -role -refreshToken');
            return res.status(200).json({ 
                success: true, 
                mes: 'Đã thêm vào danh sách yêu thích', 
                updatedUser: response 
            });
        }
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}
module.exports = {
    register,
    login,
    getCurrentUser,
    toggleWishlist,
    updateCart,
    removeProductInCart,
    updateWishlist
};
