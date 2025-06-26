import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        padding: '20px',
        background: '#222',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>My Portfolio</h1>
      <nav>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '20px',
          }}
        >
          <li><Link to="/" className='nav-link'>About</Link></li>
          <li><Link to="/projects" className='nav-link'>Projects</Link></li>
          <li><Link to="/certifications" className='nav-link'>Achievements</Link></li>
          <li><Link to="/resume" className='nav-link'>Résumé</Link></li>
          <li><Link to="/contact" className='nav-link'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;