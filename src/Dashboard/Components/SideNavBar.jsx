import React from 'react'
import Profile from './SideBarComponents/Profile'
import Items from './SideBarComponents/Items/Items'
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

function SideNavBar({setFuelIn,setIsMenu,isMenu}) {

  return (
    
    <div className={` p-3 duration-100  bg-white drop-shadow-xl ease-linear h-[88svh] ${isMenu?'w-[150px]':'w-[70px]'}`}>
      <p onClick={() => setIsMenu((prev) => !prev)} className='border-2 hover:rounded duration-500 hover:shadow  text-3xl cursor-pointer'>
        {
          isMenu?<RxCross2 className='mx-auto'/>:<HiMenu className='mx-auto'/>
        }
      </p>
      <Profile isMenu={isMenu} />
      <Items setFuelIn={setFuelIn} isMenu={isMenu} />
    </div>
  )
}

export default SideNavBar 