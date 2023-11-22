import React from 'react'
import Kyawsan from '../../../assets/images/kyawsanStation.png';

function WatchYourAllStations() {
  return (
      <div className='w-[50%] border-none drop-shadow-md h-[300px] p-3  bg-white'>
          <p>Watch Your All Stations</p>
          <div className=' flex flex-col justify-center items-center'>
               <img src={Kyawsan} alt='kyawsan' className='w-[150px]' />   
    <button className='bg-[#1c2b36] group hover:bg-[#283e4e] duration-300'>
       <p className='text-white text-[12px] duration-300 group-hover:underline p-2 px-4'>More Stations</p>
    </button>
        </div>
    </div>
  )
}

export default WatchYourAllStations