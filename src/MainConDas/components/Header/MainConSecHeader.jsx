import React, { useEffect, useState } from 'react'
import UseGet_1 from '../hooks/UseGet_1';
import { useSelector } from 'react-redux';

function MainConSecHeader({dashboard,greeting}) {

    const user = useSelector((state) => state.login);
    const [stationDetail, setStationDetail] = useState([]);
    const [totalStations, setTotalStations] = useState(0);
    const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
    
    useEffect(() => {
        getIt_1(`/station-detail/get/all`, user.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (data_get_1.result) {
        setTotalStations(data_get_1.result.length);
        let nozzles = 0;
        data_get_1.result.map((e) => {
        return nozzles += e.nozzleCount
        });
        setStationDetail(nozzles);
        }
    }, [data_get_1,loading_get_1,error_get_1]);


  return (
      <div className='h-[90px] px-3 border-2 bg-white flex justify-between items-center'>
          <div>
              <h3 className='text-[#333] text-lg'>{dashboard}</h3>
              <p className=' text-[#333] text-xs'>{greeting}</p>
        </div>
          <div className='flex  gap-4'>
              <div>
                  <p className='text-xs'>{totalStations} stations</p>
              </div>   
              <div>
                  <p className='text-xs'>{stationDetail} Nozzles</p>
              </div>   
        </div>
      </div>
  )
}

export default MainConSecHeader