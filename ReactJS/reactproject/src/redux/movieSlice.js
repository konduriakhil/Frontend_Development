import { createSlice } from "@reduxjs/toolkit";


const initialState = [{
      id: 1,
      name: 'Bahubali Part1',
      budget: '200cr'
},
{
      id: 2,
      name: 'Bahubali Part2',
      budget: '250cr'
}]

const movieSlice = createSlice({
      name: 'movies',
      initialState,
      reducers:{

      }
})
export default movieSlice.reducer