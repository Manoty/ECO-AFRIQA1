import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Navbar';

function HeroDetail() {
  return (
    <div className="HeroDetail bg-[#F5FAF9]">
      {/* The NavBar */}
      <div className='Navbar'>
        <Nav />
      </div>

      {/* Main Content */}
      <div className="mainContents block mt-[150px] lg:mt-[200px] mx-[40px] pb-[60px]">
        {/* Back Button */}
        <div className="BackButton w-fit active:scale-90 transition-all duration-100 ease-out">
          <Link to='/about-us'>
            <img src='/static/media/image10.png' alt='image 10' className="w-[30px] h-[30px] lg:w-[61px] lg:h-[47px]"/>
          </Link>
        </div>

        {/* Top Contents */}
        <div className="TopContents flex justify-between mt-[10px]">
          {/*Top Details Part */}
          <div className='DetailsPart w-[50%]'>
            {/*Heading */}
            <div className='Heading '>
              <h1 className="text-start text-[#008000] text-[20px] lg:text-[45px] font-[400]  font-['Suez_One'] leading-[60px]">WHY WE ARE COMMITTED ENVIRONMENTALISTS</h1>
            </div>
            {/* Sub Details */}
            <div className="SubDetails mt-[30px] mr-[80px]">    
              <div className='Details'>
                <p className='text-start text-[25px] text-black font-josefin font-[25px] my-0 leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
              </div>

              <div className='Details mt-[20px]'>
                <p className='text-start text-[25px] text-black font-josefin font-[25px] my-0 leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
              </div>

              <div className='CEOName'>
                <p className="text-start text-[#008000] text-[30px] font-josefin font-[600] ">~ Kevin Manoti</p>
              </div>
            </div>
          </div> {/*Top Details Part */}
          
          {/*Top Image Part */}
          <div className="ImagePart w-[50%] ml-[40px]">
            <div className='ImagwWrapper w-full'>
              <img src="/static/media/image 188.png" alt="The Company CEO" className="w-[240px] h-[333px] lg:w-[481px] lg:h-[666px]" />
            </div>    
          </div>    
        </div> {/*Top Contents */}

        {/* The Globe */}
        <div className="TheGlobe flex justify-center mt-[60px]">
          <img src="/static/media/image 189.png" alt="Environmental Image" className="w-[100px] h-[72px] lg:w-[298px] lg:h-[214px] mx-auto" />
        </div>

        {/* Detailed Part */}
        <div className="DetailedPart flex justify-between mt-[40px]">
          {/*Left Side Details */}
          <div className='LeftDetails block w-[40%]'>
            <div className='DescriptionsBlock'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>

            <div className='DescriptionsBlock mt-[20px]'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>

            <div className='DescriptionsBlock mt-[20px]'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>

            <div className='DescriptionsBlock mt-[20px]'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>

            <div className='DescriptionsBlock mt-[20px]'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>

            <div className='DescriptionsBlock mt-[20px]'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>  
          </div> {/*Left Side Details */}
          {/*Green Line */}
          <div className='GreenLine block '>
            <div className='bg-[#008000] w-[8px] h-full'/>
          </div>
          {/*Right Side Details */}
          <div className='RightDetails block w-[40%]'>
            <div className='DescriptionsBlock'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>

            <div className='DescriptionsBlock mt-[20px]'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>

            <div className='DescriptionsBlock mt-[20px]'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>

            <div className='DescriptionsBlock mt-[20px]'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>

            <div className='DescriptionsBlock mt-[20px]'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>

            <div className='DescriptionsBlock mt-[20px]'>
              <p className='text-start text-[25px] text-black font-josefin font-[600] my-0 leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
            </div>  
          </div> {/*Right Side Details */}
        </div> {/* Detailed Part */}

        {/* Back Button */}
        <div className="BackButton mt-[50px]">
          <Link to='/about-us'>
            <button className="bg-[#008000] text-white text-[35px] font-inter font-[900] rounded-[15px] py-[10px] px-[60px] border-none outline-none cursor-pointer active:scale-90 transition-all duration-100 ease-out ">BACK</button>
          </Link>
        </div>
      </div> {/*Main Contents */}
    </div> // HeroDetails
  );
}

export default HeroDetail;
