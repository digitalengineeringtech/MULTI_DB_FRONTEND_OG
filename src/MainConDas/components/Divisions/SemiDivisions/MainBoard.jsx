import React, { useEffect, useState } from "react";
import MainConSecHeader from "../../Header/MainConSecHeader";
import Category from "../../Categories/Category";
import VehiclesCharts from "../../Charts/VehiclesCharts";
import TodayTable from "../../Charts/TodayTable";
import TodayVehicle from "../../Charts/TodayVehicle";
import TotalSaleWeek from "../../Charts/TotalSaleWeek";
import Container from "../../container";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { EnglishMainConDashboard } from "../../../../Language/English/englishMainConDashboard";
import { useDispatch, useSelector } from "react-redux";
import { MyanmarMainConDashboard } from "../../../../Language/Myanmar/myanmarMainConDashboard";

import "./MainBoard.css";
import NewVehicleChart from "../../Charts/NewVechicleChart";
import SaleChart from "../../Charts/SaleChart";
function MainBoard() {
  const [language, setLanguage] = useState(EnglishMainConDashboard);

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarMainConDashboard);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishMainConDashboard);
    }
  }, [user, navigate, dispatch]);

  return (
    <div className="w-[100%]">
      <MainConSecHeader
        dashboard={language.dashboard}
        greeting={language.greeting}
      />
      <div className="mt-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-2 w-[98%] rounded-md group-hover:rounded-md drop-shadow-md mx-auto cursor-pointer">
        {/* <p
          onClick={() => navigate("/kyawsan/main-con/home")}
          className="font-bold hover:gap-4 duration-300  underline cursor-pointer flex items-center  gap-2"
        >
          {language.to_reports}
          <TbPlayerTrackNextFilled size={25} />
        </p> */}
        <button
          onClick={() => navigate("/kyawsan/main-con/home")}
          class="cssbuttons-io-button"
        >
          {language.to_reports}
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <Category
        total_gallon={language.total_gallon}
        total_liters={language.total_liters}
        total_sale={language.total_sale}
        total_vehicles={language.total_vehicle}
      />
      {/* <VehiclesCharts title={language.vehicle_type} /> */}
      <div className=" flex gap-4 px-5">
        <SaleChart />
        <NewVehicleChart />
      </div>
      <div className="w-[97%]  gap-5 mt-4 flex mx-auto">
        <TodayTable
          total_sales={language.total_sale}
          totday_table={language.today_table}
        />
        <TodayVehicle
          today_vehicles={language.today_vehicle}
          total_vehicles={language.total_vehicle}
        />
      </div>
      <TotalSaleWeek
        total_sale={language.total_sale}
        seven_day={language.seven_day}
      />
      <Container></Container>
    </div>
  );
}

export default MainBoard;
