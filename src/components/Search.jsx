import React from 'react';
import { useState } from 'react';
//import Categorias from "/.Categorias.jsx";
//import Favoritos from "/.Favoritos.jsx";

function Home() {
    //const privateKey = '47e6b6696e9d06082c61e5a8a71bdd6f4e0110db';
    //const publicKey = '1569e1e8a5de21651dd3004a9fea8187';


 

  const [movieData, setMovieData] = useState(null);
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getMoviesData();
  };

  const getMoviesData = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDA2YjBkM2IwZGM1ZDVhMWFhOWY3ZDIyYTI1MmQwZSIsInN1YiI6IjY2MjcxMWY5NjNkOTM3MDE4Nzc1MDg3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cxo7OjugWoo6YDq_7k0ka_uXLKFROT29JCmXm7thpaQ'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => {
          setMovieData(response.results); // asigna los resultados al estado movieData
          console.log(movieData);
        })
        .catch(err => console.error(err));
  };



  const handleChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleReset = () => {
    setMovieName("");
    setMovieData(null);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <div>
          <button type="submit">Get movies!</button>
          <button type="reset" onClick={handleReset}>Reset</button>
        </div>
    </form>
  );
}

export default Home; //Sensei;