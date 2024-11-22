import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ProfileContext } from "../../context/ProfileContext";

function FarmingQuotationMethod() {
    const [clicked, setClicked] = useState("");

    const { setEmail, phone, setPhone } = useContext(CartContext)
    const { profile } = useContext(ProfileContext)
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate("/verified-success")
    }
    return (
        <div className="FarmingQuotationMethod mt-[120px] lg:mt-[50px] mx-[16px] lg:mx-[250px] pt-[50px] pb-[40px] lg:pb-[100px] px-[10px] lg:px-[60px] rounded-[10px] lg:rounded-[24px] border-solid border-[1px] border-[#0000008F] shadow-md shadow-[#00000040] ">
            <div className="CardTitle mx-[16px] lg:mx-[80px]">
                <p className="text-start text-[#000000] text-[16px] lg:text-[35px] font-[600] font-inter my-0 ">Where Do You Prefer Quotation(s) To be Sent?</p>
            </div>

            {/*Back Button */}
            <div className="BackButton block mt-[16px] lg:mt-[50px] w-[35px] lg:w-[61px] h-[27px] lg:h-[47px] cursor-pointer active:scale-90 transition-all duration-100 ease-out">   
                <Link to="/products/farmingSystems/search">
                    <img src="/static/media/image10.png" alt="Return back" className="w-full h-full" />
                </Link>
            </div>

            <div className="DeliveryOptions mt-[16px] lg:-mt-[50px] mx-auto w-fit pb-[40px]">
                {/*Email Option */}
                
                {
                    clicked === "email"  &&  (
                        <input value={profile?.email} className="px-[10px] py-[8px] font-inter w-[230px] rounded-[8px]" type="email" placeholder="Enter Your Email Here"/>

                    ) 
                }

                {
                    clicked === "phone" && 
                       (
                        <input value={profile?.phone}  className="px-[10px] py-[8px] font-inter w-[230px] rounded-[8px]" type="number" placeholder="Enter Your Phone Number Here"/>

                    )
                }

            <button onClick={handleSubmit}className={clicked ? " bg-[#008000] text-gray-100 cursor-pointer rounded-[15px] h-full ml-[20px] mx-auto text-[20px] font-inter font-[500] ":"hidden"}>Submit</button>

                <div onClick={() => setClicked("email")} className={clicked ? "hidden": "EmailOption mx-auto w-full rounded-[7px] lg:rounded-[16px] bg-[#008000] lg:border-solid border-[1px] border-[#0000008F] shadow-md shadow-[#00000040] cursor-pointer active:scale-90 transition-all duration-100 ease-out flex"}>
                    <p className="text-center text-[#FFFFFF] text-[16px] lg:text-[35px] font-[800] font-inter my-0 py-[16px] px-[40px] lg:px-[80px] ">EMAIL</p>
                </div>

                {/*Phone Option */}
                <div onClick={() => setClicked("phone")} className={clicked ? "hidden": "EmailOption mx-auto w-full rounded-[7px] lg:rounded-[16px] bg-[#008000] lg:border-solid border-[1px] border-[#0000008F] shadow-md shadow-[#00000040] cursor-pointer active:scale-90 transition-all duration-100 ease-out flex"}>
                    <p className="text-center text-[#FFFFFF] text-[16px] lg:text-[35px] font-[800] font-inter my-0 py-[16px] px-[40px] lg:px-[80px] ">PHONE</p>
                </div>
            </div>                        
        </div> //FarmingQuotationMethod
    )
}

export default FarmingQuotationMethod