import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaInstagram,
  FaMedal,
  FaFacebook,
} from "react-icons/fa";
import config from "../constants/constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="location" style={{justifyContent:"space-between"}}>
            
              <p> <FaHome size={23} style={{ color: "#fff" ,marginRight:"2rem"}} /> {config.personal_details.address_l1}</p>

          </div>
          <div className="phone">
              <h4> <FaPhone size={23} style={{ color: "#fff" ,marginRight:"2rem" }} /> {config.personal_details.phone}</h4>
          </div>

          <div className="email">
              <h4>  <FaMailBulk size={23} style={{ color: "#fff" ,marginRight:"2rem"}} /> {config.personal_details.email}</h4>
          </div>
        </div>

        {/* footer right */}
        <div className="footer-right">
          <div className="about-me">
            <h4>About</h4>
            <p>{config.about_l1}</p>
          </div>

          <div className="social">
            <FaFacebook size={20} style={{ color: "#fff",marginRight:"1rem" }} />
            <FaInstagram size={20} style={{ color: "#fff" ,marginRight:"1rem"}} />
            <FaMedal size={20} style={{ color: "#fff" ,marginRight:"1rem"}} />
            <FaLinkedin size={20} style={{ color: "#fff" ,marginRight:"1rem"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
