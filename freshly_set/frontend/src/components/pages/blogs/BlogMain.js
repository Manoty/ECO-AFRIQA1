import React, { useContext, useEffect, useState } from 'react';

import Nav from '../../Nav/Navbar';
import BlogSearch from './BlogSearch';
import BlogHero from './BlogHero';
import FreshlyFooter from '../../footer/FreshlyFooter';
import BlogList from './BlogList'

import api from '../../../api/blogs'
// import BlogForm from './BlogForm';
import Contact from './Contact';
import blogItems from "./blogItems.json"
import { BlogsClickedContext, PageContext, SelectedSectionContext } from '../../context/PageContext';
import BlogWidgetsNew from './BlogWidgetsNew';
import BlogWidgets from './BlogWidgets';

function BlogMain() {
    const [blogs, setBlogs] = useState(blogItems);
    const [visible, setVisible] = useState(4);

    const [selectedSection, setSelectedSection] = useContext(SelectedSectionContext);
    const [isVisible, setIsVisible] = useState(false); 

    const [blogModalOpen, setBlogModalOpen] = useContext(BlogsClickedContext);

    const showDetail = () => {
        window.scrollTo({ top: 0 }); 
        setSelectedSection("all-updates");

        setIsVisible(false); 
        setTimeout(() => {
            setSelectedSection("all-updates")
            setIsVisible(true); // Show the new content with animation
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
        }, 300); // Delay for the slide-out animation before changing content
    }
    const showLess = () => {
      setVisible((prevCount) => Math.max(prevCount - 3, 3));
    };
  
    const [activeTab, setActiveTab] = useContext(PageContext);
  
    useEffect(() => {
      setActiveTab("products")
  },[activeTab])

  useEffect(() => {
    console.log("selected section", selectedSection)
  },[selectedSection])

  return (
    <div>
        <BlogHero />
        <h1  className="text-center my-4 text-[54px] lg:text-[140px] text-[#008000] font-inter font-[900]">What's new?</h1>


        <div className="flex  justify-end mr-[27px] lg:mr-[65px] gap-3 z-10">
          
          <button
            className="h-[27.922px] lg:h-[44.571px] w-[144px] lg:w-[229.858px] bg-[#008000] rounded-[9.551px] text-white cursor-pointer"
            onClick={() => showDetail()}
          >
            View All Updates
          </button>
          {/* <button
            className="standardBtn"
            disabled={visible <= 3}
            onClick={showLess}
          >
            View less Updates
          </button> */}
        </div>

        <div className="max-w-[96%] sm:max-w-[88%] font-inter mx-auto flex flex-wrap gap-3 justify-center sm:justify-between pt-3">

          {blogs ? blogs.slice(0, visible).map((blog) => (
            <BlogList key={blog.id} post={blog} />
          )) : <h4>Loading ... </h4>}

        </div>

        <div className="flex justify-center w-[100%]">
            <h3 className="font-[900] text-[35px] lg:text-[45px] text-[#008000] font-inter text-center whitespace-nowrap">ARTICLE CENTER</h3>
        </div>

        <div className="flex justify-center space-x-[19px] lg:space-x-[78px]">
            <img className="h-[132px] w-[132px] lg:h-[512px] lg:w-[512px]" src="/static/media/bulbWidget.png" alt="Article light bulb"/>

            <p className="text-[27.5px] lg:text-[55px] font-[900] lg:w-[478px] font-inter text-start">Vertical Farms Can Be Implemented In Slums ?</p>
        </div>

        <div className="flex  justify-end mr-[27px] lg:mr-[65px] gap-3 z-10">
            <button
                onClick={() => showDetail()}

                className="h-[27.922px] lg:h-[44.571px] w-[144px] lg:w-[229.858px] bg-[#008000] rounded-[9.551px] text-white cursor-pointer"
            >
              View All Articles

            </button>
        </div>
          <BlogWidgetsNew />  
          <BlogWidgets />
        <Contact />
    </div>
  )
}

export default BlogMain