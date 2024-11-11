import React, { useEffect, useState } from 'react';
import OrderHistoryCard from './OrderHistoryCard';
import OrderHistoryList from './json/OrderHistoryList.json'
import axios from "axios";
function OrderHistory() {
  //Number of Times a Client made Orders

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchOrders = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.get('http://localhost:8000/myorders/', {
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
          {/* {orders?.map((OrderHistoryList) =>
          <OrderHistoryCard img={OrderHistoryList.img} title="{OrderHistoryList.items.product_name}" QuantityOrdered={OrderHistoryList.QuantityOrdered} DateOrdered={OrderHistoryList.DateOrdered} OrderStatus={OrderHistoryList.OrderStatus} OrderAmount="{OrderHistoryList.items.product_price}"/>
          )} */}


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
        </div> 
        
        
        
        {/*Order Cards */}

      </div> {/*Order History Wrapper */} 
    </div> //Order History
  );
}

export default OrderHistory;
