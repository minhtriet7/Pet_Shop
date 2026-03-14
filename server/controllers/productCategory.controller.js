const ProductCategory = require('../models/productCategory');

// 1. Tạo mới danh mục (Chỉ Admin)
const createCategory = async (req, res) => {
    try {
        const response = await ProductCategory.create(req.body);
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? 'Tạo danh mục thành công' : 'Không thể tạo danh mục',
            createdCategory: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 2. Lấy danh sách tất cả danh mục (Ai cũng xem được)
const getCategories = async (req, res) => {
    try {
        // Chỉ lấy trường title và _id cho nhẹ dữ liệu
        const response = await ProductCategory.find().select('title _id');
        return res.status(200).json({
            success: response ? true : false,
            productCategories: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 3. Cập nhật danh mục (Chỉ Admin)
const updateCategory = async (req, res) => {
    const { pcid } = req.params;
    try {
        const response = await ProductCategory.findByIdAndUpdate(pcid, req.body, { new: true });
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? 'Cập nhật danh mục thành công' : 'Không tìm thấy danh mục',
            updatedCategory: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 4. Xóa danh mục (Chỉ Admin)
const deleteCategory = async (req, res) => {
    const { pcid } = req.params;
    try {
        const response = await ProductCategory.findByIdAndDelete(pcid);
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? 'Xóa danh mục thành công' : 'Không tìm thấy danh mục',
            deletedCategory: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
};