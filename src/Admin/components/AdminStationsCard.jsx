import React from 'react'
import {motion} from 'framer-motion';

function AdminStationsCard({active,setActive,data,anime}) {
  return (
     <div onMouseOver={()=>{setActive(true)}}
          onMouseLeave={() => {setActive(false) }} className={`  group relative hover:drop-shadow-lg bg-[#f9f9f9] duration-300 cursor-pointer p-3 h-[400px]   w-[49%]  `}  >
                      <div className=' h-[70%] bg-slate-200 flex items-center justify-center'>
                      <img className='  h-[100%] duration-1000' src={data.src} alt="d" />
                      </div>
                      <div className='h-[30%] flex items-center'>
                       <h3 className='text-[#333] font-semibold text-[3vh]'>{data.title}</h3>
                      </div>
                      <div className='bg-blue-500 duration-300 hidden group-hover:flex  justify-center items-center text-[4vh] absolute top-0 right-0 left-0 bottom-0'>
                      <motion.h3 onMouseOver={()=>{setActive(true)}}
          onMouseLeave={() => {setActive(false) }}  variants={anime} initial="initial"animate={active?"open":"closed"}>    {data.title}</motion.h3>
                      </div>
                  </div>
  )
}

export default AdminStationsCard