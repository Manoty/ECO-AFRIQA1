import React, { useContext, useState } from "react"; // Import useState here
import { Link } from "react-router-dom";
import Nav from '../../Nav/Navbar';
import { CartContext } from "../../context/CartContext"; // Ensure you have CartContext defined
import axios from "axios";
import { getCsrfToken } from "../../../utils/getCsrfToken"; // Make sure this utility is available
import OrderSummary from "./OrderSummary";
import config from "../../../config";
function Credit() {
  const { cartItems, totalPrice, delivery } = useContext(CartContext);

  // State variables for card inputs
  const [cardNumber, setCardNumber] = useState(''); // State for card number
  const [expiryDate, setExpiryDate] = useState(''); // State for expiry date
  const [cvc, setCvc] = useState(''); // State for CVC


  const apiUrl = config.API_URL;



  // Order data structure
  const orderData = {
    customer_name: 'friday', // Replace with actual data as needed
    customer_email: 'johndoe@example.com', // Replace with actual data as needed
    customer_phone: '+254899098678', // Replace with actual data as needed
    items: cartItems.map(item => ({
      product_name: item.name,
      product_price: item.price,
      product_quantity: item.qtty,
    })),
    total_price: cartItems.reduce((sum, item) => sum + item.price * item.qtty, 0),
    delivery_fee: delivery,
    payment_method: 'credit/debit', // Adjust based on actual payment method
  };

  const handleCheckout = async () => {
    const csrfToken = getCsrfToken();
    try {
      const response = await axios.post(`${apiUrl}orders/`, orderData, { 
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        withCredentials: true,
      });
      if (response.status === 201) {
        console.log('Order created:', response.data);
        alert(`Order placed successfully! Your Order ID is ${response.data.order_id}`);
      } else {
        console.error('Unexpected response:', response);
        alert('Unexpected response from the server.');
      }
    } catch (error) {
      console.log('Error response:', error.response?.data);
      alert('There was an issue placing the order. Check the console for more details.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5FAF9] overflow-x-hidden">
      <Nav /> {/* The Upper NavBar */}

      {/* Back Button */}
      <div className="block lg:flex justify-start lg:mt-[180px] mt-[150px] ml-12">
        <Link to="/checkout">
          <img src="/static/media/image10.png" alt="Back" className="lg:my-[6px] h-full" />
        </Link>
      </div>

      {/* Heading */}
      <h1 className="lg:text-center text-center mt-6 text-[35px] font-bold">Checkout</h1>


      <div className="InnerContents px-[4px] lg:px-[40px] mx-[6px] lg:mx-[50px] lg:my-[20px] rounded-[20px] border-gray-400 border-[2px] shadow-lg shadow-white lg:shadow-gray-700 mb-[40px]">
        

        <div className="PaymentsPart block lg:flex justify-between mt-[20px]">
          {/* Payment section */}
          <div className="PaymentsWrapper p-[8px] lg:p-[70px] rounded-[12px] border-solid border-[1px] border-gray-400 lg:mr-[40px] mb-[20px] shadow-lg shadow-gray-400 lg:shadow-gray-700 h-fit">
            <div className="Payment block">
              <div className="UpperBanner bg-[#00AA5B14] flex justify-between border-[1px] border-gray-400 border-solid shadow-md shadow-gray-500 py-[18px] lg:py-[10px] px-[8px] lg:px-[20px] rounded-[8px] lg:rounded-[12px]">
                <div className="BrandNames">
                  <p className="text-start text-shadow-custom font-inter font-[800] my-0 lg:pt-[14px] text-[14px] lg:text-[24px]">Credit/debit</p>
                </div>
                <div className="block lg:mr-[10px]">
                  <div className="BrandLogos flex justify-between lg:py-[10px]">
                    <img src="/static/media/image 156.png" alt="" className="h-[20px] lg:h-[39px] mr-[2px] lg:mr-[10px]" />
                    <img src="/static/media/image 155.png" alt="" className="h-[10px] lg:h-[19px] pt-[5px] ml-[6px] lg:ml-[10px]" />
                  </div>
                </div>
              </div> {/* Upper part Ends Here */}

              {/* Inner Contents */}
              <div className="InnerContents mx-[14px] lg:mx-[30px]">
                {/* Card Name */}
                <div className="flex flex-col mb-4 mt-9">
                  <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px]">
                    <input
                      className="border-none outline-none font-inter font-[700] text-[16px] w-full"
                      placeholder="Card Number"
                      value={'Card Number'}
                    />
                    <span className="ml-2 text-red-500 text-[16px]">*</span>
                  </div>
                </div>

  {/* {card number} */}
                <div className="flex flex-col mb-4 mt-9">
                  <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px]">
                    <input
                      className="border-none outline-none font-inter font-[700] text-[16px] w-full"
                      placeholder="Card Number"
              
                      value={cardNumber} // Updated: Controlled input
                      onChange={(e) => setCardNumber(e.target.value)} // Updated: Set state on change
                    />
                    <span className="ml-2 text-red-500 text-[16px]">*</span>
                  </div>
                </div>
                {/* Expiry Date and CVC/CVC */}
                <div className="flex justify-between mb-4 mt-9">
                  <div className="w-[48%]">
                    <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px]">
                      <input
                        className="border-none outline-none font-inter font-[700] text-[16px] w-full"
                        placeholder="Expiry Date (MM/YY)"
                        
                        value={expiryDate} // Updated: Controlled input
                        onChange={(e) => setExpiryDate(e.target.value)} // Updated: Set state on change
                      />
                      <span className="ml-2 text-red-500 text-[16px]">*</span>
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px]">
                      <input
                        className="border-none outline-none font-inter font-[700] text-[16px] w-full"
                        placeholder="CVC/CVV"
                        
                        value={cvc} // Updated: Controlled input
                        onChange={(e) => setCvc(e.target.value)} // Updated: Set state on change
                      />
                      <span className="ml-2 text-red-500 text-[16px]">*</span>
                    </div>
                  </div>
                </div>

                
                <div className="flex justify-between mb-4 mt-9">
                  <div className="w-[48%]">
                    <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px]">
                      <input
                        className="border-none outline-none font-inter font-[700] text-[16px] w-full"
                        placeholder="Card Number"
                        value={'Card Number'}
                      />
                      <span className="ml-2 text-red-500 text-[16px]">*</span>
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px]">
                      <input
                        className="border-none outline-none font-inter font-[700] text-[16px] w-full"
                        placeholder="Phone"
                        value={'Phone: +254899098678'}
                      />
                      <span className="ml-2 text-red-500 text-[16px]">*</span>
                    </div>
                  </div>
                </div>

                <div className="RememberMpesa flex justify-start mt-[40px] pb-[30px]">
                  <input type="checkbox" className="block mr-[10px] lg:mr-[30px] w-[25px] h-[25px]" />
                  <p className="text-start font-inter font-[800] my-0 text-[14px] lg:text-[18px] pt-[4px]">
    Securely save this card for my later purchase
  </p>
  <button className="ml-4 bg-green-700 text-white px-8 py-2 rounded">OK</button>
                </div>
              </div> {/* Inner Contents Ends Here */}
            </div> {/* Payment Ends Here */}
          </div> {/* Payments Wrapper Ends Here */}

          {/* Invoice Summary  Left Side On Desktop */}
          <div className="InvoiceSummary block rounded-[12px] mx-[12px] lg:mb-[60px] lg:ml-[40px] border-[1px] border-solid border-gray-400 shadow-lg shadow-gray-400 lg:shadow-gray-700">
            <div className="InvoiceSummaryWrapper m-[8px] pb-[16px] lg:pb-[10px] lg:m-[20px]">
              <div className="SummaryTittle">
                 {/* New Section: Order Summary */}
<div className="flex flex-col rounded-[24px] border-[4px] lg:w-[495px] lg:h-[500px] w-295 h-250 bg-white p-8">
    <h2 className="text-[30px] font-bold text-green-700 text-center mb-0  font-inter">ORDER SUMMARY</h2> {/* No margin-bottom */}

    {/* Container for Input Boxes */}
    <OrderSummary />
    {/* Order Summary Details */}
    
    <div className="Metrics mx-[30px] lg:mt-12 lg:mx-[40px]">
              <div className="flex justify-between mt-[14px] lg:mt-[8px]">
                <p className="text-start font-[900] my-0 font-inter text-[#000000B2] text-[16px] lg:text-[18px] ">SUB TOTAL</p>
                <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[16px] lg:text-[18px]">Ksh {totalPrice} </p>
              </div>

              <div className="flex justify-between mt-[14px] lg:mt-[20px]">
                <p className="text-start font-[900] my-0 font-inter text-[#000000B2] text-[16px] lg:text-[18px]">DELIVERY</p>
                <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[16px] lg:text-[18px]">Ksh {delivery} </p>
              </div>

              <div className="flex justify-between mt-[14px] lg:mt-[20px]">
                <p className="text-start font-[900] my-0 font-inter text-[#000000B2] text-[16px] lg:text-[18px]">Total</p>
                <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[16px] lg:text-[18px]">Ksh {totalPrice + delivery} </p>
              </div>

             {/* Terms and Complete Payment Button */}
            <div className="mt-0 mt-30">
              <p className="text-[16px] text-gray-600 mb-4  font-inter">
                By completing purchase, you have accepted our Terms and Conditions.
              </p>
              <button
              onClick={handleCheckout} // Updated: Directly on the button
              className="  font-inter w-full text-[18px] font-bold text-white bg-green-700 py-3 mb-32 rounded-[12px] cursor-pointer active:scale-90 transition-all duration-100 ease-out">
              
                Complete Payment
              </button>
            </div>
           </div>
            </div>
          </div> {/* order Summary Ends Here */}
        </div> {/* Payments Part Ends Here */}
      </div> {/* Inner Contents Ends Here */}
    </div>
    </div>
    </div>
  );
}

export default Credit;