import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotificationCard from "./NotificationCard";
import NotificationList from "./NotificationList.json";
import Nav from "../../Nav/Navbar";
import FreshlyFooter from "../../footer/FreshlyFooter";
import axios from "axios";

function Notifications() {
    //Number of Notifications to pull from the json file
    const NotificationsNumber = 5;
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('http://localhost:8000/notifications/', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    withCredentials: true,
                });
                setNotifications(response.data.results); // Set the notifications from the response
                console.log("Fetched", notifications)
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch notifications');
                console.error('Error fetching notifications:', error);
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    //Percentage Values for OrderProcessing
    const OrderConfirmation = 100;               //Order Confirmation Percentage
    const OrderPayment = 72;                    //Order  Payment Percentage
    const OrderProcessing = 38;                 //Order Processing Percentage
    const OrderDelivery = 0;                   //Order Delivery Percentage

    //Function for Color for Each Range of Processing Value
    function ProcessingColor(PercentProgress) {
        if (PercentProgress >= 0 && PercentProgress < 50) return "bg-[#FF0C1A]"  // Red for between 0% to 50%
        if (PercentProgress >= 50 && PercentProgress < 80) return "bg-[#ffce0c]"  // Yellowish for between 50% to 80%
        if (PercentProgress >= 80 && PercentProgress <= 100) return "bg-[#008000]" // Green for Over 80% to 100%
    }

    return (
        <div className="Notifications mt-[160px] lg:mt-[200px]">
            <div className="NotificationsWrapper">
                {/*Nav bar */}
                <div className="Navbar">
                    <Nav />
                </div>

                <div className="InnerWrapper mx-[12px] lg:mx-[200px]">
                    {/*Notifications Title */}
                <div className="NotificationTitle">
                    <h1 className="text-center font-[700] font-inter text-[22px] lg:text-[40px] my-0 text-inter text-[#008000]  ">Your Notifications</h1>
                </div>
                {/*OrderProgress and Notification Cards Wrapper */}
                <div className="OrderAndNotifications mt-[30px]">
                    {/*Order Progress */}
                    <div className="OrderProgressCard px-[14px] lg:px-[28px] py-[18px] lg:py-[24px] rounded-[8px] lg:rounded-[18px] border-solid border-[0.6px] border-[#A6B1AD] shadow-md shadow-[#00000040] ">
                        {/*Progress Titles */}
                        <div className="ProgressTitles block mt-[4px] lg:mt-[12px]">
                            <div className="TitlesWrapper flex justify-between">
                                <div className="TitlesWrapper block">
                                    <p className="text-start font-[700] font-inter text-[10px] lg:text-[20px] text-[#008000] my-0">Your Order is in processing</p>
                                </div>
                                <Link to="/order-progress" className="TitlesWrapper block w-fit cursor-pointer">
                                    <p className="text-start font-[600] font-inter text-[10px] lg:text-[17px] text-[#00000099] my-0">Click To View Your Order Status</p>
                                </Link>
                            </div> 
                        </div> {/*Progress Titles Ends Ends Here */}
                        {/*ProgressBars */}
                        <div className="ProgressBars block mt-[16px] lg:mt-[16px]">
                            <div className="ProgressBarsWrapper flex justify-start">
                                {/*OrderConfirmation */}
                                <Link to="/order-progress" className="OrderConfirmation bg-[#D9D9D9] h-[9px] lg:h-[10px] w-[50px] lg:w-[100px] mr-[12px] lg:mr-[40px] cursor-pointer">
                                    <div className={`Progress h-full ${ProcessingColor(OrderConfirmation)}`} style={{ width: `${OrderConfirmation}%`}}></div>                               {/*Dynamic Progress bar length and color*/}
                                </Link>
                                {/*OrderPayment */}
                                <Link to="/order-progress" className="OrderPayment bg-[#D9D9D9] h-[9px] lg:h-[10px] w-[50px] lg:w-[100px] mr-[12px] lg:mr-[40px] cursor-pointer">
                                    <div className={`Progress h-full ${ProcessingColor(OrderPayment)}`} style={{ width: `${OrderPayment}%`}}></div>                                         {/*Dynamic Progress bar length and color*/}
                                </Link>
                                {/*OrderProcessing */}
                                <Link to="/order-progress" className="OrderProcessing bg-[#D9D9D9] h-[9px] lg:h-[10px] w-[50px] lg:w-[100px] mr-[12px] lg:mr-[40px] cursor-pointer">
                                    <div className={`Progress h-full ${ProcessingColor(OrderProcessing)}`} style={{ width: `${OrderProcessing}%` }}></div>                                  {/*Dynamic Progress bar length and color*/}
                                </Link>
                                {/*OrderDelivery */}
                                <Link to="/order-progress" className="OrderDelivery bg-[#D9D9D9] h-[9px] lg:h-[10px] w-[50px] lg:w-[100px] mr-[12px] lg:mr-[40px] cursor-pointer">
                                    <div className={`Progress h-full ${ProcessingColor(OrderDelivery)}`} style={{ width: `${OrderDelivery}%`}}></div>                                       {/*Dynamic Progress bar length and color*/}
                                </Link>
                            </div> {/*Progress Bars Wrapper Ends Here */}
                        </div> {/*Progress Bars Ends Here */}
                    </div> {/*Order Progress Card Ends Here */}
                    
                    {/*Notification Cards */}
                    <div className="NotificationCards">

                        { notifications.map((notification) => (
                                <NotificationCard header="New Message" details={notification.message}/> 
                    ))}
                        {NotificationList.slice(0,NotificationsNumber).map((NotificationList) => (
                        <NotificationCard key={NotificationList.id} header={NotificationList.header} details={NotificationList.details} />
                        ))
                    }  
                    </div>
                </div> {/*Order and Notifications Ends Here */}
                </div> {/*Inner Wrapper Ends Here*/}
                
                {/*The Footer */}
                <div className="PageFooter">
                    <FreshlyFooter />
                </div>
            </div> {/*Notifications Wrapper Ends Here */}
        </div> //Notifications Page Ends Here
    )
}

export default Notifications