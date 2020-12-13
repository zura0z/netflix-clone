import React from "react";
import MovieCard from "./MovieCard";

import "../css/SearchResults.css";

const SearchResults = ({ searchedMovies, onSelectMovie }) => {
  return (
    <div className="search-results-container">
      <div className="search-results">
        {searchedMovies.map((movie, i) => (
          <div key={i}>
            <MovieCard
              movie={movie}
              onSelectMovie={(movie) => onSelectMovie(movie)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
