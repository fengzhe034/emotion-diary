<<<<<<< HEAD
// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// 注册路由
router.post('/register', authController.register);

// 登录路由
router.post('/login', authController.login);

=======
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// 注册路由
router.post('/register', register);

// 登录路由
router.post('/login', login);

// 导出路由（必须是module.exports = router）
>>>>>>> f12fe337ef1200e36727eb0e174faf5a8e552401
module.exports = router;