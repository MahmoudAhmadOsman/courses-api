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

  const getRoleDisplay = () => {
    if (user && user.role.includes("Admin")) {
      return "Admin";
    } else if (user && user.role.includes("Manager")) {
      return "Manager";
    } else if (user && user.role.includes("Student")) {
      return "Student";
    } else {
      return "Normal User";
    }
    // if (
    //   user &&
    //   (user.role.includes("Admin") || user.role.includes("Manager"))
    // ) {
    //   return "Admin | Manager";
    // }
    // return user && user.role.join(" | ");
  };

  return (
    <div className="d-flex">
      <div
        className="bg-secondary text-white vh-100 position-sticky"
        // style={{ minWidth: "250px" }}
      >
        <nav className="nav flex-column p-3">
          <span className="nav-link text-white">
            <h3>Dashboard</h3> <hr />
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
        <div className="container">
          <h2 className="mb-3">Main Content</h2> <hr />
          <div class="row justify-content-center align-items-center g-2 mt-3">
            <div className="col shadow-lg p-3 mb-5 bg-body rounded bg-white">
              <h3 className="text-uppercase"> Welcome to Dashboard</h3> <hr />
              <div className="text-muted">
                <p>
                  <b> Full Name:</b> {user && user.firstName}{" "}
                  {user && user.lastName}
                </p>
                <p>
                  <b>Email Address: </b>
                  {user && user.email}
                </p>
                <p>
                  <b>Your Role: </b>
                  {getRoleDisplay()}
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
