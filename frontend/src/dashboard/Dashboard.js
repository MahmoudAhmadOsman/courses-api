import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
const Dashboard = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
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
          {/*  */}
          <Link className="nav-link text-white" onClick={handleClick}>
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
            <div className="col bg-white p-3">
              <h3 className="text-uppercase"> Welcome to Dashboard</h3> <hr />
              <div className="text-muted">
                <p>
                  <b> Full Name:</b> {user && user.firstName}{" "}
                  {user && user.lastName}
                </p>
                <p>
                  <b>Email Address: </b>
                  {user.email}
                </p>
                <p>
                  <b>Role: </b>{" "}
                  {user && user.role ? (
                    <div> {user.role}</div>
                  ) : (
                    <div>Admin</div>
                  )}
                </p>
                <p>
                  <b>Is Admin: </b>
                  {user && user.isAdmin ? (
                    <div className="btn btn-outline-success btn-sm">YES</div>
                  ) : (
                    <div className="btn btn-outline-danger btn-sm">NO</div>
                  )}
                </p>
              </div>
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
