import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
      name: 'counter',
      initialState,
      reducers:{
            increment: (state, action) =>{
                  return state += 1
            },
            decrement: (state, action) =>{
                  return state -= 1
            },
            reset: (state) =>{
                      return state = 0;                          
            }
      }
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

