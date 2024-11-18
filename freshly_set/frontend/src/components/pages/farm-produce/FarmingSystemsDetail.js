import React, { useContext } from 'react'
import NavAuthenticated from '../../Nav/NavAuthenticated'

import FarmCard from './FarmCard'
import { ModalContext, ModalToggleContentsContext } from '../../context/PageContext'
import FarmingSystemsHero from './FarmingSystemsHero'
import CtaPopup from './CtaPopup'
import Nav from '../../Nav/Navbar'
import FreshlyFooter from '../../footer/FreshlyFooter';
import { ProductsContext } from '../../context/ProductsContext'


function FarmingSystemsDetail() {
  const [modalOpen, setModalOpen] = useContext(ModalContext);
  const [modalToggleContents, setModalToggleContents]  = useContext(ModalToggleContentsContext);

  const { products} = useContext(ProductsContext);
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
                      products.map((card, index) => (
                        <FarmCard key={index} index={index} number={1} img={card.image} title={card.name} type="farmingSystems" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."/>

                      ))
                    }
                  </div>
        </div>
        <FreshlyFooter /> {/* Footer Section */}
    </div>
  )
}

export default FarmingSystemsDetail