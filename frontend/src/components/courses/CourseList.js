import React, { useEffect, useState } from "react";
import { COURSE_BASE_URL } from "../../service/courseService";
import Loading from "../../utils/Loading";

const CourseList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);

  const fetchCourseData = async () => {
    try {
      const response = await fetch(COURSE_BASE_URL);
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <div className="courses-list">
      <div className="container">
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
        <div className="row">
          {!loading &&
            !error &&
            courses.map(course =>
              <div className="col-md-3 col-sm-6" key={course.id}>
                <div className="card mb-4">
                  <img
                    src="https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148387744.jpg?w=1380&t=st=1718663371~exp=1718663971~hmac=da3faf779e79d2c1fe71876c9c255adba0249d299b671b44ab0a926fe25848fa"
                    className="card-img-top"
                    alt={course.title}
                  />
                  <div className="card-body">
                    <div className="card-header">
                      <h5 className="card-title">
                        {course.title}
                      </h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p>
                          Price: <b className="text-danger"> ${course.price}</b>
                        </p>
                      </li>
                      <li className="list-group-item">
                        <p>
                          Credit: <b className="text-danger">{course.credit}</b>
                        </p>
                      </li>
                      <li className="card-text list-group-item">
                        {course.description}
                      </li>
                    </ul>
                    <button className="btn btn-outline-dark mt-3">BUY</button>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
