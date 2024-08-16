import React from 'react'
import "./Mission.css"
function Mission() {
  return (
    <div className="missionBg pb-[14px]">
        {/* Left side */}

        <div className="missionLeft">
            <h2 className="font-inter text-[45px] text-[#008000] font-[700] ">Our Mission</h2>
            <div className="missionTextWrapper">
                <div className="">
                
                    <p className="text-[15px] font-josefin font-[400] text-[#525560] w-[552px]  leading-[26px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
                    <p className="text-[15px] font-josefin font-[400] text-[#525560] w-[552px]  leading-[26px] text-start">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                </div>
            </div>
          
            
        </div>
        {/* Right side */}
        <div className="missionRight">
            {/* Top */}
            <div className="missionRightTop">
                <img src="/static/media/hero1.png" alt="heroTop"/>
                <img  className="missionImg2" src="/static/media/hero2.png" alt="heroTop"/>

            </div>
            {/* <img src="/images/hero1.png"/> */}

            <div  className="missionRightBottom">
            {/* Bottom */}
                <img src="/static/media/hero3.png" alt="heroBottomImage"/>
                <img  className="missionImg2" src="/static/media/hero4.png" alt="heroBottomImage"/>
            </div>
        </div>
    </div>
  )
}

export default Mission