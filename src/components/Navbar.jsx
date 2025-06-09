import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import '../styles/global.css';


export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
       
   

      <div className="logo">Stellaux Global</div>
      <div className={`nav-links-container ${isMobile ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#faq" onClick={closeMobileMenu}>FAQ</a></li>
          <li><Link to="/book" className="book-btn" onClick={closeMobileMenu}>Book Now</Link></li>
        </ul>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? '✖' : '☰'}
      </div>
    </nav>
  );
}