import { configureStore, createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import counterSlice from "./counterSlice";
import postSlice from './postSlice'
import postSliceT from './postSliceT'
import productSlice from './porductSlice'
import cartSlice from './cartSlice'
import cartTempSlice from './cartTempSlice'


const store = configureStore({
      reducer:{
            users: userSlice,
            movies: movieSlice,
            counter: counterSlice,
            posts: postSlice,
            postst: postSliceT,
            products: productSlice,
            cart: cartSlice,
            tempCart: cartTempSlice
      }
})

export default store;
