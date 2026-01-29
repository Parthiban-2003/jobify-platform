import { Link } from "react-router-dom";
import Profile from '../assets/Profile.png';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold SizeText">
              Find Your <span className="text-primary">Dream Job</span>
            </h1>
            <p className="text-muted mt-3 SizeText1">
              Search and apply for jobs easily from top companies.
            </p>

            <div className="mt-4">
              <Link to="/jobs" className="btn btn-primary me-3">
                Browse Jobs
              </Link>
              <Link to="/login" className="btn btn-outline-secondary">
                Login / Register
              </Link>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={Profile}
              alt="Job Search"
              className="img-fluid"
              />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="mb-4 text-center">Latest Jobs</h3>

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Frontend Developer</h5>
                <p className="card-text">Chennai • Full Time</p>
                <Link to="/jobs" className="btn btn-sm btn-primary">
                  View Job
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Backend Developer</h5>
                <p className="card-text">Bangalore • Remote</p>
                <Link to="/jobs" className="btn btn-sm btn-primary">
                  View Job
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">UI/UX Designer</h5>
                <p className="card-text">Coimbatore • Part Time</p>
                <Link to="/jobs" className="btn btn-sm btn-primary">
                  View Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="text-center mb-4">Why Choose Us?</h3>

        <div className="row text-center">
          <div className="col-md-4">
            <h5>Easy Apply</h5>
            <p className="text-muted">
              Apply for jobs in just one click.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Verified Companies</h5>
            <p className="text-muted">
              Trusted companies with real openings.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Free to Use</h5>
            <p className="text-muted">
              No payment required to apply.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white text-center mt-5 p-5">
        <h3>Ready to start your career?</h3>
        <Link to="/register" className="btn btn-light mt-3">
          Register Now
        </Link>
      </div>
    </>
  );
};

export default HomePage;
