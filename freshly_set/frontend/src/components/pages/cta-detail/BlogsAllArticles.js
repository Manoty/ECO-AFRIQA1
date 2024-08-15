import React from 'react'
import NavAuthenticated from '../../Nav/NavAuthenticated'
import { MdMessage } from 'react-icons/md'
import { FaShareAlt } from 'react-icons/fa'
import BlogWidgetsNew from '../blogs/BlogWidgetsNew'

function BlogsAllArticles() {
  return (
    <div className="">
        {/* Top Card */}
        <NavAuthenticated />

        <div className="bg-white lg:flex block w-[403.472px] lg:w-auto rounded-[5.738px] mt-[150px]">
            
            {/* Top/Left */}
           
            <div className="relative w-[403.472px] lg:w-[678px] h-[232.7px] lg:h-[475px]">
                
                <video
                className=" w-[403.472px] lg:w-[678px] h-[232.7px] lg:h-[475px] object-cover z-[20] rounded-[10.421px]"
                src="/static/media/vegetableFarmer.mp4"
                // muted={isMuted}
                autoPlay
                loop
                ></video>

                <div className="absolute flex justify-between items-center  bottom-[0px] lg:bottom-[0px]  rounded-[8px] left-[0px] h-[43px] lg:h-[83px] w-[403.472px] lg:w-[678px] bg-[#0000005E]/[0.37] z-[30]">
                    <p className="text-white text-[11.012px] lg:text-[20px] font-[900] font-inter lg:ml-[14px] ml-[9.86px] mb-[19px] lg:mb-[0px] cursor-pointer">PLAY VIDEO</p>
                    <img className="h-[22.045px] lg:h-[45px] w-[22.045px] lg:w-[45px] mr-[] lg:mr-[6px]" src="/static/media/mute.png" alt="muteBtn"/>

                </div>
            </div>

            {/* Bottom/Right */}
            <div className="block ml-[11px] lg:ml-[26px]"> 
                <h2 className="text-[#008000] text-[21.337px] lg:text-[40px] font-inter text-start">Vegetable Farmer Using Our Technology</h2>

                <p className="text-black/[0.70] text-start w-[386.582px] lg:w-[474px] font-[600] font-josefin text-[10.791px] lg:text-[15px] leading-[14.028px] lg:leading-[19.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru 
                
                <br />  <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru

                <br />  <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
                </p>
                {/* Bottom Social Icons */}
                <div className="flex items-center">
                    <MdMessage className="h-[21.581px]  lg:h-[31.427px] w-[18.965px] lg:w-[27.617px] text-black"/>
                    <FaShareAlt className="h-[21.581px] lg:h-[31.427px] w-[18.965px] lg:w-[27.617px] text-black ml-[16.82px] lg:ml-[24.49px]"/>

                    <p className="text-black text-[14.075px] lg:text-[20px] ml-[43.19px] font-inter font-[900] whitespace-nowrap">Media. <span className="freshlyGreenText">Read</span></p>
                    <p className="text-black text-[14.075px] lg:text-[20px] ml-[79px] lg:ml-[117px] font-inter font-[500] whitespace-nowrap ">30 minutes ago</p>

                </div>
            </div>
        </div>

        <div className="block">
            {/* All articles */}

            <h3 className="text-[22.74px] lg:text-[30px] text-[#008000] font-[800] text-center lg:text-start ml-[22px]">All Articles</h3>

            <div className="">
                <BlogWidgetsNew />
            </div>
        </div>
    </div>
  )
}

export default BlogsAllArticles