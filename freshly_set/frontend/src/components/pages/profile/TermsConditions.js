import React, { useEffect, useState } from "react";

function TermsConditions() {
    // Last Date the Privacy was Updated
    const UpdateDate = "January 2025";

    const [isVisible, setIsVisible] = useState(false)

    const handleToggle = () => {
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="TermsAndConditions pb-[50px] lg:pb-[20px]">
            <div className="Terms&ConditionsWrapper  relative mx-[12px] lg:mx-0 lg:mr-[260px]">
                {/*Heading */}
                <div className="Heading">
                    <h2 className="text-start font-inter font-[900] text-[20px] lg:text-[24px] text-[#008000] my-0">Terms & Conditions</h2>
                </div>
                {/*Updated date */}
                <div className="UpdatedDate mt-[6px] lg:mt-[10px]">
                    <p className="text-start font-inter font-[700] text-[12px] lg:text-[18px] text-[#000000B2] my-0">Last Updated On {UpdateDate}</p>
                </div>
                {/*Descriptions */}
                <div className="Descriptions mt-[14px] lg:mt-[30px]">
                    {/*1. Accepting Terms */}
                    <div className="AcceptingTerms mt-[20px] lg:mt-[40px]">            
                        <div className="Heading">
                            <h2 className="text-start font-inter font-[800] text-[16px] lg:text-[20px] text-[#000000] my-0">1. Accepting The Terms</h2>
                        </div>
                        <div className="Descriptions mt-[10px] lg:mt-[30px]">
                            <p className="text-start font-inter font-[500] text-[12px] lg:text-[18px] text-[#000000] my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                        <div className="Descriptions mt-[10px] lg:mt-[16px]">
                            <p className="text-start font-inter font-[500] text-[12px] lg:text-[18px] text-[#000000] my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                    </div>
                    {/*2. User Agreement */}
                    <div className="AcceptingTerms mt-[20px] lg:mt-[40px]">            
                        <div className="Heading">
                            <h2 className="text-start font-inter font-[800] text-[16px] lg:text-[20px] text-[#000000] my-0">2. User Agreement</h2>
                        </div>
                        <div className="Descriptions mt-[10px] lg:mt-[30px]">
                            <p className="text-start font-inter font-[500] text-[12px] lg:text-[18px] text-[#000000] my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                        <div className="Descriptions mt-[10px] lg:mt-[16px]">
                            <p className="text-start font-inter font-[500] text-[12px] lg:text-[18px] text-[#000000] my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                    </div>
                    {/*3. Legal  */}
                    <div className="AcceptingTerms mt-[20px] lg:mt-[40px]">            
                        <div className="Heading">
                            <h2 className="text-start font-inter font-[800] text-[16px] lg:text-[20px] text-[#000000] my-0">3. Legal </h2>
                        </div>
                        <div className="Descriptions mt-[10px] lg:mt-[30px]">
                            <p className="text-start font-inter font-[500] text-[12px] lg:text-[18px] text-[#000000] my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                        <div className="Descriptions mt-[10px] lg:mt-[16px]">
                            <p className="text-start font-inter font-[500] text-[12px] lg:text-[18px] text-[#000000] my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                    </div>                   
                </div>
            </div> {/*TermsAndConditionsWrapper */}

            {/*Accept or Decline Banner */}
            {
                (
                    <div className={`${ !isVisible ? "h-0 " : "pt-[10px] h-[201px]"} transition-all duration-1000 ease-in-out fixed z-10 bottom-0 w-full sm:w-[80%] bg-[#F5FAF9] flex items-start justify-around gap-4 `}>
                        <button className="text-center text-white font-[800] text-[12px] lg:text-[22px] rounded-[6px] lg:rounded-[10px] py-[12px] lg:py-[16px] px-[40px] lg:px-[46px] bg-[#FF0C1A] border-none outline-none cursor-pointer"
                            onClick={handleToggle}>DECLINE
                        </button>
                        <button className="text-center text-white font-[800] text-[12px] lg:text-[22px] rounded-[6px] lg:rounded-[10px] py-[12px] lg:py-[16px] px-[40px] lg:px-[46px] bg-[#008000] border-none outline-none cursor-pointer"
                            onClick={handleToggle}>ACCEPT
                        </button>
                    </div>
                )
            }
        </section>
    )
}

export default TermsConditions