import { useState, useEffect } from 'react';
import axios from 'axios';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, movies: initialMovies = [], fetchUrl }) {
  const [movies, setMovies] = useState(initialMovies);

  useEffect(() => {
    // Agar API URL mila hai toh fetch karo
    if (fetchUrl) {
      axios
        .get(fetchUrl)
        .then((response) => {
          const results = response.data?.results || [];
          if (results.length > 0) {
            setMovies(results);
          }
        })
        .catch((error) => {
          console.log("Row API error:", error);
        });
    } else if (initialMovies.length > 0) {
      setMovies(initialMovies);
    }
  }, [fetchUrl, initialMovies]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => {
          // Poster image handle karna (chahe API se ho ya static link)
          const imgUrl = movie.img
            ? movie.img
            : movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : movie.backdrop_path
            ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
            : null;

          if (!imgUrl) return null;

          return (
            <div key={movie.id || index} className="row__poster-card">
              <img
                src={imgUrl}
                alt={movie.title || movie.name || "Movie"}
              />
              <div className="row__movie-name">
                {movie.title || movie.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;