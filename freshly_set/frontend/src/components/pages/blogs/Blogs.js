import BlogPosts from './BlogPosts'

const Blogs = () => {

  return (
    <div>
      <h1 className="text-center text-6xl text-green-800">What's new?</h1>
        <div className="flex flex-col gap-8">
          <BlogPosts />
          <BlogPosts />
          <BlogPosts />
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