import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from '../../Nav/Navbar';
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import { getCsrfToken } from "../../../utils/getCsrfToken";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
import OrderSummary from "./OrderSummary";
import { ConsultationContext } from "../../context/ConsultationsContext";

import config from "../../../config";
function Mpesa2() {
  const { cartItems, totalPrice, delivery } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { profile } = useContext(ProfileContext);
  const apiUrl = config.API_URL;

  const { service, setService } = useContext(ProfileContext);
  // State for form fields, used when not authenticated
  const { orderName, setOrderName, orderEmail, setOrderEmail, orderPhone, setOrderPhone, orderLocation, setOrderLocation } = useContext(CartContext)


  const { clearCart } = useContext(CartContext);
  const { name, setName, meetingType, setMeetingType, date, setDate, time, setTime, note, setNote, consultant, selectedConsultants, setSelectedConsultants } = useContext(ConsultationContext);

  const navigate = useNavigate();
  // Populate the form with profile data when authenticated

  useEffect(() => {
    const consultArray = []

    consultArray.push(consultant)
    setSelectedConsultants([...selectedConsultants], consultArray)

    console.log("array", selectedConsultants);
    if (service) {
      setOrderName(`${name}`);
    }
  },[])
  useEffect(() => {
    if (isAuthenticated && profile &&!service) {
      setOrderName(`${profile.first_name} ${profile.last_name}`);
      setOrderEmail(profile.email);
      setOrderPhone(profile.phone);
      setOrderLocation(profile.location);
    }
  }, [isAuthenticated, profile]);

  const orderData = {
    customer_name: orderName,
    customer_email: orderEmail,
    customer_phone: orderPhone,
    items: cartItems.map(item => ({
      product_name: item.name,
      product_price: item.price,
      product_quantity: item.qtty,
    })),
    total_price: cartItems.reduce((sum, item) => sum + item.price * item.qtty, 0),
    delivery_fee: delivery,
    payment_method: 'mpesa',
  };



  const orderDataService = {
    customer_name: orderName,
    customer_email: orderEmail,
    customer_phone: orderPhone,
   
    items: selectedConsultants.map(consultant => ({
      product_name:`{consultation request for ${consultant.name}}`,
      product_price:consultant?.rate,
      product_quantity:1
    })),
    total_price: consultant?.rate,
    delivery_fee: 0,
    payment_method: 'mpesa',
  };

  const handleCheckout = async () => {
    const csrfToken = getCsrfToken();
    setService(false)

    try {
<<<<<<< HEAD
      const response = await axios.post(`'${process.env.REACT_APP_API_URL}/orders/'`, !service?orderData:orderDataService, {
=======
      const response = await axios.post(`${DJANGO_BACKEND_URL}/orders`, !service?orderData:orderDataService, {
>>>>>>> 188ef061ad30c24d8fbba9e2bbea3da4f00e3f7f

        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        withCredentials: true,
      });
      if (response.status === 201) {
        console.log('Order created:', response.data);
        clearCart();
        alert(`Order placed successfully! Your Order ID is ${response.data.order_id}`);

        if (isAuthenticated) {
          navigate("/profile")
        } else {
          navigate("/")
        }
      } else {
        console.error('Unexpected response:', response);
        alert('Unexpected response from the server.');
      }
    } catch (error) {
      console.log('Error response:', error.response?.data);
      alert('There was an issue placing the order. Check the console for more details.');
    }
  };

  useEffect(() => {
    isAuthenticated
  }, [isAuthenticated])

  useEffect(() => {
    if (service) {

    }
  }, [])

  return (
    <div className="MpesaCheckout">
      {/* The Upper NavBar */}
      <div className="Navbar">
        <Nav /> 
      </div>        

      <div className="MpesaCheckoutWrapper mx-[12px] lg:mx-[30px]  mt-[150px] lg:mt-[180px]">
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
            
            {/* Mpesa details Section */}
            <section className="MpesaDetails CardDetails block lg:w-[60%] h-full py-[12px] lg:py-[16px] px-[12px] lg:px-[18px] rounded-[10px] border-solid border-[1px] border-[#00000033] shadow-md shadow-[#00000040]">
              {/*UpperBanner */}
              <div className="UpperBanner bg-[#00AA5B14] flex justify-between py-[18px] lg:py-[10px] px-[8px] lg:px-[20px] rounded-[8px] lg:rounded-[12px] border-solid border-[#00000033] border-[0.97px] shadow-md shadow-[#00000040]">
                <div className="BrandNames">
                  <p className="text-start text-shadow-custom font-inter font-[800] my-0 lg:pt-[14px] text-[14px] lg:text-[24px]">M-pesa - PesaPal Payment</p>
                </div>
                <div className="block lg:mr-[10px]">
                  <div className="BrandLogos flex justify-between lg:py-[10px]">
                    <img src="/static/media/mpesa.png" alt="M-Pesa Logo" className="h-[20px] lg:h-[39px] mr-[2px] lg:mr-[10px]" />
                    <img src="/static/media/pesapal.png" alt="PesaPal Logo" className="h-[10px] lg:h-[19px] pt-[5px] ml-[6px] lg:ml-[10px]" />
                  </div>
                </div>
              </div> {/* UpperBanner */}

              {/* MPesa Prompt */}
              <div className="MpesaPrompt mt-[18px] lg:mt-[24px] mx-[10px] lg:mx-[30px]">
                <div className="PromptMessage">
                  <p className="text-start font-inter font-[800] text-[12px] lg:text-[18px] my-0 leading-[18px] ">An Mpesa Prompt has been sent to +254712345678. Enter your Mpesa PIN to complete payment.</p>
                </div>

                <div className="AskPrompt flex justify-between mt-[24px]">
                  <p className="text-start font-inter font-[800] text-[10px] lg:text-[16px] text-[#000000B2] my-auto">Haven’t received a prompt?</p>
                  <button className="bg-[#008000] text-white text-center font-inter font-[800] text-[10px] lg:text-[16px] py-[8px] lg:py-[8px] px-[16px] lg:px-[40px] rounded-[5px] lg:rounded-[12px] border-none outline-none cursor-pointer active:scale-90 transition-all duration-100 ease-out"
                    onClick={handleCheckout}
                    >RESEND PROMPT
                  </button>                  
                </div> 

                <div className="RememberMpesa flex justify-start mt-[40px] pb-[30px]">
                  <input type="checkbox" className="block mr-[10px] lg:mr-[30px] w-[14px] lg:w-[25px] h-[14px] lg:h-[25px]" />
                  <p className="block text-start text-[10px] lg:text-[18px] font-inter font-[800]  my-auto">Always use M-pesa for your future bookings</p>
                </div>              
              </div> 
            </section> {/* MpesaDetails */}

            {/* OrderSummary */}
            <section className="OrderSummary block rounded-[12px] mt-[40px] lg:mt-0 mx-[10px] lg:ml-[90px] lg:mr-0">
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
                  <div className="flex justify-between">
                    <p className="text-start font-[600] my-0 font-inter text-[#000000B2] text-[12px] lg:text-[18px] ">SubTotal</p>
                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[12px] lg:text-[18px]">KSH {totalPrice}</p>
                  </div>
                  {
                    !service && (
                      <div className="flex justify-between mt-[10px] lg:mt-[10px]">
                        <p className="text-start font-[600] my-0 font-inter text-[#000000B2] text-[12px] lg:text-[18px]">Delivery</p>
                        <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[12px] lg:text-[18px]">KSH {delivery}</p>
                      </div>
                    )
                  }
                  <div className="flex justify-between mt-[14px] lg:mt-[20px]">
                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[12px] lg:text-[18px]">TOTAL</p>
                    <p className="text-start font-[900] my-0 font-inter text-[#FF0C1A] text-[12px] lg:text-[18px]">KSH {totalPrice + delivery}</p>
                  </div>                
                </div>

                {/* Terms */}
                <div className="mt-[12px]">
                  <p className="text-start text-[9px] lg:text-[12px] text-[#00000066] font-inter font-[800] my-0 ">By completing your purchase you agree to our terms and service</p>
                </div>              
              </div>
            </section> {/* OrderSummary */}
            
          </div> 
        </div> 
      </div>
    </div>
  );
}

export default Mpesa2;