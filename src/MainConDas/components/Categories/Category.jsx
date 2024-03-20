import React, { useEffect, useState } from "react";
import totalSale from "../../../assets/images/totalSale.png";
import FuelTypeChartForMain from "../Charts/FuelType";
import UseGet from "../hooks/UseGet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UseGet_1 from "../hooks/UseGet_1";
import CountUp from "react-countup";
import UseGet_3 from "../hooks/UseGet_3";
import UseGet_4 from "../hooks/UseGet_4";

let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end);

function Category({ total_vehicles, total_liters, total_gallon, total_sale }) {
  // eslint-disable-next-line no-unused-vars
  const [endDate, setEndDate] = useState(end);
  // eslint-disable-next-line no-unused-vars
  const [startDate, setStartDate] = useState(start);
  const [todayTotalVehicle, setTodayTotalVehicle] = useState("");
  const [totalSalePrice, setTotalSalePrice] = useState("");
  const [totalLiter, setTotalLiter] = useState("");

  const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
  const [{ data_get_4, loading_get_4, error_get_4 }, getIt_4] = UseGet_4();
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }

    getIt_1(
      `/detail-sale/perday/total?sDate=${startDate}&eDate=${endDate}&totalVehicle=vehicle&accessDb=${user.accessDb}`,
      user.token
    );

    getIt_4(
      `/detail-sale/perday/total?sDate=${startDate}&eDate=${endDate}&accessDb=${user.accessDb}`,
      user.token
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data_get_1.result) {
      setTodayTotalVehicle(data_get_1.result);
    }
  }, [data_get_1, loading_get_1, error_get_1]);

  useEffect(() => {
    if (data_get_4.result) {
      if (data_get_4?.result) {
        setTotalLiter(data_get_4.result[0]?.totalSaleLiter);
      }
      setTotalSalePrice(data_get_4.result[0]?.totalPrice);
    }
  }, [data_get_4, loading_get_4, error_get_4]);

  return (
    <div className="flex relative  mt-1 p-[10px]  items-start justify-center gap-5">
      <div className="w-[40%]   h-[300px] ">
        <div className="flex w-[100%] gap-[10px]">
          <div className="w-[50%] drop-shadow-xs border-[1px] border-gray-[600] flex flex-col items-center justify-center  bg-white h-[100px]">
            <p className="text-2xl mb-2   text-[#46a4f6]">
              <CountUp
                delay={20}
                end={todayTotalVehicle ? todayTotalVehicle : ""}
              />
            </p>
            <p className="text-gray-500 ">
              {total_vehicles ? total_vehicles : ""}
            </p>
          </div>
          <div className="w-[50%] drop-shadow-xs border-[1px] border-gray-[600] drop-shadow-sm  flex flex-col items-center justify-center bg-[#897ade] h-[100px]">
            <p className="text-2xl mb-2  text-white">
              <CountUp delay={20} end={totalLiter} /> Li
            </p>
            <p className="text-white -500 ">
              {total_liters ? total_liters : ""}
            </p>
          </div>
        </div>
        <div className="flex my-3 w-[100%] gap-[10px]">
          <div className="w-[100%] drop-shadow-xs border-[1px] border-gray-[600] bg-[#46a4f6]  flex flex-col items-center justify-center h-[100px]">
            <p className="text-2xl mb-2  text-white">
              <CountUp delay={20} end={(totalLiter / 4.16).toFixed(3)} />
            </p>
            <p className="text-white  ">
              {total_gallon ? total_gallon : ""}
            </p>
          </div>
        </div>
        <div className="h-[90px] border-[1px] border-gray-[600] drop-shadow-xs flex items-center bg-gray-200">
          <div className=" h-[88px] w-[130px] bg-gray-300 flex justify-center items-center">
            <img
              className="w-[50px]"
              src={totalSale ? totalSale : ""}
              alt="totalsale"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-[100%]">
            <p className="text-xl mb-1  text-[#333]">
              <CountUp delay={20} end={totalSalePrice} /> mmk
            </p>
            <p className=" text-[#333]">
              {total_sale ? total_sale : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[65%] text-xs p-3 bg-white flex items-center justify-center  h-[315px]">
        <FuelTypeChartForMain />
        <div></div>
      </div>
    </div>
  );
}

export default Category;
