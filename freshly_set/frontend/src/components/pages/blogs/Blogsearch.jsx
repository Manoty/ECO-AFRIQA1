import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
function BlogSearch() {
  const [query, setQuery] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = config.API_URL;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async (searchQuery = '') => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiUrl}freshlyapp/search/?q=${searchQuery}`, {
        withCredentials: true
      });
      setBlogs(response.data);
      console.log("fetched blogs:", blogs)
      setError(null);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('An error occurred while fetching blogs.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    fetchBlogs(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative mt-[100px] h-[42.188px] lg:h-[100px] w-[853.653p] flex items-center justify-center border-[#008000] bg-white-100 pb--2">
      <div className="flex justify-between items-center pt-[12px] pr-[32px] w-[853.653px] font-[600] h-[100px] rounded-[20px] my-[29px] border-solid border-[5px] bg-white border-[#008000] mb-[-150px] mt-[12px] shadow-lg">
        <input
          type="text"
          className="px-4 text-[30px] text-black/[50%] font-inter font-semibold border-none outline-none mx-[30px] my-[20px]"
          placeholder="Search For News, Media etc..."
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button 
          onClick={handleSearch}
          className="focus:outline-none"
          aria-label="Search"
          disabled={isLoading}
        >
          <img 
            className={`h-[88px] w-[89px] ${isLoading ? 'opacity-50' : ''}`} 
            src="/static/media/searchIcon.png" 
            alt="Search Icon" 
          />
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogSearch;