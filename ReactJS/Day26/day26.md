# Increment function in redux 
* Increment counter in class and functional components
![alt text](images/img1.png)
![alt text](images/img2.png)
* Create `counterSlice.js`
![alt text](images/img3.png)
* Create `counterSlice.js` in redux and` Counters.js ` component in components folder.

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = 0

const counterSlice = createSlice({
      name: 'counter',
      initialState,
      reducers:{
            increment: (state, action) =>{
                  state += 1
            }
      }
})

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
```
![alt text](images/img4.png)
* useSelectore is for stored data
* useDispatch is for stored functions
```js
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
            }
      }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```
![alt text](images/img5.png)
![alt text](images/img6.png)
![alt text](images/img7.png)



