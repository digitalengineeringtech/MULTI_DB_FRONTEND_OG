import React from 'react'
import { Dropdown } from 'primereact/dropdown';


function UserOnePermitDropDown({value,setValue}) {
    const roletypes = [
      { name: 'View', code: '1' },
      { name: 'Edit', code: '2' },
      { name: 'Read', code: '3' },
      { name: 'Delete', code: '4' },
    ];
  return (
     <div className="flex-3 text-xs ">
          <label htmlFor="calendar-12h" className="font-bold block mb-2">
           Permits
          </label>
          <div className="calendar-container text-xs">
        <Dropdown  value={value} onChange={(e) => setValue(e.value)} options={roletypes} optionLabel="name" 
    className="!h-[30px] w-[250px] text-xs flex items-center justify-center" placeholder='All' />
          </div>
          </div>
  )
}

export default UserOnePermitDropDown;