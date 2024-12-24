import React, { useEffect, useState } from 'react';
import OrderHistoryCard from './OrderHistoryCard';
import axios from "axios";
import config from '../../../config';
function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = config.API_URL;

  const fetchOrders = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.get(`${apiUrl}myorders/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      console.log('Orders fetched successfully:', response.data);
      return response.data.results; // Assuming pagination
    } catch (error) {
      console.error('Error fetching orders:', error);
      if (error.response && error.response.status === 401) {
        console.log('User is not authenticated');
        // Handle re-authentication or redirection
      }
    }
  };
  
  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      const data = await fetchOrders();
      if (data) {
        setOrders(data); // Save the fetched orders in the state
      }
      setLoading(false);
    };

    getOrders();
  }, []);

  return (
    <div className="OrderHistory pb-[50px]">
      <div className='OrderHistoryWrapper mx-[12px] lg:ml-0 lg:mr-[60px]'>
        {/*Header */}
        <div className='OrderHeader'>
          <div className='OrderHeading'>
            <p className='text-start text-[20px] lg:text-[24px] text-[#008000] font-inter font-[900] my-0 '>Your Order History</p>
          </div>
          <div className='OrderSubHeading block lg:hidden mt-[6px] lg:mt-[10px]'>
            <p className='text-start text-[13px] lg:text-[15px] text-[#00000080] font-inter font-[700] my-0 '>Manage Your Past Orders</p>
          </div>
        </div> {/*Order Header */}

        {/*Order Cards */}
        <div className='OrderCards'>       
          {orders?.map((OrderHistoryList) => (
            OrderHistoryList.items.map((item, index) => {
              const formattedDate = new Date(OrderHistoryList.created_at).toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });
              return(
                <OrderHistoryCard
                key={index}
                img={OrderHistoryList.img} 
                title={item.product_name}
                QuantityOrdered={item.product_quantity}
                DateOrdered={formattedDate} // Adjusted to show order date
                OrderStatus={OrderHistoryList.OrderStatus} // Assuming there's a status field in the main order
                OrderAmount={item.product_price}
              />
              )
            
            })
          ))}
        </div> {/*Order Cards */}

      </div> {/*Order History Wrapper */} 
    </div> //Order History
  );
}

export default OrderHistory;
