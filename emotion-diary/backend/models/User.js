const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 用户数据结构
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: [true, '用户名不能为空'], 
    unique: true, 
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, '邮箱不能为空'], 
    unique: true, 
    trim: true, 
    lowercase: true 
  },
  password: { 
    type: String, 
    required: [true, '密码不能为空'], 
    minlength: 6 
  }
}, { timestamps: true });

// ✨ 修复：适配新版 Mongoose 的密码加密中间件（去掉 next 回调）
userSchema.pre('save', async function() {
  // 只有密码修改时才加密（新增/修改密码都生效）
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

// 验证密码方法
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// 导出模型
module.exports = mongoose.model('User', userSchema);