import { configureStore } from "@reduxjs/toolkit";
import postSlice from './postSlice';
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
      reducer:{
            posts: postSlice,
            users: userSlice,
            movies: movieSlice
      }
})

export default store;