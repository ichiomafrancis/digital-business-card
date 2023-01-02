import React from "react";
import image from "../Images/laura-Smith.png";
import emailIcon from "../Images/email-icon.png";
import linkedinIcon from "../Images/vector.png";
import "./Info.css";

function Info() {
  return (
    <div>
      <img src={image} alt="" />
      <div className="info">
        <h1>Laura Smith</h1>
        <p>Frontend Developer</p>
        <a href="https://scrimba.com/learn/learnreact/react-section-1-solo-project-coce646e88eea46f91af43ca4">
          laurasmith.website
        </a>
      </div>
      <div className="btns">
        <button className="email-btn">
          <img src={emailIcon} alt="" />
          <span>Email</span>
        </button>
        <button className="linkedin-btn">
          <img src={linkedinIcon} alt="" />
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  );
}

export default Info;
