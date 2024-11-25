import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import FarmProduceListCard from './FarmProduceListCard';
import FarmProduceList from './json/FarmProduceList.json';
import FarmSalesListCard from './FarmSalesListCard';
import FarmSalesList from './json/FarmSalesList.json';

import LineChart from './utils/LineChart';
import { ProfileContext } from '../../context/ProfileContext';
import NotFarmerModal from './NotFarmerModal';

function VerifiedFarmers() {
  //Name of the Account User
  const Username = "Jane";

  //Total Income and Total Sales
  const TotalIncome = "KSH 18,500";
  const TotalSales = "KSH 30,000";

  //Number of FarmProduces Produced and Sold
  const ProduceQuantity = 4;
  const SalesQuantity = 4;

  const { isFarmer } = useContext(ProfileContext);

  const [showModal, setShowModal] = useState(true);

  return (
    <div className='VerifiedFarmers pb-[40px] lg:pb-[80px]'>
  
      <div className='VerifiedFarmersWrapper mx-[10px] lg:mx-0  lg:mr-[140px]'>
        {/*Page Header */}
        <div className='PageHeader'>
          <div className='Greetigs'>
              <p className='text-start font-[700] font-inter text-[#008000] text-[18px] lg:text-[22px] my-0 '>Hello {Username}, Welcome To Your Dashboard</p>
          </div>
          <div className='Descriptions mt-[10px] lg:mt-[30px] mr-[100px] lg:mr-0'>
            <p className='text-start font-[800] font-inter text-[#00000080] text-[14px] lg:text-[15px] my-0 '>View and manage your sales, products and income</p>
          </div>
        </div>{/*Page Header */}

        {/*Total Sales and Income */}
        <div className='SalesAndIncome mt-[20px] lg:mt-[40px]'>
          <div className='CntentsWrapper grid grid-cols-2'>
            {/*Total Income */}
            <div className='TotalIncome block border-y-[1px] border-black border-0 border-solid'>
              <div className='IncomeWrapper my-[16px] lg:my-[30px] flex justify-center'>
                <div className='IcomeContents block'>
                  <div className='TextWrapper flex justify-start'>
                    <p className='text-start font-[700] font-inter text-[#000000] text-[11px] lg:text-[22px] my-0 mr-[4px] lg:mr-[20px] '>TOTAL INCOME:</p>
                    <p className='IncomeFigure text-start font-[700] font-inter text-[#FF0C1A] text-[11px] lg:text-[22px] my-0 '>{TotalIncome}</p>
                  </div>
                </div>
              </div> {/*IncomeWrapper */}
            </div> {/*Total Income */}
          
            {/*Total Sales */}
            <div className='TotalSales block border-y-[1px] border-l-[1px] border-black border-0 border-solid '>
              <div className='SalesWrapper my-[16px] lg:my-[30px] flex justify-center'>
                <div className='SalesContents block'>
                  <div className='TextWrapper flex justify-start'>
                    <p className='text-start font-[700] font-inter text-[#000000] text-[11px] lg:text-[22px] my-0 mr-[4px] lg:mr-[20px] '>TOTAL SALES:</p>
                    <p className='IncomeFigure text-start font-[700] font-inter text-[#FF0C1A] text-[11px] lg:text-[22px] my-0 '>{TotalSales}</p>
                  </div>
                </div>
              </div> {/*SalesWrapper */}
            </div> {/*Total Sales */}
          </div> {/*ContentsWrapper */}
        </div> {/*Total Sales and Income */}
          
        {/*Progress Graph */}
        <div className='ProgressGraph mt-[20px] lg:mt-[30px]'>
          <div className='GraphTitle'>
            <p className='text-start font-[700] font-inter text-[#000000] text-[16px] lg:text-[20px] my-0 '>Your Performance</p>
          </div>
          {/*Graph Body */}
          <div className='GraphBody mt-[20px] '>
            <LineChart />
          </div>
        </div> {/*Progress Graph */}

        {/*Farm Produce */}
        <div className='FarmProduce mt-[28px] lg:mt-[40px]'>
          <div className='FarmProduceWrapper'>
            {/*Heading and Add item Buttom */}
            <div className='HeadingAndButton block'>
              <div className='ContentsWrapper flex justify-between'>
                {/*Heading */}
                <div className='FarmProduce ml-[14px] lg:ml-0'>
                  <p className='text-start font-inter font-[700] text-[#000000] text-[16px] lg:text-[22px] my-0'>Your Farm Produce</p>
                </div>
                {/*Add Button */}
                <div className='AddButton block'>
                  <div className='flex justify-start'>
                    <div className='PlusButton mr-[10px]'>
                      <Link className=''>
                        <FaPlusCircle className='text-[#008000] text-[14px] lg:text-[26px] my-0' />
                      </Link>
                    </div>
                    <div className='block lg:pt-[4px]'>
                      <p className='text-start font-inter font-[700] text-[#008000] text-[14px] my-0'>Add Crop</p>
                    </div>
                  </div>
                </div> {/*Add Button */}
              </div> {/*ContentsWrapper */}
            </div> {/*Heading and Add item Buttom */}
            {/*Farm Produce List Wrapper */}
            <div className='ProduceList Wrapper mt-[16px] lg:mt-[20px]'>
              {/*Produce List Headers */}
              <div className='ProduceListHeaders gap-x-[12px] lg:gap-x-[50px] grid grid-cols-4'>
                {/*Crop */}
                <div className='Crop lg:ml-[40px]'>
                  <p className='text-center font-inter font-[700] text-[#008000] text-[11px] lg:text-[16px] my-0'>Crop</p>
                </div>
                {/*Produced By */}
                <div className='ProducedBy'>
                  <p className='text-start font-inter font-[700] text-[#008000] text-[11px] lg:text-[16px] my-0'>Product Used To Grow</p>
                </div>
                {/*Bags Harvested */}
                <div className='BagsHarvested'>
                  <p className='text-center font-inter font-[700] text-[#008000] text-[11px] lg:text-[16px] my-0'>Bags Harvested</p>
                </div>
                {/*Bags Sold */}
                <div className=' BagsSold lg:ml-[70px]'>
                  <p className='text-center lg:text-start font-inter font-[700] text-[#008000] text-[11px] lg:text-[16px] my-0'>Bags Sold</p>
                </div>
              </div>  {/*Produce List Headers */}

              {/*Produce List Items */}
              <div className='ProduceListItems mt-[8px] lg:mt-[24px]'>
                {FarmProduceList.slice(0, ProduceQuantity).map((FarmProduceList) =>
                 <FarmProduceListCard Crop={FarmProduceList.Crop} GrownBy={FarmProduceList.GrownBy} BagsHarvested={FarmProduceList.BagsHarvested} BagsSold={FarmProduceList.BagsSold}/>
                )}
              </div>  {/*Produce List Items */}
            </div>  {/*Farm Produce List Wrapper */}
          </div> {/*Farm Produce Wrapper */}
        </div>  {/*Farm Produce */}

        {/*Sales History */}
        <div className='SalesHistory mt-[30px] lg:mt-[60px]'>
          <div className='SalesHistoryWrapper'>
            {/*Heading */}
            <div className='SalesHistory ml-[14px] lg:ml-0'>
              <p className='text-start font-inter font-[700] text-[#000000] text-[16px] lg:text-[22px] my-0'>Your Sales History</p>
            </div>
            
            {/*Sales History List Wrapper */}
            <div className='SalesList Wrapper mt-[20px]'>
              {/*Produce List Headers */}
              <div className='SalesListHeaders gap-x-[20px] lg:gap-x-[50px] grid grid-cols-4'>
                {/*Produce */}
                <div className='Produce'>
                  <p className='text-center font-inter font-[700] text-[#008000] text-[11px] lg:text-[16px] my-0'>Produce</p>
                </div>
                {/*Bags Sold */}
                <div className='BagsSold'>
                  <p className='text-center font-inter font-[700] text-[#008000] text-[11px] lg:text-[16px] my-0'>Bags Sold</p>
                </div>
                {/*Amount */}
                <div className='Amount'>
                  <p className='text-center font-inter font-[700] text-[#008000] text-[11px] lg:text-[16px] my-0'>Amount</p>
                </div>
                {/*Date */}
                <div className='Date'>
                  <p className='text-center font-inter font-[700] text-[#008000] text-[11px] lg:text-[16px] my-0'>Date</p>
                </div>
              </div>  {/*Sales List Headers */}

              {/*Sales List Items */}
              <div className='SalesListItems mt-[8px] lg:mt-[24px]'>
                {FarmSalesList.slice(0, SalesQuantity).map((FarmSalesList) =>
                 <FarmSalesListCard Produce={FarmSalesList.Produce} BagsSold={FarmSalesList.BagsSold} Amount={FarmSalesList.Amount} Date={FarmSalesList.Date}/>
                )}
              </div>  {/*Sales List Items */}
            </div>  {/*Farm Sales List Wrapper */}
          </div> {/*Farm Sales Wrapper */}
        </div>  {/*Farm Sales */} 
        {showModal && <NotFarmerModal link="verified" role="farmer" onClose={() => setShowModal(false)} />}

      </div> {/*Verified Farmers Wrapper */}
      
    </div> //Verified Farmers
  )
}

export default VerifiedFarmers