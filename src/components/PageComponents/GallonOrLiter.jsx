import React, { useEffect, useState } from 'react'
import { Checkbox } from 'primereact/checkbox'

function GallonOrLiter({setValue,isSearch,setOklUnit,titleOne,titleTwo}) {
    const [units, setUnits] = useState(['liter']);

    const handleOnChange = (e) => {
        let _units = [...units];

        _units.splice(_units.indexOf(e.value), 1);

        if (e.checked) _units.push(e.value);
        setUnits(_units);
        setOklUnit(_units);

    };

  useEffect(() => {
       setValue(units)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isSearch])

  return (
      <div className='flex  mt-[20px] items-center  justify-start'>
     <div>
              <Checkbox inputId='liter'
                  onChange={handleOnChange}
                  name="Fuelunit"
                  value="liter"
                  checked={units.includes('liter')}
              />        
        <label htmlFor='liter' className='m-2'>{titleOne}</label>
      </div>
      <div>   
              <Checkbox inputId='gallon'
                  onChange={handleOnChange}
                  name="Fuelunit"
                  value="gallon"
                  checked={units.includes('gallon')}
              />
        <label htmlFor='gallon' className='m-2'>{titleTwo}</label>
      </div>
    </div>
  )
}

export default GallonOrLiter