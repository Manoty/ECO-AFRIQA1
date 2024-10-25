import React, { useState } from 'react';
import Nav from '../../Nav/Navbar';
import { Link } from 'react-router-dom';

function WhyChooseDetailed() {
    const [selectedSection, setSelectedSection] = useState("technologyFarming")
  return (
    <div className="AllPageContent">
        <Nav /> {/*The Upper NavBar */}

       
        <div className="DynamicContent ">
            {/*Left Static Sidebar */}
            <div className="LeftNavbar w-[125px] lg:w-[343px]   h-full fixed top-[140px] rounded-4px lg:rounded-[10px]  bg-[#008000]">
                <div className='ml-[4px] lg:ml-[25px]'>
                    <p onClick={() => setSelectedSection("foodSecurity")} className="text-[11px]  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out  lg:text-[22px] text-[#ffffff80] text-start font-inter font-[700] mb-[30px] lg:mb-[10px]"> Food Security</p>
                </div>
                  
                <div className='ml-[4px] lg:ml-[25px]'>
                    <p onClick={() => setSelectedSection("verticalFarming")} className="text-[11px] cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out  lg:text-[22px] text-[#ffffff80] text-start font-inter font-[700] mb-[30px] lg:mb-[10px]"> Vertical Farming</p>
                </div>

                <div className='ml-[4px] lg:ml-[25px]'>
                    <p onClick={() => setSelectedSection("urbanFarming")} className="text-[11px]  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out lg:text-[22px] text-[#ffffff80] text-start font-inter font-[700] mb-[30px] lg:mb-[10px]"> Urban Farming</p>
                </div>
                
                <div className='ml-[4px] lg:ml-[25px]'>
                    <p onClick={() => setSelectedSection("indoorFarming")} className="text-[11px]  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out lg:text-[22px] text-[#ffffff80] text-start font-inter font-[700] mb-[30px] lg:mb-[10px]"> Indoor Farming</p>
                </div>
                
                <div className='ml-[4px] lg:ml-[25px]'>
                    <p onClick={() => setSelectedSection("technologyFarming")} className="text-[11px] cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out  lg:text-[22px] text-[#ffffff80] text-start font-inter font-[700] mb-[30px] lg:mb-[10px]"> Technology Farming</p>
                </div>
                  
                <div className='ml-[4px] lg:ml-[25px]'>
                    <p className="text-[11px] lg:text-[22px] text-[#ffffff80] text-start font-inter  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out font-[700] mb-[30px] lg:mb-[10px]"> Technology Farming</p>
                </div>

                <div className='ml-[4px] lg:ml-[25px]'>
                    <p className="text-[11px] lg:text-[22px] text-[#ffffff80] text-start font-inter  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out font-[700] mb-[30px] lg:mb-[10px]"> Technology Farming</p>
                </div>

                <div className='ml-[4px] lg:ml-[25px]'>
                    <p className="text-[11px] lg:text-[22px] text-[#ffffff80] text-start font-inter  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out font-[700] mb-[30px] lg:mb-[10px]"> Technology Farming</p>
                </div>

                <div className='ml-[4px] lg:ml-[25px]'>
                    <p className="text-[11px] lg:text-[22px] text-[#ffffff80] text-start font-inter  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out font-[700] mb-[30px] lg:mb-[10px]"> Technology Farming</p>
                </div>

                <div className='ml-[4px] lg:ml-[25px]'>
                    <p className="text-[11px] lg:text-[22px] text-[#ffffff80] text-start font-inter  cursor-pointer hover:text-gray-100 transition-all duration-500 ease-out font-[700] mb-[30px] lg:mb-[10px]"> Technology Farming</p>
                </div>
            </div> {/*Side Bar Ends Here */}

            {/*Right Back Button */}
            <div className='lg:fixed lg:right-[10px] lg:top-[145px]  lg:h-full'>
                <Link to= '/about-us'>
                    <img src='/static/media/image10.png' alt='image 10' className=''  />
                </Link>
            </div>
        
            {/* Main Content */}
            <div className="MainContent block ml-[125px] lg:ml-[343px] lg:mr-[70px] mt-[90px] lg:mt-[145px] ">
                <div className="MiddleContainer mb-[40px] mx-[8px] lg:mx-[80px]  ">
                   
                    {/*1. TechnologyIn Farming */}

            
                    {
                        selectedSection === "technologyFarming" && (
                    <div className='Technology in Farming'>
                        {/* Main Title */}
                        <div className="FirstTitle block py-[18px] lg:py-[10px]">
                            <h1 className="text-black font-inter lg:text-[35px] text-[15px] lg:text-center font-[700] my-0"> We implement Technology In Farming </h1>
                        </div>
        
                        {/* Title Image */}
                        <div className="TitleImage ">
                            <img src="/static/media/image 191.png" alt="We implement Technology" className="mx-auto w-[100%] " />
                        </div>
                    
                        {/* Sub Three Images */}
                        <div className="SubThreeImages flex justify-between mt-[6px] lg:mt-[20px]">
                            <div className="FirstImage w-[30%]">
                                <img src="/static/media/image 194.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                            <div className="SecondImage w-[30%]">
                                <img src="/static/media/image 194.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                            <div className="ThirdImage w-[30%]">
                                <img src="/static/media/image 194.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                        </div> 
                        {/*Sub Three Images Ends Here  */}
      {/* {Subthree details} */}
                        <div className="SubThreeDetails block lg:flex justify-between font-josefin -mt-[40px] lg:mt-[20px]">
                            <div className="FirstDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                            <div className="SecondDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                                
                            <div className="ThirdDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                        </div> {/*Sub Three Images Ends Here  */}   
                        
                            
                    
                    </div>
                        )
                    }
                     {/*Technology in Farming Ends Here */}

                   
                    {/*2. Food Security */}
                    
                    {
                        selectedSection === "foodSecurity" && (
                            <div className='FoodSecurity mt-[40px] lg:mt-[30px]'>
                        {/* Main Title */}
                        <div className="FirstTitle block py-[18px] lg:py-[10px]">
                            <h1 className="text-black font-inter lg:text-[35px] text-[15px] lg:text-center font-[700] my-0"> We Promote Food Security </h1>
                        </div>
        
                        {/* Title Image */}
                        <div className="TitleImage ">
                            <img src="/static/media/image 192.png" alt="We implement Technology" className="mx-auto w-[100%] " />
                        </div>
                    
                        {/* Sub Three Images */}
                        <div className="SubThreeImages flex justify-between mt-[6px] lg:mt-[20px]">
                            <div className="FirstImage w-[30%]">
                                <img src="/static/media/image 193.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                            <div className="SecondImage w-[30%]">
                                <img src="/static/media/image 193.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                            <div className="ThirdImage w-[30%]">
                                <img src="/static/media/image 193.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                        </div> {/*Sub Three Images Ends Here  */}

                        <div className="SubThreeDetails block lg:flex justify-between font-josefin -mt-[40px] lg:mt-[20px]">
                            <div className="FirstDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                            <div className="SecondDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                                
                            <div className="ThirdDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                        </div> {/*Sub Three Text Ends Here  */}    
                    </div> 
                        )
                    }
                      
                    {/*3. Vertical Farming */}
                    {
                        selectedSection === "verticalFarming" && (
<div className='VerticalinFarming mt-[40px] lg:mt-[30px]'>
                        {/* Main Title */}
                        <div className="FirstTitle block py-[18px] lg:py-[10px]">
                            <h1 className="text-black font-inter lg:text-[35px] text-[15px] lg:text-center font-[700] my-0"> We Enhance Vertical Farming </h1>
                        </div>
        
                        {/* Title Image */}
                        <div className="TitleImage ">
                            <img src="/static/media/image 195.png" alt="We implement Technology" className="mx-auto w-[100%] " />
                        </div>
                    
                        {/* Sub Three Images */}
                        <div className="SubThreeImages flex justify-between mt-[6px] lg:mt-[20px]">
                            <div className="FirstImage w-[30%]">
                                <img src="/static/media/image 14.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                            <div className="SecondImage w-[30%]">
                                <img src="/static/media/image 14.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                            <div className="ThirdImage w-[30%]">
                                <img src="/static/media/image 14.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                        </div> {/*Sub Three Images Ends Here  */}

                        <div className="SubThreeDetails block lg:flex justify-between font-josefin -mt-[40px] lg:mt-[20px]">
                            <div className="FirstDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                            <div className="SecondDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                                
                            <div className="ThirdDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                        </div> {/*Sub Three Texts Ends Here  */}        
                    </div> 
                        )
                    }
                    

                    {/*4. Urban Farming */}
                    {
                        selectedSection === "urbanFarming" && (
                        <div className='UrbanFarming mt-[40px] lg:mt-[30px]'>
                        {/* Main Title */}
                        <div className="FirstTitle block py-[18px] lg:py-[10px]">
                            <h1 className="text-black font-inter lg:text-[35px] text-[15px] lg:text-center font-[700] my-0"> We Enhance Urban Farming </h1>
                        </div>
        
                        {/* Title Image */}
                        <div className="TitleImage ">
                            <img src="/static/media/image 15.png" alt="We implement Technology" className="mx-auto w-[100%] " />
                        </div>
                    
                        {/* Sub Three Images */}
                        <div className="SubThreeImages flex justify-between mt-[6px] lg:mt-[20px]">
                            <div className="FirstImage w-[30%]">
                                <img src="/static/media/image 19.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                            <div className="SecondImage w-[30%]">
                                <img src="/static/media/image 19.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                            <div className="ThirdImage w-[30%]">
                                <img src="/static/media/image 19.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                        </div> {/*Sub Three Images Ends Here  */}

                        <div className="SubThreeDetails block lg:flex justify-between font-josefin -mt-[40px] lg:mt-[20px]">
                            <div className="FirstDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                            <div className="SecondDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                                
                            <div className="ThirdDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                        </div> {/*Sub Three Texts Ends Here  */}            
                    </div> 
                        )
                    }
                    

                    {/*5. Indoor Farming */}

                    {
                        selectedSection === "indoorFarming" && (
<div className='IndoorFarming mt-[40px] lg:mt-[30px]'>
                        {/* Main Title */}
                        <div className="FirstTitle block py-[18px] lg:py-[10px]">
                            <h1 className="text-black font-inter lg:text-[35px] text-[15px] lg:text-center font-[700] my-0"> We Endorse Indoor Farming </h1>
                        </div>
        
                        {/* Title Image */}
                        <div className="TitleImage ">
                            <img src="/static/media/image 191.png" alt="We implement Technology" className="mx-auto w-[100%] " />
                        </div>
                    
                        {/* Sub Three Images */}
                        <div className="SubThreeImages flex justify-between mt-[6px] lg:mt-[20px]">
                            <div className="FirstImage w-[30%]">
                                <img src="/static/media/image 194.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                            <div className="SecondImage w-[30%]">
                                <img src="/static/media/image 194.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                            <div className="ThirdImage w-[30%]">
                                <img src="/static/media/image 194.png" alt="We implement Technology" className="w-[100%] h-[60%] lg:h-[100%]" />
                            </div>

                        </div> {/*Sub Three Images Ends Here  */}

                        <div className="SubThreeDetails block lg:flex justify-between font-josefin -mt-[40px] lg:mt-[20px]">
                            <div className="FirstDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                            <div className="SecondDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                                
                            <div className="ThirdDetails lg:w-[25%]  ">
                                <p className="text-start mb-[18px] lg:mb-0 text-[14px] lg:text-[18px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                </p>
                                
                                <p className='text-start mt-[10px] lg:mt-[5px]  text-[14px] lg:text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>

                        </div> {/*Sub Three Texts Ends Here  */}        
                    </div> 
                        )
                    }
                    

                </div> {/*Middle Container Ends Here */}
            </div> {/*Main Contents Ends Here */}         
        </div> {/*Dyanamic Conent Ends Here */}
     
    </div> //All page Content Ends Here
          
      

      
    
  );
}

export default WhyChooseDetailed;
