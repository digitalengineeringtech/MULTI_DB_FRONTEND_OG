/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
} from "recharts";
import UseGet_1 from "../hooks/UseGet_1";
import { useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";

let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end);

function VehiclesCharts({ title }) {
  // eslint-disable-next-line no-unused-vars
  const [endDate, setEndDate] = useState(end);
  // eslint-disable-next-line no-unused-vars
  const [startDate, setStartDate] = useState(start);
  const [chartData, setChartData] = useState([
    {
      _id: "Cycle",
      totalSaleLiter: 0,
      totalPrice: 0,
    },
    {
      _id: "Htawlargyi",
      totalSaleLiter: 0,
      totalPrice: 0,
    },
    {
      _id: "Cycle ( 3 Wheels )",
      totalSaleLiter: 0,
      totalPrice: 0,
    },
    {
      _id: "Car",
      totalSaleLiter: 0,
      totalPrice: 0,
    },
    {
      _id: "Trailer ( High way )",
      totalSaleLiter: 0,
      totalPrice: 0,
    },
  ]);

  const user = useSelector((state) => state.login);

  const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();

  useEffect(() => {
    getIt_1(
      `/detail-sale/perday/categories/total?sDate=${startDate}&eDate=${endDate}&vehicleType=Cycle,Car,Trailer ( High way ),Trailer ( City ),Htawlargyi,Cycle ( 3 Wheels )&accessDb=${user.accessDb}`,
      user.token
    );
  }, []);

  useEffect(() => {
    if (data_get_1.result) {
      let dd = data_get_1.result;

      // Loop through the array and format totalSaleLiter to 3 decimal places
      for (let i = 0; i < dd.length; i++) {
        dd[i].totalSaleLiter = parseFloat(dd[i].totalSaleLiter.toFixed(3));
      }

      setChartData(dd);
    }
  }, [data_get_1, loading_get_1, error_get_1]);

  return (
    <div className="w-[97%] my-2 bg-white p-5 mx-auto">
      <p className="mb-8">{title}</p>
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart
          data={chartData}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="_id"
            label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
            scale="band"
          />
          <YAxis
            label={{ value: "Index", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="totalSaleLiter"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="totalPrice" barSize={20} fill="#413ea0" />
          {/* <Line type="monotone" dataKey="totalSaleLiter" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default VehiclesCharts;
