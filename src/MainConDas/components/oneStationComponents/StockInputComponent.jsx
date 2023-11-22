import React from 'react'

function StockInputComponent({setAdjustOpen,adjust,setAdjust,makeAdjust,tank,date,ogAdjust}) {
  return (
      <div className='fixed  z-50 top-0 left-0  right-0 bottom-0 flex items-center bg-[#5453533e] justify-center '>
          <div className='bg-white rounded flex flex-col justify-between items-between p-3  w-[500px] h-[250px]'>
        <p>Fuel Type : <span>{tank}</span></p>
        <p>Total G/L : <b className='text-red-500'>{ogAdjust}</b></p>

          <p>Date : <span>{date}</span></p>
          <div className='flex items-center gap-3'>
          <p>Adjust</p>
            <input type='number' value={adjust} onChange={(e)=>setAdjust(e.target.value)} className='border-2 w-[100%] p-3' placeholder='adjust' />
          </div>
          <div className='flex mt-[10px] items-center justify-start gap-5'>
            <button onClick={makeAdjust} className='bg-blue-600 hover:bg-blue-700 cursor-pointer text-white p-2 rounded gap-2 flex items-center justify-center'>Adjust</button>
            <button className='bg-red-600 hover:bg-red-700 cursor-pointer text-white p-2 rounded gap-2 flex items-center justify-center' onClick={()=>setAdjustOpen(false)}>Cancel</button>
          </div>
          </div>
    </div>
  )
}

export default StockInputComponent