import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ user }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Top info bar (hidden) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{ display: 'none' }}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active mr-auto">
            <a className="nav-link" href="#">Tel: +251 111 559769. E: info@hilcoe.net</a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-danger" href="#">Notice Board +</a>
          </li>
        </ul>
      </nav>

      {/* Main navbar */}
      <nav className="navbar navbar-expand-lg fixed-top mb-5" style={{ backgroundColor: 'rgb(158, 77, 19)' }}>
        <Link className="navbar-brand" to="/">
          <img src="/static/website/logo-hilcoe.jpg" className="w-75" alt="Hilcoe Logo" />
        </Link>

        <button
          className="navbar-toggler bg-primary"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse mr-3 ${!isCollapsed ? 'show' : ''}`} id="collapsed-menu-items">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admission">Admission</Link></li>

            {/* Academics Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="btn dropdown-toggle text-white"
                style={{ backgroundColor: 'rgb(158, 77, 19)', border: 'none' }}
                id="academicsDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Academics
              </button>
              <ul className="dropdown-menu bg-primary" aria-labelledby="academicsDropdown">
                <li><Link className="dropdown-item text-white" to="/cs-bsc">BSc. in Computer Science</Link></li>
                <li><Link className="dropdown-item text-white" to="/se-bsc">BSc. in Software Engineering</Link></li>
                <li><Link className="dropdown-item text-white" to="/cs-msc">MSc. in Computer Science</Link></li>
                <li><Link className="dropdown-item text-white" to="/se-msc">MSc. in Software Engineering</Link></li>
                <li><Link className="dropdown-item text-white" to="/courses-list">Courses</Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/resources">Resources</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact</Link></li>

            {/* Search Box */}
            <li className="nav-item input-group">
              <input type="text" className="form-control col-8" placeholder="Search" />
              <div className="input-group-append">
                <button className="btn btn-outline-light bg-primary" type="button">
                  <i className="fa fa-search text-white"></i>
                </button>

              </div>
            </li>
          </ul>

          {/* Auth Dropdown */}
          <div className="dropdown ml-auto">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="userMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-user"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end bg-primary" aria-labelledby="userMenu">
              {user ? (
                <>
                  <li><Link className="dropdown-item text-white" to="/logout">Logout</Link></li>
                  <li><Link className="dropdown-item text-white" to={`/edit-profile/${user.profileId}`}>Edit Profile</Link></li>
                  <li><Link className="dropdown-item text-white" to="/change-password">Change Password</Link></li>
                  <li><Link className="dropdown-item text-white" to="/reset-password">Reset Your Password?</Link></li>
                  {(user.role || user.isSuperuser || user.isStaff) && (
                    <li><Link className="dropdown-item text-white" to="/admin-dashboard">My Homepage</Link></li>
                  )}
                </>
              ) : (
                <>
                  <li><Link className="dropdown-item text-white" to="/signup">Signup</Link></li>
                  <li><Link className="dropdown-item text-white" to="/login">Login</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
