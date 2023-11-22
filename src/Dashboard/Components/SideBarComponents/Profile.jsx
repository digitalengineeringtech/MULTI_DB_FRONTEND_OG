import React from 'react'
import Manager from '../../../assets/images/manager-boss-svgrepo-com.png';


function Profile({isMenu}) {
  const gg = 'animate-pop-up border-[0.5px]  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 text-black  hover:to-yellow-500 rounded-lg drop-shadow-2xl mx-auto bg-purple-400  w-[100px] p-[10px]   mt-3 flex justify-between flex-col items-center';
  const dd = 'w-full duration-500 drop-shadow-2xl'
  return (


   <div className='my-[40px]'>
          <img className={isMenu?gg:dd} src={Manager} alt="Manager" /> 
           {/* <p className='text-[14px] text-center animate-manger-pop-up  mt-3'>Manager</p> */}
    </div>
  )
}

export default Profile