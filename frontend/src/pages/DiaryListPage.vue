<template>
  <!-- 这是页面的结构：标题 + 日记列表 -->
  <div class="diary-list-page">
    <!-- 页面标题 -->
    <h1>我的情绪日记</h1>
    
    <!-- 日记列表区域 -->
    <div class="diary-list">
      <!-- 单个日记项（示例） -->
      <div class="diary-item" v-for="diary in diaryList" :key="diary.id">
        <!-- 日记日期 -->
        <div class="diary-date">{{ diary.date }}</div>
        <!-- 日记内容 -->
        <div class="diary-content">{{ diary.content }}</div>
        <!-- 情绪标签 -->
        <div class="emotion-tag" :style="{ backgroundColor: diary.emotionColor }">
          {{ diary.emotion }}
        </div>
      </div>

      <!-- 如果没有日记时显示 -->
      <div class="no-diary" v-if="diaryList.length === 0">
        还没有写日记哦，快去记录你的心情吧～
      </div>
    </div>

    <!-- 简单的情绪图表区域（先留位置，后续完善） -->
    <div class="emotion-chart">
      <h3>近期情绪统计</h3>
      <!-- 这里后续会加图表代码 -->
      <div class="chart-placeholder">📊 情绪图表位置</div>
    </div>
  </div>
</template>

<script>
// 这是页面的逻辑：数据和功能
export default {
  // 组件名称
  name: 'DiaryListPage',
  // 页面的初始数据
  data() {
    return {
      // 日记列表数据（示例）
      diaryList: [
        { id: 1, date: '2026-03-10', content: '今天去公园散步了，心情特别好～', emotion: '开心', emotionColor: '#67C23A' },
        { id: 2, date: '2026-03-09', content: '有点小难过，和朋友闹了点小矛盾', emotion: '难过', emotionColor: '#909399' },
        { id: 3, date: '2026-03-08', content: '完成了一个小任务，超有成就感！', emotion: '兴奋', emotionColor: '#E6A23C' }
      ]
    };
  }
};
</script>

<style scoped>
/* 这是页面的样式：控制外观 */
.diary-list-page {
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  font-family: "Microsoft YaHei", 微软雅黑;
}

/* 日记列表样式 */
.diary-list {
  margin: 20px 0;
}

/* 单个日记项样式 */
.diary-item {
  border: 1px solid #eee;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

/* 日记日期样式 */
.diary-date {
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}

/* 日记内容样式 */
.diary-content {
  font-size: 16px;
  margin-bottom: 8px;
}

/* 情绪标签样式 */
.emotion-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  color: white;
  font-size: 12px;
}

/* 无日记提示样式 */
.no-diary {
  text-align: center;
  color: #999;
  padding: 20px;
}

/* 图表区域样式 */
.emotion-chart {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px dashed #eee;
}

/* 图表占位符样式 */
.chart-placeholder {
  text-align: center;
  padding: 30px;
  color: #666;
  font-size: 18px;
}
</style>