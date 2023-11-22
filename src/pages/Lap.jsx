import React, {useRef,useEffect,useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutUser } from '../redux/slices/LoginSlice';
import TankComponent from '../components/PageComponents/TankComponent';
import FuelTypeComponent from '../components/PageComponents/FuelTypeComponent';
import StationComponent from '../components/PageComponents/StationComponent';
import InputContainer from '../components/PageComponents/InputContainer';
import { FiSearch } from 'react-icons/fi';
import PageContainer from '../components/PageComponents/PageContainer';
import instance from '../axios';
import Loading from '../components/Loading';
import CalenderComponent from '../components/PageComponents/CalenderComponent';
import { FcInfo } from 'react-icons/fc';
import PaginatorComponent from '../components/PageComponents/PaginatorComponent';
import { fetchFuelInFilterData, fetchFuelInFilterDataPagination, getAllKyawSan027DailySaleReports, removeOldDats } from '../redux/slices/KyawSan027Slice';
import FuelInTable from '../components/tables/FuelInTable';
import { EnglishFuelReceiveReport } from '../Language/English/englishFuelReceiveReport';
import { MyanmarFuelReceiveReport } from '../Language/Myanmar/myanmarFuelReceiveReport';



let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end);

function FuelInDailyReport() {
  const tableRef = useRef(null);
  const buttonRef = useRef();
  const [tankNo, setTankNo] = useState();
  const [endDate, setEndDate] = useState(end)
  const [startDate, setStartDate] = useState(start);
  const [fuelType, setFuelType] = useState();
  const [tankLevel, setTankLevel] = useState();
  const [okData, setOkData] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [drivername, setDriverName] = useState();
  const [bowser, setBowser] = useState();
  const [searchTankNo, setSearchTankNo] = useState({name: "All", code: "Please"});
  const [searchFuelType, setSearchFuelType] = useState({name: "All", code: "Please"});
  const [loading, setloading] = useState();
  const [station, setStation] = useState({name: "All", code: "Please"});
  const [language, setLanguage] = useState(EnglishFuelReceiveReport);
  const [isSelectedStation, setIsSelectedStation] = useState(false);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(50);
  const datas = useSelector(getAllKyawSan027DailySaleReports);
  const [totalLength, setTotalLength] = useState(0);
  const dispatch = useDispatch()



  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
      if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarFuelReceiveReport);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishFuelReceiveReport);
    }
      dispatch(removeOldDats())
      return () => {
         dispatch(removeOldDats())
        } 
  }, [ user,navigate,dispatch]);

  
  
  useEffect(() => {
     if (tankNo === "1") {
      setFuelType("001-Octane Ron(92)")
    }
    if (tankNo === "2") {
      setFuelType("004-Diesel")
    }
    if (tankNo === "3") {
      setFuelType("004-Diesel")
    }
    if (tankNo === "4") {
      setFuelType("005-Premium Diesel")
    }
    if (tankNo === "5") {
      setFuelType('004-Diesel')
    }
    if (tankNo === "6") {
      setFuelType("005-Premium Diesel")
    }
    if (tankNo === "7") {
      setFuelType("001-Octane Ron(92)")
    } 
    if (tankNo === "8") {
      setFuelType("002-Octane Ron(95)")
    }
  },[tankNo])



  // const handleClick = (e) => {
  //   e.preventDefault()



  //   const token = user.token;
  //   setloading(true);

  //   var utcTimeOne = new Date();
  //   utcTimeOne = utcTimeOne.toLocaleDateString('fr-CA')

  //   const dataObj = {
  //     stationId: "6464e9f1c45b82216ab1db6b",
  //     driver: drivername,
  //     bowser:bowser,
  //     tankNo:tankNo,
  //     fuel_type: fuelType,
  //     recive_balance: tankLevel,
  //     receive_date: utcTimeOne,
  //   }


  //   instance.post('/fuelIn',dataObj, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       'Authorization': 'Bearer ' + token
  //     }
  //   }).then(function (response) {
  //     setloading(false)
  //     const data = response.data.result;
     
  //     if (data) {
  //        window.location.reload()
  //     }

  //   }).catch(function (error) {
  //     setloading(false)
  //     setErrorMsg(error.response.data.msg)
  //      });

  // }

  const handleSearch = () => {
    if (station.code === "Please") {
      setIsSelectedStation(true);
    } else {
      setIsSelectedStation(false);
      const fetchData = async () => {
          
        const bomb = [user.token, startDate, endDate, searchTankNo, searchFuelType, station,user.accessDb];
        setloading(true);
        await dispatch(fetchFuelInFilterData(bomb));
        setloading(false);
      }
      fetchData();
    }
  }

  useEffect(() => {
        if (datas === "error") {
          dispatch(LogoutUser());
        }
    
       
    if (datas?.result?.length > 0) {
      setOkData(datas.result);
      setTotalLength(datas.totalCount);
    } else {
      setOkData([]);
    }
     
   }, [datas, dispatch]);

  const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
         
         const pageNo = event.page + 1;
      

        const fetchData = async () => {
        const bomb = [user.token, startDate, endDate, searchTankNo, searchFuelType, station,pageNo,user.accessDb];
          
          
        setloading(true);
        await dispatch(fetchFuelInFilterDataPagination(bomb));
        setloading(false);
    }
    fetchData();


    };
  
const label = "w-[160px] mr-[10px] text-md";
  const input = "border-[1px] text-[14px] w-[200px] rounded-md border-gray-400 px-1 py-1";
  const inputContainer = "flex items-center text-md text-[14px]  w-[350px] justify-start";

  return (
    <PageContainer language={false} value={language} setValue={setLanguage} title={language.main_title}>
        {
          errorMsg ? <p className=' container mx-auto uppercase text-red-400 mt-[30px]'>{errorMsg}</p>:""
      }
        {/* {
          user.name === "manager" ? <div className='my-[50px] bg-gray-200 py-[0px] text-md px-[30px]'>
            <h3 className='text-lg mx-auto font-semibold text-center w-[200px] border-dashed border-2 border-blue-500 mb-[50px]'>Manager Input</h3>
            <div className='first my-3 flex gap-6 justify-start items-center'>
               <div className={inputContainer}>
                <h3 className={label}>Tank No</h3>
                <select value={tankNo} onChange={(e)=>setTankNo(e.target.value)}  name="tank_no" className={input}>
                  <option value="none">Please Select  Tank No...</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
                </select>
              </div> 
               <div className={inputContainer}>
                <h3 className={label}>Receive Liters</h3>
                <input required value={tankLevel} onChange={(e)=>setTankLevel(e.target.value)} className={input} placeholder='0000' />
              </div>
               <div className={inputContainer}>
                <h3 className={label}>Driver Name</h3>
                <input required value={drivername} onChange={(e)=>setDriverName(e.target.value)} className={input} placeholder='U Mg Mg' />
              </div>
            </div>
            <div className='first my-3 flex gap-6 justify-start items-center'>
              <div className={inputContainer}>
                <h3 className={label}>Bowser No</h3>
                <input required value={bowser} onChange={(e)=>setBowser(e.target.value)} className={input} placeholder='00/0000' />
              </div>
              
            </div>
            <div className='buttons'>
              <div className=' flex items-center justify-center mt-12'>
                  <button ref={buttonRef} id="fuelButton" onClick={handleClick}   className=' bg-green-700 text-white hover:bg-green-600 w-[150px] h-[40px] rounded-md' >Add</button>
              </div>
            </div>
        </div>:""
        } */}
        <InputContainer>
          <div className="flex flex-wrap gap-[20px]">
          <CalenderComponent value={startDate} setValue={setStartDate} title={language.start_date} />
         <CalenderComponent value={endDate} setValue={setEndDate}  title={language.end_date} />        
          <TankComponent language={language.tank_no} value={searchTankNo} setValue={setSearchTankNo} />
          <FuelTypeComponent title={language.fuel_type}  value={searchFuelType} setValue={setSearchFuelType} />
          <StationComponent title={language.station} value={station} setValue={setStation} />
        </div>
          {
          isSelectedStation && <div className='flex mt-3 animate-[translate-y-6]   duration-200 text-blue-500 gap-[10px] justify-start text-[16px] items-center'><FcInfo/> Please Select Station</div>
        }
          <div className="flex-2">
          <button onClick={handleSearch} className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"><FiSearch className=" scale-150"/> Search</button>
          </div>
        </InputContainer>
      {
        okData?.length > 0 && <>
        <FuelInTable language={language} station={station} okData={okData}  tableRef={tableRef} /> 
        <PaginatorComponent language={language} totalLength={totalLength} onPageChange={onPageChange} first={first} rows={rows} />
        </>
     }
      {
        loading?<Loading/>:""
      }
    </PageContainer>

  )
}

export default FuelInDailyReport;