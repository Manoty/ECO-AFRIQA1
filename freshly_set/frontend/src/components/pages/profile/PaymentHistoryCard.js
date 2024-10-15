import React from "react";

function PaymentHistoryCard({OrderNumber, OrderAmount, OrderDate, OrderStatus}) {
    return (
        <div className="PaymentHistoryCard mt-[8px]">
            <div className="PaymentHistoryWrapper grid grid-cols-4 ">
                {/*OrderNumber */}
                <div className="OrderNumber">
                    <p className="text-center text-[12px] lg:text-[15px] text-[#000000] font-inter font-[700] my-0">{OrderNumber} </p>
                </div>
                {/*OrderAmount */}
                <div className="OrderAmount">
                    <p className="text-center text-[12px] lg:text-[15px] text-[#000000] font-inter font-[700] my-0">{OrderAmount} </p>
                </div>
                {/*OrderDate */}
                <div className="OrderDate">
                    <p className="text-center text-[12px] lg:text-[15px] text-[#000000] font-inter font-[700] my-0">{OrderDate} </p>
                </div>
                {/*OrderStatus */}
                <div className="OrderStatus">
                    <p className={`text-center text-[12px] lg:text-[15px] font-inter font-[700] my-0 ${OrderStatus === "PAID"? "text-[#008000]": "text-[#FF0C1A]"} `}>{OrderStatus} </p>
                </div>
            </div>
        </div> // Payment History Card
    )
}

export default PaymentHistoryCard