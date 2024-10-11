import React from "react";

function FarmSalesListCard({Produce, BagsSold, Amount, Date}) {
    return (
        <div className="FarmSalesListCard mt-[20px]">
            <div className='SalesListItems gap-[50px] grid grid-cols-4'>
                {/*Produce */}
                <div className='Produce'>
                  <p className='text-center font-inter font-[700] text-[#000000] text-[16px] my-0'>{Produce} </p>
                </div>
                {/*Bags Sold */}
                <div className='BagsSold'>
                  <p className='text-center font-inter font-[700] text-[#000000] text-[16px] my-0'>{BagsSold} </p>
                </div>
                {/*Amount */}
                <div className='Amount'>
                  <p className='text-center font-inter font-[700] text-[#000000] text-[16px] my-0'>{Amount} </p>
                </div>
                {/*Date */}
                <div className='Date'>
                  <p className='text-center font-inter font-[700] text-[#000000] text-[16px] my-0'>{Date} </p>
                </div>
              </div>  {/*Sales List Items */}
        </div> //Farm Sales List Card
    )
}

export default FarmSalesListCard