import React from 'react';

function Mission() {
  return (
    <section id="mission" className="Mission mt-[60px] lg:mt-[100px]">
      <div className='MissionWrapper mx-[12px] lg:mx-[50px]'>
        {/* Heading (Only Visible on Mobile Devices) */}
        <div className='MobileHeading block lg:hidden'>
            <h2 className="text-center font-inter text-[35px] text-[#008000] font-[700] my-0">Our Mission</h2>
        </div>

        {/*Left and Right Side */}
        <div className='MissionContents mt-[20px] scale-x-[-1] lg:scale-x-[1] lg:mt-0 grid grid-cols-2 gap-[20px] lg:gap-[40px]'>

          {/*Texts Wrapper */}
          <div className='TextsWrapper block scale-x-[-1] lg:scale-x-[1]'>
            {/*Heading (Only Visible on desktop Devices) */}
          <div className='DesktopHeading hidden lg:block'>
            <h2 className="text-start font-inter text-[80px] text-[#008000] font-[700] my-0">Our Mission</h2>
          </div>
          {/*Descriptions */}
          <div className='Descriptions block mt-0 lg:mt-[20px]'>
            <div className='block'>
              <p className='text-start font-josefin text-[14px] lg:text-[20px] text-[#525560] font-[400] my-0'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            </div>
            {/*Only Visible on Desktop Version */}
            <div className='hidden lg:block mt-[50px]'>
              <p className='text-start font-josefin text-[10px] lg:text-[20px] text-[#525560] font-[400] my-0'>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
            </div>
          </div>
          </div> {/*Texts Wrapper */}
          
          {/*Pictures */}
          <div className='Pictures block '>
            <div className='PicturesWrapper scale-x-[-1] lg:scale-x-[1] grid grid-cols-2 gap-y-[10px] lg:gap-y-[30px] gap-x-[16px] lg:gap-x-[70px]'>
                <div className='block w-[full] h-[68px] lg:h-[184px] rounded-[17px] lg:rounded-[33px] border-solid border-[#008000] border-[2.5px] lg:border-[6px]  object-contain overflow-hidden '>
                  <img  src='/static/media/farmer1.png' alt='farmer 1' className='h-full w-full'/>
                </div>
                <div className='block w-[full] h-[68px] lg:h-[184px] rounded-[17px] lg:rounded-[33px] border-solid border-[#008000] border-[2.5px] lg:border-[6px]  object-contain overflow-hidden '>
                  <img  src='/static/media/farmer2.png' alt='farmer 2' className='h-full w-full'/>
                </div>
                <div className='block w-[full] h-[68px] lg:h-[184px] rounded-[17px] lg:rounded-[33px] border-solid border-[#008000] border-[2.5px] lg:border-[6px]  object-contain overflow-hidden '>
                  <img  src='/static/media/farmer3.png' alt='farmer 3' className='h-full w-full'/>
                </div>
                <div className='block w-[full] h-[68px] lg:h-[184px] rounded-[17px] lg:rounded-[33px] border-solid border-[#008000] border-[2.5px] lg:border-[6px]  object-cover overflow-hidden '>
                  <img  src='/static/media/farmer4.png' alt='farmer 4' className='h-full w-full'/>
                </div>
            </div> {/*PicturesWrapper */}
          </div> {/*Pictures */}
        </div> {/*Left and Right Side */}

      </div> {/*MissionWrapper */}
    </section> //Mission
  );
}

export default Mission;
