import { useParams, useNavigate } from "react-router-dom";
import "./ArtistPage.css";
import Footer from "./Footer";

const artistData = {
  "A.R.Rahman": {
    img: "https://www.deccanchronicle.com/h-upload/2026/01/06/1997067-rahman.jpg",
    listeners: "32,456,789 monthly listeners",
    about:
      "A.R. Rahman is an Indian composer, singer and music producer known for blending classical Indian music with electronic sounds.",
    songs: [
      {
        title: "Jai Ho",
        file: "Jaiho.mp3",
        img: "https://m.media-amazon.com/images/M/MV5BZjE2OTg3OTItOGZhMi00MjIxLThiMTMtMmE0Zjg2MzFhOThjXkEyXkFqcGc@._V1_.jpg"
      },
      {
        title: "Aauyirea",
        file: "Aauyirea.mp3",
        img: "https://i.scdn.co/image/ab67616d0000b273e3aa55e80ac80eb120076775"
      },
      {
        title: "Newyork Nagaram",
        file: "Newyork Nagaram.mp3",
        img: "https://i.ytimg.com/vi/rxp_zOtY-IA/maxresdefault.jpg"
      }
    ]
  },

  "Harris Jayaraj": {
    img: "https://th.bing.com/th/id/OIP.Ho7NsKHv_8KHnRaaDXSv2wHaFj",
    listeners: "18,200,432 monthly listeners",
    about:
      "Harris Jayaraj is an Indian film music composer best known for melodic and romantic Tamil songs.",
    songs: [
      {
        title: "Adiye Kolluthey",
        file: "adiyekolluthey.mp3",
        img: "https://wallpapers.com/images/hd/vaaranam-aayiram-meghna-leaning-on-surya-poster-himzhhhig1wy3y4w.jpg"
      },
      {
        title: "Ava Enna",
        file: "avaenna.mp3",
        img: "https://masstamilan.sbs/upload_file/19/49/117x117/thumb_672ef288a32ad.webp"
      },
      {
        title: "Nangaai",
        file: "Nangaai.mp3",
        img: "https://tamillyrics143.com/wp-content/uploads/2019/07/Nangaai-Song-Lyrics-1024x576.jpg"
      }
    ]
  },

  "The Weeknd": {
    img: "https://tse3.mm.bing.net/th/id/OIP.KeIwYhRqStCBZVQBhR7NawHaEJ?cb=defcache2&pid=ImgDet&defcache=1&w=474&h=265&rs=1&o=7&rm=3",
    listeners: "45,123,456 monthly listeners",
    about:
      "The Weeknd is a Canadian singer, songwriter, and record producer known for his genre-blending style of R&B, pop, and electronic music.",
    songs: [
      {
        title: "Blinding Lights",
        file: "Blinding Lights.mp3",
        img: "https://tse4.mm.bing.net/th/id/OIP.aESN9ZbNP7ugzKm65zK3ZwHaHa?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        title: "Save Your Tears",
        file: "Save Your Tears.mp3",
        img: "https://www.bestinnewmusic.com/wp-content/uploads/2021/01/The-Weeknd-Save-Your-Tears-Video.jpg"
      },
      {
        title: "Starboy",
        file: "Starboy.mp3",
        img: "https://audio.com/s3w/audio.com.static/audio/image/13/73/1816348665517313-1816348927193201.jpeg@256?qlt=75"
      }
    ]
  },

  "Anirudh Ravichander": {
    img: "https://dubaitravelator.com/wp-content/themes/directorypress/thumbs/Anirudh-Ravichander-Live-in-Dubai.jpg",
    listeners: "28,765,432 monthly listeners",
    about:
      "Anirudh Ravichander is an Indian film composer and singer, known for his work in Tamil cinema and for blending western music with Indian sounds.",
    songs: [
      {
        title: "Why This Kolaveri Di",
        file: "Why This Kolaveri Di.mp3",
        img: "https://tse1.mm.bing.net/th/id/OIP.9q8-PBeodfTm0cOFE01i0gHaHa?cb=defcache2defcache=1&w=1200&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        title: "Kanave Kanave",
        file: "Kanave Kanave.mp3",
        img: "https://www.pagaiworld.com/covers/kanave-kanave_4.jpg"
      },
      {
        title: "Aathi",
        file: "Aathi.mp3",
        img: "https://i.ytimg.com/vi/YQ6ShcAU_dQ/maxresdefault.jpg"
      }
    ]
  }
};


const featuringPlaylists = {
  "A.R.Rahman": [
    {
      id: 1,
      title: "This is A.R. Rahman",
      desc: "Essential tracks",
      img: "https://a10.gaanacdn.com/images/playlists/1/13643901/crop_480x480_13643901_1505205562.jpg"
    },
    {
      id: 2,
      title: "Trending Now India",
      desc: "Every track you should listen",
      img: "https://lh3.googleusercontent.com/N35MSROki4DnYbWbS_pYRJ_QAgDNaOJDT5kDbOop03xVOSL2cFGQOl4bai-s7Y3ZlpsArl02QL2HmYS8Uw=w544-h544-l90-rj"
    },
    {
      id: 3,
      title: "Valentine's Hits",
      desc: "India’s love playlist",
      img: "https://a10.gaanacdn.com/gn_pl_img/playlists/qaLKY623pO/LKYApppaKp/size_l_1740697065.jpg"
    },
    {
      id: 4,
      title: "Top Chart Hits",
      desc: "Most popular tracks",
      img: "https://a10.gaanacdn.com/gn_pl_img/playlists/ZaP37OR3Dy/P37N8RBRKD/size_l_1740639976.jpg"
    }
  ],

  "Harris Jayaraj": [
    {
      id: 1,
      title: "This is Harris Jayaraj",
      desc: "Essential Tamil hits",
      img: "https://is1-ssl.mzstatic.com/image/thumb/Music117/v4/42/d1/dd/42d1dd5c-f189-fa04-8178-cdab7d416605/886446516349.jpg/1200x1200bf-60.jpg"
    },
    {
      id: 2,
      title: "Trending Now",
      desc: "Popular Tamil songs",
      img: "https://a10.gaanacdn.com/gn_pl_img/playlists/YoEWlwa3zX/EWloLrez3z/size_l_1738193507.jpg"
    },
    {
      id: 3,
      title: "Romantic Hits",
      desc: "Love songs by Harris Jayaraj",
      img: "https://dev-resws.hungamatech.com/featured_content/700575b0a6205b353f96796a2bafc5d6_500x500.jpg"
    },
    {
      id: 4,
      title: "Party Hits",
      desc: "High-energy tracks",
      img: "https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDlbnL8/AJbDVak03n/size_m_1751545254.jpg"
    }
  ],

  "The Weeknd": [
    {
      id: 1,
      title: "This is The Weeknd",
      desc: "All essential hits",
      img: "https://tse2.mm.bing.net/th/id/OIP.vOYH7iDr1kwL7sts6vwYFgHaHa?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 2,
      title: "Top Hits",
      desc: "Most popular worldwide",
      img: "https://th.bing.com/th/id/OIP.1y2Rt6eMTI7yMb7Ll6mTowAAAA?o=7&cb=defcache2rm=3&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 3,
      title: "Chill Vibes",
      desc: "Relaxing tracks",
      img: "https://tse3.mm.bing.net/th/id/OIP.aQ6fQDFSZ2uP7lM52I2eKwHaHa?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 4,
      title: "Trending Now",
      desc: "Songs everyone is listening to",
      img: "https://mosaic.scdn.co/640/ab67616d00001e02101e909acefe25af9b1af525ab67616d00001e024718e2b124f79258be7bc452ab67616d00001e02b298538481c52f7e217ed000ab67616d00001e02e5e19455ff5f76c58048bea8"
    }
  ],

  "Anirudh Ravichander": [
    {
      id: 1,
      title: "This is Anirudh",
      desc: "Essential Tamil hits",
      img: "https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDlbnL8/JbDEyMllKn/size_l_1740696918.jpg"
    },
    {
      id: 2,
      title: "Trending Now India",
      desc: "Popular tracks",
      img: "https://a10.gaanacdn.com/gn_pl_img/playlists/JD2KJAbOLw/2KJweqYl3O/size_l_1739188180.jpg"
    },
    {
      id: 3,
      title: "Party Hits",
      desc: "High-energy tracks",
      img: "https://a10.gaanacdn.com/gn_pl_img/playlists/01A3mar3NQ/A3mBXPJeWN/size_l_1699612706.jpg"
    },
    {
      id: 4,
      title: "Romantic Hits",
      desc: "Love songs",
      img: "https://a10.gaanacdn.com/gn_pl_img/playlists/Bp1bAynb02/1bANPewgK0/size_l_1515083204.jpg"
    }
  ]
};

export default function ArtistPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const artist = artistData[name];

  const playlists = featuringPlaylists[name] || [];

  if (!artist) {
    return <h2 style={{ color: "white" }}>Artist not found</h2>;
  }

  return (
    <div className="artist-page">
      {/* HEADER */}
      <div className="artist-header" style={{ backgroundImage: `url(${artist.img})` }}>
        <div className="overlay">
          <span className="verified">✔ Verified Artist</span>
          <h1>{name}</h1>
          <p>{artist.listeners}</p>
        </div>
      </div>

      {/* SONG LIST */}
      <div className="songs-list">
        <h2>Popular</h2>
        {artist.songs.map((song, index) => (
          <div
            key={index}
            className="song-row"
            onClick={() =>
              navigate("/player", {
                state: {
                  title: song.title,
                  artist: name,
                  img: song.img,
                  url: `/songs/${song.file}`
                }
              })
            }
          >
            <span className="song-index">{index + 1}</span>
            <img src={song.img} alt={song.title} className="song-thumb" />
            <span className="song-title">{song.title}</span>
          </div>
        ))}
      </div>

      {/* FEATURING */}
      <div className="featuring">
        <h2>Featuring {name}</h2>
        <div>
          {playlists.map((playlist) => (
            <div key={playlist.id}>
              <img src={playlist.img} alt={playlist.title} />
              <h3>{playlist.title}</h3>
              <p>{playlist.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div className="about-card">
        <div className="about-img-wrapper">
          <img src={artist.img} alt={name} className="about-img" />
          <div className="about-overlay">
            <h3>{name}</h3>
            <p className="followers">{artist.listeners}</p>
            <p className="about-text">{artist.about}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
