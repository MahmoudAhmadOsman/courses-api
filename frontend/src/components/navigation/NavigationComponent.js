import { Link } from "react-router-dom";
const NavigationComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Lexis Courses
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/api/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses/add-course">
                  Add Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/api/users/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/api/users/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     

    </>
  );
};

export default NavigationComponent;
