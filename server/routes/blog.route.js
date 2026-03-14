const express = require('express');
const router = express.Router();
const ctrls = require('../controllers/blog.controller');
const { verifyAccessToken, isAdmin } = require('../middlewares/verify-token');

// Phân quyền: Tạo bài thì cần Admin, Xem bài thì thả cửa
router.post('/', [verifyAccessToken, isAdmin], ctrls.createNewBlog);
router.get('/', ctrls.getBlogs);
// Thích và Không thích bài viết
router.put('/like/:bid', verifyAccessToken, ctrls.likeBlog);
router.put('/dislike/:bid', verifyAccessToken, ctrls.dislikeBlog);
module.exports = router;