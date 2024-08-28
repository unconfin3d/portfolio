import React from 'react'
import {useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TextCard from '../components/TextCard'
import Lottie from 'lottie-react'
// import animationData from "../assets/Animation - 1724824127051.json"

import animationData from "../assets/Animation - 1724850637379.json"
import pdfFile from "../assets/pdf/RESUMEShivaniGupta.pdf";
import { Document, Page,pdfjs } from 'react-pdf';
import BackSecondImage from "../components/BackSecondImage"

const About = () => {

  return (
    <>
    <Navbar/>
    <BackSecondImage small="Hello There !" big ="Learn More About Me"/>
    <div className="about-container">
    <div className="parent-div">About
      <div className="lottie-container">
      <Lottie animationData={animationData} />
      </div>
      
    </div>

    {/* //someother */}
    <div className="form">
    <TextCard heading ="About me" 
    message="I am Shivani Gupta, a Software Development Engineer III with extensive experience in full-stack development, particularly in the lending industry. I specialize in designing and implementing SaaS solutions using micro frontend architecture, leveraging technologies like React, Node.js, AWS, and MySQL. Throughout my career, I've led projects ranging from mobile app development to building data pipelines and B2B systems. I also bring leadership experience, having managed teams to deliver projects efficiently and effectively."/>

<div className="btn-container">
      <a href={pdfFile} download="ShivaniGupta.pdf">
        <button className="btn" >Download Resume</button>
      </a>
      </div>
    </div>

    </div>
    <Footer/>
    </>

  )
}

export default About