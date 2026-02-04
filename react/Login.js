import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        
        <h1 className="logo">Shamuzic</h1>

        
        <button className="loginbtn google">Continue with Google</button>
        <button className="loginbtn facebook">Continue with Facebook</button>
        <button className="loginbtn apple">Continue with Apple</button>

        <div className="divider"><span>OR</span></div>

     
        <input type="text" placeholder="Email or username" />
        <input type="password" placeholder="Password" />
        <button className="loginbtn green">Log In</button>

        <p className="forgot">Forgot your password?</p>

        <hr />

        <p className="signup">
          Don’t have an account? <span>Sign up for Spotify</span>
        </p>
      </div>
    </div>
  );
}
