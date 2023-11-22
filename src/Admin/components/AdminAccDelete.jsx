import React, { useEffect, useState } from 'react'

function AdminAccDelete({ setIsDelete,handleSureDelete }) {
    
    const [isDisable, setIsDisable] = useState(true);
    const [setYes, setIsYes] = useState('');

    useEffect(() => {
       if (setYes === "Yes") {
       setIsDisable(false);
       } else {
       setIsDisable(true);
       }
    }, [setYes]);

  return (
    <div className='border-2 bg-[#a6a4a45c] fixed top-0 right-0 left-0 bottom-0 h-[100svh] overflow-hidden z-50 flex items-center justify-center'>
    <div className='rounded-lg w-[400px] flex flex-col justify-around items-center p-3 drop-shadow-md h-[200px] bg-white'>
    <h3 className='w-full '>Are you sure to delete this account?</h3>
    <h3 className='w-full text-gray-400 '>Enter - Yes</h3>
    <input  value={setYes} onChange={(e)=>setIsYes(e.target.value)} placeholder='Station Name' className=' my-[10px] h-[50px] px-2 rounded-md border-2 w-full'></input>
    <div className=' w-full flex items-center justify-between text-sm'>
    <button disabled={isDisable} className='bg-red-600 disabled:bg-gray-300 p-2 rounded-md' onClick={handleSureDelete}>Delete</button>
    <button className='bg-green-600 p-2 rounded-md' onClick={()=>setIsDelete(false)}>Cancel</button>
    </div>
    </div>
    </div>
  )
}

export default AdminAccDelete