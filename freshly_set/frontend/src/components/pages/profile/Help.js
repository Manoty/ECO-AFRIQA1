import React from "react";
import ContactCard from "../homepage/ContactCard";

function Help() {
    return (
        <div className="Help mb-[50px]">
            <div className="HelpWrapper mx-[12px] lg:mx-0 lg:mr-[80px]">
                {/*Page Heading */}
                <div className="Heading mr-[80px] lg:mr-0">
                    <p className="text-start text-[#008000] font-inter font-[900] text-[20px] lg:text-[24px] my-0 ">Need Help ? We’ve got your back</p>
                </div>

                {/*Cards Grids */}
                <div className="CardsGrids mt-[40px]">
                    <div className="GridsWrapper grid grid-cols-2 lg:grid-cols-3 gap-x-[20px] lg:gap-x-[90px] gap-y-[30px] lg:gap-y-[70px]">
                        {/*Faq Card */}
                        <div className="FaqCard block px-[10px] lg:px-[14px] pt-[22px] pb-[30px] rounded-[8px] lg:rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[29px] lg:w-[43px] h-[29px] lg:h-[43px] mx-auto">
                                <img src="/static/media/faq_help.png" alt="faq" className="w-full h-full"/>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[12] lg:text-[22px] my-0">FAQ</p>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[600] lg:font-[800] text-[8px] lg:text-[16px] my-0">Self- service yourself with questions asked by other users</p>
                            </div>
                        </div>

                         {/*Market Place Card */}
                        <div className="MarketPlaceCard block lg:px-[14px] pt-[22px] pb-[30px] rounded-[8px] lg:rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[29px] lg:w-[43px] h-[29px] lg:h-[43px] mx-auto">
                                <img src="/static/media/market_help.png" alt="market place" className="w-full h-full"/>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[12] lg:text-[22px] my-0">Market Place</p>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[600] lg:font-[800] text-[8px] lg:text-[16px] my-0">Get help with the market place</p>
                            </div>
                        </div>

                         {/*Partnerships Card */}
                        <div className="PatnershipsCard block lg:px-[14px] pt-[22px] pb-[30px] rounded-[8px] lg:rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[29px] lg:w-[43px] h-[29px] lg:h-[43px] mx-auto">
                                <img src="/static/media/partnership_help.png" alt="partnership" className="w-full h-full"/>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[12] lg:text-[22px] my-0">Partnerships</p>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[600] lg:font-[800] text-[8px] lg:text-[16px] my-0">Get help with our partnerships for the freshly partners</p>
                            </div>
                        </div>

                        {/*Products Card */}
                        <div className="ProductsCard block lg:px-[14px] pt-[22px] pb-[30px] rounded-[8px] lg:rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[29px] lg:w-[43px] h-[29px] lg:h-[43px] mx-auto">
                                <img src="/static/media/products_help.png" alt="faq" className="w-full h-full"/>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[12] lg:text-[22px] my-0">Products</p>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[600] lg:font-[800] text-[8px] lg:text-[16px] my-0">Get help with the farming systems and garden setups</p>
                            </div>
                        </div>

                         {/*Services Card */}
                        <div className="ServicesCard block lg:px-[14px] pt-[22px] pb-[30px] rounded-[8px] lg:rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[29px] lg:w-[43px] h-[29px] lg:h-[43px] mx-auto">
                                <img src="/static/media/services_help.png" alt="faq" className="w-full h-full"/>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[12] lg:text-[22px] my-0">Services</p>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[600] lg:font-[800] text-[8px] lg:text-[16px] my-0">Get help with the services</p>
                            </div>
                        </div>

                         {/*Community Card */}
                        <div className="CommunityCard block lg:px-[14px] pt-[22px] pb-[30px] rounded-[8px] lg:rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[29px] lg:w-[43px] h-[29px] lg:h-[43px] mx-auto">
                                <img src="/static/media/community_help.png" alt="faq" className="w-full h-full"/>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[12] lg:text-[22px] my-0">Community</p>
                            </div>
                            <div className="mt-[14px] lg:mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[600] lg:font-[800] text-[8px] lg:text-[16px] my-0">Get help with connecting with other freshly users</p>
                            </div>
                        </div>
                    </div> {/*Grids Wrapper */}
                </div> {/*Cards Grids */}

                {/*Contacts Section */}
                <div className="ContactSection mt-[40px]">
                    <div className="ContactWrapper block">
                        <div className="Heading block lg:flex justify-start">
                            <p className="text-start text-[#000000] font-inter font-[700] text-[18px] lg:text-[22px] my-0">Need Help With Something Else?</p>
                            <p className="text-start text-[#008000] font-inter font-[800] text-[18px] lg:text-[22px] lg:ml-[10px] mt-[10px] lg:my-0">Contact Us</p>
                        </div>
                        {/*Contacts Details */}
                        <div className="block ContactsDetails lg:-mx-[60px] -mt-[40px]">
                            <ContactCard />
                        </div>
                    </div> {/*Contacts Wrapper */}
                </div> {/*Contacts Section */}

            </div> {/*Help Wrapper */}
        </div> // Help
    )
}

export default Help