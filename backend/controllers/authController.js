// controllers/authController.js
const User = require('../models/User');

// 注册逻辑
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    // 简单实现，实际需要验证和哈希密码
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: '注册成功' });
  } catch (error) {
    res.status(500).json({ message: '注册失败', error });
  }
};

// 登录逻辑
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ message: '登录成功', user });
    } else {
      res.status(401).json({ message: '用户名或密码错误' });
    }
  } catch (error) {
    res.status(500).json({ message: '登录失败', error });
  }
};