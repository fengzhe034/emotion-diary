# 智能情绪日记应用

一个基于 React + Node.js + MongoDB 的全栈情绪日记应用，帮助用户记录和分析情绪变化。

## 功能特性

- 🔐 用户注册和登录
- 📝 创建和编辑情绪日记
- 😊 情绪选择器（开心、平静、焦虑、难过、愤怒、疲惫）
- 📊 情绪统计和数据可视化
- 📱 响应式设计

## 技术栈

### 前端
- React 19
- React Router DOM
- Vite (构建工具)
- CSS Modules

### 后端
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT 身份验证
- bcryptjs 密码加密

## 快速开始

### 环境要求
- Node.js 16+
- MongoDB 4.0+
- npm 或 yarn

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd emotion-diary
   ```

2. **安装后端依赖**
   ```bash
   cd emotion-diary/backend
   npm install
   ```

3. **安装前端依赖**
   ```bash
   cd ../frontend
   npm install
   ```

4. **启动 MongoDB**
   确保 MongoDB 在本地运行，默认连接到 `mongodb://localhost:27017/emotion-diary`

5. **启动后端服务器**
   ```bash
   cd ../backend
   npm start
   # 或直接运行
   node server.js
   ```
   后端将在 http://localhost:3001 运行

6. **启动前端开发服务器**
   ```bash
   cd ../frontend
   npm run dev
   ```
   前端将在 http://localhost:5174 运行

## API 文档

### 认证接口

#### 注册
```
POST /api/auth/register
Content-Type: application/json

{
  "username": "用户名",
  "email": "邮箱",
  "password": "密码"
}
```

#### 登录
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "邮箱",
  "password": "密码"
}
```

### 日记接口

所有日记接口都需要在请求头中包含 JWT token：
```
Authorization: Bearer <token>
```

#### 获取日记列表
```
GET /api/diaries
```

#### 创建日记
```
POST /api/diaries
Content-Type: application/json

{
  "title": "日记标题",
  "content": "日记内容",
  "mood": "情绪"
}
```

#### 更新日记
```
PUT /api/diaries/:id
Content-Type: application/json

{
  "title": "新标题",
  "content": "新内容",
  "mood": "新情绪"
}
```

#### 删除日记
```
DELETE /api/diaries/:id
```

## 项目结构

```
emotion-diary/
├── backend/                 # 后端代码
│   ├── controllers/         # 控制器
│   │   ├── authController.js
│   │   └── diaryController.js
│   ├── middleware/          # 中间件
│   │   └── auth.js
│   ├── models/              # 数据模型
│   │   ├── User.js
│   │   └── Diary.js
│   ├── routes/              # 路由
│   │   ├── auth.js
│   │   └── diaries.js
│   ├── package.json
│   └── server.js
├── frontend/                # 前端代码
│   ├── public/
│   ├── src/
│   │   ├── components/      # 组件
│   │   │   ├── Navbar.jsx
│   │   │   ├── MoodSelector.jsx
│   │   │   └── Chart.jsx
│   │   ├── contexts/        # React Context
│   │   │   └── AuthContext.jsx
│   │   ├── pages/           # 页面组件
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── DiaryList.jsx
│   │   │   ├── DiaryEdit.jsx
│   │   │   └── Stats.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 开发说明

### 后端开发
- JWT 密钥在代码中硬编码为 `zhaozheng_jwt_secret`，生产环境应使用环境变量
- MongoDB 连接字符串也应配置为环境变量

### 前端开发
- 使用 React Hooks 进行状态管理
- 认证状态通过 React Context 管理
- API 调用使用原生 fetch

## 部署

### 生产环境配置
1. 设置环境变量：
   - `JWT_SECRET`: JWT 签名密钥
   - `MONGODB_URI`: MongoDB 连接字符串
   - `PORT`: 服务器端口

2. 构建前端：
   ```bash
   cd frontend
   npm run build
   ```

3. 配置生产服务器（nginx, PM2 等）提供静态文件和 API 服务

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
