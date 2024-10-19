import React from "react";

function ReviewsDetailedCard({img, name, role, reviews, ratings}) {
    return (
        <div className="ReviewerCard mt-[12px] lg:mt-[28px] border-solid border-[0.28px] lg:border-[0.72px] border-[#00000033] shadow-md shadow-[#00000040] rounded-[7px] lg:rounded-[18px] ">
            <div className="ReviewsCardWrapper flex justify-between pt-[10px] lg:pt-[28px] pl-[10px] lg:pl-[30px] pr-[12px] lg:pr-[40px] pb-[16px] ">
                <div className="ReviewsData block mr-[50px] lg:mr-[300px]">
                    <div className="ReviwersDataWrapper flex justify-start">
                        {/*ReviewerImage */}
                        <div className="ImageWrapper block mt-[4px] lg:mt-[16px] ">
                            <div className="w-[74px] lg:w-[190px] h-[120px] lg:h-[306px] object-cover bg-[#D9D9D9] ">
                                <img src={img} alt={name}  className="w-full h-full rounded-[3px] lg:rounded-[8px]"/>
                            </div>
                        </div>
                        {/*Reviewer Details */}
                        <div className="ReviewerDetails ml-[14px] lg:ml-[40px]">
                            {/*Reviwer Name */}
                            <div className="ReviewerName lg:mx-[10px] ">
                                <p className="text-start text-[12px] lg:text-[20px] text-[#000000] font-inter font-[700] my-0">{name}</p>
                            </div>
                            {/*Reviwer Descriptions */}
                            <div className="ReviewerDescriptions mt-[12px] lg:mt-[20px]">
                                <p className="text-start text-[8px] lg:text-[22px] text-[#000000] font-josefin font-[600] my-0">{reviews}</p>
                            </div>
                            {/*Reviwer Role */}
                            <div className="ReviewerRole mt-[8px] lg:mt-[20px]">
                                <p className="text-start text-[10px] lg:text-[24px] text-[#008000] font-josefin font-[700] my-0">{role}</p>
                            </div>
                            {/*Reviwer Ratings */}
                            <div className="ReviewerRatings mt-[12px] lg:mt-[20px]">
                                <p className="text-start text-[12px] lg:text-[24px] text-[#008000] font-josefin font-[700] my-0">{ratings}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Green Bar */}
                <div className="GreenBar my-auto">
                    <div className="w-[5px] lg:w-[13px] h-[102px] lg:h-[262px] rounded-[7px] lg:rounded-[18px] bg-[#008000]" />
                </div>
               
            </div> {/*ReviewsCardWrapper */}
        </div>  // ReviewerCard
    )
}

export default ReviewsDetailedCard