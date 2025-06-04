import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const compulsoryCourses = [
  { code: 'CS211', name: 'Information Communication Technology Fundamentals' },
  { code: 'CS221', name: 'Computer Programming I' },
  { code: 'CS222', name: 'Computer Programming II' },
  { code: 'CS223', name: 'Windows Programming (Using Visual Studio .NET)' },
];

const electiveCourses = [
  { code: 'CS498', name: 'Advanced Geographic Information Systems and Remote Sensing' },
  { code: 'CS497', name: 'Geographic Information Systems' },
  { code: 'CS495', name: 'IT Project Management' },
];

const CourseList = ({ title, courses }) => (
  <div className="my-5">
    <h4 className="mb-3">{title}</h4>
    <div className="list-group">
      {courses.map((course, index) => (
        <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong className="me-3 text-primary">{course.code}</strong>
            {course.name}
          </div>
          <FaArrowRight className="text-secondary" />
        </div>
      ))}
    </div>
  </div>
);

export default function BScComputerScience() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">B.Sc. Degree in Computer Science</h2>
      <p>
        This programme is composed of general education, supportive and computer science courses
        selected to meet the current needs of the ICT industry, ensure academic parity, and build
        up students’ confidence and flexibility.
      </p>
      <p>
        The curriculum is designed to prepare students to specialize in diverse areas of computer
        science with the opportunity to advance their careers in fields like information science
        and mathematical science.
      </p>
      <p>
        Graduates are equipped to tackle ICT challenges and can work in roles like application
        developer, system and network administrator, or research assistant in higher education.
      </p>

      <CourseList title="Computer Science Compulsory Courses (72 Cr. Hrs.)" courses={compulsoryCourses} />
      <CourseList title="Elective Computer Science Courses (35 Cr. Hrs.)" courses={electiveCourses} />
    </div>
  );
}
