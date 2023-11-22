import React from 'react'
import { Dropdown } from 'primereact/dropdown';


function UserOneRoleDropDown({value,setValue}) {
    const roletypes = [
      { name: 'Manager', code: '1' },
      { name: 'Cashier', code: '2' },
    ];
  return (
     <div className="flex-3 text-xs ">
          <label htmlFor="calendar-12h" className="font-bold block mb-2">
           Role
          </label>
          <div className="calendar-container text-xs">
                <Dropdown  value={value} onChange={(e) => setValue(e.value)} options={roletypes} optionLabel="name" 
    className="!h-[30px] w-[250px] text-xs flex items-center justify-center" placeholder='All' />
          </div>
          </div>
  )
}

export default UserOneRoleDropDown;