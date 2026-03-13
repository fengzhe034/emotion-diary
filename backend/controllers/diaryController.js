// controllers/diaryController.js
const Diary = require('../models/Diary');

// 获取所有日记
exports.getAllDiaries = async (req, res) => {
  try {
    const diaries = await Diary.find();
    res.json(diaries);
  } catch (error) {
    res.status(500).json({ message: '获取日记失败', error });
  }
};

// 创建日记
exports.createDiary = async (req, res) => {
  try {
    const { title, content, mood, userId } = req.body;
    const diary = new Diary({ title, content, mood, userId });
    await diary.save();
    res.status(201).json(diary);
  } catch (error) {
    res.status(500).json({ message: '创建日记失败', error });
  }
};

// 更新日记
exports.updateDiary = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const diary = await Diary.findByIdAndUpdate(id, updates, { new: true });
    res.json(diary);
  } catch (error) {
    res.status(500).json({ message: '更新日记失败', error });
  }
};

// 删除日记
exports.deleteDiary = async (req, res) => {
  try {
    const { id } = req.params;
    await Diary.findByIdAndDelete(id);
    res.json({ message: '删除成功' });
  } catch (error) {
    res.status(500).json({ message: '删除日记失败', error });
  }
};