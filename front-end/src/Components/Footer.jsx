import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid mt-5 px-0">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
        <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-google"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-github"></i></a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">XCollege</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  HiLCoE is committed to excellence and continuous improvement. HiLCoE is known for industrious educational quality,
                  a student-centered focus, and service beyond the campus.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Departments</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><a href="#!" className="text-white">Electrical and Computer Engineering</a></p>
                <p><a href="#!" className="text-white">Software Engineering</a></p>
                <p><a href="#!" className="text-white">Computer Science</a></p>
                <p><a href="#!" className="text-white">Information Technology</a></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><a href="/register" className="text-white">Create an account</a></p>
                <p><a href="/admin" className="text-white">My homepage</a></p>
                <p><a href="#!" className="text-white">Pay monthly fee</a></p>
                <p><a href="#!" className="text-white">Pay for registration</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><i className="fas fa-home mr-3"></i> 4 killo, Arada, Addis Ababa, Et</p>
                <p><i className="fas fa-envelope mr-3"></i> amare@xcollege.edu.et</p>
                <p><i className="fas fa-phone mr-3"></i> 0913850328 </p>
                <p><i className="fas fa-print mr-3"></i> Fax</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright: <a className="text-white" href="#">Amare Mekonnen</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
