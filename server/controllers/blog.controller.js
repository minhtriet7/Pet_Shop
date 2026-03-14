const Blog = require('../models/blog');

// 1. Tạo bài viết mới (Chỉ Admin)
const createNewBlog = async (req, res) => {
    const { title, description, category } = req.body;
    
    if (!title || !description || !category) {
        return res.status(400).json({ success: false, mes: 'Thiếu thông tin tiêu đề, mô tả hoặc danh mục' });
    }

    try {
        const response = await Blog.create(req.body);
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? 'Tạo bài viết thành công' : 'Không thể tạo bài viết',
            createdBlog: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 2. Lấy danh sách tất cả bài viết (Ai cũng xem được)
const getBlogs = async (req, res) => {
    try {
        const response = await Blog.find();
        return res.status(200).json({
            success: response ? true : false,
            blogs: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}
// 3. Thích bài viết (Like)
const likeBlog = async (req, res) => {
    const { _id } = req.user; // ID người dùng
    const { bid } = req.params; // ID bài viết

    try {
        const blog = await Blog.findById(bid);
        
        // Kiểm tra xem người dùng có đang Dislike bài này không
        const alreadyDisliked = blog?.dislikes?.find(el => el.toString() === _id);
        if (alreadyDisliked) {
            // Nếu có thì rút cái Dislike ra trước
            await Blog.findByIdAndUpdate(bid, { $pull: { dislikes: _id } });
        }

        // Kiểm tra xem người dùng đã Like bài này chưa
        const isLiked = blog?.likes?.find(el => el.toString() === _id);
        if (isLiked) {
            // Nếu Like rồi mà bấm nữa -> Hủy Like
            const response = await Blog.findByIdAndUpdate(bid, { $pull: { likes: _id } }, { new: true });
            return res.status(200).json({ success: true, mes: 'Đã bỏ Like', result: response });
        } else {
            // Nếu chưa Like -> Thêm Like vào
            const response = await Blog.findByIdAndUpdate(bid, { $push: { likes: _id } }, { new: true });
            return res.status(200).json({ success: true, mes: 'Đã Like bài viết', result: response });
        }
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 4. Không thích bài viết (Dislike)
const dislikeBlog = async (req, res) => {
    const { _id } = req.user;
    const { bid } = req.params;

    try {
        const blog = await Blog.findById(bid);
        
        // Kiểm tra xem người dùng có đang Like bài này không
        const alreadyLiked = blog?.likes?.find(el => el.toString() === _id);
        if (alreadyLiked) {
            // Nếu có thì rút cái Like ra trước
            await Blog.findByIdAndUpdate(bid, { $pull: { likes: _id } });
        }

        // Kiểm tra xem người dùng đã Dislike bài này chưa
        const isDisliked = blog?.dislikes?.find(el => el.toString() === _id);
        if (isDisliked) {
            // Nếu Dislike rồi mà bấm nữa -> Hủy Dislike
            const response = await Blog.findByIdAndUpdate(bid, { $pull: { dislikes: _id } }, { new: true });
            return res.status(200).json({ success: true, mes: 'Đã bỏ Dislike', result: response });
        } else {
            // Nếu chưa Dislike -> Thêm Dislike vào
            const response = await Blog.findByIdAndUpdate(bid, { $push: { dislikes: _id } }, { new: true });
            return res.status(200).json({ success: true, mes: 'Đã Dislike bài viết', result: response });
        }
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}
module.exports = {
    createNewBlog,
    getBlogs,
    likeBlog,    // <--- Thêm dòng này
    dislikeBlog
};