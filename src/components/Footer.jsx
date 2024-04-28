import React from 'react'

function Footer() {
  return (
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 ">© 2024 Company, Inc</p>

    <div className="d-flex flex-column align-items-center">
            <span className="text-center text-color">
              <i className="fa-solid fa-rocket "> L ~ S ~ A</i>
            </span>
            <span className="text-center text-color">
              <strong> CINEMA -</strong>TECH{" "}
              <i className="fa-solid fa-rocket"></i>
            </span>
          </div>
    <ul class="nav col-md-4 justify-content-end">
      <p>santi</p>
      <p>alex</p>
      <p>liceth</p>
    </ul>
  </footer>
</div>
  )
}

export default Footer