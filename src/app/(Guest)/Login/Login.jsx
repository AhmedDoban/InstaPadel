import Image from "next/image";
import "./Login.css";
import Link from "next/link";

function Login() {
  return (
    <div className="Login">
      <div className="container">
        <div className="BallBox">
          <Image src="/favicon.png" width={60} height={60} alt="Logo" />
          <div className="loginBox">
            <h1>Login</h1>
            <div className="input-box">
              <label htmlFor="PhoneNumber">
                <i className="fa-solid fa-phone"></i>
              </label>
              <input
                type="tel"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="Phone number"
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">
                <i className="fa-solid fa-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <i className="fa-solid fa-eye"></i>
            </div>
            <div className="remember-me">
              <input type="checkbox" name="RememberMe" id="RememberMe" hidden />
              <label htmlFor="RememberMe">Remember me</label>
              <Link href="/ForgotPassword">Forgot Password?</Link>
            </div>
            <div className="Action-button">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
