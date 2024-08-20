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
import BlogMain from './BlogMain';
import BlogsAllArticles from '../cta-detail/BlogsAllArticles';
import { FaArrowLeft } from 'react-icons/fa';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [visible, setVisible] = useState(3);
// To toggle with animation
  const [isVisible, setIsVisible] = useState(false); 

  const [selectedSection, setSelectedSection] = useContext(SelectedSectionContext);
  const showMore = () => {
    setVisible((prevCount) => Math.min(prevCount + 3, blogs.length));
  };

  const showLess = () => {
    setVisible((prevCount) => Math.max(prevCount - 3, 3));
  };

  const [activeTab, setActiveTab] = useContext(PageContext);

  useEffect(() => {
    setActiveTab("blogs")
},[activeTab])

//  useEffect(() => {

//   const fetchBlogs = async () => {
//     try {
//       const response = await api.get('freshlyapp/blogs');
//       setBlogs(response.data);

//     } catch (error) {
//       if (error) {
//         // Catch errors out of 200 range
//         console.log(error.response.data)
//         console.log(error.response.headers)
//         console.log(error.response.status)
//       } else {
//         // any other errors within 200
//         console.log(error.response.message)
//       }
//     };
//     fetchBlogs();
//     console.log("Blogs fetched", blogs)
//   }, [] };


  return (
    <div>

      <div className=" min-h-[100vh] py-16 bg-[#F5FAF9]">
        <Nav />
        {
          selectedSection!=="blogs" && (
            <FaArrowLeft onClick={() => setSelectedSection("blogs")} className="absolute h-[61px] w-[61px] text-[#008000] lg:top-[200px] left-[38px] cursor-pointer"/>

          )
        }
        <BlogSearch />
       { selectedSection === "blogs" && (
        <BlogMain />
       )}

      { selectedSection === "all-updates" && (
       <div>
          <BlogsAllArticles />
        </div>
       )}
        <FreshlyFooter />
      </div>
    </div>
  );
};

export default Blogs;
