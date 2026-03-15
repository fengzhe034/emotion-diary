const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// 清除Diary模型缓存
delete require.cache[require.resolve('../models/Diary')];
const Diary = require('../models/Diary');

// 简单的测试路由
router.post('/simple', (req, res) => {
  console.log('收到简单POST请求:', req.body);
  res.json({ message: '简单POST成功', received: req.body });
});

// 创建日记
router.post('/', auth, async (req, res) => {
  try {
    console.log('收到创建日记请求:', req.body);
    const { title, content, mood } = req.body;

    const diary = new Diary({
      title: title || '无标题',
      content,
      mood: mood || '一般',
      userId: req.user._id
    });

    const savedDiary = await diary.save();
    console.log('数据库保存成功');
    res.status(201).json(savedDiary);
  } catch (err) {
    console.error('保存失败:', err);
    res.status(500).json({ message: '创建日记失败', error: err.message });
  }
});

// 获取我的日记
router.get('/', auth, async (req, res) => {
  try {
    const diaries = await Diary.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(diaries);
  } catch (err) {
    res.status(500).json({ message: '获取日记失败', error: err.message });
  }
});

module.exports = router;