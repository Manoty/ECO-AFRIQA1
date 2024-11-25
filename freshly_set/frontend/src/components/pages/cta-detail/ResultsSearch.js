import React, { useState } from 'react';
import Nav from '../../Nav/Navbar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config';
function ResultsSearch() {
  const [blogs, setBlogs] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const apiUrl = config.API_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}search_blog?q=${query}`);
        setBlogs(response.data);
        console.log("Blogs", blogs)
      } catch (error) {
        console.error("Error fetching the blogs:", error);
      }
    };

    if (query) {
      fetchBlogs();
    }
  }, [query]);
  return (
    <div className="min-h-screen bg-[#F5FAF9] overflow-x-hidden">
      <Nav /> {/* The Upper NavBar */}

      {/* Main Content */}
      <div className="flex justify-center items-center mt-[150px] lg:mt-[200px]">

        {/* Rounded Container */}
        <div className="container bg-white rounded-[24px]  p-6 lg:p-10 w-[85%] lg:w-[80%] space-y-8  border-green-400 border-solid shadow-md shadow-gray-500">
          
          {/* Button Section */}
          <div className="flex justify-center space-x-4">
            <button className="bg-[#008000] text-white py-9 px-10 rounded-lg  text-[30px]">
              Update
            </button>
            <button className="bg-white text-black py-9 px-10 rounded-lg text-[30px]">
              Articles
            </button>
          </div>


          {
      blogs.map((result) => (
       <>
           {/* First Section */}
           <div key={result.id} className="UpperBanner bg-white flex justify-between border-[1px] border-gray-400 border-solid shadow-md shadow-gray-500 py-[18px] lg:py-[6px] px-[8px] lg:px-[10px] rounded-[8px] lg:rounded-[12px]">
  
  {/* Search Result */}


  <div className="flex items-center w-full pr-[26.04px]">
    {/* Image 83 */}
    <div className="flex-shrink-0">
    <img src="/static/media/image 83.png" alt="Image 83" className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px]" />
    </div>

    {/* Text Section */}
    <div className="flex-grow ml-6 lg:ml-12 text-center">
      <h3 className="text-[#0a0a0a] text-[24px] lg:text-[15.64px] font-['Inter'] font-bold text-start">
        {result.title}
      </h3>
    </div>

    {/* Group 518 Image (pushes to the end with ml-auto) */}
    <div className="flex space-x-[26.27px]">
        <h5 className="text-[#FF0C1A] text-[14.82px]">{result.likes} Likes</h5>
        <h5 className="text-[#FF0C1A] text-[14.82px]">{result.likes} Comments</h5>

    </div>
  </div>
</div>
       </>
      ) )
    }
        </div>
      </div>
    </div>
  );
}

export default ResultsSearch;
