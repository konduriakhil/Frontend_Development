import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";

const store = configureStore ({
      reducers:{
            posts: postSlice
      }
})

export default store 