import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDailySaleReportByTimeRange } from '../../../../redux/slices/KyawSan027Slice';


let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end);


function TotalVehicleHook({ apiSlice }) {
    const [startDate, setStartDate] = useState(start);
    const [endDate, setEndDate] = useState(end);

    const [title, setTitle] = useState(0);

    const user = useSelector((state) => state.login);
    const dispatch = useDispatch();

    useEffect(() => { 
    
        const fetchData = async () => {
            const bomb = [user.token,startDate,endDate];
        
            await dispatch(fetchDailySaleReportByTimeRange(bomb));

        
        };
        
        fetchData();
    },[]);



  return (
    <div>TotalVehicleHook</div>
  )
}

export default TotalVehicleHook