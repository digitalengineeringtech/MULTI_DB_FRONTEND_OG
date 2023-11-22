import React from 'react'
import Loading from '../../../components/Loading'
import CountUp from 'react-countup'

function Category({color,title,icon,data,todayPrice,todayTotal,todayLiter,loading}) {
  return (
    <div className={`border-l-[5px] animate-pop-up flex justify-between items-center hover:-translate-y-1 hover:scale-[1.03] duration-300 bg-white  rounded-md  text-gray-700  p-5  drop-shadow-xl ${color} w-[25%] h-[110px]`}>
      <div className='content'>
        {
          loading?<Loading/>:''
        }
           <h3 className='text-sm font-bold  text-black font-sans  mb-2'>{title}</h3>
        <p className=' text-sm font-bold  text-black font-sans'>
          <span className=''>Total</span>  -   <span className='text-md font-extrabold'><CountUp delay={20} end={loading?"....":todayTotal} /></span> <span className=' text-xs'>
           MMK
        </span></p>
        <p className='text-sm font-bold mb-1 text-black font-sans'> <span className='text-xs'>Total</span>  - <span className='text-md font-extrabold'><CountUp delay={20} decimals={3} decimal=" . " end={loading?"....":todayLiter} /></span> <span className=' text-xs'>
           Liter
        </span></p>
     
          </div>   
      <div className='flex items-center '>
        {icon}
           <p>{isNaN(todayPrice)?"....":todayPrice}</p>
        </div>

    </div>
  )
}

export default Category