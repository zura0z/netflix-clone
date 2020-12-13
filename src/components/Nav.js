import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../logos/logo.png";
import user from "../logos/user.png";

import { navActive, onSearch } from "../utils";
import { urls } from "../urls";

import "../css/Nav.css";

const Nav = ({ black, searchedMovies }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    let moviesArray = [];
    const getMovieArray = async () => {
      await axios.get(urls.movie_search(value)).then((data) => {
        moviesArray = [...moviesArray, ...data.data.results];
      });
      moviesArray = moviesArray.filter((movie) => movie.backdrop_path !== null && movie.hasOwnProperty('backdrop_path'));
      searchedMovies(moviesArray);
    };
    if (value.length > 0) getMovieArray();
    else searchedMovies(null);
  }, [value]);

  return (
    <nav className={`nav ${black && "black"}`}>
      <div className="nav-container">
        <ul className="first">
          <li>
            <img className="logo" src={logo} alt="Netflix Logo" />
          </li>
          <li id="browse">
            Browse <small>&#9660;</small>
          </li>
          <Link to="/" onClick={navActive} className="nav-link">
            <li className="nav-elem active">Home</li>
          </Link>
          <Link to="/TV-Shows" onClick={navActive} className="nav-link">
            <li className="nav-elem">TV Shows</li>
          </Link>
          <Link to="/Movies" onClick={navActive} className="nav-link">
            <li className="nav-elem">Movies</li>
          </Link>
          <Link to="/Latest" onClick={navActive} className="nav-link">
            <li className="nav-elem">Latest</li>
          </Link>
          <Link to="/MyList" onClick={navActive} className="nav-link">
            <li className="nav-elem">My List</li>
          </Link>
        </ul>
        <ul className="second">
          <li id="search-li">
            <div id="search-div" className="search blank">
              <input
                id="search-input"
                className="search-input"
                placeholder="Search"
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </div>
          </li>
          <li>
            <i
              onClick={onSearch}
              id="search-icon"
              className="fas fa-search fas-white"
            />
          </li>
          <li>KIDS</li>
          <li>
            <i className="fas fa-gift" />
          </li>
          <li>
            <i className="fas fa-bell" />
          </li>
          <li>
            <img className="user" src={user} alt="user" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
