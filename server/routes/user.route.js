const express = require('express');
const router = express.Router();
const ctrls = require('../controllers/user.controller');
const { verifyAccessToken } = require('../middlewares/verify-token'); // Import bảo vệ vào

// Các API không cần đăng nhập
router.post('/register', ctrls.register);
router.post('/login', ctrls.login);

// Các API CẦN đăng nhập (phải đi qua verifyAccessToken)
router.get('/current', verifyAccessToken, ctrls.getCurrentUser);
// Đặt route này ở phần cần đăng nhập
router.put('/wishlist/:pid', verifyAccessToken, ctrls.toggleWishlist);
// Đặt dưới mấy cái /wishlist cho gọn gàng
router.put('/cart', verifyAccessToken, ctrls.updateCart);
// Route xóa sản phẩm khỏi giỏ hàng
router.delete('/remove-cart/:pid/:color', verifyAccessToken, ctrls.removeProductInCart);
// Thêm/Xóa khỏi Wishlist (Truyền ID sản phẩm vào URL)
router.put('/wishlist/:pid', verifyAccessToken, ctrls.updateWishlist);
module.exports = router;