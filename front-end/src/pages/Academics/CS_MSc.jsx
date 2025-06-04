import React from 'react';

const MscComputerScience = () => {
  const bridgingCompulsoryCourses = [
    { code: 'CS510', name: 'Information Systems' },
    { code: 'CS530', name: 'Problem Solving with Programming I and II' },
    { code: 'CS532', name: 'Object Oriented Programming and Design' },
    { code: 'CS222', name: 'Computer Programming II' },
    { code: 'SE143', name: 'Database Management Systems' },
    { code: 'SE221', name: 'Object Oriented Programming' },
    { code: 'CS221', name: 'Computer Programming I' },
  ];

  const bridgingCoreCourses = [
    { code: 'CS601', name: 'Research Methodology' },
    { code: 'CS652', name: 'Requirements Specification and Design' },
    { code: 'SE434', name: 'Artificial Intelligence' },
    { code: 'SE426', name: 'Simulation and Modeling' },
  ];

  const electiveCourses = [
    { code: 'CS800', name: 'Thesis' },
    { code: 'CS799', name: 'Research Project' },
    { code: 'CS785', name: 'Advanced Information Retrieval' },
    { code: 'CS785', name: 'Advanced Information Retrieval' },
    { code: 'CS785', name: 'Advanced Information Retrieval' },
    { code: 'CS785', name: 'Advanced Information Retrieval' },
  ];

  const renderCourses = (courses) =>
    courses.map((course, idx) => (
      <React.Fragment key={idx}>
        <div className="row">
          <div className="col-lg-2"><p><a href="#">{course.code}</a></p></div>
          <div className="col-lg-6"><p><a href="#">{course.name}</a></p></div>
          <div className="col-lg-4"><p className="lead"><i className="fas fa-long-arrow-alt-right text-primary"></i></p></div>
        </div>
        <hr className="col-lg-8" />
      </React.Fragment>
    ));

  return (
    <div className="container my-5">
      <h2 className="fs-1 fw-bold">Master of Science in Computer Science</h2>
      <p>This Programme is composed of general education, supportive and computer science courses all selected to meet the current needs of the ICT industry and to ensure academic parity and build up students’ confidence & flexibility.</p>
      <p>The curriculum is designed to prepare students to specialize in a diverse range of areas of computer science with the opportunity to further advance their career in fields such as information science and mathematical science, and to give them the broad skills essential to all areas related to science and technology.</p>
      <p>Graduates of this programme are expected to be well-regarded to identify the challenges/opportunities of ICT. Thus, they can work in several computer related jobs/positions, particularly as application developers (programmers) and system and network administrators, and serve as graduate and/or research assistants in higher education institutions.</p>

      <div className="my-5">
        <h5 className="fs-3 fw-bold">Bridging Compulsory Courses (25 Cr Hrs)</h5>
        {renderCourses(bridgingCompulsoryCourses)}
      </div>

      <div className="my-5">
        <h5 className="fs-3 fw-bold">Bridging Core Courses (24 Cr Hrs)</h5>
        {renderCourses(bridgingCoreCourses)}
      </div>

      <div className="my-5">
        <h5 className="fs-3 fw-bold">Elective Courses (16 Cr Hrs)</h5>
        {renderCourses(electiveCourses)}
      </div>
    </div>
  );
};

export default MscComputerScience;
