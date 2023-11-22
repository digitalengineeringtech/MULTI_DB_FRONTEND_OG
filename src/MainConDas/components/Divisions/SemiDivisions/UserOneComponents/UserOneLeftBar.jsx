import React from 'react'
import ShowUser from './ShowUser'
import UserOneShowHeader from './UserOneShowHeader'
import PaginatorComponent from '../../../../../components/PageComponents/PaginatorComponent'

function UserOneLeftBar() {
  return (
      <div className=' w-[60%] h-[80svh]'>
          <UserOneShowHeader/>
          <ShowUser/>
          <ShowUser/>
          <ShowUser/>
          <ShowUser/>
          <ShowUser />
          <ShowUser />
          <PaginatorComponent/>
    </div>
  )
}

export default UserOneLeftBar