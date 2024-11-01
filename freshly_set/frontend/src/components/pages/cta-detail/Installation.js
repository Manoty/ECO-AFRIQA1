import React from "react";
import { Link } from "react-router-dom";
import Nav from '../../Nav/Navbar';
import FreshlyFooter from '../../footer/FreshlyFooter';

function Installation() {
    return (
        <div className="Installations">
            {/*The NavBar */}
            <div className="Navbar">
                <Nav /> 
            </div>
           
            {/* Main Content*/}
            <div className='MainContents mt-[150px]'>
                {/* Page Hero */}
                <div className='PageHero relative bg-installation bg-cover bg-no-repeat bg-center pb-[300px]  pt-[200px]'>
                    <div className="HeroWrapper absolute inset-0 bg-[#0380006B] ">
                        {/* Heading */}
                        <div className="relative">
                            <h1 className="text-center text-[24px] lg:text-[50px] text-white font-inter  font-[700]">Freshly Farms Installation</h1>
                        </div>

                        {/*Details and Button */}
                        <div className="DetailsAndButton relative mt-[60px] mx-[120px] flex justify-between">
                            <div className="Details w-[50%]">
                                <div className="block ">
                                    <p className="text-start text-[20px] text-white font-josefin font-[700] my-0 leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                </div>
                                <div className="block mt-[20px]">
                                    <p className="text-start text-[20px] text-white font-josefin font-[700] my-0 leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                </div>
                            </div>
                            <div className="Button w-[50%] block">
                                <div className="ButtonWrapper flex justify-center my-[80px] ">
                                    <Link to="/products/gardenSetups/search">
                                        <button className="my-auto bg-[#008000]  text-white rounded-[15px] text-[16px] lg:text-[25px] font-inter  font-[900] py-[12px] px-[14px] lg:px-[18px] cursor-pointer border-none outline-none ">Request Quotation</button>
                                    </Link>
                                </div>    
                            </div>
                        </div>                        
                    </div> {/*Hero Wrapper */}
                </div> {/*Page Hero */}
                    
                {/*Our Installation Services */}
                <div className="InstallationServices mt-[40px] mx-[30px]">
                    {/* Section Heading */}
                    <div className="Heading">
                        <h2 className="text-center text-[24px] lg:text-[36px] text-[#008000] font-inter font-[700] my-0">Why Our Installations Are The Best</h2>
                    </div>

                    {/*Reasons to Our Excellency */}
                    <div className="Reasons mt-[60px] grid grid-cols-1 lg:grid-cols-2 gap-x-[45px] gap-y-[50px]">
                        {/*Innovative Technology */}
                        <div className="ReasonCard border-solid border-[0.44px] border-[#00000047] shadow-md shadow-[#00000040] py-[14px] px-[12px] rounded-[12px] ">
                            <div>
                                <h3 className="text-center text-black text-[25px] font-[900] font-inter my-0 ">Innovative Technology</h3>
                            </div>
                            <div className="mt-[20px] flex justify-between">
                                <div className="block">
                                    <img src='/static/media/innovative_tech.png' alt="Innovative Technology" className="w-[230px] h-[279px] rounded-[13px]"  />
                                </div>
                                <div className="DescriptionsBlock block ml-[20px]">
                                    <div className="Descriptions block">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]"> Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Customization Options */}
                        <div className="ReasonCard border-solid border-[0.44px] border-[#00000047] shadow-md shadow-[#00000040] py-[14px] px-[12px] rounded-[12px] ">
                            <div>
                                <h3 className="text-center text-black text-[25px] font-[900] font-inter my-0 ">Customization Options</h3>
                            </div>
                            <div className="mt-[20px] flex justify-between">
                                <div className="block">
                                    <img src='/static/media/customization_options.png' alt="Customization Options" className="w-[230px] h-[279px] rounded-[13px]"  />
                                </div>
                                <div className="DescriptionsBlock block ml-[20px]">
                                    <div className="Descriptions block">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]"> Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Expert Craftmanship */}
                        <div className="ReasonCard border-solid border-[0.44px] border-[#00000047] shadow-md shadow-[#00000040] py-[14px] px-[12px] rounded-[12px] ">
                            <div>
                                <h3 className="text-center text-black text-[25px] font-[900] font-inter my-0 ">Expert Craftmanship</h3>
                            </div>
                            <div className="mt-[20px] flex justify-between">
                                <div className="block">
                                    <img src='/static/media/expert_craftmanship.png' alt="Expert Craftmanship" className="w-[230px] h-[279px] rounded-[13px]"  />
                                </div>
                                <div className="DescriptionsBlock block ml-[20px]">
                                    <div className="Descriptions block">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]"> Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Excellent Customer Support */}
                        <div className="ReasonCard border-solid border-[0.44px] border-[#00000047] shadow-md shadow-[#00000040] py-[14px] px-[12px] rounded-[12px] ">
                            <div>
                                <h3 className="text-center text-black text-[25px] font-[900] font-inter my-0 ">Excellent Customer Support</h3>
                            </div>
                            <div className="mt-[20px] flex justify-between">
                                <div className="block">
                                    <img src='/static/media/customer_support.png' alt="Excellent Customer Support" className="w-[230px] h-[279px] rounded-[13px]"  />
                                </div>
                                <div className="DescriptionsBlock block ml-[20px]">
                                    <div className="Descriptions block">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]"> Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    </div>
                                    <div className="Descriptions block mt-[10px]">
                                        <p className="text-start text-[11px] text-[#525560] font-inter font-[400] my-0 leading-[16px]">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> {/*Reasons to Our Excellency */}
                </div> {/*Our installation Services */}

                {/*Installation Offers */}
                <div className="InstallationOffers mt-[40px] mx-[30px]">
                    <div className="">
                        <p className="text-center text-[40px] text-[#008000] font-[800] font-inter my-0">Free Installations Of Our Products</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-center text-[40px] font-[800] font-inter my-0 bg-gradient-to-b bg-clip-text text-transparent from-[#008000] to-[#001A00]">With Our Specialized Contractors</p>
                    </div>

                    {/*Offer Block */}
                    <div className="OfferBlock mt-[50px] block lg:flex justify-between">
                        <div className="">
                            <img src="/static/media/expert_directions.png" alt="Expert Directions" className="w-[624px] h-[401px]" />
                        </div>
                        <div className="Descriptions ml-[80px]">
                            <div className="DescriptionsBlock block">
                                <p className="text-start text-[20px] text-black font-josefin font-[700] my-0 leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                            </div>
                            <div className="DescriptionsBlock block mt-[20px]">
                                <p className="text-start text-[20px] text-black font-josefin font-[700] my-0 leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                            </div>
                            <div className="DescriptionsBlock block mt-[20px]">
                                <p className="text-start text-[20px] text-black font-josefin font-[700] my-0 leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                            </div>
                        </div>
                    </div>

                    {/*Percentages of Saving */}
                    <div className="PercentageSaving mt-[60px] block lg:flex justify-between mx-[80px]">
                        <div className="block w-[50%]">
                            <div className="SavePercentage flex justify-center">
                                <img src="/static/media/installation_save.png" alt="Installation Save" className="w-[144px] h-[138px]"/>
                            </div>
                            <div className="SaveDescriptions mt-[30px] mx-auto ">
                                <p className="text-center text-[25px] text-[#008000] font-inter font-[700] my-0 ">Save On Installation Cost</p>
                            </div>
                        </div>
                       
                        <div className="block w-[50%]">
                            <div className="SavePercentage flex justify-center">
                                <img src="/static/media/work_to_partner.png" alt="Installation Save" className="w-[144px] h-[138px]"/>
                            </div>
                            <div className="SaveDescriptions mt-[30px] mx-auto ">
                                <p className="text-center text-[25px] text-[#008000] font-inter font-[700] my-0 ">Work With Freshly To Be A Partner</p>
                            </div>
                        </div>
                    </div>
                </div> {/*Installation Offers */}      
            </div> {/*main Contents */}

            {/*The Footer*/}
            <div>
                <FreshlyFooter />
            </div>        
        </div> //Installation
    );
}

export default Installation;
