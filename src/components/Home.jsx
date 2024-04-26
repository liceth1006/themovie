 import React from 'react'
 
 function Home({data, onclick}) {
   return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
    {data && data.map((dataItem) => (
      <div className="col" key={dataItem.id}>
        <div className="card h-100">
          <img
            src={`https://image.tmdb.org/t/p/w500${dataItem.poster_path}`}
            className="card-img-top"
            alt={dataItem.original_title}
          />
        </div>
      </div>
    ))}
  </div>
);
}
 export default Home
 
