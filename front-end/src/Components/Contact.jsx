import React from 'react';

const Contact = () => {
  return (
    <div className="container my-5 bg-secondary text-white p-5">
      <div className="row">
        {/* Contact Info Section */}
        <div className="col-lg-4">
          <h2 className="text-uppercase font-weight-bolder p-3">Reach Us</h2>
          <p>Arat Kilo in front of the Parliament traffic light, about 70 meters along the road to Piassa.</p>
          <div className="my-5">
            <h6 className="font-weight-bolder">P.O. Box: <span>25304/1000</span></h6>
            <h6 className="font-weight-bolder text-uppercase">Addis Ababa, Ethiopia</h6>
          </div>
          <p><i className="fas fa-envelope"></i> info@hilcoe.net</p>
          <hr className="bg-white" />
          <p><i className="fas fa-phone"></i> +251 111 559769 &nbsp; <span>Registrar Office</span></p>
          <hr className="bg-white" />
          <p><i className="fas fa-phone"></i> +251 111 275039 &nbsp; <span>Admission Office</span></p>
          <hr className="bg-white" />
          <p><i className="fas fa-phone"></i> +251 111 564900, +251 111 564888, +251 111 275026 &nbsp; <span>Reception</span></p>
          <hr className="bg-white" />
          <div>
            <a href="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-google"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-github"></i></a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-lg-6 ml-5">
          <h5 className="font-weight-bolder text-uppercase p-3">Please Send Us your Feedback</h5>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name" />
              <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input type="email" className="form-control" id="email" placeholder="Your email" />
              <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject (Optional)</label>
              <input type="text" className="form-control" id="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
