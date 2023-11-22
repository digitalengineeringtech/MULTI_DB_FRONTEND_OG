/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import FuelTypeTotal from '../../MainConDas/components/oneStationComponents/FuelTypeTotal'
import PumpTest from '../../MainConDas/components/oneStationComponents/PumpTest'
import { EnglishCompanyTables } from '../../Language/English/englishCompanyTables';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PumpMeter from '../../MainConDas/components/oneStationComponents/PumpMeter';
import StockBalance from '../../MainConDas/components/oneStationComponents/StockBalance';
import OfficeUseBowser from '../../MainConDas/components/oneStationComponents/OfficeUseBowser';
import StationUse from '../../MainConDas/components/oneStationComponents/StationUse';

export const MiniBudget = () => {
  const [language, setLanguage] = useState(EnglishCompanyTables);
  const user = useSelector((state) => state.login);
    const navigate = useNavigate();
  const token = user.token;  
  const stationId = user.stationId;
  
    useEffect(() => {
      navigate(`/${user.accessDb}/dashboard?station=${stationId}`)
    }, [])
    
  return (
      <div className=' w-[calc(100%-70px)] relative  dashboard-right mx-auto h-[88svh] overflow-y-scroll '>
        <div className='flex'>
            <FuelTypeTotal language={language}/>
            <PumpTest language={language}/>  
        </div>
        <div className='flex w-[100%]'>
        <OfficeUseBowser language={language} />
        <StationUse language={language} />
    </div>
        <div className='flex w-[100%]'>
              <PumpMeter language={language} />
        </div>
         <div className='flex w-[100%]'>
        <StockBalance edit={false} kk={true} language={language}  />
        </div>
    </div>
  )
}
