// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // 添加其他字段如email等
});

module.exports = mongoose.model('User', userSchema);