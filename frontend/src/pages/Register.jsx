import Navbar from "../components/Navbar";
import './Register.css';

export default function Register(){
  return (
    <div className="register-page">
      <Navbar/>
      <div className="register-wrapper">
        <div className="register-card">
          <h2>智能情绪日记 - 注册</h2>
          <div className="input-group">
            <input type="text" placeholder="请输入账号" className="input-item"/>
          </div>
          <div className="input-group">
            <input type="password" placeholder="请输入密码" className="input-item"/>
          </div>
          <div className="input-group">
            <input type="password" placeholder="确认密码" className="input-item"/>
          </div>
          <button className="register-submit">注册</button>
          <p className="to-login">已有账号？去登录</p >
        </div>
      </div>
    </div>
  );
}
