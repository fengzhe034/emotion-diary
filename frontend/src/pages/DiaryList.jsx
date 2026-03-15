// pages/DiaryList.jsx
import React, { useState } from 'react';
// 引入你已经建好的图表组件
import Chart from '../components/Chart'; 

function DiaryList() {
  // 1. 定义日记列表数据（模拟数据，后续可对接后端）
  const [diaryList] = useState([
    { id: 1, date: '2026-03-10', content: '今天去公园散步了，心情特别好～', emotion: '开心', emotionColor: '#67C23A' },
    { id: 2, date: '2026-03-09', content: '有点小难过，和朋友闹了点小矛盾', emotion: '难过', emotionColor: '#909399' },
    { id: 3, date: '2026-03-08', content: '完成了一个小任务，超有成就感！', emotion: '兴奋', emotionColor: '#E6A23C' }
  ]);

  return (
    <div className="diary-list-page" style={{ 
      width: '80%', 
      margin: '20px auto', 
      fontFamily: 'Microsoft YaHei, 微软雅黑' 
    }}>
      {/* 页面标题 */}
      <h1>我的情绪日记</h1>

      {/* 日记列表区域 */}
      <div className="diary-list" style={{ margin: '20px 0' }}>
        {/* 遍历显示日记 */}
        {diaryList.length > 0 ? (
          diaryList.map(diary => (
            <div key={diary.id} className="diary-item" style={{
              border: '1px solid #eee',
              padding: '15px',
              margin: '10px 0',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              <div className="diary-date" style={{ 
                color: '#666', 
                fontSize: '14px', 
                marginBottom: '8px' 
              }}>
                {diary.date}
              </div>
              <div className="diary-content" style={{ 
                fontSize: '16px', 
                marginBottom: '8px' 
              }}>
                {diary.content}
              </div>
              <div className="emotion-tag" style={{
                display: 'inline-block',
                padding: '4px 10px',
                borderRadius: '20px',
                color: 'white',
                fontSize: '12px',
                backgroundColor: diary.emotionColor
              }}>
                {diary.emotion}
              </div>
            </div>
          ))
        ) : (
          // 无日记时显示提示
          <div className="no-diary" style={{ 
            textAlign: 'center', 
            color: '#999', 
            padding: '20px' 
          }}>
            还没有写日记哦，快去记录你的心情吧～
          </div>
        )}
      </div>

      {/* 嵌入情绪图表组件 */}
      <Chart diaryList={diaryList} />
    </div>
  );
}

export default DiaryList;