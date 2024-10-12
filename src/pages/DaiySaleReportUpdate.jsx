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
  fetchDynamicNozzles,
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

function DailySaleReportUpdate() {
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let combinedByFuelType = [];

  const tableRef = useRef();
  const [loading, setloading] = useState(false);
  const [okData, setOkData] = useState();
  const [calenderOne, setCalenderOne] = useState(start);
  const [calenderTwo, setCalenderTwo] = useState(end);
  const [fuelType, setFuelType] = useState({ name: "All", code: "Please" });
  const [tankName, setTankName] = useState({ name: "All", code: "Please" });
  const [type, setType] = useState("Gallon");
  const types = ["Liter", "Gallon"];
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

  console.log(datas, "...........hhhhh.....", data_g_2);

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

  const handleClick = () => {
    calcu = [];
    combinedByFuelType = [];
    setOkData([]);
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
            // console.log(
            //   `/fuelIn/pagi/by-date/1?stationId=${selectedStation?.code}&sDate=${calenderOne}&eDate=${calenderTwo} `
            // );
            let data = response.data.result;
            // data = data.splice(0, 3);
            setFuelIn(data.reverse());
            // setloading(false);
          })
          .catch(function (error) {
            console.log(error);
            // navigate('/')
            // dispatch(LogoutUser())
            // setloading(false);
          });

        // const fetchData = async () => {
        //   const bomb = [
        //     user.token,
        //     calenderOne,
        //     calenderTwo,
        //     selectedStation,
        //     // selectedFuelType.code,
        //     tankName.code,
        //     user.accessDb,
        //   ];
        //   await dispatch(fetchATGTanks(bomb));
        // };
        // fetchData();

        const fetchData1 = async () => {
          const bomb = [
            user.token,
            calenderOne,
            calenderTwo,
            selectedStation,
            user.accessDb,
          ];
          setloading(true);
          await dispatch(fetchDynamicNozzles(bomb));
          setloading(false);
          // setIsSearch(false);
        };
        fetchData1();

        getIt_1(
          `/station-detail/get/single?_id=${selectedStation.code}`,
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
      datas?.result?.length > 0 && setloading(false); // Update the state with the new sorted array
    } else {
      setOkData([]);
    }

    if (data_get_1?.result?.length > 0) {
      let pureArray = data_get_1.result[0].tankCount;
      setTankCount(pureArray);
      setStation(data_get_1.result[0]);
      //   setloading(false); // Update the state with the new sorted array
    } else {
      setTankCount([]);
    }

    // if (datas?.result?.length > 0) {
    //   let pureArray = datas?.result[0];
    //   setTankData(pureArray.data);
    //   //   setloading(false); // Update the state with the new sorted array
    // } else {
    //   setTankData([]);
    // }
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
  if (tankCount && okData) {
    console.log(tankCount, "this is tank Count");
    for (let i = 1; i <= tankCount; i++) {
      const fuelReceive = fuelIn
        ?.filter((e) => e.tankNo == i)
        .map((e) => e.receive_balance)
        .reduce((pv, cv) => pv + cv, 0);

      ///update start
      const start = okData?.filter((c) => i == c.tankNo).reverse();

      const tankOpening = start[0]?.tankBalance + start[0]?.saleLiter;
      const tankClosing = start[start.length - 1]?.tankBalance;
      const tankDiff = Math.abs(
        Math.abs(tankOpening - tankClosing) - fuelReceive
      );
      // .map((item) => item.saleLiter)

      ///update end
      const combine = okData
        ?.filter((c) => i == c.tankNo)
        .map((item) => item.saleLiter)
        .reduce((pv, cv) => pv + cv, 0);

      const test = okData?.filter((c) => i == c.tankNo);

      const test1 = Object.values(
        test.reduce((acc, curr) => {
          const nozzleNo = curr.nozzleNo;

          if (!(nozzleNo in acc)) {
            acc[nozzleNo] = [];
          }

          acc[nozzleNo].push(curr);
          return acc;
        }, {})
      );

      const test2 = test1.map((e) => {
        const arr = e.filter((item) => item.totalizer_liter != 0);
        const totalizerOpen =
          arr.reverse()[0]?.totalizer_liter -
          arr.reverse()[arr.length - 1]?.saleLiter;

        const totalizerClose = e[0].totalizer_liter;
        return totalizerClose - totalizerOpen;
      });

      // const newSale = datas?.result.

      const fuelType = tankData?.filter((c) => i == c.id)[0]?.oilType;
      const fuelType_vocono = okData?.filter((c) => i == c.tankNo)[0]?.fuelType;
      //   console.log(fuelType_vocono, "....k..");
      const normalTank = tankData?.filter((e) => e.id == i)[0]?.volume;

      const newSale =
        datas?.result
          ?.filter((e) => e.fuelType == fuelType_vocono)
          ?.map((e) => e.totalSaleLiter)
          .reduce((pv, cv) => Number(pv) + Number(cv), 0) || 0;

      console.log(newSale, fuelType_vocono, "this is console.log");

      const open = okData?.filter((c) => i == c.tankNo).reverse()[0];
      const opening_balance = open?.tankBalance - open?.saleLiter;

      const close = okData?.filter((c) => i == c.tankNo)[0]?.tankBalance;

      const fuel = [
        "001-Octane Ron(92)",
        "002-Octane Ron(95)",
        "004-Diesel",
        "005-Premium Diesel",
      ];

      const notInclude = fuel.find((e) => e != fuelType_vocono);

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
            : fuelType_vocono == "001-Octane Ron(92)"
            ? "92 RON"
            : fuelType_vocono == "002-Octane Ron(95)"
            ? "95 RON"
            : fuelType_vocono == "004-Diesel"
            ? "HSD"
            : fuelType_vocono == "005-Premium Diesel"
            ? "PHSD"
            : fuelType_vocono == "Petrol 92"
            ? "92 RON"
            : // : "" || "-",
            "" || notInclude == "001-Octane Ron(92)"
            ? "92 RON"
            : notInclude == "002-Octane Ron(95)"
            ? "95 RON"
            : notInclude == "004-Diesel"
            ? "HSD"
            : notInclude == "005-Premium Diesel"
            ? "PHSD"
            : notInclude == "Petrol 92"
            ? "92 RON"
            : "",
        cash: newSale,
        //new
        // cash: test2.reduce((pv, cv) => pv + cv, 0) || 0,
        //old
        // cash: combine || 0,
        fuelIn: fuelReceive || 0,
        opening: opening_balance || normalTank || 0,
        stationId: data_g_2.length != 0 ? data_g_2?.result[0]?.stationId : "-",
        balance: close || normalTank || 0,
        stationId: station,
        open: start,
        tankOpen: start.length > 0 ? tankOpening : 0,
        tankClosing: start.length > 0 ? tankClosing : 0,
        tankDif: start.length > 0 ? tankDiff : 0,
        pumpTest:
          datas?.result
            ?.filter((e) => e.fuelType == fuelType_vocono)
            ?.map((e) => e.pumptest)
            .reduce((pv, cv) => Number(pv) + Number(cv), 0)
            .toFixed(3) || 0.0,
        other:
          datas?.result
            ?.filter((e) => e.fuelType == fuelType_vocono)
            ?.map((e) => e.other)
            .reduce((pv, cv) => Number(pv) + Number(cv), 0)
            .toFixed(3) || 0,

        fuelTypeVocono:
          fuelType_vocono == "92 Octane"
            ? "92 RON"
            : fuelType_vocono == "95 Octane"
            ? "95 RON"
            : fuelType_vocono == "Diesel"
            ? "HSD"
            : fuelType_vocono == "Super Diesel"
            ? "PHSD"
            : fuelType_vocono == "Petrol 92"
            ? "92 RON"
            : "" || "-",
        // fuelTypeVocono: fuelType_vocono,
      };
      calcu.push(data);
    }
  }

  // Combine the data by fuelType
  combinedByFuelType = Object.values(
    calcu.reduce((acc, curr) => {
      if (!acc[curr.fuelType]) {
        acc[curr.fuelType] = { ...curr };
      } else {
        acc[curr.fuelType].cash += curr.cash;
        acc[curr.fuelType].fuelIn += curr.fuelIn;
        acc[curr.fuelType].opening += curr.opening;
        acc[curr.fuelType].balance += curr.balance;
        acc[curr.fuelType].tankDif += curr.tankDif;
        acc[curr.fuelType].tankOpen += curr.tankOpen;
        acc[curr.fuelType].tankClosing += curr.tankClosing;
      }
      //   } else {
      //     acc[curr.fuelType].cash += curr.cash;
      //     acc[curr.fuelType].fuelIn += curr.fuelIn;
      //     acc[curr.fuelType].opening += curr.opening;
      //     acc[curr.fuelType].balance += curr.balance;
      //     acc[curr.fuelType].tankDif += curr.tankDif;
      //   }
      //   setloading(false);
      return acc;
    }, {})
  );

  // console.log(combinedByFuelType, "...", calcu);

  return (
    <PageContainer language={false} title={language.title1}>
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

      {combinedByFuelType?.length > 0 && datas?.result?.length > 0 ? (
        <>
          {/* <FuelBalanceTable okData={okData} tableRef={tableRef} setOkData={setOkData} /> */}
          <div className=" flex items-center justify-end gap-3 ms-auto">
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
          </div>
          <FuelTableTemp
            type={type}
            start={calenderOne}
            end={calenderTwo}
            language={language}
            tableRef={tableRef}
            okData={combinedByFuelType}
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

export default DailySaleReportUpdate;
