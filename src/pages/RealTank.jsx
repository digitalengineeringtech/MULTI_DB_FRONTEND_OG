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
  fetchATGTanks,
  fetchFuelBalanceByTimeRange,
  getAllKyawSan027DailySaleReports,
  removeOldDats,
} from "../redux/slices/KyawSan027Slice";
import { FcInfo } from "react-icons/fc";
import { EnglishFuelBalance } from "../Language/English/englishFuelBalanceReport";
import { MyanmarFuelBalanceRport } from "../Language/Myanmar/myanmarFuelBalanceReport";
import UsePost_2 from "../MainConDas/components/hooks/UsePost_2";
import FuelInTable from "../components/tables/FuelInTable";
import FuelTableTemp from "../components/tables/FuelTableTemp";
import UseGet from "../MainConDas/components/hooks/UseGet";
import UseGet_1 from "../MainConDas/components/hooks/UseGet_1";
import instance from "../axios";
import FuelTable from "../components/tables/FuelTable";
import { Button } from "primereact/button";
import { RiErrorWarningFill } from "react-icons/ri";
import { Dropdown } from "primereact/dropdown";

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

function RealTank() {
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [type, setType] = useState("Gallon");
  const types = ["Liter", "Gallon"];

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
  // const datas = useSelector(getAllKyawSan027DailySaleReports);
  const [{ data_g_2, loading_g_2, error_g_2 }, fetchIt_2] = UsePost_2();
  const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
  const [tankCount, setTankCount] = useState();
  const [fuelIn, setFuelIn] = useState();
  const [tankData, setTankData] = useState();
  const [station, setStation] = useState();
  const datas = useSelector(getAllKyawSan027DailySaleReports);

  let isoStartDate = start.toLocaleDateString("fr-CA");

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

  // console.log(user.accessDb, "lllllllllllllllllllllllllllllllllllll")

  let sd = new Date(calenderOne);
  let ed = new Date(calenderTwo);

  const handleClick = () => {
    if (calenderOne) {
      if (selectedStation.code === "Please") {
        setIsSelectedStation(true);
      } else {
        setloading(true);
        setIsSelectedStation(false);

        instance
          // .get(`/fuelIn/pagi/1?stationId=${selectedStation?.code}`, {
          .get(
            // `/fuelIn/pagi/1?stationId=${selectedStation?.code}`,
            `/fuelIn/pagi/by-date/1?stationId=${selectedStation?.code}&sDate=${calenderOne}&eDate=${calenderTwo} `,
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
              `/fuelIn/pagi/by-date/1?stationId=${selectedStation?.code}&sDate=${calenderOne}&eDate=${calenderTwo} `
            );
            let data = response.data.result;
            // data = data.splice(0, 3);
            setFuelIn(data.reverse());
            setloading(false);
          })
          .catch(function (error) {
            console.log(error);
            // navigate('/')
            // dispatch(LogoutUser())
            setloading(false);
          });

        const fetchData = async () => {
          const bomb = [
            user.token,
            calenderOne,
            calenderTwo,
            selectedStation,
            selectedStation,
            // selectedFuelType.code,
            tankName.code,
            user.accessDb,
          ];
          await dispatch(fetchATGTanks(bomb));
        };
        fetchData();

        getIt_1(
          `/station-detail/get/single?_id=${selectedStation.code}&accessDb=${user.accessDb}`,
          user.token
        );

        
        fetchIt_2(
          // `/fuel-balance/pagi/1?sDate=${isoStartDate}&stationId=${selectedStation?.code}`,
          `/detail-sale/by-date/?sDate=${calenderOne}&eDate=${calenderTwo}&stationDetailId=${selectedStation.code}&accessDb=${user.accessDb}`,
          user.token
        );
      }
    }
  };

  useEffect(() => {
    if (data_g_2 === "error") {
      dispatch(LogoutUser());
    }
    if (data_g_2?.result?.length > 0) {
      let pureArray = [...data_g_2.result]; // Create a shallow copy of the array
      //pureArray.sort((a, b) => a.tankNo - b.tankNo); // Sort the new array
      setOkData(pureArray);
      setloading(false); // Update the state with the new sorted array
    } else {
      setOkData([]);
    }

    if (data_get_1?.result?.length > 0) {
      let pureArray = data_get_1.result[0].tankCount;
      setTankCount(pureArray);
      setStation(data_get_1.result[0]);
      setloading(false); // Update the state with the new sorted array
    } else {
      setTankCount([]);
    }

    if (datas?.result?.length > 0) {
      let pureArray = datas?.result[0];
      setTankData(pureArray.data);
      setloading(false); // Update the state with the new sorted array
    } else {
      setTankData([]);
    }
  }, [data_g_2, data_get_1, datas, dispatch]);

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

  let calcu = [];
  // const calcu = okData?.result?.map((e) => {
  //   const combine = okData
  //     ?.filter((c) => e.tankNo == c.tankNo)
  //     .map((item) => item.cash)
  //     .reduce((pv, cv) => pv + cv, 0);

  //   const receive = okData
  //     ?.filter((c) => e.tankNo == c.tankNo)
  //     .map((item) => item.fuelIn)
  //     .reduce((pv, cv) => pv + cv, 0);

  //   const open = okData?.filter((c) => e.tankNo == c.tankNo)[0]?.opening;

  //   const close = okData
  //     ?.filter((c) => e.tankNo == c.tankNo)
  //     .reverse()[0]?.balance;

  //   const capacity = okData
  //     ?.filter((c) => e.tankNo == c.tankNo)
  //     .reverse()[0]?.capacity;

  //   return {
  //     tankNo: e.tankNo,
  //     fuelType: e.fuelType,
  //     cash: combine,
  //     fuelIn: receive,
  //     opening: open,
  //     stationId: data_g_2.length != 0 ? data_g_2?.result[0]?.stationId : "-",
  //     balance: close,
  //     capacity: capacity,
  //   };
  // });

  //updata.....................................................

  // function getTotalizerDifferences(okData) {
  //   const totalizerDifferences = {};

  //   okData?.forEach((entry) => {
  //     const { nozzleNo, devTotalizar_liter } = entry;

  //     if (!totalizerDifferences[nozzleNo]) {
  //       totalizerDifferences[nozzleNo] = {
  //         last: devTotalizar_liter,
  //         opening: devTotalizar_liter,
  //       };
  //     } else {
  //       const lastBalance = totalizerDifferences[nozzleNo].last;
  //       const difference = lastBalance - devTotalizar_liter;
  //       totalizerDifferences[nozzleNo] = {
  //         last: totalizerDifferences[nozzleNo].opening,
  //         opening: devTotalizar_liter,
  //         difference: difference,
  //       };
  //     }
  //   });

  //   return totalizerDifferences;
  // }

  // const totalizerDifferences = getTotalizerDifferences(okData);
  // console.log(totalizerDifferences, okData);

  // if (tankCount && okData) {
  //   for (let i = 1; i <= tankCount; i++) {
  //     const combine = okData
  //       ?.filter((c) => i == c.tankNo)
  //       .map((item) => item.saleLiter)
  //       .reduce((pv, cv) => pv + cv, 0);

  //     const fuelType = tankData?.filter((c) => i == c.id)[0]?.oilType;

  //     const normalTank = tankData?.filter((e) => e.id == i)[0]?.volume;

  //     const fuelReceive = fuelIn
  //       ?.filter((e) => e.tankNo == i)
  //       .map((e) => e.receive_balance)
  //       .reduce((pv, cv) => pv + cv, 0);

  //     const open = okData?.filter((c) => i == c.tankNo).reverse()[0];
  //     const opening_balance = open?.tankBalance - open?.saleLiter;

  //     console.log(
  //       okData?.filter((c) => i == c.tankNo),
  //       open,
  //       open?.tankBalance,
  //       open?.saleLiter,
  //       opening_balance,
  //       "......dddd.................",
  //       fuelType,
  //       normalTank
  //     );
  //     const close = okData?.filter((c) => i == c.tankNo)[0]?.tankBalance;

  //     const gain = Math.abs(Math.abs(opening_balance - close) - combine);

  //     const gain_rec =
  //       Number(close) -
  //       Number(opening_balance) -
  //       Number(fuelIn) +
  //       Number(combine);

  //     const data = {
  //       tankNo: i,
  //       fuelType:
  //         fuelType == "Petrol 92"
  //           ? "92 RON"
  //           : fuelType == "95 Octane"
  //           ? "95 RON"
  //           : fuelType == "Diesel"
  //           ? "HSD"
  //           : fuelType == "Super Diesel"
  //           ? "PHSD"
  //           : "" || "-",
  //       cash: combine || 0,
  //       fuelIn: fuelReceive || 0,
  //       opening: opening_balance || normalTank || 0,
  //       stationId: data_g_2.length != 0 ? data_g_2?.result[0]?.stationId : "-",
  //       balance: close || normalTank || 0,
  //       stationId: station,
  //       gl: (fuelReceive == NaN ? gain_rec : gain) || 0,
  //       // capacity: capacity,
  //     };
  //     calcu.push(data);
  //   }
  // }

  // Function to calculate the totalizer differences for each nozzle
  function getTotalizerDifferences(okData) {
    const totalizerDifferences = {};

    okData?.forEach((entry) => {
      const { nozzleNo, devTotalizar_liter, tankNo, saleLiter } = entry;

      if (!totalizerDifferences[nozzleNo]) {
        totalizerDifferences[nozzleNo] = {
          last: devTotalizar_liter,
          opening: devTotalizar_liter,
          tank: tankNo,
        };
      } else {
        const lastBalance = totalizerDifferences[nozzleNo].last;
        const difference = lastBalance - (devTotalizar_liter - saleLiter);
        totalizerDifferences[nozzleNo] = {
          opening: devTotalizar_liter - saleLiter,
          last: lastBalance,
          difference: difference,
          tank: totalizerDifferences[nozzleNo].tank,
          // saleLiter: saleLiter,
        };
      }
    });

    return Object.values(totalizerDifferences);
  }

  // Assuming tankData contains a mapping of nozzles to tanks
  // Create a mapping of nozzle numbers to tank numbers
  const nozzleToTankMap = {};
  tankData?.forEach((tank) => {
    if (tank.nozzles) {
      tank.nozzles.forEach((nozzleNo) => {
        nozzleToTankMap[nozzleNo] = tank.id;
      });
    }
  });

  const totalizerDifferences = getTotalizerDifferences(okData);
  console.log(data_get_1, tankCount, okData);


  if (tankCount && okData) {
    for (let i = 1; i <= tankCount; i++) {
      // Filter okData for the current tank number
      const combine = totalizerDifferences
        ?.filter((c) => i == c.tank)
        .map((item) => item.difference)
        .reduce((pv, cv) => pv + cv, 0);
      // const combine = okData
      //   ?.filter((c) => i == c.tankNo)
      //   .map((item) => item.saleLiter)
      //   .reduce((pv, cv) => pv + cv, 0);

      const fuelType = tankData?.filter((c) => i == c.id)[0]?.oilType;

      const normalTank = tankData?.filter((e) => e.id == i)[0]?.volume;

      const fuelReceive = fuelIn
        ?.filter((e) => e.tankNo == i)
        .map((e) => e.receive_balance)
        .reduce((pv, cv) => pv + cv, 0);

      const open = okData
        ?.filter((c) => i == c.tankNo)
        .sort()
        .reverse()[0];
      const opening_balance = open?.tankBalance + open?.saleLiter;

      // console.log(
      //   okData?.filter((c) => i == c.tankNo),
      //   open,
      //   open?.tankBalance,
      //   open?.saleLiter,
      //   opening_balance,
      //   "......dddd.................",
      //   fuelType,
      //   normalTank
      // );

      console.log(
        okData?.filter((c) => i == c.tankNo),
        "this is tank data"
      );

      const close = okData?.filter((c) => i == c.tankNo)[0]?.tankBalance;

      // Get the nozzle numbers for the current tank
      const nozzles = tankData?.filter((c) => c.id == i)[0]?.nozzleNo || [];
      console.log(nozzles, "this is nozzles");

      // Calculate the totalizer difference for the nozzles of this tank
      let totalizerDifference = 0;
      nozzles.forEach((nozzleNo) => {
        totalizerDifference += totalizerDifferences[nozzleNo]?.difference || 0;
      });

      const gain = Math.abs(opening_balance - close) - combine;

      const gain_rec =
        Number(normalTank || close) -
        Number(opening_balance || normalTank) -
        // Number((normalTank || close) + combine) -
        Number(fuelIn) +
        Number(combine);

      const data = {
        tankNo: i,
        fuelType:
          fuelType == "92 Octane"
            ? "92 RON"
            : fuelType == "95 Octane"
            ? "95 RON"
            : fuelType == "Diesel"
            ? "HSD"
            : fuelType == "Super Diesel"
            ? "PHSD"
            : fuelType == "Petrol 92"
            ? "92 RON"
            : "" || "-",
        cash: combine || 0,
        fuelIn: fuelReceive || 0,
        // opening: (normalTank || close) + combine,
        opening: opening_balance || normalTank || 0,
        stationId: data_g_2.length != 0 ? data_g_2?.result[0]?.stationId : "-",
        balance: normalTank || close || 0,
        stationId: station,
        // gl: (fuelReceive == NaN ? gain_rec : gain) || 0,
        gl: gain_rec,
        totalizerDifference, // Add the totalizer difference here
        // capacity: capacity,
      };
      calcu.push(data);
    }
  }

  console.log(calcu, "...................");

  return (
    <PageContainer language={false} title={language.title2}>
      <InputContainer>
        <div className="flex flex-wrap gap-[20px]">
          <CalenderComponent
            date={start}
            start={true}
            title={language.s_date}
            value={calenderOne}
            setValue={setCalenderOne}
          />
          <CalenderComponent
            date={end}
            title={language.e_date}
            value={calenderTwo}
            setValue={setCalenderTwo}
          />
          {/* <FuelTypeComponent
            title={language.fuel_type}
            value={fuelType}
            setValue={setFuelType}
          /> */}
          {/* <TankComponent
            language={language.tank_no}
            value={tankName}
            setValue={setTankName}
          /> */}
          <StationComponent
            title={language.station}
            value={selectedStation}
            setValue={setSelectedStation}
          />
          <div className="flex flex-col">
            <label htmlFor="calendar-12h" className="font-bold block mb-2">
              Shown by
            </label>
            <Dropdown
              // title={"Shown by"}
              value={type}
              onChange={(e) => {
                setType(e.value);
              }}
              options={types}
              placeholder="Liter or Kyat"
              className="!h-[30px] w-[150px] flex items-center justify-center "
              // checkmark={true}
              // highlightOnSelect={false}
            />
          </div>
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
      {calcu?.length > 0 ? (
        <>
          {/* <div className=" flex items-center justify-end gap-3 ms-auto">
            <h1 className="text-[1rem]">Shown by :</h1>
            <Dropdown
              // title={language.station}
              value={type}
              onChange={(e) => {
                setType(e.value);
              }}
              options={types}
              placeholder="Liter or Kyat"
              className=" w-[120px] md:w-14rem"
              // checkmark={true}
              // highlightOnSelect={false}
            />
          </div> */}
          {/* <FuelBalanceTable okData={okData} tableRef={tableRef} setOkData={setOkData} /> */}
          <FuelTable
            type={type}
            language={language}
            tableRef={tableRef}
            okData={calcu}
            status={tankData.length}
            sd={calenderOne}
            ed={calenderTwo}
          />
        </>
      ) : (
        ""
      )}

      {loading ? <Loading /> : ""}
    </PageContainer>
  );
}

export default RealTank;
