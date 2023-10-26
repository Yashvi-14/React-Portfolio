import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCards from '../components/PricingCards'
import WorkCard from '../components/WorkCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="PROJECTS" text="Some of my most recents work"/>
        <Work/>
        <PricingCards/>
        <Footer/>
    </div>
  )
}

export default Project