import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="section" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
      <h1 style={{ textAlign: 'center' }}>Contact Me</h1>

      <div style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        lineHeight: '1.8'
      }}>
        <p><FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong> +91-9136212707</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong> <a href="mailto:brijesh27m@gmail.com" style={{ textDecoration: 'none', color: '#007acc' }}>brijesh27m@gmail.com</a></p>
        <p><FontAwesomeIcon icon={faLinkedin} /> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/brijesh-maurya-3532a5260" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0077b5' }}>linkedin.com/in/brijesh-maurya-3532a5260</a></p>
        <p><FontAwesomeIcon icon={faGithub} /> <strong>GitHub:</strong> <a href="https://github.com/def-BM" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007acc' }}>github.com/def-BM</a></p>
      </div>
    </div>
  );
};

export default Contact;
