import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = ({ isDarkmode, onToggle }) => {
  return (
    <>
      <div className="FooterContainer">
        {/* <h1 style={{ color: `${isDarkmode ? "#fff" : "#4c4c4c"}` }}>
          Hi i am Footer
        </h1> */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-about">
                <h3>About Me</h3>
                <p>
                  Hello! I'm [Your Name], a passionate [Your Profession] based
                  in [Your Location]. I love turning ideas into reality through
                  code and design.
                </p>
              </div>
              <div className="footer-contact">
                <h3>Contact Me</h3>
                <p>Email: your.email@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
              </div>
              <div className="footer-social">
                <h3>Connect with Me</h3>
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/yourhandle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:your.email@example.com">
                      <FaEnvelope />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
