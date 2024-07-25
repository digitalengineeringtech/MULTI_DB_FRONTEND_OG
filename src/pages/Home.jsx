import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import Homecards from "../components/Cards/Homecards";
import paper from "../assets/images/paper.png";
import SaleSummary from "../assets/images/laptop-document-svgrepo-com (1).png";
import ChartBarChart from "../assets/images/chart-bar-chart-svgrepo-com.png";
import BarChartStand from "../assets/images/bars-chart-stand-svgrepo-com.png";
import ChartGraphic from "../assets/images/chart-graphic-svgrepo-com.png";
import GasStation from "../assets/images/gas-station-svgrepo-com.png";
import ShiftLeader from "../assets/images/gas-station-svgrepo-com-2.png";
import Category from "../assets/images/car-repair-car-svgrepo-com.png";
import pump from "../assets/images/gas-fuel.png";
import Calender from "../assets/images/weekly-calendar-day-svgrepo-com.png";
import Speed from "../assets/images/speedometer-svgrepo-com.png";
import TankStock from "../assets/images/stockchart-svgrepo-com.png";
import Monitoring from "../assets/images/monitoring-seo-and-web-svgrepo-com.png";
import ATG from "../assets/images/tank-svgrepo-com.png";
import { MyanmarMainHomePage } from "../Language/Myanmar/myanmarMainHomePage";
import { EnglishMainHomePage } from "../Language/English/englishMainHomePage";
import Header from "../components/Header";
import Different from "../assets/images/difference.png";
import { MdArrowBack } from "react-icons/md";
import { ChinesehMainHomePage } from "../Language/Chinese/chineseMainHomePage";
import { redirect } from "react-router-dom";

function Home() {
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const [language, setLanguage] = useState(EnglishMainHomePage);
  const location = useLocation();

  useEffect(() => {
    if (user.accessDb === false) {
      navigate("/");
    }

    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarMainHomePage);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishMainHomePage);
    } else if (user.language === "中国人" || user.language === "အင်္ဂလိပ်") {
      setLanguage(ChinesehMainHomePage);
    }
  }, [navigate, user]);

  const headerPaths = [
    "/kyawsan/main-con/home",
    // Add other paths where you want to show the header
  ];

  const shouldShowHeader = headerPaths.includes(location.pathname);

  const home =
    user.name !== "a  dmin"
      ? "home_page pb-[100px] items-center  flex justify-center "
      : "home_page items-center pb-[100px]  flex justify-center ";

  return (
    <>
      {shouldShowHeader ? <Header /> : ""}
      <div className={home}>
        {/* Daily Sale Report */}
        <div className="container px-3 mx-auto">
          <div className="data_input">
            <h1 className=" font-bold  mt-[30px] flex justify-center items-center px-4 container mx-auto text-3xl  mb-[30px] text-white">
              {language.PPRD_reports}
            </h1>

            <div className="flex flex-wrap gap-3 justify-center items-center">
              <div className="w-[300px]">
                <Homecards
                  title={language.sale_detail}
                  img={paper}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/saledetail`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.fuel_receive_report}
                  img={BarChartStand}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/fueldatareport`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.daily_sale_report}
                  img={ChartBarChart}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/dailysalereport`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.pump_report}
                  img={pump}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/pumpreport`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.tank_data}
                  img={ATG}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/real-tank`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.daily_sale_categories_report}
                  img={Category}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/categoriesreport`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.weekly_sale_report}
                  img={Calender}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/weekly`}
                />
              </div>
            </div>

            <div className="flex justify-center my-3 items-center gap-3"></div>
            <div className="flex justify-start my-3 items-center gap-3">
              <div className="w-[25%]"></div>
              <div className="w-[25%]"></div>
            </div>
          </div>

          {/* bottom */}
          <div className="data_input">
            <h1 className=" font-bold  mt-[30px] flex justify-center items-center px-4 container mx-auto text-3xl  mb-[30px] text-white">
              {language.reports}
            </h1>

            <div className="flex flex-wrap gap-3 justify-center items-center">
              {/* <div className="w-[300px]">
                <Homecards
                  title={language.online_monitoring_sale_report}
                  img={Monitoring}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/onlinemonitoringsalereport`}
                />
              </div> */}
              <div className="w-[300px]">
                <Homecards
                  title={language.diffrent_totalizer}
                  img={Different}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/differentTotalizer`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.sale_summary_by_station}
                  img={GasStation}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/salessummarbystation`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.statement_report}
                  img={ShiftLeader}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/statementreport`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.fuel_balance_report}
                  img={Speed}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/fuelbalance`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.stock_balance_report}
                  img={ChartGraphic}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/tankbalancereport`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.fuel_type_balance}
                  img={TankStock}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/fueltypebalance`}
                />
              </div>
              <div className="w-[300px]">
                <Homecards
                  title={language.daily_sale_summary_report}
                  img={SaleSummary}
                  buttontext={language.check_now}
                  link={`/${user.accessDb}/dailysalesummaryreport`}
                />
              </div>
            </div>

            <div className="flex justify-center my-3 items-center gap-3"></div>
            <div className="flex justify-start my-3 items-center gap-3">
              <div className="w-[25%]"></div>
              <div className="w-[25%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
