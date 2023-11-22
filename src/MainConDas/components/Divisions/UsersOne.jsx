import React from 'react'
import UserOneSearchBar from './SemiDivisions/UserOneComponents/UserOneSearchBar'
import UserOneLeftBar from './SemiDivisions/UserOneComponents/UserOneLeftBar'
import UserOneRightBar from './SemiDivisions/UserOneComponents/UserOneRightBar'

function UsersOne() {
  return (
      <div className='w-[83%]  relative'>
      <UserOneSearchBar />
      <div className='flex gap-2 p-3 justify-center'>
        <UserOneLeftBar />
        <UserOneRightBar/>
      </div>
    </div>
  )
}

export default UsersOne