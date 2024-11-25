import React, { useContext, useEffect, useState } from 'react'
import "./Nav.css"
import { IoIosNotifications, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaChevronDown, FaChevronUp, FaUser, FaUsers } from "react-icons/fa";
import { CiSettings, CiGlobe } from "react-icons/ci";
import { PageContext } from '../context/PageContext';
import { TiShoppingCart } from "react-icons/ti";
import { CartContext, CartOpenContext } from '../context/CartContext';
import { FaRegCircleUser } from 'react-icons/fa6';
import { AuthContext } from '../context/AuthContext';

function Nav() {

  //Number of Notifications in icons
  const NotificationsNumber = 1;

  const [scrolled, setScrolled] = useState(false);

  const [activeTab, setActiveTab] = useContext(PageContext);

  const [open, setOpen] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);

  const [productsToggled, setProductsToggled] = useState(false);

  const { cartItems } = useContext(CartContext);


  const [servicesToggled, setServicesToggled] = useState(false);

  const { isAuthenticated, logout } = useContext(AuthContext);


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
                <div className="absolute -top-[10px] left-[18px] bg-[#f30024] h-[25px] w-[25px] rounded-full text-center text-white">{NotificationsNumber}</div>
          </div>
            </Link>
            
            { isAuthenticated ? (
              <Link to="/profile">
              <FaRegCircleUser className="text-[39px] text-white/[50%]" />
              </Link>
            ): (
              <Link to="/login">
                <FaRegCircleUser className="text-[39px] text-white/[50%]" />
              </Link>
            )}
           
          </div>
        </div>
      </nav>

      {/* Small Screen Navbar */}
      <nav className={open ? "Navbar flex justify-center z-[50] lg:hidden bg-[#008000]/[85%]  w-[100%] h-[100%] fixed top-0  " : "bg-gradient-to-r from-[#008000] to-[#001A00] via-[#001A00] via-[30%] flex space-x-[14.75px] fixed top-0 w-[100%] h-[130px] lg:hidden items-center px-[10px] z-[60]"}>
        <img className={!open ? "flex h-[62px] w-[64.25px] object-cover items-center" : "hidden"} src="/static/media/freshlyLogoWhite.png" alt="navLogo" />
        {
          !open && (
            <div className="flex space-x-[35px] items-center bg-[#D9D9D9]/[10%] backdrop-blur-[50%] h-[44px] px-[30px] rounded-[15px] ]">
              <Link to="/">
               <li className="text-gray-100 font-inter text-[15px]">Home</li>
              </Link>

              <div className='MenuIcon'>
                <IoMdMenu onClick={() => setOpen(true)} className="text-gray-100 font-inter text-[25px]"/>
              </div>            
            </div>
          )
        }
       
        <div className={open ? "hidden": "MobileIcons flex"}>
          <Link to="/cart">
            <div className='CartIcon mx-[6px] relative'>
              <TiShoppingCart className="text-gray-100 font-inter text-[25px]"/>
              <div className="absolute -top-[16px] left-[13px] w-[14px] h-[14px]">
                <p className='font-inter block w-full font-[900] bg-[#f30024] rounded-full text-center text-white text-[8px] p-[3px] my-0 '>{cartItems.length}</p>
              </div>
            </div>
          </Link>

          <Link to="/notification">
             <div className="NotificationsIcon relative mx-[6px]">
              <IoIosNotifications className="text-gray-100 font-inter text-[25px]" />
              <div className="absolute -top-[14px] left-[13px] w-[14px] h-[14px]">
                <p className='font-inter block w-full font-[900] bg-[#f30024] rounded-full text-center text-white text-[8px] p-[3px] my-0 '>{NotificationsNumber}</p>
              </div>
            </div> 
          </Link>
              
          <Link to="/profile">
             <FaRegCircleUser className="ProfileIcon mx-[8px] text-[25px] text-white/[50%]" />
          </Link> 
        </div> {/*Mobile Navbar Icons */}

        {/*Mobile Hamburger Menu */}
        {open && (
          <div  className="MobileHamburgerMenu block w-[100%] bg-gradient-to-b from-[#007000] to-[#000A00] shadow-md shadow-[#00000040] ">
            <div className="CloseButton mx-[30px] mt-[30px] flex justify-end ">
              <IoMdCloseCircleOutline onClick={() => setOpen(false)} className="text-white h-[40px] w-[40px] cursor-pointer" />
            </div>

            <div className="InnerWrapper block mt-[20px] ml-[30px] mr-[50px] px-[14px] py-[16px] rounded-[15px] bg-[#D9D9D91A] ">
              {/*User Profile */}
              <div className='UserProfile w-fit'>
                <Link to="/profile" className="block ">
                  <div className='UserImage '>
                    <img src='/static/media/user2.png' alt='User' className='w-[77px] h-[77px]' />
                  </div>
                  <div className='mt-[10px]'>
                    <p className='text-start text-white text-[25px] font-[700] font-inter my-0'>New User</p>
                  </div>
                </Link>
              </div>             

              {/*Set of Links */}
              <div className='LinksSet mt-[20px]'>
                <Link to="/about-us" className="About mt-[14px] flex justify-start">
                  <div className='mr-[14px] h-[32px] w-[32px]'>
                    <FaUsers className="w-full h-full text-white  mx-0" />
                  </div>  
                  <p className="text-white text-[18px] font-[700] font-inter my-auto">About</p>
                </Link>

                <Link to="/blogs" className="mt-[14px] flex justify-start">
                  <div className='mr-[14px] h-[32px] w-[32px]'>
                    <CiGlobe className="w-full h-full text-white  mx-0" />
                  </div>  
                  <p className="text-white text-[18px] font-[700] font-inter my-auto">Blog</p>
                </Link>

                <Link to="/marketplace" className="mt-[14px] flex justify-start">
                  <div className='mr-[14px] h-[32px] w-[32px]'>
                    <CiGlobe className="w-full h-full text-white  mx-0" />
                  </div>  
                  <p className="text-white text-[18px] font-[700] font-inter my-auto">Market</p>
                </Link>            

                <div className="mt-[14px] flex justify-start">
                  <div className='mr-[14px] h-[32px] w-[32px]'>
                    <CiGlobe className="w-full h-full text-white  mx-0" />
                  </div>  
                  <p className="text-white text-[18px] font-[700] font-inter my-auto">Products</p>
                  <FaChevronDown onClick={() => setProductsToggled(!productsToggled)} className={`text-white text-[20px] ml-[14px] my-auto cursor-pointer ${productsToggled ? "rotate-180" : ""}`} />
                </div>

                <div className={`${productsToggled ? "FreshlyProducts block" : "hidden"} bg-gradient-to-r from-[#008000] to-[#001A00] rounded-[10px] ml-[120px] mt-[8px] shadow-lg px-[10px] py-[8px]`}>
                  <div className='farmingSystems'>
                    <Link to="/products/farmingSystems">
                      <p className="cursor-pointer font-inter font-[500] text-start text-[16px] text-white my-0">Farming Systems</p>
                    </Link>
                  </div>
                  
                  <div className='GadernSetups mt-[8px]'>
                    <Link to="/products/gardenSetups">
                      <p className="cursor-pointer font-inter font-[500] text-start text-[16px] text-white my-0">Garden Setups</p>
                    </Link>
                  </div>                
                </div> {/*FreshlyProducts */}

                <div className="mt-[14px] flex justify-start">
                  <div className='mr-[14px] h-[32px] w-[32px]'>
                    <CiGlobe className="w-full h-full text-white  mx-0" />
                  </div>  
                  <p className="text-white text-[18px] font-[700] font-inter my-auto">Services</p>
                  <FaChevronDown onClick={() => setServicesToggled(!servicesToggled)} className={`text-white text-[20px] ml-[17px] my-auto cursor-pointer ${servicesToggled? "rotate-180" : ""}`} />          
                </div>

                <div onClick={() => setOpen(false)} className={`${servicesToggled ? "FreshlyServices block" : "hidden"} bg-gradient-to-r from-[#008000] to-[#001A00] rounded-[10px] ml-[120px] mt-[8px] shadow-lg px-[10px] py-[8px]`}>
                  <div className='Consultation'>
                    <Link to="/consultation">                   
                      <p className="cursor-pointer font-inter font-[500] text-start text-[16px] text-white my-0">Consultations</p>                                         
                    </Link>
                  </div>

                  <div className='GardenEqiupment mt-[8px]'>
                    <Link to="/gardenEquipment">                    
                      <p className="cursor-pointer font-inter font-[500] text-start text-[16px] text-white my-0">Garden Equipment</p>
                    </Link>
                  </div>                    
                  
                  <div className='Installation mt-[8px]'>
                    <Link to="/installation">
                      <p className="cursor-pointer font-inter font-[500] text-start text-[16px] text-white my-0">Installations</p>
                    </Link>
                  </div>
                </div> {/*freshly Services */}

                <Link to="/signup" onClick={() => setActiveTab("signUp")} className="mt-[14px] flex justify-start">
                  <div className='mr-[14px] h-[32px] w-[32px]'>
                    <FaUser className="w-full h-full text-white  mx-0" />
                  </div>  
                  <p className="text-white text-[18px] font-[700] font-inter my-auto">Sign Up</p>
                </Link>

                <Link className="mt-[14px] flex justify-start">
                  <div className='mr-[14px] h-[32px] w-[32px]'>
                    <CiSettings className="w-full h-full text-white  mx-0" />
                  </div>  
                  <p className="text-white text-[18px] font-[700] font-inter my-auto">Settings</p>
                </Link>
              </div> {/*Links Set */}
      
            </div> {/*InnerWrapper */}
          </div> /*Mobile Hamburger menu */
       
        )}
      </nav>
    </div>
  )
}

export default Nav