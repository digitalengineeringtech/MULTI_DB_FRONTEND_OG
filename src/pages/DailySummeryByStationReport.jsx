import React, { useState, useRef, useEffect } from "react";
import PageContainer from "../components/PageComponents/PageContainer";
import InputContainer from "../components/PageComponents/InputContainer";
import CalenderComponent from "../components/PageComponents/CalenderComponent";
import StationComponent from "../components/PageComponents/StationComponent";
import { FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../redux/slices/LoginSlice";
import Loading from "../components/Loading";
import NozzleTable from "../components/tables/NozzleTable";
import SaleSummaryByStation from "../components/tables/SaleSummaryByStation";
import {
  fetchDailySaleReportByTimeRange,
  fetchDynamicNozzles,
  getAllKyawSan027DailySaleReports,
  removeOldDats,
} from "../redux/slices/KyawSan027Slice";
import { FcInfo } from "react-icons/fc";
import { EnglishDailySaleSummaryByStation } from "../Language/English/englishDailySaleSummaryByStation";
import { MyanmarDailySaleSummaryByStation } from "../Language/Myanmar/myanmarDailySaleSummaryByStation";
import UsePost from "../MainConDas/components/hooks/UsePost";
import UsePost_2 from "../MainConDas/components/hooks/UsePost_2";

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

function DailySummeryByStationReport() {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [fromDate, setFromDate] = useState(start);
  const [toDate, settoDate] = useState(end);
  const [selectedStation, setSelectedStation] = useState({
    name: "All",
    code: "Please",
    location: "",
    lienseNo: "",
  });
  const [loading, setloading] = useState(false);
  const [okData, setOkData] = useState([]);
  const [dynamic, setDynamic] = useState([]);
  const [isSearch, setIsSearch] = useState();
  const tableRef = useRef();
  const tableRefTwo = useRef();
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(EnglishDailySaleSummaryByStation);
  const [isSelectedStation, setIsSelectedStation] = useState(false);
  const daily = useSelector(getAllKyawSan027DailySaleReports);
  const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();
  const [{ data_g_2, loading_g_2, error_g_2 }, fetchIt_2] = UsePost_2();

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (isSearch) {
      setFromDate(startDate);
      settoDate(endDate);
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarDailySaleSummaryByStation);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishDailySaleSummaryByStation);
    }
    dispatch(removeOldDats());
    setIsSearch(false);
    return () => {
      dispatch(removeOldDats());
    };
  }, [navigate, user, isSearch, endDate, startDate, dispatch]);

  const handleClick = () => {
    if (startDate && endDate) {
      if (selectedStation.code === "Please") {
        setIsSelectedStation(true);
      } else {
        setIsSearch(true);
        setloading(true);
        setIsSelectedStation(false);

        const fetchData = async () => {
          const bomb = [
            user.token,
            startDate,
            endDate,
            selectedStation,
            user.accessDb,
          ];
          setloading(true);
          // await dispatch(fetchDailySaleReportByTimeRange(bomb));
          // await dispatch(fetchDynamicNozzles(bomb));
          fetchIt(
            `/detail-sale/by-date/?sDate=${startDate}&eDate=${endDate}&stationDetailId=${selectedStation.code}&accessDb=${user.accessDb}`,
            user.token
          );

          fetchIt_2(
            `/detail-sale/statement-report?sDate=${startDate}&eDate=${endDate}&stationDetailId=${selectedStation.code}&accessDb=${user.accessDb}`,
            user.token
          );

          setloading(false);
          setIsSearch(false);
        };
        fetchData();
      }
    }
  };

  useEffect(() => {
    if (data_g.result) {
      setOkData(data_g.result);
    }
  }, [data_g, loading_g, error_g]);

  useEffect(() => {
    setloading(loading_g_2);
    if (data_g_2.result) {
      setDynamic(data_g_2.result);
    }
  }, [data_g_2, loading_g_2, error_g_2]);

  useEffect(() => {
    if (daily?.result) {
      setDynamic(daily.result);
    }
  }, [daily, dispatch]);

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
      {okData.length > 0 ? (
        <>
          <SaleSummaryByStation
            language={language}
            selectedStation={selectedStation}
            isSearch={isSearch}
            calenderOne={fromDate}
            calenderTwo={toDate}
            okData={okData}
            tableRef={tableRef}
          />
          <NozzleTable
            language={language}
            tableRef={tableRefTwo}
            okData={dynamic}
          />
        </>
      ) : (
        ""
      )}

      {loading ? <Loading /> : ""}
    </PageContainer>
  );
}

export default DailySummeryByStationReport;
