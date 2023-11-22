import React from 'react'
import TROPHY from '../../assets/images/trophy-svgrepo-com.png'

function Stations() {
  return (
    <div className='w-[50%]  hover:-translate-y-1 hover:scale-[1.01] duration-300 bg-white rounded-2xl drop-shadow-2xl h-[500px]'>
      <div className=' rounded-t-2xl  bg-gray-100 h-[50px] flex justify-start items-center px-[30px] font-semibold'><p>Stations Trophy</p></div>
      <div className='overflow-scroll  bg-gray-100 h-[400px]'>
         <ul className='flex flex-col gap-3 p-3 bg-[#707071]'>
          <li className='p-3 border-[0.5px] border-gray-50  flex justify-around items-center h-[80px]  bg-[#181F2C] text-white'>
            <p>No.1</p>
            <p>Station 0.27</p>
            <img  className='w-[50px]' src={TROPHY} alt='trophy' />
        </li>
          <li className='p-3 border-[0.5px] border-gray-50  flex justify-around items-center h-[80px]  bg-[#181F2C] text-white'>
              <p>No.2</p>
            <p>Station 0.27</p>
            <img  className='w-[50px]' src={TROPHY} alt='trophy'/>
        </li>
          <li className='p-3 border-[0.5px] border-gray-50  flex justify-around items-center h-[80px] bg-[#181F2C] text-white'>
            <p>No.3</p>
            <p>Station 0.27</p>
            <img  className='w-[50px]' src={TROPHY} alt='trophy' />
        </li>
          <li className='p-3 border-[0.5px] border-gray-50  flex justify-around items-center h-[80px] bg-[#181F2C] text-white'>
            <p>No.4</p>
            <p>Station 0.27</p>
            <img  className='w-[50px]' src={TROPHY} alt='trophy' />
        </li>
          <li className='p-3 border-[0.5px] border-gray-50  flex justify-around items-center h-[80px]  bg-[#181F2C] text-white'>
            <p>No.5</p>
            <p>Station 0.27</p>
            <img  className='w-[50px]' src={TROPHY} alt='trophy' />
        </li>
      </ul>
     </div>
    </div>
  )
}

export default Stations