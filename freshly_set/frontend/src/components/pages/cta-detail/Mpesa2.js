import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from '../../Nav/Navbar';
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import { getCsrfToken } from "../../../utils/getCsrfToken";
import { ProfileContext } from "../../context/ProfileContext";

function Mpesa2() {

  const { cartItems, totalPrice, delivery } = useContext(CartContext);

  const { profile } = useContext(ProfileContext);
 // Example order data to send (based on your app's structure)
 const orderData = {
  customer: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '1234567890'
  },
  items: cartItems.map(item => ({
    product_id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity
  })),
  total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
  payment_method: 'mpesa', // Example payment method
};

const handleCheckout = async () => {
  // Fetch CSRF token from meta tag
  const csrfToken = getCsrfToken();

  try {
    const response = await axios.post(`${process.env.REACT_APP_API_HOST}/order/create/`, orderData, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,  // if applicable
      },
      withCredentials: true,  // if using CSRF protection
    })
    if (response.status === 201) {
      // Order created successfully
      console.log('Order created:', response.data);
      alert('Order placed successfully!');
    } else {
      // Handle error
      console.error('Error creating order:', response.data);
      alert('Error creating order.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error connecting to backend.');
  }
};


  useEffect(() => {
    console.log("cart items", totalPrice)
  },[])
  return (
    <div className="min-h-screen bg-[#F5FAF9] overflow-x-hidden">
      <Nav /> {/* The Upper NavBar */}

      {/* Back Button */}
      <div className="block lg:flex justify-start lg:mt-[150px] mt-[180px] ml-12">
        <Link to="/checkout">
          <img src="/static/media/image10.png" alt="Back" className="lg:my-[6px] h-full" />
        </Link>
      </div>

      {/* Heading */}
      <h1 className="lg:text-center text-center mt-6 text-[35px] font-bold">Checkout</h1>

      <div className="InnerContents px-[4px] lg:px-[40px] lg:mt-6 mx-[6px] lg:mx-[50px] lg:my-[20px] rounded-[20px] border-gray-400 border-[2px] shadow-lg shadow-white lg:shadow-gray-700 mb-[40px]">
        

        <div className="PaymentsPart block lg:flex justify-between mt-[30px]">
                    {/*Payment Section */}
                    <div className="PaymentsWrapper p-[8px] lg:p-[20px] rounded-[12px] border-solid border-[1px] border-gray-400 lg:mr-[40px] mb-[20px] shadow-lg shadow-gray-400 lg:shadow-gray-700  h-fit">
                        <div className="Payment block ">
                            <div className="UpperBanner bg-[#00AA5B14] flex justify-between border-[1px] border-gray-400 border-solid shadow-md shadow-gray-500 py-[18px] lg:py-[10px] px-[8px] lg:px-[20px] rounded-[8px] lg:rounded-[12px]">
                                <div className="BrandNames">
                                    <p className="text-start text-shadow-custom font-inter font-[800] my-0 lg:pt-[14px] text-[14px] lg:text-[24px]  ">M-pesa - PesaPal Payment</p>
                                </div>
                                <div className="block lg:mr-[10px]">
                                    <div className="BrandLogos flex justify-between  lg:py-[10px]">
                                        <img src="/static/media/mpesa.png" alt="" className="h-[20px] lg:h-[39px] mr-[2px] lg:mr-[10px]" />
                                        <img src="/static/media/pesapal.png" alt=""  className="h-[10px] lg:h-[19px] pt-[5px] ml-[6px] lg:ml-[10px]"/>
                                    </div>
                                </div>
                            </div> {/*upper part */}
                            {/*main Contents */}
                            <div className="InnerContents mx-[14px] lg:mx-[30px]">
                                <div className="PromptMessage ">
                                <p className="text-start font-inter font-[800] text-[14px] lg:text-[18px] ">An Mpesa Prompt has been sent to +254712345678. Put your Mpesa pin to complete payment.</p>
                            </div>
                            
                            <div className="AskPrompt flex justify-start my-[20px]">
                                <p className="text-start font-inter font-[800] text-[11px] lg:text-[16px] text-[#000000B2] my-[12px] mr-[8px] lg:mr-[40px]">Haven’t received a prompt?</p>
                                <div className="bg-[#008000] px-[10px] lg:px-[40px] rounded-[12px] border-none h-fit cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                                    <p className="text-white text-center font-inter font-[800] text-[12px] lg:text-[16px] my-[12px]">RESEND PROMPT</p>
                                </div>
                            </div> {/*Ask promt Ends Here */}
                            
                            <div className="RememberMpesa flex justify-start mt-[40px] pb-[30px]">
                                <input type="checkbox" className="block mr-[10px] lg:mr-[30px] w-[25px] h-[25px]" />
                                <p className="block text-start font-inter font-[800] my-0  text-[14px] lg:text-[18px] pt-[4px]">Always use M-pesa for your future bookings</p>
                            </div>
                            </div> {/*main  Ends Here */}
                        </div> {/*Payment section Ends Here */}
                    </div> {/*Payments Wrapper Ends Here */}

          {/* order Summary  Left Side On Desktop */}
          <div className="InvoiceSummary block rounded-[12px] mx-[12px] lg:mb-[60px] lg:ml-[40px] border-[1px] border-solid border-gray-400 shadow-lg shadow-gray-400 lg:shadow-gray-700">
            <div className="InvoiceSummaryWrapper m-[8px] pb-[16px] lg:pb-[10px] lg:m-[20px]">
              <div className="SummaryTittle">
                 {/* New Section: Order Summary detailed */}
<div className="flex flex-col rounded-[24px] border-[4px] lg:w-[495px] lg:h-[500px] w-295 h-250 bg-white p-8">
    <h2 className="text-[30px] font-bold text-green-700 text-center mb-0  font-inter">ORDER SUMMARY</h2> {/* No margin-bottom */}

    {/* Container for Input Boxes */}
    <div className="flex flex-col space-y-0 mt-2">
        <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mb-0">
            <p 
                className="border-none outline-none font-inter font-[700] text-[16px] w-full" 
            >Name:   {profile?.first_name}  {profile?.last_name}</p>
            <img src="/static/media/edit.png" alt="Edit" className="ml-[4px]"/>
        </div>

        <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mb-0">
         <p 
                className="border-none outline-none font-inter font-[700] text-[16px] w-full" 
            >Location:   {profile?.location}  </p>
            <img src="/static/media/edit.png" alt="Edit" className="ml-[4px]"/>
        </div>

        <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mb-0">
        <p 
                className="border-none outline-none font-inter font-[700] text-[16px] w-full" 
            >Phone:   {profile?.phone}  </p>
            <img src="/static/media/edit.png" alt="Edit" className="ml-[4px]"/>
        </div>
    </div>
    {/* Order Summary Details */}
    
    <div className="Metrics mx-[30px] lg:mt-12 lg:mx-[40px]">
              <div className="flex justify-between mt-[14px] lg:mt-[8px]">
                <p className="text-start font-[900] my-0 font-inter text-[#000000B2] text-[16px] lg:text-[18px] ">SUB TOTAL</p>
                <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[16px] lg:text-[18px]">KSH {totalPrice}</p>
              </div>

              <div className="flex justify-between mt-[14px] lg:mt-[20px]">
                <p className="text-start font-[900] my-0 font-inter text-[#000000B2] text-[16px] lg:text-[18px]">DELIVERY</p>
                <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[16px] lg:text-[18px]">KSH {delivery}</p>
              </div>

              <div className="flex justify-between mt-[14px] lg:mt-[20px]">
                <p className="text-start font-[900] my-0 font-inter text-[#000000B2] text-[16px] lg:text-[18px]">Total</p>
                <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[16px] lg:text-[18px]">KSH {totalPrice + delivery}</p>
              </div>

             {/* Terms and Complete Payment Button */}
            <div className="lg:mt-0 mt-30">
              <p className="text-[16px] text-gray-600 mb-24  font-inter">
                By completing purchase, you have accepted our Terms and Conditions.
              </p>
              <button onClick={() => handleCheckout()} className="  font-inter w-full text-[18px] font-bold text-white bg-green-700 py-3 rounded-[12px] mb-32 cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                Complete Payment
              </button>
            </div>
           </div>
            </div>
          </div> {/* Invoice Summary Ends Here */}
        </div> {/* Payments section  Part Ends Here */}
      </div> {/* Inner Contents Ends Here */}
    </div>
    </div>
    </div>
  );
}

export default Mpesa2;
