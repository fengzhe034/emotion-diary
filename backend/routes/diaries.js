// routes/diaries.js
const express = require('express');
const router = express.Router();
const diaryController = require('../controllers/diaryController');

// 获取所有日记
router.get('/', diaryController.getAllDiaries);

// 创建日记
router.post('/', diaryController.createDiary);

// 更新日记
router.put('/:id', diaryController.updateDiary);

// 删除日记
router.delete('/:id', diaryController.deleteDiary);

module.exports = router;