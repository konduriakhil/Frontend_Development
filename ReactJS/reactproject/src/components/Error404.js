import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Error404 = () => {
      return (
            <React.Fragment>
                  <Header />
                  <section>
                        <h1 style={{ fontSize: '40px', textAlign: 'center', padding: '20px' }}>
                              Sorry! Something went wrong...
                        </h1>
                  </section>
                  <Footer />
            </React.Fragment >
      )
}

export default Error404