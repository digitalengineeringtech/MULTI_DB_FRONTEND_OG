import React, { useEffect, useRef, useState } from "react";
import CalenderComponent from "../../../components/PageComponents/CalenderComponent";
import PumpTestTable from "../Tables/PumpTest.table";
import { AiOutlineSearch } from "react-icons/ai";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UsePost from "../hooks/UsePost";
import Loading from "../../../components/Loading";

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

function PumpTest({ title, language }) {
  const [endDate, setEndDate] = useState(end);
  const [startDate, setStartDate] = useState(start);
  const [okData, setOkData] = useState([]);
  const [thisLoading, setThisLoading] = useState(true);
  const [stationId, setStationId] = useState(0);
  const [ninety2TotalLiter, SetNinety2LotalLiter] = useState(0);
  const [ninety2Price, setNinety2Price] = useState(0);
  const [ninety5TotalLier, SetNinety5LotalLiter] = useState(0);
  const [ninety5Price, setNinety5Price] = useState(0);
  const [dieselLotalLiter, SetDieselLotalLiter] = useState(0);
  const [dieselPrice, setDieselPrice] = useState(0);
  const [phsdLotalLiter, SetphshLotalLiter] = useState(0);
  const [phsdPrice, setPhsdPrice] = useState(0);
  const [totalPrice, SetTotalPrice] = useState(0);

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
  });

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const station = urlParams.get("station");

    setStationId(station);

    fetchIt(
      `/detail-sale/by-date/?sDate=${startDate}&eDate=${endDate}&stationDetailId=${station}`,
      user.token
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate, dispatch]);

  const handleSearch = () => {
    fetchIt(
      `/detail-sale/by-date/?sDate=${startDate}&eDate=${endDate}&stationDetailId=${stationId}`,
      user.token
    );
  };

  useEffect(() => {
    if (data_g.result) {
      setOkData(data_g.result);
    }
    setThisLoading(loading_g);
  }, [data_g, loading_g, error_g]);

  useEffect(() => {
    let ninety2 = 0;
    let ninety2_price = 0;
    let ninety5 = 0;
    let ninety5_price = 0;
    let diesel = 0;
    let diesel_price = 0;
    let premium = 0;
    let premium_price = 0;
    let totalPrice = 0;

    if (okData) {
      okData.forEach((obj) => {
        if (obj.vehicleType === "Pump Test") {
          if (obj.fuelType === "001-Octane Ron(92)") {
            ninety2 += obj.saleLiter;
            ninety2_price = obj.salePrice;
          }
          if (obj.fuelType === "002-Octane Ron(95)") {
            ninety5 += obj.saleLiter;
            ninety5_price = obj.salePrice;
          }
          if (obj.fuelType === "004-Diesel") {
            diesel += obj.saleLiter;
            diesel_price = obj.salePrice;
          }
          if (obj.fuelType === "005-Premium Diesel") {
            premium += obj.saleLiter;
            premium_price = obj.salePrice;
          }
          totalPrice += obj.totalPrice;
        }
      });
      SetNinety2LotalLiter(ninety2.toFixed(3));
      SetNinety5LotalLiter(ninety5.toFixed(3));
      SetDieselLotalLiter(diesel.toFixed(3));
      SetphshLotalLiter(premium.toFixed(3));
      SetTotalPrice(totalPrice.toFixed(3));
      setNinety2Price(ninety2_price);
      setNinety5Price(ninety5_price);
      setDieselPrice(diesel_price);
      setPhsdPrice(premium_price);
    }
  }, [okData]);

  return (
    <div className=" py-2 w-[50%] drop-shadow-md m-4">
      <div className="w-[97%] drop-shadow-md mt-[30px] gap-5  flex justify-around items-center mx-auto relative">
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
      </div>
      <div className="w-[97%] mx-auto px-7">
        <button
          onClick={handleSearch}
          className="flex gap-1 text-sm items-center justify-center bg-blue-800 hover:bg-blue-700 text-white mt-8 p-2 rounded"
        >
          <AiOutlineSearch size={20} />
          SEARCH
        </button>
      </div>
      <div className="w-[97%]  drop-shadow-md  overflow-hidden flex flex-wrap justify-center items-center mx-auto relative mt-5">
        {/* updateing */}
        {/* <div className='loading fixed top-0 left-0 right-0 bottom-0 bg-gray-200 flex items-center justify-center bg-opacity-[0.6] z-50'>
              <div >
                 <div class="spinner-icon">Updating in Tablet!</div>
              </div>
  </div>    */}
        {/* updateing */}
        {thisLoading ? <Loading /> : ""}
        <PumpTestTable
          title={language.pump_test_tabel}
          no={language.no}
          liter={language.liter}
          price={language.price}
          fuel_type={language.fuel_type}
          amount={language.amount}
          remark={language.remark}
          to_excel={language.toExcel}
          to_print={language.toPrint}
          ninety2Liter={ninety2TotalLiter}
          ninety2Price={ninety2Price}
          ninety5Liter={ninety5TotalLier}
          ninety5Price={ninety5Price}
          dieselLiter={dieselLotalLiter}
          dieselPrice={dieselPrice}
          phsdLiter={phsdLotalLiter}
          phsdPrice={phsdPrice}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}

export default PumpTest;
