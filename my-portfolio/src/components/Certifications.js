import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: "Python Full Course - Complete Beginner to Advanced",
    provider: "GeeksforGeeks",
    year: "2025",
    link: process.env.PUBLIC_URL + "/python_certificate.pdf",
  },
  {
    title: "Mastering Generative AI and ChatGPT",
    provider: "GeeksforGeeks",
    year: "2025",
    link: process.env.PUBLIC_URL + "/GenAI_certificate.pdf",
  },
  // Add more...
];

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications 🏆</h2>
      <p className="certifications-description">
        These are the certifications I’ve earned in tech fields.
      </p>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-provider">{cert.provider}</p>
            <p className="cert-year">{cert.year}</p>
            <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
