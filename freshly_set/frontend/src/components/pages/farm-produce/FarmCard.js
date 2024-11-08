import React, { useContext, useEffect, useState } from 'react'
import { FaCaretDown, FaLongArrowAltRight, FaStar } from 'react-icons/fa'
import { CurrentIndexContext, ModalContentsContext, ModalContext, SectionTypeContext } from '../../context/PageContext';

function FarmCard({  index, img, title, body, rating, number, type}) {
    const [clicked, setClicked] = useState({
        1: true,  // Question 1 is open by default
        2: true, // Question 2 is closed by default
        3: true,
        4: true
      });
      const [modalOpen, setModalOpen] = useContext(ModalContext);
      const [modalContents, setModalContents] = useContext(ModalContentsContext);
      const [currentIndex, setCurrentIndex] = useContext(CurrentIndexContext);
      const [sectionType, setSectionType] = useContext(SectionTypeContext);

    const passInfo = () => {
      setModalOpen(true)
      setCurrentIndex(index)
      setSectionType(type)
      // setModalContents({
      //   img, title, body
      // })
    }
      const toggleCard = (id) => {
        setClicked((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
      
    useEffect(() => {
        console.log("clicked", clicked)
    },[clicked])
  return (
    <div className="flex justify-center items-center w-[168px] lg:w-[373px]  shadow-lg hover:shadow-2xl transition-all duration-500 ease-out  rounded-[24px]"> 
       
       <div className="block">
          <div className="flex justify-center">
            <img className="w-[168px] lg:w-[373.07px] h-[83.48px] lg:h-[200px] object-cover rounded-t-[24px]" src={img}/>
          </div>
          
          <div className="flex space-x-[16px] items-center px-[6.71px] lg:px-[20px]">
            <p className="freshlyGreenText font-inter font-[700] text-[6.88px] lg:text-[16.142px]">In Stock</p>

            <div className="flex items-center lg:space-x-[8px] lg:ml-[20px] mt-[12px] lg:mt-[0px]">
              <FaStar className="freshlyGreenText text-[6px] lg:text-[25px]"/>
              <FaStar className="freshlyGreenText text-[6px] lg:text-[25px]"/>
              <FaStar className="freshlyGreenText text-[6px] lg:text-[25px]"/>
              <FaStar className="freshlyGreenText text-[6px] lg:text-[25px]"/>
              <FaStar className="freshlyGreenText text-[6px] lg:text-[25px]"/>
              <FaStar className="freshlyGreenText text-[6px] lg:text-[25px]"/>

            </div>
          </div>


          <div className="">
            {/* Text */}
            <h2 className="text-black text-[12.709px] lg:text-[32px] font-inter font-[700] text-start mt-0 ml-[6.71px] lg:ml-[20px]">{title}</h2>

            <p className="max-w-[144.173px] lg:max-w-[350px]  ml-[6.71px] lg:ml-[20px]  font-josefin text-[7.625px] lg:text-[15px] font-[600] leading-[9.913px] lg:leading-[32.5px] text-[#525560] lg:w-[498px] text-start">{body}</p>

            <p className="max-w-[144.173px] lg:max-w-[350px]  ml-[6.71px] lg:ml-[20px]  font-josefin text-[7.625px] lg:text-[15px] font-[600] leading-[9.913px] lg:leading-[32.5px] text-[#525560] lg:w-[498px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

          </div>
          <div className="flex justify-between items-center ml-[6.71px] lg:mx-[30px]">
              <div className="flex space-x-[15px] items-center">
                <p onClick={passInfo} className="text-[7.625px] lg:text-[20px] freshlyGreenText cursor-pointer">Read More</p>
                  <FaLongArrowAltRight className="freshlyGreenText cursor-pointer mt-[12px] lg:mt-[0px]" />
              </div>

             <img className="h-[20px]  lg:h-[40px] w-[20px] lg:w-[40px] cursor-pointer mr-[16.86px] lg:mr-[0px]" src="/static/media/docLogo.png" alt="DocLogo"/>
           </div>
       </div>

    
        
     </div>
  )
}

export default FarmCard