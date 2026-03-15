// components/MoodSelector.jsx
import React from 'react';

function MoodSelector({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="happy">开心</option>
      <option value="calm">平静</option>
      <option value="sad">难过</option>
      <option value="angry">生气</option>
      <option value="anxious">焦虑</option>
    </select>
  );
}

export default MoodSelector;

// pages/DiaryEdit.jsx
import React, { useState } from 'react';
import MoodSelector from '../components/MoodSelector';

function DiaryEdit() {
  const [mood, setMood] = useState('happy');
  const [content, setContent] = useState('');

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加保存日记的逻辑
    alert(`情绪：${mood}\n内容：${content}`);
  };

  return (
    <div>
      <h2>写日记</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>选择你的情绪：</label>
          <MoodSelector value={mood} onChange={handleMoodChange} />
        </div>
        <div>
          <label>日记内容：</label>
          <textarea
            value={content}
            onChange={handleContentChange}
            rows={5}
            cols={40}
            placeholder="写下你的心情吧..."
          />
        </div>
        <button type="submit">保存</button>
      </form>
    </div>
  );
}
export default DiaryEdit;