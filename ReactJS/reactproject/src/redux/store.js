import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import counterSlice from "./counterSlice";
import postSlice from './postSlice'
import postSliceT from './postSliceT'
import productSlice from './porductSlice'


const store = configureStore({
      reducer:{
            users: userSlice,
            movies: movieSlice,
            counter: counterSlice,
            posts: postSlice,
            postst: postSliceT,
            products: productSlice,
      }
})

export default store;
