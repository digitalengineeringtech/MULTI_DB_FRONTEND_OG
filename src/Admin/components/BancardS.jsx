import React from 'react'
import keyHole from '../../assets/images/key-hole-svgrepo-com.svg';
import success from '../../assets/images/success-tick-svgrepo-com.png'

function BancardS({setBanSure,title}) {
  return (
     <div className='w-[23%]  hover:translate-y-[-10px] duration-300 leading-8 p-5 bg-[#159013] animate-pop-up'>
        <p className='font-bold mb-2'>{title}</p>
        <div className='bann_button_active  flex items-center justify-center w-[150px] h-[150px] '>
        <img alt='Banned' className='w-[100px] h-[100px]' src={success} />
        </div>
        <p className='text-[16.2px] mt-2'>Processing</p>
        <div className=' flex items-center cursor-pointer group hover:drop-shadow-lg justify-between'>
                  <p className='text-[20px] font-bold'>Change Status --</p>
                  <img src={keyHole} onClick={()=>setBanSure((prev)=>!prev)} className='w-[40px] text-green-600 duration-500 group-hover:rotate-180' alt='key' />
        </div>
    </div>
  )
}

export default BancardS