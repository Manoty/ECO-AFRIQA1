import React, { useContext, useEffect, useState } from 'react'
import "./Nav.css"
import { IoIosNotifications, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaChevronDown, FaChevronUp, FaUser, FaUsers } from "react-icons/fa";
import { CiSettings, CiGlobe } from "react-icons/ci";
import { PageContext } from '../context/PageContext';
import { TiShoppingCart } from "react-icons/ti";
import { CartContext, CartOpenContext } from '../context/CartContext';
import { FaRegCircleUser } from 'react-icons/fa6';

function Nav() {

  const [scrolled, setScrolled] = useState(false);

  const [activeTab, setActiveTab] = useContext(PageContext);

  const [open, setOpen] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);

  const [productsToggled, setProductsToggled] = useState(false);

  const { cartItems } = useContext(CartContext);


  const [servicesToggled, setServicesToggled] = useState(false);

  const scrollNow = () => {
    if (window.scrollY > 60) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }


  useEffect(function mount() {

    window.addEventListener('scroll', scrollNow);

    return function unMount() {
      window.removeEventListener("scroll", scrollNow);
    };
  });


  useEffect(() => {
    console.log("open", open)
  }, [open])
  return (
    <div>
      {/* Large screen navbar */}
      <nav className="hidden lg:flex w-full fixed top-0 z-50 bg-gradient-to-r from-[#008000] to-[#001A00] via-[#001A00] via-[30%] py-[20px]">
        <div className="flex justify-between items-center w-full max-w-[1280px] px-8 mx-auto">
          {/* Logo */}
          <div className="">
            <img className={scrolled ? "navbarLogoScroll" : "navbarLogo"} src="/static/media/freshlyLogoWhite.png" alt="NavLogo" />
          </div>

          {/* Nav Buttons */}
          <div className="flex space-x-6 items-center bg-[#D9D9D9]/[10%] backdrop-blur-[50%] rounded-[52px] px-8 py-2">
            <Link
              onClick={() => setActiveTab("home")}
              to="/"
              className="group relative"
            >
              <p className="my-[0px]  text-[19.25px] font-inter font-bold text-[#F5F5F5]">
                Home
              </p>

              {/* White line that appears on hover */}
              <span className="absolute  left-0 -bottom-[5px] w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link
              onClick={() => setActiveTab("about")}
              to="/about-us"
              className="group relative"
            >
              <p className="my-[0px]  text-[19.25px] font-inter font-bold text-[#F5F5F5]">
                About
              </p>

              {/* White line that appears on hover */}
              <span className="absolute  left-0 -bottom-[5px] w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </Link>

            <Link
              onClick={() => setActiveTab("blogs")}
              to="/blogs"
              className="group relative"
            >
              <p className="my-[0px]  text-[19.25px] font-inter font-bold text-[#F5F5F5]">
                Blogs
              </p>

              {/* White line that appears on hover */}
              <span className="absolute  left-0 -bottom-[5px] w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link
              onClick={() => setActiveTab("marketplace")}
              to="/marketplace"
              className="group relative"
            >
              <p className="my-[0px]  text-[19.25px] font-inter font-bold text-[#F5F5F5]">
                Market
              </p>

              {/* White line that appears on hover */}
              <span className="absolute  left-0 -bottom-[5px] w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </Link>

            <div className="flex items-center space-x-1 relative">
              <p className="text-[19.25px] font-inter font-bold text-[#F5F5F5]">Products</p>
              <FaChevronDown onClick={() => setProductsToggled(!productsToggled)} className={`text-white text-[30px] cursor-pointer ${productsToggled ? "rotate-180" : ""}`} />
              <div className={`${productsToggled ? "block" : "hidden"} absolute bg-gradient-to-r from-[#008000] to-[#001A00] rounded-[14px] top-[50px] left-0 shadow-lg w-[285px]`}>
                <Link to="/products/farmingSystems">
                  <p className="hover:bg-[#008000] cursor-pointer text-start px-[20px] py-[12px] text-[22px] text-white hover:text-white">Farming Systems</p>
                </Link>
                <Link to="/products/gardenSetups">
                  <p className="hover:bg-[#008000] cursor-pointer text-start px-[20px] py-[12px] text-[22px] text-white hover:text-white">Garden Setups</p>
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-1 relative">
              <p className="text-[19.25px] font-inter font-bold text-[#F5F5F5]">Services</p>
              <FaChevronDown onClick={() => setServicesToggled(!servicesToggled)} className="text-white text-[30px] cursor-pointer" />

              <div className={`${servicesToggled ? "block" : "hidden"} absolute bg-gradient-to-r from-[#008000] to-[#001A00] rounded-[14px] top-[50px] left-0 shadow-lg w-[285px]`}>
                <Link to="/consultation">
                  <p className="hover:bg-[#008000] cursor-pointer text-start px-[20px] py-[12px] text-[22px] text-white hover:text-white">Consultations</p>
                </Link>
                <Link to="/gardenEquipment">
                  <p className="hover:bg-[#008000] cursor-pointer text-start px-[20px] py-[12px] text-[22px] text-white hover:text-white">Garden Equipment</p>
                </Link>

                <Link to="/installation">
                  <p className="hover:bg-[#008000] cursor-pointer text-start px-[20px] py-[12px] text-[22px] text-white hover:text-white">Installations</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex space-x-6 items-center">
            <div className="relative">
              {/* <TiShoppingCart onClick={() => setCartOpen(true)} className="text-white text-[39px] cursor-pointer"/> */}
              <Link to="/cart">
                <TiShoppingCart className="text-white text-[39px] cursor-pointer" />

              </Link>

              <div className="absolute -top-[10px] left-[30px] bg-[#f30024] h-[25px] w-[25px] rounded-full text-center text-white">{cartItems.length}</div>
            </div>
            <Link to="/notification">
            <div className="relative">
            
            <IoIosNotifications className="text-white text-[39px]" />
            <div className="absolute -top-[10px] left-[18px] bg-[#f30024] h-[25px] w-[25px] rounded-full text-center text-white">1</div>
          </div>
            </Link>
            
            <Link to="/profile">
              <FaRegCircleUser className="text-[39px] text-white/[50%]" />
            </Link>
          </div>
        </div>
      </nav>
      {/* Small screen Navbar */}
      {/* 
        <nav className="navbarSmBg">
            <img src="/static/media/logo2.png"/>

            <div className="navbarSmBtns">
                <div className="navbarSmBtn">
                    <p className=''>Home</p>
                    <div className="navbarLine"/>
                </div>

                <div className="navbarSmBtn">
                    <p style={{marginLeft:"25px"}} className=''>Signup</p>
                    <div className="navbarLine"/>
                </div>

                {
                    !open ? (
                        <IoMdMenu onClick={() => setOpen(true)} style={{marginLeft:"25px"}}  className="menuIcon"/>

                    ):(
                        <IoMdClose className="menuIcon" style={{marginLeft:"25px"}}  onClick={() => setOpen(false)} />

                    )
                }
                
                <div className={open ? " flex justify-center  z-50  h-screen":"hidden"}>
                        <div className="block">
                            <li>Home</li>
                        </div>

                </div>


              
             </div>
        </nav>  */}

      <nav className={open ? "flex justify-center z-[50] lg:hidden bg-[#008000]/[85%]  w-[100%] h-[100%] fixed top-0  " : "bg-gradient-to-r from-[#008000] to-[#001A00] via-[#001A00] via-[30%] flex space-x-[14.75px] fixed top-0 w-[100%] h-[130px] lg:hidden items-center pl-[10px] z-[60]"}>
        <img className={!open ? "flex h-[62px] w-[64.25px] object-cover items-center" : "hidden"} src="/static/media/freshlyLogoWhite.png" alt="navLogo" />

        {
          !open && (
            <div className="flex space-x-[50px] items-center bg-[#D9D9D9]/[10%] backdrop-blur-[50%] h-[44px] px-[45px] rounded-[15px] ]">
            <Link to="/">
             <li className="text-gray-100 font-inter text-[15px]">Home</li>

            </Link>
  
            <IoMdMenu onClick={() => setOpen(true)} className="text-gray-100 font-inter text-[25px]"/>
          </div>
          )
        }
       

        <div className={open ? "hidden": "flex"}>
          <Link to="/cart">
            <TiShoppingCart className="text-gray-100 font-inter text-[25px]"/>

          </Link>
            <div className="relative">
              <IoIosNotifications className="text-gray-100 font-inter text-[25px]" />
              <div className="absolute -top-[10px] left-[13px] bg-[#f30024] h-[13.94px] w-[13.94px] rounded-full text-center text-white text-[8.71px] pt-[2px]">{cartItems.length}</div>
            </div>    

            <FaRegCircleUser className="text-[25px] text-white/[50%]" />
           </div>






        {open && (

          <div className="block w-[100%] ">
            <div className="flex justify-between items-center  pt-[45px]  px-[31px] ">
              <img className="h-[77px] w-[80px] bg-white object-cover rounded-[100%]" src="/static/media/logo2.png" alt="navLogo" />
              <IoMdClose onClick={() => setOpen(false)} className="text-white h-[77px] w-[80px] cursor-pointer" />

            </div>
            <div className="flex justify-center">
              <div className="block space-y-[40px] mt-[50px]">
                <Link to="/about-us" className="flex space-x-[22px]  items-center ">
                  <FaUsers className="h-[54px] w-[64px] text-white" />
                  <p className="text-white text-[19px] font-[700] font-inter">About Us</p>
                </Link>

                <Link to="/blogs" className="flex space-x-[22px]  items-center">
                  <CiGlobe className="h-[54px] w-[64px] text-white" />
                  <p className="text-white text-[19px] font-[700] font-inter">Blog</p>
                </Link>

                <Link to="/signup" onClick={() => setActiveTab("signUp")} className="flex space-x-[22px]  items-center">
                  <FaUsers className="h-[54px] w-[64px] text-white" />
                  <p className="text-white text-[19px] font-[700] font-inter">Sign Up</p>
                </Link>

                <Link className="flex space-x-[22px]  items-center">
                  <FaUser className="h-[54px] w-[64px] text-white" />
                  <p className="text-white text-[25px] font-[700] font-inter">Your Profile</p>
                </Link>

                <div className="flex space-x-[22px]  items-center">
                  <CiSettings className="h-[54px] w-[64px] text-white" />
                  <p className="text-white text-[19px] font-[700] font-inter">Settings</p>
                </div>
              </div>

            </div>








          </div>



          // <div className="flex justify-center mt-[60px] bg-red-400 w-[100%] -ml-[20%]">
          //         <h1>Hello world</h1>
          // </div>
        )}
      </nav>
    </div>
  )
}

export default Nav