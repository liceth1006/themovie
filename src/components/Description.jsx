function Description({ trailerData, descriptionData }) {
  if (!descriptionData || !descriptionData.popularity) {
    return <div>Cargando...</div>;
  }

  const { popularity, poster_path, backdrop_path, title, overview } =
    descriptionData;

  const slick2Styles = {
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const youtubeUrl =
    trailerData && trailerData.key
      ? `https://www.youtube.com/embed/${trailerData.key}`
      : "";
  return (
    <div className=" pt-5 pb-5">
      <section className="mt-8">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-7  justify-content-center align-items-center">
              <div
                id="carouselExampleRide"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      className="carousel-img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                      className="carousel-img"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-5 col-12 d-lg-flex d-xl-block gap-3 gap-xl-0 h-100">
              <div
                className="flex-fill px-8 py-9 mb-6 rounded card h-100 mb-4"
                style={slick2Styles}
              >
                <div className="card h-100 overflow-scroll">
                  <div className="card-body">
                    <h5 className="card-title fs-1 ">{title}</h5>
                    <p className="card-text fs-2 ">
                      {" "}
                      <i className="fa-solid fa-thumbs-up"></i> {popularity}
                    </p>
                    <p className="card-text">{overview}</p>
                  </div>
                </div>
              </div>

              <div className="flex-fill px-8 py-8 rounded" style={slick2Styles}>
                <div className="card h-100">
                  <div className="card-body">
                    <iframe
                      width="560"
                      height="315"
                      src={youtubeUrl}
                      title={title}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Description;
