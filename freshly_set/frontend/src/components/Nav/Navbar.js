import React, { useContext, useEffect, useState } from 'react'
import "./Nav.css"
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaUser, FaUsers } from "react-icons/fa";
import { CiSettings, CiGlobe } from "react-icons/ci";
import { PageContext } from '../context/PageContext';

function Nav() {

    const [scrolled, setScrolled ] = useState(false);

    const [activeTab, setActiveTab] = useContext(PageContext);

    const [open, setOpen] = useState(false);

    const showStar = () =>{
        if(window.scrollY>60){
            setScrolled(true)
        }
        else{
            setScrolled(false)   
        }
    }


    useEffect(function mount() {
       
        window.addEventListener('scroll', showStar);
    
        return function unMount() {
          window.removeEventListener("scroll", showStar);
        };
      });


      useEffect(() => {
        console.log("open", open)
      },[open])
  return (
    <div>
        {/* Large screen navbar */}

        <nav className="flex pl-[67.48px] pr-[77.14px] fixed top-0 z-50 bg-white w-[100%] pb-[20.1px] pt-[20.42px]">
            {/* Logo */}
            <img className={scrolled ? "navbarLogoScroll" : "navbarLogo"} src="/static/media/logo2.png" alt="NavLogo"/>

            {/* Nav Buttons */}

            {/*  font-family: Inter;
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: block;
    height: 35px;
    width: 84px;
    cursor: pointer; */}

            <div className="flex justify-self-end ml-[40%] space-x-[59px] items-center ">
                <Link onClick={() => setActiveTab("home")}  to="/" className="group text-[#008000] my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">
                    
                    <p className="text-[#008000] my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">Home</p>
                    <div className={activeTab === "home" ? "h-[7.5px] w-[109.005px] bg-[#008000] flex":"hidden"}/>
                     {
                            activeTab && (
                                <div className= {` ${activeTab === "home"? "h-[0px]" :"h-[7.5px]" } w-[109.005px] bg-[#008000] hidden group-hover:flex`}/>

                            )
                        }

                </Link>

                <Link to="/about-us" onClick={() => setActiveTab("about")}   className="text-[#008000] group my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">
                <p className="text-[#008000] my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">About</p>

                    <div className={activeTab === "about" ? "h-[7.5px] w-[109.005px] bg-[#008000] flex":"hidden"}/>
                  
                        {
                            activeTab && (
                                <div className= {` ${activeTab === "about"? "h-[0px]" :"h-[7.5px]" } w-[109.005px] bg-[#008000] hidden group-hover:flex`}/>

                            )
                        }


                </Link>


                <Link onClick={() => setActiveTab("blogs")}  to="api/blogs" className="text-[#008000] group my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">
                <p className="text-[#008000] my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">Blogs</p>

                    <div className={activeTab === "blogs" ? "h-[7.5px] w-[109.005px] bg-[#008000] flex":"hidden"}/>
                  
                        {
                            activeTab && (
                                <div className= {` ${activeTab === "blogs"? "h-[0px]" :"h-[7.5px]" } w-[109.005px] bg-[#008000] hidden group-hover:flex`}/>

                            )
                        }


                </Link>

                <Link onClick={() => setActiveTab("signup")}  to="/" className="text-[#008000] group my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">
                <p className="text-[#008000] my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer whitespace-nowrap">Sign Up</p>

                    <div className={activeTab === "signup" ? "h-[7.5px] w-[109.005px] bg-[#008000] flex":"hidden"}/>
                  
                        {
                            activeTab && (
                                <div className= {` ${activeTab === "signup"? "h-[0px]" :"h-[7.5px]" } w-[109.005px] bg-[#008000] hidden group-hover:flex`}/>

                            )
                        }


                </Link>
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

        <nav className={open ? "flex justify-center z-[50] lg:hidden bg-[#008000]/[85%]  w-[100%] h-[100%] fixed top-0  ":"bg-white flex justify-between fixed top-0 w-[100%] lg:hidden items-center pl-[18px] z-[60]"}>
            <img className={!open ? "flex h-[77px] w-[80px] object-cover":"hidden"} src="/static/media/logo2.png" alt="navLogo"/>
                        
                        <div className={!open ? "flex space-x-[33px]":"hidden"}>
                            <div className="block group">
                                <p className="text-[20px] font-[700] text-[#008000] font-inter">Home</p>
                                <div className="h-[5px] w-[70px] bg-[#008000] -mt-[15px] hidden group-hover:flex"/>
                            </div>

                            <div className="block group">
                                <p className="text-[20px] font-[700] text-[#008000] font-inter">Sign Up</p>
                                <div className="h-[5px] w-[70px] bg-[#008000] -mt-[15px] hidden group-hover:flex"/>
                            </div>
                        </div>
                        
            <div className="flex  justify-center">
                {!open &&(
                    <div className="">
                        
                        <IoMdMenu onClick={() => setOpen(true)}  className="text-black h-[37px] w-[44px] my-[42px] mr-[41px] "/>
                        
                    </div>

                )}

            </div>
           

            {open  && (
             
              <div className="block w-[100%] ">
                <div className="flex justify-between items-center  pt-[45px]  px-[31px] ">
                    <img className="h-[77px] w-[80px] bg-white object-cover rounded-[100%]" src="/static/media/logo2.png" alt="navLogo"/>
                    <IoMdClose onClick={() => setOpen(false)} className="text-white h-[77px] w-[80px] cursor-pointer"/>

                </div>
                <div className="flex justify-center">
                    <div className="block space-y-[40px] mt-[50px]">
                        <div className="flex space-x-[22px]  items-center ">
                            <FaUsers className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[30px] font-[700] font-inter">About Us</p>
                        </div>

                        <div className="flex space-x-[22px]  items-center">
                            <CiGlobe className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[30px] font-[700] font-inter">Blog</p>
                        </div>

                        <div className="flex space-x-[22px]  items-center">
                            <FaUsers className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[30px] font-[700] font-inter">Sign Up</p>
                        </div>

                        <div className="flex space-x-[22px]  items-center">
                            <FaUser className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[30px] font-[700] font-inter">Your Profile</p>
                        </div>

                        <div className="flex space-x-[22px]  items-center">
                            <CiSettings className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[30px] font-[700] font-inter">Settings</p>
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