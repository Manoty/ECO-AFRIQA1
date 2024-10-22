import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from '../../Nav/Navbar';
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import { getCsrfToken } from "../../../utils/getCsrfToken";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
function OrderSummary() {
    const { cartItems, totalPrice, delivery } = useContext(CartContext);
    const { isAuthenticated } = useContext(AuthContext);
    const { profile } = useContext(ProfileContext);
  
    // State for form fields, used when not authenticated
    const [orderName, setOrderName] = useState("");
    const [orderEmail, setOrderEmail] = useState("");
    const [orderPhone, setOrderPhone] = useState("");
    const [orderLocation, setOrderLocation] = useState("");
  
    // Populate the form with profile data when authenticated
    useEffect(() => {
      if (isAuthenticated && profile) {
        setOrderName(`${profile.first_name} ${profile.last_name}`);
        setOrderEmail(profile.email);
        setOrderPhone(profile.phone); // Assuming you have phone data in the profile
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
    return (
        <div className="flex flex-col space-y-0 mt-2">
            <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mb-0">
                <input
                    className="border-none outline-none font-inter font-[700] text-[16px] w-full"
                    placeholder="First and Last Name"
                    value={orderName}
                    onChange={(e) => setOrderName(e.target.value)}
                    readOnly={isAuthenticated}
                />
                <img src="/static/media/edit.png" alt="Edit" className="ml-[4px]" />
            </div>

            <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mb-0">
                <input
                    className="border-none outline-none font-inter font-[700] text-[16px] w-full"
                    placeholder="Email"
                    value={orderEmail}
                    onChange={(e) => setOrderEmail(e.target.value)}
                    readOnly={isAuthenticated}
                />
                <img src="/static/media/edit.png" alt="Edit" className="ml-[4px]" />
            </div>

            <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mb-0">
                <input
                    className="border-none outline-none font-inter font-[700] text-[16px] w-full"
                    placeholder="Phone"
                    value={orderPhone}
                    onChange={(e) => setOrderPhone(e.target.value)}
                    readOnly={isAuthenticated}
                />
                <img src="/static/media/edit.png" alt="Edit" className="ml-[4px]" />
            </div>

            <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mb-0">
                <input
                    className="border-none outline-none font-inter font-[700] text-[16px] w-full"
                    placeholder="Location"
                    value={orderLocation}
                    onChange={(e) => setOrderLocation(e.target.value)}
                    readOnly={isAuthenticated}
                />
                <img src="/static/media/edit.png" alt="Edit" className="ml-[4px]" />
            </div>
        </div>)
}

export default OrderSummary