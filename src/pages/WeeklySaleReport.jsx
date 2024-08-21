import React, { useState, useRef, useEffect } from "react";
import PageContainer from "../components/PageComponents/PageContainer";
import InputContainer from "../components/PageComponents/InputContainer";
import CalenderComponent from "../components/PageComponents/CalenderComponent";
import StationComponent from "../components/PageComponents/StationComponent";
import { FiSearch } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";
import { RiErrorWarningFill, RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../redux/slices/LoginSlice";
import Loading from "../components/Loading";
import WeeklyTable from "../components/tables/Weekly.table";
import {
  fetchATGTanks,
  fetchDailySaleReportByTimeRange,
  getAllKyawSan027DailySaleReports,
  removeOldDats,
} from "../redux/slices/KyawSan027Slice";
import { FcInfo } from "react-icons/fc";
import { EnglishWeeklySaleReport } from "../Language/English/englishWeeklySaleReport";
import { MyanmarWeeklySaleReport } from "../Language/Myanmar/myanmarWeeklySaleReport";
import UsePost from "../MainConDas/components/hooks/UsePost";
import instance from "../axios";
import Balance from "../Dashboard/Components/Balance";
import WeeklyTableTemp from "../components/tables/WeeklyTableTemp";
import { Button } from "primereact/button";

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

function WeeklySaleReport() {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [fromDate, setFromDate] = useState(start);
  const [toDate, settoDate] = useState(end);
  const [click, setClick] = useState(false);
  const [selectedStation, setSelectedStation] = useState({
    name: "All",
    code: "Please",
  });
  const [language, setLanguage] = useState(EnglishWeeklySaleReport);
  const [loading, setloading] = useState(false);
  const [fuel, setFuel] = useState();
  const [okData, setOkData] = useState();
  const [isSearch, setIsSearch] = useState();
  const tableRef = useRef();
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSelectedStation, setIsSelectedStation] = useState(false);
  const datas = useSelector(getAllKyawSan027DailySaleReports);
  const [tankData, setTankData] = useState();
  const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();
  const [dateCount, setDateCount] = useState(0);

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Weekly Sale Report",
    sheet: "Weekly Sale Report",
  });

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (isSearch) {
      setFromDate(startDate);
      settoDate(endDate);
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarWeeklySaleReport);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishWeeklySaleReport);
    }
    dispatch(removeOldDats());
    setIsSearch(false);
    return () => {
      dispatch(removeOldDats());
    };
  }, [navigate, user, isSearch, endDate, startDate, dispatch]);

  const handleClick = () => {
    setClick(true);

    if (startDate && endDate) {
      if (selectedStation.code === "Please") {
        setIsSelectedStation(true);
      } else {
        setIsSearch(true);
        setloading(true);
        setIsSelectedStation(false);
        setDateCount(DateCount(startDate, endDate));

        const fetchData = async () => {
          // const bomb = [user.token, startDate, endDate, selectedStation,user.accessDb];
          setloading(true);
          fetchIt(
            `/detail-sale/by-date/?sDate=${startDate}&eDate=${endDate}&stationDetailId=${selectedStation.code}&accessDb=${user.accessDb}`,
            user.token
          );
          const { data } = await instance.get(
            `/fuel-balance/by-date?sDate=${startDate}&stationId=${selectedStation.code}`,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + user.token,
              },
            }
          );

          const bomb = [
            user.token,
            startDate,
            endDate,
            selectedStation,
            selectedStation,
            // selectedFuelType.code,
            // tankName.code,
            user.accessDb,
          ];
          await dispatch(fetchATGTanks(bomb));
          // await dispatch(fetchDailySaleReportByTimeRange(bomb));
          // setloading(false);
          setIsSearch(false);
          data && setFuel(data?.result);
        };
        fetchData();
      }
    }
  };

  useEffect(() => {
    if (datas?.result?.length > 0) {
      let pureArray = datas?.result[0];
      setTankData(pureArray.data);
      // setloading(false); // Update the state with the new sorted array
    } else {
      setTankData([]);
    }
  }, [datas]);

  const fuelCount = [
    {
      name: "001-Octane Ron(92)",
    },
    {
      name: "002-Octane Ron(95)",
    },
    {
      name: "003-Octane Ron(97)",
    },
    {
      name: "004-Diesel",
    },
    {
      name: "005-Premium Diesel",
    },
  ];

  // const tt = tankData.map((e) => e.oilType);

  const fuelData = tankData?.map((e) => {
    return {
      name:
        e?.oilType == "92 Octane"
          ? "001-Octane Ron(92)"
          : e?.oilType == "95 Octane"
          ? "002-Octane Ron(95)"
          : e?.oilType == "Diesel"
          ? "004-Diesel"
          : e?.oilType == "Super Diesel"
          ? "005-Premium Diesel"
          : "97 RON" || "-",
      id: e.id,
    };
  });

  const format = (date) => {
    const dateObj = new Date(date);

    const day = String(dateObj.getUTCDate()).padStart(2, "0");
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = dateObj.getUTCFullYear();

    const time = dateObj?.toISOString().slice(11, 19);

    return `${day}-${month}-${year} ${time}`;
  };

  const [g, setg] = useState();

  const test = fuelCount?.map((e) => {
    // data_g?.result?.filter((c) => c.fuelType == e.name);

    const time = data_g?.result?.filter((c) => c.fuelType == e.name).length;
    const total = data_g?.result
      ?.filter((c) => c.fuelType == e.name)
      .reduce((a, b) => a + b.saleLiter, 0);

    // console.log(
    //   tankData?.filter(
    //     (item) =>
    //       (item?.oilType == "92 Octane"
    //         ? "001-Octane Ron(92)"
    //         : item?.oilType == "95 Octane"
    //         ? "002-Octane Ron(95)"
    //         : item?.oilType == "Diesel"
    //         ? "004-Diesel"
    //         : item?.oilType == "Super Diesel"
    //         ? "005-Premium Diesel"
    //         : "" || "-") == e.name
    //   )
    // );

    const last_date = data_g?.result
      ?.filter((c) => c.fuelType == e.name)
      ?.map((g) => g.dailyReportDate)[0];

    const balance = data_g?.result
      ?.filter((c) => c.fuelType == e.name)
      ?.map((g) => g.tankBalance)
      ?.reduce((pv, cv) => pv + cv, 0);

    const last = data_g?.result
      ?.filter((c) => c.fuelType == e.name)
      ?.filter((e) => e.dailyReportDate == last_date)
      ?.map((g) => g.tankBalance)
      ?.reduce((pv, cv) => pv + cv, 0);

    // const tank_type =

    const last_test = data_g?.result
      ?.filter((c) => c.fuelType == e.name)
      ?.filter((e) => e.dailyReportDate == last_date);
    // ?.map((g) => g.tankBalance)
    // ?.reduce((pv, cv) => pv + cv, 0);

    const last_tankBalance = tankData
      ?.filter(
        (item) =>
          item?.oilType ==
          (e.name == "001-Octane Ron(92)"
            ? "92 Octane"
            : e.name == "002-Octane Ron(95)"
            ? "95 Octane"
            : e.name == "004-Diesel"
            ? "Diesel"
            : e.name == "005-Premium Diesel"
            ? "Super Diesel"
            : "" || "-")
      )
      ?.map((g) => g.volume)
      ?.reduce((pv, cv) => pv + cv, 0);

    const tank_count = tankData?.filter(
      (item) =>
        item?.oilType ==
        (e.name == "001-Octane Ron(92)"
          ? "92 Octane"
          : e.name == "002-Octane Ron(95)"
          ? "95 Octane"
          : e.name == "004-Diesel"
          ? "Diesel"
          : e.name == "005-Premium Diesel"
          ? "Super Diesel"
          : "" || "-")
    );

    const tankBalance = tankData
      ?.filter(
        (item) =>
          (item?.oilType == "92 Octane"
            ? "001-Octane Ron(92)"
            : item?.oilType == "95 Octane"
            ? "002-Octane Ron(95)"
            : item?.oilType == "Diesel"
            ? "004-Diesel"
            : item?.oilType == "Super Diesel"
            ? "005-Premium Diesel"
            : "" || "-") == e.name
      )
      ?.map((g) => g.volume)
      ?.reduce((pv, cv) => pv + cv, 0);

    const tankBalancesByTankNo = {}; // Object to store tankNo and last tankBalance

    if (data_g?.result) {
      data_g.result.forEach((entry) => {
        const { tankNo, fuelType, dailyReportDate, tankBalance } = entry;

        // Check if fuelType matches and dailyReportDate is last_date
        if (fuelType === e.name && dailyReportDate === last_date) {
          // Update the last tankBalance for this tankNo (if newer)
          tankBalancesByTankNo[tankNo] = Math.max(
            tankBalancesByTankNo[tankNo] || 0,
            tankBalance
          );
        }
      });
    }

    // Access last tankBalances for all tankNos
    const allTankBalances = Object.values(tankBalancesByTankNo);
    const balance_update = allTankBalances.reduce((pv, cv) => pv + cv, 0); // Extract all tankBalances as an array
    const arr = allTankBalances.length;

    console.log(
      last,
      last_tankBalance,
      tankData,
      "khhhhhhhkkkkkkkkkkkkkkkkkkkkkkkkkk",
      last_test,
      allTankBalances
    );

    const uniqueDates = new Set();

    // Iterate over vouchers and add dates to the Set
    data_g?.result?.forEach((voucher) => {
      uniqueDates.add(voucher.dailyReportDate); // Assuming voucher.date is the date property
    });

    // Return the size of the Set (number of unique dates)
    // // Filter data based on the fuel type
    // const filteredData = data_g?.result?.filter((c) => c.fuelType === e.name);

    // // Extract tank numbers and get unique values
    // const uniqueTanks = [
    //   ...new Set(filteredData.map((tank) => tank.tankNo)),
    // ];

    // console.log(uniqueTanks, "....");

    // const tankCount = data_g?.result?.filter((c) => c.fuelType == e.name);

    // console.log(tankCount, "....");

    return {
      // tank: e.id,
      fuelType: e.name,
      capacity:
        e.name == "003-Octane Ron(97)"
          ? 0.0
          : !last_tankBalance
          ? 14550 * (arr > 0 ? arr : 1)
          : 14550 * (tank_count?.length > 0 ? tank_count?.length : 1),
      balance: balance ? balance : tankBalance,
      cash: total,
      // fuelIn: data_g?.result
      //   ?.filter((c) => c.tankNo == e.id)
      //   .reduce((a, b) => a + b.fuelIn, 0),
      opening: data_g?.result
        ?.filter((c) => c.tankNo == e.id)
        ?.reverse()[0]
        ?.tankBalance.toFixed(3),
      avg: dateCount ? total / dateCount : total,
      // avg: uniqueDates?.size == 0 ? total : total / uniqueDates?.size,
      // last_balance: last ? last : tankBalance,
      last_balance: last_tankBalance ? last_tankBalance : balance_update,
    };
  });

  //old version
  // const test = fuelData?.map((e) => {
  //   // data_g?.result?.filter((c) => c.fuelType == e.name);

  //   const time = data_g?.result?.filter((c) => c.tankNo == e.id).length;
  //   const total = data_g?.result
  //     ?.filter((c) => c.tankNo == e.id)
  //     .reduce((a, b) => a + b.saleLiter, 0);

  //   const tankBalance = tankData?.filter((item) => item.id == e.id)[0]?.volume;
  //   const balance = data_g?.result
  //     ?.filter((c) => c.tankNo == e.id)[0]
  //     ?.tankBalance.toFixed(3);

  //   console.log(time, total, "lllllllllllllllllllllllll");
  //   return {
  //     tank: e.id,
  //     fuelType: e.name,
  //     capacity: 14540,
  //     balance: balance ? balance : tankBalance,
  //     cash: total,
  //     // fuelIn: data_g?.result
  //     //   ?.filter((c) => c.tankNo == e.id)
  //     //   .reduce((a, b) => a + b.fuelIn, 0),
  //     opening: data_g?.result
  //       ?.filter((c) => c.tankNo == e.id)
  //       ?.reverse()[0]
  //       ?.tankBalance.toFixed(3),
  //     avg: time == 0 ? total : total / time,
  //   };
  // });

  // const capacity = fuel?.slice(0, 4);
  const capacity = test;

  //  useEffect(() => {
  //         if (datas === "error") {
  //           dispatch(LogoutUser());
  //         }

  //     if (datas?.result?.length > 0) {
  //       setOkData(datas.result);
  //     }

  //    }, [datas, dispatch]);

  useEffect(() => {
    if (data_g?.result) {
      setOkData(data_g?.result);
      setloading(loading_g);
    }
  }, [data_g, loading_g, error_g]);

  const DateCount = (start, end) => {
    const dateFormat = (dateString) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    };
    const d1 = new Date(dateFormat(start));
    const d2 = new Date(dateFormat(end));
    const count = Math.abs((d1 - d2) / (1000 * 60 * 60 * 24)) + 1;

    return count;
  };

  console.log(tableRef, "ref");

  // console.log(DateCount(calenderOne, calenderTwo), "date dif.....");

  return (
    <PageContainer
      language={false}
      value={language}
      setValue={setLanguage}
      title={language.main_title}
    >
      <InputContainer>
        <div className="flex flex-wrap gap-[20px]">
          <CalenderComponent
            date={start}
            start={true}
            value={startDate}
            setValue={setStartDate}
            title={language.start_date}
          />
          <CalenderComponent
            date={end}
            value={endDate}
            setValue={setEndDate}
            title={language.end_date}
          />
          <StationComponent
            title={language.station}
            value={selectedStation}
            setValue={setSelectedStation}
          />
        </div>
        {isSelectedStation && (
          <div className="flex mt-3 animate-[translate-y-6]   duration-200 text-red-400 gap-[10px] justify-start text-[16px] items-center">
            <RiErrorWarningFill className="!text-red-400 " /> Please Select
            Station
          </div>
        )}
        <div className="flex-2 mt-2">
          <Button
            onClick={handleClick}
            className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"
          >
            <FiSearch className=" scale-150" />
            {language.search}
          </Button>
        </div>
      </InputContainer>
      {okData?.length > 0 ? (
        <>
          {/* <WeeklyTable
            language={language}
            selectedStation={selectedStation}
            isSearch={isSearch}
            calenderOne={fromDate}
            calenderTwo={toDate}
            okData={okData}
            capacity={test}
            tableRef={tableRef}
          /> */}
          <WeeklyTableTemp
            language={language}
            selectedStation={selectedStation}
            isSearch={isSearch}
            calenderOne={fromDate}
            calenderTwo={toDate}
            okData={okData}
            dateCount={dateCount}
            capacity={test}
            tableRef={tableRef}
          />
          {/* <div className="flex p-3  text-[16px] mt-[10px] mb-[50px] items-center justify-start gap-3">
            <button
              onClick={() => onDownload()}
              className="flex items-center justify-center gap-2 text-md"
            >
              {language.toExcel}
              <RiFileExcel2Fill size={30} />
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 text-md"
            >
              {language.toPrint}
              <AiFillPrinter size={30} />
            </button>
          </div> */}
        </>
      ) : (
        click && (
          <div className=" flex text-center justify-center mt-[100px] text-3xl font-bold text-gray-200">
            There is no data in this period !
          </div>
        )
      )}

      {loading ? <Loading /> : ""}
    </PageContainer>
  );
}

export default WeeklySaleReport;
