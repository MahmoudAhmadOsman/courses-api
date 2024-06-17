import React from "react";
import CourseList from "../courses/CourseList";

const HomeComponent = () => {
  return (
    <>
      <section className="home">
        {/* Start Hero Section */}
        <div className="hero-section">
        <header className="hero d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Search Something Awesome</h1>
            <form className="d-flex">
              <input className="form-control form-control-lg me-2" type="search" placeholder="Search..." aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </header>
          
        </div>
        {/* End of Hero Seciton */}

        <hr />

        <CourseList />
      </section>
    </>
  );
};

export default HomeComponent;
