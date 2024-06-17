import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

const AddCourse = () => {
  const [value, setValue] = useState("");
  return (
    <section className="add-course">
      <div className="container mt-3">
        <div className="row mx-auto">
          <div className="col-md-8">
            <h1 className="text-primary">Add Course</h1> <hr />
            <div className="col-md-8 mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="title"
                placeholder="Enter course title"
              />
            </div>
            {/* Credit */}
            <div className="col-md-8 mb-3">
              <label htmlFor="credit" className="form-label">
                Credit
              </label>
              <input
                type="number"
                className="form-control form-control-lg"
                id="credit"
                placeholder="Enter credit amount"
              />
            </div>
            {/* Price */}
            <div className="col-md-8 mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control form-control-lg"
                id="price"
                placeholder="Enter course price"
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
              />
            </div>
            {/* Description */}
            <div className="col-md-8 mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>{" "}
              <ReactQuill
                theme="snow"
                id="description"
                onChange={setValue}
                value={value}
              />
              {/* <textarea
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
                className="btn btn-outline-primary btn-lg fw-bold"
              >
                SUBMIT
              </button>
            </div>
          </div>

          {/* Right col */}
          <div className="col-md-4 bg-light" style={{ height: "100vh" }} />
        </div>
      </div>
    </section>
  );
};

export default AddCourse;
