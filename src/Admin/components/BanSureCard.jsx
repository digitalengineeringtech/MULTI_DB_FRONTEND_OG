import React from 'react'

export const BanSureCard = ({setBanSure}) => {
  return (
     <div className='absolute top-0 h-[100svh] overflow-hidden left-0 right-0 flex items-center justify-center bottom-0 bg-[#7878782f]'>
    <div  className='w-[450px] rounded-md bg-white animate-box-pop-up'>
    <div className=' bg-blue-900 text-white drop-shadow-md h-[50px] p-2 flex items-center justify-start'>
    <p className="">Are you sure to shut down this station?</p>
    </div>
  <div className='flex mt-2 flex-col p-3 justify-start gap-2'>
  <input placeholder='Enter station Name' className='border-[0.5px]  mb-[2px]  h-[50px] border-black px-2'/>
  <input placeholder='Enter station Id' className='border-[0.5px]  h-[50px] border-black px-2'/>
  <div className='flex mt-[5px]'>
  <div>
  <input type="radio" id="allow" name="fav_language" value="allow"/>
  <label for="allow">Allow</label>
  </div>
  <div className=''>
  <input type="radio" id="dead" name="fav_language" value="dead"/>
  <label for="dead">Dead</label>
</div>
  </div>
   </div>
   <div className='p-2 flex items-center gap-2 justify-end'>
    <button className='border-[0.5px]  cursor-pointer p-2 text-white shadow bg-green-600'>Down</button>
    <button onClick={()=>setBanSure((prev)=>!prev)} className='border-[0.5px] text-white shadow cursor-pointer  p-2 bg-red-500'>Cancel</button>
   </div>
    </div>
   </div>
  )
}
