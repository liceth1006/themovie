

function CardSearch({ data,onClick }) {


  return (
    <div className="album pb-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3  g-5">
          {data &&
            data.map((dataItem) => (
              <div className="col" key={dataItem.id}>
              
                <div className="flip-card"   onClick={()=> onClick(dataItem.id)}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${dataItem.poster_path}`}
                        className="card-img"
                        alt={dataItem.original_title}
                      />
                    </div>
                    <div className="flip-card-back">
                      <div className="pt-5 mt-5">
                        <p className="title fs-3 text-card-color">
                          <strong>{dataItem.title}</strong>
                        </p>
                        <p className="text-card-color">{dataItem.overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CardSearch;
