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
          src="/Photo.jpeg"   // Image path
          alt="Profile"
          className="about-image"
        />
      </div>

      {/* Right: About Me Text */}
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          My name is Brijesh Y. Maurya, and I am currently pursuing a degree in Information Technology (IT) Engineering from A.C. Patil College of Engineering. 
          I am in my final year and have maintained a good academic record. <br /><br />
          I am a curious and driven individual with a strong passion for Data Science, Artificial Intelligence, and Machine Learning. 
          While I am pursuing an engineering degree, my core interest lies in extracting meaningful insights from data rather than web development. <br /><br />
          I enjoy working on real-world problems using Python, data visualization, and predictive modeling. 
          My hands-on experience includes building intelligent systems, working with machine learning frameworks, and developing user-friendly tools using Streamlit for better data communication. <br /><br />
          I am enthusiastic about AI-powered applications and aspire to contribute to impactful projects that solve real-world challenges using data. 
          I am proficient in several programming languages including Python, Java, JavaScript, C++, and C. 
          I also have basic knowledge of web development technologies like HTML, CSS, JavaScript, and React. 
          Additionally, I am familiar with databases like MongoDB and SQL. <br /><br />
          Some of the projects I’ve worked on during my academic journey include:
          <ul>
            <li>A Java-based memory game with GUI and database integration called "Card Guessing Game"</li>
            <li>A full-stack web application for event space booking called "Eventura"</li>
            <li>A Python-based Loan Eligibility Prediction system with GUI and database connectivity</li>
            <li>A Telecom Churn Prediction model with GUI built using Streamlit</li>
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
