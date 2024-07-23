import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Dashboard = () => {
  const { user } = useAuthContext(); // to get the logged user information

  return (
    <div className="d-flex">
      <div
        className="bg-secondary text-white vh-100 position-sticky"
        style={{ minWidth: "250px" }}
      >
        <nav className="nav flex-column p-3">
          <span className="nav-link text-white">
            <i className="fa fa-user"></i> {user.firstName}
          </span>

          <Link className="nav-link text-white" to="/">
            <i className="fa fa-home"></i> Home
          </Link>
          <Link className="nav-link text-white" to="/courses/add-course">
            <i className="fa fa-pencil"></i> Add Course
          </Link>
          <Link className="nav-link text-white" to="#">
            <i className="fa fa-user"></i> Profile
          </Link>
          <Link className="nav-link text-white" to="#">
            <i className="fa fa-cog"></i> Settings
          </Link>
          <Link className="nav-link text-white" to="#">
            <i className="fa fa-envelope"></i> Messages
          </Link>
          <Link className="nav-link text-white" to="#">
            <i className="fa fa-sign-out"></i> Logout
          </Link>
        </nav>
      </div>{" "}
      {/* Main Content goes here */}
      <div className="p-3" style={{ flex: 1 }}>
        <h2>Main Content</h2>

        <div className="container">
          .
          <div class="row justify-content-center align-items-center g-2">
            <div class="col bg-white p-3">
              <h3 className="text-uppercase"> Welcome to Dashboard</h3> <hr />
              <p>
                <b> Full Name:</b> {user.firstName} {user.lastName}
              </p>
              <p>
                <b>Email Address: </b>
                {user.email}
              </p>
            </div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
