import React, { useRef, useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// TankBalanceReport
import "react-calendar/dist/Calendar.css";
import { LogoutUser } from "../redux/slices/LoginSlice";
import Loading from "../components/Loading";
import PageContainer from "../components/PageComponents/PageContainer";
import InputContainer from "../components/PageComponents/InputContainer";
import CalenderComponent from "../components/PageComponents/CalenderComponent";
import FuelTypeComponent from "../components/PageComponents/FuelTypeComponent";
import StationComponent from "../components/PageComponents/StationComponent";
import TankComponent from "../components/PageComponents/TankComponent";
import { FiSearch } from "react-icons/fi";
import FuelBalanceReportTable from "../components/tables/FuelBalanceReport.table";
import {
  fetchFuelBalanceByTimeRange,
  getAllKyawSan027DailySaleReports,
  removeOldDats,
} from "../redux/slices/KyawSan027Slice";
import { FcInfo } from "react-icons/fc";
import { EnglishFuelBalance } from "../Language/English/englishFuelBalanceReport";
import { MyanmarFuelBalanceRport } from "../Language/Myanmar/myanmarFuelBalanceReport";
import UsePost_2 from "../MainConDas/components/hooks/UsePost_2";
import FuelInTable from "../components/tables/FuelInTable";
import FuelRecieveTableLittle from "../Dashboard/Components/Table/FuelRecieve.table";
import instance from "../axios";

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

function FuelBalanceReport() {
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tableRef = useRef();
  const [loading, setloading] = useState(false);
  const [okData, setOkData] = useState();
  const [calenderOne, setCalenderOne] = useState(start);
  const [calenderTwo, setCalenderTwo] = useState(end);
  const [fuelType, setFuelType] = useState({ name: "All", code: "Please" });
  const [tankName, setTankName] = useState({ name: "All", code: "Please" });
  const [selectedStation, setSelectedStation] = useState({
    name: "All",
    code: "Please",
  });
  const [language, setLanguage] = useState(EnglishFuelBalance);
  const [isSelectedStation, setIsSelectedStation] = useState(false);
  const datas = useSelector(getAllKyawSan027DailySaleReports);
  const [{ data_g_2, loading_g_2, error_g_2 }, fetchIt_2] = UsePost_2();

  let isoStartDate = start.toLocaleDateString("fr-CA");
  let isoEndDate = end.toLocaleDateString("fr-CA");

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarFuelBalanceRport);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishFuelBalance);
    }
    dispatch(removeOldDats());
    return () => {
      dispatch(removeOldDats());
    };
  }, [navigate, user, dispatch]);

  let sd = new Date(calenderOne);
  let ed = new Date(calenderTwo);

  const fuelTypeRoute =
    fuelType.code === "Please" ? "" : `&fuel_type=${fuelType.code}`;
  const tankNoRoute =
    tankName.code === "Please" ? "" : `&tankNo=${tankName.code}`;

  const handleClick = () => {
    if (calenderOne) {
      if (selectedStation.code === "Please") {
        setIsSelectedStation(true);
      } else {
        // setloading(true);
        // setIsSelectedStation(false);
        // fetchIt_2(
        //   `/fuel-balance/pagi/1?sDate=${isoStartDate}&stationId=${selectedStation?.code}`,
        //   user.token
        // );
        // const fetchData = async () => {
        //   const bomb = [
        //     user.token,
        //     calenderOne,
        //     selectedStation,
        //     fuelType,
        //     tankName,
        //     user.accessDb,
        //     calenderTwo,
        //   ];
        //   setloading(true);
        //   await dispatch(fetchFuelBalanceByTimeRange(bomb));
        //   setloading(false);
        // };
        // fetchData();
        setloading(true);
        instance
          // .get(`/fuelIn/pagi/1?stationId=${selectedStation?.code}`, {
          .get(
            // `/fuelIn/pagi/1?stationId=${selectedStation?.code}`,
            `/fuelIn/pagi/by-date/1?stationId=${selectedStation?.code}&sDate=${calenderOne}&eDate=${calenderTwo}${tankNoRoute}${fuelTypeRoute}`,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + user.token,
              },
            }
          )
          .then(function (response) {
            console.log(response, "this is response");
            console.log(
              `/fuelIn/pagi/by-date/1?stationId=${selectedStation?.code}&sDate=${calenderOne}&eDate=${calenderTwo}${tankNoRoute}${fuelTypeRoute}`
            );
            let data = response.data.result;
            // data = data.splice(0, 3);
            setOkData(data.reverse());
            setloading(false);
          })
          .catch(function (error) {
            console.log(error);
            // navigate('/')
            // dispatch(LogoutUser())
            setloading(false);
          });
      }
    }
  };

  console.log(datas);

  useEffect(() => {
    if (datas === "error") {
      dispatch(LogoutUser());
    }
    if (datas?.result?.length > 0) {
      let pureArray = [...datas.result]; // Create a shallow copy of the array
      pureArray.sort((a, b) => a.tankNo - b.tankNo); // Sort the new array
      setOkData(pureArray); // Update the state with the new sorted array
    } else {
      setOkData([]);
    }
  }, [datas, dispatch]);

  console.log(".lllllllllllllllllllllllllllll", okData);

  const fuelData = [
    {
      fuelType: "001-Octane Ron(92)",
    },
    {
      fuelType: "002-Octane Ron(95)",
    },
    {
      fuelType: "004-Diesel",
    },
    {
      fuelType: "005-Premium Diesel",
    },
  ];

  const calcu =
    okData &&
    data_g_2?.result?.map((e) => {
      const combine = okData
        ?.filter((c) => e.tankNo == c.tankNo)
        .map((item) => item.cash)
        .reduce((pv, cv) => pv + cv, 0);

      const receive = okData
        ?.filter((c) => e.tankNo == c.tankNo)
        .map((item) => item.fuelIn)
        .reduce((pv, cv) => pv + cv, 0);

      const open = okData?.filter((c) => e.tankNo == c.tankNo)[0]?.opening;

      const close = okData
        ?.filter((c) => e.tankNo == c.tankNo)
        .reverse()[0]?.balance;

      const capacity = okData
        ?.filter((c) => e.tankNo == c.tankNo)
        .reverse()[0]?.capacity;

      return {
        fuelType: e.fuelType,
        tankNo: e.tankNo,
        cash: combine,
        fuelIn: receive,
        opening: open,
        stationId: data_g_2.length != 0 ? data_g_2?.result[0]?.stationId : "-",
        balance: close,
        capacity: capacity,
      };
    });

  console.log("===ssssssssss=================================");
  console.log(calcu, okData);
  console.log("====sssss================================");

  console.log(okData, "this is okData");

  return (
    <PageContainer language={false} title={language.title}>
      <InputContainer>
        <div className="flex flex-wrap gap-[20px]">
          <CalenderComponent
            title={language.date}
            value={calenderOne}
            setValue={setCalenderOne}
          />
          <CalenderComponent
            title={language.date}
            value={calenderTwo}
            setValue={setCalenderTwo}
          />
          <FuelTypeComponent
            title={language.fuel_type}
            value={fuelType}
            setValue={setFuelType}
          />
          <TankComponent
            language={language.tank_no}
            value={tankName}
            setValue={setTankName}
          />
          <StationComponent
            title={language.station}
            value={selectedStation}
            setValue={setSelectedStation}
          />
        </div>
        {isSelectedStation && (
          <div className="flex mt-3 animate-[translate-y-6]   duration-200 text-blue-500 gap-[10px] justify-start text-[16px] items-center">
            <FcInfo /> Please Select Station
          </div>
        )}
        <div className="flex-2">
          <button
            onClick={handleClick}
            className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"
          >
            <FiSearch className=" scale-150" />
            {language.search}
          </button>
        </div>
      </InputContainer>

      {okData?.length > 0 && <FuelRecieveTableLittle okData={okData} />}

      {calcu?.length > 0 ? (
        <>
          {/* <FuelBalanceTable okData={okData} tableRef={tableRef} setOkData={setOkData} /> */}
          {/* <FuelInTable
            language={language}
            tableRef={tableRef}
            okData={calcu}
            sd={calenderOne}
            ed={calenderTwo}
          /> */}
        </>
      ) : (
        ""
      )}

      {loading ? <Loading /> : ""}
    </PageContainer>
  );
}

export default FuelBalanceReport;
