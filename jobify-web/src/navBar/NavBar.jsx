import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4">
      <Link className="navbar-brand fw-bold fs-3" to="/">
        JobPortal
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
          <li className="nav-item">
            <Link className="nav-link fs-4" to="/jobs">Jobs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-4" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-light btn-sm fw-semibold fs-4" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
