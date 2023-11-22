import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

function UserOneSearchBar() {
  return (
    <div className='border-2  w-[100%] h-[80px] flex items-center justify-around bg-white'>
      <div>
        <p className='text-sm'>Users Management</p>
      </div>
      <div className='flex border-2 rounded-md px-3 items-center justify-center'>
        <AiOutlineSearch size={20} />
          <input className=' bg-white outline-none p-2 w-[270px] rounded-md' placeholder='Search'/>
      </div>
      <div>
        <button className=' px-2 py-2 rounded-md bg-[#564aa3]'>
        <p className='text-white text-xs'>Create User</p>
       </button>
      </div>
    </div>
  )
}

export default UserOneSearchBar