import React, { useRef, useState, useEffect } from "react";
import YTSearch from "youtube-api-search";

import { getGenre } from "../utils";

import "../css/MovieDetails.css";

const MovieDetails = ({ movie, close }) => {
  const API_KEY = "AIzaSyBJTf5rMEuISZX_8rRwzx1v6FW2Bypad-0";
  const [height, setHeight] = useState(window.pageYOffset + 6);
  const [video, setVideo] = useState(null);
  const details = useRef();
  const overlay = useRef();

  useEffect(() => {
    YTSearch(
      {
        key: API_KEY,
        term: `${movie.title || movie.name} Trailer`,
      },
      (videos) => {
        setVideo(`https://www.youtube.com/embed/${videos[0].id.videoId}`);
      }
    );
  }, [movie.title, movie.name]);

  window.addEventListener("resize", () => setHeight(window.pageYOffset));


  return (
    <div
      ref={overlay}
      style={{ top: height }}
      onClick={() => (
        (details.current.style.animation = "fadeOut 250ms ease-out"),
        (overlay.current.style.animation = "overlay 200ms"),
        setTimeout(close, 0)
      )}
      className="movie-details-overlay"
    >
      <div
        ref={details}
        onClick={(e) => e.stopPropagation()}
        className="movie-details-expanded"
      >
        <div
          className="movie-details-image"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
          }}
        >
          <small
            onClick={() => (
              (details.current.style.animation = "fadeOut 250ms ease-out"),
              (overlay.current.style.animation = "overlay 200ms"),
              setTimeout(close, 0)
            )}
            className="movie-details-close"
          >
            &times;
          </small>
        </div>
        <div className="movie-details-description">
          <h1 className="movie-details-title">{movie.title || movie.name}</h1>
          <p className="movie-details-overview">{movie.overview}</p>
          <div>
            <div className="videoWrapper">
              <iframe src={video} title={movie.title || movie.name} className="movie-details-video" />
            </div>

            <div className="movie-details-genresAndDate">
              <p className="movie-details-genres">
                Genres: {getGenre(movie.genre_ids, "all")}
              </p>
              <p className="movie-details-release-date">
                Release Date: {movie.release_date || movie.first_air_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
