# Day 27 - Redux Toolkit with React Posts Application

## Overview
This lesson covers building a React application with Redux Toolkit for state management, focusing on a posts application with CRUD operations.

## Key Concepts

### 1. Redux Toolkit Setup
```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: 'HTML Training', text: 'Learn HTML basics' },
  { id: 2, title: 'CSS', text: 'Learn CSS styling' }
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addPost } = postSlice.actions
export default postSlice.reducer
```

### 2. Store Configuration
```jsx
import { configureStore } from "@reduxjs/toolkit";
import postSlice from './postSlice'

const store = configureStore({
  reducer: {
    posts: postSlice,
  }
})

export default store;
```

### 3. React Component with Redux
```jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid'
import { addPost } from "../redux/postSlice";

const Posts = () => {
  const data = useSelector((state) => state.posts);
  const [formData, setFormData] = useState({ title: "", text: "" });
  const dispatch = useDispatch();

  const handleInputs = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      id: uuidv4(),
      ...formData
    }
    dispatch(addPost(newData));
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h4>Add Post</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Enter Title</label>
              <input type="text" name="title" onChange={handleInputs} value={formData.title} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea name="text" onChange={handleInputs} value={formData.text} className="form-control" rows="3"></textarea>
            </div>
            <input type="submit" value="Add Post" className="btn btn-primary" />
          </form>
        </div>
        <div className="col-md-6">
          <h4>Post List</h4>
          {data.map((item, index) => (
            <div className="alert alert-info" key={index}>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
```

## Key Points Summary

### Redux Toolkit Benefits
- Simplified Redux setup with `configureStore`
- Automatic action creator generation with `createSlice`
- Built-in Immer for immutable updates
- Modular state management

### React Integration
- `useSelector` to access state
- `useDispatch` to trigger actions
- Controlled components for form handling
- UUID for unique IDs

### Bootstrap Styling
- Responsive grid system
- Form controls and buttons
- Alert components for posts
- Professional UI styling

### Workflow
1. Create slice with initial state and reducers
2. Configure store with all slices
3. Use hooks in components to interact with store
4. Dispatch actions to update state
5. State changes automatically trigger re-renders

This pattern provides a complete foundation for building React applications with Redux Toolkit state management.
