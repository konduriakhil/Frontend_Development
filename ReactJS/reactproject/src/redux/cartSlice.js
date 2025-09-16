import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
      cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
      cartTotalAmount: 0,
      cartTotalQuantity: 0

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

                  localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            },
            removeFromCart: (state, action) => {
                  const remainingItems = state.cartItems.filter((item) => item.id !== action.payload.id)
                  state.cartItems = remainingItems
                  localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
                  toast.error('Product is removed from the Cart', {
                        position: 'top-right'
                  })
            },
            decrementCartItems: (state, action) => {
                  const findItem = state.cartItems.findIndex((item) => item.id === action.payload.id);
                  if (state.cartItems[findItem].quantity > 1) {
                        state.cartItems[findItem].quantity--;
                        toast.info('Product Quantity is Decremented', {
                              position: 'top-right'
                        })
                  }
                  else if (state.cartItems[findItem].quantity === 1) {
                        const remainingItems = state.cartItems.filter((item) => item.id !== action.payload.id)
                        state.cartItems = remainingItems
                        toast.error('Product is Deleted', {
                              position: 'top-right'
                        })
                  }
                  localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            },
            clearCart: (state, action) => {
                  state.cartItems = []
                  toast.error('All Products are removed from the cart', {
                        position: 'top-right'
                  })
                  localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

            },
            getTotals: (state, action) => {

                  const { totalAmount, totalQuantity } = state.cartItems.reduce((cartInfo, item) => {
                        const { price, quantity } = item
                        const total = price * quantity
                        cartInfo.totalAmount += total
                        cartInfo.totalQuantity += quantity
                        return cartInfo;
                  }, { totalAmount: 0, totalQuantity: 0 })

                  state.cartTotalAmount = totalAmount
                  state.cartTotalQuantity = totalQuantity
            }

      }
})

export const { addToCart, removeFromCart, decrementCartItems, clearCart, getTotals } = cartSlice.actions

export default cartSlice.reducer

