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
import CategoryTable from "../components/tables/Category.table";
import { EnglishDailySaleCategoriesReport } from "../Language/English/englishDailySaleCategoriesReport";
import { MyanmarDailySaleCategoriesReport } from "../Language/Myanmar/myanmarDailySaleCategoriesReport";
import {
  fetchDailySaleReportByTimeRange,
  getAllKyawSan027DailySaleReports,
  removeOldDats,
} from "../redux/slices/KyawSan027Slice";
import { FcInfo } from "react-icons/fc";
import PurposeOfUseComponent from "../components/PageComponents/PurposeOfUseComponent";
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

function DailySaleCategoriesReport1() {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [fromDate] = useState(new Date());
  const [toDate] = useState(new Date());
  const [selectedStation, setSelectedStation] = useState({
    name: "All",
    code: "Please",
  });
  const [loading, setloading] = useState(false);
  const [okData, setOkData] = useState();
  const [one, setOne] = useState();
  const tableRef = useRef();
  const user = useSelector((state) => state.login);
  const datas = useSelector(getAllKyawSan027DailySaleReports);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(EnglishDailySaleCategoriesReport);
  const [changeLanguage, setChangeLanguage] = useState();
  const [isSelectedStation, setIsSelectedStation] = useState(false);

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarDailySaleCategoriesReport);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishDailySaleCategoriesReport);
    }
    dispatch(removeOldDats());
    return () => {
      dispatch(removeOldDats());
    };
  }, [user, navigate, dispatch]);

  const [selectedNodeKeys, setSelectedNodeKeys] = useState({
    name: "All",
    code: "Please",
  });

  const handleClick = () => {
    setOne(selectedNodeKeys.code);
    if (selectedStation.code === "Please") {
      setIsSelectedStation(true);
    } else {
      setIsSelectedStation(false);
      const fetchData = async () => {
        const bomb = [
          user.token,
          startDate,
          endDate,
          selectedStation,
          user.accessDb,
          selectedNodeKeys,
        ];
        setloading(true);
        await dispatch(fetchDailySaleReportByTimeRange(bomb));
        setloading(false);
      };
      fetchData();
    }
  };

  useEffect(() => {
    if (datas === "error") {
      dispatch(LogoutUser());
    }

    if (datas?.result?.length > 0) {
      setOkData(datas.result);
    }
  }, [datas, dispatch]);

  useEffect(() => {
    // setloading(true);

    if (changeLanguage?.code === "Myanmar") {
      setLanguage(MyanmarDailySaleCategoriesReport);
    }
    if (changeLanguage?.code === "English") {
      setLanguage(EnglishDailySaleCategoriesReport);
    }

    const timer = setTimeout(() => {
      setloading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [changeLanguage]);

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: `Daily Sale Categories Report`,
    sheet: `Daily Sale Categories Report`,
  });

  return (
    <PageContainer
      language={false}
      value={changeLanguage}
      setValue={setChangeLanguage}
      title={language.mainTitle}
    >
      <InputContainer>
        <div className="flex flex-wrap gap-[20px]">
          <CalenderComponent
            date={start}
            start={true}
            value={startDate}
            setValue={setStartDate}
            title={language.startDate}
          />
          <CalenderComponent
            date={end}
            value={endDate}
            setValue={setEndDate}
            title={language.endDate}
          />
          <PurposeOfUseComponent
            title="Categories"
            value={selectedNodeKeys}
            setValue={setSelectedNodeKeys}
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
            className="w-[120px] h-[40px] text-md mt-2 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"
          >
            <FiSearch className=" scale-150" /> {language.search}
          </Button>
        </div>
      </InputContainer>
      {okData?.length > 0 && (
        <>
          <CategoryTable
            language={language}
            startDate={startDate.toLocaleDateString()}
            endDate={endDate.toLocaleDateString()}
            tableRef={tableRef}
            okData={okData}
            single={one}
          />
          <div className="flex p-3  text-[16px] mt-[30px] mb-[50px] items-center justify-start gap-3">
            <button
              onClick={() => onDownload()}
              className="flex items-center justify-center gap-2 text-md"
            >
              {language.toExcel} <RiFileExcel2Fill size={30} />
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 text-md"
            >
              {language.toPrint}
              <AiFillPrinter size={30} />
            </button>
          </div>
        </>
      )}

      {loading ? <Loading /> : ""}
    </PageContainer>
  );
}

export default DailySaleCategoriesReport1;
