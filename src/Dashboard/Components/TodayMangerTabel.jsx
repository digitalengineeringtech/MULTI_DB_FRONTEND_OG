import React from 'react'
import ToadyTableMangerDetails from './ToadyTableMangerDetails'
import Lottie from "lottie-react";
import manager from '../../assets/images/animation_lmgj7kc8.json'

function TodayMangerTabel({width = '100'}) {
  return (
     <div className={`w-[${width}%] bg-green-400 hover:scale-[1.02] duration-300  rounded-lg drop-shadow-xl h-[400px] border-none  p-3  flex items-center justify-center`}>
      <Lottie animationData={manager} className='p-3 h-[80%]' loop={true} />
    </div>
  )
}

export default TodayMangerTabel