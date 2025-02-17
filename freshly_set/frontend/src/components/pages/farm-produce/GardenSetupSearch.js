import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import GardenSetupEntries from './json/GardenSetupSearchEntries.json'

function GardenSetupSearch() {
    // Number of Seach Appearances on filter
    const filterNumber = 12;

    return (
        <div className="FarmingSystemSearch mt-[100px] lg:mt-[60px] pb-[40px] mx-[10px] lg:mx-[40px]">
            <div className="FarmingSystemWrapper pt-[28px] pb-[8px] lg:py-[40px] px-[8px] lg:px-[40px] border-solid border-[1px] border-[#0000008F] shadow-md shadow-[#00000040] rounded-[8px] lg:rounded-[24px]">
                <div className="InnerContents">
                    {/*Back Button */}
                    <div className="BackButton block w-[35px] lg:w-[61px] h-[27px] lg:h-[47px] cursor-pointer active:scale-90 transition-all duration-100 ease-out">   
                        <Link to="/products/gardenSetups">
                            <img src="/static/media/image10.png" alt="Return back" className="w-full h-full" />
                        </Link>
                    </div>

                    {/*Searchbar */}
                    <div className="SearchBar mt-[20px] px-[10px] lg:px-[40px] mx-[6px] lg:mx-[30px] flex justify-between border-solid border-[1.5px] lg:border-[5px] border-[#008000] bg-white rounded-[6px] lg:rounded-[20px]">
                        <div className="block w-full mr-[10px] lg:mr-[30px] overflow-hidden">
                            <input className="w-full h-full text-start text-[#00000080] text-[16px] lg:text-[30px] font-inter font-[600] border-none outline-none"
                                type="text"
                               placeholder="Search For Garden Setup" 
                            />
                        </div>
                        <div className=" h-[34px] lg:h-[78px] w-[38px] lg:w-[80px] mx-[10px] object-cover cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                            <img src="/static/media/searchIcon.png" alt="SearchBar" className="w-full h-full" />
                        </div>
                    </div>

                    <div className="CardsWrapper mt-[20px] lg:mt-[40px] lg:mx-[100px]">
                        {/*FilterHeaders (Reusable Filter FilterHeaders) */}
                        <div className="FilterHeaders flex justify-start">
                            <FilterHeader />
                            <FilterHeader />
                            <FilterHeader />
                        </div>
                   
                        {/*Filter Field*/}
                        <div className="FilterFields mt-[14px] lg:mt-[20px] lg:-mx-[40px] grid grid-cols-4 gap-x-[10px] gap-y-[14px] lg:gap-y-[30px] pb-[20px]">
                            {GardenSetupEntries.slice(0, filterNumber).map((SearchEntry) =>
                            <FilterField key={SearchEntry.id} Entry={SearchEntry.Entry} />
                            )}
                        </div>

                        {/*Next Button */}
                        <div className="BottonWrapper flex justify-end">
                            <div className="NextButton  bg-[#008000] rounded-[5px] lg:rounded-[12px] my-[16px] lg:my-[20px] active:scale-90 transition-all duration-100 ease-out">   
                                <Link to="/products/gardenSetups/method">
                                    <p className="text-center text-[12px] lg:text-[25px] text-white font-inter font-[800] my-0 py-[8px] lg:py-[12px] px-[20px] lg:px-[40px]">NEXT</p>
                                </Link>
                            </div>
                        </div>
                        
                    </div> {/*CardsWrapper */}
                </div> {/*InnerContents */}

            </div> {/*Farming System Wrapper  */}
        </div> //FarmingSystemSearch
    )
}

//Reusable Filter Headers function
function FilterHeader() {
    //SearchBy Keyword
    const SearchBy = "Container";

    return (
        <div className="FilterHeader block mr-[10px] lg:mr-[30px]">
            <div className="flex justify-between bg-[#008000] rounded-[4.5px] lg:rounded-[14px] py-[2px] lg:py-[8px] px-[2px] lg:px-[10px]">
                <div className="block mr-[4px] lg:mr-[20px] my-auto">
                    <p className="text-center text-[#FFFFFF] text-[10px] lg:text-[20px] font-inter font-[800] my-auto">{SearchBy}</p>
                </div>
                <div className="block my-auto">
                    <IoMdCloseCircleOutline className="text-white text-[18px] lg:text-[34px] font-[800]"/>
                </div>
            </div>
        </div>
    )
}

//Reusable Filter Fields function
function FilterField({Entry}) {
    return (
        <div className="FilterHeader mx-auto border-solid border-[#008000] border-[1.2px] lg:border-[3.6px] rounded-[4px] lg:rounded-[12px]">
            <p className="text-center text-[#008000] text-[10px] lg:text-[20px] font-inter font-[800] my-0 px-[4px] lg:px-[40px] py-[4px] lg:py-[10px] ">{Entry}</p>
        </div>
    )
}

export default GardenSetupSearch