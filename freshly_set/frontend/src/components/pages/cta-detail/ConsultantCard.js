import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ConsultationContext } from "../../context/ConsultationsContext";

function ConsultantCard({img,name, field,description,rate, selected}) {
    const { consultant, setConsultant} = useContext(ConsultationContext)

    useEffect(() => {
        console.log("Consultant", consultant)
    },[consultant])
    return (
        <div className="SingleCard border-[0.7px] border-solid border-[#00000066] shadow-lg shadow-[#00000040] rounded-[6px] lg:rounded-[14px]">
            <div className="CardWrapper m-[8px] lg:m-[14px]">
                {/*Consultant Image */}
                <div className="ConsultantImage bg-[#D9D9D94D] rounded-[6px] lg:rounded-[14px] ">
                    <div className="ImageWrapper w-[70px] lg:w-[133px] mx-auto">
                        <img src={img} alt={name} className="w-[100%] "/>
                    </div>
                    
                </div>

                {/*Consultant Name */}
                <div className="ConsultantName mt-[8px] lg:mt-[22px]">
                    <p className="text-start font-inter my-0 text-[12px] lg:text-[22px] font-[700] text-black">{name}</p>
                </div>

                {/*Consultant Field or Topic */}
                <div className="ConsultantField mt-[4px] lg:mt-[18px]">
                    <p className="text-start font-inter my-0 text-[12px] lg:text-[20px] font-[700] text-[#00000080]">{field}</p>
                </div>

                {/*Consultant Descriptions */}
                <div className="ConsultantDescriptions mt-[4px] lg:mt-[18px]">
                    <p className="text-start font-josefin my-0 text-[8px] lg:text-[16px] font-[600]">{description}</p>
                </div>

                {/*Consultant Rate and Booking */}
                <div className="RateAndBooking mt-[8px] lg:mt-[16px]">
                    <div className="Wrapper flex justify-between">
                        {/*Consultant Rate */}
                        <div className="ConsultantRate block py-[4px] lg:py-[16px]">
                            <p className="text-start font-inter my-0 text-[8px] lg:text-[20px] font-[900] text-[#008000]">{rate}</p>
                        </div>

                        {/*Consultant Booking */}
                        <div className="ConsultantBoking block">
                            <Link onClick={() => setConsultant(selected)} to="/booking"> 
                                <div className="BookingButton bg-[#008000] rounded-[4px] lg:rounded-[10px] cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                                    <p className="text-center font-inter text-[8px] lg:text-[20px] font-[900] my-0 text-white py-[4px] lg:py-[16px] px-[14px] lg:px-[60px]">BOOK</p>
                                </div>
                            </Link>
                        </div> {/*Booking button Ends Here*/}
                    </div>
                </div> {/*Consultant Rate and Booking Ends Here */}
            </div> {/*Card Wrapper Ends Here */}
        </div> //SingleCard Ends Here
    )
};

export default ConsultantCard