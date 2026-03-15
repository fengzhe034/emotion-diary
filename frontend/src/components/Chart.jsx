// components/Chart.jsx
import React from 'react';

function Chart({ diaryList }) {
  // 统计不同情绪的数量
  const emotionCount = {
    开心: diaryList.filter(item => item.emotion === '开心').length,
    难过: diaryList.filter(item => item.emotion === '难过').length,
    兴奋: diaryList.filter(item => item.emotion === '兴奋').length
  };

  return (
    <div className="emotion-chart" style={{
      marginTop: '30px',
      paddingTop: '20px',
      borderTop: '1px dashed #eee'
    }}>
      <h3>近期情绪统计</h3>
      <div className="chart-placeholder" style={{
        textAlign: 'center',
        padding: '30px',
        color: '#666',
        fontSize: '18px'
      }}>
        📊 情绪分布：
        开心 {emotionCount.开心} 次 |
        难过 {emotionCount.难过} 次 |
        兴奋 {emotionCount.兴奋} 次
      </div>
    </div>
  );
}

export default Chart;