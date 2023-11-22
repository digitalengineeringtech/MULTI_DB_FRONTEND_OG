import React, { useEffect, useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import UseGet_1 from '../hooks/UseGet_1';
import { useSelector } from 'react-redux';


function TotalSaleWeek({ total_sale, seven_day }) {
  const [okData, setOkData] = useState([
    {
        "totalSalePrice": 0,
        "totalSaleLiter": 0,
        "_id": ""
    },
    {
        "totalSalePrice": 0,
        "totalSaleLiter": 0,
        "_id": ""
    },
    {
        "totalSalePrice": 0,
        "totalSaleLiter": 0,
        "_id": "0"
    },
    {
        "totalSalePrice": 0,
        "totalSaleLiter": 0,
        "_id": "0"
    },
    {
        "totalSalePrice": 0,
        "totalSaleLiter": 0,
        "_id": ""
    },
    {
        "totalSalePrice": 0,
        "totalSaleLiter": 0,
        "_id": ""
    },
    {
        "totalSalePrice": 0,
        "totalSaleLiter": 0,
        "_id": ""
    },
    {
        "totalSalePrice": 0,
        "totalSaleLiter": 0,
        "_id": ""
    }
]);

  const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1(); 
  const user = useSelector((state) => state.login);

  useEffect(() => {

  getIt_1(`/detail-sale/previous/sevenday/total?&accessDb=${user.accessDb}`, user.token);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {

    if (data_get_1.result) {
      setOkData(data_get_1.result);
    }
    
  },[data_get_1, loading_get_1, error_get_1])

  return (
      <div className='w-[97%] drop-shadow-md my-5 bg-white p-5 mx-auto' >
      <p className='mb-8'>{total_sale} {seven_day} </p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={okData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="totalPrice" stroke="#8884d8" fill="#8884d8" />
            <Line connectNulls type="monotone" dataKey="totalSaleLiter" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
  )
}

export default TotalSaleWeek