const API_KEY = process.env.REACT_APP_KEY;

const popularMovies = (page) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
const latestMovies = (page) =>
  `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US&page=${page}`;
const topRatedMovies = (page) =>
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
const upcomingMovies = (page) =>
  `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
const trendingMovies = (page) =>
  `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`;
const trendingShows = (page) =>
  `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&page=${page}`;
const airingToday = (page) =>
  `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=${page}`;
const latestShows = (page) =>
  `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US&page=${page}`;
const onTheAir = (page) =>
  `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${page}`;


const movieTrailer = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
const movieSearch = (QUERY) =>
  `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${QUERY}&page=1&include_adult=true`;

const movieGenres = (page, genre) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&with_genres=${genre}&page=${page}`;

const tvShowGenres = (page, genre) =>
  `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&with_genres=${genre}&page=${page}`;

export const urls = {
  popular_movies: popularMovies,
  movie_trailer: movieTrailer,
  movie_search: movieSearch,
  latest_movies: latestMovies,
  topRated_movies: topRatedMovies,
  upcoming_movies: upcomingMovies,
  trending_movies: trendingMovies,
  trending_shows: trendingShows,
  airing_today: airingToday,
  latest_shows: latestShows,
  onthe_air: onTheAir,
  movie_genres: movieGenres,
  tvShow_genres: tvShowGenres,
};