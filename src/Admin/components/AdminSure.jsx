import React, { useEffect, useState } from 'react'
import UsePatch_1 from '../../MainConDas/components/hooks/UsePatch_1';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';

function AdminSure({ setIsSure, stationName, stationLiense, stationLocation, stationDeviceCount, stationNozzleCount,stationCode,setStationLoading,setData }) {
  
 const [{ data_pt_1, loading_pt_1, error_pt_1 }, patchIt_1] = UsePatch_1(); 
  const user = useSelector((state) => state.login);
  const [sureLoading, setSureLoading] = useState(false);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get('name');
  
  const handleUpdate = () => {
    
  const obj = {
   name: stationName,
  location: stationLocation,
  lienseNo: stationLiense,
  deviceCount: stationDeviceCount,
  nozzleCount: stationNozzleCount,
    };
    patchIt_1(`/station-detail?_id=${stationCode}&accessDb=${name}`, obj,user.token);
  };

  useEffect(() => {
      setStationLoading(loading_pt_1);
      setSureLoading(loading_pt_1);
    if (data_pt_1.con) {
      setIsSure(false);
      setData(11);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data_pt_1, loading_pt_1, error_pt_1]);

    
  return (
    <>
      {
        sureLoading?<Loading/>:''
      }
    <div className=' absolute top-0 h-[100svh] overflow-hidden left-0 right-0 flex items-center justify-center bottom-0 bg-[#7878782f] '>
              <div className=' w-[400px] bg-white mb-[100px] flex flex-col items-center drop-shadow-lg rounded justify-between gap-3  p-3'>
                <p className='mb-[5px]'>Are You Sure?</p>
                <div className=' w-full'>
                  <p>Name : {stationName}</p>
                  <p>Liense No : {stationLiense}</p>
                  <p>Location : {stationLocation}</p>
                  <p>Device Count : {stationDeviceCount}</p>
                  <p>Nozzle Count : {stationNozzleCount}</p>
                </div>
                <div className='flex items-center justify-between w-full'>
                  <button onClick={handleUpdate} className='bg-[#27ae60] p-2 text-white rounded'>Sure</button>
                  <button className='bg-[#c0392b] p-2 text-white rounded' onClick={()=>setIsSure(false)}>Cancel</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default AdminSure