import React, { useEffect, useState } from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import UseGet_1 from '../hooks/UseGet_1';
import UseGet_3 from '../hooks/UseGet_3';
import UseGet from '../hooks/UseGet';
import UseGet_2 from '../hooks/UseGet_2';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 

let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end);

function FuelTypeChartForMain() {
// eslint-disable-next-line no-unused-vars
 const [endDate, setEndDate] = useState(end)
 // eslint-disable-next-line no-unused-vars
const [startDate, setStartDate] = useState(start);
const [chartFuelType, setChartFuelType] = useState([
    {
      name: "Octane Rone (92)",
      total_price: 0,
      total_liter: 0,
      total_gallon: 0
    },
    {
      name: "Octane Rone (95)",
      total_price: 0,
      total_liter: 0,
      total_gallon: 0
    },
    {
      name: "Diesel",
      total_price: 0,
      total_liter: 0,
      total_gallon: 0
    },
    {
      name: "Premium Diesel",
      total_price: 0,
      total_liter: 0,
      total_gallon: 0
    },
  ]);
  


  const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
  const [{ data_get_2, loading_get_2, error_get_2 }, getIt_2] = UseGet_2();
 const [{ data_get_3, loading_get_3, error_get_3 }, getIt_3] = UseGet_3();
  const [{ data_get, loading_get, error_get }, getIt] = UseGet();
  
  const user = useSelector((state) => state.login);
 const navigate = useNavigate();



  useEffect(() => {
   if (!user.login) {
      navigate("/");
    }
  

    getIt_3(`/detail-sale/perday/total?sDate=${startDate}&eDate=${endDate}&fuelType=001-Octane Ron(92)&accessDb=${user.accessDb}`, user.token);
    getIt_2(`/detail-sale/perday/total?sDate=${startDate}&eDate=${endDate}&fuelType=002-Octane Ron(95)&accessDb=${user.accessDb}`, user.token);
    getIt_1(`/detail-sale/perday/total?sDate=${startDate}&eDate=${endDate}&fuelType=004-Diesel&accessDb=${user.accessDb}`, user.token);
    getIt(`/detail-sale/perday/total?sDate=${startDate}&eDate=${endDate}&fuelType=005-Premium Diesel&accessDb=${user.accessDb}`, user.token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  useEffect(() => {

    if (data_get_3.result) {
       setChartFuelType(prevState => {
    const updatedChart = prevState.map(fuel => {
      if (fuel.name === "Octane Rone (92)") {
        // Update only the total_price for Ron 92
        return { ...fuel, total_liter: data_get_3?.result[0]?.totalSaleLiter,total_price: data_get_3?.result[0]?.totalPrice,total_gallon:(data_get_3.result[0]?.totalSaleLiter / 4.16 ).toFixed(3)};
      }
      return fuel;  // Leave other fuels unchanged
    });
    return updatedChart;
       });
    }

  }, [data_get_3, loading_get_3, error_get_3]);
  
  useEffect(() => {
   if (data_get_2.result) {
       setChartFuelType(prevState => {
    const updatedChart = prevState.map(fuel => {
      if (fuel.name === "Octane Rone (95)") {
        // Update only the total_price for Ron 92
        return { ...fuel, total_liter: data_get_2?.result[0]?.totalSaleLiter,total_price: data_get_2?.result[0]?.totalPrice,total_gallon:(data_get_2?.result[0]?.totalSaleLiter / 4.16 ).toFixed(3) };
      }
      return fuel;  // Leave other fuels unchanged
    });
    return updatedChart;
       });
    }
  }, [data_get_2, loading_get_2, error_get_2]);
  
  useEffect(() => {
   if (data_get_1.result) {
       setChartFuelType(prevState => {
    const updatedChart = prevState.map(fuel => {
      if (fuel.name === "Diesel") {
        // Update only the total_price for Ron 92
        return { ...fuel, total_liter: data_get_1?.result[0]?.totalSaleLiter,total_price: data_get_1?.result[0]?.totalPrice,total_gallon:(data_get_1?.result[0]?.totalSaleLiter / 4.16 ).toFixed(3) };
      }
      return fuel;  // Leave other fuels unchanged
    });
    return updatedChart;
       });
    }
  }, [data_get_1, loading_get_1, error_get_1]);
  

  useEffect(() => {
    if (data_get.result) {
      setChartFuelType(prevState => {
    const updatedChart = prevState.map(fuel => {
      if (fuel.name === "Premium Diesel") {
        // Update only the total_price for Ron 92
        return { ...fuel, total_liter: data_get?.result[0]?.totalSaleLiter,total_price: data_get?.result[0]?.totalPrice,total_gallon:(data_get?.result[0]?.totalSaleLiter / 4.16 ).toFixed(3) };
      }
      return fuel;  // Leave other fuels unchanged
    });
    return updatedChart;
       });
   }
  }, [data_get, loading_get, error_get]);




    return (
      <div style={{ width: '100%'}}>
  <ResponsiveContainer width="100%" height={280}>
  <AreaChart
      data={chartFuelType}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="total_price"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="total_liter"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="total_gallon"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
                </AreaChart>
            </ResponsiveContainer>
            </div>
  )
}

export default FuelTypeChartForMain