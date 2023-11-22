import React from 'react'
import { Dropdown } from 'primereact/dropdown';


function LanguageComponent({value,setValue}) {
 const fueltypes = [
      { name: 'English', code: 'English' },
      { name: 'မြန်မာ', code: 'Myanmar' }
    ];
  return (
     <div className="flex-3 flex items-center gap-3 ">
          <div className="calendar-container">
                <Dropdown inputId='language' value={value} onChange={(e) => setValue(e.value)} options={fueltypes} optionLabel="name" 
    className="!h-[30px] w-[150px] flex items-center justify-center" placeholder='Language' />
          </div>
          </div>
  )
}

export default LanguageComponent