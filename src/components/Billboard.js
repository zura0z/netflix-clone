import React, { useEffect, useState } from "react";
import axios from "axios";

import { desc } from "../utils";

import "../css/Billboard.css";

const Billboard = ({ cover }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(cover).then(async (data) => {
      let trendingMovies = await data.data.results[
        Math.floor(Math.random() * data.data.results.length)
      ];
      setMovie(trendingMovies);
    });
  }, []);

  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
        className="billboard"
      >
        <div className="movie-desc">
          <h1 className="title">{movie.title || movie.name}</h1>
          <p className="desc">{desc(movie.overview)}</p>
          <div className="buttons">
            <button className="play-btn btn">
              <span>&#9658;</span> Play
            </button>
            <button className="info-btn btn">
              <span>&#128712;</span> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;