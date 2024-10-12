import React, { useState } from 'react'
import { Link } from "react-router-dom";

function TeamCard({ name, img, role, LinkedIn }) {
    // State to manage color changes
    const [isHovered, setIsHovered] = useState({id:false});

    // Function to toggle the color and position on mouse enter
    const toggleColor = (id) => {
        setIsHovered((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };

    // Function to toggle the color and position on mouse leave
    const returnColor = (id) => {
        setIsHovered((!isHovered));
      }; 

    return (
        <div className="TeamCard mx-auto">
            <div TeamCardWrapper> 
                <div className={`ImageFrame ${isHovered[1]? "scale-x-105 scale-y-105": ""} transform origin-top-left transition-all duration-300 relative  `}
                    onMouseEnter={()=>toggleColor(1)}
                    onMouseLeave={()=>returnColor(1)}
                >
                    {/*Member Image */}
                    <div className={` MemberImage mx-auto ${isHovered[1]? "grayscale-0": "grayscale"} transform transition-all duration-300 w-[165px] lg:w-[286px] h-[220px] lg:h-[380px] `}>
                    <img src={img} alt={name} className="w-full h-full rounded-[12px]"/>
                    </div>
                    {/*LinkedIn Logo */}
                    <Link to={LinkedIn} target='blank' className={`LinkedIn ${isHovered[1]? "grayscale-0": "hidden"} block delay-300 grayscale  transform transition-all duration-300`}>
                        <div className="w-[50px] h-[50px]  absolute left-[110px] bottom-[20px]">
                            <img src="/static/media/linkedinn.png" alt="" className="w-full h-full rounded-[6px]"/>
                        </div>
                    </Link>
                </div>

                {/*Member Name */}
                <div className="mt-[20px]">
                    <p className="text-center text-[#000000] text-[20px] lg:text-[24px] font-[700] font-inter my-0 ">{name}</p>
                </div>

                {/*member Role */}
                <div className="">
                    <p className="text-center text-[#008000] text-[16px] lg:text-[20px] font-[700] font-inter my-0 ">{role} </p>
                </div>
            </div> {/*TeamCardWrapper */}
        </div>  //TeamCard
    )
}

export default TeamCard