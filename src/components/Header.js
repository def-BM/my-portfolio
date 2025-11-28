import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <h1 className="logo">My Portfolio</h1>

      <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" className="nav-link" onClick={closeMenu}>About</Link></li>
          <li><Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/certifications" className="nav-link" onClick={closeMenu}>Achievements</Link></li>
          <li><Link to="/resume" className="nav-link" onClick={closeMenu}>Résumé</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
