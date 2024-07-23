import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UseGet_1 from "../hooks/UseGet_1";
import Chart from "chart.js/auto";
import { useNavigate } from "react-router-dom";

const NewVehicleChart = ({ title }) => {
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
  const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
  const [okData, setOkData] = useState([
    { _id: "Cycle", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Cycle ( 3 Wheels )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Car", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Bus ( City )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Bus ( High Way )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Light Truck ( City )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Light Truck ( High way )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Heavy Truck ( City )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Heavy Truck ( High way )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Trailer ( City )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Trailer ( High way )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Htawlargyi", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Tractor", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Small Tractor", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Heavy Machinery", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Commercial Vehicle", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Phone Tower", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Industrial Zone", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Generator Industry", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Agriculture Machine", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Generator ( Home Use )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Hospital", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "School", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Super Market", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Hotel", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Housing", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Boat", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Pump Test", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Office Use ( Bowser Car )", totalSaleLiter: 0, totalPrice: 0 },
    { _id: "Station Use", totalSaleLiter: 0, totalPrice: 0 },
  ]);

  const [totalprice, setTotalprice] = useState(0);
  const [totalLiter, setTotalLiter] = useState(0);
  const user = useSelector((state) => state.login);

  useEffect(() => {
    getIt_1(
      `/detail-sale/perday/categories/total?sDate=${startDate}&eDate=${endDate}&vehicleType=Cycle,Cycle ( 3 Wheels ),Car,Bus ( City ),Bus ( High Way ),Light Truck ( City ),Light Truck ( High way ),Heavy Truck ( City ),Heavy Truck ( High way ),Trailer ( City ),Trailer ( High way ),Htawlargyi,Tractor,Small Tractor,Heavy Machinery,Commercial Vehicle,Phone Tower,Industrial Zone,Generator Industry,Agriculture Machine,Generator ( Home Use ),Hospital,School,Super Market,Hotel,Housing,Boat,Pump Test,Office Use ( Bowser Car ),Station Use&accessDb=${user.accessDb}`,
      user.token
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data_get_1.result) {
      const newData = data_get_1.result;
      const updatedData = okData.map((existingItem) => {
        const updatedItem = newData.find(
          (newItem) => newItem._id === existingItem._id
        );

        if (updatedItem) {
          return {
            ...existingItem,
            totalSaleLiter: updatedItem.totalSaleLiter,
            totalPrice: updatedItem.totalPrice,
          };
        } else {
          // If _id not found, set values to zero
          return {
            ...existingItem,
            totalSaleLiter: 0,
            totalPrice: 0,
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

  useEffect(() => {
    if (data_get_1?.result) {
      const ctx = document.getElementById("pie");
      const chartData = data_get_1.result
        .filter(
          (item) =>
            item._id == "Cycle" ||
            item._id == "Car" ||
            item._id == "Heavy Truck ( City )" ||
            item._id == "Trailer ( City )"
        )
        .map((item) => item.totalPrice);
      const chartLabels = data_get_1.result
        .filter(
          (item) =>
            item._id == "Cycle" ||
            item._id == "Car" ||
            item._id == "Heavy Truck ( City )" ||
            item._id == "Trailer ( City )"
        )
        .map((item) => item._id);
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: chartLabels,
          datasets: [
            {
              label: "My First Dataset",
              data: chartData,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(201, 66, 255)",
              ],
              hoverOffset: 4,
            },
          ],
        },
      });
      console.log(
        data_get_1.result.filter(
          (item) =>
            item._id == "Cycle" ||
            item._id == "Car" ||
            item._id == "Heavy Truck ( City )" ||
            item._id == "Trailer ( City )"
        ),
        "kkkkkkkkkkkkkkkkkkk",
        data_get_1
      );
    }
  }, [data_get_1]);

  return (
    <div className="w-[30%] px-10 ms-4 flex items-center bg-white p-6 rounded-lg pe-5 mt-2">
      <canvas id="pie" height={50} width={50}></canvas>
    </div>
  );
};

export default NewVehicleChart;
