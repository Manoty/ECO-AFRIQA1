import React from "react";
import ContactCard from "../homepage/ContactCard";

function Help() {
    return (
        <div className="Help mb-[50px]">
            <div className="HelpWrapper mr-[80px]">
                {/*Page Heading */}
                <div className="Heading">
                    <p className="text-start text-[#008000] font-inter font-[700] text-[24px] my-0 ">Need Help ? We’ve got your back</p>
                </div>

                {/*Cards Grids */}
                <div className="CardsGrids mt-[40px]">
                    <div className="GridsWrapper grid grid-cols-3 gap-x-[90px] gap-y-[70px]">
                        {/*Faq Card */}
                        <div className="FaqCard block px-[14px] pt-[22px] pb-[30px] rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[43px] h-[43px] mx-auto">
                                <img src="/static/media/faq_help.png" alt="faq" className="w-full h-full"/>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[22px] my-0">FAQ</p>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[800] text-[16px] my-0">Self- service yourself with questions asked by other users</p>
                            </div>
                        </div>

                         {/*Market Place Card */}
                        <div className="MarketPlaceCard block px-[14px] pt-[22px] pb-[30px] rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[43px] h-[43px] mx-auto">
                                <img src="/static/media/market_help.png" alt="market place" className="w-full h-full"/>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[22px] my-0">Market Place</p>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[800] text-[16px] my-0">Get help with the market place</p>
                            </div>
                        </div>

                         {/*Partnerships Card */}
                        <div className="PatnershipsCard block px-[14px] pt-[22px] pb-[30px] rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[43px] h-[43px] mx-auto">
                                <img src="/static/media/partnership_help.png" alt="partnership" className="w-full h-full"/>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[22px] my-0">Partnerships</p>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[800] text-[16px] my-0">Get help with our partnerships for the freshly partners</p>
                            </div>
                        </div>

                        {/*Products Card */}
                        <div className="ProductsCard block px-[14px] pt-[22px] pb-[30px] rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[43px] h-[43px] mx-auto">
                                <img src="/static/media/products_help.png" alt="faq" className="w-full h-full"/>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[22px] my-0">Products</p>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[800] text-[16px] my-0">Get help with the farming systems and garden setups</p>
                            </div>
                        </div>

                         {/*Services Card */}
                        <div className="ServicesCard block px-[14px] pt-[22px] pb-[30px] rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[43px] h-[43px] mx-auto">
                                <img src="/static/media/services_help.png" alt="faq" className="w-full h-full"/>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[22px] my-0">Services</p>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[800] text-[16px] my-0">Get help with the services</p>
                            </div>
                        </div>

                         {/*Community Card */}
                        <div className="CommunityCard block px-[14px] pt-[22px] pb-[30px] rounded-[12px] border-solid border-[1px] border-[#00000066] shadow-lg shadow-[#00000040]">
                            <div className="w-[43px] h-[43px] mx-auto">
                                <img src="/static/media/community_help.png" alt="faq" className="w-full h-full"/>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#008000] font-inter font-[800] text-[22px] my-0">Community</p>
                            </div>
                            <div className="mt-[24px]">
                                <p className="text-center text-[#000000B2] font-inter font-[800] text-[16px] my-0">Get help with connecting with other freshly users</p>
                            </div>
                        </div>
                    </div> {/*Grids Wrapper */}
                </div> {/*Cards Grids */}

                {/*Contacts Section */}
                <div className="ContactSection mt-[40px]">
                    <div className="ContactWrapper">
                        <div className="Heading">
                            <p className="text-start text-[#000000] font-inter font-[700] text-[22px] my-0">Need Help With Something Else? <span className="text-start text-[#008000] font-inter font-[800] text-[22px] ml-[10px] my-0">Contact Us</span></p>
                        </div>
                        {/*Contacts Details */}
                        <div className="CntactsDetails -mx-[60px] -mt-[40px]">
                            <ContactCard />
                        </div>
                    </div> {/*Contacts Wrapper */}
                </div> {/*Contacts Section */}

            </div> {/*Help Wrapper */}
        </div> // Help
    )
}

export default Help