const express = require('express');
const router = express.Router();
const ctrls = require('../controllers/product.controller');
const { verifyAccessToken, isAdmin } = require('../middlewares/verify-token');
const uploadCloud = require('../config/cloudinary.config');
// Đánh giá sản phẩm
router.put('/ratings', verifyAccessToken, ctrls.ratings);
// =========================================
// 1. PUBLIC ROUTES (Ai cũng truy cập được)
// =========================================
router.get('/', ctrls.getProducts);

// =========================================
// 2. USER ROUTES (Chỉ cần đăng nhập)
// =========================================
// Đánh giá sản phẩm (Route tĩnh bắt buộc phải nằm trên route động /:pid)
router.put('/ratings', verifyAccessToken, ctrls.ratings);

// =========================================
// 3. ADMIN ROUTES (Cần đăng nhập VÀ là Admin)
// =========================================
router.post('/', [verifyAccessToken, isAdmin], ctrls.createProduct);

// Upload ảnh (Cho phép up tối đa 10 ảnh, key gửi lên là 'images')
router.put('/uploadimage/:pid', [verifyAccessToken, isAdmin], uploadCloud.array('images', 10), ctrls.uploadImagesProduct);

// Cập nhật và Xóa sản phẩm (Các route chứa /:pid phải để ở dưới cùng)
router.put('/:pid', [verifyAccessToken, isAdmin], ctrls.updateProduct);
router.delete('/:pid', [verifyAccessToken, isAdmin], ctrls.deleteProduct);

module.exports = router;