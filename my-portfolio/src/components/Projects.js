import React, { useState } from 'react';
import './Projects.css'

const projectsData = [
  {
    image: '/img1.jpeg',
    title: 'Telecom Churn Prediction',
    description: `This project predicts whether a telecom customer is likely to churn based on their demographic and usage data. 
            Built using Python and machine learning, it features a user-friendly Streamlit GUI where users can input customer details and instantly see churn predictions. 
            The model is trained on real-world data and supports better customer retention strategies by identifying at-risk users.`,
    link: 'https://github.com/def-BM/Telecom_churn_prediction.git',
  },
  {
    image: '/img2.png',
    title: 'Event Space Booking System (Eventura)',
    description: `Eventura is a web-based platform for booking event spaces for weddings, parties, or any special occasion. It is a full-stack website with both frontend and backend components. MongoDB is used to store user data.
                The platform includes two types of login: one for users and another for venue owners.
                Users can browse and book venues, while venue owners can update their venue details. This is my first web-based project.`,
    link: 'https://github.com/def-BM/Event_Space_Booking-Eventura-.git',
  },
  {
    image: '/img3.png',
    title: 'Loan Eligiblity Prediction',
    description: `Loan Eligibility Prediction is a Python-based project designed to predict a consumer’s eligibility for a loan based on their demographic details such as age, income, spending score, credit score, and more.
          I used Tkinter to create the GUI and MongoDB to store the data. This is a basic machine learning model developed by me and was my first Python project.`,
    link: 'https://github.com/def-BM/Loan_Eligiblity_Prediction-App.git',
  },
  {
    image: '/img4.jpeg',
    title: 'Gas Leakage Detection',
    description: `Gas Leakage Detection is a hardware and software-based project designed to detect gas leaks and send alerts via notifications. 
              The system uses an ESP32 microcontroller, MQ-2 gas sensor, buzzer, and LED as its main components.
              When gas is detected, the MQ-2 sensor sends a signal to the ESP32, which then activates the buzzer and LED to alert nearby individuals. 
              Additionally, a real-time notification is sent through the Blynk App.
              The project is programmed in C++, which is uploaded to the ESP32 microcontroller.`,
    link: 'https://github.com/def-BM/gas_leakage_detection.git',
  },
  {
    image: '/img5.png',
    title: 'Customer Segmentation Analysis using Power BI',
    description: `This project focuses on segmenting customers into distinct groups based on various attributes such as age, annual income, spending score, and other behavioral or demographic factors. Using Power BI, 
                  an interactive and visual dashboard was created to help businesses gain insights into customer behavior and purchasing patterns.`,
    link: 'https://github.com/def-BM/Customer_Segmentation_Power_BI.git',
  },
  // Add more projects here
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projectsData[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="section project-carousel">
      <h1>My Projects</h1>
      <div className="project-card">
        <button className="arrow left" onClick={prevProject}>
          &#60;
        </button>

        <div className="project-content">
          <div className="project-image">
            <img src={currentProject.image} alt={currentProject.title} />
            <a href={currentProject.link} target="_blank" rel="noopener noreferrer"  className="visit-button">
              Visit Project
            </a>
          </div>
          <div className="project-info">
            <h3>{currentProject.title}</h3>
            <p>{currentProject.description}</p>
          </div>
        </div>

        <button className="arrow right" onClick={nextProject}>
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Projects;
