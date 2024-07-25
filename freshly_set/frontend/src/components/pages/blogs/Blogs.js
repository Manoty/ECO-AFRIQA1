import { useEffect, useState } from 'react'
import BlogPosts from './BlogPosts'
import api from '../../../api/blogs'

const Blogs = () => {

  const [blogs, setBlogs] = useState([])

 useEffect(() => {

  const fetchBlogs = async () => {
    try {
      const response = await api.get('/blogs');
      setBlogs(response.data);

    } catch (error) {
      if (error) {
        // Catch errors out of 200 range
        console.log(error.response.data)
        console.log(error.response.headers)
        console.log(error.response.status)
      } else {
        // any other errors within 200
        console.log(error.response.message)
      }
    }
  }
  fetchBlogs()
 }, [])

//  console.log(blogs)
  return (
    <div className="bg-slate-100 min-h-[100vh] py-8">
      <h1 className="text-center text-6xl text-green-800 tracking-wider m-0">What's new?</h1>
        <div className="flex flex-col gap-8 py-8 max-w-[96%] sm:w-full mx-auto">
          {
            blogs ? blogs.map((blog) => {
              return <BlogPosts key={blog.id} post={blog} />
            })
            : <h4>Loading ... </h4>
          }
      </div>
    </div>
  );
};

export default Blogs;

// src/components/Blogs.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const response = await axios.get('/api/blogs/', {
//         headers: {
//           'Authorization': `Token ${localStorage.getItem('authToken')}`,
//         },
//       });
//       setBlogs(response.data);
//     };

//     fetchBlogs();
//   }, []);

// <ul>
// {blogs.map(blog => (
// ))} 
// </ul>