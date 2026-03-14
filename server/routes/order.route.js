const express = require('express');
const router = express.Router();
const ctrls = require('../controllers/order.controller');
const { verifyAccessToken } = require('../middlewares/verify-token');

// Route tạo đơn hàng
router.post('/', verifyAccessToken, ctrls.createOrder);
// Cập nhật trạng thái thanh toán (Thường do User gọi sau khi thanh toán PayPal xong)
router.put('/ispaid/:oid', verifyAccessToken, ctrls.updateOrderToPaid);
module.exports = router;