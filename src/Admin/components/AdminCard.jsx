import React from 'react'
import { Link } from 'react-router-dom'

function AdminCard({img,title,link,width}) {
  return (
      <Link to={link}  className={`group relative hover:drop-shadow-lg bg-[#f9f9f9] duration-300 cursor-pointer p-3 h-[400px]   ${width}`}>
     <div className=' h-[70%] py-[30px] bg-slate-200 flex items-center justify-center'>
     <img className='  h-[100%] duration-1000' src={img} alt="d" />
     </div>
     <div className='h-[30%] flex items-center'>
     <h3 className='text-[#333] font-semibold text-[2.5vh]'>{title}</h3>
     </div>
     </Link>
  )
}

export default AdminCard