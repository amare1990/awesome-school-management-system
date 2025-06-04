import React from "react";
import building1 from "../../public/static/website/xcollge-bldg.jpg";
import building2 from "../../public/static/website/xcollege-bldg-2.png";

const Admission = () => {
  return (
    <div className="container text-center mt-5 pt-5">
      <br />
      <h4 className="fw-bold text-left mb-5">Admission to BSc. Programs</h4>
      <div className="row">
        <div className="col">
          <p>
            Admission is available both in day-time and evening programmes. The
            B.Sc. programme falls within two categories:
          </p>
          <p>
            The first category is at advanced standing level. Applicants eligible
            for admission at this level are graduates with degrees in any field
            from accredited universities/colleges. Exemptions for transfer
            applicants or graduates from another university could be requested,
            for the courses taken before joining HiLCoE, during application for
            admission by completing a separate form made available for this
            purpose.
          </p>
          <p>
            The second category of applicants eligible for the regular B.Sc.
            Programmes are those students who passed The Ethiopian Higher
            Education Entrance Certificate Examination or its equivalent and
            fulfill the formal requirements set by the Ministry of Science and
            Higher Education.
          </p>
          <div className="container my-4">
            <img src={building1} alt="College Building" className="d-block w-100" />
          </div>
        </div>
        <div className="col text-left">
          <p className="fw-bold">Admission Procedures</p>
          <p>
            Admission is open for Ethiopians as well as international students.
            Apart from the stated requirements for admissions into the different
            study programmes, Special Criteria for Admission may also be set by
            the Academic Council when deemed necessary, through entrance exams,
            interviews or by reviewing merits already attained. The Academic
            Programme Council determines the number of students who may be
            admitted to each study programme in each entry according to the
            college’s available resources.
          </p>
          <p>
            To help the Academic Programme Council assess the applications made
            for admission to the college, each applicant is required to submit
            the following to the Admissions Office:
          </p>
          <ol>
            <li>A completed application form obtained from the Office</li>
            <li>
              Certified copies of original documents (degree, transcript,
              academic testimonials/references/recommendations or any documents
              that could be used as evidence of academic attainment).
            </li>
            <li>Two 2 x 3 size pictures (taken within the last six months)</li>
          </ol>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h4 className="fw-bold mt-5">Admission to MSc. Programs</h4>
          <p>
            The programme is organized to admit students from various academic
            backgrounds having a first degree from an accredited institution with
            a high level of aptitude for computing. Bridging courses are
            primarily intended for first degree graduates from non-IT
            disciplines, although graduates with computing backgrounds from other
            universities whose curricula are significantly different from
            HiLCoE’s undergraduate curriculum may also join.
          </p>
          <p>
            Moreover, those applicants who wish to reinforce their undergraduate
            studies with the bridging courses provided may also find this a good
            place to start. Particularly the following requirement must be
            fulfilled:
          </p>
          <div className="container my-4">
            <img src={building2} alt="College Building 2" className="d-block w-100" />
          </div>
        </div>

        <div className="col mt-5 text-left">
          <ul>
            <li>
              A first degree in computer science or minor in computing and
              related fields like Information Science/Systems, Software
              Engineering and Computer Engineering from an accredited institution.
            </li>
            <span>OR</span>
          </ul>
          <ul>
            <li>A first degree in any discipline</li>
            <span>AND</span>
          </ul>
          <ul>
            <li>A postgraduate diploma in computer science</li>
          </ul>
          <span>OR</span>
          <ul>
            <li>Passed bridging courses</li>
          </ul>
          <p>
            (OR A significant level of knowledge with work experience in
            computing and passed entrance exam).
          </p>
          <p>
            Applicants will sit for Entrance Exam before they can be accepted to
            join the programme.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h4 className="fw-bold mt-5">Transfers</h4>
          <p>
            In principle, transfer of students within HiLCoE's programmes is
            allowed if admission transfer procedure is completed. A student must
            satisfy the minimum admission requirements stated in their respective
            programmes. In addition, all of the following course transfer rules
            are enforced as part of the admission process for those applicants
            who didn’t complete the programme and exemption would be considered
            for those applicants who have already completed one of the programmes.
          </p>
        </div>
        <div className="col text-left">
          <ol>
            <li>
              Course transfer requests are processed during application for
              admission transfer provided that the applicant has completed the
              form made available for this purpose and submitted all relevant
              academic documents.
            </li>
            <li>
              A maximum of 30% of the total credit hours of a programme to be
              admitted to can be exempted.
            </li>
            <li>Exemption of courses is granted mainly from core courses.</li>
            <li>Project/Thesis work transfer or exemption cannot be granted.</li>
            <li>All transfers shall be approved by the Academic Council.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Admission;
