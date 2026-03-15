// pages/DiaryEdit.jsx
import React, { useState } from "react";
import MoodSelector from "../components/MoodSelector";

function DiaryEdit() {
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("开心");

  // 处理心情选择变化
  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  // 处理日记内容变化
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // 处理提交
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`心情：${mood}\n日记内容：${content}`);
    // 这里可以添加保存逻辑
  };

  return (
    <div>
      <h2>编辑日记</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>心情：</label>
          <MoodSelector value={mood} onChange={handleMoodChange} />
        </div>
        <div>
          <label>日记内容：</label>
          <br />
          <textarea
            value={content}
            onChange={handleContentChange}
            rows={6}
            cols={40}
            placeholder="请输入你的日记..."
          />
        </div>
        <button type="submit">保存</button>
      </form>
    </div>
  );
}

export default DiaryEdit;