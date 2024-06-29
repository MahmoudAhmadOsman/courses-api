import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationComponent from "./components/navigation/NavigationComponent";
import HomeComponent from "./components/home/HomeComponent";
import NotFound from "./utils/NotFound";
import LoginComponent from "./auth/LoginComponent";
import AddCourse from "./components/courses/AddCourse";
import CourseList from "./components/courses/CourseList";
import SignupComponent from "./auth/SignupComponent";

function App() {
  return (
    <div className="home-app">
      <BrowserRouter>
        <React.Fragment>
          <NavigationComponent />
          <Routes>
            <Route path="/courses/add-course" element={<AddCourse />} />
            <Route path="/api/courses" element={<CourseList />} />
            <Route path="/api/users/login" element={<LoginComponent />} />
            <Route path="/api/users/register" element={<SignupComponent />} />
            <Route path="/" exact element={<HomeComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
