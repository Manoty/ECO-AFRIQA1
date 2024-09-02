import React from "react";
import { Link } from "react-router-dom";
import NavAuthenticated from "../../Nav/NavAuthenticated";

function Mpesa()
{
    return (
        <div className="MPesaMethod ">
            <div className="MobileNavbar lg:hidden mb-[120px]"> {/*Only Show in Mobile */}
                 <NavAuthenticated  />
            </div>
           
            <div className="InnerContents px-[4px] lg:px-[40px] mx-[6px] lg:mx-[50px] lg:my-[20px] rounded-[20px] lg:border-solid border-gray-400 border-[2px] shadow-lg shadow-white lg:shadow-gray-700 mb-[40px]"> {/*Only Show in Desktop */}
                <Link to="/" className="BackButton flex justify-start lg:justify-end  my-[10px]">
                    <img src="/static/media/close.png" alt="" className="hidden lg:block m-[10px] lg:m-[6px] lg:w-[50px]" /> {/*Only Show in Desktop */}
                    <img src="/static/media/image10.png" alt="" className="block lg:hidden m-[10px] w-[40px]" /> {/*Only Show in Mobile */}
                </Link>

                <div className="PaymentsPart block lg:flex justify-between mt-[20px]">
                    {/*Payment */}
                    <div className="PaymentsWrapper p-[8px] lg:p-[20px] rounded-[12px] border-solid border-[1px] border-gray-400 lg:mr-[40px] mb-[20px] shadow-lg shadow-gray-400 lg:shadow-gray-700  h-fit">
                        <div className="Payment block ">
                            <div className="UpperBanner bg-[#00AA5B14] flex justify-between border-[1px] border-gray-400 border-solid shadow-md shadow-gray-500 py-[18px] lg:py-[10px] px-[8px] lg:px-[20px] rounded-[8px] lg:rounded-[12px]">
                                <div className="BrandNames">
                                    <p className="text-start text-shadow-custom font-inter font-[800] my-0 lg:pt-[14px] text-[14px] lg:text-[24px]  ">M-pesa - PesaPal Payment</p>
                                </div>
                                <div className="block lg:mr-[10px]">
                                    <div className="BrandLogos flex justify-between  lg:py-[10px]">
                                        <img src="/static/media/mpesa.png" alt="" className="h-[20px] lg:h-[39px] mr-[2px] lg:mr-[10px]" />
                                        <img src="/static/media/pesapal.png" alt=""  className="h-[10px] lg:h-[19px] pt-[5px] ml-[6px] lg:ml-[10px]"/>
                                    </div>
                                </div>
                            </div> {/*Upper Banner Ends Here */}
                            {/*Inner Contents */}
                            <div className="InnerContents mx-[14px] lg:mx-[30px]">
                                <div className="PromptMessage ">
                                <p className="text-start font-inter font-[800] text-[14px] lg:text-[18px] ">An Mpesa Prompt has been sent to +254712345678. Put your Mpesa pin to complete payment.</p>
                            </div>
                            
                            <div className="AskPrompt flex justify-start my-[20px]">
                                <p className="text-start font-inter font-[800] text-[11px] lg:text-[16px] text-[#000000B2] my-[12px] mr-[8px] lg:mr-[40px]">Haven’t received a prompt?</p>
                                <div className="bg-[#008000] px-[10px] lg:px-[40px] rounded-[12px] border-none h-fit cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                                    <p className="text-white text-center font-inter font-[800] text-[12px] lg:text-[16px] my-[12px]">RESEND PROMPT</p>
                                </div>
                            </div> {/*Ask promt Ends Here */}
                            
                            <div className="RememberMpesa flex justify-start mt-[40px] pb-[30px]">
                                <input type="checkbox" className="block mr-[10px] lg:mr-[30px] w-[25px] h-[25px]" />
                                <p className="block text-start font-inter font-[800] my-0  text-[14px] lg:text-[18px] pt-[4px]">Always use M-pesa for your future bookings</p>
                            </div>
                            </div> {/*Inner Contents Ends Here */}
                        </div> {/*Payment Ends Here */}
                    </div> {/*Payments Wrapper Ends Here */}
                    
                    {/*Invoice Summary  Left Side On Desktop*/}
                    <div className="InvoiceSummary block rounded-[12px] mx-[12px] lg:mb-[60px] lg:ml-[40px] border-[1px] border-solid border-gray-400 shadow-lg shadow-gray-400 lg:shadow-gray-700">
                        <div className="InvoiceSummaryWrapper m-[8px] pb-[16px] lg:pb-[10px] lg:m-[20px] ">
                            <div className="SummaryTittle ">
                                <p className="text-center text-[20px] font-[800] font-inter text-[#008000] ">YOUR SESSION SUMMARY</p>
                            </div>
                            <div className="InputBox  flex justify-between border-solid border-[0.5px] border-gray-300 shadow-gray-500 shadow-md py-[1px] px-[8px] rounded-[10px] mt-[2px]">
                                <p className="text-start font-inter font-[800] my-[14px]  text-[16px] text-[#000000B2] ">Name:</p>
                                <div className="flex justify-between w-full">
                                    <input type='name' name='name' className="border-none outline-none font-inter font-[700] my-[12px] px-[4px] mx-[10px] text-[14px] lg:text-[16px] w-[70%] lg:w-[100%]" />
                                    <img src="/static/media/edit.png" alt="" className="block lg:hidden my-[10px] cursor-pointer "/> {/*Only Show in Mobile */}
                                </div>
                            </div>

                            <div className="InputBox flex justify-between  border-solid border-[0.5px] border-gray-300 shadow-gray-500 shadow-md py-[1px] px-[8px] rounded-[10px] mt-[20px]">
                                <p className="text-start font-inter font-[800] my-[14px]  text-[16px] text-[#000000B2] ">Consultant:</p>
                                <div className="flex justify-between w-full">
                                    <input type='name' name='name' className="border-none outline-none font-inter font-[700] my-[12px] px-[4px] mx-[10px] text-[14px] lg:text-[16px] w-[70%] lg:w-[100%]" />
                                    <img src="/static/media/edit.png" alt="" className="block lg:hidden my-[10px] cursor-pointer "/> {/*Only Show in Mobile */}
                                </div>
                            </div>

                            <div className="InputBox flex justify-between  border-solid border-[0.5px] border-gray-300 shadow-gray-500 shadow-md py-[1px] px-[8px] rounded-[10px] mt-[20px] mb-[40px] lg:mb-0">
                                <p className="text-start font-inter font-[800] my-[14px]  text-[16px] text-[#000000B2] ">Date:</p>
                                <div className="flex justify-between w-full">
                                    <input type='name' name='date' className="border-none outline-none font-inter font-[700] my-[12px] px-[4px] mx-[10px] text-[14px] lg:text-[16px] w-[70%] lg:w-[100%]" />
                                    <img src="/static/media/edit.png" alt="" className="block lg:hidden my-[10px] cursor-pointer "/> {/*Only Show in Mobile */}
                                </div>
                            </div>
                            {/*Only Show On Desktop */}
                            <div className="InputBox hidden lg:flex justify-between  border-solid border-[0.5px] border-gray-300 shadow-gray-500 shadow-md py-[1px] px-[8px] rounded-[10px] mt-[20px] ">
                                <p className="text-start font-inter font-[800] my-[14px]  text-[16px] text-[#000000B2] ">Time:</p>
                                <div className="flex justify-between w-full">
                                    <input type='name' name='time' className="border-none outline-none font-inter font-[700] my-[12px] px-[4px] mx-[10px] text-[14px] lg:text-[16px] w-[70%] lg:w-[100%]" />
                                    <img src="/static/media/edit.png" alt="" className="block lg:hidden my-[10px] cursor-pointer "/>
                                </div>
                            </div>

                            <div className="Metrics mx-[30px] lg:mx-[40px]">
                                <div className="flex justify-between mt-[14px] lg:mt-[20px]">
                                    <p className="text-start font-[900] my-0 font-inter text-[#000000B2] text-[16px] lg:text-[18px]">RATE</p>
                                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[16px] lg:text-[18px]">KSH 200/HR</p>
                                </div>

                                <div className="flex justify-between mt-[14px] lg:mt-[20px]">
                                    <p className="text-start font-[900] my-0 font-inter text-[#000000B2] text-[16px] lg:text-[18px]">DURATION</p>
                                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[16px] lg:text-[18px]">3 HOURS</p>
                                </div>

                                <div className="flex justify-between mt-[14px] lg:mt-[20px]">
                                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[16px] lg:text-[18px]">TOTAL</p>
                                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[16px] lg:text-[18px]">KSH 600</p>
                                </div>
                               
                            </div> {/*Metrics Section Ends Here */}
                           
                            {/*User Agreement */}
                            <div className="Agreement block lg:hidden pb-[10px]"> {/*Only show on Mobile */}
                                <p className="text-center font-inter font-[800] text-[10px] text-[#00000066] ">By completing your purchase you agree to our terms and service</p>
                            </div>
                             {/*Send Button */}
                            <div className=" bg-[#008000]  py-[12px] rounded-[8px] mt-[10px] lg:mt-[20px] border-none cursor-pointer active:scale-90 transition-all duration-100 ease-out mx-[10px]">
                                    <p className="text-white text-center font-inter font-[800] my-0 text-[16px] ">COMPLETE BOOKING</p>
                            </div>

                        </div> {/*Invoice Summary Wrapper */}
                    </div> {/*Invoice Summary Ends Here */}
                </div> {/*Payment Part Ends Here */}

            </div>{/*Inner Contents Ends Here */}
        </div> //M-Pesa Page Ends Here
    );
};

export default Mpesa;