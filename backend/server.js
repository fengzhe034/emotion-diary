<<<<<<< HEAD
// backend/server.js
=======
>>>>>>> f12fe337ef1200e36727eb0e174faf5a8e552401
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

<<<<<<< HEAD
// 连接数据库
mongoose.connect('mongodb://localhost:27017/emotion-diary')
  .then(() => console.log('MongoDB 连接成功'))
  .catch(err => console.error('MongoDB 连接失败:', err));

app.use(cors());
app.use(express.json());

// 引入路由
const authRoutes = require('./routes/auth');
const diaryRoutes = require('./routes/diaries');

// 使用路由
app.use('/api/auth', authRoutes);
app.use('/api/diaries', diaryRoutes);

app.listen(port, () => {
  console.log(`后端运行在 http://localhost:${port}`);
=======
// 中间件（必须先加，再用路由）
app.use(cors());
app.use(express.json());

// 连接MongoDB
mongoose.connect('mongodb://localhost:27017/emotion-diary')
  .then(() => console.log('MongoDB连接成功'))
  .catch(err => console.log('MongoDB连接失败：', err));

// 引入路由（确保路径正确）
const authRoutes = require('./routes/auth');

// 使用路由（前缀/api/auth）
// 测试路由
app.get('/', (req, res) => {
  res.send('情绪日记后端API服务器运行中');
});

app.get('/api/test', (req, res) => {
  res.json({ message: '后端连接成功！' });
});
app.use('/api/auth', authRoutes);

// 启动服务器
app.listen(port, () => {
  console.log(`后端服务运行在：http://localhost:${port}`);
>>>>>>> f12fe337ef1200e36727eb0e174faf5a8e552401
});