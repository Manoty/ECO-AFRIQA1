import React from "react";

function ReviewsDetailedCard({img, name, role, reviews, ratings}) {
    return (
        <div className="ReviewerCard lg:mt-[28px] border-solid border-[0.72px] border-[#00000033] shadow-md shadow-[#00000040] rounded-[18px] ">
            <div className="ReviewsCardWrapper pt-[28px] pl-[30px] pr-[40px] pb-[16px] ">
                <div className="InnerWrapper flex justify-between">
                    <div className="ReviewsData block lg:mr-[300px]">
                        <div className="ReviwersDataWrapper flex justify-start">
                            {/*ReviewerImage */}
                            <div className="ImageWrapper block mt-[16px] ">
                                <div className="lg:w-[190px] lg:h-[306px] object-cover bg-[#D9D9D9] ">
                                    <img src={img} alt={name}  className="w-full h-full lg:rounded-[8px]"/>
                                </div>
                            </div>
                            {/*Reviewer Details */}
                            <div className="ReviewerDetails lg:ml-[40px]">
                                {/*Reviwer Name */}
                                <div className="ReviewerName lg:mx-[10px] ">
                                    <p className="text-start text-[20px] text-[#000000] font-inter font-[700] my-0">{name}</p>
                                </div>
                                {/*Reviwer Descriptions */}
                                <div className="ReviewerDescriptions mt-[20px]">
                                    <p className="text-start text-[22px] text-[#000000] font-josefin font-[600] my-0">{reviews}</p>
                                </div>
                                {/*Reviwer Role */}
                                <div className="ReviewerRole mt-[20px]">
                                    <p className="text-start text-[24px] text-[#008000] font-josefin font-[700] my-0">{role}</p>
                                </div>
                                {/*Reviwer Ratings */}
                                <div className="ReviewerRatings mt-[20px]">
                                    <p className="text-start text-[24px] text-[#008000] font-josefin font-[700] my-0">{ratings}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Green Bar */}
                    <div className="GreenBar my-auto">
                        <div className="lg:w-[13px] lg:h-[262px] rounded-[18px] bg-[#008000]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsDetailedCard