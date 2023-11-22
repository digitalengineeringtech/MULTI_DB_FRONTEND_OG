import React from 'react'
import UserOneRoleDropDown from './DropDowns/UserOneDropDown'

function RoleEditor({value,setValue,onPress}) {
  return (
      <div className='w-full animate-slide-right'>
          <UserOneRoleDropDown value={value} setValue={setValue} />
          <div className=' mt-3  flex gap-2 items-center'>
              <button  className='p-2 bg-green-500'>Update</button>
              <button onClick={onPress}  className='p-2 bg-red-500'>Cancel</button>
          </div>
    </div>
  )
}

export default RoleEditor