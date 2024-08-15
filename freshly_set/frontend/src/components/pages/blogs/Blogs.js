import React, { useContext, useEffect, useState } from 'react';

import Nav from '../../Nav/Navbar';
import BlogSearch from './BlogSearch';
import BlogHero from './BlogHero';
import FreshlyFooter from '../../footer/FreshlyFooter';
import BlogPosts from './BlogList'

import api from '../../../api/blogs'
// import BlogForm from './BlogForm';
import Contact from './Contact';
import { PageContext } from '../../context/PageContext';
import BlogWidgetsNew from './BlogWidgetsNew';
import BlogWidgets from './BlogWidgets';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((prevCount) => Math.min(prevCount + 3, blogs.length));
  };

  const showLess = () => {
    setVisible((prevCount) => Math.max(prevCount - 3, 3));
  };

  const [activeTab, setActiveTab] = useContext(PageContext);

  useEffect(() => {
    setActiveTab("products")
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
        <BlogSearch />
        <BlogHero />
        <h1 className="text-center  text-[54px] lg:text-[140px] text-[#008000] font-inter font-[900]">What's new?</h1>
        <div className="flex flex-col gap-8 py-8 max-w-[96%] sm:w-full mx-auto">
          {blogs ? blogs.slice(0, visible).map((blog) => (
            <BlogPosts key={blog.id} post={blog} />
          )) : <h4>Loading ... </h4>}
        </div>
        <div className="flex flex-wrap justify-center mx-auto gap-3 z-10">
          <button
            className="standardBtn"
            disabled={visible >= blogs.length}
            onClick={showMore}
          >
            View All Updates
          </button>
          <button
            className="standardBtn"
            disabled={visible <= 3}
            onClick={showLess}
          >
            View less Updates
          </button>
        </div>
          <BlogWidgetsNew />  
          <BlogWidgets />
        <Contact />
        <FreshlyFooter />
      </div>
    </div>
  );
};

export default Blogs;
