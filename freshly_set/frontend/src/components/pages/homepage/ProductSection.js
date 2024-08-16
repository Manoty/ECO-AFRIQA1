import React from 'react'

function ProductSection() {
  return (
    <div className="flex mb-[96px] lg:mb-[200px]  ml-[30px] mt-[100px]">
        <div className="w-[571.287px]">
            <div className='relative'>
                <img className="z-20 absolute h-[228.186px] w-[163.363px] lg:h-[393px] lg:w-[291px] top-[170px] -left-[28px] lg:top-0" src="/static/media/farmer.png" alt="farmer"/>

                <img className="absolute left-0 top-[260px] rotate-[9.945deg] lg:rotate-[10.259deg] lg:top-[110px] z-10 h-[178px] w-[321.018px] lg:h-[308.501px] lg:w-[571.287px] object-cover" src="/static/media/products_elipse.png" alt="elipse"/>
            </div>

        </div>
     
        <div className="block lg:mr-[50px] lg:ml-[27px] w-[597px]">
            <div className="flex justify-center">
             <p className="text-[#008000] font-[700] font-inter text-[45px] w-[350px] lg:w-auto text-center lg::text-start">Want To see Our Products?</p>

            </div>
            <div className="flex justify-center ">
                <div className="block mt-[281px] lg:mt-0  ">
                    <p className="text-black/[0.62] font-josefin text-[15px] font-[600] w-[287px] lg:w-[492px] -mt-[20px] leading-[19.5px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    <p className="text-black/[0.62] font-josefin text-[15px] font-[600] w-[287px] lg:w-[492px] ml-[] leading-[19.5px] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
                
            </div>

            <div className="flex justify-center mt-[50px]">
                <button className="h-[48px] w-[236px] bg-[#008000] text-white rounded-[15px] text-[25px] font-inter font-[500] border-none cursor-pointer active:scale-90 transition-all duration-500 ease-out">Click Here</button>
              </div>
           
        </div>
    </div>
  )
}

export default ProductSection
