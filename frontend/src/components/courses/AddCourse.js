import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import Loading from "../../utils/Loading";

const AddCourse = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [title, setTitle] = useState("");
  // const [credit, setCredit] = useState("");
  // const [price, setPrice] = useState("");
  // const [instructor, setInstructor] = useState("");
  // const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    credit: "",
    price: "",
    instructor: "",
    description: "",
  });

  const { title, credit, price, instructor, description } = formData;

  const handleSubmit = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate loading with useEffect
  useEffect(() => {
    // Simulate a network request or other loading task
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
      setError(null);
    }, 2000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="add-course">
      <div className="container">
        <div className="row">
          <div className="col">
            {loading && (
              <div>
                <Loading />
              </div>
            )}
            {error && <div className="alert alert-danger">{error.message}</div>}
          </div>
        </div>
        {!loading && !error && (
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h1 className="text-primary mt-3">Add Course</h1>
              <hr />
              <p className="lead mb-4">
                Please provide course details using the below form.
              </p>
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
                  onChange={handleSubmit}
                  name="title"
                />
              </div>
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
                  onChange={handleSubmit}
                  name="credit"
                />
              </div>
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
                  onChange={handleSubmit}
                  name="price"
                />
              </div>
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
                  onChange={handleSubmit}
                  name="instructor"
                />
              </div>
              <div className="col-md-8 mb-3">
                <label htmlFor="description" className="form-label">
                  Course Description
                </label>
                {/*     <ReactQuill
                  theme="snow"
                  id="description"
        
                
                  placeholder="Enter course description"
              value = { instructor }
              onChange = { handleSubmit }
              name = "instructor"
                /> */}

                <ReactQuill
                  theme="snow"
                  id="description"
                  value={description}
                  onChange={(value) =>
                    setFormData({ ...formData, description: value })
                  }
                  placeholder="Enter course description"
                />
              </div>

              <div className="col-md-8 mb-3">
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-lg fw-bold d-grid w-100"
                  disabled={
                    !title || !credit || !price || !instructor || !description
                  }
                >
                  SUBMIT
                </button>
              </div>
            </div>
            <div className="col-md-4 bg-light d-none d-lg-block" />
          </div>
        )}
      </div>
    </section>
  );
};

export default AddCourse;
