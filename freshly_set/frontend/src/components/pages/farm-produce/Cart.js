import React, { useState } from 'react'
import { BsPlusCircleFill } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import Products from "./json/Products.json"

const Cart = () => {
    const [cartItems, setCartItems] = useState(Products);
    const [showPrompt, setShowPrompt] = useState(false);
    
  return (
    <section className="font-inter max-w-[90%] mx-auto">
        <div>
            <h1 className="capitalize text-2xl text-green-600 text-center">
                your cart
            </h1>
            <p className='flex text-2xl justify-end gap-3'>
                <span className='text-green-600'>
                    <BsPlusCircleFill />
                </span>
                <span className='capitalize text-xl text-green-600 '>
                    add more items
                </span>
            </p>
            <div className="my-2">
                { cartItems?
                    cartItems.slice(0, 4).map(({ id, quantity, name, price, img}) => (
                        <div
                            key={id}
                            className='flex justify-between border border-solid border-slate-200 shadow items-center rounded-md px-6 pt-6 pb-2 my-2'>
                            <div className='flex gap-6 items-center'>
                                <p className='text-green-600 text-3xl'>
                                <MdCheckCircle />
                                </p>
                                <div className="w-[80px] h-[80px] bg-green-200 rounded-md flex items-center  shadow-sm shadow-slate-500">
                                    <img
                                        src={img}
                                        className='w-full object-contain'
                                    />
                                </div>
                                <div className='w-[80px] flex flex-col items-start h-[80px] justify-between'>
                                    <p className='m-0 capitalize font-bold text-slate-800'>{name}</p>
                                    <p className='m-0 text-[10px] capitalize'>{quantity}</p>
                                    <div className='flex justify-between items-center text-3xl gap-2'>
                                        <div className='text-green-600 border-0 text-3xl cursor-pointer'><AiFillPlusCircle /></div>
                                        <p className='text-sm font-bold my-0'>1</p>

                                        <div className='text-green-600 border-0 text-3xl cursor-pointer'><AiFillMinusCircle /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-[80px] w-[80px]">
                                    <span className="block font-bold text-[12px] text-slate-500">SubTotal</span>
                                    <span className="block text-red-500 font-bold capitalize">{price}</span>
                                </div>
                                <div className="h-[80px] flex items-end">
                                    <FaRegTrashCan className='text-3xl text-green-600 m-0 cursor-pointer hover:text-red-500'/>
                                </div>
                            </div>
                        </div>
                    ))
                    : 
                    <div>
                        <p className="text-2xl text-green-700 m-0">Your cart is empty!</p>
                        <p className="text-center m-0">
                            <FaOpencart className="text-green-600 text-4xl"/>
                        </p>
                    </div>
                }
            </div>
        </div>
    </section>
  )
}

export default Cart