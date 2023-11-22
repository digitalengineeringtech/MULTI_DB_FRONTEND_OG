/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PumpTest from '../../oneStationComponents/PumpTest'
import OfficeUseBowser from '../../oneStationComponents/OfficeUseBowser'
import Home from '../../../../pages/Home'
import GasStation from '../../../../assets/images/gas-station-fuel-svgrepo-com.png'
import Homecards from '../../../../components/Cards/Homecards'
import SelectionCard from '../../Cards/selectionCard'
import UseGet from '../../hooks/UseGet'
import { useSelector } from 'react-redux'
import { fakeStationData } from '../../../../assets/data'
import { useNavigate } from 'react-router-dom';
import UseGet_1 from '../../hooks/UseGet_1'

function SelectStation({ navigation, setNavigation }) {

        const user = useSelector((state) => state.login);
        const [okData, setOkData] = useState([]);
        const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
        const navigate = useNavigate();

useEffect(() => {
getIt_1(`/station-detail/get/all?accessDb=${user.accessDb}`, user.token);
}, []);
        
useEffect(()=>{
if (data_get_1.result) {
setOkData(data_get_1.result);     
}
},[data_get_1,loading_get_1,error_get_1]);


  return (
    <div   className='w-[100%] min-h-[90svh] bg-gray-300'>
    <div className='py-[50px]  mx-auto flex  flex-wrap justify-center gap-5  items-center'>
        {
    okData.map((e,index)=>(
   <div key={`eit_${index}`} onClick={() => { 
    const queryParams = new URLSearchParams();
    queryParams.set('station', e._id);
    queryParams.set('name', e.name);
    // Construct the URL with parameters
    const url = `?${queryParams.toString()}`;
                                
    navigate(url)
    
                setNavigation(2)
                        }} className='w-[23%] max-w-[300px]'>
                 <SelectionCard 
                 devicCount={e.deviceCount}
                 nozzleCount={e.nozzleCount}
                 title={e.name}
                 img={GasStation} 
                 buttontext={"Check out"} link={"/kyawsan/salessummarbystation"}/>  
            </div>
                ))
        }
    </div>
    {/* <div className='flex  mt-[40px]'>
              <PumpTest />
              <OfficeUseBowser/>
    </div> */}
    </div>
  )
}

export default SelectStation