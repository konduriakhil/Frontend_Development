import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import MoviesInfo from './components/MoviesInfo'
import Counters from './components/Counters'
import PostsTemporary from './components/PostsTemporary'
import Products from './components/Products'
import Cart from './components/Cart'
import Error404 from './components/Error404'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import CartTemporary from './components/CartTemporary'
import Checkout from './components/Checkout'

const App = () => {
      return (
            <BrowserRouter>
            <ToastContainer />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/posts' element={<Posts />}></Route>
                        <Route path='/movies' element={<MoviesInfo />}></Route>
                        <Route path='/counter' element={<Counters />}></Route>
                        <Route path='/postst' element={<PostsTemporary />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>                  
                        <Route path='*' element={<Error404 />}></Route>
                        <Route path='/carttemp' element={<CartTemporary />}></Route>
                        <Route path='/checkout' element={<Checkout />}></Route>
                  </Routes>
            </BrowserRouter>
      )
}

export default App
