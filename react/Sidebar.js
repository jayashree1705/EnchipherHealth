import "./Sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">
      <h4>Your Library <span>+</span></h4>

        <div className="box">
        <Link to="/create-playlist" style={{ textDecoration: "none", color: "inherit" }}>
          <h5>Create your first playlist</h5>
          <button>Create Playlist</button>
        </Link>
      </div>

      <div className="box">
  <Link to="/podcasts" style={{ textDecoration: "none", color: "inherit" }}>
    <h5>Let's find some podcasts to follow</h5>
    <button>Browse Podcasts</button>
  </Link>
</div>

      <div className="sidebar-footer">
        <p>Legal · Privacy · Cookies</p>
        <button className="lang">🌐 English</button>
      </div>
    </div>
  );
}
