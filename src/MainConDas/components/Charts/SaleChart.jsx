import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UseGet_1 from "../hooks/UseGet_1";
import Chart from "chart.js/auto";
import { useNavigate } from "react-router-dom";

const SaleChart = ({ title }) => {
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

  const [endDate, setEndDate] = useState(end);
  // eslint-disable-next-line no-unused-vars
  const [startDate, setStartDate] = useState(start);
  const [okData, setOkdata] = useState([]);
  const [totalSale, setTotalSale] = useState(0);
  const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    getIt_1(
      `/detail-sale/perday/station/total?sDate=${startDate}&eDate=${endDate}&accessDb=${user.accessDb}`,
      user.token
    );
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
  }, [data_get_1, loading_get_1, error_get_1]);

  useEffect(() => {
    if (data_get_1?.result) {
      const ctx = document.getElementById("barChart");
      const chartData = data_get_1.result.map((item) => item.totalPrice);
      const chartLabels = data_get_1.result.map(
        (item) => item.stationDetail.name
      );

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: chartLabels,
          datasets: [
            {
              label: "Prices and Liters",
              data: chartData,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      console.log(data_get_1, "ddfdffdfd");
    }
  }, [data_get_1]);

  return (
    <div className="w-[70%] bg-white p-6 rounded-lg pe-5 mt-2">
      <canvas id="barChart" height={150}></canvas>
    </div>
  );
};

export default SaleChart;
