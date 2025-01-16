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
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/orders/`, orderData, { 
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
    <div className="CardCheckout ">
      {/* The Upper NavBar */}
      <div className="Navbar">
        <Nav /> 
      </div>      
      <div className="CardCheckoutWrapper mx-[12px] lg:mx-[30px]  mt-[150px] lg:mt-[180px]">
        {/* Heading */}
        <div className="Heading">
          <h1 className="text-center text-[#008000] text-[29px] lg:text-[40px] font-[900] lg:font-[700] font-inter my-0">Checkout</h1>
        </div>
        
        {/* Back Button */}
        <div className="block lg:-mt-[40px] ml-[16px] lg:ml-[30px]">
          <Link to="/checkout" className="">
            <img src="/static/media/image10.png" alt="Back" className="h-[21px] lg:h-[47px] w-[27px] lg:w-[61px]" />
          </Link>
        </div>
        
        <div className="InnerWrapper block mt-[20px] mb-[30px]">
          <div className="lg:flex justify-between">
            
            {/*CardDetails Section */}
            <section className="CardDetails block lg:w-[60%] h-full py-[12px] lg:py-[16px] px-[12px] lg:px-[18px] rounded-[10px] border-solid border-[1px] border-[#00000033] shadow-md shadow-[#00000040] ">   
              {/*UpperBanner */}               
              <div className="UpperBanner bg-[#00AA5B14] flex justify-between py-[18px] lg:py-[10px] px-[8px] lg:px-[20px] rounded-[8px] lg:rounded-[12px] border-solid border-[#00000033] border-[0.97px] shadow-md shadow-[#00000040]">
                <div className="BrandNames">
                  <p className="text-start text-shadow-custom font-inter font-[800] my-0 lg:pt-[14px] text-[14px] lg:text-[24px]">Credit/debit card</p>
                </div>
                <div className="block lg:mr-[10px]">
                  <div className="BrandLogos flex justify-between lg:py-[10px]">
                    <img src="/static/media/image 156.png" alt="" className="h-[20px] lg:h-[39px] mr-[2px] lg:mr-[10px]" />
                    <img src="/static/media/image 155.png" alt="" className="h-[10px] lg:h-[19px] pt-[5px] ml-[6px] lg:ml-[10px]" />
                  </div>
                </div>
              </div> {/* UpperBanner */}
                  
              {/* Card Name */}
              <div className="CardName mt-[14px]">
                <div className="NameLabels flex justify-between">
                  <div className="block">
                    <p className="text-start text-[#000000CC] text-[10px] lg:text-[18px] font-inter font-[800] my-0">Name on card</p>
                  </div>
                  <div className="block">
                    <p className="text-start text-[#0000008F] text-[10px] lg:text-[18px] font-inter font-[800] my-0">*Required</p>
                  </div>          
                </div>
                <div className="InputBox mt-[6px] lg:mt-[8px] rounded-[6px] lg:rounded-[10px] overflow-hidden object-fill px-[6px] lg:px-[10px] border-solid border-[1px] border-[#0000006B] shadow-md shadow-[#00000040]">
                  <input className="font-inter font-[600] text-[10px] lg:text-[18px] border-none outline-none py-[8px] w-[100%] h-full " />
                </div>
              </div>

              {/*CardNumber */}
              <div className="CardNumber mt-[12px] lg:mt-[16px]">
                <div className="CardNumberLabels flex justify-between">
                  <div className="block">
                    <p className="text-start text-[#000000CC] text-[10px] lg:text-[18px] font-inter font-[800] my-0">Card Number</p>
                  </div>
                  <div className="block">
                    <p className="text-start text-[#0000008F] text-[10px] lg:text-[18px] font-inter font-[800] my-0">*Required</p>
                  </div>          
                </div>
                <div className="InputBox mt-[6px] lg:mt-[8px] rounded-[6px] lg:rounded-[10px] overflow-hidden object-fill px-[6px] lg:px-[10px] border-solid border-[1px] border-[#0000006B] shadow-md shadow-[#00000040]">
                  <input className="font-inter font-[600] text-[10px] lg:text-[18px] border-none outline-none py-[8px] w-[100%] h-full"        
                    value={cardNumber} // Updated: Controlled input
                    onChange={(e) => setCardNumber(e.target.value)} // Updated: Set state on change
                  />
                </div>
              </div>
              
              {/* Expiry Date and CVC/CVC */}
              <div className="flex justify-between mt-[16px]">
                {/*Expire Date */}
                <div className="Expiry Date w-[46%] lg:w-[48%]">
                  <div className="ExpiryDateLabels flex justify-between">
                    <div className="block">
                      <p className="text-start text-[#000000CC] text-[10px] lg:text-[18px] font-inter font-[800] my-0">Expiry Date</p>
                    </div>
                    <div className="block">
                      <p className="text-start text-[#0000008F] text-[10px] lg:text-[18px] font-inter font-[800] my-0">*Required</p>
                    </div>          
                  </div>
                  <div className="InputBox mt-[6px] lg:mt-[8px] rounded-[6px] lg:rounded-[10px] overflow-hidden object-fill px-[6px] lg:px-[10px] border-solid border-[1px] border-[#0000006B] shadow-md shadow-[#00000040]">
                    <input className="font-inter font-[600] text-[10px] lg:text-[18px] border-none outline-none py-[8px] w-[100%] h-full"
                      placeholder="MM/DD/YY"
                      type="date"
                      value={expiryDate} // Updated: Controlled input
                      onChange={(e) => setExpiryDate(e.target.value)} // Updated: Set state on change
                    />
                  </div>
                </div>
                
                {/*CVC/CVV */}
                <div className="CVC w-[46%] lg:w-[48%]">
                  <div className="CVCLabels flex justify-between">
                  <div className="block">
                    <p className="text-start text-[#000000CC] text-[10px] lg:text-[18px] font-inter font-[800] my-0">CVV/CVC</p>
                  </div>
                  <div className="block">
                    <p className="text-start text-[#0000008F] text-[10px] lg:text-[18px] font-inter font-[800] my-0">*Required</p>
                  </div>          
                </div>
                <div className="InputBox mt-[6px] lg:mt-[8px] rounded-[6px] lg:rounded-[10px] overflow-hidden object-fill px-[6px] lg:px-[10px] border-solid border-[1px] border-[#0000006B] shadow-md shadow-[#00000040]">
                  <input className="font-inter font-[600] text-[10px] lg:text-[18px] border-none outline-none py-[8px] w-[100%] h-full"
                    value={cvc} // Updated: Controlled input
                    onChange={(e) => setCvc(e.target.value)} // Updated: Set state on change
                  />
                </div>
                </div>
              </div>

              {/*Save Card Information */}
              <div className="SaveInformation block mt-[12px]">
                <div className="flex justify-between">
                  <div className="block my-auto">
                    <div className="flex justify-start">
                      <input type="checkbox" className="block mr-[10px] lg:mr-[20px] w-[14px] lg:w-[22px] h-[14px] lg:h-[22px]" />
                      <div className="block">
                         <p className="text-start text-[10px] lg:text-[18px] text-[black] font-inter font-[800] my-0">Securely save this card for my later purchase</p>
                      </div>               
                    </div>
                  </div>                 
                  <button className="bg-[#008000] text-center text-white text-[14px] lg:text-[25px] font-inter font-[800] px-[30px] py-[8px] rounded-[6px] lg:rounded-[9px] border-none outline-none cursor-pointer active:scale-90 transition-all duration-100 ease-out">OK</button>
                </div>
              </div>  
            </section> {/* CardDetails */}
            
            {/* OrderSummary */}
            <section className="OrderSummary block rounded-[12px] mt-[40px] lg:mt-0 mx-[10px] lg:ml-[90px] lg:mr-0 ">
              <div className="OrderSummaryWrapper block h-fit py-[16px] px-[18px] rounded-[10px] border-solid border-[1px] border-[#00000033] shadow-md shadow-[#00000040]">
                <div className="OrderHeading block">
                  <h2 className="text-center text-[20px] text-[#008000] font-inter font-[800] my-0 ">ORDER SUMMARY</h2> 
                </div>
            
                {/* Client details */}
                <div className="ClientDetails">
                  <OrderSummary />
                </div>
                
                {/* Order Quantity Details */}                
                <div className="Metrics  mx-[20px] lg:mx-[40px] mt-[26px] lg:mt-[14px] ">
                  <div className="flex justify-between ">
                    <p className="text-start font-[600] my-0 font-inter text-[#000000B2] text-[12px] lg:text-[18px] ">SubTotal</p>
                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[12px] lg:text-[18px]">Ksh {totalPrice} </p>
                  </div>

                  <div className="flex justify-between mt-[10px] lg:mt-[10px]">
                    <p className="text-start font-[600] my-0 font-inter text-[#000000B2] text-[12px] lg:text-[18px]">Delivery</p>
                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[12px] lg:text-[18px]">Ksh {delivery} </p>
                  </div>

                  <div className="flex justify-between mt-[14px] lg:mt-[10px]">
                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[12px] lg:text-[18px]">TOTAL</p>
                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[12px] lg:text-[18px]">Ksh {totalPrice + delivery} </p>
                  </div>              
                </div>

                {/* Terms and Complete Payment Button */}
                <div className="mt-[12px]">
                  <p className="text-start text-[9px] lg:text-[12px] text-[#00000066] font-inter font-[800] my-0 ">By completing your purchase you agree to our terms and service</p>
                </div>

                {/*Submit Button */}
                <div className="SubmitButton mt-[14px] mx-[10px]">
                  <button className="bg-[#008000] text-center text-[16px] lg:text-[18px] text-white font-inter font-[800] w-full py-[10px] rounded-[10px] border-none outline-none cursor-pointer active:scale-90 transition-all duration-100 ease-out"
                    onClick={handleCheckout} // Updated: Directly on the button           
                    >COMPLETE PAYMENT
                  </button>
                </div>
                
              </div>         
            </section> {/* OrderSummary */}
          </div>
        </div>
      </div>
    </div>
     
  );
}

export default Credit;