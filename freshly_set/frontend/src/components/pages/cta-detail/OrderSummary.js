import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from '../../Nav/Navbar';
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import { getCsrfToken } from "../../../utils/getCsrfToken";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
import { ConsultationContext } from "../../context/ConsultationsContext";
function OrderSummary() {
    const { cartItems, totalPrice, delivery } = useContext(CartContext);
    const { isAuthenticated } = useContext(AuthContext);
    const { profile } = useContext(ProfileContext);
    const { name, setName, meetingType, setMeetingType, date, setDate, time, setTime, note, setNote} = useContext(ConsultationContext);

    // State for form fields, used when not authenticated
    const { orderName, setOrderName, orderEmail, setOrderEmail, orderPhone, setOrderPhone, orderLocation, setOrderLocation } = useContext(CartContext)

    const {service, setService} = useContext(ProfileContext)
    // Populate the form with profile data when authenticated
    useEffect(() => {
      if (isAuthenticated && profile) {
        setOrderName(`${profile.first_name} ${profile.last_name}`);
        setOrderEmail(profile.email);
        setOrderPhone(profile.phone); // Assuming you have phone data in the profile
        setOrderLocation(profile.location);
      }
    }, [isAuthenticated, profile]);

    useEffect(() => {
        
    })
  
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
    return (
        <div className="OrderSummary">
            {/*location */}
            <div className="block mt-[20px]">
                <div className="InputBox flex justify-between  rounded-[8px] overflow-hidden object-fill px-[10px] border-solid border-[1px] border-[#0000006B] shadow-md shadow-[#00000040]">
                    <div className="FieldLabel my-auto mr-[6px]">
                        <p className="text-start text-[#0000008F] text-[12px] lg:text-[14px] font-inter  font-[900] my-0 ">Owner:</p>
                    </div>
                    <input className="font-inter font-[800] text-[12px] lg:text-[14px] border-none outline-none my-[2px] py-[4px] w-[100%]"
                        placeholder="First and Last Name"
                        value={service?name:orderName}
                        onChange={(e) => setOrderName(e.target.value)}
                        readOnly={isAuthenticated}
                    />
                    <div className="editButton my-auto ml-[6px]">
                            <img src="/static/media/edit.png" alt="Edit" className="w-[28px] lg:w-[32px] h-[28px] lg:h-[32px]" />
                    </div>   
                </div>
            </div>
    
            {/*location */}
            <div className="block mt-[12px] lg:mt-[10px]">
                <div className="InputBox flex justify-between  rounded-[8px] overflow-hidden object-fill px-[10px] border-solid border-[1px] border-[#0000006B] shadow-md shadow-[#00000040]">
                    <div className="FieldLabel my-auto mr-[6px]">
                        <p className="text-start text-[#0000008F] text-[12px] lg:text-[14px] font-inter  font-[900] my-0 ">Location:</p>
                    </div>
                    <input className="font-inter font-[800] text-[12px] lg:text-[14px] border-none outline-none my-[2px] py-[4px] w-[100%]"
                        placeholder="Your Location"
                        value={orderLocation}
                        onChange={(e) => setOrderLocation(e.target.value)}
                        readOnly={isAuthenticated}
                    />
                    <div className="editButton my-auto ml-[6px]">
                        <img src="/static/media/edit.png" alt="Edit" className="w-[28px] lg:w-[32px] h-[28px] lg:h-[32px]" />
                    </div>   
                </div>
            </div>

            {/*Email Address */}
            <div className="block mt-[12px] lg:mt-[10px]">
                <div className="InputBox flex justify-between  rounded-[8px] overflow-hidden object-fill px-[10px] border-solid border-[1px] border-[#0000006B] shadow-md shadow-[#00000040]">
                    <div className="FieldLabel my-auto mr-[6px]">
                        <p className="text-start text-[#0000008F] text-[12px] lg:text-[14px] font-inter  font-[900] my-0 ">Email:</p>
                    </div>
                    <input className="font-inter font-[800] text-[12px] lg:text-[14px] border-none outline-none my-auto py-[4px] w-[100%]"
                        placeholder="Your Email Address"
                        value={orderEmail}
                        onChange={(e) => setOrderEmail(e.target.value)}
                        readOnly={isAuthenticated}
                    />
                    <div className="editButton my-auto ml-[6px]">
                        <img src="/static/media/edit.png" alt="Edit" className="w-[28px] lg:w-[32px] h-[28px] lg:h-[32px]" />
                    </div>                  
                </div>
            </div>
                        
            {/*Phone Number */}
            <div className="block mt-[12px] lg:mt-[10px]">
                <div className="InputBox flex justify-between  rounded-[8px] overflow-hidden object-fill px-[10px] border-solid border-[1px] border-[#0000006B] shadow-md shadow-[#00000040]">
                    <div className="FieldLabel my-auto mr-[6px]">
                        <p className="text-start text-[#0000008F] text-[12px] lg:text-[14px] font-inter  font-[900] my-0 ">Phone:</p>
                    </div>
                    <input className="font-inter font-[800] text-[12px] lg:text-[14px] border-none outline-none my-[2px] py-[4px] w-[100%]"
                        placeholder="Your Phone Number"
                        value={orderPhone}
                        onChange={(e) => setOrderPhone(e.target.value)}
                        readOnly={isAuthenticated}
                    />
                    <div className="editButton my-auto ml-[6px]">
                        <img src="/static/media/edit.png" alt="Edit" className="w-[28px] lg:w-[32px] h-[28px] lg:h-[32px]" />
                    </div>              
                </div>
            </div>
        </div>
    )
}

export default OrderSummary