import React from 'react'
import Lottie from 'lottie-react'
import animationData from "../assets/Animation - 1723969209966.json"

const About = () => {
  return (
    <div>About
      <div style={{width:"50rem", height:"50rem", justifyContent:"center"}}>
      <Lottie animationData={animationData}/>
      </div>
    </div>
  )
}

export default About