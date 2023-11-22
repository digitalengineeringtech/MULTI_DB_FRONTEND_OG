import React from 'react'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';



function NaviItems({ icon, title, drop = false, selected, work, onPress, navigation, no }) {
  
  return (
    <div onClick={selected?()=>selected((prev)=>!prev):onPress} className={`flex flex-row duration-300 items-center group justify-between text hover:bg-[#18252f] cursor-pointer py-2 text-white gap-3 px-5 ${navigation === no?" bg-green-600 text-black":""}`}>
       <div className='flex items-center justify-center gap-4'>
           {icon}
        {
          title? <p className=' animate-slide-left duration-300 select-none  group-hover:text-white font-extralight  text-[13px]'>{title}</p>:''
         }
       </div>
          {
              drop === true ? work ? <FaAngleDown color='#7698b0'/>:<FaAngleRight color='#7698b0'/>:''
          }
    </div>
  )
}

export default NaviItems