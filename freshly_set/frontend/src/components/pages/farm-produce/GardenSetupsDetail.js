import React, { useContext } from 'react'
import NavAuthenticated from '../../Nav/NavAuthenticated'
import FarmCard from './FarmCard'

import GardenSetupsHero from './GardenSetupsHero'
import { GardensContext, ModalContext } from '../../context/PageContext'
import Nav from '../../Nav/Navbar'
import FreshlyFooter from '../../footer/FreshlyFooter';
import CtaPopup from './CtaPopup'


function GardenSetupsDetail() {
    const [modalToggleContentsGardens, setModalToggleContentsGardens] = useContext(GardensContext);
    const [modalOpen, setModalOpen] = useContext(ModalContext);
  return (
    <div>
        <Nav />
        <div className="mt">
         {/* <ProductsSearchBar placeholder="Search for Garden Setups" /> */}

        </div>

        <GardenSetupsHero />

        {
          modalOpen && (
            <CtaPopup />

          )
        }
        <div className="flex justify-center lg:mt-[100px]">
            <div className="grid grid-cols-2 gap-x-[36.14px]  gap-y-[20px] lg:grid lg:grid-cols-3 ">

                {
                    modalToggleContentsGardens.map((card, index) => ( 
                    <FarmCard key={index} index={index} number={1} img={card.img} title={card.title} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>


                    ))

                }
            </div>
        </div>
       
        <FreshlyFooter /> {/* Footer Section */}
    </div>
  )
}

export default GardenSetupsDetail
