import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext';

function GardenSetupsHero() {
    const navigate = useNavigate();

    const { productType, setProductType } = useContext(ProductsContext);

    const invoiceRequest = () => {
        setProductType("gardenSetups")
        navigate("/products/farmingSystems/search")
    }


  return (
    <div className="block overflow-x-hidden">
        <div className="mt-[150px] relative h-[415px] lg:h-[667px] w-[100%] bg-hero-gardenSetup bg-fixed  bg-cover bg-no-repeat mix-blend-luminosity ">
            

            <div className="absolute block  z-[25] top-[20px] lg:top-[192px]  lg:left-[69px] lg:w:[592px] rounded-[16px] bg-[#A6B1AD99]/[60%] lg:px-[28px]">
                <h3 className="text-black text-[25px] lg:text-[35px] font-inter font-[900] lg:w-[592px] leading-[30px] lg:leading-[57.6px] text-center">SHOP FOR GARDEN SETUPS ON A DISCOUNT FOR NEW USERS TILL OCTOBER 2OTH</h3>

                <div className="flex space-x-[18px] lg:space-x-[38px]">
                    <p className="text-[12px] lg:text-[16px] font-josefin text-black font-[600] leading-[20.8px] lg:w-[258px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    <p className="text-[12px] lg:text-[16px] font-josefin text-black font-[600] leading-[20.8px] lg:w-[258px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
              </div>
              <div>
                <Link to="/products/gardenSetups/search">
                    <button onClick={invoiceRequest} className="absolute top-[346px] left-[115px] lg:top-[275px] lg:left-[865px] h-[51px] w-[186px] lg:h-[71px] lg:w-[266px] bg-[#A6B1AD99]/[0.65] rounded-[15px] border-none text-black text-[20px] lg:text-[25px] font-inter font-[900]">Request Invoice</button>
                </Link>
              </div>
              
            
        </div>

        <div className="grid grid-cols-2 lg:flex lg:space-x-[73px] justify-center mt-[25px] lg:mt-[32px] mx-[20px] lg:mx-[0px]">
            {/* Icon 1 */}
            <div className="flex space-x-[12px]  lg:space-x-[21px] cursor-pointer ">
                {/* Left side */}

                <img className="h-[30px] lg:h-[40px] w-[30px] lg:w-[40px]" src="/static/media/productInvoice.png" alt="Product Invoice"/>

                {/* Right side */}

                <div className="block">
                    <p className="text-black font-inter font-[900] text-[16px] -mt-[7px] cursor-pointer">Request Invoice</p>
                    <p className="text-[#0000008F]/[56%] w-[99px] lg:w-[144px] -mt-[7px]">Receive it in your e-mail or Phone Number</p>
                </div>
            </div>


            {/* Icon 2 */}
            <div className="flex space-x-[12px] lg:space-x-[21px] cursor-pointer ">
                {/* Left side */}

                <img className="h-[30px] lg:h-[40px] w-[30px] lg:w-[40px]" src="/static/media/productSend.png" alt="Product Invoice"/>

                {/* Right side */}

                <div className="block">
                    <p className="text-black font-inter font-[900] text-[16px] -mt-[7px]">Give a feedback on your choice</p>
                    <p className="text-[#0000008F]/[56%] w-[155px] lg:w-[239px] -mt-[7px]">Send what garden setup or farming system you have decided to buy</p>
                </div>
            </div>



            {/* Icon 3 */}
            <div className="flex space-x-[12px] lg:space-x-[21px] cursor-pointer ">
                {/* Left side */}

                <img className="h-[30px] lg:h-[40px] w-[30px] lg:w-[40px]" src="/static/media/productPay.png" alt="Product Invoice"/>

                {/* Right side */}

                <div className="block">
                    <p className="text-black font-inter font-[900] -mt-[7px] whitespace-nowrap text-[16px]">Pay for your choice</p>
                    <p className="text-[#0000008F]/[56%] w-[115px] lg:w-[170px] -mt-[7px]">Pay for the farming system or garden setup you have chosen</p>
                </div>
            </div>





            {/* Icon 4 */}
            <div className="flex space-x-[12px] lg:space-x-[21px] cursor-pointer ">
                {/* Left side */}

                <img className="h-[30px] lg:h-[40px] w-[30px] lg:w-[40px]" src="/static/media/productWrite.png" alt="Product Invoice"/>

                {/* Right side */}

                <div className="block">
                    <p className="text-black font-inter font-[900] -mt-[7px] text-[16px]">Request Invoice</p>
                    <p className="text-[#0000008F]/[56%] w-[144px] -mt-[7px]">Receive it in your e-mai or Phone Number</p>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default GardenSetupsHero