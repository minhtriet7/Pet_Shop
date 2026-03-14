const express = require('express');
const router = express.Router();
const ctrls = require('../controllers/ai.controller');

// Chat với AI thì ai vào web cũng chat được, không cần đăng nhập
router.post('/chat', ctrls.chatWithBot);

module.exports = router;