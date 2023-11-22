import React from 'react'
import Categories from './Categories'
import FuelTypeCarts from './Charts/FuelTypeCarts'
import Instructions from './Instructions'
import Overall from './Overall'
import Balance from './Balance'
import { BiRefresh } from 'react-icons/bi';
import TodayMangerTabel from './TodayMangerTabel'
import TodayCategory from './TodayCategory'

function RightPage() {

  const handleReload = () => {
       window.location.reload();
  };

  return (
    <div className='  w-[calc(100%-70px)]  dashboard-right mx-auto h-[88svh] overflow-y-scroll p-[20px]'>
    <div className='flex justify-end items-center'>
        <button onClick={handleReload} className='flex animate-slide-right group items-center gap-2 bg-gradient-to-r duration-500 hover:-translate-y-1 rounded-xl drop-shadow-2xl from-pink-500 to-yellow-500  text-black p-2 border-2'><BiRefresh className=' duration-500 group-hover:-rotate-45 rotate-45 scale-[1.5]'/>Reload</button>
    </div>
    <Categories/>
    <div className='flex gap-[20px] mt-[20px] justify-between items-center'>
    <Overall/> 
    <Balance/>
    </div>
    <div className='flex gap-[20px] mt-[20px] justify-between items-center'>
        {/* <NozzleCarts/> */}
    <TodayMangerTabel width='50'/>
    <FuelTypeCarts/>
      </div>
   <div className='mt-[20px]'>
   <TodayCategory/>
    </div>
    <div className='flex gap-[20px] justify-between mt-[20px]'>
    <Instructions/>
    </div>
    </div>
  )
}

export default RightPage