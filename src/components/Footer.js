import React from "react";

import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div>
        <div className="footer">
          <div>
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </div>
          <div>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </div>
          <div>
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </div>
        </div>
        <div className="footer-second-row">
        <p id="service-code">Service Code</p>
        <p id="copy-right">&copy; 1997-2020 Netflix, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
