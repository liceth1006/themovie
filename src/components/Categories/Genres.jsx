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
      <div className="card text-center bg-dark border-0">
        <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
          {genres.map((genre) => (
            <div className="col" key={genre.id}>
              <div
                className="card h-100"
                onClick={() => handleGenreSelect(genre.id)}
                aria-current="true"
              >
                <img
            src={require("../../imagenes/fondo.jpg")}
            className="card-img-top"
            alt="fondo"
          />
          <div class="card-img-overlay d-flex justify-content-center align-items-center">
            <h5 className="card-title fs-1 text-light fw-bolder ">{genre.name}</h5>
          </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Discover data={movies} />
    </>
  );
}

export default Genres;
