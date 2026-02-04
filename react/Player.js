
import { useLocation } from "react-router-dom";
import "./Player.css";

export default function Player() {
  const { state } = useLocation();

  if (!state) {
    return <h2 style={{ color: "white" }}>No song selected</h2>;
  }

  return (
    <div className="player-full">

      <img
        src={state.img}
        alt={state.title}
        className="player-cover"
      />

      <h1 className="player-title">{state.title}</h1>
      <p className="player-artist">{state.artist}</p>

      <audio
        src={state.url}
        controls
        autoPlay
        controlsList="nodownload"
      />

      <div style={{ height: "800px" }} />
    </div>
  );
}
