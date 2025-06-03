import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  return (
    <>
      {/* Hidden top info bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{ display: 'none' }}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active mr-auto">
            <a className="nav-link" href="#">Tel : +251 111 559769. E: info@hilcoe.net </a>
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

        <button className="navbar-toggler bg-primary" type="button" data-toggle="collapse" data-target="#collapsed-menu-items">
          <span className="navbar-toggler-icon text-white">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse mr-3" id="collapsed-menu-items">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admission">Admission</Link></li>

            {/* Dropdown menu */}
            <div className="dropdown">
              <button className="btn dropdown-toggle text-primary" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                <span style={{ color: 'white', backgroundColor: 'rgb(158, 77, 19)' }}>Academics</span>
              </button>
              <ul className="dropdown-menu bg-primary" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item nav-link" to="/cs-bsc">BSc. in Computer Science</Link>
                <Link className="dropdown-item nav-link" to="/se-bsc">BSc. in Software Engineering</Link>
                <Link className="dropdown-item nav-link" to="/cs-msc">MSc. in Computer Science</Link>
                <Link className="dropdown-item nav-link" to="/se-msc">MSc. in Software Engineering</Link>
                <Link className="dropdown-item nav-link" to="/courses-list">Courses</Link>
              </ul>
            </div>

            <li className="nav-item"><Link className="nav-link" to="/resources">Resources</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact</Link></li>

            {/* Search Box */}
            <li className="nav-item input-group">
              <input type="text" className="form-control col-8" placeholder="Search" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </li>
          </ul>

          {/* Auth section */}
          <div className="setting">
            {user ? (
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                  <i className="fa fa-user"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right bg-primary">
                  <Link className="nav-link text-white" to="/logout">Logout</Link>
                  <Link className="nav-link text-white" to={`/edit-profile/${user.profileId}`}>Edit Profile</Link>
                  <Link className="nav-link text-white" to="/change-password">Change Password</Link>
                  <Link className="nav-link text-white" to="/reset-password">Reset Your Password?</Link>
                  {(user.role || user.isSuperuser || user.isStaff) && (
                    <Link className="nav-link text-white" to="/admin-dashboard">My Homepage</Link>
                  )}
                </div>
              </div>
            ) : (
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                  <i className="fa fa-user"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right bg-primary">
                  <Link className="dropdown-item text-white nav-link" to="/signup">Signup</Link>
                  <Link className="dropdown-item text-white nav-link" to="/login">Login</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
