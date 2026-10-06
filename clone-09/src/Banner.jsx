import { useState, useEffect } from 'react';
import axios from 'axios';

function Banner() {
  const [movie, setMovie] = useState({
    title: "MONEY HEIST",
    overview:
      "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    backdrop_path: "https://preview.redd.it/some-of-the-hotstar-releases-of-2024-l-loved-karmaa-calling-v0-qjiel6h8669e1.jpeg?width=1080&crop=smart&auto=webp&s=86bd79071183cadcd5248ce94bfc35a0559866ad"
  });

  useEffect(() => {
    const API_URL = "https://api.themoviedb.org/3/trending/all/week?api_key=4f298a53e5522830c82f789f0e024145&language=en-US";

    axios
      .get(API_URL)
      .then((response) => {
        const results = response.data?.results || [];
        if (results.length > 0) {
          const randomMovie = results[Math.floor(Math.random() * results.length)];
          if (randomMovie.backdrop_path) {
            setMovie({
              title: randomMovie.title || randomMovie.name || randomMovie.original_name,
              overview: randomMovie.overview,
              backdrop_path: `https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`
            });
          }
        }
      })
      .catch((error) => {
        console.log("Using backup background image", error);
      });
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.85)), url("${movie.backdrop_path}")`
      }}
    >
      <div className="banner__contents">
        <div className="banner__badge">
          <span className="netflix-n-badge">HOT</span>
          <span className="badge-series-text">SERIES</span>
        </div>

        <h1 className="banner__title">{movie.title}</h1>

        <div className="banner__buttons">
          <button className="banner__button banner__button--play">▶ Play</button>
          <button className="banner__button banner__button--info">ℹ More Info</button>
        </div>

        <p className="banner__description">
          {movie.overview ? movie.overview.slice(0, 160) + "..." : ""}
        </p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;