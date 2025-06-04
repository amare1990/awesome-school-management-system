import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

const HomePage = ({ messages = [] }) => {
  return (
    <div className="container mt-5 pt-1">
      {messages.length > 0 &&
        messages.map((message, index) => (
          <div className="alert alert-warning alert-dismissible fade show" role="alert" key={index}>
            {message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ))}

      <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {["My-Photo.jpg", "photo_01.png", "photo_02.png", "photo_03.png"].map((img, idx) => (
            <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} data-interval="3000" key={img}>
              <img src={`/static/website/${img}`} className="d-block w-100 h-25" alt="Amare's photo" />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon bg-primary p-2" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span className="carousel-control-next-icon bg-primary p-2" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container mt-5">
        <div className="d-flex flex-row justify-content-between">
          <div className="col-md-6">
            <h2 className="text-primary">Apply for Admission</h2>
            <p>HiLCoE is a specialized computer science and technology college...</p>
            <p>HiLCoE’s underlying philosophy is...</p>
            <Link to="/admission" className="btn btn-primary rounded-pill float-right text-white">More +</Link>
          </div>
          <div className="col-md-6">
            <img src="/static/website/photo_03.png" className="d-block w-100 h-100" alt="..." />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="d-flex flex-row justify-content-between">
          <div className="col-md-4">
            <h2 className="text-primary">About the Awesome School</h2>
            <img src="/static/website/about-xcollege.jpg" className="d-block w-100 h-100" alt="About XCollege" />
          </div>
          <div className="col-md-8">
            <p>HiLCoE is committed to excellence...</p>
            <p>The college pioneered computer science education...</p>
            <p>HiLCoE offers Undergraduate and Post Graduate Degrees...</p>
            <Link to="/admission" className="btn btn-primary rounded-pill float-right text-white">More +</Link>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center mt-5">
        <h2 className="text-uppercase fs-1 text-primary">
          <i className="fas fa-graduation-cap"></i> Our Academic Programs
        </h2>
      </div>

      <div className="row mt-3">
        {["Computer Science", "Software Engineering", "MSCS", "MSSE"].map((program, i) => (
          <div className="col-sm-3" key={i}>
            <div className="card bg-primary">
              <h2 className="text-uppercase fs-1 text-secondary text-center">
                <i className="fas fa-graduation-cap"></i>
              </h2>
              <div className="card-body">
                <h4 className="card-title p-2 text-white">{`Program: ${program}`}</h4>
                <p className="card-text p-2 text-white">Program description goes here...</p>
                <a href="#" className="btn btn-primary float-right mr-2">Learn More +</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-5">
      <div className="d-flex p-2">
        <h4 className="text-primary">News & Updates</h4>
      </div>

      <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
        {/* Read All News Button */}
        <div>
          <h6><a href="#" className="btn btn-success">Read All News</a></h6>
        </div>
      </div>

      <div className="d-flex justify-content-between gap-3 flex-wrap mt-4">
        {/* Main News Card */}
        <div className="card border-0" style={{ width: '18rem' }}>
          <img src="/static/website/ethi-telecom.jpg" className="card-img-top" alt="Ethio Telecom" />
          <br /><br /><br />
          <span className="mt-3 pl-4"><small>January 23, 2023</small></span>
          <div className="card-body">
            <h5 className="card-title">Ethio Telecom Partner with GETFACTet to Boost Students’ Digital skills</h5>
            <br /><br />
            <a href="#" className="btn btn-secondary">Read More</a>
          </div>
        </div>

        {/* Secondary News Cards Column */}
        <div className="d-flex flex-column mb-3 gap-3">

          <div className="card border-0" style={{ width: '18rem' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="/static/website/ministry-of-innovation.png" className="card-img-right w-100" alt="Ministry of Innovation" />
              </div>
              <div className="card-body col-md-8">
                <h5 className="card-title"><small>June 25, 2016</small></h5>
                <p className="card-text">
                  <a href="#" className="btn btn-primary">The Ministry of Innovation and Internet Society sign new pact to advance digital economy in Ethiopia</a>
                </p>
              </div>
            </div>
          </div>

          <div className="card border-0" style={{ width: '18rem' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="/static/website/safaricom.jpeg" className="card-img-right w-100" alt="Safaricom" />
              </div>
              <div className="card-body col-md-8">
                <h5 className="card-title"><small>June 25, 2016</small></h5>
                <p className="card-text">
                  <a href="#" className="btn btn-primary">Safaricom PLC launches major recruitment drive targeting Ethiopians</a>
                </p>
              </div>
            </div>
          </div>

          <div className="card border-0" style={{ width: '18rem' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="/static/website/huawei.png" className="card-img-right w-100" alt="Huawei" />
              </div>
              <div className="card-body col-md-8">
                <h5 className="card-title"><small>June 25, 2016</small></h5>
                <p><small>/ Admission, Event</small></p>
                <p className="card-text">
                  <a href="#" className="btn btn-primary">Jobs Creation Commission and Huawei collaborate to cultivate ICT Talent Ecosystem in Ethiopia</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription + Notice Board */}
        <div className="card border-0" style={{ width: '18rem' }}>
          <div className="mb-3">
            <img src="/static/website/email_green.png" className="w-25" alt="Email" />
          </div>
          <form method="POST" className="mb-3">
            <input
              type="email"
              name="email-address"
              placeholder="Your Email Address"
              className="form-control mb-2"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <h6 className="text-uppercase mt-3 fw-bold">Notice Board</h6>
          <ul className="list-group mt-2">
            <li className="list-group-item border-0 px-0">
              <a href="#" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                Django Training
              </a>
            </li>
            <li className="list-group-item border-0 px-0">
              <a href="#" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                Info link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
