import React from "react";
import { Link } from "react-router-dom";

function GardenQuotationMethod() {
    return (
        <div className="GardenQuotationMethod mt-[50px] mx-[250px] pt-[50px] pb-[100px] px-[60px] rounded-[24px] border-solid border-[1px] border-[#0000008F] shadow-md shadow-[#00000040] ">
            <div className="CardTitle mx-[80px]">
                <p className="text-start text-[#000000] text-[35px] font-[600] font-inter my-0 ">Where Do You Prefer Quotation(s) To be Sent?</p>
            </div>

            {/*Back Button */}
            <div className="BackButton block mt-[50px] w-[35px] lg:w-[61px] h-[27px] lg:h-[47px] cursor-pointer active:scale-90 transition-all duration-100 ease-out">   
                <Link to="/products/gardenSetups/search">
                    <img src="/static/media/image10.png" alt="Return back" className="w-full h-full" />
                </Link>
            </div>

            <div className="DeliveryOptions -mt-[50px] mx-auto w-fit pb-[40px]">
                {/*Email Option */}
                <div className="EmailOption mx-auto w-full rounded-[16px] bg-[#008000] border-solid border-[1px] border-[#0000008F] shadow-md shadow-[#00000040] cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                    <p className="text-center text-[#FFFFFF] text-[35px] font-[800] font-inter my-0 py-[16px] px-[80px] ">EMAIL</p>
                </div>

                {/*Phone Option */}
                <div className="PhoneOption mt-[30px] mx-auto w-full rounded-[16px] bg-[#008000] border-solid border-[1px] border-[#0000008F] shadow-md shadow-[#00000040] cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                    <p className="text-center text-[#FFFFFF] text-[35px] font-[800] font-inter my-0 py-[16px] px-[80px] ">PHONE</p>
                </div>
            </div>                        
        </div> //GardenQuotationMethod
    )
}

export default GardenQuotationMethod