import ArtistCard from "../components/ArtistCard";
import Footer from "../components/Footer";
import "./Home.css";
const artists = [
  { name: "A.R.Rahman", img: "https://www.deccanchronicle.com/h-upload/2026/01/06/1997067-rahman.jpg"},
  { name: "Harris Jayaraj", img: "https://varnam.my/wp-content/uploads/2024/01/Harris-Jayaraj.webp"},
  { name: "Anirudh Ravichander", img: "https://dubaitravelator.com/wp-content/themes/directorypress/thumbs/Anirudh-Ravichander-Live-in-Dubai.jpg" },
  { name: "The Weeknd", img: "https://www.rollingstone.com/wp-content/uploads/2024/04/The-Weeknd-gaza-fund.jpg?w=1581&h=1054&crop=1" },
   { name: "A.R.Rahman", img: "https://www.deccanchronicle.com/h-upload/2026/01/06/1997067-rahman.jpg"},
  { name: "Harris Jayaraj", img: "https://varnam.my/wp-content/uploads/2024/01/Harris-Jayaraj.webp"},
  { name: "Anirudh Ravichander", img: "https://dubaitravelator.com/wp-content/themes/directorypress/thumbs/Anirudh-Ravichander-Live-in-Dubai.jpg" },
  { name: "The Weeknd", img: "https://www.rollingstone.com/wp-content/uploads/2024/04/The-Weeknd-gaza-fund.jpg?w=1581&h=1054&crop=1"},
   { name: "A.R.Rahman", img: "https://www.deccanchronicle.com/h-upload/2026/01/06/1997067-rahman.jpg"},
  { name: "Harris Jayaraj", img: "https://varnam.my/wp-content/uploads/2024/01/Harris-Jayaraj.webp" },
  { name: "Anirudh Ravichander", img: "https://dubaitravelator.com/wp-content/themes/directorypress/thumbs/Anirudh-Ravichander-Live-in-Dubai.jpg" },
  { name: "The Weeknd", img: "https://www.rollingstone.com/wp-content/uploads/2024/04/The-Weeknd-gaza-fund.jpg?w=1581&h=1054&crop=1"},
  
];

export default function Home() {
  return (
    <div className="home">
      <h2>Popular Artists</h2>

      <div className="artist-row">
        {artists.map((a) => (
          <ArtistCard key={a.name} artist={a} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
