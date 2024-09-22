import { MdSearch } from 'react-icons/md'
import { RiArrowLeftSLine } from "react-icons/ri";

export default function FarmingSystemsSearch() {
  return (
    <div className='font-inter'>
      <p className='text-[48px] font-bold my-0 text-start'>
       <RiArrowLeftSLine />
      </p>
      <form  className="h-[42.188px] lg:h-[100px] flex items-center justify-center border-[#008000] bg-white-100 relative mx-auto">
        <div className="flex justify-between items-center w-[100%] lg:w-[853.653px]  font-[600] h-[100%] rounded-[20px] border-solid border-[5px] bg-white border-[#008000] shadow-lg">
          <input
            type="text"
            className="px-4 text-[15px] lg:text-[28px] text-black/[50%] font-inter font-semibold border-none outline-none my-[20px] w-[217px] lg:w-auto"
            placeholder="Search Farming Systems..."
          />
            <MdSearch  className="text-[58px] freshlyGreenText" />
        </div>
      </form>
      <h1>Hello</h1>
    </div>
  )
}
