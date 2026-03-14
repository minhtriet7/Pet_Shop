const express = require('express');
const router = express.Router();
const ctrls = require('../controllers/productCategory.controller');
const { verifyAccessToken, isAdmin } = require('../middlewares/verify-token');

// Route (Chỉ có lấy danh sách là không cần đăng nhập, còn lại bắt buộc là Admin)
router.post('/', [verifyAccessToken, isAdmin], ctrls.createCategory);
router.get('/', ctrls.getCategories);
router.put('/:pcid', [verifyAccessToken, isAdmin], ctrls.updateCategory);
router.delete('/:pcid', [verifyAccessToken, isAdmin], ctrls.deleteCategory);

module.exports = router;