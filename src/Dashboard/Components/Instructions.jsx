/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import useSevenDayHook from '../hooks/SevenDay.hooks';
import Loading from '../../components/Loading';


const currentDate = new Date();

let start = new Date(currentDate);
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date(currentDate);
start.setDate(currentDate.getDate() - 7);
end.setHours(23);
end.setMinutes(0);
end = new Date(end);


function Instructions() {
  const [okData, setOkData] = useState([]);
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const user = useSelector((state) => state.login);
  const [loading, setLoading] = useState(false);
 const token = user.token;
  const stationId = user.stationId;
  

 
  
  const promise = useSevenDayHook(startDate, endDate, stationId, token);

  useEffect(() => {
    promise.then(data => {
      setOkData(data);
    }).catch(error => {
      console.error('Error fetching aggregated data:', error);
    });
  }, [promise]);

  useEffect(() => { 
    if (okData.length < 3) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [okData]);
  


  const listyle = 'h-[70px] hover:scale-[1.02] duration-300 rounded-md mb-2 flex items-center justify-around bg-white px-5';

  return (
    <div className='w-[100%]  hover:-translate-y-1 hover:scale-[1.01] duration-300 bg-white rounded-lg drop-shadow-2xl h-[400px]'>
      <div className=' rounded-t-2xl  bg-gray-100 h-[50px] flex justify-start items-center px-[30px] font-semibold'><p>Records</p></div>
      <div className='bg-gray-500 overflow-x-scroll h-[330px]'>
        <ul className='p-5'>
          {
         loading?<Loading/>:  Object.keys(okData).map(date => (
             <li className={listyle} key={date}>
            <h3 className='w-[33.33%]'>{date}</h3>
            <p className='w-[33.33%]'>Total Liters:<span className=' text-lg font-extrabold'> {(okData[date].totalLiter).toFixed(3)}</span></p>
            <p className='w-[33.33%]'>Total Price : <span className='text-lg  font-extrabold text-'> {(okData[date].totalSale).toLocaleString()}</span> MMK</p>
          </li>
        ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Instructions


