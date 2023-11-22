import React, { useEffect, useState } from 'react'
import TodayCategoryDetail from './TodayCategoryDetail'
import { useSelector } from 'react-redux';
import useVehicleHook from '../hooks/VehicleTypes.hook';


let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end); 
function TodayCategory() {
// eslint-disable-next-line no-unused-vars
const [endDate, setEndDate] = useState(end)
// eslint-disable-next-line no-unused-vars
    const [startDate, setStartDate] = useState(start);
    const [aggregatedData, setAggregatedData] = useState([{
        vehicleType: '',
        totalLiter: '',
        totalCount: 0,
        totalSale:0,
        count92: 0,
        count95: 0,
        count97: 0,
        counthsd: 0,
        countphsd: 0
    }
    ]);

 const user = useSelector((state) => state.login);
 const token = user.token;  
 const stationId = user.stationId;
    const [totalCount, setTotalCount] = useState(0);
 
 const promise = useVehicleHook(startDate, endDate, stationId, token);

    useEffect(() => {
        promise.then(data => {
            if (data.length > 1) {
                setAggregatedData(data);
                let count = 0;
                data.map((e, index) => (
                      count += e.totalCount
                ));
                setTotalCount(count);

            }
        }).catch(error => {
            console.log("Error fetching aggregated data:", error);
        });
    }, [promise]);

 
  return (
     <div className={`w-[100%] hover:scale-[1.02] duration-300  rounded-lg drop-shadow-xl h-[400px] border-none  p-3  bg-white`}>
     <p className='text-xs px-3'>Today Category Table</p>
     <div className='flex mt-2 px-3 justify-between items-center'>
        <p className='text-md text-[#333]'>Total Vehicle Types</p>
              <p className='text-md text-purple-700'>Total Count - {totalCount}</p>
     </div>
     <div className='mt-2 pb-3 overflow-y-scroll h-[300px]'>
    {
    aggregatedData.map((e, index) => (
    <TodayCategoryDetail index={index+1} category={aggregatedData.length<2 ? "---":e.vehicleType} liter={aggregatedData.length<2 ? "---":e.totalLiter} count={aggregatedData.length<2 ? "---":e.totalCount} total={aggregatedData.length<2 ? "---":e.totalSale} />
    ))
    }
     </div>
    </div>
  )
}

export default TodayCategory