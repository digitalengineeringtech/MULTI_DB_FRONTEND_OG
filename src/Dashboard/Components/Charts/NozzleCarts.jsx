import React,{useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2';
import { UserData } from '../../../assets/data/NozzlejsChart'
import {Chart as ChartJS} from 'chart.js/auto'

function NozzleCarts() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Nozzle Overview Chart",
      data: UserData.map((data) => data.userGain),
      backgroundColor: ["#009432"],
      
    }]
  });


  useEffect(() => { 
    
  }, []);

  return (
    <div className='w-[60%] animate-slide-left hover:-translate-y-1 hover:scale-[1.01] duration-300  relative bg-white h-[400px] p-5 rounded-2xl drop-shadow-xl'>
      <div className='absolute bg-white top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-[0.5]'><p >Coming Soon!</p></div>
      <h1 className='text-gray-800  font-semibold'>Nozzle Overview Chart 2023-6-12</h1>
      <div className='h-[300px] flex justify-center items-center'>
      <Line className='mt-[50px]'  data={userData} />
      </div>

    </div>
  )
}

export default NozzleCarts