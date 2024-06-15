import React from "react";
import CourseList from "../courses/CourseList";

const HomeComponent = () => {
  return (
    <>
      <section className="home">
        {/* Start Hero Section */}
        <div className="hero-section">
          <h1>HomeComponent</h1>
          
        </div>
        {/* End of Hero Seciton */}

        <hr />

        <CourseList />
      </section>
    </>
  );
};

export default HomeComponent;
