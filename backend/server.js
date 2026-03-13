// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

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
});