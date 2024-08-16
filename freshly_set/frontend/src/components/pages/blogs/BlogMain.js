import React, { useContext, useEffect, useState } from 'react';

import Nav from '../../Nav/Navbar';
import BlogSearch from './BlogSearch';
import BlogHero from './BlogHero';
import FreshlyFooter from '../../footer/FreshlyFooter';
import BlogPosts from './BlogList'

import api from '../../../api/blogs'
// import BlogForm from './BlogForm';
import Contact from './Contact';
import { PageContext, SelectedSectionContext } from '../../context/PageContext';
import BlogWidgetsNew from './BlogWidgetsNew';
import BlogWidgets from './BlogWidgets';
import { Link } from 'react-router-dom';

function BlogMain() {
    const [blogs, setBlogs] = useState([]);
    const [visible, setVisible] = useState(3);
    const [selectedSection, setSelectedSection] = useContext(SelectedSectionContext);
    const [isVisible, setIsVisible] = useState(false); 


    const showDetail = () => {
        window.scrollTo({ top: 0 }); 
        setSelectedSection("all-updates")

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
        <h1  className="text-center  text-[54px] lg:text-[140px] text-[#008000] font-inter font-[900]">What's new?</h1>
        <div className="flex flex-col gap-8 py-8 max-w-[96%] sm:w-full mx-auto">
          {blogs ? blogs.slice(0, visible).map((blog) => (
            <BlogPosts key={blog.id} post={blog} />
          )) : <h4>Loading ... </h4>}
        </div>
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
          <BlogWidgetsNew />  
          <BlogWidgets />
        <Contact />
    </div>
  )
}

export default BlogMain