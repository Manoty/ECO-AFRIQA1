import React, { useContext, useEffect, useState } from 'react'
import { CurrentIndexContext, GardensContext, ModalContentsContext, ModalContext, ModalToggleContentsContext, SectionTypeContext } from '../../context/PageContext';
import { FaStar } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { ProductsContext } from '../../context/ProductsContext';

function CtaPopup() {
    const [modalOpen, setModalOpen] = useContext(ModalContext);
    const [modalContents, setModalContents] = useContext(ModalContentsContext);
    const [modalToggleContents, setModalToggleContents]  = useContext(ModalToggleContentsContext)

    const [modalToggleContentsGardens, setModalToggleContentsGardens] = useContext(GardensContext);
    const [currentIndex, setCurrentIndex] = useContext(CurrentIndexContext);

    const [sectionType, setSectionType] = useContext(SectionTypeContext)

    const { products } = useContext(ProductsContext);


    const handleNext = () => {
        if (currentIndex < products.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }

    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        console.log("Changing Index", currentIndex)
    },[currentIndex])
  return (
    <div className="">
        {modalOpen && (

                <div 
                    className="fixed inset-0 z-[100] border border-gray-700 shadow-lg  flex  justify-center bg-black/50 items-center transition-opacity duration-300 ease-in-out"
                >   

                <IoMdClose onClick={() => setModalOpen(false)} className="absolute top-0 right-[30px] text-black h-[38px] w-[38px] z-[101] cursor-pointer"/>      


                {/* Back and Forward Icons */}

                <MdNavigateNext                                 
                onClick={handleNext}
                className="absolute top-[50%] right-[30px] z-[102] text-black text-[38px] cursor-pointer"/>
                
                <MdNavigateBefore
                onClick={handleBack}

                className="absolute top-[50%] left-[30px] z-[102] text-black text-[38px] cursor-pointer"/>

                <div className="fixed inset-0 z-[100] rounded-[14.021px] border border-gray-700 shadow-lg  flex  justify-center bg-white items-center mx-[15px] mt-[47px] mb-[47px] lg:mt-[0px] lg:mb-[20px]">
                    <div className="block lg:flex">
                        {/* Left side */}
                        <div className="block">
                            <img className="w-[336.937px] h-[175px] lg:h-[400px] lg:w-[580px] object-cover" src={sectionType === "farmingSystems" ? `${process.env.REACT_APP_API_URL}/${products[currentIndex]?.image }`: productsGardens[currentIndex].image} alt="CTACarousel1"/>

                            <div className="flex justify-between space-x-[6.38px] mt-[20px]">
                                <img className="w-auto h-[79.744px] lg:h-[145px]" src="/static/media/gardens3.png" alt="CTACarousel2"/>
                                <img className="w-auto h-[79.744px] lg:h-[145px]" src="/static/media/gardens3.png" alt="CTACarousel2"/>
                                <img className="w-auto h-[79.744px] lg:h-[145px]" src="/static/media/gardens3.png" alt="CTACarousel2"/>
                                <img className="w-auto h-[79.744px] lg:h-[145px]" src="/static/media/gardens3.png" alt="CTACarousel2"/>

                            </div>
                        </div>
                    

                        {/* Right side */}

                        <div className="lg:ml-[33px] block">
                            <h3 className="text-[20px] lg:text-[45px] font-[900] font-inter text-black">{sectionType === "farmingSystems" ? products[currentIndex]?.name : productsGardens[currentIndex].name}</h3>
                            <div className="flex justify-center items-center lg:hidden">
                                <p className="freshlyGreenText font-[900] text-[15px]">In Stock</p>

                                <div className="flex items-center lg:space-x-[8px] ml-[20px]">
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>

                                </div>
                            </div>


                            <div className="">
                                <p className="w-[337px] lg:w-[536px] font-josefin text-start text-[13px] lg:text-[20px] leading-[16.9px] lg:leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

                                <p className="w-[337px] lg:w-[536px] font-josefin text-start text-[13px] lg:text-[20px] leading-[16.9px] lg:leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

                                <p className="w-[337px] lg:w-[536px] font-josefin text-start text-[13px] lg:text-[20px] leading-[16.9px] lg:leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

                            </div>

                            <div className="lg:flex hidden">
                                <p className="freshlyGreenText font-[900] text-[15px]">In Stock</p>

                                <div className="flex items-center lg:space-x-[8px] ml-[20px]">
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>
                                    <FaStar className="freshlyGreenText text-[20px] lg:text-[25px]"/>

                                </div>

                                <button className="h-[63.875px] w-[193.416px] bg-[#008000] text-white font-inter font-[900] rounded-[8.954px] ml-[100px]">REQUEST INVOICE</button>
                            </div>

                        </div>                    

                    </div>

                </div>

                  
               
              
            </div>
        )}
    </div>
   
  )
}

export default CtaPopup