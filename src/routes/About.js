import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutpageData from '../components/AboutpageData'



const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading ="ABOUT." text="Behind the Code: Your Software Engineer"/>
 
<AboutpageData/>
    <Footer/>
    </div>
  )
}

export default About