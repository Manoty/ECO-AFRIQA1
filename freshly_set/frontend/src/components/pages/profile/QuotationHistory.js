import React from 'react'

function QuotationHistory() {
  return (
    <section className='font-inter w-[88%]'>
      <p className='text-[#008000] font-bold capitalize text-start'>your quotation history</p>
      <div className='flex flex-col gap-5'>
      <div className='border border-solid border-slate-200 shadow rounded-[9.87px] flex justify-between p-4 font-black'>

        <div className='h-[127.97px] flex gap-4'>
          <img
            src='/static/media/productsHero.png'
            alt='Quotation product'
            className='w-[113px] min-h-full object-cover rounded-[4.935px]'
          />
          <div className='flex flex-col justify-between items-start'>
            <p className='flex flex-col m-0 text-start'>
              <span className='text-[14.82px] text-[#000000]/60 capitalize'>Hydroponic System</span>
              <span className='text-[12.86px] text-[#000000]/40 pt-[5px] capitalize'>Farming System</span>
            </p>
            <p className='uppercase text-[12.26px] m-0 text-[#000000]/70 text-start'>30th september 2024</p>
          </div>
        </div>

        <div className='flex gap-2'>
            <p className='uppercase text-red-500'>email</p>
          <div className='flex h-full items-end cursor-pointer'>
            <img
              src='/static/media/docLogo.png'
              alt='document logo'
              className='w-[34.57px]'
            />
          </div>
        </div>
      </div>

      <div className='border border-solid border-slate-200 shadow rounded-[9.87px] flex justify-between p-4 font-black'>

        <div className='h-[127.97px] flex gap-4'>
          <img
            src='/static/media/gardens1.png'
            alt='Quotation product'
            className='w-[113px] min-h-full object-cover rounded-[4.935px]'
          />
          <div className='flex flex-col justify-between'>
            <p className='flex flex-col m-0'>
              <span className='text-[14.82px] text-[#000000]/60 capitalize text-start'>raised bed gardens</span>
              <span className='text-[12.86px] text-start text-[#000000]/40 pt-[5px] capitalize'>garden setups</span>
            </p>
            <p className='uppercase text-[12.26px] m-0 text-[#000000]/70 text-start'>30th september 2024</p>
          </div>
        </div>

        <div className='flex gap-2'>
          <div className=''>
            <p className='uppercase text-red-500'>email</p>
          </div>
          <div className='flex h-full items-end cursor-pointer'>
            <img
              src='/static/media/docLogo.png'
              alt='document logo'
              className='w-[34.57px]'
            />
          </div>
        </div>
      </div>

      <div className='border border-solid border-slate-200 shadow rounded-[9.87px] flex justify-between p-4 font-black'>

        <div className='h-[127.97px] flex gap-4'>
          <img
            src='/static/media/veggieRack2.png'
            alt='Quotation product'
            className='w-[113px] min-h-full object-cover rounded-[4.935px]'
          />
          <div className='flex flex-col justify-between items-start'>
            <p className='flex flex-col m-0'>
              <span className='text-[14.82px] text-[#000000]/60 capitalize text-start'>vertical farming</span>
              <span className='text-[12.86px] text-start text-[#000000]/40 pt-[5px] capitalize text-start'>Farming System</span>
            </p>
            <p className='uppercase text-[12.26px] m-0 text-[#000000]/70 text-start'>30th september 2024</p>
          </div>
        </div>

        <div className='flex gap-2'>
          <div className=''>
            <p className='uppercase text-red-500'>email</p>
          </div>
          <div className='flex h-full items-end cursor-pointer'>
            <img
              src='/static/media/docLogo.png'
              alt='document logo'
              className='w-[34.57px]'
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default QuotationHistory