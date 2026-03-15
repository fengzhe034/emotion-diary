// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

// 中间件（必须先加，再用路由）
app.use(cors());
app.use(express.json());

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

// 使用路由
app.use('/api/auth', authRoutes);
app.use('/api/diaries', diaryRoutes);

// 启动服务器
app.listen(port, () => {
  console.log(`后端服务运行在：http://localhost:${port}`);
});
