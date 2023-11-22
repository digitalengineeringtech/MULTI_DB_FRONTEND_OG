import React from 'react'

function AdminForm({userEmail,setUserEmail,userPhone,setUserPhone,userName,setUserName,userPassword,setUserPassword,userPasConfirmation,setUserPasConfirmation}) {
  return (
     <div className='w-[33.33%] gap-3 flex flex-wrap'>
     <div className='w-[100%]'>
          <p>Email</p>
          <input onChange={(e)=>setUserEmail(e.target.value)} value={userEmail} className='border-[1px] px-3 w-[100%] h-[50px] rounded-md' placeholder='Email'/>
     </div>
    <div className='w-[100%]'>
          <p>Phone</p>
          <input value={userPhone} onChange={(e)=>setUserPhone(e.target.value)} className='border-[1px] px-3 w-[100%] h-[50px] rounded-md' placeholder='Phone'/>
     </div>
    <div className='w-[100%]'>
          <p>Name</p>
          <input value={userName} onChange={(e)=>setUserName(e.target.value)} className='border-[1px] px-3 w-[100%] h-[50px] rounded-md' placeholder='Name'/>
     </div>
    <div className='w-[100%]'>
          <p>Password</p>
          <input value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} className='border-[1px] px-3 w-[100%] h-[50px] rounded-md' placeholder='Password'/>
     </div>
    <div className='w-[100%]'>
          <p>Password Confirmation</p>
          <input value={userPasConfirmation} onChange={(e)=>setUserPasConfirmation(e.target.value)} className='border-[1px] px-3 w-[100%] h-[50px] rounded-md' placeholder='Password'/>
     </div>
    </div>
  )
}

export default AdminForm