import React from 'react'
import Profile from '../../../../../assets/images/user.webp'

function ShowUser() {
  return (
    <div className='w-[100%] hover:bg-blue-50 cursor-pointer my-3 bg-white p-2 text-xs drop-shadow-md gap-3 flex  items-center'>
          <div className='w-[33.33%] flex gap-2'>
              <img className='w-[40px] rounded-lg' src={Profile} alt="profile" />
          <div className='flex text-xs flex-col justify-center items-start'>
              <p>Y2KZOE</p>
              <p>y2kzoe664@gmail.com</p>
          </div>
          </div>

          <div className='w-[33.33%] text-center'>
                  <p>Manager</p>
          </div>
          <div className='w-[33.33%] text-center'>
                  <p>Kyaswan_031</p>
          </div>

    </div>
  )
};


export default ShowUser