// components/MoodSelector.jsx
function MoodSelector({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="开心">开心</option>
      <option value="平静">平静</option>
      <option value="难过">难过</option>
    </select>
  );
}

export default MoodSelector;