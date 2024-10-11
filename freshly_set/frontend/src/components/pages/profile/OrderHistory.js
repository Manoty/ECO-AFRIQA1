import React from 'react';
import OrderHistoryCard from './OrderHistoryCard';
import OrderHistoryList from './json/OrderHistoryList.json'

function OrderHistory() {
  //Number of Times a Client made Orders
  const OrdersMade = 4;
  return (
    <div className="OrderHistory pb-[50px]">
      <div className='OrderHistoryWrapper mr-[60px]'>
        {/*Page Heading */}
        <div className='Heading'>
          <h2 className='text-start text-[22px] text-[#008000] font-inter font-[700] my-0'>Your Order History</h2>
        </div>

        {/*Order Cards */}
        <div className='OrderCards'>
          {OrderHistoryList.slice(0, OrdersMade).map((OrderHistoryList) =>
          <OrderHistoryCard img={OrderHistoryList.img} CropOrdered={OrderHistoryList.CropOrdered} QuantityOrdered={OrderHistoryList.QuantityOrdered} DateOrdered={OrderHistoryList.DateOrdered} OrderStatus={OrderHistoryList.OrderStatus} OrderAmount={OrderHistoryList.OrderAmount}/>
          )}
        </div> {/*Order Cards */}

      </div> {/*Order History Wrapper */} 
    </div> //Order History
  );
}

export default OrderHistory;
