const express = require('express');
const router = express.Router();
const ctrls = require('../controllers/coupon.controller');
const { verifyAccessToken, isAdmin } = require('../middlewares/verify-token');

// Chỉ Admin mới được tạo mã giảm giá
router.post('/', [verifyAccessToken, isAdmin], ctrls.createNewCoupon);
// Ai cũng có thể xem danh sách mã giảm giá
router.get('/', ctrls.getCoupons);

// ... các route cũ
// Cập nhật mã giảm giá (Truyền ID mã vào URL)
router.put('/:cid', [verifyAccessToken, isAdmin], ctrls.updateCoupon);

// Xóa mã giảm giá (Truyền ID mã vào URL)
router.delete('/:cid', [verifyAccessToken, isAdmin], ctrls.deleteCoupon);

module.exports = router;
