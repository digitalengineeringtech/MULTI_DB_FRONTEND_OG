import React, { useEffect } from 'react'
import { RiArrowDropDownFill } from 'react-icons/ri';


function AdminAccDetailsRow({ name, stationId, roles, collectionId, date, permits,handleDelete,userId,no }) {

  return (
      <tr >
      <td className='w-[3.4%]'>{no}</td>
     <td className='w-[12.4%]  text-start'>
     <p>{name}</p>    
    </td>   
     <td className='w-[14.4%] text-start'>{stationId}</td>
     <td className='w-[6.4%] bg-green-200 '>
     <p className='font-bold'>{
    roles[0]?.name?roles[0]?.name:''
    }</p>
     </td>
     <td className='w-[7.4%]'>{date}</td>
     <td className='w-[5.4%] group duration-500'>
     <td className='flex items-center relative  justify-center'>Hover <RiArrowDropDownFill className=' scale-150'/></td>
     <div className=' bg-slate-400 w-[170px] duration-500 group-hover:block hidden py-3 z-30   absolute'>
        {
        permits.map((e) => (
        <p className='hover:bg-blue-300  text-lg text-start duration-500 hover:pl-3 px-2 py-2'>{e.name}</p>
            ))
        }
     </div>
     
    </td>   
      <td className='w-[14.4%] '>
      <div className='flex h-[40px] gap-2'>
    <button className='bg-blue-300 w-[50%] '>Edit</button>  <button onClick={() => handleDelete(userId)} className='bg-red-300  w-[50%] '>Delete</button>    
      </div>
      </td>   
    </tr>
  )
}

export default AdminAccDetailsRow