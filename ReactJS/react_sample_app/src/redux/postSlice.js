import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
      id: 1,
      title: 'HTML',
      text: 'This is 3 weeks program and it is the important concept of the Frontend Development. This is like the skeleton of the body '
},
{
      id: 2,
      title: 'CSS',
      text: 'This is 3 weeks program and it is the important concept of the Frontend Development. This is like the flesh of the body '
}]

const postSlice = createSlice({
      name: 'posts',
      initialState,
      reducers:{
            
      }
})

export default postSlice.reducer