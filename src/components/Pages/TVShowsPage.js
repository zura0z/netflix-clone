import React, { useState, useEffect } from "react";

import Billboard from "../Billboard";
import Carousel from "../Carousel";
import MovieDetails from "../MovieDetails";

import { urls } from "../../urls";

import "../../css/App.css";

const TVShowsPage = () => {
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
      <Billboard cover={urls.trending_shows(1)} />
      <Carousel
        movies={urls.trending_shows}
        title="Trending Shows"
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.airing_today}
        title="Airing Today"
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.onthe_air}
        title="On The Air"
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Action & Adventure"
        genre={10759}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Animation"
        genre={16}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Comedy"
        genre={35}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Crime"
        genre={80}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Documentary"
        genre={99}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Drama"
        genre={18}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Family"
        genre={10751}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Kids"
        genre={10762}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Mystery"
        genre={9648}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="News"
        genre={10763}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Reality"
        genre={10764}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Sci-Fi & Fantasy"
        genre={10765}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Soap"
        genre={10766}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Talk"
        genre={10767}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="War & Politics"
        genre={10768}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
      <Carousel
        movies={urls.tvShow_genres}
        title="Western"
        genre={37}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
      />
    </div>
  );
};

export default TVShowsPage;
