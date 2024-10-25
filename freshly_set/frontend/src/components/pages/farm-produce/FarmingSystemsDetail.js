import React, { useContext } from 'react'
import NavAuthenticated from '../../Nav/NavAuthenticated'

import FarmCard from './FarmCard'
import { ModalContext, ModalToggleContentsContext } from '../../context/PageContext'
import FarmingSystemsHero from './FarmingSystemsHero'
import CtaPopup from './CtaPopup'
import Nav from '../../Nav/Navbar'
import FreshlyFooter from '../../footer/FreshlyFooter';


function FarmingSystemsDetail() {
  const [modalOpen, setModalOpen] = useContext(ModalContext);
  const [modalToggleContents, setModalToggleContents]  = useContext(ModalToggleContentsContext);

  return (
    <div>
        <Nav />
        <div className="mt">
         {/* <ProductsSearchBar placeholder="Search For Farming System"/> */}

        </div>
        <FarmingSystemsHero />
        {
          modalOpen && (
            <CtaPopup />

          )
          
        }
       

        <div className="flex justify-center w-[100%] mt-[120px]">
                  <div className="grid grid-cols-2 gap-x-[36.14px]  gap-y-[20px] lg:grid lg:grid-cols-3 ">
                  {
                      modalToggleContents.map((card, index) => (
                        <FarmCard key={index} index={index} number={1} img={card.img} title={card.title} body="t is impossible to overestimate the significance of preserving both physical and mental wellbeing in the fast-paced, highly stressed world of today. Although these two facets of health are frequently seen as distinct, they are really intricately linked and have a significant impact on one another. In this piece, we'll examine the complex interrelationship between mental and physical wellbeing and how addressing one may have a beneficial effect on the other. The story of Sarah: A tale of physical and mental transformation Let's look at Sarah's narrative to see how physical and mental wellbeing are related. Sarah was a busy "/>

                      ))
                    }
                  </div>
        </div>
        <FreshlyFooter /> {/* Footer Section */}
    </div>
  )
}

export default FarmingSystemsDetail