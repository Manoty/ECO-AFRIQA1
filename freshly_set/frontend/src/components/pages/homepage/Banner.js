import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section id="promotion" className="Banner mx-[6px]  lg:mx-[10px] mt-[60px]  lg:mt-[67px]">
      <div className='BannerWrapper relative bg-gradient-to-t from-[#FF0C1A]   via-[#1A1A1A] via-[20%] to-[#1A1A1A] pl-[8px] lg:pl-[14px] rounded-[10px] lg:rounded-[29px]'>
         {/*Banner Images */}
        <div className='BannerImage absolute right-0 bottom-0'>
          <div className='Image Wrapper  lg:w-[488px] h-[180px] lg:h-[500px]'>
             <img src="/static/media/BannerImage.png"  alt="BannerImg" className='w-full h-full'/>
          </div>
        </div> {/*Banner Images */}

        {/*Descriptions Block */}
        <div className='Block relative pt-[10px] lg:pt-[28px] pb-[22px] lg:pb-[110px] mr-[140px] lg:mr-[500px]'>
          {/*Banner Header */}
          <div className='BannerHeader'>
            <h3 className="text-[10px] lg:text-[40px] font-[800] font-inter text-[#F5FAF9] my-0"><span className="freshlyGreenText">15% OFF</span> ON ALL FARM PRODUCE TO THE FIRST 500 NEW USERS WHO <span className="text-red-600">SIGN UP</span> ON OUR WEBSITE</h3>
          </div>

          {/*Banner Descriptions and Button */}
          <div className='DescAndButton mt-[10px] lg:mt-[40px] bg-yellow-30'>
            <div className='Descriptions block mr-[110px] lg:mr-[436px]'>
              <p className="text-[6px] lg:text-[15px] text-white text-start font-josefin font-[600] my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            </div>
            
            <div className='DescriptionAndButton mt-[10px] lg:mt-[30px] grid grid-cols-2'>
              <div className='Descriptions block mr-[10px] lg:mr-0'>
                  <p className="text-[6px] lg:text-[15px] text-white text-start font-josefin font-[600] my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
              </div>
              <Link to="/SignUp" className='Button block h-fit w-fit  lg:mx-auto bg-[#008000] cursor-pointer rounded-[6px] lg:rounded-[15px]  active:scale-90 transition-all duration-500 ease-out'>
                  <p className="text-center  text-white text-[8px] lg:text-[20px] font-inter font-[700] py-[4px] lg:py-[8px] px-[10px] lg:px-[40px] my-0 ">Click Here</p>
              </Link>
            </div> 
          </div> {/*Banner Desctiptions and Button */}
        </div> {/*Descriptions Block */}
  
      </div> {/*Banner Wrapper */}
    </section> //Banner
  )
}

export default Banner