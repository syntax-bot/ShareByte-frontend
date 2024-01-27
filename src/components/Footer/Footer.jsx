import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footer-hero">
          <div className="footer-contact">
            <h2 className="">Any concerns about this?</h2>
            <div className="footer-buttons">
              <a href="#" className="talkToUsLink">
                <div className="talkToUsLink">Talk to Us</div>
              </a>
            </div>
          </div>
          <img
            src="https://assets-global.website-files.com/5ec440af4659932990a1020c/6126238e144f7970c00d7c57_60f17a27f09c3f9cecf7ef53_footer-avatar.png"
            loading="lazy"
            width="281"
            alt='The Avo mascot on a boat holding a flag saying "SHIP IT!"'
            className="footer-avatar"
          />
        </div>
        <div className="footer-content">
          <div>
            <div className="footer-quote">
              Hunger is an acute problem. We needed to reach out to more people,
              more restaurants, and more cities - our deadline being yesterday.
            </div>
          </div>
          <div className="footer-grid">
            <div>
              <a href="#" className="footerLink">
                About
              </a>
              <a href="#" className="footerLink">
                Jobs
              </a>
              <a href="#" className="footerLink">
                Docs
              </a>
              <a href="#" className="footerLink">
                Security
              </a>
            </div>
            <div>
              <a href="#" className="footerLink">
                Terms and Conditions
              </a>
              <a href="#" className="footerLink">
                Privacy Policy
              </a>
              <a href="#" className="footerLink">
                Cookie Policy
              </a>
              <a href="#" className="footerLink">
                &zwnj;
              </a>
            </div>
            <div className="footerSocial">
              <div className="socialText">Connect with Us</div>
              <div id="social-wrap">
                <a
                  href="#"
                  className="socila-link w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/5ec440af4659932990a1020c/60f17a27f09c3f7722f7ef58_icon%20(2).svg"
                    loading="lazy"
                    alt="Facebook logo
"
                  />
                </a>
                <a
                  href="#"
                  className="socila-link w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/5ec440af4659932990a1020c/60f17a27f09c3fa670f7ef56_icon%20(4).svg"
                    loading="lazy"
                    alt="Twitter logo"
                  />
                </a>
                <a
                  href="#"
                  className="socila-link w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/5ec440af4659932990a1020c/60f17a27f09c3f1f0df7ef59_icon%20(1).svg"
                    loading="lazy"
                    alt="LinkedIn logo
"
                  />
                </a>
                <a
                  href="#"
                  className="socila-link w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/5ec440af4659932990a1020c/60f17a27f09c3f768ef7ef57_icon%20(3).svg"
                    loading="lazy"
                    alt="Instagram logo
"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
