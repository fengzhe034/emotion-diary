// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

// 中间件（必须先加，再用路由）
app.use(cors());
app.use(express.json());

// 添加请求日志中间件
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// 连接MongoDB
mongoose.connect('mongodb://localhost:27017/emotion-diary')
  .then(() => console.log('MongoDB 连接成功'))
  .catch(err => console.error('MongoDB 连接失败:', err));

// 引入路由
const authRoutes = require('./routes/auth');
const diaryRoutes = require('./routes/diaries');

// 测试路由
app.get('/', (req, res) => {
  res.send('情绪日记后端 API 服务器运行中');
});

app.get('/api/test', (req, res) => {
  res.json({ message: '后端连接成功！' });
});

// 调试路由：测试 POST 请求
app.post('/api/debug', (req, res) => {
  console.log('收到 POST 请求到 /api/debug:', req.body);
  res.status(200).json({ message: 'POST 请求成功', body: req.body, method: req.method, path: req.path });
});

// 使用路由
app.use('/api', authRoutes);
app.use('/api/diaries', diaryRoutes);

// 全局错误处理中间件
app.use((err, req, res, next) => {
  console.error('全局错误:', err);
  res.status(500).json({ message: '服务器内部错误', error: err.message });
});

// 启动服务器
app.listen(port, () => {
  console.log(`后端服务运行在：http://localhost:${port}`);
});
const jwt = require('jsonwebtoken');

// 全局中间件：校验 Token
app.use(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(); // 如果没有 token，继续执行（针对首页）
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'your-secret-key-keep-it-safe');
    req.user = { id: decoded.id }; // 把用户 ID 挂到请求上
    next();
  } catch (err) {
    res.status(401).json({ message: '无效的 Token，请重新登录' });
  }
});
// --- 粘贴结束 ---
