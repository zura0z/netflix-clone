import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Nav from "./Nav";
import HomePage from "./Pages/HomePage";
import TVShowsPage from "./Pages/TVShowsPage";
import MoviesPage from "./Pages/MoviesPage";
import LatestPage from "./Pages/LatestPage";
import MyListPage from "./Pages/MyListPage";
import MovieDetails from "./MovieDetails";
import SearchResults from "./SearchResults";
import Footer from "./Footer";

import { removeInput } from "../utils";

import "../css/App.css";

const App = () => {
  const [black, setBlack] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchedMovies, setSearchedMovies] = useState(null);

  window.addEventListener("scroll", () =>
    window.scrollY > 5 ? setBlack(true) : setBlack(false)
  );

  useEffect(() => {
    selectedMovie || searchedMovies
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");

    searchedMovies ? setBlack(true) : setBlack(false);
  }, [selectedMovie, searchedMovies]);

  return (
    <div onClick={removeInput} id="body" className="body">
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          close={() => setSelectedMovie(null)}
        />
      ) : null}
      <Router>
        <Nav
          black={black}
          searchedMovies={(movies) => setSearchedMovies(movies)}
        />
        {searchedMovies ? (
          <SearchResults
            searchedMovies={searchedMovies}
            onSelectMovie={(movie) => setSelectedMovie(movie)}
          />
        ) : null}
        <Switch>
          <Redirect exact from="/" to="/Home" />
          <Route path="/Home" exact component={HomePage} />
          <Route path="/TV-Shows" component={TVShowsPage} />
          <Route path="/Movies" component={MoviesPage} />
          <Route path="/Latest" component={LatestPage} />
          <Route path="/MyList" component={MyListPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
