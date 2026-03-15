// pages/Stats.jsx
import React, { useState } from 'react';
import Chart from '../components/Chart';

function Stats() {
  // 复用和列表页一样的模拟数据（后续可从全局状态获取）
  const [diaryList] = useState([
    { id: 1, date: '2026-03-10', content: '今天去公园散步了，心情特别好～', emotion: '开心', emotionColor: '#67C23A' },
    { id: 2, date: '2026-03-09', content: '有点小难过，和朋友闹了点小矛盾', emotion: '难过', emotionColor: '#909399' },
    { id: 3, date: '2026-03-08', content: '完成了一个小任务，超有成就感！', emotion: '兴奋', emotionColor: '#E6A23C' }
  ]);

  return (
    <div className="stats-page" style={{ 
      width: '80%', 
      margin: '20px auto', 
      fontFamily: 'Microsoft YaHei' 
    }}>
      <h1>情绪统计</h1>
      <Chart diaryList={diaryList} />
    </div>
  );
}

export default Stats;