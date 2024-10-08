import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2024 Anthony Santiago Chasiluisa Reyes. Todos los derechos reservados.</p>
          <div className="social-icons">
            <a href="https://github.com/santychasi" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-logo.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/santiago-chasiluisa-637b1115b/" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin-logo.png" alt="LinkedIn" />
            </a>
            <a href="mailto:thiago.reyes23@gmail.com">
              <img src="/images/email-logo.png" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
