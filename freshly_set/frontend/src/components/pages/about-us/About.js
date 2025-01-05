import React, { useContext, useEffect } from 'react'
import Nav from '../../Nav/Navbar'
import Hero from './Hero'
import MissionVision from './MissionVision'
import WhyChoose from './WhyChoose'
import JoinUs from './JoinUs'
import StriveFor from './StriveFor'
import FreshlyFooter from "../../footer/FreshlyFooter";
import Team from './Team'
import Testimonials from './Testimonials'
import { PageContext } from '../../context/PageContext'
import AboutUsSubNavbar from '../../Nav/AboutUsSubNavbar'
import SubNavbar from '../../Nav/SubNavbar'

function About() {
  const [activeTab, setActiveTab] = useContext(PageContext);

  useEffect(() => {
    setActiveTab("about")
},[activeTab])
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <SubNavbar partnership={true} sections={[{title:"Freshly Objectives", id: "objectives"}, {title:"Freshly Testimonials", id: "testimonials"}, {title:"Freshly Team", id: "team"}]}/>

      <Hero />
      <WhyChoose />
      <MissionVision />
      <StriveFor />
      <Testimonials />
      <Team />
      <JoinUs />
      <FreshlyFooter />
    </div>
  )
}

export default About