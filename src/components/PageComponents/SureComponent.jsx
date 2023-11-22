import React from 'react'

function SureComponent({ setOkAdd, okAdd, data,handleClick }) {

  return (
    <div className='absolute top-0 bg-[#21212191] left-0 right-0  bottom-0 flex justify-center items-center'>
   <div className='w-[500px] animate-box-pop-up rounded-md flex flex-col justify-between h-[250px]  p-3 bg-[#fffcfc]'>
   <div className='gap-5  h-[200px] justify-center '>
              <h3 className='text-lg'>Are you sure to Add?</h3>
              <ul className='mt-5 text-lg'>
                      <li>Tank No : {data[0]}</li>
                      <li>Fuel Type : {data[4]}</li>
                      <li>Receive Liters : {data[1]}</li>
                      <li>Driver Name : {data[2]}</li>
                      <li>Bowser No : {data[3]}</li>
              </ul>
    </div>
   <div className=' flex  items-center gap-5 justify-end '>
    <button onClick={handleClick} className=' bg-blue-400 text-white w-[60px] text-[16px]  h-[40px]'>Yes</button> 
    <button onClick={()=>{setOkAdd(!okAdd)}} className='w-[100px] text-white bg-gray-500   h-[40px]'>Cancel</button> 
   </div>
   </div>
         
          
    </div>
  )
}

export default SureComponent