import React, { useState, useEffect } from "react";
import Discover from "../Categories/Discover";
import Description from "../Description";

function Genres({ onClick }) {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [descriptionData, setDescriptionData] = useState(null);
  const [trailerData, setTrailerData] = useState(null);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [showMovieDescription, setShowMovieDescription] = useState(false);

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

  const getDescriptionData = (selectedMovieId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzBiN2Y3YjYwYTUzM2JlNDkzZDVlMGRmNjBkOTI4NyIsInN1YiI6IjY2MjcyMjUwZTI5NWI0MDE4NzljOWVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r9U2TEcTy5giPnclNDPLVfQbyo97JjURcwYWB_ItuWw",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${selectedMovieId}?&language=es`, options)
      .then((response) => response.json())
      .then((dataMovie) => {
        setDescriptionData(dataMovie);
        console.log(dataMovie);
        
       // navigate('/Description');
      })
      .catch((err) => console.error(err));

      // Obtener datos del tráiler
    fetch(`https://api.themoviedb.org/3/movie/${selectedMovieId}/videos?&language={language}`, options)
    .then((response) => response.json())
    .then((dataTrailer) => {
      setTrailerData(dataTrailer.results[0]); // Tomar el primer tráiler de la lista
      console.log("Trailer data:", dataTrailer.results[0]);
    })
    .catch((err) => console.error(err));
};

  
const handleGenreSelect = (genreId) => {
  setSelectedGenreId(genreId);
  getMovieData(genreId);
};

const handleGenreDeselect = () => {
  setSelectedGenreId(null);
  setShowMovieDescription(false); 
};

const handleMovieSelect = (movieId) => {
  setSelectedMovieId(movieId);
  setShowMovieDescription(true);
  getDescriptionData(movieId);
};

const handleMovieDeselect = () => {
  setSelectedMovieId(null);
  setShowMovieDescription(false); 
};
return (
  <>
    {!selectedGenreId && !showMovieDescription  && (
      <div className="card bg-color text-center border-0">
        <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
          {genres.map((genre) => (
            <div className="col" key={genre.id}>
              <div
                className="card h-100 position-relative card-img"
                onClick={() => handleGenreSelect(genre.id)}
                aria-current="true"
              >
                <img
                  src={require("../../imagenes/fondo2.jpg")}
                  className="card-img-top"
                  alt="fondo"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="card-title fs-1 text-light fw-bolder ">
                    {genre.name}
                  </h5>
                </div>
                <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 invisible"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {selectedGenreId && !showMovieDescription && (
      <div>
         <div className="d-grid gap-2 d-sm-flex  justify-content-end pe-5 mb-5">
          <button type="reset" className="btn border-color btn-lg px-4" onClick={handleGenreDeselect}>
          <i className="fa-solid fa-hand-point-left"></i> Volver
          </button>
          </div>
        <Discover data={movies} onMovieSelect={handleMovieSelect} />
      </div>
    )}

    {showMovieDescription && selectedMovieId && (
      <div>
        <div className="d-grid gap-2 d-sm-flex  justify-content-end pe-5 mb-5">
          <button type="reset" className="btn border-color btn-lg px-4" onClick={handleGenreDeselect}>
          <i className="fa-solid fa-hand-point-left"></i> Volver
          </button>
          </div>
        <Description  descriptionData={descriptionData}
          trailerData={trailerData}
          onDeselect={handleMovieDeselect}></Description>
      </div>
    )}
  </>
);
}




export default Genres;
