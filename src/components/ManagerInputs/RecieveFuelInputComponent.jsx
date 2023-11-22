import React from 'react'
import TankComponent from '../PageComponents/TankComponent'

function RecieveFuelInputComponent({tankNo,setTankNo,inputContainer,label,tankLevel,setTankLevel,input,drivername,setDriverName,bowser,setBowser,handleClick}) {
  return (
    <div className='my-[50px] bg-gray-200 py-[0px] text-md px-[30px]'>
            <h3 className='text-lg mx-auto font-semibold text-center w-[200px] border-dashed border-2 border-blue-500 mb-[50px]'>Manager Input</h3>
            <div className='first my-3 flex gap-6 justify-start items-center'>
              <TankComponent value={tankNo} setValue={setTankNo}/>
               <div className={inputContainer}>
                <h3 className={label}>Receive Liters</h3>
                <input required value={tankLevel} onChange={(e)=>setTankLevel(e.target.value)} className={input} placeholder='0000' />
              </div>
               <div className={inputContainer}>
                <h3 className={label}>Driver Name</h3>
                <input required value={drivername} onChange={(e)=>setDriverName(e.target.value)} className={input} placeholder='U Mg Mg' />
              </div>
            </div>
            <div className='first my-3 flex gap-6 justify-start items-center'>
              <div className={inputContainer}>
                <h3 className={label}>Bowser No</h3>
                <input required value={bowser} onChange={(e)=>setBowser(e.target.value)} className={input} placeholder='00/0000' />
              </div>
              
            </div>
            <div className='buttons'>
              <div className=' flex items-center justify-center mt-12'>
                  <button id="fuelButton" onClick={handleClick}   className=' bg-green-700 text-white hover:bg-green-600 w-[150px] h-[40px] rounded-md' >Add</button>
              </div>
            </div>
        </div>
  )
}

export default RecieveFuelInputComponent