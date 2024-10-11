import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import TestimonialsCard from './TestimonialsCard';
import TestimonialsData from './json/TestimonialsData.json'

function Testimonials() {
    // Number of Cards to be Shown on Desktop and Mobile Versions
    const DesktopCards = 9;
    const MobileCards = 6;

    //State to manage the Data shown
    const [cards, setCards] = useState([]);
    useEffect(() => {
    setCards(TestimonialsData); // Fetched Data From Json file
    }, []);

    // Function to return the custom margin style on Desktop Version based on card index
    const getMarginStyleDesktop = (index) => {

    // Define custom margins for 9 cards in the Desktop (3x3 grid)
    const marginStylesDesktop = [
      { margin: '0 90px 120px 0' },     // First card   (Margin Bottom and Right)
      { margin: '120px 0 0 90px' },     // Second card  (Margin Top and Left)
      { margin: '0 0 120px 90px' },     // Third card   (Margin Bottom and Left)
      { margin: '0 45px 120px 45px' },  // Fourth card  (Margin Bottom and mx-45px)
      { margin: '120px 45px 0 45px' },  // Fifth card   (Margin Top and mx-auto)
      { margin: '0 45px 120px 45px' },  // Sixth card   (Margin Bottom and mx-45px)
      { margin: '0 90px 120px 0' },     // Seventh card (Margin Bottom and Right)
      { margin: '120px 0 0 90px' },     // Eighth card  (Margin Top and Left)
      { margin: '0 0 120px 90px' },     // Ninth card   (Margin Bottom and Left)
    ];

    // The pattern repeats every 9 cards (3x3 grid)
    return marginStylesDesktop[index % 9]; // Repeats pattern after every 9 cards
    };

    // Function to return the custom margin style on Mobile Version based on card index
    const getMarginStyleMobile = (index) => {

    // Define custom margins for 6 cards in the Mobile (2x3 grid)
    const marginStylesMobile = [
      { margin: '0 20px 30px 0' },     // First card   (Margin Bottom and Right)
      { margin: '30px 14px 0 6px' },   // Second card  (Margin Top, Right and Left)
      { margin: '0 6px 30px 14px' },   // Third card   (Margin Bottom, Right and Left)
      { margin: '30px 14px 0 6px' },   // Fourth card  (Margin Top, Right and Left)
      { margin: '0 20px 30px 0' },     // Fifth card   (Margin Bottom, Right and Left)
      { margin: '30px 14px 0 6px' }    // Sixth card   (Margin Top, Right and Left)
    ];

    // The pattern repeats every 6 cards (2x3 grid)
    return marginStylesMobile[index % 6]; // Repeats pattern after every 6 cards
    };

    return (   
        <section id="testimonials" className="Testimonials relative lg:mx-[40px] lg:mt-[100px]">
            {/*Main title */}
            <div className="MainTitle text-[20px]  flex justify-center">
                <h1 className="font-inter block font[700] text-[#008000] text-[28px] lg:text-[45px] ">Our Testimonials</h1>
            </div>
          
            {/* View All Button */}
            <div className='ViewAllButton w-fit float-right pb-[20px] lg:pb-[50px] mr-[20px] lg:mr-[100px]'>
                <Link to= "/testimonials-detailed" className=' mt-[20px] lg:mt-[30px]'>
                    <button className=' block  cursor-pointer rounded-[10px] border-none active:scale-90 transition-all duration-100 ease-out font-inter text-white bg-[#008000] text-[12px] lg:text-[20px] font-[700] py-[10px] px-[28px] lg:px-[35px] '> View All </button>
                </Link>
            </div>
            

            {/*Cards */}
            <div className="AllCards clear-both  mx-[6px] lg:mx-[80px]">
                {/*Nine Cards Visible on Desktop Version*/}
                <div className='DesktopCards hidden lg:block'>
                    <div className="DesktopCardsWrapper grid grid-cols-3 gap-0 mx-0 ">
                        {TestimonialsData.slice(0,DesktopCards).map((TestimonialsData, index) => {
                            const marginStylesDesktop = getMarginStyleDesktop(index);
                            return (
                                <div key={TestimonialsData.id} style={marginStylesDesktop}>
                                    <TestimonialsCard img={TestimonialsData.img} name={TestimonialsData.name} title={TestimonialsData.title} details={TestimonialsData.details}/>
                                </div>
                            )
                        })}             
                    </div> {/*Desktop Cards Wrapper */}
                </div>  {/*Desktop Cards (Only Show in Desktop Devices) */}

                {/*Six Cards Visible on Mobile Version*/}
                <div className='MobileCards block lg:hidden'>
                    <div className="MobileCardsWrapper  grid grid-cols-2 gap-0 mx-0 ">
                        {TestimonialsData.slice(0,MobileCards).map((TestimonialsData, index) => {
                            const marginStylesMobile = getMarginStyleMobile(index);
                            return (
                                <div key={TestimonialsData.id} style={marginStylesMobile}>
                                    <TestimonialsCard img={TestimonialsData.img} name={TestimonialsData.name} title={TestimonialsData.title} details={TestimonialsData.details}/>
                                </div>
                            )
                        })}             
                    </div> {/*Mobile Cards Wrapper */}
                </div>  {/*Mobile Cards (Only Show in Mobile Devices) */}

            </div> {/*All Cards*/}
  </section> //Testimonials
   ); 
}

export default Testimonials;
  