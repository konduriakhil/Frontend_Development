import React from 'react'
import Footer from './Footer'
import Header from './Header'
import image1 from '../assets/images/image-1.jpg'

const About = () => {
    return (
        <React.Fragment>
            <Header></Header>
            <section className="page-content">
                <h1 className="section-title">About us</h1>
                <div className="about">
                    <div className="abtleft">                        
                        <img src={image1} alt="About" />
                    </div>
                    <div className="abtright">
                        <h2>Why choose us?</h2>
                        <p>This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.</p>

                        <p>This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version </p>
                    </div>
                    <div></div>
                </div>
            </section>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default About