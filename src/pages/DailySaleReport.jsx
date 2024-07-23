import React, { useState, useEffect, useRef } from "react";
import PageContainer from "../components/PageComponents/PageContainer";
import InputContainer from "../components/PageComponents/InputContainer";
import CalenderComponent from "../components/PageComponents/CalenderComponent";
import PurposeOfUseComponent from "../components/PageComponents/PurposeOfUseComponent";
import NozzleComponent from "../components/PageComponents/NozzleComponent";
import FuelTypeComponent from "../components/PageComponents/FuelTypeComponent";
import Loading from "../components/Loading";
import { LogoutUser } from "../redux/slices/LoginSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../axios";
import DailyTable from "../components/tables/DailySaleTable";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import StationComponent from "../components/PageComponents/StationComponent";
import { FiSearch } from "react-icons/fi";
import { myanmarDailySaleReport } from "../Language/Myanmar/myanmarDailySaleReport";
import { englishDailySaleReport } from "../Language/English/englishDailySaleReport";

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

export default function DailySaleReport() {
  const [endDate, setEndDate] = useState(end);
  const [startDate, setStartDate] = useState(start);
  const [selectedNodeKeys, setSelectedNodeKeys] = useState({
    name: "All",
    code: "Please",
  });
  const [selectedNozzle, setSelectedNozzle] = useState({
    name: "All",
    code: "Please",
  });
  const [selectedFuelType, setSelectedFuelType] = useState({
    name: "All",
    code: "Please",
  });
  const [selectedStation, setSelectedStation] = useState({
    name: "All",
    code: "Please",
  });
  const [language, setLanguage] = useState(englishDailySaleReport);

  const [loading, setloading] = useState(false);
  const [okData, setOkData] = useState([]);
  const tableRef = useRef();

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    setloading(true);
    const token = user.token;

    instance
      .get("/detail-sale", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        const data = response.data.result;
        setOkData(data.reverse());
        setloading(false);
      })
      .catch(function (error) {
        setloading(false);
        navigate("/");
        dispatch(LogoutUser());
      });
  }, [navigate, dispatch, user]);

  const handleClick = () => {
    var utcTimeOne = new Date(startDate);
    var utcTimeTwo = new Date(endDate);

    setloading(true);
    const token = user.token;

    instance
      .get("/detail-sale", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        const data = response.data.result;
        const filteredData = data.filter((obj) => {
          const date = new Date(obj.createAt);
          return date >= utcTimeOne && date <= utcTimeTwo;
        });

        if (filteredData) {
          if (
            selectedNodeKeys.code === "Please" &&
            selectedNozzle.code === "Please" &&
            selectedFuelType.code === "Please"
          ) {
            setOkData(filteredData.reverse());
          } else if (
            selectedNodeKeys.code !== "Please" &&
            selectedNozzle.code !== "Please" &&
            selectedFuelType.code !== "Please"
          ) {
            const FinalData = filteredData.filter((obj) => {
              return (
                obj.vehicleType === selectedNodeKeys.code &&
                obj.nozzleNo === parseInt(selectedNozzle.code) &&
                obj.fuelType === selectedFuelType.code
              );
            });

            setOkData(FinalData.reverse());
          } else if (
            selectedNodeKeys.code !== "Please" &&
            selectedNozzle.code !== "Please"
          ) {
            const FinalData = filteredData.filter((obj) => {
              return (
                obj.vehicleType === selectedNodeKeys.code &&
                obj.nozzleNo === parseInt(selectedNozzle.code)
              );
            });

            setOkData(FinalData.reverse());
          } else if (
            selectedNodeKeys.code !== "Please" &&
            selectedFuelType.code !== "Please"
          ) {
            const FinalData = filteredData.filter((obj) => {
              return (
                obj.vehicleType === selectedNodeKeys.code &&
                obj.fuelType === selectedFuelType.code
              );
            });

            setOkData(FinalData.reverse());
          } else if (
            selectedNozzle.code !== "Please" &&
            selectedFuelType.code !== "Please"
          ) {
            const FinalData = filteredData.filter((obj) => {
              return (
                obj.fuelType === selectedFuelType.code &&
                obj.nozzleNo === parseInt(selectedNozzle.code)
              );
            });

            setOkData(FinalData.reverse());
          } else if (selectedNodeKeys.code !== "Please") {
            const FinalData = filteredData.filter((obj) => {
              return obj.vehicleType === selectedNodeKeys.code;
            });

            setOkData(FinalData.reverse());
          } else if (selectedNozzle.code !== "Please") {
            const FinalData = filteredData.filter((obj) => {
              return obj.nozzleNo === parseInt(selectedNozzle.code);
            });

            setOkData(FinalData.reverse());
          } else if (selectedFuelType.code !== "Please") {
            const FinalData = filteredData.filter((obj) => {
              return obj.fuelType === selectedFuelType.code;
            });

            setOkData(FinalData.reverse());
          }
        }

        setloading(false);
      })
      .catch(function (error) {
        setloading(false);
      });
  };

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Daily Sale",
    sheet: "Daily Sale",
  });

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
            value={startDate}
            setValue={setStartDate}
            title={language.start_date}
          />
          <CalenderComponent
            value={endDate}
            setValue={setEndDate}
            title={language.end_date}
          />
          <PurposeOfUseComponent
            value={selectedNodeKeys}
            setValue={setSelectedNodeKeys}
          />
          <NozzleComponent
            value={selectedNozzle}
            setValue={setSelectedNozzle}
          />
          <FuelTypeComponent
            value={selectedFuelType}
            setValue={setSelectedFuelType}
          />
          <StationComponent
            title={language.station}
            value={selectedStation}
            setValue={setSelectedStation}
          />
        </div>
        <div className="flex-2">
          <button
            onClick={handleClick}
            className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"
          >
            <FiSearch className=" scale-150" /> Search
          </button>
        </div>
      </InputContainer>
      <DailyTable
        okData={okData}
        language={language}
        setOkData={setOkData}
        tableRef={tableRef}
      />

      <div className="flex p-3  text-[16px] mt-[30px] mb-[50px] items-center justify-start gap-3">
        <button
          onClick={() => onDownload()}
          className="flex items-center justify-center gap-2 text-md"
        >
          {" "}
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
      </div>
      {loading ? <Loading /> : ""}
    </PageContainer>
  );
}
