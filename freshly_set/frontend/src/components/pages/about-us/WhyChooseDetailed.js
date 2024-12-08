import React, { useState } from 'react';
import Nav from '../../Nav/Navbar';
import { Link } from 'react-router-dom';


function WhyChooseDetailed() {
  
    const PageData = [
        {            
            "id": "TechnologyFarming",
            "Heading": "We implement Technology In Farming",
            "MajorImage": "/static/media/image 191.png",
            "SubImage": "/static/media/image 194.png",
            "LeftText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            "MiddleText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit",           
            "RightText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {           
            "id": "FoodSecurity",
            "Heading": "We Promote Food Security",
            "MajorImage": "/static/media/image 192.png",
            "SubImage": "/static/media/image 193.png",
            "LeftText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            "MiddleText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit",           
            "RightText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {           
            "id": "VerticalFarming",
            "Heading": "We Enhance Vertical Farming",
            "MajorImage": "/static/media/image 195.png",
            "SubImage": "/static/media/image 14.png",
            "LeftText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            "MiddleText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit",           
            "RightText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {           
            "id": "UrbanFarming",
            "Heading": "We Enhance Urban Farming",
            "MajorImage": "/static/media/image 15.png",
            "SubImage": "/static/media/image 19.png",
            "LeftText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            "MiddleText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit",           
            "RightText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {            
            "id": "IndoorFarming",
            "Heading": "We Endorse Indoor Farming",
            "MajorImage": "/static/media/image 191.png",
            "SubImage": "/static/media/image 194.png",
            "LeftText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            "MiddleText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit",           
            "RightText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        }    
    ]

    // Smooth scrolling function
    function scrollToSection(id, offset = 170) {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
      <div className="WhyChooseDetailed">
        {/*The Upper NavBar */}
        <div className='The navbar'>
            <Nav />
        </div>
                 
        <div className="DynamicContent">
            {/*Left Static Sidebar */}
            <div className="LeftNavbar w-[125px] lg:w-[330px] h-full fixed top-[140px]  bg-[#008000]">
                <div onClick={() => scrollToSection("TechnologyFarming", 170)}  className='ml-[4px] lg:ml-[25px] mt-[40px]'>
                    <p className="text-[11px] cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out  lg:text-[22px] text-[#ffffff80] text-start font-inter font-[700] mb-[30px] lg:mb-[10px]"> Technology Farming</p>
                </div>
                    
                <div onClick={() => scrollToSection("FoodSecurity", 170)} className='ml-[4px] lg:ml-[25px]'>
                    <p  className="text-[11px]  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out  lg:text-[22px] text-[#ffffff80] text-start font-inter font-[700] mb-[30px] lg:mb-[10px]"> Food Security</p>
                </div>
                  
                <div className='ml-[4px] lg:ml-[25px]'>
                    <p onClick={() => scrollToSection("VerticalFarming", 170)} className="text-[11px] cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out  lg:text-[22px] text-[#ffffff80] text-start font-inter font-[700] mb-[30px] lg:mb-[10px]"> Vertical Farming</p>
                </div>

                <div className='ml-[4px] lg:ml-[25px]'>
                    <p onClick={() => scrollToSection("UrbanFarming",170)} className="text-[11px]  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out lg:text-[22px] text-[#ffffff80] text-start font-inter font-[700] mb-[30px] lg:mb-[10px]"> Urban Farming</p>
                </div>
                
                <div className='ml-[4px] lg:ml-[25px]'>
                    <p onClick={() => scrollToSection("IndoorFarming", 170)} className="text-[11px]  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out lg:text-[22px] text-[#ffffff80] text-start font-inter font-[700] mb-[30px] lg:mb-[10px]"> Indoor Farming</p>
                </div>                                                             
            </div> {/*Side Bar*/}

            {/*Right Back Button */}
            <div className='lg:fixed lg:right-[10px] lg:top-[170px] lg:h-full'>
                <Link to= '/about-us'>
                    <img src='/static/media/image10.png' alt='Back' />
                </Link>
            </div>
        
            {/* Main Content */}
            <div className="MainContent relative block ml-[125px] lg:ml-[330px] lg:mr-[60px] pb-[20px] top-[130px] ">
                <div className="MiddleContainer my-[40px] mx-[8px] lg:mx-[80px]">                        
                    <div className='PageContents'>
                        {PageData.map((data) => (
                            <PageStructure id={data.id} Heading={data.Heading} MajorImage={data.MajorImage} SubImage={data.SubImage} LeftText={data.LeftText} MiddleText={data.MiddleText} RightText={data.RightText}/>
                        ))}
                    </div>                           
                </div> {/*Middle Container*/}                                  
            </div> {/*Main Contents*/} 
                   
        </div> {/*Dynamic Contents*/}     
    </div> // WhyChooseDetailed    
    
  );
}

// Reusable Page Component
function PageStructure({id,Heading,MajorImage, SubImage,LeftText, MiddleText, RightText }) {
    return (
        <div id={id} className='Reusablestructure mt-[40px]'>
            {/* Main Title */}
            <div className="FirstTitle block py-[18px] lg:py-[10px]">
                <h1 className="text-black font-inter lg:text-[35px] text-[15px] lg:text-start font-[700] my-0">{Heading}</h1>
            </div>
            {/*Major Image */}
            <div className="MajorImage ">
                <img src={MajorImage} alt={id} className="mx-auto w-[100%] " />
            </div>    
            {/* Sub Three Images */}
            <div className="SubThreeImages flex justify-between mt-[6px] lg:mt-[20px]">
                <div className="FirstImage w-[30%]">
                    <img src={SubImage} alt={id} className="w-[100%] h-[60%] lg:h-[100%]" />
                </div>
                <div className="SecondImage w-[30%]">
                    <img src={SubImage} alt={id} className="w-[100%] h-[60%] lg:h-[100%]" />
                </div>
                <div className="ThirdImage w-[30%]">
                    <img src={SubImage} alt={id} className="w-[100%] h-[60%] lg:h-[100%]" />
                </div>
            </div> 

            {/*Sub Three Details*/}
            <div className="SubThreeDetails block lg:flex justify-between font-josefin -mt-[40px] lg:mt-[20px]">
                <div className="FirstDetails lg:w-[25%]  ">
                    <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >{LeftText}</p>                    
                </div>
                <div className="SecondDetails lg:w-[25%]  ">
                    <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >{MiddleText}</p>                    
                </div>                    
                <div className="ThirdDetails lg:w-[25%]  ">
                    <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >{RightText}</p>                    
                </div>
            </div> 
        </div>
    )
}

export default WhyChooseDetailed;
