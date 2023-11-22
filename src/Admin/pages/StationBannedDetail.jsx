import React, { useEffect, useState } from 'react'

import { BancardF } from '../components/BancardF';
import BancardS from '../components/BancardS';
import { BanSureCard } from '../components/BanSureCard';
import { ActivateBanCard } from '../components/ActivateBanCard';
import UseGet_1 from '../../MainConDas/components/hooks/UseGet_1';
import { useSelector } from 'react-redux';

function StationBannedDetail() {
  const [banSure, setBanSure] = useState(false);
  const [okData, setOkData] = useState([]);
  const [{data_get_1,loading_get_1,error_get_1},getIt_1] = UseGet_1();
  const user = useSelector((state) => state.login);
    
  useEffect(() => {
      getIt_1('/close-permission', user.token);
  }, []); 
    
    useEffect(() => {
        if (data_get_1.result) {
            console.log(data_get_1.result);
            setOkData(data_get_1.result);
        }
    }, [data_get_1,loading_get_1,error_get_1]);
    
  return (
  <div className={`min-h-[100vh] relative`}>
  <div className=' w-[90%]  items-center justify-center  flex-wrap  mx-auto flex gap-3 py-[150px]'>
   <ActivateBanCard setOkData={setOkData}/>
   {
    okData.map((e, index) => {
        if (e.mode === "allow") {
            return <BancardS title={e.stationDetailId} setBanSure={setBanSure} />
        } else {
            return <BancardF title={e.stationDetailId} setBanSure={setBanSure}/>
        }
    })
   }
   </div>
   {/* {
    banSure && <BanSureCard setBanSure={setBanSure}/>
   } */}
  </div>
  )
}

export default StationBannedDetail