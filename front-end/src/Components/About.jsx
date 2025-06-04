import React from 'react';
import logo from '../../public/static/website/logo.png';
import founders from '../../public/static/website/founders.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col">
            <p className="text-muted text-lg">THE SCHOOL OF YOUR DREAMS!</p>
            <h2 className="text-xl font-weight-bolder">ABOUT HiLCoE</h2>
            <img src={logo} alt="HiLCoE Logo" />
          </div>
          <div className="col">
            <p className="text-left">
              HiLCoE is a specialized computer science and technology college and has always placed great emphasis on delivering high-quality education and producing graduates with a good practical knowledge of computing in a wide variety of areas...
            </p>
          </div>
          <div className="col">
            <p className="text-left">
              HiLCoE’s underlying philosophy is to focus on scientific and engineering foundations so that graduates remain self-learners and productive with the pace of technology and business agility...
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5 bg-secondary text-white p-5">
        <div className="row">
          <div className="col">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <h6 className="text-large font-weight-bolder text-uppercase p-3">Why we are Different</h6>
            <p className="text-left">
              HiLCoE is committed to excellence and continuous improvement. It is being recognized as an innovative, dynamic, and exciting community in which to learn, teach and work...
            </p>
            <img src={founders} alt="Founders" />
          </div>

          <div className="col">
            <h6 className="text-large font-weight-bolder text-uppercase py-3">Our Vision & Mission</h6>

            <h6 className="font-weight-bolder pt-2 text-uppercase">Vision</h6>
            <ul>
              <li className="text-left">
                Aspires to be a Centre of Excellence in the area of ICT Education, Research and Development (ER&D).
              </li>
            </ul>

            <h6 className="font-weight-bolder pt-2 text-uppercase py-3">Mission</h6>
            <ul>
              <li className="text-left">
                To provide innovative undergraduate and graduate education that contributes to the development of society and the individual.
              </li>
              <li className="text-left">
                To establish a strong foundation in ICT and use of current technologies, and prepare students to be lifelong learners...
              </li>
              <li className="text-left">
                To conduct research and disseminate research results in ICT that will push the frontiers of knowledge and are relevant to the country's development.
              </li>
            </ul>
          </div>

          <div className="col">
            <h6 className="font-weight-bolder p-3 text-uppercase">Core values</h6>
            <p className="text-left">HiLCoE values the following as central to its success:</p>
            <ul>
              <li className="my-3">Student Satisfaction</li>
              <li className="my-3">Management Accessibility</li>
              <li className="my-3">Management Involvement</li>
              <li className="my-3">Continuous Reviews</li>
              <li className="my-3">Service Upgrades</li>
              <li className="my-3">Capacity Building</li>
              <li className="my-3">Socially Responsible</li>
              <li className="my-3">Social Entrepreneurship</li>
              <li className="my-3">Solution Focused</li>
              <li className="my-3">Participatory</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
