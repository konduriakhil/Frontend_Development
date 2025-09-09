import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
      cartItems: [],

}

const cartSlice = createSlice({
      name: 'cart',
      initialState,
      reducers: {
            addToCart: (state, action) => {

                  const findItem = state.cartItems.findIndex((item) => item.id === action.payload.id)

                  if (findItem > -1) {
                        state.cartItems[findItem].quantity++
                        toast.info('Quantity Increased', {
                              position: 'top-right'
                        })
                  }
                  else {
                        const newItem = { ...action.payload, quantity: 1 }
                        state.cartItems.push(newItem)
                        toast.success('Product added Successfully', {
                              position: 'top-right'
                        })
                  }

            }
      }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer

