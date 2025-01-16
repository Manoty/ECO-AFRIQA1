import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Mission() {
  

  useEffect(() => {
    AOS.init();

  },[])

  return (
    <section id="mission" className="Mission mt-[60px] lg:mt-[100px]">
      <div className='MissionWrapper mx-[12px] lg:mx-[50px]'>
        {/* Heading (Only Visible on Mobile Devices) */}
        <div  data-aos="fade-in"  data-aos-easing="ease-in-out" className='MobileHeading block lg:hidden'>
            <h2  className="text-center font-inter text-[35px] text-[#008000] font-[700] my-0">Our Mission</h2>
        </div>

        {/*Left and Right Side */}
        <div className='MissionContents mt-[20px] scale-x-[-1] lg:scale-x-[1] lg:mt-0 grid grid-cols-2 gap-[20px] lg:gap-[40px]'>

          {/*Texts Wrapper */}
          <div className='TextsWrapper block scale-x-[-1] lg:scale-x-[1]'>
            {/*Heading (Only Visible on desktop Devices) */}
          <div  data-aos="fade-in"  data-aos-easing="ease-in-out" data-aos-duration="5000" className='DesktopHeading hidden lg:block'>
            <h2 className="text-start font-inter text-[80px] text-[#008000] font-[700] my-0">Our Mission</h2>
          </div>
          {/*Descriptions */}
          <div className='Descriptions block mt-0 lg:mt-[20px]'>
            <div  data-aos="fade-in"  data-aos-easing="ease-in-out" data-aos-duration="5000" className='block'>
              <p className='text-start font-josefin text-[14px] lg:text-[20px] text-[#525560] font-[400] my-0'>At Freshly Farms, our mission is to empower communities by providing innovative, sustainable, and accessible urban farming solutions. </p>
            </div>
            {/*Only Visible on Desktop Version */}
            <div  data-aos="fade-in"  data-aos-easing="ease-in-out" data-aos-duration="5000" className='hidden lg:block mt-[20px]'>
              <p className='text-start font-josefin text-[10px] lg:text-[20px] text-[#525560] font-[400] my-0'>We strive to transform everyday spaces into thriving gardens, fostering self-reliance, healthier living, and a greener planet for future generations.</p>
            </div>
          </div>
          </div> {/*Texts Wrapper */}
          
          {/*Pictures */}
          <div className='Pictures block '>
            <div className='PicturesWrapper scale-x-[-1] lg:scale-x-[1] grid grid-cols-2 gap-y-[10px] lg:gap-y-[30px] gap-x-[16px] lg:gap-x-[70px]'>
                <div  data-aos="fade-in"  data-aos-easing="ease-in-out" data-aos-duration="5000" data-aos-delay="1000" className='block w-[full] h-[68px] lg:h-[184px] rounded-[17px] lg:rounded-[33px] border-solid border-[#008000] border-[2.5px] lg:border-[6px]  object-contain overflow-hidden '>
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
