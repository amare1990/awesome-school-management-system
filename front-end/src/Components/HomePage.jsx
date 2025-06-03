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
            <img src="/static/website/photo_5.jpg" className="d-block w-100 h-100" alt="..." />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="d-flex flex-row justify-content-between">
          <div className="col-md-4">
            <h2 className="text-primary">About XCollege</h2>
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
          <hr className="border border-primary border-3 opacity-75 w-100" />
        </div>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h6><a href="#" className="btn btn-success">Read All News</a></h6>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="card border-0" style={{ width: '18rem' }}>
            <img src="/static/website/ethi-telecom.jpg" className="card-img-top" alt="..." />
            <span className="mt-3 pl-4"><small>January 23, 2023</small></span>
            <div className="card-body">
              News description goes here...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
