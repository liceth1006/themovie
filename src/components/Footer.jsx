import React from 'react'

function Footer() {
  return (
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 ">© 2024 Company, Inc</p>

    <div className="d-flex flex-column align-items-center">
            <span className="text-center text-color">
              <i className="fa-solid fa-rocket "> L ~ S ~ A</i>
            </span>
            <span className="text-center text-color">
              <strong> CINEMA -</strong>TECH{" "}
              <i className="fa-solid fa-rocket"></i>
            </span>
          </div>
    <div className=" col-md-4 justify-content-end">
      <h3 className='text-color'>Santiago Parra</h3>
      <h3 className='text-color'>Alex Rodriguez</h3>
      <h3 className='text-color'> <i>Liceth Olmos</i></h3>
    </div>
  </footer>
</div>
  )
}

export default Footer