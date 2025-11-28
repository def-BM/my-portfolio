import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="section about-section"
    >
      {/* Left: Image */}
      <div className="about-left">
        <img
          src= {process.env.PUBLIC_URL + "/photo.png"}  // Image path
          alt="Profile"
          className="about-image"
        />
      </div>

      {/* Right: About Me Text */}
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          My name is Brijesh Y. Maurya. I am currently pursuing a Bachelor of Engineering in Information Technology at A.C. Patil College of Engineering. I am in my final year and have maintained a strong academic record. 
          Along with my major degree, I am also pursuing an Honours specialization in Artificial Intelligence and Machine Learning, which has strengthened my technical skills and interest in intelligent systems and data-driven technologies. <br /><br />
          I am a curious and driven individual with a strong passion for Data Science, Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI.
          While I am currently pursuing a degree in Engineering, my core interest lies in extracting meaningful insights from data and building intelligent systems, rather than traditional web development. <br /><br />
          I enjoy working on real-world problems using Python, data visualization, machine learning, and predictive modeling. My hands-on experience includes developing end-to-end ML projects, creating intuitive data-driven applications using Streamlit, and applying modern AI techniques to solve practical challenges.<br /><br />
          I am enthusiastic about AI-powered and data-centric applications and aspire to contribute to impactful solutions that leverage data analytics, deep learning, and GenAI to make a real difference. <br /><br />
          I am proficient in programming languages such as Python, Java, JavaScript, C++, and C. I also have working knowledge of web development technologies like HTML, CSS, JavaScript, and React, and I am familiar with databases such as MongoDB and SQL. <br /><br />
          Some of the projects I’ve worked on during my academic journey include:
          <ul>
            <li>A Java-based memory game with GUI and database integration called "Card Guessing Game".</li>
            <li>A full-stack web application for event space booking called "Eventura".</li>
            <li>Developed a Python-based Loan Eligibility Prediction System with an interactive GUI and database connectivity, achieving 85% prediction accuracy.</li>
            <li>Developed a Telecom Churn Prediction model with an interactive Streamlit-based GUI, achieving 76.72% prediction accuracy.</li>
          </ul>
          All of these projects were built collaboratively with my team, and I take pride in my teamwork and coordination skills. <br /><br />  
          Although my English speaking skills are currently a work in progress, I am actively working on improving them. 
          I enjoy solving problems and exploring their solutions. I have practiced problem-solving on platforms like HackerRank and LeetCode and continually challenge myself to solve more problems. 
        </p>
      </div>
    </motion.section>
  );
};

export default About;
