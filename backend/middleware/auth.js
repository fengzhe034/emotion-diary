const jwt = require('jsonwebtoken');
const User = require('../models/User');

// 认证中间件
const auth = async (req, res, next) => {
  try {
    // 从请求头获取token
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      console.log('认证失败：没有token');
      return res.status(401).json({ message: '请先登录！' });
    }

    // 验证token
    const decoded = jwt.verify(token, 'zhaozheng_jwt_secret');
    console.log('Token解码结果:', decoded);
    console.log('decoded.id:', decoded.id);

    // 查找用户
    const user = await User.findById(decoded.id);
    console.log('找到的用户:', user);
    if (!user) {
      console.log('认证失败：用户不存在，ID:', decoded.id);
      return res.status(401).json({ message: '用户不存在！' });
    }

    // 将用户信息添加到请求对象中
    req.user = user;
    req.token = token;
    console.log('认证成功，用户:', user.username);

    next();
  } catch (error) {
    console.log('认证失败，错误:', error.message);
    res.status(401).json({ message: '认证失败，请重新登录！' });
  }
};

module.exports = auth;