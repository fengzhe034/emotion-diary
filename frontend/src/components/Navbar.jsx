import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">情感日记</div>
      <div className="nav-menu">
        <span>情绪记录</span>
        <span>情绪分析</span>
        <span>情绪趋势</span>
        <span>触发因素</span>
        <span>CBT</span>
      </div>
    </div>
  );
}
