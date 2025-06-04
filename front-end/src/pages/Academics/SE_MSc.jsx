import React from "react";

const courses = {
  compulsory: [
    { code: "SE601", title: "Research Methodology" },
    { code: "SE651", title: "Requirements Engineering" },
    { code: "SE687", title: "Information Systems Security" },
    { code: "CS222", title: "Computer Programming II" },
    { code: "SE143", title: "Database Management Systems" },
    { code: "SE221", title: "Object Oriented Programming" },
    { code: "CS221", title: "Computer Programming I" },
  ],
  bridging: [
    { code: "CS601", title: "Research Methodology" },
    { code: "CS652", title: "Requirements Specification and Design" },
    { code: "SE434", title: "Artificial Intelligence" },
    { code: "SE426", title: "Simulation and Modeling" },
  ],
  elective: [
    { code: "SE800", title: "Thesis" },
    { code: "SE799", title: "Research Project" },
    { code: "SE776", title: "Software Engineering of Web Applications" },
    { code: "CS785", title: "Advanced Information Retrieval" },
    { code: "CS785", title: "Advanced Information Retrieval" },
    { code: "CS785", title: "Advanced Information Retrieval" },
  ],
};

const CourseList = ({ courses }) => (
  <>
    {courses.map(({ code, title }, i) => (
      <div key={i}>
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
  </>
);

const MScSoftwareEngineering = () => {
  return (
    <div className="container my-5">
      <br /><br />
      <div className="my-2">
        <h2 className="text-start fs-1 fw-bold">Master of Science in Software Engineering</h2>
        <p>This Programme is composed of general education, supportive and computer science courses all selected to meet the current needs of the ICT industry and to ensure academic parity and build up students’ confidence & flexibility.</p>
        <p>The curriculum is designed to prepare students to specialize in a diverse range of areas of computer science with the opportunity to further advance their career in fields such as information science and mathematical science, and to give them the broad skills essential to all areas related to science and technology.</p>
        <p>Graduates of this programme are expected to be well-regarded to identify the challenges/opportunities of ICT. Thus, they can work in several computer related jobs/positions, particularly as application developers (programmers) and system and network administrators, and serve as graduate and/or research assistants in higher education institutions.</p>
      </div>

      <div className="my-5">
        <h5 className="text-start fs-1 fw-bold">Compulsory Courses (25 Cr Hrs)</h5>
        <CourseList courses={courses.compulsory} />
      </div>

      <div className="my-5">
        <h5 className="text-start fs-1 fw-bold">Bridging Core Courses (24 Cr Hrs)</h5>
        <CourseList courses={courses.bridging} />
      </div>

      <div className="my-5">
        <h5 className="text-start fs-1 fw-bold">Elective Courses (16 Cr Hrs)</h5>
        <CourseList courses={courses.elective} />
      </div>
    </div>
  );
};

export default MScSoftwareEngineering;
