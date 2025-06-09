import React from "react";
import logo from "../assets/logo.webp";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Stellaux Global Logo" />
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3 className="footer-title">SERVICES</h3>
          <ul className="footer-list" id="services">
            <li><a href="#services">Social Events</a></li>
            <li><a href="#services">Corporate Events</a></li>
            <li><a href="#services">Fashion Events</a></li>
            <li><a href="#services">Event Support</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3 className="footer-title">COMPANY</h3>
          <ul className="footer-list">
            <li><a href="#about">About</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="footer-copy">© 2025 Stellaux Global. All rights reserved.</p>
    </footer>
  );
};

export default Footer;