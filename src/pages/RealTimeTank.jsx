import React, { useEffect, useState } from "react";
import PageContainer from "../components/PageComponents/PageContainer";
import InputContainer from "../components/PageComponents/InputContainer";
import CalenderComponent from "../components/PageComponents/CalenderComponent";
import StationComponent from "../components/PageComponents/StationComponent";
import FuelTypeComponent from "../components/PageComponents/FuelTypeComponent";
import TankComponent from "../components/PageComponents/TankComponent";
import { FiSearch } from "react-icons/fi";
import RealTimeTankTable from "../components/tables/RealTimeTank.table";
import { FcInfo } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchATGTanks,
  getAllKyawSan027DailySaleReports,
  removeOldDats,
} from "../redux/slices/KyawSan027Slice";
import { LogoutUser } from "../redux/slices/LoginSlice";
import { EnglishTankData } from "../Language/English/englishTankDataReport";
import { MyanmarTankData } from "../Language/Myanmar/myanmarTankData";
import { RiErrorWarningFill } from "react-icons/ri";

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

function RealTimeTank() {
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [endDate, setEndDate] = useState(end);
  const [startDate, setStartDate] = useState(start);
  const [language, setLanguage] = useState(EnglishTankData);
  const [selectedStation, setSelectedStation] = useState({
    name: "All",
    code: "Please",
  });
  const [selectedFuelType, setSelectedFuelType] = useState({
    name: "All",
    code: "Please",
  });
  const [tankName, setTankName] = useState({ name: "All", code: "Please" });
  const [okData, setOkData] = useState([]);
  const [loading, setLoading] = useState();
  const [isStation, setIsStaion] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const [time, setTime] = useState("");
  const [pprd, setPprd] = useState("");

  const datas = useSelector(getAllKyawSan027DailySaleReports);

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarTankData);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishTankData);
    }
    dispatch(removeOldDats());
    return () => {
      dispatch(removeOldDats());
    };
  }, [navigate, user, dispatch]);

  const handleClick = async () => {
    if (startDate && endDate) {
      if (selectedStation.code === "Please") {
        setIsStaion(true);
      } else {
        setIsStaion(false);
        setLoading(true);
        const fetchData = async () => {
          const bomb = [
            user.token,
            startDate,
            endDate,
            selectedStation,
            selectedFuelType.code,
            tankName.code,
            user.accessDb,
          ];
          await dispatch(fetchATGTanks(bomb));
        };
        fetchData();
      }
      if (tankName.code !== "Please") {
        const fetchData = async () => {
          const bomb = [
            user.token,
            startDate,
            endDate,
            selectedStation,
            selectedFuelType.code,
            tankName.code,
            user.accessDb,
          ];
          await dispatch(fetchATGTanks(bomb));
        };
        fetchData();
        setLoading(false);
      }
    }
  };

  console.log('====================================');
  console.log(okData);
  console.log('====================================');

  useEffect(() => {
    if (datas === "error") {
      dispatch(LogoutUser());
    }
    if (datas?.msg === "tank") {
      if (datas?.result?.length > 0) {
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        let timee = datas?.result[0]?.createdAt;

        const dateObj = new Date(timee);
        const day = dateObj?.getUTCDate();
        const month = months[dateObj?.getUTCMonth()];
        const year = dateObj?.getUTCFullYear();
        const time = dateObj?.toISOString()?.slice(11, 19);
        const formattedDate = `${day}-${month}-${year} ${time}`;

        setTime(formattedDate);
        setPprd(datas.result[0]?.stationDetailId.lienseNo);

        setOkData(datas?.result[0]?.data);
        setNotFound(false);
        if (tankName.code !== "Please") {
          let kk = datas?.result[0].data;
          let kdkd = kk.filter((e) => e.id === Number(tankName.code));
          setOkData(kdkd);
        }
      }
    }

    if (datas?.result?.length === 0) {
      if (notFound) {
        setNotFound(false);
      } else {
        setNotFound(true);
      }
      setOkData([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datas, dispatch]);

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
            title={language.date}
          />
          {/* <FuelTypeComponent
          value={selectedFuelType}
          setValue={setSelectedFuelType}
          /> */}
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
        {isStation && (
          <div className="flex animate-[translate-y-6]   duration-200 text-blue-500 gap-[10px] justify-start text-[16px] items-center">
            <RiErrorWarningFill className="!text-red-400 " /> Please Select
            Station
          </div>
        )}
        <div className="flex-2">
          <button
            onClick={handleClick}
            className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"
          >
            <FiSearch className=" scale-150" /> {language.search}
          </button>
        </div>
      </InputContainer>
      {okData.length !== 0 ? (
        <RealTimeTankTable
          language={language}
          pprd={pprd}
          time={time}
          okData={okData}
        />
      ) : (
        ""
      )}
      {notFound ? (
        <p className=" container mx-auto  mt-[20px]  font-extrabold text-xl flex items-center gap-4">
          <FcInfo />
          Tank Data Not Found!
        </p>
      ) : (
        ""
      )}
    </PageContainer>
  );
}

export default RealTimeTank;
