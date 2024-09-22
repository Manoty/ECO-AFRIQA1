import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

function ProductsSearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }
  console.log(searchTerm)

  return (
    <div className='relative'>
      <form className="mt-[100px] h-[42.188px] lg:h-[100px]  flex items-center justify-center border-[#008000] bg-white-100 pb-2 z-[20] relative">
        <div className="flex justify-between items-center   w-[100%] lg:w-[853.653px]  font-[600] h-[100%] rounded-[20px] my-[29px] border-solid border-[5px] bg-white border-[#008000] mb-[-150px] mt-[12px] shadow-lg">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 text-[15px] lg:text-[28px] text-black/[50%] font-inter font-semibold border-none outline-none my-[20px] w-[217px] lg:w-auto"
            placeholder="Search For News, Media etc..."
          />
            <MdSearch  className="text-[58px] cursor-pointer freshlyGreenText" />
        </div>
      </form>
    </div>
  )
}

export default ProductsSearchBar