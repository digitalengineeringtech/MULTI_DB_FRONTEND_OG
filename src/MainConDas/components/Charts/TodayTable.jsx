import React, { useEffect, useState } from 'react'
import TodayTableDetails from './TodayTableDetails'
import UseGet_1 from '../hooks/UseGet_1';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';



let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end);

function TodayTable({ totday_table, total_sales }) {
  // eslint-disable-next-line no-unused-vars
 const [endDate, setEndDate] = useState(end)
 // eslint-disable-next-line no-unused-vars
 const [startDate, setStartDate] = useState(start);
 const [okData, setOkdata] = useState([]);
 const [totalSale,setTotalSale] = useState(0);

 const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
  
 const user = useSelector((state) => state.login);
 const navigate = useNavigate();

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    getIt_1(`/detail-sale/perday/station/total?sDate=${startDate}&eDate=${endDate}&accessDb=${user.accessDb}`,user.token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data_get_1.result) {
      setOkdata(data_get_1.result);
       let gg = 0;
      data_get_1.result.forEach((e) => {
        gg += e.totalPrice;
      });
      setTotalSale(gg);
    }
  }, [data_get_1,loading_get_1,error_get_1]);

  return (
    <div className='w-[50%] border-none drop-shadow-md h-[300px] p-3  bg-white'>
     <p className='text-xs px-3'>{totday_table}</p>
     <div className='flex mt-2 px-3 justify-between items-center'>
        <p className='text-md text-[#333]'>{total_sales}</p>
        <p className='text-md text-purple-700'><CountUp delay={20} end={totalSale} /> MMK</p>
     </div>
      <div className='mt-2 pb-3 overflow-y-scroll h-[220px]'>
      <div className='border-t-[0.5px] group px-3 hover:bg-blue-300 duration-300 text-md border-b-[0.5px]  flex justify-between items-center border-[#e3e3e3] h-[40px]'>
    <p className='w-[40%]'>Name</p>
    <p className='h-[40px] text-[14px] w-[30%] border-l border-dotted border-[#e2e2e2] flex items-center p-2 justify-end'>Liter</p>
    <p className='h-[40px] text-[14px] w-[30%] border-l border-dotted border-[#e2e2e2] flex items-center  p-2 justify-end'>Price</p>
    </div>
        {
          okData.map((e, index) => (
            <TodayTableDetails name={e.stationDetail.name} liter={e.totalSaleLiter.toFixed(3)} price={e.totalPrice}/>
          ))
        }
     </div>
    </div>
  )
}

export default TodayTable