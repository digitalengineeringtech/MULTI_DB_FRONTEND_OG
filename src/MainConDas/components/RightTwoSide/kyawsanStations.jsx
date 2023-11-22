import React from 'react'
import KyawSan from '../../../assets/images/kyawsanStation.png';

function KyawsanStation({title,setNavigation,no,navigation}) {
  return (
   <div onClick={()=>setNavigation(no)} className={`flex h-[50px] group duration-500 cursor-pointer hover:bg-blue-300 items-center  my-2 justify-start gap-3 px-3 ${navigation === no ? "bg-[#1c2b36] text-green-600":""}`}>
                  <img className='w-[40px]' src={KyawSan} alt='kyawsan' />
                  <div>
              <p className='text-[13px] duration-500 group-hover:text-white '>{title}</p>
                  </div>
        </div>
  )
}

export default KyawsanStation