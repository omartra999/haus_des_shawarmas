import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import images from '../../constants/images'; // Adjust the path as needed
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={images.logo} alt="Logo" className="footer-logo-img" />
        </div>
        <div className="footer-links">
          <h4>Schnellzugriff</h4>
          <ul>
            <li><a href="/">Startseite</a></li>
            <li><a href="/AboutUs">Über uns</a></li>
            <li><a href="/Menu">Menü</a></li>
            <li><a href="/Kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Kontaktieren Sie uns</h4>
          <p> Rüttenscheider Str. 105, 45130 Essen</p>
          <p>Telefon: 0201 31972777</p>
        </div>
        <div className="footer-social">
          <h4>Folgen Sie uns</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/hausdesshawarmas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Haus des Shawarmas. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

export default Footer;
