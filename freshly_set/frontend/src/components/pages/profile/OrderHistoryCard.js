import React from "react";
import { Link } from "react-router-dom";

function OrderHistoryCard({img, title, QuantityOrdered, DateOrdered, OrderStatus, OrderAmount }) {
    return (
        <div className="OrderHistoryCard mt-[20px]">
            <div className="OrderCardWrapper rounded-[12px] lg:rounded-[27px] px-[14px] lg:px-[28px] py-[18px] lg:py-[30px] border-solid border-[0.7px] border-[#0000004A] shadow-md shadow-[#00000040] ">
                <div className="InnerContents flex justify-between">
                    {/*Product Ordered */}
                    <div className="ProductOrdered block w-[45%] lg:w-[40%] mr-[6px] lg:mr-0">
                        <div className="InnerWrapper flex justify-start">
                            {/*Crop Card */}
                            <div className="CropCard block bg-[#00AA5B1A] shadow-md shadow-[#00000040] mr-[12px] lg:mr-[40px] rounded-[4px] lg:rounded-[7.5px] px-[12px] lg:px-[20px] py-[22px] lg:py-[30px] ">
                                {/*Crop Image */}
                                <div className="ImageWrapper h-[31px] lg:h-[72px] w-[37px] lg:w-[86px]">
                                    <img src={img} alt={title} className="w-full h-full"/>
                                </div>
                            </div>   {/*Crop Card */}

                            {/*Crop descriptions */}
                            <div className="CropDescriptions block ">
                                {/*Crop Name */}
                                <div className="CropName">
                                    <p className="text-start text-[10px] lg:text-[18px] text-[#000000] font-inter font-[700] my-0">{title}</p>
                                </div>
                                {/*Quantity Ordered */}
                                <div className="QuantityOrdered mt-[6px] lg:mt-[20px]">
                                    <p className="text-start text-[8px] lg:text-[18px] text-[#0000008F] font-inter font-[700] my-0">Quantity: {QuantityOrdered}</p>
                                </div>
                                {/*Date Ordered */}
                                <div className="DateOdered mt-[8px] lg:mt-[46px]">
                                    <p className="text-start text-[8px] lg:text-[18px] text-[#000000B2] font-inter font-[700] my-0">{DateOrdered}</p>
                                </div>
                            </div>  {/*Crop descriptions */}
                        </div>  {/*InnerWrapper */}
                    </div>  {/*Product Ordered */}

                    {/*Order Status */}
                    <div className="OrderStatus block lg:w-[15%]">
                        <p className={`${OrderStatus === "Delivered"? "text-[#008000]":OrderStatus === "Packaging"? "text-[#000000]": "text-[#FF0C1A]"} text-center text-[8px] lg:text-[18px] font-inter font-[900] my-0`}>{OrderStatus}</p>
                    </div>

                    {/*Amount Ordered */}
                    <div className="AmountOrdered block mx-[8px] lg:mx-[60px]">
                        {/*SubTotal */}
                        <div className="SubTotal">
                            {/*Heading */}
                            <div className="Heading">
                                <p className="text-center text-[10px] lg:text-[16px] text-[#0000008F] font-inter font-[600] my-0">SubTotal</p>
                            </div>
                            {/*Amount */}
                            <div className="Amount mt-[8px] lg:mt-[20px]">
                                <p className="text-center text-[10px] lg:text-[16px] text-[#FF0C1A] font-inter font-[900] my-0">Ksh {OrderAmount}</p>
                            </div>
                        </div>

                        {/*Reorder Button */}
                        <div className="ReorderButton mt-[12px] lg:mt-[39px] rounded-[6px] cursor-pointer bg-[#008000] active:scale-90 transition-all duration-300 ease-out">
                            <Link to="/checkout" className=" ">
                                <p className="text-center text-[10px] lg:text-[18px] text-[#FFFFFF] font-inter font-[900] px-[12px] lg:px-[24px] py-[6px] my-0">REORDER</p>
                            </Link>
                        </div>
                        
                    </div>  {/*Amount Ordered */}
                    
                </div> {/*Inner Contents */}
            </div> {/*Order Card Wrapper */}
        </div> // Order History Card
    )
}

export default OrderHistoryCard