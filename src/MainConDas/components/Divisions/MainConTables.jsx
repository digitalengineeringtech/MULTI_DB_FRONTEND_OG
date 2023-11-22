import React, { useEffect, useState } from 'react'
import FuelTypeTotal from '../oneStationComponents/FuelTypeTotal'
import PumpTest from '../oneStationComponents/PumpTest'
import OfficeUseBowser from '../oneStationComponents/OfficeUseBowser'
import StationUse from '../oneStationComponents/StationUse'
import TankStock from '../oneStationComponents/TankStock'
import PumpMeter from '../oneStationComponents/PumpMeter'
import HeadCap from '../HeadCap'
import { EnglishCompanyTables } from '../../../Language/English/englishCompanyTables'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MyanamrCompanyTables } from '../../../Language/Myanmar/myanmarCompanyTables'
import StockBalance from '../oneStationComponents/StockBalance'


function MainConTables({ navigation, setNavigation}) {
  const [language, setLanguage] = useState(EnglishCompanyTables);

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanamrCompanyTables);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishCompanyTables);
    }
  }, [ user,navigate,dispatch]);
  
  return (
    <div className='w-[100%]'>
      <HeadCap station={language.station} setNavigation={setNavigation} title={language.company_tables}/>
    <div className='flex w-[100%]'>
        <FuelTypeTotal language={language} />
        <PumpTest language={language} />
    </div>
    <div className='flex w-[100%]'>
        <OfficeUseBowser language={language} />
        <StationUse language={language} />
    </div>
    {/* <div className='flex w-[100%]'>
         <TankStock language={language}/>
    </div> */}
    <div className='flex w-[100%]'>
        <StockBalance kk={false} edit={false} language={language} setNavigation={setNavigation} />
    </div>
    <div className='flex w-[100%]'>
              <PumpMeter language={language} />
    </div>
    </div>
  )
}

export default MainConTables