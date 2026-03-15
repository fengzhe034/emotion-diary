const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// 生成 Token 函数（如果 server.js 里没有定义，就放到这里）
function generateToken(userId) {
    const secret = 'your-secret-key-keep-it-safe';
    return jwt.sign({ id: userId }, secret, { expiresIn: '1d' });
}

// 注册接口
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: '用户名或邮箱已被注册' });
        }
        const user = await User.create({ username, email, password });
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        });
    } catch (error) {
        res.status(500).json({ message: '注册失败', error: error.message });
    }
});

// 登录接口（重点补全！）
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        // 1. 判断用户是否存在
        if (!user) {
            return res.status(400).json({ message: '该邮箱未注册' });
        }
        
        // 2. 判断密码是否正确（明文比对，实际项目需加密）
        if (user.password !== password) {
            return res.status(400).json({ message: '密码错误' });
        }
        
        // 3. 登录成功，返回 Token 和用户信息
        res.json({
            message: '登录成功',
            token: generateToken(user._id),
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: '登录失败', error: error.message });
    }
});

module.exports = router;