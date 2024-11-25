import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../context/PageContext";
import { CartContext } from "../../context/CartContext";

function VerifiedSuccess() {

    const { email } = useContext(CartContext)
    return (
        <div className="VerifiedSuccess">
            <div className="InnerBackground border-[1px] rounded-[24px]  border-gray-700 shadow-md shadow-gray-500 my-[60px] lg:my-[80px] mx-[10px] lg:mx-[250px] ">
                <div className="ContentsWrapper  p-[20px] lg:p-[50px]">
                    {/*Back Button */}
                    <Link  className="BackButton flex justify-end h-[30px] lg:h-[50px] ">
                        <img src="/static/media/close.png" alt="" className="lg:m-[6px] h-full"/>
                    </Link>
                    {/*Success title */}
                    <div className="SuccessHeader flex justify-start">
                        <div className="SuccessImage w-[45px] lg:w-[104px]">
                            <img src="/static/media/success.png" alt="" className="w-full -mt-[60px]"/>
                        </div>
                        <div className="SuccessMessage ml-[20px] lg:ml-[70px] ">
                            <h3 className="font-inter font-[600] text-start text-[25px] lg:text-[35px] -mt-[30px]">Success</h3>
                        </div>
                    </div> {/*Success Header */}

                    {/*Success Message */}
                    <div className="SuccessMessage pb-[120px] lg:pb-[200px] mt-[20px] lg:mt-[60px]">
                        <p className="font-inter font-[600] text-start text-[16px] lg:text-[30px]">Thank You For Submitting Your Freshly  application. Kindly Check Your email {email} to proceed</p>
                    </div>

                </div> {/*Contents Wrapper Ends Here */}
            </div> {/*Inner Background Ends Here */}


        </div> //VerifiedSuccess
    );
};

export default VerifiedSuccess