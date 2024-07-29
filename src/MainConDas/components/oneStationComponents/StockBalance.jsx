import React, { useEffect, useState } from 'react'
import CalenderComponent from '../../../components/PageComponents/CalenderComponent'
import { AiOutlineSearch } from 'react-icons/ai';
import StockBalanceTableMain from '../Tables/StockBalance.table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchStockBalance } from '../../../redux/slices/KyawSan027Slice';
import UsePost from '../hooks/UsePost';
import FuelTypeComponent from '../../../components/PageComponents/FuelTypeComponent';
import Loading from '../../../components/Loading';



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

function StockBalance({language,setNavigation,edit,handleAdjust,success=false,kk=false}) {
  const [endDate, setEndDate] = useState(end);
  const [startDate, setStartDate] = useState(start);
 const [selectedFuelType, setSelectedFuelType] = useState({name: "All", code: "Please"});
  const [okData, setOkData] = useState([]);
  const [stockBalanceLoading, setStockBalanceLoading] = useState(true);
  const [station, setStation] = useState(0);
   const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(50);
  const [totalLength, setTotalLength] = useState(0);
  
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  
  const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();
  

    
  const handleSearch = () => {
  const fuelTypeRoute = selectedFuelType.code === "Please" ? "" : `&tank=${selectedFuelType.code}`;
   
  fetchIt(`stock-balance/bydate/pagi/1?sDate=${startDate}&eDate=${endDate}&stationId=${station}${fuelTypeRoute}`,user.token)
  };
    
useEffect(() => {
  if (!user.login) {
      navigate("/");
    }
    
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const station = urlParams.get('station');
  setStation(station);  
  
   const fuelTypeRoute = selectedFuelType.code === "Please" ? "" : `&tank=${selectedFuelType.code}`;
   
  fetchIt(`stock-balance/bydate/pagi/1?sDate=${startDate}&eDate=${endDate}&stationId=${station}${fuelTypeRoute}`,user.token)
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  
    
useEffect(() => {
  if (!user.login) {
      navigate("/");
  }
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const station = urlParams.get('station');
  setStation(station);  
  
   const fuelTypeRoute = selectedFuelType.code === "Please" ? "" : `&tank=${selectedFuelType.code}`;
   
  fetchIt(`stock-balance/bydate/pagi/1?sDate=${startDate}&eDate=${endDate}&stationId=${station}${fuelTypeRoute}`,user.token)
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [success]);
  

  
const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
         
        const pageNo = event.page + 1;
  
  const fuelTypeRoute = selectedFuelType.code === "Please" ? "" : `&tank=${selectedFuelType.code}`;
      
  fetchIt(`stock-balance/bydate/pagi/${pageNo}?sDate=${startDate}&eDate=${endDate}&stationId=${station}${fuelTypeRoute}`,user.token)
       
    };
    
useEffect(() => {
    if (data_g.result) {
      setOkData(data_g.result);
      setTotalLength(data_g.totalCount);
    }
    setStockBalanceLoading(loading_g);
  }, [
    data_g,loading_g,error_g
  ]);
  
 
  return (
    <div className=" py-2  drop-shadow-md m-4 w-[100%]">
      <div className="w-[97%] drop-shadow-md mt-[30px] gap-5  flex justify-around items-center mx-auto relative">
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
        <FuelTypeComponent
          value={selectedFuelType}
          setValue={setSelectedFuelType}
          title={language.tank}
        />
      </div>
      <div className="w-[97%] mx-auto px-7">
        <button
          onClick={handleSearch}
          className="flex gap-1 text-sm items-center justify-center bg-blue-800 hover:bg-blue-700 text-white mt-8 p-2 rounded"
        >
          <AiOutlineSearch size={20} />
          {language.search}
        </button>
      </div>
      <div className="w-[97%]  drop-shadow-md  overflow-hidden flex flex-wrap justify-center items-center mx-auto relative mt-5">
        {stockBalanceLoading ? <Loading /> : ""}
        <StockBalanceTableMain
          onPageChange={onPageChange}
          totalLength={totalLength}
          first={first}
          rows={rows}
          handleAdjust={handleAdjust}
          edit={edit}
          setNavigation={setNavigation}
          okData={okData}
          language={language}
          kk={kk}
        />
      </div>
    </div>
  );
}

export default StockBalance