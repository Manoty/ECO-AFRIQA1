import React, { useEffect, useState } from 'react'
import { FaCaretUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Transporters() {
    //State to manage opening of options
    const [clicked, setClicked] = useState();

    // State to manage color changes on hovering options
    const [isHovered, setIsHovered] = useState({
        1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false
    });

    // Function to toggle the color on mouse enter
    const toggleColor = (id) => {
        setIsHovered((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };

    // Function to toggle the color on mouse leave
    const returnColor = (id) => {
        setIsHovered((!isHovered));
      };

    const toggleOptions = () => {
        setClicked(!clicked)
    };
    
    
    return (
        <div className="Transporters flex justify-center ">
            <div className="OuterBackground hidden lg:block lg:w-full bg-no-repeat bg-cover h-[1734px] mb-[20px]" >
                <img src="/static/media/verifiedfarmers.png" alt="Verified Fermers" className=" object-cover w-full h-full "/>
            </div>
            <div className="InnerBackground absolute top-[20px] bg-white  border-[1px] border-gray-500 shadow-gray-500 shadow-md lg:w-[90%] bg-center rounded-[30px] mx-[8px]  lg:mx-auto">
                {/*Back button */}
                <Link to="/" className="BackButton flex justify-end  ">
                    <img src="/static/media/close.png" alt="" className="m-[10px] lg:m-[6px] w-[30px] lg:w-[50px]"/>
                </Link>
                <div className="MainTitle">
                    <p className="text-center text-[16px] lg:text-[40px] font-inter font-[700] text-[#008000]">Welcome To Freshly Transporters Centre!</p>
                </div>
                <div className="SetOfCards mx-[10px] lg:mx-[240px]  mb-[20px] lg:mb-[100px]"  >
                    <div className="DriverNames block lg:flex justify-between">
                        {/*First and Last name */}
                        <div className="Firstname mt-[12px]">
                            <p className="text-start font-inter font-[700] text-[18px] my-0 text-[#008000] ">First Name</p>
                            <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mt-[2px]">
                                <input type='name' name='name' className="border-none outline-none font-inter font-[700] text-[14px] lg:text-[16px]" />
                                <img src="/static/media/edit.png" alt="" className=""/>
                            </div>
                        </div>

                        <div className="Lastname mt-[12px]">
                            <p className="text-start font-inter font-[700] text-[18px] my-0 text-[#008000]">Last Name</p>
                            <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mt-[2px]">
                                <input type='name' name='name' className="border-none outline-none font-inter font-[700] text-[14px] lg:text-[16px]" />
                                <img src="/static/media/edit.png" alt="" className="mx-[4px]"/>
                            </div>
                        </div>
                    </div> {/*Driver first and last name Ends Here */}

                    <div className="DriverContacts block lg:flex justify-between">
                        {/*First and Last name */}
                        <div className="PhoneNumber mt-[12px]">
                            <p className="text-start font-inter font-[700] text-[18px] my-0 text-[#008000] ">Phone</p>
                            <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mt-[2px]">
                                <input name='phone' className="border-none outline-none font-inter font-[700] text-[14px] lg:text-[16px]" />
                                <img src="/static/media/edit.png" alt="" className=""/>
                            </div>
                        </div>

                        <div className="EmailAddress mt-[12px]">
                            <p className="text-start font-inter font-[700] text-[18px] my-0 text-[#008000]">Email</p>
                            <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[2px] ">
                                <input type='name' name='email' className="border-none outline-none font-inter font-[700] text-[14px] lg:text-[16px] " />
                                <img src="/static/media/edit.png" alt="" className="mx-[4px]"/>
                            </div>
                        </div>
                    </div> {/*Driver Phone and Email Ends Here */}
                    {/*Physical Address */}
                    <div className="PhysicalAddress mt-[12px]">
                            <p className="text-start font-inter font-[700] text-[18px] my-0 text-[#008000] ">Address</p>
                            <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mt-[2px]">
                                <input name='address' className="border-none outline-none font-inter font-[700] text-[14px] lg:text-[16px] w-[92%]  h-[40px]" />
                                <img src="/static/media/edit.png" alt="" className="mx-[4px] my-auto"/>
                            </div>
                    </div>
                    {/*Means of Transport */}
                    <div className="TransportMeans block">
                        <p className="font-inter text-start text-[16px] lg:text-[23px] font-[700] text-[#008000] ">What Means Of Transport Do You Currently Use/ Own ?</p>
                        {/*Transport Choices */}
                        <div className="TransportChoices flex justify-center flex-row">
                            <div className="OptionBox block ">
                                <div className="flex justify-end bg-white rounded-[12px] border-gray-700 border-[1px] shadow-md shadow-gray-500 px-[16px]">
                                    <p className="font-inter text-start font-[700] text-[18px] text-[#008000] ">VEHICLE/AUTOMOBILE</p>
                                    <div className='w-[20px] ml-[10px]'>
                                        <FaCaretUp onClick={() => toggleOptions()} className={`w-full h-full cursor-pointer transition-all duration-300 ease-in-out ${clicked? "rotate-180" : ""} `} />
                                    </div>
                                    
                                </div>
                                {/*Options (Show when toggled only) */}
                                <div className=' absolute left-auto right-auto w-[270px]  mx-auto'>
                                     <div className={clicked? " bg-white  rounded-[12px] border-gray-700 border-[1px] shadow-md shadow-gray-500 p-[2px] mt-[12px]": "hidden" } >
                                    <div className='mx-[10px] mt-[20px]' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(1)} onMouseLeave={() => returnColor(1)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[1]? "bg-[#008000] text-white" : ""}` } >Van</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(2)} onMouseLeave={() => returnColor(2)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[2]? "bg-[#008000] text-white" : ""}` } >Lorry</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(3)} onMouseLeave={() => returnColor(3)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[3]? "bg-[#008000] text-white" : ""}` } >Pick-up</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(4)} onMouseLeave={() => returnColor(4)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[4]? "bg-[#008000] text-white" : ""}` } >Motorbike</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(5)} onMouseLeave={() => returnColor(5)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[5]? "bg-[#008000] text-white" : ""}` } >Bicycle</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(6)} onMouseLeave={() => returnColor(6)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[6]? "bg-[#008000] text-white" : ""}` } >Pro-box</p>
                                    </div>
                                    <div className='mx-[10px] mt-0 mb-[10px]' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(7)} onMouseLeave={() => returnColor(7)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[7]? "bg-[#008000] text-white" : ""}` } >Tuk-Tuk</p>
                                    </div>
                                </div> {/*Set Of Options Ends Here */}
                                </div>
                               
                            </div> {/*Options Box Ends Here */}
                        </div> {/*Transport Choices ends here */}
                    </div> {/*Transportation Means */}

                    {/*Experience in driving */}
                    <div className="PhysicalAddress mt-[28px]">
                            <p className="text-start font-inter font-[700] text-[16px] lg:text-[23px] my-0 text-[#008000] ">How Many Years/Months Of Experience do you have using your machine ?</p>
                            <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mt-[12px]">
                                <input className="border-none outline-none font-inter font-[500] text-[18px] w-full h-[40px]"  />
                            </div>
                    </div>

                    {/*National ID */}
                    <div className="NationalID  mt-[28px]">
                        <p className="text-start font-inter font-[700] text-16 lg:text-[23px] my-0 text-[#008000] ">For Verification Purpose Kindly Attach Your National ID - Front And Back</p>
                        <div className='InputBoxes flex justify-between '>
                            <div className="InputBox block mr-[15px] lg:mr-[80px]  ">
                                <p className='text-center font-[700] text-[18px] lg:text-[22px] mb-[6px] mt-[10px] lg:mt-[20px] font-inter text-[#008000]'>Front</p>
                               
                                <div className='CardUpload border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] lg:mt-[12px] h-[100px] lg:h-[200px] '>
                                     <p className='text-center text-[8px] lg:text-[16px] lg:mb-[30px] mt-[6px] font-inter text-gray-700'>Accept .docx, jpg, png and pdf</p>
                                    <input type='file'  className="border-none outline-none font-inter font-[500] text-[10px] lg:text-[22px] w-full cursor-pointer " />
                                </div>
                            </div> {/*Front Side Ends Here */}
                            {/*Back Side of National ID */}
                            <div className="InputBox block ml-[15px] lg:ml-[80px]  ">
                                <p className='text-center font-[700] text-[18px] lg:text-[22px] mb-[6px] mt-[10px] lg:mt-[20px] font-inter text-[#008000]'>Back</p>
                               
                                <div className='CardUpload border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] lg:mt-[12px] h-[100px] lg:h-[200px] '>
                                     <p className='text-center text-[8px] lg:text-[16px] lg:mb-[30px] mt-[6px] font-inter text-gray-700'>Accept .docx, jpg, png and pdf</p>
                                    <input type='file'  className="border-none outline-none font-inter font-[500] text-[10px] lg:text-[22px] w-full cursor-pointer " />
                                </div>
                            </div> {/*Back Side Ends Here */}
                        </div> {/*Input Boxes Ends Here */}
                    </div> {/*national ID Upload Ends Here */}
                    
                    {/*Driving Licence */}
                     <div className="DrivingLicence  mt-[28px] mb-[60px]">
                        <p className="text-start font-inter font-[700] text-16 lg:text-[23px] my-0 text-[#008000] ">For Verification Purpose Kindly Attach Your National ID - Front And Back</p>
                        <div className='InputBoxes flex justify-between '>
                            <div className="InputBox block mr-[15px] lg:mr-[80px]  ">
                                <p className='text-center font-[700] text-[18px] lg:text-[22px] mb-[6px] mt-[10px] lg:mt-[20px] font-inter text-[#008000]'>Front</p>
                               
                                <div className='CardUpload border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] lg:mt-[12px] h-[100px] lg:h-[200px] '>
                                     <p className='text-center text-[8px] lg:text-[16px] lg:mb-[30px] mt-[6px] font-inter text-gray-700'>Accept .docx, jpg, png and pdf</p>
                                    <input type='file'  className="border-none outline-none font-inter font-[500] text-[10px] lg:text-[22px] w-full cursor-pointer " />
                                </div>
                            </div> {/*Front Side Ends Here */}
                            {/*Back Side of Driving Licence*/}
                            <div className="InputBox block ml-[15px] lg:ml-[80px]  ">
                                <p className='text-center font-[700] text-[18px] lg:text-[22px] mb-[6px] mt-[10px] lg:mt-[20px] font-inter text-[#008000]'>Back</p>
                               
                                <div className='CardUpload border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] lg:mt-[12px] h-[100px] lg:h-[200px] '>
                                     <p className='text-center text-[8px] lg:text-[16px] lg:mb-[30px] mt-[6px] font-inter text-gray-700'>Accept .docx, jpg, png and pdf</p>
                                    <input type='file'  className="border-none outline-none font-inter font-[500] text-[10px] lg:text-[22px] w-full cursor-pointer " />
                                </div>
                            </div> {/*FrontSide Ends Here */}
                        </div> {/*Input Boxes Ends Here */}
                    </div> {/*national ID Upload ENds Here */}

                    {/*Button */}
                    <Link to="/transporter-success" className="mt-[20px]">
                        <button className="SubmitButton cursor-pointer font-inter font-[700] text-white text-[16px] lg:text-[30px] bg-[#008000] w-full py-[20px] rounded-[12px] px-[20px] my-0 border-none active:scale-90 transition-all duration-100 ease-out">SUBMIT</button>
                    </Link>
        
                </div> {/*set of Cards ends Here*/}
            </div> {/*Inner Background Ends Here */}

        </div> //Transporters Ends Here
    );
};

export default Transporters