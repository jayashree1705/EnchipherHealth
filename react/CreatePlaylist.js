import React, { useState } from "react";

export default function CreatePlaylistPage() {
  const [playlists, setPlaylists] = useState([]);

  const createPlaylist = () => {
    const id = playlists.length + 1;
    setPlaylists([...playlists, { id, name: `My Playlist ${id}` }]);
  };

  return (
    <div>
      <h2>Create Playlist</h2>
      <button onClick={createPlaylist} style={{ marginBottom: 20, padding: "6px 12px", borderRadius: 12, background: "#1db954", color: "white" }}>
        Create Playlist
      </button>

      {playlists.map((p) => (
        <div key={p.id} style={{ background: "#242424", padding: 10, marginBottom: 10, borderRadius: 8 }}>
          {p.name}
        </div>
      ))}
    </div>
  );
}
