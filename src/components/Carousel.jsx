import React from 'react';

function Carousel({ data }) {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {data.map((dataItem, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
            aria-current={index === 0 ? "true" : "false"}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {data.map((dataItem, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="10000">
            <img
              src={`https://image.tmdb.org/t/p/w500${dataItem.poster_path}`}
              className="d-block w-100"
              style={{ maxHeight: "70vh", objectFit: "cover", objectPosition: "top", overflow: "hidden" }}
              alt={dataItem.original_title}
            />
            <div className="carousel-caption d-none d-md-block text-white">
              <h5>{dataItem.original_title}</h5>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carousel;
