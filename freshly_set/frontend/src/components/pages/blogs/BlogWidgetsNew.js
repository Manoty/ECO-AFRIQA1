import React, { useRef, useState } from 'react'
import { FaChevronDown, FaShareAlt, FaVolumeUp } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'

function BlogWidgetsNew() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
  
    const handlePlayPause = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    const handleMuteUnmute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };
  return (
    // Make mobile responsive
    <div className="hidden lg:grid lg:grid-cols-3 gap-y-[28px] mx-[7px] lg:mx-[68px] mt-[70px] ">

        {/* Cards Start */}

        <div className="relative h-[281.016px] lg:h-[506px] w-[195.489px] lg:w-[352px] rounded-[10.546px] bg-white shadow-lg pt-[29px]  block">
            {/* Card 1 */}

            <FaChevronDown className="absolute top-[42px] right-[20px] h-[18.949px] w-[30.053px] text-black cursor-pointer"/>
            <h3 className="freshlyGreenText ml-[38px]">Urban Farming?</h3>
            {/* Polls */}
                <div className="flex  lg:space-x-[24px] items-center ml-[38px]">
                        <p className="text-[17.576px]  font-[700] text-black  ">Yes</p>
                        <div className="bg-[#D9D9D9] rounded-[12px] w-[135px] h-[22.31px]">
                            <div className="h-[22.31px] w-[100px]  rounded-[12px] bg-[#008000]"/>

                        </div>
                </div>


                <div className="flex  lg:space-x-[24px] items-center ml-[38px]">
                        <p className="text-[17.576px]  font-[700] text-black  ">No</p>
                        <div className="bg-[#D9D9D9] rounded-[12px] w-[62px] h-[22.31px]">
                            <div className="h-[22.31px] w-[100px]  rounded-[12px] bg-[#008000]"/>

                        </div>
                </div>

                <div className="flex  lg:space-x-[24px] items-center ml-[38px]">
                        <p className="text-[17.576px]  font-[700] text-black  ">Hm</p>
                        <div className="bg-[#D9D9D9] rounded-[12px] w-[21.082px] h-[22.31px]">
                            <div className="h-[22.31px] w-[100px]  rounded-[12px] bg-[#008000]"/>

                        </div>
                </div>

                   



                    

                    <h4 className="w-[121px] lg:w-[275.266px] text-[12px] lg:text-[12px] font-[700] font-inter ml-[38px] ">Vote & Give A Reason For Your Choice</h4>
                    
                    <div className="">
                        
                        <textarea className="h-[101px] w-[179px] ml-[38px] lg:h-[97px] lg:w-[284px] rounded-[19px] border-solid border-[#00000040]/[25%]"/>

                    </div>
                    <div className="absolute left-[118px] bottom-[42px]">
                        <div className=" items-center space-x-[32px]  mt-[26px]">
                            <MdMessage className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                            <FaShareAlt className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                        </div>

                      
                    </div>

                      {/* Date and author...can be made dynamic later*/}
                      <p className="absolute bottom-[0px] left-[25%] text-[10px] lg:text-[11.719px] text-center font-[400]">By Freshly Farms, on 04 Sept, 2024</p>
        </div>


        <div className="relative h-[506px] w-[352px] rounded-[10.546px] bg-white shadow-lg pt-[29px]  block">
            {/* Card 2 */}
            <FaChevronDown className="absolute top-[42px] right-[20px] h-[18.949px] w-[30.053px] text-black cursor-pointer"/>

            <h3 className="freshlyGreenText ml-[38px]">Farming And Technology</h3>
                <div className="block ml-[38px]">
                    <p className="text-[13.027px] text-[#525560] font-[400] leading-[16.935px] w-[269.553px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    <p className="text-[13.027px] text-[#525560] font-[400] leading-[16.935px] w-[269.553px] text-start">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>


                </div>

                <div className="ml-[38px] mt-[22px]">
                    <img className="h-[122px] w-[293px] object-cover rounded-[4.69px]" src="/static/media/farmingTech.png" alt="FarmingAndTEchnologyWidget"/>
                </div>
                    <div className="absolute left-[118px] bottom-[42px]">
                        <div className=" items-center space-x-[32px]  mt-[26px]">
                            <MdMessage className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                            <FaShareAlt className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                        </div>

                      
                    </div>

                      {/* Date and author...can be made dynamic later*/}
                      <p className="absolute bottom-[0px] left-[25%] text-[10px] lg:text-[11.719px] text-center font-[400]">By Freshly Farms, on 04 Sept, 2024</p>
                   
        </div>


        <div className="relative h-[506px] w-[352px] rounded-[10.546px] bg-white shadow-lg pt-[29px]  block">
            {/* Card 3 */}
            <FaChevronDown className="absolute top-[42px] right-[20px] h-[18.949px] w-[30.053px] text-black cursor-pointer"/>

            <h3 className="freshlyGreenText ml-[38px] w-[252.131px]">Growth Of Vertical Farms In Kenya</h3>
                

                <div className="flex justify-center">
                    <img className="h-[182.601px] w-[258.308px] -mt-[40px]" src="/static/media/farmingStats.png" alt="FarmingStats"/>
                </div>

                <div className="block ml-[38px]">
                    <p className="text-[13.027px] text-[#525560] font-[400] leading-[16.935px] w-[269.553px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    <p className="text-[13.027px] text-[#525560] font-[400] leading-[16.935px] w-[269.553px] text-start">Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>


                </div>
                    <div className="absolute left-[118px] bottom-[42px]">
                        <div className=" items-center space-x-[32px]  mt-[26px]">
                            <MdMessage className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                            <FaShareAlt className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                        </div>

                      
                    </div>

                      {/* Date and author...can be made dynamic later*/}
                      <p className="absolute bottom-[0px] left-[25%] text-[10px] lg:text-[11.719px] text-center font-[400]">By Freshly Farms, on 04 Sept, 2024</p>
                   
        </div>


        <div className="relative h-[506px] w-[352px] rounded-[10.546px] bg-white shadow-lg pt-[29px]  block">
            {/* Card 4 */}
            <FaChevronDown className="absolute top-[42px] right-[20px] h-[18.949px] w-[30.053px] text-black cursor-pointer"/>

            <h3 className="freshlyGreenText ml-[25px] w-[270px]">Vegetable Farmer Using Our Technology</h3>
                
                {/* Video Start */}

                <div className="flex justify-center relative z-[10]">
                    <button      
                    onClick={handlePlayPause}
                
                    className="absolute top-[88px] lg:top-[65.44px] text-[#F5F5F5] cursor-pointer font-inter font-[900] text-[15px] lg:text-[15.632px] z-[25] h-[32.221px] w-[134.184px] lg:h-[49.822px] lg:w-[180.71px] border-none bg-[#0000004D]/[30%] rounded-[15px]">{isPlaying ? 'Pause' : 'Play'}  VIDEO</button>

                        <video
                            ref={videoRef}
                            className="absolute  w-[165px] lg:w-[308.353px] h-[209px] lg:h-[169.273px] object-cover z-[20] rounded-[20px]"
                            src="/static/media/vegetableFarmer.mp4"
                            muted={isMuted}
                            autoPlay
                            loop
                        ></video>

                    </div>

                    <div className="mt-[22.14px] absolute top-[275px] left-[25px]">
                        <p className="text-[13.027px] text-[#525560] font-[400] leading-[16.935px] w-[269.553px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    </div>
                
                    <div className="absolute left-[118px] bottom-[42px]">
                        <div className=" items-center space-x-[32px]  mt-[26px]">
                            <MdMessage className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                            <FaShareAlt className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                        </div>

                      
                    </div>

                      {/* Date and author...can be made dynamic later*/}
                      <p className="absolute bottom-[0px] left-[25%] text-[10px] lg:text-[11.719px] text-center font-[400]">By Freshly Farms, on 04 Sept, 2024</p>
                   
        </div>


        <div className="relative h-[506px] w-[352px] rounded-[10.546px] bg-white shadow-lg pt-[29px]  block">
            {/* Card 5 */}
            <FaChevronDown className="absolute top-[42px] right-[20px] h-[18.949px] w-[30.053px] text-black cursor-pointer"/>

            <h3 className="freshlyGreenText ml-[25px] w-[270px]">Podcast - Why do People Associate Farming with Traditionalism</h3>
                
                {/* Audio Start */}

                <div className="flex justify-center">
                    <FaVolumeUp className="h-[132.874px] w-[150.069px]"/>

                   </div>

                    <div className="flex justify-center ">

                    <audio >

                        <source src="/static/media/audioTest.mp3" type="audio/mp3" />
                        <source src="/static/media/audioTest.mp3" type="audio/ogg" />

                        Your browser does not support the audio element.
                    </audio>
                    </div>
                   
                    <div className="flex justify-center mt-[10px] ">
                        <button className='w-[188.108px] h-[36.475px] bg-[#008000] rounded-[15px] text-white text-[15.632px] font-[800] border-none'>View All</button>
                    </div>

                    <div className="mt-[22.14px] absolute top-[308px] left-[25px]">
                        <p className="text-[13.027px] text-[#525560] font-[400] leading-[16.935px] w-[269.553px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    </div>
                
                    <div className="absolute left-[118px] bottom-[42px]">
                        <div className=" items-center space-x-[32px]  mt-[26px]">
                            <MdMessage className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                            <FaShareAlt className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                        </div>

                      
                    </div>

                      {/* Date and author...can be made dynamic later*/}
                      <p className="absolute bottom-[0px] left-[25%] text-[10px] lg:text-[11.719px] text-center font-[400]">By Freshly Farms, on 04 Sept, 2024</p>
                   
        </div>



        <div className="relative h-[506px] w-[352px] rounded-[10.546px] bg-white shadow-lg pt-[29px]  block">
            {/* Card 6 */}
            <FaChevronDown className="absolute top-[42px] right-[20px] h-[18.949px] w-[30.053px] text-black cursor-pointer"/>

            <h3 className="freshlyGreenText ml-[25px] w-[270px]">Take This Quiz To Know What You Should Implement On Your Farms</h3>
                
                {/* Form Fields Start */}
                <div className="block ">
                        {/* Input 1  */}
                        <div className="flex justify-center space-x-[27.32px]">
                            <p className="text-[15.632px] font-[700] font-inter">1.</p><p className="text-[15.632px] font-[700] font-inter">What Is Your Farm Size?</p>
                        </div>

                        <div className="flex justify-center mt-[20px]">
                            <textarea className="h-[63.05px] w-[290px] mx-auto rounded-[27px] border-solid border-[#00000047] bg-[#F5FAF9] "/>

                        </div>

                       {/* Input 1  */}
                       <div className="flex justify-center space-x-[27.32px]">
                            <p className="text-[15.632px] font-[700] font-inter">2.</p><p className="text-[15.632px] font-[700] font-inter">Is It In An Urban Setting?</p>
                        </div>

                        <div className="flex justify-center mt-[20px]">
                            <textarea className="h-[63.05px] w-[290px] mx-auto rounded-[27px] border-solid border-[#00000047] bg-[#F5FAF9] "/>

                        </div>
                   </div>
               
                
                    <div className="absolute left-[118px] bottom-[42px]">
                        <div className=" items-center space-x-[32px]  mt-[26px]">
                            <MdMessage className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                            <FaShareAlt className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                        </div>

                      
                    </div>

                      {/* Date and author...can be made dynamic later*/}
                      <p className="absolute bottom-[0px] left-[25%] text-[10px] lg:text-[11.719px] text-center font-[400]">By Freshly Farms, on 04 Sept, 2024</p>
                   
        </div>

    </div>
  )
}

export default BlogWidgetsNew