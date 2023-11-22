import React from 'react'
import Station from '../../../../../assets/images/maincon_banner.webp'

function FuelStationDetailsOne({title,total,totalPrice,ninety2,ninety5,diesel,pdiesel}) {
  return (
    <div className='w-[97%] p-3 bg-white drop-shadow-md gap-5 mt-4 flex mx-auto'>
        <div className='w-[50%] rounded-lg p-5 flex-col gap-4 bg-[#1c2b36] flex justify-start Alfie hellobg-whit'>
        <h3 className='text-[24px] text-[#4ade80] text-center font-extrabold'>{title}</h3>
        <ul className='mt-[30px] text-left text-[white] flex flex-col gap-3 items-start'>
        <p className='text-[20px] text-[#4ade80] text-center font-extrabold'>{total} : <span  className=' text-2xl'>{totalPrice ?totalPrice:"..."} mmk</span></p>
        <p className='text-[20px] text-[#4ade80] text-center font-extrabold'>Octane Ron (92) : <span className='text-2xl'>{(ninety2  ?ninety2:"...")} li</span></p>
        <p className='text-[20px] text-[#4ade80] text-center font-extrabold'>Octane Ron (95) : <span className='text-2xl'>{(ninety5 ? ninety5:"...")} li</span></p>
        <p className='text-[20px] text-[#4ade80] text-center font-extrabold'>Diesel : <span className='text-2xl'>{(diesel ?diesel:"...")} li</span></p>
        <p className='text-[20px] text-[#4ade80] text-center font-extrabold'>Premium Diesel : <span className='text-2xl'>{(pdiesel ?pdiesel:'...')} li</span></p>
      </ul>
        </div>
        <img className='w-[50%]' src={Station} alt="station" />
     </div>
  )
}

export default FuelStationDetailsOne