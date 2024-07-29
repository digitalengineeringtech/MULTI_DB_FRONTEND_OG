import React, { useState, useRef, useEffect } from "react";
import PageContainer from "../components/PageComponents/PageContainer";
import InputContainer from "../components/PageComponents/InputContainer";
import CalenderComponent from "../components/PageComponents/CalenderComponent";
import StationComponent from "../components/PageComponents/StationComponent";
import { FiSearch } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../redux/slices/LoginSlice";
import Loading from "../components/Loading";
import WeeklyTable from "../components/tables/Weekly.table";
import {
  fetchDailySaleReportByTimeRange,
  getAllKyawSan027DailySaleReports,
  removeOldDats,
} from "../redux/slices/KyawSan027Slice";
import { FcInfo } from "react-icons/fc";
import { EnglishWeeklySaleReport } from "../Language/English/englishWeeklySaleReport";
import { MyanmarWeeklySaleReport } from "../Language/Myanmar/myanmarWeeklySaleReport";
import UsePost from "../MainConDas/components/hooks/UsePost";
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

function WeeklySaleReport() {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [fromDate, setFromDate] = useState(start);
  const [toDate, settoDate] = useState(end);
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
  const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();

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
    if (startDate && endDate) {
      if (selectedStation.code === "Please") {
        setIsSelectedStation(true);
      } else {
        setIsSearch(true);
        setloading(true);
        setIsSelectedStation(false);

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
          console.log(data, "this is data ................");
          // await dispatch(fetchDailySaleReportByTimeRange(bomb));
          setloading(false);
          setFuel(data?.result);
          setIsSearch(false);
        };
        fetchData();
      }
    }
  };

  const capacity = fuel?.slice(0, 4);

  //  useEffect(() => {
  //         if (datas === "error") {
  //           dispatch(LogoutUser());
  //         }

  //     if (datas?.result?.length > 0) {
  //       setOkData(datas.result);
  //     }

  //    }, [datas, dispatch]);

  useEffect(() => {
    setloading(loading_g);
    if (data_g?.result) {
      setOkData(data_g?.result);
    }
  }, [data_g, loading_g, error_g]);

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
      {okData ? (
        <>
          <WeeklyTable
            language={language}
            selectedStation={selectedStation}
            isSearch={isSearch}
            calenderOne={fromDate}
            calenderTwo={toDate}
            okData={okData}
            capacity={capacity}
            tableRef={tableRef}
          />
        </>
      ) : (
        ""
      )}

      {loading ? <Loading /> : ""}
    </PageContainer>
  );
}

export default WeeklySaleReport;
