import React from 'react'

function UserOneShowHeader() {
  return (
   <div className='w-[100%]   bg-gray-300 p-2 justify-around text-xs  gap-3 flex  items-center'>
          <div className='flex w-[33.33%] text-xs text-center flex-col justify-center items-start'>
             <p>User</p>
          </div>
          <div className='flex w-[33.33%] justify-around'>
                  <p className='px-4 py-2'>Role</p>
          </div>
            <div className=' text-center w-[33.33%]'>
                  <p>Station</p>
          </div>
    </div>
  )
}

export default UserOneShowHeader