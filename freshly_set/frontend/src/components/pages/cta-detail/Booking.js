import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import CustomDatePicker from '../../CustomDatePicker';
import ScrollableTimePicker from '../../CustomtimePicker';
import { ConsultationContext } from '../../context/ConsultationsContext';
import { CartContext } from '../../context/CartContext';
import { ProfileContext } from '../../context/ProfileContext';

function Booking() {
    //State to manage the clicked Consultation type
    const [isClicked, setIsClicked] = useState({
        1: false,
        2: false
    });

    const { service, setService } = useContext(ProfileContext);

    // Function to toggle the color on click
    const toggleColor = (id) => {
        setIsClicked((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
    };
    
    //Function to control changes on two buttons
    function clickHandler(id) {
        toggleColor(id);
        
    }

    const { name, setName, meetingType, setMeetingType, date, setDate, time, setTime, note, setNote} = useContext(ConsultationContext);
    const { consultant, setConsultant} = useContext(ConsultationContext)

    const { orderName, setOrderName, orderEmail, setOrderEmail, orderPhone, setOrderPhone, orderLocation, setOrderLocation } = useContext(CartContext)

    useEffect(() => {
        console.log("Consultant", consultant)
    },[consultant])
    return (
        <div className="Bookingform">
            <div className="BookingWrapper mx-[12px] lg:mx-[72px] my-[42px] py-[10px] lg:py-[20px] px-[4px] lg:px-[30px] border-solid border-[1px] border-[#0000004D] shadow-md shadow-[#00000040] rounded-[14px] lg:rounded-[38px]">
                <Link to="/consultation" className="">
                    <div className="CloseButton float-right active:scale-90 transition-all duration-100 ease-out">
                        <img src="/static/media/close.png" alt="Cancel" className="" />
                    </div>    
                </Link>
                
                <div className="InnerWrapper mx-[12px] lg:mx-[200px] my-[60px]">
                    <div className="Tittle">
                        <p className="text-start lg:text-center font-[700] font-inter text-[#008000] text-[18px] lg:text-[35px] ">Freshly Farms Consultation Booking</p>
                    </div>
                    {/*Name of The Person */}
                    <div className="YourName">
                        <div className="NameOfPerson">
                            <p className="NameLabel text-start font-[700] my-0 font-inter text-[#008000] text-[15px] lg:text-[17px]">Your Name</p>
                        </div>
                        <div className="flex justify-between w-full mt-[6px] lg:mt-[16px] border-solid border-[1px] border-[#0000004D] shadow-md shadow-[#00000040] rounded-[9px]">
                            <input value={name} onChange={(e) => setName(e.target.value)} type='name' name='name' className="border-none bg-white outline-none font-inter font-[700] my-[12px] px-[4px] mx-[10px] text-[14px] lg:text-[16px] w-[70%] lg:w-[100%]" />
                            <img src="/static/media/edit.png" alt="" className="block  my-[10px] cursor-pointer  mr-[20px]"/>
                        </div>
                    </div>
                    {/*Name of The Consultant */}
                    <div className="Consultantname mt-[20px]">
                        <div className="NameOfConsultant">
                            <p className="NameLabel text-start font-[700] my-0 font-inter text-[#008000] text-[15px] lg:text-[17px]">Consultant’s Name</p>
                        </div>
                        <div className="flex justify-between w-full mt-[6px] lg:mt-[16px] border-solid border-[1px] border-[#0000004D] shadow-md shadow-[#00000040] rounded-[9px]">
                            <input value={consultant.name} type='name' name='name' className="border-none outline-none font-inter font-[700] my-[12px] px-[4px] mx-[10px] text-[14px] lg:text-[16px] w-[70%] lg:w-[100%]" />
                            <img src="/static/media/edit.png" alt="" className="hidden  lg:block  my-[10px] cursor-pointer  mr-[20px]"/>
                        </div>
                    </div>

                    {/*Prefered Meeting Type */}
                    <div className="BookingType mt-[20px]">
                        <div className="BookingLabel">
                            <p className="text-start font-[700] font-inter text-[#008000] text-[14px] lg:text-[17px]">What Type Of Meeting Would You Prefer ?</p>
                        </div>
                        <div className="TypesChoices block lg:flex justify-between mx-[50px] lg:mx-0">
                            {/*Onsite Booking*/}
                            <div className={`OnSite block border-solid border-[1px] border-[#0000004D] shadow-md shadow-[#00000040] rounded-[10px] lg:rounded-[20px] cursor-pointer  ${isClicked[1]?  "bg-[#008000] active:scale-90 transition-all duration-100 ease-out" : "bg-white"} `}
                                onClick={() => clickHandler(1)}>
                                <div className="ImageAndText flex justify-between lg:justify-start my-[14px] mx-[40px] lg:m-[24px]">
                                    <p className={`Description block text-start my-0  font-[700] font-inter text-black text-[18px] lg:text-[27px] ${isClicked[1]? "text-white": ""} `}> ONSITE</p>
                                    <div className="OnsiteImage block h-[26px] w-[24px] lg:ml-[30px]">
                                        <img onClick={() => setMeetingType("onsite")} src="/static/media/onsite.png" alt="Onsite" className="lg:pt-[4px] w-full h-full" />
                                    </div>
                                </div>
                            </div> {/*Onsite Booking Ends Here */}
                            {/*Online Booking */}
                            <div className={`Online block mt-[30px] lg:mt-0 border-solid border-[1px] border-[#0000004D] shadow-md shadow-[#00000040] rounded-[10px] lg:rounded-[20px] cursor-pointer active:scale-90 transition-all duration-100 ease-out ${isClicked[2]?  "bg-[#008000]" : "bg-white"} `}
                                onClick={() => clickHandler(2)}>
                                <div className="ImageAndText flex justify-between lg:justify-start my-[14px] mx-[40px] lg:m-[24px]">
                                    <p className={`Description block text-start my-0  font-[700] font-inter text-black text-[18px] lg:text-[27px]  ${isClicked[2]? "text-white": ""} `}> ONLINE</p>
                                    <div className="OnsiteImage block h-[26px] w-[24px] ml-[30px]">
                                        <img onClick={() => setMeetingType("online")} src="/static/media/online.png" alt="Online" className="lg:pt-[4px] w-full h-full" />
                                    </div>
                                </div>
                            </div> {/*Online Booking Ends Here */}
                        </div>{/*Type of Choices */}
                    </div> {/*Booking Types Ends Here */}

                    {/*Booking Date */}
                    <div className="BookingDate mt-[30px]">
                        <p className="text-start my-0  font-[700] font-inter text-[#008000] text-[20px]"> Date</p>
                        <div className="Date mt-[20px] border-solid border-[1px] border-[#00000080] shadow-md shadow-[#00000040] py-[32px] rounded-[12px]">
                            <CustomDatePicker />

                        </div>
                    </div> {/*Booking date ends here */}

                    {/*Booking Time */}
                    <div className="BookingTime mt-[30px]">
                        <p className="text-start my-0  font-[700] font-inter text-[#008000] text-[20px]"> Time</p>
                        <div className="flex justify-center mt-[20px] border-solid border-[1px] border-[#00000080] shadow-md shadow-[#00000040] py-[32px] rounded-[12px]">
                            <ScrollableTimePicker />
                        </div>
                    </div> {/*Booking time ends here */}

                    {/*Note to Consultant */}
                    <div className="Consultantnote mt-[20px] lg:mt-[40px]">
                        <p className="text-start my-0  font-[700] font-inter text-[#008000] text-[20px]">Note To Consultant</p>
                        <div className="flex justify-center my-[20px] border-solid border-[1px] border-[#00000080] shadow-md shadow-[#00000040] h-[280px] lg:h-[220px] rounded-[12px] object-fill overflow-hidden">
                            <textarea type="text" placeholder="Write a question to your consultant on what you want to talk about" className="border-none outline-none font-inter font-[600] lg:font-[700] my-[12px]  px-[10px] mx-[10px] text-[14px] lg:text-[16px] w-full h-full"  />
                        </div>
                    </div>

                    {/*Next Button */}
                    <Link onClick={() => setService(true)} to="/checkout" className="Next mt-[20px]">
                        <div className="bg-[#008000] w-full rounded-[10px] lg:rounded-[20px] cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                            <p className="text-center my-0 py-[10px] lg:py-[16px]  font-[800] font-inter text-[#ffffff] text-[16px] lg:text-[30px]">NEXT</p>
                        </div>
                    </Link>



                </div> {/*InnerWrapper ends here */}
            </div> {/*BookingWrapper ends here */}
        </div> //Booking Form Ends Here
    )
}

export default Booking