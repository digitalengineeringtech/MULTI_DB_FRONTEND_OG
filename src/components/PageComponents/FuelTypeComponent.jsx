import React from 'react'
import { Dropdown } from 'primereact/dropdown';


function FuelTypeComponent({value,setValue,title="Fuel Type"}) {
 const fueltypes = [
       { name: 'All', code: 'Please' },
      { name: '001-Octane Ron(92)', code: '001-Octane Ron(92)' },
      { name: '002-Octane Ron(95)', code: '002-Octane Ron(95)' },
      { name: '004-Diesel', code: '004-Diesel' },
      { name: '005-Premium Diesel', code: '005-Premium Diesel' },
       
    
      
        
    ];
  return (
     <div className="flex-3 ">
          <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    {title}
          </label>
          <div className="calendar-container">
                <Dropdown inputId='claender-12h' value={value} onChange={(e) => setValue(e.value)} options={fueltypes} optionLabel="name" 
    className="!h-[30px] w-[250px] flex items-center justify-center" placeholder='All' />
          </div>
          </div>
  )
}

export default FuelTypeComponent