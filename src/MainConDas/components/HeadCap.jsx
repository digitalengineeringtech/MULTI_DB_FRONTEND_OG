import React from 'react'

function HeadCap({title,station,setNavigation}) {
  return (
      <div className='border-2 drop-shadow-md mt-4 bg-gray-200 py-4 uppercase text-lg text-center'><span className=' cursor-pointer' onClick={() => setNavigation(1)}>{station}</span> / {title}</div>
  )
}

export default HeadCap