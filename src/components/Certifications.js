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
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    provider: "Oracle",
    year: "2025",
    link: process.env.PUBLIC_URL + "/Oracle_GenAI.pdf",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    provider: "Oracle",
    year: "2025",
    link: process.env.PUBLIC_URL + "/Oracle_DS.pdf",
  },
  // Add more...
];

const problemSolvingLinks = [
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/def-bm/",
  },
  {
    platform: "HackerRank",
    url: "https://www.hackerrank.com/profile/brijesh27m",
  },
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

      {/* Second section for problem solving */}
      <h2 className="certifications-title" style={{ marginTop: "60px" }}>
        coding Milestones 💻
      </h2>
      <p className="certifications-description">
        Here are my active profiles on coding platforms:
      </p>
      <ul className="problem-solving-links">
        {problemSolvingLinks.map((platform, index) => (
          <li key={index}>
            <a
              href={platform.url}
              className="cert-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.platform}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
