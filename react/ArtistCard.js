import "./ArtistCard.css";
import { useNavigate } from "react-router-dom";

export default function ArtistCard({ artist }) {
  const navigate = useNavigate();

  return (
    <div
      className="artist-card"
      onClick={() => navigate(`/artist/${artist.name}`)}
    >
      <div className="img-wrap">
        <img src={artist.img} alt={artist.name} />

        <button
          className="play-btn"
          onClick={(e) => e.stopPropagation()}
        >
          ▶
        </button>
      </div>

      <h4>{artist.name}</h4>
      <p>Artist</p>
    </div>
  );
}
