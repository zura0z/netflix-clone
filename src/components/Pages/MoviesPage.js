import React, { useState, useEffect } from "react";

import Billboard from "../Billboard";
import Carousel from "../Carousel";
import MovieDetails from "../MovieDetails";

import { urls } from "../../urls";

import "../../css/App.css";

const MoviesPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    selectedMovie
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [selectedMovie]);
  return (
    <div>
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          close={() => setSelectedMovie(null)}
        />
      ) : null}
      <Billboard cover={urls.popular_movies(1)}/>
      <Carousel
        movies={urls.upcoming_movies}
        title="Upcoming Movies"
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.popular_movies}
        title="Popular Movies"
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.topRated_movies}
        title="Top Rated Movies"
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Action"
        genre={28}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Adventure"
        genre={12}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Animation"
        genre={16}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Comedy"
        genre={35}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Crime"
        genre={80}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Documentary"
        genre={99}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Drama"
        genre={18}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Family"
        genre={10751}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Fantasy"
        genre={14}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="History"
        genre={36}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Horror"
        genre={27}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Music"
        genre={10402}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Mystery"
        genre={9648}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Romance"
        genre={10749}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Science Fiction"
        genre={878}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="TV"
        genre={10770}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Thriller"
        genre={53}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="War"
        genre={10752}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.movie_genres}
        title="Western"
        genre={37}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
    </div>
  );
};

export default MoviesPage;
