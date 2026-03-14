const Coupon = require('../models/Coupon');

// 1. Tạo mới mã giảm giá (Admin)
const createNewCoupon = async (req, res) => {
    const { name, discount, expiry } = req.body;
    if (!name || !discount || !expiry) {
        return res.status(400).json({ success: false, mes: 'Thiếu thông tin mã giảm giá' });
    }
    try {
        const response = await Coupon.create({
            ...req.body,
            // Đổi expiry từ số ngày (gửi từ client) sang ngày hết hạn thực tế
            expiry: Date.now() + +expiry * 24 * 60 * 60 * 1000 
        });
        return res.status(200).json({ success: true, mes: 'Tạo mã giảm giá thành công', createdCoupon: response });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 2. Lấy danh sách mã giảm giá
const getCoupons = async (req, res) => {
    try {
        const response = await Coupon.find().select('-createdAt -updatedAt');
        return res.status(200).json({ success: true, coupons: response });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}
// 3. Cập nhật mã giảm giá (Admin)
const updateCoupon = async (req, res) => {
    const { cid } = req.params; // Lấy ID mã từ thanh URL

    // Nếu người dùng có gửi lên expiry mới (số ngày), thì tính toán lại ngày hết hạn
    if (req.body.expiry) {
        req.body.expiry = Date.now() + +req.body.expiry * 24 * 60 * 60 * 1000;
    }

    try {
        const response = await Coupon.findByIdAndUpdate(cid, req.body, { new: true });
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? 'Cập nhật mã giảm giá thành công' : 'Không tìm thấy mã này',
            updatedCoupon: response
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}

// 4. Xóa mã giảm giá (Admin)
const deleteCoupon = async (req, res) => {
    const { cid } = req.params; // Lấy ID mã từ thanh URL
    
    try {
        const response = await Coupon.findByIdAndDelete(cid);
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? 'Xóa mã giảm giá thành công' : 'Không tìm thấy mã này'
        });
    } catch (error) {
        return res.status(500).json({ success: false, mes: 'Lỗi server: ' + error.message });
    }
}
module.exports = {
    createNewCoupon,
    getCoupons,
    updateCoupon, 
    deleteCoupon
    
};