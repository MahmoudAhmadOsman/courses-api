import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavigationComponent from "./components/navigation/NavigationComponent";
import HomeComponent from "./components/home/HomeComponent";
import NotFound from "./utils/NotFound";
import LoginComponent from "./auth/LoginComponent";
import AddCourse from "./components/courses/AddCourse";
import CourseList from "./components/courses/CourseList";
import SignupComponent from "./auth/SignupComponent";
import Dashboard from "./dashboard/Dashboard";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext(); // get logged user

  return (
    <div className="home-app">
      <BrowserRouter>
        <React.Fragment>
          <NavigationComponent />
          <Routes>
            <Route
              path="/api/dashboard"
              element={
                user ? <Dashboard /> : <Navigate to="/api/users/login" />
              }
            ></Route>
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
