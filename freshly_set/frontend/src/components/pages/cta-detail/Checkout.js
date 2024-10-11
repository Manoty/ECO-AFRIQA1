import React from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div className="Checkout">
      <div className="CheckoutWrapper py-[20px] lg:py-[40px] px-[18px] lg:px-[40px] my-[120px] lg:my-[40px] mx-[12px] lg:mx-[260px] border-solid border-[0.1px] rounded-[12px] lg:rounded-[24px]  border-[#0000008F] shadow-lg shadow-[#00000040]">
        {/*Page Header*/}
        <div className="HeadingAndImage flex justify-start">
          <div className="ImageContainer block mr-[8px] lg:mr-[30px]">
            <div className='ImageWrapper block w-[45px] lg:w-[100px] h-[45px] lg:h-[100px]'>
               <img src="/static/media/productPay.png" alt="Payment Methods" className="w-full h-full" />
            </div>
          </div>
          <div className="Heading block mx-[12px] lg:mx-[30px]">
            <p className="text-start font-inter font-[600] text-[#000000] text-[14px] lg:text-[35px] my-0">Please Choose Your Preferred Payment Method To Continue</p>
          </div>
        </div> {/*Page Header*/}
              
        {/* Back Button */}
        <div className="BackButton block mx-[6px] lg:mx-[10px] w-fit mt-[10px] lg:mt-[30px]">
          <Link to="/booking">
            <div className='ImageWrapper w-[27px] lg:w-[61px] h-[21px] lg:h-[47px]'>
              <img src="/static/media/image10.png" alt="Back" className="w-full h-full" />
            </div>
          </Link>
        </div> {/* Back Button */}
         
        {/*Checkout Methods */}
        <div className='CheckoutMethods block'>
          {/* Mpesa Method*/}
          <div className="MpesaMethod w-fit mx-auto rounded-[8px] lg:rounded-[18px] shadow-md shadow-[#00000040] border-solid border-[1px] border-[#00000040] ">
            <Link to='/Mpesa2'>
              <div className='MPesaWrapper py-[10px] lg:py-[12px] px-[12px] lg:px-[16px] h-[45px] lg:h-[102px] w-[100px] lg:w-[228px]'>
                <img src="/static/media/tag.png" alt="Mpesa" className="h-full" />
              </div>
            </Link>
          </div>
          {/* Card Method*/}
          <div className="MpesaMethod w-fit mx-auto mt-[16px] lg:mt-[30px] rounded-[8px] lg:rounded-[18px] shadow-md shadow-[#00000040] border-solid border-[1px] border-[#00000040]">
            <Link to='/Credit'>
              <div className='CardWrapper py-[12px] px-[16px] h-[45px] lg:h-[102px] w-[58px] lg:w-[132px] mr-[42px] lg:mr-[96px]'>
                <img src="/static/media/debit.png" alt="Mpesa" className="h-full w-full" />
              </div> 
            </Link>
          </div>
        </div> {/*Checkout Methods */}
             
      </div> {/*CheckoutWrapper */}
    </div> //Checkout
  );
}

export default Checkout;
