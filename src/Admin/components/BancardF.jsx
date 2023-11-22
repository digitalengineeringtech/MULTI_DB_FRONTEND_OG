import React from 'react'
import Banned from '../../assets/images/banned-sign-svgrepo-com.png';
import keyHole from '../../assets/images/key-hole-svgrepo-com.svg';


export const BancardF = ({setBanSure,title}) => {
  return (
       <div className=' w-[23%] hover:translate-y-[-10px] duration-300 leading-8 p-5 bg-[#d71d1d] animate-pop-up'>
          <p className='font-bold text-[18px] mb-2'>{title}</p>
        <div className='bann_button  flex items-center justify-center w-[150px] h-[150px] '>
        <img alt='Banned' className='w-[100px] h-[100px]' src={Banned} />
        </div>
        <p className='text-[16.2px] mt-2'>Banned</p>
        <div className='cursor-pointer hover:drop-shadow-lg flex group items-center justify-between'>
                  <p className='text-[20px] font-bold'>Change Status --</p>
                  <img src={keyHole} onClick={()=>setBanSure((prev)=>!prev)} className='w-[40px] text-green-600 duration-500 group-hover:rotate-180' alt='key' />
        </div>
    </div>
  )
}
