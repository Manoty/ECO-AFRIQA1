import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FaqDetailCard from './FaqDetailCard';
import Nav from '../../Nav/Navbar';

function FaqDetails() {
    const [faqs, setFaqs] = useState([]);
    const FaqNumber = 8;

    useEffect(() => {
        fetch('http://localhost:8000/api/faqs/')

            .then(response => response.json())
            .then(data => setFaqs(data))
            .catch(error => console.error('Error fetching FAQs:', error));
    }, []);

    return (
        <div className='DetailedFaq'>
            <div className='Navbar'>
                <Nav />
            </div>
            <div className='FaqWrapper relative top-[80px] lg:top-[100px] mx-[6px] lg:mx-[40px] '>
                <div className='BackNav mt-[80px] w-fit cursor-pointer active:scale-90 transition-all duration-100 ease-out'>
                    <Link to="/" className='w-[40px] lg:w-[80px] h-[36px] lg:h-[50px] content-evenly'>
                        <img src='/static/media/image10.png' alt='Back' className='w-full h-full '/>
                    </Link>
                </div>
                <div className='PageHero flex flex-row-reverse justify-between mx-2 lg:mt-[60px]'>
                    <div className=' block mt-0'>
                        <img src='/static/media/faqMark.png' alt='Questions' className='w-[140px] h-[180px] lg:h-full lg:w-[600px] -mr-[15px] -mt-[30px] lg:mt-[-50px]' />
                    </div>
                    <div className='block SearchBox '>
                        <div className=' block pb-[20px] w-[200px] lg:w-[100%]'>
                            <p className='text-[22px]  lg:text-[45px] text-start font-[700] font-inter  text-[#008000]  mb-[10px] lg:mb-0 lg:mt-[250px]'>What Can We Help You Find</p>
                        </div>
                        <div className='SearchBox w-[150%] lg:w-[100%] flex  mx-2 mt-[50px] lg:mt-[10px] lg:mx-0 my-[20px] relative border-solid border-[3px] lg:border-[5px] border-[#008000] rounded-[12px] lg:rounded-[20px] '>
                            <input placeholder="Search For Questions" className="h-[20px] w-[90%] border-0  lg:h-[40px] text-[18px]  lg:text-[28px] font-[400] py-[7px] lg:py-[10px] px-[14px] rounded-[12px] lg:rounded-[20px] focus:outline-none" />
                            <div className='SearchButton justify-end'>
                                <img src='/static/media/search.png' alt='' className='h-[30px] lg:h-[46px] w-[30px] lg:w-[42px] py-[2px] lg:py-[5px] px-[2px] lg-px[5px] rounded-[12px] lg:rounded-[20px] cursor-pointer active:scale-90 transition-all duration-500 ease-in'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='SetOfQuestions mx-6 mt-[10px] lg:mx-0 block lg:grid grid-cols-2 gap-x-[60px]'>
                    {faqs.slice(0, FaqNumber).map((faq) => (
                        <FaqDetailCard key={faq.id} id={faq.id} faq={faq.question} description={faq.description} />
                    ))}
                    <div className='block lg:mx-0 mt-[25px] lg:mt-[50px] border-[#008000]  border-solid border-[2px] lg:border-[5px]' />
                    <div className='block lg:mx-0 mt-[25px] lg:mt-[50px] lg:border-[#008000] lg:border-solid lg:border-[5px] l' />
                </div>
                <div className='PostTheQn mt-[50px] lg:mt-[100px] mx-6 mb-[100px] lg:mb-0 lg:mx-0 lg:border-solid border-[1px] border-[#b3b5bc] lg:shadow-md shadow-[#4e4e50] rounded-[20px] pb-[70px]'>
                    <div className='flex justify-center'>
                        <p className='text-[22px] lg:text-[45px] pt-0 lg:pt-[20px] mx-0 lg:mx-6 lg:text-start font-[700] font-inter text-left text-[#008000] mb-[10px] lg:mb-[30px]'>Can't Find What You Are Looking For?</p>
                    </div>
                    <div className='mx-auto lg:w-[80%] mt-[20px] lg:mb-[50px] border-solid border-[1px] border-[#b3b5bc] shadow-md rounded-[6px] lg:rounded-[20px] overflow-clip'>
                        <textarea placeholder="Post Your Question" className="block h-[220px] text-start font-[400] w-[97.9%] lg:h-[220px] border-none  focus:outline-none text-[16px] lg:text-[24px] font-inter  p-[20px]" />
                        <button className="block h-[56px] w-full mx-auto rounded-[6px] lg:rounded-[14px] bg-[#008000] border-none font-inter text-[25px] text-white font-[700] cursor-pointer active:scale-90 transition-all duration-500 ease-out">Send</button>
                    </div>
                </div>
                <Link to="/" className="backButton hidden lg:block mt-[70px] pb-[100px]">
                    <button className=" h-[80px] w-[250px] rounded-[16px] bg-[#008000] border-none font-inter text-[28px] text-white font-[700] cursor-pointer active:scale-90 transition-all duration-500 ease-out">BACK</button>
                </Link>
            </div>
        </div>
    );
}

export default FaqDetails;
