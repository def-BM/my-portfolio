import React from 'react';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My Résumé </h1>
      <div className="resume-container">
        <h1 className="resume-title">Brijesh Y. Maurya</h1>
        <p className="resume-contact"><FontAwesomeIcon icon={faEnvelope} /> brijesh27m@gmail.com | <FontAwesomeIcon icon={faPhone} /> +91-9136212707</p>

        <section className="resume-section">
          <h2>Objective</h2>
          <p>
              Aspiring AI/ML and Data Science enthusiast with strong foundations in Python, Java, and SQL. Seeking an
              internship opportunity to apply problem-solving skills and contribute to real-world machine learning projects while
              gaining hands-on industry experience.
          </p>
        </section>

        <section className="resume-section">
          <h2>Professional Experience</h2>
          <div className="resume-item">
            <ul>
              <li>Pursuing my Bachelor's degree in Information Technology with a focus on software development and programming languages at A. C. Patil college of engineering </li>
              <li>Along with my main degree, I am also pursuing an Honours Degree in AI & ML </li>
              <li>Proficient in Java, Python and JavaScript with hands-on experience in developing small-scale projects during coursework </li>
              <li>Strong problem-solving skills demonstrated through participation in college level hackathons and coding challenges </li>
              <li>Excellent communication and teamwork abilities gained through group projects and collaborative assignments </li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h4>B.E. in Information Technology – A. C. Patil college of Engineering Navi Mumbai, Kharghar (Mumbai University)</h4>
            <p className="resume-date"> November 2022 – May 2026 </p>
            <ul>
              <li>Pursuing my degree with extensive knowledge and experience, maintaining a 7-8 CGPA in each semester </li>
            </ul>

            <h4>HSC in Science – K. J. Somaiya College of Science & Arts, Vidyavihar (Maharashtra State Board) </h4>
            <p className="resume-date">  June 2020 - May 2022 </p>
            <ul>
              <li>Successfully scored 72.40% in board exam</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>
          <div className="resume-item">
              <ul>
                  <li>Languages: Python, Java, SQL, HTML, CSS, JavaScript, MongoDB </li>
                  <li>Tools/Frameworks: VS Code, PyCharm, NumPy, Pandas, Matplotlib, React </li>
                  <li>Concepts: Data Structures & Algorithms (DSA), DBMS, OOP, Basic ML algorithms </li>
                  <li>Soft Skills: Teamwork, Communication, Time Management, Problem Solving </li>
              </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>
          <div className="resume-item">
              <ul>
                  <li>Telecom Churn Prediction (python based Machine Learning Project) </li>
                  <li>Event Space Booking System (Eventura), Full stack web based project </li>
                  <li>Loan Eligiblity Prediction (Python Based Project) </li>
                  <li>Customer Segmentation Analysis using Power BI</li>
              </ul>
          </div>
        </section>

        <div className="download-button">
          <a href = {process.env.PUBLIC_URL + "/MyResume.pdf"} download>Download Resume (PDF)</a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
