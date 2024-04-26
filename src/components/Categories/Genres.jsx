import React, { useState, useEffect } from "react";
import Discover from "../Categories/Discover";
import Carousel from "../Carousel";

function Genres({ onGenreSelect }) {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getGenresData();
  }, []);

  const getGenresData = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzBiN2Y3YjYwYTUzM2JlNDkzZDVlMGRmNjBkOTI4NyIsInN1YiI6IjY2MjcyMjUwZTI5NWI0MDE4NzljOWVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r9U2TEcTy5giPnclNDPLVfQbyo97JjURcwYWB_ItuWw",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=es", options)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((err) => console.error(err));
  };

  const getMovieData = (selectedGenreId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzBiN2Y3YjYwYTUzM2JlNDkzZDVlMGRmNjBkOTI4NyIsInN1YiI6IjY2MjcyMjUwZTI5NWI0MDE4NzljOWVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r9U2TEcTy5giPnclNDPLVfQbyo97JjURcwYWB_ItuWw",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=es-ES&page=1&sort_by=popularity.desc&with_genres=${selectedGenreId}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  };

  const handleGenreSelect = (genreId) => {
    getMovieData(genreId);
  };

  return (
    <>
      <Carousel data={movies}></Carousel>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Genre
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {genres.map((genre) => (
            <li key={genre.id}>
              <span
                className="dropdown-item"
                onClick={() => handleGenreSelect(genre.id)}
              >
                {genre.name}
              </span>
            </li>
          ))}
        </ul>
        <Discover data={movies} />
      </div>
    </>
  );
}

export default Genres;
