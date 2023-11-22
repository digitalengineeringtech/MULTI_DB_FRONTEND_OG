import React, { useEffect, useState } from 'react'
import ToggleButton from 'react-toggle-button'
import UsePost_11 from '../../MainConDas/components/hooks/UsePost_11';
import { useSelector } from 'react-redux';
import UsePatch_1 from '../../MainConDas/components/hooks/UsePatch_1';

export const AdminGoPprd = ({ title,img, st, permission,collectionId,handleClick }) => {

  return (
    <div className='w-[24%] hover:translate-y-[-8px] hover:drop-shadow-lg border-[1px] border-gray-300 shadow-black duration-300 h-[140px] bg-gray-400  '>
    <div className='w-full h-[75px] border-b-[1px]  bg-gray-300  p-3 flex justify-between items-center'>
              <div>
              <img className='w-[60px] ' src={img} alt='kk'/>
              </div>
              <div>
          <h2 className='font-bold text-[#333]'>{title}</h2>
              <h2 className='font-bold text-[#333]'>Total St. - {st} st</h2>
              </div>
    </div>
    <div className='p-3  h-[65px] flex items-center justify-between'>
        {
          permission? <div className=' bg-gradient-to-r border-[0.5px] border-[#333] from-green-500 from-10% via-green-500 via-30% to-emerald-500 to-90% drop-shadow text-sm px-2 inline-block p-1  rounded-2xl '>active PPRD</div>   : <div className=' bg-gradient-to-r border-[0.5px] border-[#333] from-gray-500 from-10% via-gray-500 via-30% to-gray-500 to-90% drop-shadow text-sm px-2 inline-block p-1  rounded-2xl '>Inactive PPRD</div>   
    }        
       <ToggleButton
  
  value={permission}
  onToggle={()=>handleClick(collectionId)} />
    </div>

    </div>
  )
}
