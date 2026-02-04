import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      <h1>Sign up for SHAMUZIC</h1>

      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="What should we call you?" />

      <button className="signup-btn-main">
        Sign Up
      </button>

      <p className="login-text">
        Already have an account?
        <span onClick={() => navigate("/login")}>
          Log in
        </span>
      </p>
    </div>
  );
}
