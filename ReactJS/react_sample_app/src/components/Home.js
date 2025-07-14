import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import Services from './Services'
import About from './About'

const Home = () => {

  return (
    <main className="sch_container">
		
        <Header />
        <Banner />
        <Services />
        <Footer />		
    </main>
  )

}

export default Home