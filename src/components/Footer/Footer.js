import React from "react";
import twitterIcon from "../Images/twitter-icon.png";
import facebookIcon from "../Images/facebook-icon.png";
import instagramIcon from "../Images/instagram-icon.png";
import gitHubIcon from "../Images/gitHub-icon.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={twitterIcon} className="icon-link" alt="" />
      <img src={facebookIcon} className="icon-link" alt="" />
      <img src={instagramIcon} className="icon-link" alt="" />
      <img src={gitHubIcon} className="icon-link" alt="" />
    </div>
  );
}

export default Footer;
