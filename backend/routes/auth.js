// routes/auth.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// 注册路由
router.post('/register', register);

// 登录路由
router.post('/login', login);

// 导出路由（必须是 module.exports = router）
module.exports = router;
