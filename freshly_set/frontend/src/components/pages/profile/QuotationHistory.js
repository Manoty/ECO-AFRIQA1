import React from 'react'
import { Link } from 'react-router-dom'
import QuotationHistoryList from './json/QuotationHistoryList.json'

function QuotationHistory() {
  return (
    <section className='QuotationHistory pb-[50px]'>
      <div className='QuotationHistoryWrapper mx-[12px] lg:mr-[60px]'>
     {/*Header */}
        <div className='QuotationHeader'>
          <div className='QuotationHeading'>
            <p className='text-start text-[20px] lg:text-[22px] text-[#008000] font-inter font-[900] my-0 '>Your Quotation History</p>
          </div>
          <div className='QuotationSubHeading block lg:hidden mt-[6px] lg:mt-[10px]'>
            <p className='text-start text-[13px] lg:text-[15px] text-[#00000080] font-inter font-[700] my-0 '>Manage Your Past Quotation Requests</p>
          </div>
        </div> {/*Quotation Header */}

        {/*Quotation History Cards */}
        <div className='QuotationHistoryCards mt-[20px]'>
          {QuotationHistoryList.map((data) =>(
            <QuotationHistoryCard ServiceName={data.ServiceName} ServiceImage={data.ServiceImage} ServiceCategory={data.ServiceCategory} ServiceDate={data.ServiceDate} />
            ))
          }          
        </div>    
        </div> {/*QuotationHistoryWrapper */}
    </section>
  )
}

//Reasable Quotation History Card Component
function QuotationHistoryCard({ ServiceImage, ServiceCategory, ServiceName, ServiceDate }) {
  return (
    <div className='QuotationCard mt-[20px] rounded-[12px] lg:rounded-[27px] border-solid border-[0.7px] border-[#0000004A] shadow-md shadow-[#00000040]'>
      <div className='QuotationCardWrapper flex justify-between py-[10px] lg:py-[20px] px-[10px] lg:px-[20px]'>
        {/*QuotationItem */}
        <div className='QuotationItem relative '>
          <div className='ServiceImage flex justify-start'>
            <div className='block w-[54px] lg:w-[113px] h-[62px] lg:h-[128px] rounded-[6px] lg:rounded-[9px] overflow-hidden object-cover'>
              <img src={ServiceImage} alt={ServiceName} className='w-full h-full '/>
            </div>
            <div className='QuotationDescriptions ml-[10px] lg:ml-[20px]'>
              <div className='ItemName block'>
                <p className='text-start text-[12px] lg:text-[18px] text-[#000000] font-inter font-[700] my-0 '>{ServiceName}</p>
              </div>
              <div className='ServiceCategory block mt-[6px] lg:mt-[20px]'>
                <p className='text-start text-[10px] lg:text-[17px] text-[#0000008F] font-inter font-[700] my-0'>{ServiceCategory} </p>
              </div>
              <div className='QuotationDate absolute bottom-0 w-full z-0'>
                <p className='text-start text-[9px] lg:text-[14px] text-[#000000B2] font-inter font-[900] my-0'>{ServiceDate} </p>
              </div>
            </div> {/*QuotationDescriptions */}
          </div>
        </div> {/*QuotationItem */}

        {/*Email/Invoice */}        
        <div className='block relative'>
          <div className='flex justify-start '>
            <div className='block mr-[25px] mt-[12px]'>
              <a href="mailto:info.freshlyfarms5@gmail.com" target="_blank" className="" >
                <p className='text-start text-[10px] lg:text-[14px] text-[#FF0C1A] font-inter font-[900] my-0'>EMAIL</p>
              </a>
            </div>
            
            <Link to="/products/gardenSetups/search" className='absolute bottom-0 right-0 w-[20.8px] lg:w-[36px] h-[20px] lg:h-[34.6px]'>
              <img src='/static/media/docLogo.png' alt='' className='w-full h-full'/>
            </Link>
          </div>          
        </div>

      </div> {/*QuotationCard Wrapper */}
    </div> //QuotationCard
  )
}

export default QuotationHistory