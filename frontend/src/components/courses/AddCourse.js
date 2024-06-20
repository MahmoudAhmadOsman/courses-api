import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import Loading from "../../utils/Loading";

const AddCourse = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [credit, setCredit] = useState("");
  const [price, setPrice] = useState("");
  const [instructor, setInstructor] = useState("");
  // const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  return (
    <section className="add-course">
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            {loading &&
              <p>
                {<Loading />}
              </p>}
            {error &&
              <div className="alert alert-danger">
                {error.message}
              </div>}
          </div>
        </div>
        {!loading &&
          !error &&
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h1 className="text-primary">Add Course</h1> <hr />
              <p className="lead mb-4">
                Please provide course details using the below form.
              </p>{" "}
              <div className="col-md-8 mb-3">
                <label htmlFor="title" className="form-label">
                  Course Title
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="title"
                  placeholder="Enter course title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              {/* Credit */}
              <div className="col-md-8 mb-3">
                <label htmlFor="credit" className="form-label">
                  Course Credit
                </label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="credit"
                  placeholder="Enter credit amount"
                  value={credit}
                  onChange={e => setCredit(e.target.value)}
                />
              </div>
              {/* Price */}
              <div className="col-md-8 mb-3">
                <label htmlFor="price" className="form-label">
                  Course Price
                </label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="price"
                  placeholder="Enter course price"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
              {/* Instructor */}
              <div className="col-md-8 mb-3">
                <label htmlFor="instructor" className="form-label">
                  Instructor Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="instructor"
                  placeholder="Enter instructor name"
                  value={instructor}
                  onChange={e => setInstructor(e.target.value)}
                />
              </div>
              {/* Description */}
              <div className="col-md-8 mb-3">
                <label htmlFor="description" className="form-label">
                  Course Description
                </label>{" "}
                <ReactQuill
                  theme="snow"
                  id="description"
                  onChange={setValue}
                  value={value}
                  placeholder="Enter course description"
                  // onChange={e => setValue(e.target.value)}
                />
                {/* 
              <textarea
                className="form-control"
                id="description"
                cols="30"
                rows="10"
                placeholder="Enter course description"
              /> */}
              </div>
              <div className="col-md-8 mb-3">
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-lg fw-bold d-grid w-100"
                  disabled={
                    !title || !credit || !price || !instructor || !value
                  }
                >
                  SUBMIT
                </button>
              </div>
            </div>

            {/* Right col */}
            <div className="col-md-4 bg-light d-none d-lg-block" />
          </div>}
      </div>
    </section>
  );
};

export default AddCourse;
