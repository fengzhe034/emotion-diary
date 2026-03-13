<<<<<<< HEAD
// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import DiaryEdit from './pages/DiaryEdit';
import DiaryList from './pages/DiaryList';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/diary-edit" element={<DiaryEdit />} />
        <Route path="/diary-list" element={<DiaryList />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/" element={<DiaryList />} /> {/* 默认页面 */}
      </Routes>
    </Router>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 把里面的内容改成：
function App() {
  return (
    <div>
      <h1>情绪日记项目</h1>
      <p>我是前端组：[Djzy]</p>
      <p>项目已成功运行！</p>
    </div>
  )
}

export default App
>>>>>>> f12fe337ef1200e36727eb0e174faf5a8e552401
