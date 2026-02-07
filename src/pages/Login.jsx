import Navbar from '../components/Navbar';
import './Login.css';

export default function Login() {
  return (
    <div className="login-page">
      <Navbar />
      <div className="login-wrapper">
        <div className="login-card">
          <h2>智能情绪日记 - 登录</h2>
          <div className="input-group">
            <input type="text" placeholder="请输入账号" className="input-item" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="请输入密码" className="input-item" />
          </div>
          <button className="login-submit">登录</button>
          <p className="to-register">没有账号？去注册</p >
        </div>
      </div>
    </div>
  );
}
