import React,{useEffect, useState} from 'react'
import {Bar } from 'react-chartjs-2';
import { UserData } from '../../assets/data/ChartjsBalance'
import { Chart as ChartJS } from 'chart.js/auto'
import { useDispatch, useSelector } from 'react-redux';
import instance from '../../axios';
import { useNavigate } from 'react-router-dom';
import { LogoutUser } from '../../redux/slices/LoginSlice';


let startDate = new Date();
startDate.setHours(0);
startDate.setMinutes(0);
startDate = new Date(startDate);

let endDate = new Date();
endDate.setHours(23);
endDate.setMinutes(0);
endDate = new Date(endDate);

function Overall() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: ["Tank"],
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        '#FFC312',
        '#C4E538',
        '#12CBC4',
        '#FDA7DF',
      ],
      
    }]
  });
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const user = useSelector((state) => state.login);
  
  useEffect(() => {
    const token = user.token;
    const stationId = user.stationId;
    const isoStartDate = startDate.toLocaleDateString('fr-CA')
    

    


    instance.get(`/fuel-balance/pagi/1?sDate=${isoStartDate}&stationId=${stationId}`,{
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }
    })
      .then(function (response) {
      const data = response.data.result;



      setUserData({
    labels: data.map((obj) => `Tank ${obj.tankNo}`),
    datasets: [{
      label: ["Tank Balance"],
      data: data.map((obj) => obj.balance),
      backgroundColor: [
        '#FFC312',
        '#C4E538',
        '#12CBC4',
        '#FDA7DF',
      ],
      
    }]
  })


    
      
       })
      .catch(function (error) {
         console.log(error)
         navigate('/')  
           dispatch(LogoutUser())
       }); 
    
   },[])
  
  
  return (
      <div className='animate-pop-up bg-white group hover:-translate-y-1  drop-shadow-2xl rounded-2xl hover:scale-[1.01] duration-300 h-[400px] w-[60%]  p-[20px] '>
        <h1>Tank Balance Analytics</h1>
    <div className='h-[350px] flex items-center justify-center'>
         <Bar data={userData} />
    </div>
    </div>
  )
}

export default Overall