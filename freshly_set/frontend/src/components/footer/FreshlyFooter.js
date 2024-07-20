import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom"
import { FaSquareInstagram, FaTiktok, FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const FreshlyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const date = new Date()
  const year = date.getFullYear()
  // console.log(now)

  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
      // console.log("window scroll to height > 300", isVisible)
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="p-4 py-8">
      <div className="w-full bg-green-800 mx-auto pb-8 rounded-xl">
        <div className="flex justify-around items-center py-8 text-gray-600 gap-8">

          <section className="hidden sm:flex">

            <div className="bg-white rounded-full p-2">
              <img src="/static/media/logo2.png" alt="Freshly farms logo" />
            </div>

          </section> 

          <div className="flex flex-wrap justify-center items-start gap-8">

            <div className="text-nowrap flex flex-col">
              <h4 className="font-bold text-gray-100 underline">Pages</h4>
              <Link to="/">Home</Link>
              <Link to="tutor">Services</Link>
              <Link to="students">Resources</Link>
              <Link to="about">Our History</Link>
              <Link to="contact">Contact Us</Link>
            </div>

            <div className="text-nowrap flex flex-col">
              <h4 className="font-bold text-gray-100 underline">Explore</h4>
              <Link to="blog">Blog</Link>
              <Link to="faq">FAQs</Link>
              <Link to="terms">Terms of Service</Link>
              <Link to="policy">Privacy Policy</Link>
            </div>

            <div className="text-nowrap flex flex-col">
              <h4 className="font-bold text-gray-100 underline">Services</h4>
              <Link to="about">Personal Info</Link>
              <Link to="tutor">Orders</Link>
              <Link to="students">Adresses</Link>
              <Link to="parents">Parents</Link>
              <Link to="contact">New Password</Link>
            </div>

            <div className="text-nowrap flex flex-col">
              <h4 className="font-text-gray-100 text-gray-100 underline">Pages</h4>
              <Link to="/">Home</Link>
              <Link to="tutor">Services</Link>
              <Link to="students">Resources</Link>
              <Link to="about">Our History</Link>
              <Link to="contact">Contact Us</Link>
            </div>

          </div>

          <div className="p-1 fixed bottom-4 right-4">
          {isVisible && (
            <button
            onClick={scrollToTop}
            className="bg-green-300 text-xs p-1 px-1.5 animate-ping cursor-pointer rounded-full text-white border-none transition">
            <FaArrowUp />
          </button>
          )}
          </div>

        </div> 
        <hr className="w-full bg-gray-200" />

        <section className="flex flex-wrap gap-2 justify-around items-center text-xs">
          <div>
            <span className="text-gray-200">&copy;{year}-</span>
            <Link to="/">Freshly Farms.</Link>
            <span className="text-gray-200">All Rights Reserved</span>
          </div>
          <div>
            <Link to="/"><FaSquareInstagram className="mx-2" /></Link>
            <Link to="https://www.tiktok.com/@infofkexnoo?_t=8o7P91f39aI&_r=1" target="_blank"><FaTiktok className="mx-2" /></Link>
            <Link to="https://www.facebook.com/profile.php?id=61561757183894" target="_blank"><FaFacebook className="mx-2" /></Link>
            <Link to="https://x.com/FreshlyFarms5" target="_blank"><FaSquareXTwitter className="mx-2" /></Link>
            <Link to="/"><FaLinkedin className="mx-2" /></Link>
          </div>
          <div className="flex gap-2">
            <Link to="/">Terms and conditions</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Support</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FreshlyFooter