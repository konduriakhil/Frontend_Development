# Day-28
* In the postSlice(any slice) alway take **initialState** as **object**.
```jsx
const initialState = {
      posts:  [
            {
                  id: 1,
                  title: 'HTML Online Training',
                  text: 'You can learn HTML, which is like the body of the webpage(skeleton)'
            },
            {
                  id:2,
                  title: 'CSS',
                  text: 'You can learn CSS, which is like the body of the webpage(Flesh)'
            }
      ]
}
```
```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      posts:  [
            {
                  id: 1,
                  title: 'HTML Online Training',
                  text: 'You can learn HTML, which is like the body of the webpage(skeleton)'
            },
            {
                  id:2,
                  title: 'CSS',
                  text: 'You can learn CSS, which is like the body of the webpage(Flesh)'
            }
      ]
}

const postSlice = createSlice({
      name: 'posts',
      initialState,
      reducers:{
            addPost: (state, action) =>{
                  state.push(action.payload)
            },
            deletePost: (state, action ) => {
                  state = state.filter(item => item.id !== action.payload)
            }
      }
})

export const { addPost, deletePost} = postSlice.actions

export default postSlice.reducer

```
### If no articles found 
```jsx
            {data.length > 0
              ? data.map((item, index) => (
                <div className="alert alert-info" key={index}>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                  <button onClick={() => removePost(item.id)} className="btn btn-sm btn-warning">Delete</button>
                </div>
              ))
              : <p className=" alert alert-warning"> No Articles Found</p>}
```
## Task: Create `Todo List and Add Todo List  as above`

# Building Products Page or component
## Fetching data from the server by using redux
```jsx
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Products = () => {
  return (
    <div>
      <Header />
      <section className=' container py-5'>
            <h1>Products List</h1>
      </section>
      <Footer />
    </div>
  )
}

export default Products
```
```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      items:[],
      status: 'loading',
      error: null
}

const productSlice = createSlice({
      name: Products,
      initialState,
})

export default productSlice.reducer
```
```jsx
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import counterSlice from "./counterSlice";
import postSlice from './postSlice'
import postSliceT from './postSliceT'
import productSlice from './porductSlice'


const store = configureStore({
      reducer:{
            users: userSlice,
            movies: movieSlice,
            counter: counterSlice,
            posts: postSlice,
            postst: postSliceT,
            products: productSlice,
      }
})

export default store;
```
* By default redux is synchronus and Ajax is always asynchronus request
* To make redux asynchronus we have to use middle ware called **createAsyncThunk**
* If you want to implement Ajax calls in Redux, you have to use thisFunction called **CreateAsyncThunk**.
```jsx
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
      items:[],
      status: 'loading',
      error: null
};

 export const fetchProducts =  createAsyncThunk('products', async( id= null, {rejectWithValue}) => {
      try{
            const response = await axios.get('');
            return response.data;
      }catch(err){
            // return rejectWithValue(err.message)
            return rejectWithValue('Sorry! unable to fetch data ');
      }
 } );

const productSlice = createSlice({
      name: 'products',
      initialState,
      reducers: {}  
})

export default productSlice.reducer
```
```jsx
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
            const response = await axios.get('');
            return response.data;
      } catch (err) {
            // return rejectWithValue(err.message)
            return rejectWithValue('Sorry! unable to fetch data ');
      }
});

const productSlice = createSlice({
      name: 'products',
      initialState,
      reducers: {},
      extraReducers(builder) {
            builder.addCase(fetchProducts.pending, (state, action) =>{
                  state.status = 'loading'
            }).addCase(fetchProducts.fulfilled, (state, action)=>{
                  state.status = 'success'
                  state.items = action.payload
            }).addCase(fetchProducts.rejected, (state, action)=>{
                  state.status = 'failed'
                  state.error = action.err.message
            })
      }
})

export default productSlice.reducer
```
### Calling fetchproducts in Products component
* From the server we are getting information like below
![alt text](images/img1.png)
```jsx
import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux' 
import { fetchProducts } from '../redux/porductSlice'


const Products = () => {

      const productlist = useSelector((state)=> state.products.items)
      const pStatus = useSelector((state) => state.products.status)
      const pError = useSelector((state) => state.products.error)
      const dispatch = useDispatch();
      console.log(productlist)
      console.log(pStatus)
      console.log(pError)

      useEffect(()=>{
            if(pStatus == 'idle'){
                  dispatch(fetchProducts())
            }
      },[productlist, dispatch])

  return (
    <div>
      <Header />
      <section className=' container py-5'>
           <div className='row'>
                  {
                        productlist.length >0 ? productlist.map((item, index) => <div className='col-md-3 my-5' key={index}>
                              <img height='150' width='150' src={item.image} />
                              <h4>{item.title.substr(0,30)}</h4>
                              <p>Price: {item.price}</p>
                              <button className='btn btn-warning'>Add To Cart</button>
                        </div>) : null
                  }
           </div>
      </section>
      <Footer />
    </div>
  )
}

export default Products
```
```jsx
                  {pStatus == 'loading' ? <p>Loading...</p> : null}

```


