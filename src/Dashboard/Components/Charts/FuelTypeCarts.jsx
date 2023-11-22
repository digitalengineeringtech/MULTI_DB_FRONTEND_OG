import React,{useState,useEffect} from 'react'
import {Bar } from 'react-chartjs-2';
import { UserData } from '../../../assets/data/FuelType'
import { useSelector } from 'react-redux';
import useCategoriesHook from '../../hooks/Categories.hook';


let startDate = new Date();
startDate.setHours(0);
startDate.setMinutes(0);
startDate = new Date(startDate);

let endDate = new Date();
endDate.setHours(23);
endDate.setMinutes(0);
endDate = new Date(endDate);

function FuelTypeCarts() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Fuel Type Overview Chart",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }]
  });
  const [userGo, setUserGo] = useState([]);
 const user = useSelector((state) => state.login);
 const token = user.token;
 const stationId = user.stationId;

  const promise = useCategoriesHook(startDate, endDate, stationId, token);


  useEffect(() => {
    promise.then(data => {
      if (data.length > 1) {
        setUserGo(data);
      }
    })
   }, [promise]);


  useEffect(() => {
    if (userGo.length > 2) {
        const fuelTypeData = [
          {
            year: '92',
            userGain: userGo[0].totalLiter
          },
          {
            year: '95',
            userGain: userGo[1].totalLiter95
          },
          {
            year: 'HSD',
            userGain: userGo[2].totalLiterDiesel
          },
          {
            year: 'PHSD',
            userGain: userGo[3].totalLiterPDiesel
          }
        ];
   setUserData({
          labels: fuelTypeData.map(entry => entry.year),
          datasets: [{
            ...userData.datasets[0],
            data: fuelTypeData.map(entry => entry.userGain),
          }]
        });
  }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userGo]);



  // Add more options as needed
  return (
    <div className='w-[100%] duration-300 animate-slide-left hover:-translate-y-1 hover:scale-[1.01] bg-white h-[400px] p-5 rounded-2xl drop-shadow-xl'>
      <h1 className='text-gray-800 mb-[20px] font-semibold'>Fuel Type Overview Chart Bar 2023-6-12</h1>
      <div className='h-[300px]  flex justify-center items-center'>
      <Bar className='mt-[50px] w-full' data={userData} />
      </div>

    </div>
  )
}

export default FuelTypeCarts