import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaShareAlt } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'

function PollCard() {

      // Initial mock data for poll options
  const initialPollData = [
    { id: 1, option: 'Yes', votes: 0 },
    { id: 2, option: 'No', votes: 0 },
    { id: 3, option: 'Hm', votes: 0 },
  ];


   const [pollData, setPollData] = useState(initialPollData);
   const [totalVotes, setTotalVotes] = useState(0);
 
   // Function to handle voting
   const handleVote = (id) => {
     const updatedPollData = pollData.map((option) => {
       if (option.id === id) {
         return { ...option, votes: option.votes + 1 };
       }
       return option;
     });
 
     setPollData(updatedPollData);
     setTotalVotes(totalVotes + 1);
   };

   useEffect(() => {
    console.log("Poll data", pollData)
   },[pollData])
  return (
    <div className="relative h-[243.561px] lg:h-[506px] w-[169.433px] lg:w-[352px] rounded-[10.546px] bg-white shadow-lg pt-[29px]  block">
    {/* Card 1 */}

    <FaChevronDown className="absolute top-[42px] right-[20px] h-[18.949px] w-[30.053px] text-black cursor-pointer"/>
    <h3 className="freshlyGreenText ml-[18px] lg:ml-[38px] text-[8.779px] lg:text-[18.238px]">Urban Farming?</h3>
    {/* Polls */}

    {pollData.map((option) => (
        <div key={option.id} className="flex  lg:space-x-[24px] items-center ml-[18px] lg:ml-[38px]">
            <p className="text-[8.46px] lg:text-[17.576px]  font-[700] text-black  mt-[8px] align-middle lg:-mt-[0px] ">{option.option}</p>
            <div 
             onClick={() => handleVote(option.id)} 
             className="bg-[#D9D9D9] rounded-[12px] h-[10.739px] w-[101.765px] lg:w-[211.418px] lg:h-[22.31px] ml-[11.87px] lg:ml-[0px] cursor-pointer">
                <div style={{
                  width: totalVotes > 0 ? `${(option.votes / totalVotes) * 100}%` : '0%',
                }} className="h-[10.739px] lg:h-[22.31px]  rounded-[12px] bg-[#008000]"/>

            </div>
        </div>

    ))}
       

                    

            <h4 className="w-[121px] lg:w-[275.266px] text-[12px] lg:text-[12px] font-[700] font-inter ml-[38px] ">Vote & Give A Reason For Your Choice</h4>
            
            <div className="">
                
                <textarea className="h-[101px] w-[179px] ml-[38px] lg:h-[97px] lg:w-[284px] rounded-[19px] border-solid border-[#00000040]/[25%]"/>

            </div>
            <div className="absolute left-[118px] bottom-[42px]">
                <div className=" items-center space-x-[32px]  mt-[26px]">
                    <MdMessage className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                    <FaShareAlt className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]"/>
                </div>

              
            </div>

              {/* Date and author...can be made dynamic later*/}
              <p className="absolute bottom-[0px] left-[25%] text-[10px] lg:text-[11.719px] text-center font-[400]">By Freshly Farms, on 04 Sept, 2024</p>
</div>
)
}

export default PollCard