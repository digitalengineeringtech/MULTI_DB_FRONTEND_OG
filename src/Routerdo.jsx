import React from "react";
import Header from "./components/Header";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import DailySaleReportOne from "./pages/DailySaleReport1";
import FuelInDailyReport from "./pages/Lap";
import DailyThisDay from "./pages/DailyThisDay.report";
import SearchReports from "./pages/SearchReports";
import TankBalanceReport from "./pages/TankBalanceReport";
import StatementReport from "./pages/StatementReport";
import OnlineMonitoringSaleReport from "./pages/OnlineMonitoringSaleReport";
import DailySaleCategoriesReport1 from "./pages/DailySaleCategoriesReport1";
import WeeklySaleReport from "./pages/WeeklySaleReport";
import FuelBalanceReport from "./pages/FuelBalanceReport";
import Adjustment from "./pages/Adjustment";
import TankBalance from "./pages/TankBalance";
import FuelTypeBalanceReport from "./pages/FuelTypeBalanceReport";
import Test from "./pages/Test";
import UserManual from "./components/UserManual/UserManual";
import Dashboard from "./Dashboard/Dashboard";
import DailySummaryByStationReport from "./pages/DailySummeryByStationReport";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import MainConDas from "./MainConDas/MainConDas";
import MainConDasHeader from "./MainConDas/components/Header/MainConDasHeader";
import BackToDash from "./Dashboard/Components/BackToDash";
import HomePageAd from "./Admin/pages/HomePageAd";
import AdminHeader from "./Admin/components/AdminHeader";
import AccountAd from "./Admin/pages/AccountAd";
import SaleDetail from "./pages/SaleDetail";
import StationsAdmin from "./Admin/pages/StationsAdmin";
import DashBoardAd from "./Admin/pages/DashBoardAd";
import StationSetUpAd from "./Admin/pages/StationSetUpAd";
import DetAdminHome from "./Admin/pages/DetAdminHome";
import NavigationHeaderCon from "./Controller/NavigationHeaderCon";
import RealTimeTank from "./pages/RealTimeTank";
import AccountDetails from "./Admin/pages/AccountDetails";
import StationBanned from "./Admin/pages/StationBanned";
import { Pprdchoose } from "./pages/Pprdchoose";
import { AddCollections } from "./Admin/pages/AddCollections";
import { ChooseStationCollections } from "./Admin/pages/ChooseStationCollections";
import { StationSetUpChoose } from "./Admin/pages/StationSetUpChoose";
import AdminBanned from "./Admin/pages/AdminBanned";
import { AdminChooseBanned } from "./Admin/pages/AdminChooseBanned";
import StationBannedDetail from "./Admin/pages/StationBannedDetail";
import DifferentTotalizer from "./pages/DifferentTotalizer";
import PumpReport from "./pages/PumpReport";
import DailySaleReportTemp from "./pages/DailySaleReportTemp";
import RealTank from "./pages/RealTank";

function Routerdo() {
  const user = useSelector((state) => state.login);
  const location = useLocation();

  const headerPaths = [
    `/${user.accessDb}/main-con/dash`,
    "/user/choose",
    "/usermanual",
    // Add other paths where you want to show the header
  ];

  const shouldShowHeader = headerPaths.includes(location.pathname);

  return (
    <>
      {(() => {
        switch (user.name) {
          case "manager":
            return <Header />;
          case "admin":
            return <AdminHeader />;
          case "kyaw san":
            if (shouldShowHeader) {
              return "";
            } else {
              return <Header />;
            }
          case "pprd":
            if (shouldShowHeader) {
              return <Header show={false} />;
            } else {
              return <Header />;
            }
          case "user":
            if (shouldShowHeader) {
              return <Header show={false} />;
            } else {
              return <Header />;
            }
          default:
            return <Header />;
        }
      })()}
      {/* {
        shouldShowHeader? <MainConDasHeader/> : <AdminHeader/>
      } */}
      {/* <MainConDasHeader/> */}

      {/* <NavigationHeaderCon value={null}/> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {/* <Route path='/kyawsan/home' element={<Home />}></Route> */}
        {/* {
          user.stationId && <Route path={`/${user.stationId}/home`} element={<Home/>} />
        } */}
        <Route path={`/${user.accessDb}/home`} element={<Home />}></Route>
        <Route
          path={`/${user.accessDb}/dailysalereport`}
          element={<DailySaleReportTemp />}
          // element={<DailySaleReportOne />}
        ></Route>
        <Route
          path={`/${user.accessDb}/saledetail`}
          element={<SaleDetail />}
        ></Route>
        <Route
          path={`/${user.accessDb}/fueldatareport`}
          element={<FuelInDailyReport />}
        ></Route>
        <Route
          path={`/${user.accessDb}/dailysalesummaryreport`}
          element={<DailyThisDay />}
        ></Route>
        <Route
          path="/kyawsan/searchreports"
          element={<SearchReports />}
        ></Route>
        <Route
          path={`/${user.accessDb}/tankbalancereport`}
          element={<TankBalanceReport />}
        ></Route>
        <Route
          path={`/${user.accessDb}/salessummarbystation`}
          element={<DailySummaryByStationReport />}
        ></Route>
        <Route
          path={`/${user.accessDb}/statementreport`}
          element={<StatementReport />}
        ></Route>
        <Route
          path={`/${user.accessDb}/onlinemonitoringsalereport`}
          element={<OnlineMonitoringSaleReport />}
        ></Route>
        <Route
          path={`/${user.accessDb}/differentTotalizer`}
          element={<DifferentTotalizer />}
        ></Route>
        <Route
          path={`/${user.accessDb}/categoriesreport`}
          element={<DailySaleCategoriesReport1 />}
        ></Route>
        <Route
          path={`/${user.accessDb}/weekly`}
          element={<WeeklySaleReport />}
        ></Route>
        <Route
          path={`/${user.accessDb}/fuelbalance`}
          element={<FuelBalanceReport />}
        ></Route>
        <Route
          path={`/${user.accessDb}/pumpreport`}
          element={<PumpReport />}
        ></Route>
        <Route path="/kyawsan/adjustment" element={<Adjustment />}></Route>
        <Route
          path={`/${user.accessDb}/tankdemo`}
          element={<TankBalance />}
        ></Route>
        <Route
          path={`/${user.accessDb}/fueltypebalance`}
          element={<FuelTypeBalanceReport />}
        ></Route>
        <Route
          path={`/${user.accessDb}/real-tank`}
          // element={<RealTimeTank />}
          element={<RealTank />}
        ></Route>
        <Route path="/usermanual" element={<UserManual />} />
        {/* kyawsan amdin */}
        <Route
          path={`/${user.accessDb}/main-con/dash`}
          element={<MainConDas />}
        />
        <Route path={`/${user.accessDb}/dashboard`} element={<Dashboard />} />
        <Route path="/kyawsan/main-con/home" element={<Home />} />
        <Route path="/admin/dashboard" element={<DashBoardAd />}></Route>
        <Route
          path="/admin/station-set-up/choose"
          element={<StationSetUpChoose />}
        ></Route>
        <Route
          path="/admin/station-set-up"
          element={<StationSetUpAd />}
        ></Route>
        <Route path="/admin/accounts" element={<AccountAd />}></Route>
        <Route path="/admin/home" element={<HomePageAd />}></Route>
        <Route path="/admin/station/home" element={<DetAdminHome />}></Route>
        <Route path="/admin/account/details" element={<AccountDetails />} />
        <Route path="/admin/station/pprd" element={<StationBanned />} />
        <Route
          path="/admin/choose-collection"
          element={<ChooseStationCollections />}
        />
        <Route path="/admin/create-collection" element={<AddCollections />} />
        <Route path="/admin/banned-choose" element={<StationBannedDetail />} />
        {/* PPRD CHOOSE */}
        <Route path="/user/choose" element={<Pprdchoose />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Routerdo;
