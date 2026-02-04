import React from "react";
import "./PodcastPage.css";

export default function PodcastsPage() {
  const podcasts = ["Tech Talks", "Music Daily", "News Hour", "Fitness Weekly"];

  return (
    <div className="podcasts-page">
      <h2>Browse Podcasts</h2>
      <p>Find and follow your favorite podcasts!</p>

      <div className="podcast-list">
        {podcasts.map((p, i) => (
          <div key={i} className="podcast-item">
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}
