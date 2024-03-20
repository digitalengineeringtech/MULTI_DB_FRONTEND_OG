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

const NewVechicleChart = ({ title }) => {
  let start = new Date();
  start.setHours(0);
  start.setMinutes(0);
  start = new Date(start);

  let end = new Date();
  end.setHours(23);
  end.setMinutes(0);
  end = new Date(end);

  // eslint-disable-next-line no-unused-vars
  const [endDate, setEndDate] = useState(end);
  // eslint-disable-next-line no-unused-vars
  const [startDate, setStartDate] = useState(start);
  const [chartData, setChartData] = useState([
    {
      name: "Cycle",
      totalSaleLiter: 0,
      totalPrice: 0,
    },
    {
      name: "Htawlargyi",
      totalSaleLiter: 0,
      totalPrice: 0,
    },
    {
      name: "Cycle ( 3 Wheels )",
      totalSaleLiter: 0,
      totalPrice: 0,
    },
    {
      name: "Car",
      totalSaleLiter: 0,
      totalPrice: 0,
    },
    {
      name: "Trailer ( High way )",
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

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      {" "}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewVechicleChart;
