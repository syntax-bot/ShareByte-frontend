import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Like The Idea ?</span>
          <span className="primaryText">Join Us</span>
          <span className="secondaryText">
            You can reach out to us by following means:
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}></MdCall>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+011 2553 2553</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Stay Updated</span>
                    <span className="secondaryText">Linkdin</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://www.linkedin.com/in/harsh-gupta-73a992245">
                    Connect
                  </a>
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Connect with Us</span>
                    <span className="secondaryText">Discord</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://discord.com/">Join</a>
                </div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter
                      size={25}
                    ></HiChatBubbleBottomCenter>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email Us</span>
                    <span className="secondaryText">sharebite@jnu.ac.in</span>
                  </div>
                </div>
                <div className="flexCenter button">Mail Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
