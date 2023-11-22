import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai';
import UserOnePermitDropDown from './DropDowns/UserOnePermitDropDown';

function UserOnePermitsEdit() {
  return (
      <div className='py-4  bg-[#fcfcfc] relative'>
          <UserOnePermitDropDown />   
          <button className='p-3 px-10 mb-5 mt-2 bg-green-500 relative'>Add</button>
     <div className='flex gap-2 mt-3 items-center '>
          <button className='p-3 bg-[rgb(255,165,2)] relative'>
              <p>View</p>
              <AiTwotoneDelete className='absolute top-[-7px] right-[-7px]' size={25} />
           </button>
          <button className='p-3 bg-[#ffa502] relative'>
              <p>Edit</p>
              <AiTwotoneDelete  className='absolute top-[-7px] right-[-7px]' size={25} />
           </button>
          <button className='p-3 bg-[#ffa502] relative'>
              <p>Read</p>
              <AiTwotoneDelete  className='absolute   top-[-7px] right-[-7px]' size={25} />
           </button>
          <button className='p-3 bg-[#ffa502] relative'>
              <p>Delete</p>
              <AiTwotoneDelete  className='absolute top-[-7px] right-[-7px]' size={25} />
           </button>
        </div>
   </div>
  )
}

export default UserOnePermitsEdit