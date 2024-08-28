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
  const handleIconClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="location" style={{justifyContent:"space-between"}}>
            
              <p> <FaHome size={20} style={{ color: "#fff" ,marginRight:"2rem"}} /> {config.personal_details.address_l1}</p>
              {/* <h4> <FaPhone size={20} style={{ color: "#fff" ,marginRight:"2rem" }} /> {config.personal_details.phone}</h4>
              <h4>  <FaMailBulk size={20} style={{ color: "#fff" ,marginRight:"2rem"}} /> {config.personal_details.email}</h4> */}
           </div>
          <div className="phone">
              <h4> <FaPhone size={20} style={{ color: "#fff" ,marginRight:"2rem" }} /> {config.personal_details.phone}</h4>
          </div>

          <div className="email">
              <h4>  <FaMailBulk size={20} style={{ color: "#fff" ,marginRight:"2rem"}} /> {config.personal_details.email}</h4>
          </div> 
        </div>

        {/* footer right */}
        <div className="footer-right">
          <div className="about-me">
            <h4>About</h4>
            <p>{config.about_l1}</p>
          </div>

          <div className="social">
            <FaFacebook size={20} style={{ color: "#fff",marginRight:"1rem" }}  onClick={() => handleIconClick('https://www.example.com')}/>
            <FaInstagram size={20} style={{ color: "#fff" ,marginRight:"1rem"}} onClick={() => handleIconClick('https://www.instagram.com/shivaniarvindagrahari/')}/>
            <FaMedal size={20} style={{ color: "#fff" ,marginRight:"1rem"}} />
            <FaLinkedin size={20} style={{ color: "#fff" ,marginRight:"1rem"}} onClick={() => handleIconClick('https://www.linkedin.com/in/shivanigupta-722443/')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
