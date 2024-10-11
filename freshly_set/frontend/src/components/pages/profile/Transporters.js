import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { IoStarSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import UsersDeliveries from "./json/UsersDeliveries.json"

import LineChart from './utils/LineChart';

function Transporters() {

  // Replace the state with orders fetched from backend
  const [deliveryData, setDeliveryData] = useState(UsersDeliveries);

  const getStatusColor = (status) => {
    switch (status) {
      case "ready":
        return "text-[#008000]";
      case "packaging":
        return "text-red-600";
      case "collection":
        return "text-[#000]/80";
      default:
        return "text-green-600";
    }
  }

  return (
    <section className="font-inter mb-10">
      <div>

        <h2 className="flex gap-5 font-bold m-0">
          <span className="capitalize text-[#008000]">
            Hello jane, welcome to your dashboard
          </span>
          <Link
            href="/delivery"
            className="text-[#00000080]/50 text-[15px] hover:underline"
          >
            View and manage your deliveries and earnings
          </Link>
        </h2>
      </div>

      <div className='w-[88%]'>
        <div className="flex justify-between">
          <p className="flex flex-col">
            <span className="text-start text-red-600 font-bold">5.5 Ratings</span>
            <span className="flex gap-[1.5px] text-green-600">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </span>
          </p>
          <p className="font-bold text-green-600">200 Deliveries</p>
          <p className="font-bold text-green-600">Lorry Automobile</p>
          <p className="text-3xl"><FaEdit /></p>
        </div>

        <div className="border-y-[1px] border-x-0 border-solid border-slate-900 text-center">
          <p className="uppercase font-bold ">
            <span className="pr-3">Your total earnings:</span>
            <span className="text-red-600">ksh 10,000</span>
          </p>
        </div>
      </div>

      <div >
        <h2 className="capitalize font-bold text-[#000]/80 text-[18px] text-start">your upcoming deliveries</h2>
        <table className="min-w-full text-center text-sm font-light">
          <thead className="text-green-500">
            <tr className="capitalize">
              <th>Order number</th>
              <th>Order status</th>
              <th>Pick-Up</th>
              <th>Drop-Off</th>
              <th>Client contact</th>
              <th>Expected delivery date/time</th>
            </tr>
          </thead>

          {/*Customers upcoming delivery values */}
          {
            deliveryData ? deliveryData.map(({OrderNumber, OrderStatus, PickUp, DropOff, ClientsContact, DeliveryDate}, index) => (
            <tbody
              key={index}
              className="font-bold text-[14px]">
              <tr>
                <td>{OrderNumber}</td>
                <td className={`${getStatusColor(OrderStatus)} font-bold uppercase`}>{OrderStatus}</td>
                <td className="capitalize">{PickUp}</td>
                <td className="capitalize">{DropOff}</td>
                <td>{ClientsContact}</td>
                <td>{DeliveryDate}</td>
              </tr>
            </tbody>
            )) : <p className="text-center text-green-600">No upcoming deliveries</p>
          }
        </table>
      </div>

      <div className="w-[88%]">
      <h2 className="font-bold text-[#000]/80 text-[18px] text-start">Your Performance</h2>
      {/* Line-Graph chart */}
      <LineChart />
      </div>

      <div>
      <h2 className="font-bold text-[#000]/80 text-[18px] text-start">Your Delivery History</h2>
      <table className="min-w-full text-center text-sm font-light">
          <thead className="text-green-500">
            <tr className="capitalize">
              <th>Order number</th>
              <th>Location</th>
              <th>Client contact</th>
              <th>Expected delivery date</th>
            </tr>
          </thead>
          {
            deliveryData ? deliveryData.map(({OrderNumber, DropOff, ClientsContact, DeliveryDate}, index) => (
              <tbody className="font-bold text-[14px]">
                <tr>
                  <td>{OrderNumber}</td>
                  <td className="capitalize">{DropOff}</td>
                  <td className="capitalize">{ClientsContact}</td>
                  <td>{DeliveryDate}</td>
                </tr>
              </tbody>
            ))
            : <p className="text-green-600">You do not have any delivery History</p>
          }
        </table>
      </div>
    </section>
  )
}

export default Transporters
