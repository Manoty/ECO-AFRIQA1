import React, { useEffect, useState } from 'react';
import { FaCaretDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import config from '../../../config';

function Faq() {
    // State to control the opening of the Questions
    const [clicked, setClicked] = useState({});
    
    // State to store FAQs fetched from the backend
    const [faqs, setFaqs] = useState([]);
    const apiUrl = config.API_URL;

    // Function to toggle FAQ visibility
    const toggleFAQ = (id) => {
        setClicked((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    // Fetch FAQs from the backend when the component mounts
    useEffect(() => {
        fetch(`${apiUrl}api/faqsmainpage/`)  // Use your actual backend URL
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setFaqs(data);  // Set the FAQs in the state
                // Initialize clicked state for each FAQ
                const initialClickedState = data.reduce((acc, faq) => {
                    acc[faq.id] = false;
                    return acc;
                }, {});
                setClicked(initialClickedState);
            })
            .catch(error => console.error('Error fetching FAQs:', error));
    }, []);

    return (
        <section id="faqs" className="FaqSection mt-[120px] lg:mt-[200px] ">
            <div className='FaqWrapper block lg:flex justify-between just mx-[12px] lg:mx-[30px] px-[10px] lg:px-[30px] py-[28px] lg:py-[60px] rounded-[23px] bg-[#FFFFFF] border-solid border-[1px] border-[#00000040] shadow-lg shadow-[#00000040]'>
                
                {/* Left side (Only Visible on Desktop Mode) */}
                <div className="ImageWrapper hidden lg:block">
                    <div className='lg:h-[989px] lg:w-[473px]'>
                        <img src="/static/media/faq_large.png" alt="faq_large" className="w-full h-full"/>
                    </div>
                </div> 

                {/* Right Side */}
                <div className="ContentsWrapper w-full block lg:ml-[45px]">
                    {/* Faq Title */}
                    <div className='FaqTitle block '>
                        <h3 className="text-start text-[29px] lg:text-[45px] font-[700] font-inter text-[#008000] my-0 px-[28px] lg:px-0">Frequently Asked Questions</h3>
                    </div>

                    {/* Faq SubTitle */}
                    <div className='FaqSubTitle block mt-[6px]'>
                        <p className="text-start text-[17px] lg:text-[22px] font-[500] font-inter text-[#0000009E] my-0 px-[28px] lg:px-0">Questions You might ask about our products or services</p>
                    </div>

                    {/* Questions Set */}
                    <div className='SetOfCards mt-[18px] lg:mt-[36px]'>
                        {faqs.map(faq => (
                            <div key={faq.id} className="CardContent w-fill mt-[18px] lg:mt-[50px] rounded-[21px] border-solid border-[1px] border-[#00000040] pl-[22px] shadow-md shadow-[#00000040]">
                                <p className="text-black font-inter -ml-[10px] lg:ml-0 text-justify text-[12px] lg:text-[22px] mt-[12px] font-[700]">{faq.question}</p>
                                <div className="flex justify-between">
                                    <p className={clicked[faq.id] ? "hidden" : "text-black/[0.62] w-[500%] -ml-[8px] lg:ml-0 -mt-[10px] lg:-mt-[16px] font-josefin flex text-[10px] lg:text-[20px] text-justify"}>
                                        {faq.answer}
                                    </p>
                                    <div className="flex justify-end w-[100%]">
                                        <FaCaretDown onClick={() => toggleFAQ(faq.id)} className={`text-black h-[30px] lg:h-[52px] w-[20.8px] lg:w-[55px] -mt-[35px] lg:-mt-[59px] mr-[14px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[faq.id] ? "rotate-180" : ""}`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Read More Button */}
                    <div className="flex justify-center mt-[20px] lg:mt-[50px] w-fit mx-auto cursor-pointer active:scale-90 transition-all duration-500 ease-out">
                        <Link to="/cta-detail" className='bg-[#008000] rounded-[15px]'>
                            <p className="text-center text-[#FFFFFF] text-[20px] lg:text-[25px] font-inter font-[700] my-[14px] lg:my-[20px] mx-[50px]">Read More</p>
                        </Link>
                    </div>
                </div> 
            </div> 
        </section> 
    );
}

export default Faq;
