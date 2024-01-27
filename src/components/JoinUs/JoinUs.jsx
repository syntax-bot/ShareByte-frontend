import React from "react";
import "./JoinUs.css";
import { APP_NAME } from "../../constants";
export default function JoinUs() {
  return (
    <div className="joinUs">
      <h3 className="joinUsLink">Like The Idea?</h3>
      <div className="joinUsContainer">
        <h2>Contribute</h2>
        <p className="joinUsDescriptionTitle">
          Learn about the awesome people behind {APP_NAME}
        </p>
        <p className="joinUsDescription">
          {APP_NAME} aims to be free forever and we promise that we will not run
          ads! The project is open source and to ensure its continued
          development and maintenance we need your support.
        </p>
        <div className="joinUsCardParent">
          <div className="joinUsCard">
            <img src="/icons/emailIcon.svg" alt="gitHubicon" />
            <span>Email Us</span>
          </div>
          <div className="joinUsCard">
            <img src="/icons/gitHubIcon.svg" alt="gitHubicon" />
            <span>Contribute To Open Source</span>
          </div>
          <div className="joinUsCard">
            <img src="/icons/slackIcon.svg" alt="gitHubicon" />
            <span>Join and chat with us at Slack Channel</span>
          </div>
        </div>
        <div className="lineDiv"></div>
        <div className="howToSupport">
          <h2>How to Support?</h2>
          <div className="supportCardParent">
            <div className="supportCard">
              <img src="/icons/developerIcon.svg" alt="gitHubicon" />
              <div className="supportcardbody">
                <h4 className="supportCardTitle">I am a Developer</h4>
                <ul className="supportCardText">
                  <li>Contribute to the open source project</li> <br />
                  <li>Add new features to the CircuitVerse project</li> <br />
                  <li>Find and fix bugs to the CircuitVerse project</li>
                </ul>
              </div>
            </div>
            <div className="supportCard">
              <img src="/icons/developerIcon.svg" alt="gitHubicon" />
              <div className="supportcardbody">
                <h4 className="supportCardTitle">I am a Developer</h4>
                <ul className="supportCardText">
                  <li>Contribute to the open source project</li> <br />
                  <li>Add new features to the CircuitVerse project</li> <br />
                  <li>Find and fix bugs to the CircuitVerse project</li>
                </ul>
              </div>
            </div>
            <div className="supportCard">
              <img src="/icons/developerIcon.svg" alt="gitHubicon" />
              <div className="supportcardbody">
                <h4 className="supportCardTitle">I am a Developer</h4>
                <ul className="supportCardText">
                  <li>Contribute to the open source project</li> <br />
                  <li>Add new features to the CircuitVerse project</li> <br />
                  <li>Find and fix bugs to the CircuitVerse project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
