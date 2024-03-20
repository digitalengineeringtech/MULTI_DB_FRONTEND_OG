import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginStore from "./redux/stores/LoginStore";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import FuelDataReport from "./pages/DataInput/FuelData.report";
// import DailySaleReport from './pages/DailySaleReport'
import DailyThisDay from "./pages/DailyThisDay.report";
import SearchReports from "./pages/SearchReports";
import DailySummaryByStationReport from "./pages/DailySummeryByStationReport";
import Adjustment from "./pages/Adjustment";
import TankBalance from "./pages/TankBalance";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import WeeklySaleReport from "./pages/WeeklySaleReport";
import StatementReport from "./pages/StatementReport";
import "primereact/resources/primereact.css";
import FuelBalanceReport from "./pages/FuelBalanceReport";
import TankBalanceReport from "./pages/TankBalanceReport";
import FuelTypeBalanceReport from "./pages/FuelTypeBalanceReport";
import Test from "./pages/Test";
import UserManual from "./components/UserManual/UserManual";
import Dashboard from "./Dashboard/Dashboard";
import DailySaleReportOne from "./pages/DailySaleReport1";
import DailySaleCategoriesReport1 from "./pages/DailySaleCategoriesReport1";
import OnlineMonitoringSaleReport from "./pages/OnlineMonitoringSaleReport";
import FuelInDailyReport from "./pages/Lap";
import Routerdo from "./Routerdo";

function App() {
  let persistor = persistStore(LoginStore);

  return (
    <Provider store={LoginStore}>
      <PersistGate persistor={persistor}>
        {/* <BrowserRouter> 
             <Header />
          <Routes>
        <Route  path='/' element={<Login/>}></Route> 
        <Route path='/kyawsan/home' element={<Home />}></Route>
        <Route path='/kyawsan/dailysalereport' element={<DailySaleReportOne/>}></Route>
        <Route path='/kyawsan/fueldatareport' element={<FuelInDailyReport />}></Route>
        <Route path='/kyawsan/dailysalesummaryreport' element={<DailyThisDay />}></Route>
        <Route path='/kyawsan/searchreports' element={<SearchReports />}></Route>   
        <Route path='/kyawsan/tankbalancereport' element={<TankBalanceReport />}></Route>    
        <Route path='/kyawsan/salessummarbystation' element={<DailySummaryByStationReport/>}></Route>    
        <Route path='/kyawsan/statementreport' element={<StatementReport/>}></Route>    
        <Route path='/kyawsan/onlinemonitoringsalereport' element={<OnlineMonitoringSaleReport/>}></Route>
        <Route path='/kyawsan/categoriesreport' element={<DailySaleCategoriesReport1 />}></Route>
        <Route path='/kyawsan/weekly' element={<WeeklySaleReport />}></Route>
        <Route path='/kyawsan/fuelbalance' element={<FuelBalanceReport/>}></Route>
        <Route path='/kyawsan/adjustment' element={<Adjustment />}></Route>
        <Route path='/kyawsan/tankdemo' element={<TankBalance/>}></Route>
        <Route path="/kyawsan/fueltypebalance" element={<FuelTypeBalanceReport/>}></Route>    
        <Route path='/test' element={<Test/>} />
        <Route path='/kyawsan/usermanual' element={<UserManual/>}/>
        <Route path='/kyawsan/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      <Footer/>    
         
    </BrowserRouter> */}
        <BrowserRouter>
          <Routerdo />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
