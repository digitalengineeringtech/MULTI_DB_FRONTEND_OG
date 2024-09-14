import React from 'react'
import { Dropdown } from 'primereact/dropdown';


function TankNoComponent({value,setValue}) {
 const fueltypes = [
      { name: 'Please Select Tank No', code: 'Please' },
      { name: '1', code: '1' },
      { name: '2', code: '2' },
      { name: '3', code: '3' },
      { name: '4', code: '4' },
      { name: '5', code: '5' },
      { name: '6', code: '6' },
      { name: '7', code: '7' },
      { name: '8', code: '8' },
      { name: '9', code: '9' },
      { name: '10', code: '10' },
      { name: '11', code: '11' },
      
       
    
      
        
    ];
  return (
     <div className="flex-3 ">
          <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    Tank No.
          </label>
          <div className="calendar-container">
                <Dropdown  value={value} onChange={(e) => setValue(e.value)} options={fueltypes} optionLabel="name" 
    className="!h-[30px] w-[250px] flex items-center justify-center" placeholder='All' />
          </div>
          </div>
  )
}

export default TankNoComponent