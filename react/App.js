import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ArtistPage from "./components/ArtistPage";
import "./App.css";
import Login from "./components/Login";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import Premium from "./pages/Premium";
import CreatePlaylist from "./components/CreatePlaylist";
import PodcastPage from "./components/PodcastPage";
function App() {;
  return (
    <>
      <Navbar />
      <div className="content-layout">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist/:name" element={<ArtistPage />} />
          <Route path="/player" element={<Player />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/create-playlist" element={<CreatePlaylist />} />
          <Route path="/podcasts" element={<PodcastPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
