import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "../css/Carousel.css";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use(Navigation, Pagination);

const Carousel = ({ movies, title, genre, onSelectMovie }) => {
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    let moviesArray = [];
    const getMovieArray = async () => {
      for (let i = 1; i <= 2; i++) {
        await axios.get(movies(i, genre)).then((data) => {
          moviesArray = [...moviesArray, ...data.data.results];
        });
      }
      moviesArray = moviesArray.filter((movie) => movie.backdrop_path !== null);
      setMovieArray(moviesArray);
    };
    getMovieArray();
  }, [movies, genre]);

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">{title}</h1>
      <Swiper
        className="movie-carousel"
        id="car"
        slidesPerView="auto"
        breakpoints={{
          700: {
            slidesPerGroup: 1,
            touchRatio: 1,
            spaceBetween: 0,
          },
          1000: {
            slidesPerGroup: 2,
            touchRatio: 0,
            spaceBetween: 80,
          },
          1500: {
            slidesPerGroup: 4,
            touchRatio: 0,
            spaceBetween: 80,
          },
        }}
        speed={700}
        navigation
      >
        {movieArray.map((movie, i) => (
          <SwiperSlide
            key={i}
            className="movie-container"
          >
            <MovieCard movie={movie} onSelectMovie={(movie) => onSelectMovie(movie)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
