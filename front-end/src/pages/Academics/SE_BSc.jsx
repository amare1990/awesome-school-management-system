import React from 'react';

const SE_BSc = () => {
  return (
    <div className="container my-5">
      <br /><br />
      <div className="my-2">
        <h2 className="text-start fs-1 fw-bold">B. Sc. Degree in Software Engineering</h2>
        <p>
          This Programme is composed of general education, supportive and computer science
          courses all selected to meet the current needs of the ICT industry and to ensure
          academic parity and build up students’ confidence & flexibility.
        </p>
        <p>
          The curriculum is designed to prepare students to specialize in a diverse range of
          areas of computer science with the opportunity to further advance their career in
          fields such as information science and mathematical science, and to give them the
          broad skills essential to all areas related to science and technology.
        </p>
        <p>
          Graduates of this programme are expected to be well-regarded to identify the
          challenges/opportunities of ICT. Thus, they can work in several computer related
          jobs/positions, particularly as application developers (programmers) and system and
          network administrators, and serve as graduate and/or research assistants in higher
          education institutions.
        </p>
      </div>

      {/* Compulsory Courses */}
      <div className="my-5">
        <h5 className="text-start fs-1 fw-bold">Software Engineering (BSc.) Compulsory Courses (72 Cr. Hrs.)</h5>
      </div>

      <div className="container">
        {[
          ['SE111', 'Fundamentals of Software Engineering'],
          ['SE112', 'Computer Programming I'],
          ['SE121', 'Computer Programming II'],
          ['CS222', 'Computer Programming II'],
          ['SE143', 'Database Management Systems'],
          ['SE221', 'Object Oriented Programming'],
          ['CS221', 'Computer Programming I'],
        ].map(([code, title], index) => (
          <div key={index}>
            <div className="row">
              <div className="col-lg-2">
                <p><a href="#">{code}</a></p>
              </div>
              <div className="col-lg-6">
                <p><a href="#">{title}</a></p>
              </div>
              <div className="col-lg-4">
                <p className="lead">
                  <a href="#"><i className="fas fa-long-arrow-alt-right text-primary"></i></a>
                </p>
              </div>
            </div>
            <hr className="col-lg-8" />
          </div>
        ))}

        {/* Elective Courses */}
        <div className="my-5">
          <h5 className="text-start fs-1 fw-bold">Electives Courses - Software Engineering (BSc.) (35 Cr. Hr.)</h5>
        </div>

        {[
          ['SE436', 'Organizational Behavior'],
          ['SE435', 'Complexity Theory'],
          ['SE434', 'Artificial Intelligence'],
          ['SE426', 'Simulation and Modeling'],
        ].map(([code, title], index) => (
          <div key={index}>
            <div className="row">
              <div className="col-lg-2">
                <p><a href="#">{code}</a></p>
              </div>
              <div className="col-lg-6">
                <p><a href="#">{title}</a></p>
              </div>
              <div className="col-lg-4">
                <p className="lead">
                  <a href="#"><i className="fas fa-long-arrow-alt-right text-primary"></i></a>
                </p>
              </div>
            </div>
            <hr className="col-lg-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SE_BSc;
