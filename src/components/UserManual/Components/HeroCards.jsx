import React from 'react'

function HeroCards() {
  return (
    <div className='w-full'>
          <div className='bg-white w-full h-[180px] drop-shadow-xl rounded-2xl'>1</div>   
          <div className='flex gap-3 mt-3 mb-3'>
              <div className='bg-white w-[50%] h-[200px] drop-shadow-2xl rounded-2xl'>2</div>
              <div className='bg-white w-[50%] h-[150px] drop-shadow-2xl rounded-2xl'>2</div>
          </div>
          <div className='bg-white w-full h-[190px] rounded-2xl'>1</div>   

    </div>
  )
}

export default HeroCards