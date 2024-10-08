import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useSectionObserver from '../../UseSectionObserver';
import { AuthContext } from '../../context/AuthContext';

function Hero({ id }) {
    useSectionObserver(`#${id}`);
    console.log("hero id", id)


    const { isAuthenticated  } = useContext(AuthContext); 
  return (
    <div className="HomePageHero top-0 " >
        <div className="HeroInnerContents -mt-[50px] pb-[140px] lg:pb-[250px]  bg-hero-homepage bg-no-repeat bg-cover">
            <div className='HeroWrapper mt-[150px]  mx-[10px] lg:mx-[270px]'>
                {/*Hero Title */}
                <div className='HeroTittle pt-[130px] lg:pt-[170px] mx-[6px]'>
                    <h1 className="text-start lg:text-center font-inter font-[700] text-[26px] lg:text-[60px] text-[#FFFFFF] my-0">Urbanization Farming and Vertical Farming</h1>
                </div>
                {/*Hero Details */}
                <div className='Herodetails mt-[20px] lg:mt-[30px] mx-[6px]'>
                    <p className="text-start font-inter font-[400] text-[#FFF3E5] text-[14px] lg:text-[22px] my-0">Freshly Farms is known for urbanizing the food farming industry especially on horticulture. It helps farmers understand their crops and how to manage them to grow better</p>
                </div>
                {/*Hero Button */}
                {
                    !isAuthenticated && (
                    <Link to="/signup" className='HeroButton block mt-[20px] w-fit mx-auto rounded-[20px] lg:rounded-[45px] bg-[#FFFFFF] cursor-pointer active:scale-90 transition-all duration-500 ease-out'>
                        <p className="text-center font-inter font-[700] text-black text-[18px] lg:text-[22px] py-[18px] lg:py-[20px] px-[28px] lg:px-[36px]">GET STARTED</p>
                    </Link>
                    )
                }
               
            </div> {/*Hero Wrapper */}
        </div> {/*Hero Inner Contents */}
          
        {/*Hero Image */}
        <div className='-mt-[120px]  lg:-mt-[200px] h-[210px] lg:h-[372px] w-[320px] lg:w-[726px] mx-auto'>
            <img src="static/media/heroImage.png" alt="Hero"  className="w-full h-full"/>
        </div>
       
    </div> // Hero Section
  )
}

export default Hero