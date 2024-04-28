import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/main.css";
function Header() {
  const themes = ["Kawai", "universe", "Crypto", "Color"];

  const selectTheme = (index) => {
    const theme = themes[index];
    document.documentElement.setAttribute("data-theme", theme);
  };
  const handleItemClick = (index) => {
    selectTheme(index);
  };
  return (
    <header className="d-flex flex-wrap align-items-center bg-color-trans justify-content-center justify-content-md-between py-3 mb-4 border-bottom fixed-top  mb-5 ">
      <div className="col-md-3 mb-2 mb-md-0  ">
        <Link to="/" className="navbar-brand mr-5">
          <div className="d-flex flex-column align-items-center">
            <span className="text-center text-color">
              <i className="fa-solid fa-rocket "> L ~ S ~ A</i>
            </span>
            <span className="text-center text-color">
              <strong> CINEMA -</strong>TECH{" "}
              <i className="fa-solid fa-rocket"></i>
            </span>
          </div>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/" className="nav-link px-2 text-color"><i className="fa-solid fa-house-chimney"></i>  Home
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link px-2 text-color"><i className="fa-solid fa-arrow-trend-up"></i> Tendencia
          </Link>
        </li> <li>
          <Link to="/Categorias" className="nav-link px-2 text-color"><i className="fa-solid fa-layer-group"></i> Categorias
          </Link>
        </li> 
      </ul>

      <div className="col-md-3 text-end me-4">
      <div className="dropdown">
              <button
                className="btn border-color text-color dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Personalizar
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                {themes.map((theme, index) => (
                  <li key={index} onClick={() => handleItemClick(index)}>
                    <span className="dropdown-item">{theme}</span>
                  </li>
                ))}
              </ul>
            </div>
      </div>
    </header>
  );
}

export default Header;
