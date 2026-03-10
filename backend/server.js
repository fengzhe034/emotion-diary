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
  .then(() => console.log('MongoDB连接成功'))
  .catch(err => console.log('MongoDB连接失败：', err));

// 引入路由（确保路径正确）
const authRoutes = require('./routes/auth');

// 使用路由（前缀/api/auth）
app.use('/api/auth', authRoutes);

// 启动服务器
app.listen(port, () => {
  console.log(`后端服务运行在：http://localhost:${port}`);
});