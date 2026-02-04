import "./Navbar.css";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">SHAMUZIC</div>
      <div className="home-icon" onClick={() => navigate("/")}>
  <FiHome size={22} />
</div>
      <div className="nav-links">
        <input
          className="search"
          placeholder="What do you want to play?"
        />

        <button
          className="premium-btn"
          onClick={() => navigate("/premium")}
        >
          Premium
        </button>
        <button
          className="install-btn"
          onClick={() => window.open("https://www.spotify.com/download", "_blank")}
        >
          Install App
        </button>

        <button
          className="signup-btn"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>
        <button
          onClick={() => navigate("/login")}
          className="login-btn"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
