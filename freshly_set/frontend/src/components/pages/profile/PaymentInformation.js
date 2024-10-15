import React from 'react'
import PaymentHistoryCard from './PaymentHistoryCard'
import PaymentMethodCard from './PaymentMethodCard'
import PaymentHistoryList from './json/PaymentHistoryList.json'
import PaymentMethodData from './json/PaymentMethodData.json'


function PaymentInformation() {
  //Chosen Payment Method, 0 is the default, 1 = Secondary and 2 = Tertiary method
  const PaymentChoice = 0;

  //Number of Orders made
  const OrdersMade = 6;

  return (
    <div className='PaymentInformation mb-[20px] lg:mb-[50px]'>
      <div className='PaymentInformationWrapper mx-[10px] lg:mr-[60px]'>
        {/*Header */}
        <div className='PaymentsHeader'>
          <div className='PaymentHeading'>
            <p className='text-start text-[18px] lg:text-[22px] text-[#008000] font-inter font-[700] my-0 '>Payment Information</p>
          </div>
          <div className='PaymentSubHeading mt-[6px] lg:mt-[10px]'>
            <p className='text-start text-[13px] lg:text-[15px] text-[#00000080] font-inter font-[700] my-0 '>Manage Your Payment Information</p>
          </div>
        </div> {/*Payment Header */}

        {/*Payment Method */}
        <div className='PaymentMethod block mt-[36px]'>
          <div className='CardTitle'>
            <p className='text-start text-[16px] lg:text-[18px] text-[#000000] font-inter font-[700] my-0'>Your Preferred Payment Method</p>
          </div>
          <div className='PaymentMethodCard mt-[10px]'>
            {PaymentMethodData.slice(PaymentChoice, (PaymentChoice + 1)).map((PaymentMethodData) => (
              <PaymentMethodCard name={PaymentMethodData.name} img={PaymentMethodData.img} expire={PaymentMethodData.expire} CardNumber={PaymentMethodData.CardNumber} CardRank={PaymentMethodData.CardRank} />
            ))
            }
          </div>
        </div> {/*Payment Method */}

        {/*Payment History */}
        <div className='PaymentHistory mt-[36px]'>
          <div className='HistoryTittle'>
            <p className='text-start text-[16px] lg:text-[18px] text-[#000000] font-inter font-[700] my-0'>Your Payment History</p>
          </div>
          <div className='HistoryContainer mt-[10px] block rounded-[6px] lg:rounded-[8px] bg-[#FFFFFF] border-solid border-[0.7px] border-[#0000004D] shadow-md shadow-[#00000040] '>
            <div className='HistoryWrapper mx-[12px] lg:mx-[8px] my-[18px] lg:my-[10px]'>
              <div className='ColumnsHeaders grid grid-cols-4'>
                {/*OrderNumber */}
                <div className="OrderNumber">
                    <p className="text-center text-[14px] lg:text-[16px] text-[#008000] font-inter font-[700] my-0">Order Number</p>
                </div>
                {/*Order Amount */}
                <div className="OrderAmount">
                    <p className="text-center text-[14px] lg:text-[16px] text-[#008000] font-inter font-[700] my-0">Amount</p>
                </div>
                {/*Order Date */}
                <div className="OrderDate">
                    <p className="text-center text-[14px] lg:text-[16px] text-[#008000] font-inter font-[700] my-0">Date</p>
                </div>
                {/*OrderStatus */}
                <div className="OrderStatus">
                    <p className="text-center text-[14px] lg:text-[16px] text-[#008000] font-inter font-[700] my-0">Status</p>
                </div>
              </div> {/*Column Headers */}

              {/*History Cards Wrapper */}
              <div className='CardsWrapper'>
                 {PaymentHistoryList.slice(0, OrdersMade).map((PaymentHistoryList) => (
                    <PaymentHistoryCard  OrderNumber={PaymentHistoryList.OrderNumber} OrderAmount={PaymentHistoryList.OrderAmount} OrderDate={PaymentHistoryList.OrderDate} OrderStatus={PaymentHistoryList.OrderStatus} />
                  ))
                }
              </div>

            </div> {/*Payment History Wrapper*/}
          </div> {/*Payment History Container*/}
        </div> {/*Payment History */}

      </div> {/*Payment Information Wrapper */}
    </div> //Payment Information Page
  )
}

export default PaymentInformation