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

