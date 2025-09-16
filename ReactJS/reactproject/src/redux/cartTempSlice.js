import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
      cartTempItems: [],
}
 
const cartTempSlice = createSlice({
      name: 'tempCart',
      initialState,
      reducers: {
            addToTempCart: (state, action) => {

                  const findItem = state.cartTempItems.findIndex((item) => item.id === action.payload.id)

                  if (findItem > -1) {
                        state.cartTempItems[findItem].quantity++
                        toast.info('Quantity Increased', {
                              position: 'bottom-right'
                        })
                  }
                  else {
                        const newItem = { ...action.payload, quantity: 1 }
                        state.cartTempItems.push(newItem)
                        toast.success('Item added to the TempCart ', {
                              position: 'bottom-right'
                        })
                  }


            }

      }
})

export const { addToTempCart } = cartTempSlice.actions
export default cartTempSlice.reducer