import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">SHAPE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleClick('/')} href="#">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutUs" className={`nav-link ${activeLink === '/aboutUs' ? 'active' : ''}`} onClick={() => handleClick('/aboutUs')} href="#">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/Services" className={`nav-link ${activeLink === '/Services' ? 'active' : ''}`} onClick={() => handleClick('/Services')} href="#">SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link to="/GALLERY" className={`nav-link ${activeLink === '/GALLERY' ? 'active' : ''}`} onClick={() => handleClick('/GALLERY')} href="#">GALLERY</Link>
          </li>
          <li className="nav-item">
            <Link to="/PRICING" className={`nav-link ${activeLink === '/PRICING' ? 'active' : ''}`} onClick={() => handleClick('/PRICING')} href="#">PRICING</Link>
          </li>
          <li className="nav-item">
            <Link to="/CONTACT" className={`nav-link ${activeLink === '/CONTACT' ? 'active' : ''}`} onClick={() => handleClick('/CONTACT')} href="#">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
