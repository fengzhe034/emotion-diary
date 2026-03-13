<<<<<<< HEAD
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
=======
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// 生成Token
const generateToken = (id) => {
  return jwt.sign({ id }, 'zhaozheng_jwt_secret', { expiresIn: '7d' });
};

// 注册接口
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    
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
};

// 登录接口
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1. 根据邮箱查找用户
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "邮箱或密码错误" });
    }
    // 2. 验证密码（关键：调用 user.comparePassword 方法）
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "邮箱或密码错误" });
    }
    // 3. 生成并返回 token
    const token = generateToken(user._id);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: token
    });
  } catch (error) {
    res.status(500).json({ message: "登录失败", error: error.message });
  }
};

// 统一导出（避免导出格式错误）
module.exports = { register, login };
>>>>>>> f12fe337ef1200e36727eb0e174faf5a8e552401
