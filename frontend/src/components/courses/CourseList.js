import React, { useEffect, useState } from "react";
import { COURSE_BASE_URL } from "../../service/courseService";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourseData = async () => {
    try {
      const response = await fetch(COURSE_BASE_URL);
      const data = await response.json();
      console.log("API Response:", data);
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(courses);
  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <div className="courses-list">
      <div className="container">
        <div className="tab-content mt-3">
          <div className="tab-pane fade show active">
            <ul className="list-group">
              {courses.map(course =>
                <li key={course.id} className="list-group-item">
                  {course.title}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
