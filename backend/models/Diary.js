const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
  title: {
    type: String,
    default: '无标题'
  },
  content: {
    type: String,
    required: true
  },
  mood: {
    type: String,
    default: '一般'
  },
  userId: {
    type: String,
    default: 'anonymous'
  }
}, {
  timestamps: true
});

const Diary = mongoose.model('Diary', diarySchema);

module.exports = Diary;