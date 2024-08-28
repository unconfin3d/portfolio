import "./BackSecondImage.css";
import React from "react";
import Image3 from "../assets/images/image3.jpg";

const BackSecondImage = (props) => {
  return (
    <div className="image1Style">
      <div className="mask1Style">
        <img className="intos-img" src={Image3} alt="IntroImg" />
      </div>
      <div className="content">
        <p>{props.small?props.small:""}</p>
        <h1>{props.big}</h1>
      </div>
    </div>
  );
};

export default BackSecondImage;
