import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4} from 'uuid'
import { addPost, deletePost } from "../redux/postSlice";

const Posts = () => {

  const data = useSelector((state) => state.posts.articles)
  const [formData, setFormData] = useState({ title: "", text: "" });
  const dispatch = useDispatch();

  const handleInputs = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit =(event) =>{
    event.preventDefault();
    const newData ={
      id: uuidv4(),
      ...formData
    }
    dispatch(addPost(newData));
  }

  const removePost = (id) => {
    dispatch(deletePost(id));
  }


  return (
    <div>
      <Header />
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h4>Add Post</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Enter Title
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={handleInputs}
                  value={formData.title}
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Subject Description
                </label>
                <textarea
                  className="form-control"
                  name="text"
                  onChange={handleInputs}
                  value={formData.text}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  value="Add Post"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h4>Post List</h4>
            {data.length > 0
              ? data.map((item, index) => (
                <div className="alert alert-info" key={index}>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                  <button onClick={() => removePost(item.id)} className="btn btn-sm btn-warning">Delete</button>
                </div>
              ))
              : <p className=" alert alert-warning"> No Articles Found</p>}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Posts;