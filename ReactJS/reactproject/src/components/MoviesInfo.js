import React from 'react'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import Header from './Header'

const MoviesInfo = () => {

      const movies = useSelector(state => state.movies)

      console.log(movies)

  return (
    <div>
      <Header />
      <section className='container'>
            <h1 className='py-2'>MoviesInfo</h1>
            <div className='row'>
              <div className='col-md-6'>
                {
                  movies.length > 0 ? movies.map((item, index)=> <div key={index}>
                    <h3>{item.name}</h3>
                    <div >{item.budget}</div>
                  </div>) : null
                }
              </div>
            </div>
      </section>
      <Footer />
    </div>
  )
}

export default MoviesInfo