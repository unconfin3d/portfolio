import React from 'react'
import Navbar from '../components/Navbar'
import Form from "../components/Form"
import Footer from '../components/Footer'
import Lottie from 'lottie-react'
import animationData from "../assets/Animation - 1723969209966.json"
import BackSecondImage from "../components/BackSecondImage"

const Contact = () => {
  return (
    <>
    <Navbar/>
    <BackSecondImage small="Feel free to" big ="Contact me"/>
    <div className="form-container" >
    <Lottie animationData={animationData} />
    <Form/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact