import React, { useState, useEffect } from 'react';
import Nav from '../../Nav/Navbar'
import { Link } from "react-router-dom";
import TestimonialsCard from '../about-us/TestimonialsCard';
import TestimonialsData from '../about-us/json/TestimonialsData.json'

function Testimonials() {
    // Number of Cards to be Shown on Desktop and Mobile Versions
    const DesktopCards = 27;
    const MobileCards = 18;

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
      { margin: '0 25px 30px 0' },     // First card   (Margin Bottom and Right)
      { margin: '30px 10px 0 15px' },  // Second card  (Margin Top, Right and Left)
      { margin: '0 7px 30px 18px' },   // Third card   (Margin Bottom, Right and Left)
      { margin: '30px 18px 0 7px' },   // Fourth card  (Margin Top, Right and Left)
      { margin: '0 25px 30px 0' },     // Fifth card   (Margin Bottom, Right and Left)
      { margin: '30px 10px 0 15px' }   // Sixth card   (Margin Top, Right and Left)
    ];

    // The pattern repeats every 6 cards (2x3 grid)
    return marginStylesMobile[index % 6]; // Repeats pattern after every 6 cards
    };
    
    return (
        <div className="DetailedTestimonials pb-[100px]">
            {/*Navbar */}
            <div className='Navbae'>
                 <Nav />
            </div>
           
            {/*main contents */}
            <div className="MainContent relative top-[150px] lg:top-[200px] lg:mx-[40px] ">
                {/* Back Button */}
                <div className="BackButton mx-[12px] lg:mx-[40px] w-fit" >
                    <Link to="/about-us" >
                        <div className="ButtonWrapper w-[61px] h-[47px] cursor-pointer">
                            <img src="/static/media/image10.png"  alt="BackButton" className="w-full h-full"/>
                        </div>
                    </Link>
                </div>
                
                {/*Main Title */}
                <div className="MainTitle text-[20px] mt-[10px] lg:mt-[60px]">
                    <h1 className="text-center font-inter block font[700] text-[#008000] text-[32px] my-0 ">Our Testimonials</h1>
                </div>

                {/*Cards */}
                <div className="AllCards  mx-[6px] lg:mx-[80px] mt-[20px]  lg:mt-[50px] ">
                    {/*Twenty-Seven Cards Visible on Desktop Version*/}
                    <div className='DesktopCards hidden lg:block pb-[150px]'>
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

                    {/*Eighteen Cards Visible on Mobile Version*/}
                    <div className='MobileCards block lg:hidden pb-[50px]'>
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

            </div> {/*Main content */}
       </div> //Detailed Testimonials
   ); 
}

export default Testimonials;
  