import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [filmData, setFilmData] = useState(null); //datos de busqueda, consulta
  const [consultaName, setConsultaName] = useState(""); //almacenar el nombre de la pelicula

  const handleSubmit = (event) => {
    event.preventDefault();
    getFilmData();
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
      `https://api.themoviedb.org/3/search/movie?query=${consultaName}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setFilmData(response.results); // asigna los resultados al estado movieData
        console.log(filmData);
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

  return (

      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid bg-dark">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              <img src={require("../imagenes/logo.png")} className="img-thumbnail" width="200" height="300" alt="Cinema App" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-danger" aria-current="page" to="/">
                    <h3>Home</h3>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/Categorias">
                    <h3>Categorias</h3>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled text-danger" aria-disabled="true" to="/Favoritos">
                    <h3>Favoritos</h3>
                  </Link>
                </li>
              </ul>
  
              <form className="d-flex border-primary rounded-3" role="search" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={consultaName} />
  
                <button type="submit" className="d-flex btn btn-light border border-danger rounded-3">
                  <h4>Ver película!</h4>
                </button>
                <button type="reset" className="d-flex border border-danger rounded-3" onClick={handleReset}>
                  <h4>Restablecer</h4>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }

export default Navbar;
