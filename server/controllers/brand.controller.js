const Brand = require('../models/brand');

// 1. Tạo mới thương hiệu
const createNewBrand = async (req, res) => {
    try {
        const response = await Brand.create(req.body);
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? 'Tạo thương hiệu thành công' : 'Không thể tạo thương hiệu',
            createdBrand: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 2. Lấy danh sách thương hiệu
const getBrands = async (req, res) => {
    try {
        const response = await Brand.find().select('title _id');
        return res.status(200).json({
            success: response ? true : false,
            brands: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 3. Cập nhật thương hiệu
const updateBrand = async (req, res) => {
    const { brid } = req.params;
    try {
        const response = await Brand.findByIdAndUpdate(brid, req.body, { new: true });
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? 'Cập nhật thương hiệu thành công' : 'Không tìm thấy thương hiệu',
            updatedBrand: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 4. Xóa thương hiệu
const deleteBrand = async (req, res) => {
    const { brid } = req.params;
    try {
        const response = await Brand.findByIdAndDelete(brid);
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? 'Xóa thương hiệu thành công' : 'Không tìm thấy thương hiệu',
            deletedBrand: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

module.exports = {
    createNewBrand,
    getBrands,
    updateBrand,
    deleteBrand
};