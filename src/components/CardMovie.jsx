import React from 'react'

function CardMovie({data,onclick}) {
  return (
    <div class="album pb-5 ">
      <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3  g-5">
      {data && data.map((dataItem) => ( 
      <div class="col"key={dataItem.id}>

      <div class="flip-card ">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <img
            src={`https://image.tmdb.org/t/p/w500${dataItem.poster_path}`}
            className="card-img"
            alt={dataItem.original_title}
          />
        </div>
        <div class="flip-card-back ">
          <div className='pt-5 mt-5'>
          <p class="title fs-3  text-card-color" ><strong>{dataItem.title}</strong></p>
            <p class=" text-card-color">{dataItem.overview}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
     ))}
    </div>
</div>
    </div>

  )
}

export default CardMovie