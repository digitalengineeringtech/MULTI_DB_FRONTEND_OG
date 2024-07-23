import React, {useRef,useState,useEffect  } from 'react'
import 'react-calendar/dist/Calendar.css';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// TankBalanceReport
import 'react-calendar/dist/Calendar.css';
import { LogoutUser } from '../redux/slices/LoginSlice';
import Loading from '../components/Loading';
import PageContainer from '../components/PageComponents/PageContainer';
import InputContainer from '../components/PageComponents/InputContainer';
import CalenderComponent from '../components/PageComponents/CalenderComponent';
import FuelTypeComponent from '../components/PageComponents/FuelTypeComponent';
import StationComponent from '../components/PageComponents/StationComponent';
import TankComponent from '../components/PageComponents/TankComponent';
import { FiSearch } from 'react-icons/fi';
import FuelBalanceReportTable from '../components/tables/FuelBalanceReport.table';
import { fetchFuelBalanceByTimeRange, fetchStockBalance, getAllKyawSan027DailySaleReports, removeOldDats } from '../redux/slices/KyawSan027Slice';
import { FcInfo } from 'react-icons/fc';
import { EnglishTankBalance } from '../Language/English/englishTankBalanceReport';
import { MyanmarTankBalance } from '../Language/Myanmar/myanmarTankBalanceReport';
import TankStockTable from '../components/tables/TankStock';
import StockBalanceTable from '../components/tables/StockBalance.table';
import { EnglishStockBalance } from '../Language/English/englishStockBalance';
import { MyanmarStockBalance } from '../Language/Myanmar/myanmarStockBalance';




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


function TankBalanceReport() {
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const tableRef = useRef();
  const [loading, setloading] = useState(false)
  const [okData, setOkData] = useState()
  const [endDate, setEndDate] = useState(end)
  const [startDate, setStartDate] = useState(start);
  const [fuelType, setFuelType] = useState({name: "All", code: "Please"});
  const [selectedStation, setSelectedStation] = useState({name: "All", code: "Please"});
  const [language, setLanguage] = useState(EnglishStockBalance);
  const [isSelectedStation, setIsSelectedStation] = useState(false);
  const datas = useSelector(getAllKyawSan027DailySaleReports);
  const [totalLength, setTotalLength] = useState(0);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(50);
  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
     if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarStockBalance);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishStockBalance);
    }
    dispatch(removeOldDats());
    return () => {
      dispatch(removeOldDats())
    }
  }, [navigate, user, dispatch]);

  const handleClick = () => {
        if (selectedStation.code === "Please") {
          setIsSelectedStation(true);
        } else {
          setloading(true);
          setIsSelectedStation(false);
     
          const fetchData = async () => {
            const bomb = [user.token, startDate,endDate, selectedStation,fuelType.code,1,user.accessDb];
            setloading(true);
            await dispatch(fetchStockBalance(bomb));
            setloading(false);
          }
          fetchData(); 
        }
  }
  
 const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
         
         const pageNo = event.page + 1;
      

        const fetchData = async () => {
       const bomb = [user.token, startDate,endDate, selectedStation,fuelType.code,pageNo,user.accessDb];
       setloading(true);
       await dispatch(fetchStockBalance(bomb));
      setloading(false);
    }
    fetchData();


    };
 
    useEffect(() => {
    if (datas === "error") {
          dispatch(LogoutUser());
        }
      
      if (datas?.result?.length > 0) {
    let pureArray = [...datas.result]; // Create a shallow copy of the array
    setOkData(pureArray); // Update the state with the new sorted array
    setTotalLength(datas.totalCount);  
    } else {
      setOkData([])
    }
     
    }, [datas, dispatch]);
  
 



    
  return (
 <PageContainer language={false} value={language} setValue={setLanguage} title={language.main_title}>
      <InputContainer>
        <div className="flex flex-wrap gap-[20px]">
        <CalenderComponent title={language.start_date} value={startDate} setValue={setStartDate} />
        <CalenderComponent title={language.end_date} value={endDate} setValue={setEndDate} />
        <FuelTypeComponent title={language.tank_no} value={fuelType} setValue={setFuelType} />
        <StationComponent title={language.station} value={selectedStation} setValue={setSelectedStation} />
        </div>  
         {
          isSelectedStation && <div className='flex mt-3 animate-[translate-y-6]   duration-200 text-blue-500 gap-[10px] justify-start text-[16px] items-center'><FcInfo/> Please Select Station</div>
        }
        <div className="flex-2">
          <button onClick={handleClick} className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"><FiSearch className=" scale-150" /> {language.search}</button>
          </div>
       </InputContainer>
                
     
      {
        okData?.length > 0 ? <>
          {/* <FuelBalanceTable okData={okData} tableRef={tableRef} setOkData={setOkData} /> */}
          <StockBalanceTable totalLength={totalLength} language={language} tank  onPageChange={onPageChange} first={first} rows={rows}  tableRef={tableRef} okData={okData} />
        </> : ""
       }
              
     
     {
        loading?<Loading/>:''
      }
    </PageContainer>
  )
}

export default TankBalanceReport