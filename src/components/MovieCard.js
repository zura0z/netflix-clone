import React, { useRef, useState } from "react";

import { getGenre } from "../utils";

import "../css/MovieCard.css";

const MovieCard = ({ movie, onSelectMovie }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisiked] = useState(false);
  const [match] = useState(99 - Math.floor(Math.random() * 31));

  const plus = useRef();
  const check = useRef();
  const like = useRef();
  const dislike = useRef();

  const selectMovie = (e) => {
    if (
      !(
        e.target === plus.current.firstChild ||
        e.target === check.current.firstChild
      ) &&
      !(e.target === plus.current || e.target === check.current) &&
      !(like.current === e.target || e.target === like.current.firstChild) &&
      !(dislike.current === e.target || e.target === dislike.current.firstChild)
    ) {
      onSelectMovie(movie);
    }
  };

  const likeToggle = () => {
    if (liked) {
      like.current.style.backgroundColor = "transparent";
      setLiked(!liked);
    } else {
      like.current.style.backgroundColor = "#3CCA3C";
      dislike.current.style.backgroundColor = "transparent";
      setDisiked(false);
      setLiked(!liked);
    }
  };

  const dislikeToggle = () => {
    if (disliked) {
      dislike.current.style.backgroundColor = "transparent";
      setDisiked(!disliked);
    } else {
      dislike.current.style.backgroundColor = "#E50914";
      like.current.style.backgroundColor = "transparent";
      setLiked(false);
      setDisiked(!disliked);
    }
  };

  const togglePlusAndCheck = () => {
    if (plus.current.classList.contains("blank")) {
      plus.current.classList.remove("blank");
      check.current.classList.add("blank");
    } else {
      plus.current.classList.add("blank");
      check.current.classList.remove("blank");
    }
  };

  return (
      <div>
        <img
          onClick={selectMovie}
          src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
          className="movie"
          alt={movie.title || movie.name}
        />
        <div onClick={selectMovie} className="movie-details">
          <div className="details-first-row">
            <h5 className="details-name">{movie.title || movie.name}</h5>
            <small className="details-date">
              {movie.release_date || movie.first_air_date
                ? (movie.release_date || movie.first_air_date).slice(0, 4)
                : null}
            </small>
          </div>
          <div className="details-second-row">
            <div className="first-column-icons">
              <div className="details-icon play-icon">
                <div className="fa-play-icon">&#9658;</div>
              </div>
              <div
                ref={plus}
                onClick={togglePlusAndCheck}
                className="details-icon plus-icon"
              >
                <i className="fas fa-plus" />
              </div>
              <div
                ref={check}
                onClick={togglePlusAndCheck}
                className="details-icon check-icon blank"
              >
                <i className="fas fa-check" />
              </div>
              <div
                onClick={likeToggle}
                ref={like}
                className="details-icon thumbsUp-icon"
              >
                <i className="far fa-thumbs-up" />
              </div>
              <div
                onClick={dislikeToggle}
                ref={dislike}
                className="details-icon thumbsDown-icon"
              >
                <i className="far fa-thumbs-down" />
              </div>
            </div>
            <div className="details-icon info-icon">
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          <div className="details-third-row">
            <small className="details-genres">
              {getGenre(movie.genre_ids, 3)}
            </small>
            <small className="details-match">{`${match}% Match`}</small>
          </div>
        </div>
      </div>
  );
};

export default MovieCard;