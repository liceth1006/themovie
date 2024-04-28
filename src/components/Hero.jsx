import {useState,useEffect} from "react";
import CardSearch from "./CardSearch";
import CardMovie from "./CardMovie";
import Description from "./Description";

function Hero() {
  const [movieData, setMovieData] = useState(null); 
  const [filmData, setFilmData] = useState(null);//datos de busqueda, consulta
  const [consultaName, setConsultaName] = useState(""); //almacenar el nombre de la pelicula

  const handleSubmit = (event) => {
    event.preventDefault();
    getFilmData();
  };
  const getMovieData = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDA2YjBkM2IwZGM1ZDVhMWFhOWY3ZDIyYTI1MmQwZSIsInN1YiI6IjY2MjcxMWY5NjNkOTM3MDE4Nzc1MDg3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cxo7OjugWoo6YDq_7k0ka_uXLKFROT29JCmXm7thpaQ",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?&language=es-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data.results);
        console.log(data.results)
      })
      .catch((err) => console.error(err));
  };




  const getFilmData = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDA2YjBkM2IwZGM1ZDVhMWFhOWY3ZDIyYTI1MmQwZSIsInN1YiI6IjY2MjcxMWY5NjNkOTM3MDE4Nzc1MDg3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cxo7OjugWoo6YDq_7k0ka_uXLKFROT29JCmXm7thpaQ",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${consultaName}&include_adult=false&language=es-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setFilmData(data.results);
        console.log(data.results)
      })
      .catch((err) => console.error(err));
    //tratar de implementar una alerta "consulta no valida"
  };

  const handleChange = (event) => {
    // realizar la busqueda
    setConsultaName(event.target.value);
  };

  const handleReset = () => {
    //limpia el formulario para generar otra busqueda
    setConsultaName("");
    setFilmData(null);
  };
  
  useEffect(() => {
    getMovieData()
  }, []);
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom bg-color pt-md-5 ">
      <h1 className="display-4 fw-bold title-color mt-5 pt-md-5  "> Descubre el Mundo del Cine</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          ¡Bienvenido a nuestro universo cinematográfico! Explora miles de
          películas, programas de televisión y mucho más.
        </p>
        <form action="" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="nombre pelicula"
            onChange={handleChange} value={consultaName}
          />
          <label for="floatingInput">pelicula</label>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="sumit" className="btn bg-button-color btn-lg px-4 me-sm-3">
            <i className="fa-solid fa-paper-plane"></i> Ver película!
          </button>
          <button type="reset" className="btn border-color btn-lg px-4" onClick={handleReset}>
            <i className="fa-solid fa-trash-can-arrow-up"></i> Restablecer
          </button>
        </div>
        </form>
      </div>

      { filmData && filmData[0] && (
      <CardSearch data={filmData} onClick={getFilmData}> </CardSearch>
      )}
          {movieData && movieData[0] && (
      <CardMovie data={movieData} > </CardMovie>
      )}
      <Description></Description>
    </div>
  );
}

export default Hero;
