import React from 'react';
import { Link } from "react-router-dom";

function OrderHistory() {
  return (
    <div className="ORDER">
      
      {/* Main heading "Your Order History" inside the rounded container */}
      <h1 className="text-center  font-inter text-[#008000] mb-4">Your Order History</h1>
       {/*Back button */}
       <Link to="/" className="BackButton flex justify-start  ">
              <img src="/static/media/image10.png" alt="" className="m-[10px] lg:m-[6px] w-[30px] lg:w-[50px]"/>
          </Link>

{/* {first order} */}
      <div className="w-[365px] lg:w-[905px] mx-0 mr-17 mt-[50px] lg:h-[206.72px]  h-[180px] rounded-[24px] flex flex-col overflow-hidden shadow-md border-4 p-4 bg-white">

      {/* "Delivered" as heading inside the rounded container */}
      <div className="w-full text-center mb-2">
        <h2 className="text-lg font-inter text-[#008000]">DELIVERED</h2>
      </div>

      <div className="w-full flex justify-between items-center">
        {/* Start with the image and paragraph beside it */}
        <div className="flex items-start">
          <img src="/static/media/Frame 324.png" alt="Frame 324" className="w-[120px] h-auto flex-shrink-0" />
          <div className="ml-4">
            <p className="text-lg font-inter ">Lettuce</p>
            <p className="text-sm text-gray-500">3 Bunches</p>
            <p className="text-sm  text-black">30TH SEP 2024</p>
          </div>
        </div>

        {/* Image at the end and button below it */}
        <div className="flex flex-col items-center ml-4">
          <img src="/static/media/Group 370.png" alt="Group 370" className="w-[100px] h-auto mb-2" />
          <button className="ReorderButton cursor-pointer font-inter font-[700] text-white text-[16px] lg:text-[30px] bg-[#008000] w-full py-[8px] rounded-[12px] px-[10px] my-0 border-none active:scale-90 transition-all duration-100 ease-out">RE-ORDER</button>
        </div>
      </div>
      </div>


{/* {second order} */}
      <div className="w-[365px] lg:w-[905px] mx-0 mr-17 mt-[50px] lg:h-[206.72px]  h-[180px] rounded-[24px] flex flex-col overflow-hidden shadow-md border-4 p-4 bg-white">

{/* "Delivered" as heading inside the rounded container */}
<div className="w-full text-center mb-2">
  <h2 className="text-lg font-inter text-[#008000]">DELIVERED</h2>
</div>

<div className="w-full flex justify-between items-center">
  {/* Start with the image and paragraph beside it */}
  <div className="flex items-start">
    <img src="/static/media/Frame 324.png" alt="Frame 324" className="w-[120px] h-auto flex-shrink-0" />
    <div className="ml-4">
      <p className="text-lg font-inter  text-black">Lettuce</p>
      <p className="text-sm text-gray-500">3 Bunches</p>
      <p className="text-sm  text-black">30TH SEP 2024</p>
    </div>
  </div>

  {/* Image at the end and button below it */}
  <div className="flex flex-col items-center ml-4">
    <img src="/static/media/Group 370.png" alt="Group 370" className="w-[100px] h-auto mb-2" />
    <button className="ReorderButton cursor-pointer font-inter font-[700] text-white text-[16px] lg:text-[30px] bg-[#008000] w-full py-[8px] rounded-[12px] px-[10px] my-0 border-none active:scale-90 transition-all duration-100 ease-out">RE-ORDER</button>
  </div>
</div>
</div>

{/* {third order} */}
<div className="w-[365px] lg:w-[905px] mx-0 mr-17 mt-[50px] lg:h-[206.72px]  h-[180px] rounded-[24px] flex flex-col overflow-hidden shadow-md border-4 p-4 bg-white">

{/* "Delivered" as heading inside the rounded container */}
<div className="w-full text-center mb-2">
  <h2 className="text-lg font-inter text-[#008000]">DELIVERED</h2>
</div>

<div className="w-full flex justify-between items-center">
  {/* Start with the image and paragraph beside it */}
  <div className="flex items-start">
    <img src="/static/media/Frame 324.png" alt="Frame 324" className="w-[120px] h-auto flex-shrink-0" />
    <div className="ml-4">
      <p className="text-lg font-inter text-black">Lettuce</p>
      <p className="text-sm text-gray-500">3 Bunches</p>
      <p className="text-sm   text-black">30TH SEP 2024</p>
    </div>
  </div>

  {/* Image at the end and button below it */}
  <div className="flex flex-col items-center ml-4">
    <img src="/static/media/Group 370.png" alt="Group 370" className="w-[100px] h-auto mb-2" />
    <button className="ReorderButton cursor-pointer font-inter font-[700] text-white text-[16px] lg:text-[30px] bg-[#008000] w-full py-[8px] rounded-[12px] px-[10px] my-0 border-none active:scale-90 transition-all duration-100 ease-out">RE-ORDER</button>
  </div>
</div>
</div>


{/* {forth order} */}
<div className="w-[365px] lg:w-[905px] mx-0 mr-17 mt-[50px] lg:h-[206.72px]  h-[180px] rounded-[24px] flex flex-col overflow-hidden shadow-md border-4 p-4 bg-white">

{/* "Delivered" as heading inside the rounded container */}
<div className="w-full text-center mb-2">
  <h2 className="text-lg font-inter text-[#008000]">DELIVERED</h2>
</div>

<div className="w-full flex justify-between items-center">
  {/* Start with the image and paragraph beside it */}
  <div className="flex items-start">
    <img src="/static/media/Frame 324.png" alt="Frame 324" className="w-[120px] h-auto flex-shrink-0" />
    <div className="ml-4">
      <p className="text-lg font-inter  text-black">Lettuce</p>
      <p className="text-sm text-gray-500">3 Bunches</p>
      <p className="text-sm  text-black">30TH SEP 2024</p>
    </div>
  </div>

  {/* Image at the end and button below it */}
  <div className="flex flex-col items-center ml-4">
    <img src="/static/media/Group 370.png" alt="Group 370" className="w-[100px] h-auto mb-2" />
    <button className="ReorderButton cursor-pointer font-inter font-[700] text-white text-[16px] lg:text-[30px] bg-[#008000] w-full py-[8px] rounded-[12px] px-[10px] my-0 border-none active:scale-90 transition-all duration-100 ease-out">RE-ORDER</button>
  </div>
</div>
</div>

{/* {fith order} */}
<div className="w-[365px] lg:w-[905px] mx-0 mr-17 mt-[50px] lg:h-[206.72px]  h-[180px] rounded-[24px] flex flex-col overflow-hidden shadow-md border-4 p-4 bg-white">

{/* "Delivered" as heading inside the rounded container */}
<div className="w-full text-center mb-2">
  <h2 className="text-lg font-inter text-[#008000]">DELIVERED</h2>
</div>

<div className="w-full flex justify-between items-center">
  {/* Start with the image and paragraph beside it */}
  <div className="flex items-start">
    <img src="/static/media/Frame 324.png" alt="Frame 324" className="w-[120px] h-auto flex-shrink-0" />
    <div className="ml-4">
      <p className="text-lg font-inter  text-black">Lettuce</p>
      <p className="text-sm text-gray-500">3 Bunches</p>
      <p className="text-sm  text-black">30TH SEP 2024</p>
    </div>
  </div>

  {/* Image at the end and button below it */}
  <div className="flex flex-col items-center ml-4">
    <img src="/static/media/Group 370.png" alt="Group 370" className="w-[100px] h-auto mb-2" />
    <button className="ReorderButton cursor-pointer font-inter font-[700] text-white text-[16px] lg:text-[30px] bg-[#008000] w-full py-[8px] rounded-[12px] px-[10px] my-0 border-none active:scale-90 transition-all duration-100 ease-out">RE-ORDER</button>
  </div>
</div>
</div>
    </div>
  );
}

export default OrderHistory;
