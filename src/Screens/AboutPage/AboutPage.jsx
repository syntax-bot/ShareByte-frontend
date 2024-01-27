// AboutPage.js
import React from "react";
import "./aboutpage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us</h1>
      <div className="section-line">Meet the team behind the project</div>

      {/* Cards Section */}
      <div className="card-container">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="card">
            <img src={`https://placekitten.com/300/300?image=${index}`} alt={`Card ${index}`} />
            <p className="card-description">
              This is a description for Card {index}. You can add any details or information here.
            </p>
            <div className="github-profile">
              <a href={`https://github.com/user${index}`} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Article Section */}
      <div className="article-container">
        <img src="https://placekitten.com/600/300" alt="Article" />
        <p className="article-description">
          This is an article about something. You can add your text or article content here.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
