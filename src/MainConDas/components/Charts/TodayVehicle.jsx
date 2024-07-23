import React, { useEffect, useState } from 'react'
import TodayVehicleDetails from './TodayVehicleDetails'
import UseGet_1 from '../hooks/UseGet_1';
import { useSelector } from 'react-redux';



let start = new Date();
start.setHours(0);
start.setMinutes(0);
start.setSeconds(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(59);
end.setSeconds(59);
end = new Date(end);

function TodayVehicle({ today_vehicles, total_vehicles }) {
  // eslint-disable-next-line no-unused-vars
 const [endDate, setEndDate] = useState(end);
 // eslint-disable-next-line no-unused-vars
 const [startDate, setStartDate] = useState(start);
const [okData, setOkData] = useState([
      { _id: 'Cycle',totalSaleLiter: 0,totalPrice:0 },
      { _id: 'Cycle ( 3 Wheels )',totalSaleLiter: 0,totalPrice:0 },
      { _id: 'Car',totalSaleLiter: 0,totalPrice:0 },
      { _id: 'Bus ( City )',totalSaleLiter: 0,totalPrice:0 },
      { _id: 'Bus ( High Way )', totalSaleLiter: 0,totalPrice:0 },
      { _id: 'Light Truck ( City )',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Light Truck ( High way )',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Heavy Truck ( City )', totalSaleLiter: 0,totalPrice:0},
      { _id: 'Heavy Truck ( High way )',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Trailer ( City )', totalSaleLiter: 0,totalPrice:0},
      { _id: 'Trailer ( High way )',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Htawlargyi',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Tractor', totalSaleLiter: 0,totalPrice:0},
      { _id: 'Small Tractor',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Heavy Machinery',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Commercial Vehicle',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Phone Tower',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Industrial Zone',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Generator Industry', totalSaleLiter: 0,totalPrice:0},
      { _id: 'Agriculture Machine', totalSaleLiter: 0,totalPrice:0},
      { _id: 'Generator ( Home Use )',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Hospital', totalSaleLiter: 0,totalPrice:0},
      { _id: 'School',totalSaleLiter: 0,totalPrice:0},
      { _id: 'Super Market', totalSaleLiter: 0,totalPrice:0},
      { _id: 'Hotel', totalSaleLiter: 0,totalPrice:0 },
      { _id: 'Housing', totalSaleLiter: 0,totalPrice:0},
      { _id: 'Boat', totalSaleLiter: 0,totalPrice:0},
      { _id: "Pump Test",totalSaleLiter: 0,totalPrice:0 },
      { _id: "Office Use ( Bowser Car )", totalSaleLiter: 0,totalPrice:0},
      { _id: "Station Use", totalSaleLiter: 0,totalPrice:0}
        
]);
  const [totalprice, setTotalprice] = useState(0);
  const [totalLiter, setTotalLiter] = useState(0);
 const user = useSelector((state) => state.login);
  
  
  const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1(); 

  useEffect(() => {

  getIt_1(`/detail-sale/perday/categories/total?sDate=${startDate}&eDate=${endDate}&vehicleType=Cycle,Cycle ( 3 Wheels ),Car,Bus ( City ),Bus ( High Way ),Light Truck ( City ),Light Truck ( High way ),Heavy Truck ( City ),Heavy Truck ( High way ),Trailer ( City ),Trailer ( High way ),Htawlargyi,Tractor,Small Tractor,Heavy Machinery,Commercial Vehicle,Phone Tower,Industrial Zone,Generator Industry,Agriculture Machine,Generator ( Home Use ),Hospital,School,Super Market,Hotel,Housing,Boat,Pump Test,Office Use ( Bowser Car ),Station Use&accessDb=${user.accessDb}`, user.token);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    if (data_get_1.result) {
     
  const newData = data_get_1.result;
  const updatedData = okData.map(existingItem => {
  const updatedItem = newData.find(newItem => newItem._id === existingItem._id);

  if (updatedItem) {
    return {
      ...existingItem,
      totalSaleLiter: updatedItem.totalSaleLiter,
      totalPrice: updatedItem.totalPrice
    };
  } else {
    // If _id not found, set values to zero
    return {
      ...existingItem,
      totalSaleLiter: 0,
      totalPrice: 0
    };
  }
});

      let pp = 0;
      let gg = 0;


      data_get_1.result.forEach((e) => {
        pp += e.totalSaleLiter;
        gg += e.totalPrice;
      });

      setTotalprice(gg);
      setTotalLiter(pp);
      setOkData(updatedData);
      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data_get_1, loading_get_1, error_get_1]);
  


  return (
   <div className='w-[65%] border-none drop-shadow-md h-[300px] p-3  bg-white'>
     <p className='text-xs px-3'>{today_vehicles}</p>
     <div className='flex mt-2 px-3 justify-between items-center'>
        <p className='text-md text-[#333]'>{total_vehicles}</p>
        <p className='text-md text-purple-700'>Total Liter - {totalLiter.toFixed(3)}</p>
        <p className='text-md text-purple-700'>Total Price - {totalprice.toLocaleString(undefined, { maximumFractionDigits: 3 })} MMK</p>
     </div>
      <div className='mt-2 pb-3 overflow-y-scroll h-[220px]'>
      <div className='border-t-[0.5px] group px-3 hover:bg-blue-300 duration-300 text-md border-b-[0.5px]  flex justify-between items-center border-[#e3e3e3] h-[40px]'>
    <p className='w-[10%]'>No.</p>
    <p className='w-[50%]'>Name</p>
    <p className='h-[40px] text-[14px] w-[20%] border-l border-dotted border-[#e2e2e2] flex items-center p-2 justify-end'>Liter</p>
    <p className='h-[40px] text-[14px] w-[20%] border-l border-dotted border-[#e2e2e2] flex items-center  p-2 justify-end'>Price</p>
    </div>
        {
          okData.map((e, index) => (
       <TodayVehicleDetails no={index +1} name={e._id} price={e.totalPrice} liter={e.totalSaleLiter} />
            
          ))
      }
     </div>
    </div>
  )
}

export default TodayVehicle