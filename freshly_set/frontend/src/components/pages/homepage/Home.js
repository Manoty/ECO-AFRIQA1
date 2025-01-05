import React, { useContext, useEffect } from 'react'
import Nav from '../../Nav/Navbar'
import Mission from './Mission'
import Hero from "./Hero"
import Services from "./Services"
import Reviews2 from "./Reviews2";
import Faq from "./Faq";
import ContactCard from "./ContactCard";
import Metrics from "./Metrics"
import FreshlyFooter from '../../footer/FreshlyFooter'
import { PageContext } from '../../context/PageContext'
import Banner from './Banner'
import SubNavbar from "../../Nav/SubNavbar";
import NavAuthenticated from '../../Nav/NavAuthenticated'
function Home() {

  const [activeTab, setActiveTab] = useContext(PageContext);

  useEffect(() => {
    setActiveTab("home")
},[activeTab])
  return (
    <div className="">
      <Nav />
      <SubNavbar partnership={true} sections={[{title:"Metric", id: "metric"},{title:"Promotion", id: "promotion"},  {title:"FAQs", id: "faqs"}]}/>
      <Hero id="hero" />
      <Mission id="mission"/>
      <Metrics id="metrics"/>
      <Banner id="promotion"/>
      <Services id="services" />
      <Reviews2 id="reviews"/>
      <Faq id="faqs"/>
      <ContactCard id="contact"/>  
      <FreshlyFooter />
     </div>
  )
}

export default Home