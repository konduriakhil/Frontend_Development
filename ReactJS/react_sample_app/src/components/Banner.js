import React from 'react'
import banner from '../assets/images/banner.jpg'

const Banner = () => {
  return (
    <section id="banner">
        <div className="banner">
            <img src={banner} alt="Banner image" />
            <div className="bannerinfo">
                <h1>Welcome to Sri Chaitanya School</h1>
                <p>This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation</p>
            </div>
        </div>
    </section>
  )
}

export default Banner