import React from 'react'
import amma from '../images/amma.jpg'
import rama from '../images/rama2.avif'
import rama1 from '../images/ramanujan1.jpg'

const Slider = () => {
  return (
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={amma} className="d-block w-100" alt="Banner1" />
        </div>
        <div className="carousel-item">
          <img src={rama} className="d-block w-100" alt="Banner2" />
        </div>
        <div className="carousel-item">
          <img src={rama1} className="d-block w-100" alt="Branner3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slider