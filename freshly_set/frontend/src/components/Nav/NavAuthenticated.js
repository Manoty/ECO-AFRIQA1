import React, { useContext, useEffect, useState } from 'react'
import "./Nav.css"
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegUserCircle, FaShoppingBasket, FaUser, FaUsers } from "react-icons/fa";
import { CiSettings, CiGlobe } from "react-icons/ci";
import { PageContext } from '../context/PageContext';
import { motion } from "framer-motion";
function NavAuthenticated() {

    const navigate = useNavigate()

    const [scrolled, setScrolled ] = useState(false);

    const [activeTab, setActiveTab] = useContext(PageContext);

    const [open, setOpen] = useState(false);

    const [authenticated, setAuthenticated] = useState(false);

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

    const handleCart = () => {
        navigate('/cart')
    }

  return (
    <div>
        {/* Large screen navbar */}

        <nav className={authenticated ? "hidden lg:flex justify-between  w-[100%]   pl-[67.48px] pr-[40.14px] fixed top-0 z-50 bg-white pb-[20.1px] pt-[20.42px]": "hidden lg:flex  justify-between w-[90%]  pl-[67.48px] pr-[120.14px] fixed  top-0 z-50 bg-white  pb-[20.1px] pt-[20.42px]"}>
            {/* Logo */}
            <div className="">
                <img className={scrolled ? "navbarLogoScroll" : "navbarLogo"} src="/static/media/logo2.png" alt="NavLogo"/>

            </div>

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

            <div className={authenticated ? "flex justify-between  items-center w-[70%]" :"flex  space-x-[59px] items-center   "}>
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


                <Link onClick={() => setActiveTab("blogs")}  to="/blogs" className="text-[#008000] group my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">
                <p className="text-[#008000] my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">Blogs</p>

                    <div className={activeTab === "blogs" ? "h-[7.5px] w-[109.005px] bg-[#008000] flex":"hidden"}/>
                  
                        {
                            activeTab && (
                                <div className= {` ${activeTab === "blogs"? "h-[0px]" :"h-[7.5px]" } w-[109.005px] bg-[#008000] hidden group-hover:flex`}/>

                            )
                        }


                </Link>


                <Link onClick={() => setActiveTab("products")}  to="/products" className="text-[#008000] group my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">
                <p className="text-[#008000] my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">Products</p>

                    <div className={activeTab === "products" ? "h-[7.5px] w-[109.005px] bg-[#008000] flex":"hidden"}/>
                  
                        {
                            activeTab && (
                                <div className= {` ${activeTab === "products"? "h-[0px]" :"h-[7.5px]" } w-[109.005px] bg-[#008000] hidden group-hover:flex`}/>

                            )
                        }


                </Link>

                <Link onClick={() => setActiveTab("services")}  to="/#" className="text-[#008000] group my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">
                <p className="text-[#008000] my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">Services</p>

                    <div className={activeTab === "services" ? "h-[7.5px] w-[109.005px] bg-[#008000] flex":"hidden"}/>
                  
                        {
                            activeTab && (
                                <div className= {` ${activeTab === "services"? "h-[0px]" :"h-[7.5px]" } w-[109.005px] bg-[#008000] hidden group-hover:flex`}/>

                            )
                        }


                </Link>

                <Link onClick={() => setActiveTab("gardens")}  to="/#" className="text-[#008000] group my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">
                <p className="text-[#008000] my-auto text-[25px] font-inter  font-[700] block h-[35px] w-[84px] cursor-pointer">Gardens</p>

                    <div className={activeTab === "gardens" ? "h-[7.5px] w-[109.005px] bg-[#008000] flex":"hidden"}/>
                  
                        {
                            activeTab && (
                                <div className= {` ${activeTab === "gardens"? "h-[0px]" :"h-[7.5px]" } w-[109.005px] bg-[#008000] hidden group-hover:flex`}/>

                            )
                        }


                </Link>


                <div className="-mt-[20px]">
                    <FaShoppingBasket
                        className="absolute freshlyGreenText text-[40px] cursor-pointer"
                        onClick={handleCart}
                        />
                    <div className="bg-[#f30024] h-[25px] w-[25px] rounded-[100%] relative -top-[12px] left-[30px] text-center font-inter mt-[5px]">{1}</div>
                </div>
                
                <FaRegUserCircle className="text-[40px] freshlyGreenText"/>
            </div>
            
        </nav>

        {/* Small screen Navbar */}

        <nav
      className={
        open
          ? 'flex justify-center z-[50] border rounded-[15px] lg:hidden bg-[#008000] ml-[20px] mt-[20px] w-[100%] h-[100%] fixed animate-slideIn'
          : 'bg-white flex justify-between fixed top-0 w-[100%] lg:hidden items-center z-[60]'
      }
    >            
            <img className={!open ? "flex h-[77px] w-[80px] object-cover":"hidden"} src="/static/media/logo2.png" alt="navLogo"/>
                        
                        <div className={!open ? "flex space-x-[33px]":"hidden"}>
                            <Link to="/" className="block group">
                                <p className="text-[20px] font-[700] text-[#008000] font-inter">Home</p>
                                <div className="h-[5px] w-[70px] bg-[#008000] -mt-[15px] hidden group-hover:flex"/>
                            </Link>

                            <div className="block group">
                                <p className="text-[20px] font-[700] text-[#008000] font-inter">Sign Up</p>
                                <div className="h-[5px] w-[70px] bg-[#008000] -mt-[15px] hidden group-hover:flex"/>
                            </div>
                        </div>
                        
            <div className="flex  justify-center">
                {!open &&(
                    <div className="">
                          <IoMdMenu onClick={() => setOpen(true)} className="text-black h-[37px] w-[44px] my-[42px] mr-[41px] " />
                    </div>
                    
                    

                )}

            </div>
           

            {open  && (
             
              <div className=" block w-[100%] ">
                <div className="flex justify-between items-center px-[31px] ">
                    <img className="h-[77px] w-[80px] bg-white object-cover rounded-[100%]" src="/static/media/logo2.png" alt="navLogo"/>
                    <IoMdCloseCircleOutline onClick={() => setOpen(false)} className="ClosedLogo block w-[40px] h-[40px] fill-white  cursor-pointer mr-[30px] animate-slideOut"/>

                </div>
                
                <div className='SecondRow block justify-start mt-[31px] ml-[72px] '>
                    <img className='UserLogo w-[93px] h-[94px] ' src='/static/media/user2.png'  />
                    <p className=' text-[#fff] font-inter text-[25px] font-[700] text-left mt-[11px]'> New User </p>
                </div>
                      
                <div className="SetOfIcons  mt-[34px] ml-[72px] ">
                    <div className="block space-y-[30px] mt-[50px]">
                        <div className='AboutTab mb-[20px]'>
                      <Link to="/about-us" className='flex justify-start '>
                            <FaUsers className='block w-[35px] h-[33px] fill-white mr-[8px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>About</p>
                      </Link>
                  </div>

                  <div className='BlogTab flex justify-start mt-0 mb-[20px]'>
                    <Link to="/blogs" className='flex justify-start'>
                            <CiGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Blog</p>
                    </Link>
                  </div>

                  <div className='ServicesTab flex justify-start mt-0 mb-[20px]'> {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                            <CiGlobe className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Services</p>
                    </Link>
                  </div>

                  <div className='FarmProduceTab flex justify-start  mb-[20px]'> {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                            <CiGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Farm Produce</p>
                    </Link>
                  </div>

                  <div className='FarmingSystemsTab flex justify-start  mb-[20px]'> {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                            <CiGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Farming Systems</p>
                    </Link>
                  </div>

                  <div className='GardenSetupsTab flex justify-start  mb-[20px]'> {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                            <CiGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Garden Setups</p>
                    </Link>
                  </div>

                  <div className='GardenTab flex justify-start  mb-[20px]'>  {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                            <CiGlobe  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                            <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Garden</p>
                    </Link>
                  </div>

                  <div className='Settings pb-[80px]'> {/* Currently link Lead to Homepage */}
                    <Link to="/" className='flex justify-start'>
                          <CiSettings  className='block w-[31px] h-[33px] fill-white mr-[12px]' />
                          <p className='text-[#fff] font-inter text-[22px] font-[700] block my-0'>Settings</p>
                    </Link>
                  </div>
                    </div> {/**End here */}
                    
                </div>  
   
              </div>
                

            )}
        </nav>
    </div>
  )
}

export default NavAuthenticated