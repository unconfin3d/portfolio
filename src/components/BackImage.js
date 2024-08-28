import "./BackImage.css";
import React from "react";
import Image1 from "../assets/images/image1.jpg";
import { Link } from "react-router-dom";

const BackImage = () => {
  return (
    <div className="imageStyle">
      <div className="maskStyle">
        <img className="into-img" src={Image1} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi I'm Shivani Gupta</p>
        <h1>Software Development Engineer - III</h1>
        <Link to="/project" className="btn">
          Project
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default BackImage;
