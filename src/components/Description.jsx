import React from "react";

function Description() {
  const myStyles = {
    opacity: 1,
    width: "4928px",
    transform: "translate3d(-1408px, 0px, 0px)",
    transition: "transform 500ms ease 0s",
  };
  const slickStyles = {
    background:
      'url("../assets/images/slider/slider-image-3.jpg") 0% 0% / cover no-repeat',
    borderRadius: "0.5rem",
    width: "696px",
  };
  const slick2Styles = {
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <section class="mt-8">
      <div class="container">
        <div class="row">
          <div class="col-xxl-8 col-xl-7">
            <div
              id="carouselExampleRide"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={require("../imagenes/comedia.png") }class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="col-xxl-4 col-xl-5 col-12 d-lg-flex d-xl-block gap-3 gap-xl-0 h-100">
            <div class="flex-fill px-8 py-9 mb-6 rounded h-100 mb-4" style={slick2Styles}>
              <div>
              <br></br>
                gghj
              </div>
            </div>

            <div class="flex-fill px-8 py-8 rounded" style={slick2Styles}>
              <div>
                <h3 class="fw-bold mb-3">
                  Say yes to
                  <br></br>
                  season’s fresh
                </h3>
                <div class="mt-4 mb-5 fs-5">
                  <p class="fs-5 mb-0">
                    Refresh your day
                    <br></br>
                    the fruity way
                  </p>
                </div>

                <a href="#" class="btn btn-dark">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
