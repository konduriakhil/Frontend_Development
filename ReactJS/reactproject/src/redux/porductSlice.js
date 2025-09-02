import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { act } from "react";

const initialState = {
      items: [],
      status: 'idle',
      error: null
};


export const fetchProducts = createAsyncThunk('products', async (id = null, { rejectWithValue }) => {
      try {
            const response = await axios.get("https://fakestoreapi.com/products");
            return response.data;
      } catch (err) {
            // return rejectWithValue(err.message)
            return rejectWithValue('Sorry! unable to fetch data');
      }
});

const productSlice = createSlice({
      name: 'products',
      initialState,
      reducers: {},
      extraReducers(builder) {
            builder.addCase(fetchProducts.pending, (state, action) => {
                  state.status = 'loading'
            }).addCase(fetchProducts.fulfilled, (state, action) => {
                  state.status = 'success'
                  state.items = action.payload
            }).addCase(fetchProducts.rejected, (state, action) => {
                  state.status = 'failed'
                  state.error = action.err.message
            })
      }
})

export default productSlice.reducer