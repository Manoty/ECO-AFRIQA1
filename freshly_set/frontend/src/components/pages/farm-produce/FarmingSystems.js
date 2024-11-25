import React, { useContext, useState } from 'react'
import FarmCard from './FarmCard'
import { ModalToggleContentsContext } from '../../context/PageContext'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function FarmingSystems() {
  const [modalToggleContents, setModalToggleContents]  = useContext(ModalToggleContentsContext);
  const [visible, setVisible] = useState(3)

  return (
    <div className="block overflow-x-hidden py-[30px]">
        <div className="flex justify-center items-center">
            <div className="block">
                <h3 className="text-[25px] lg:text-[40px] font-[900] font-inter text-[#008000] text-center">POPULAR FARMING SYSTEMS</h3>

                <div className="flex w-[100%] justify-end">
                    <Link to="/products/farmingSystems">
                      <div className="flex space-x-[5px] items-center cursor-pointer mr-[30px]">
                        <p className="freshlyGreenText text-[30px] font-inter font-[700]">View All</p>
                        <FaLongArrowAltRight className="freshlyGreenText text-[32px]"/>

                      </div>
                    </Link>
                    
                </div>
                {/* Farm Cards */}
                <div className="flex justify-center w-[100%]">
                  <div className="grid grid-cols-2 gap-x-[36.14px]  gap-y-[20px] lg:flex lg:space-x-[20px]">
                    {
                      modalToggleContents?.slice(0,visible).map((card, index) => (
                        <FarmCard key={index} product={card} index={index} number={1} img={card.img} title={card.title} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>

                      ))
                    }
                      {/* <FarmCard number={2} img="/static/media/veggieRack2.png" title="Vertical System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>
                      <FarmCard number={4} img="/static/media/veggieFish.png" title="Aquaponics System" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/> */}
                  </div>
                </div>
                
              

            </div>
        </div>
    </div>
  )
}

export default FarmingSystems