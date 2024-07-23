import React,{useState,useRef,useEffect} from 'react'
import PageContainer from '../components/PageComponents/PageContainer'
import InputContainer from '../components/PageComponents/InputContainer';
import CalenderComponent from '../components/PageComponents/CalenderComponent';
import StationComponent from '../components/PageComponents/StationComponent';
import { FiSearch } from 'react-icons/fi';
import { useReactToPrint } from 'react-to-print';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import instance from '../axios';
import { LogoutUser } from '../redux/slices/LoginSlice';
import Loading from '../components/Loading';
import TestTable from '../components/tables/TestTable';
import GallonOrLiter from '../components/PageComponents/GallonOrLiter';
import { FcInfo } from 'react-icons/fc';
import { MyanmarOnlineMonitoringSaleReport } from '../Language/Myanmar/myanmarOnlineMonitoringSaleReport';
import { EnglishOnlineMonitoringSaleReport } from '../Language/English/englishOnlineMonitoringSaleReport';
import { fetchDailySaleReportByTimeRange, getAllKyawSan027DailySaleReports, removeOldDats } from '../redux/slices/KyawSan027Slice';
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

function OnlineMonitoringSaleReport() {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [fromDate] = useState(new Date());
  const [toDate] = useState(new Date());
  const [selectedStation, setSelectedStation] = useState({ name: "All", code: "Please" });
  const [loading, setloading] = useState(false);
  const [okData, setOkData] = useState();
  const [isSearch, setIsSearch] = useState();
  const [fuel92Balance, setFuel92Balance] = useState();
  const [fuel95Balance, setFuel95Balance] = useState();
  const [fuelDieselBalance, setFuelDieselBalance] = useState();
  const [fuelPremiumBalance, setFuelPremiumBalance] = useState();
  const [fuelUnit, setFuelUnit] = useState('liter');
  const [unitError, setUnitError] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState();
  const [oklUnit, setOklUnit] = useState();
  const [language, setLanguage] = useState(EnglishOnlineMonitoringSaleReport);
  const tableRef = useRef();
  const [isSelectedStation, setIsSelectedStation] = useState(false);
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const datas = useSelector(getAllKyawSan027DailySaleReports);
 


    useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
       if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarOnlineMonitoringSaleReport);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishOnlineMonitoringSaleReport);
    }
        dispatch(removeOldDats());
        setIsSearch(false);
      return () => {
         dispatch(removeOldDats())
        } 
    }, [user, navigate, dispatch]);
  
  
  
  

  useEffect(() => {
    if (oklUnit?.length === 0) {
      setUnitError(true);
    } else {
      setUnitError(false);
    }
  }, [oklUnit])
    
    useEffect(() => {
        if (datas === "error") {
          dispatch(LogoutUser());
        }
    
    if (datas?.result?.length > 0) {
      setOkData(datas.result);
    }
     
   }, [datas, dispatch]);



  const handleClick = () => {
    if (!unitError) {
        if (startDate && endDate) {
        if (selectedStation.code === "Please") {
        setIsSelectedStation(true);
    } else {
      setIsSearch(true);
      setloading(true);
      setIsSelectedStation(false);
     
      const fetchData = async () => {
       
        const bomb = [user.token, startDate, endDate, selectedStation,user.accessDb];
        setloading(true);
        await dispatch(fetchDailySaleReportByTimeRange(bomb));
        setloading(false);
        setIsSearch(false);
      }
            fetchData();
            
        let utcTimeOnee = endDate.toLocaleDateString('fr-CA')
        const token = user.token;
       instance.get(`/fuel-balance/pagi/1?sDate=${utcTimeOnee}&accessDb=${user.accessDb}`,{
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }
    })
    .then(function (response) {
      const data = response.data.result;

     
      let fuel92total = 0;
      let fuel95total = 0;
      let fuelDieseltotal = 0;
      let fuelPremiumtotal = 0;

      data.forEach((item) => {
        if (item.fuelType === "001-Octane Ron(92)") {
          fuel92total += item.balance
        }
        if (item.fuelType === "005-Premium Diesel") {
          fuelPremiumtotal += item.balance
        }
        if (item.fuelType === "004-Diesel") {
          fuelDieseltotal += item.balance
        }
        if (item.fuelType === "002-Octane Ron(95)") {
          fuel95total += item.balance
        }
      })

      setFuel92Balance(fuel92total);
      setFuel95Balance(fuel95total);
      setFuelDieselBalance(fuelDieseltotal);
      setFuelPremiumBalance(fuelPremiumtotal);


       })
       .catch(function (error) {
         setloading(false)
         navigate('/')
         dispatch(LogoutUser())
       });
    } 
    }
    }
    }

 

  useEffect(() => {
    setloading(true);

    if (changeLanguage?.code === "Myanmar") {
      setLanguage(MyanmarOnlineMonitoringSaleReport)

    }
     if (changeLanguage?.code === "English") {
       setLanguage(EnglishOnlineMonitoringSaleReport)
     }
    
    

  const timer = setTimeout(() => {
    setloading(false)
  }, 300);
  return () => clearTimeout(timer);

  },[changeLanguage])




 
  return (
    <>
      <PageContainer language={false}  value={changeLanguage} setValue={setChangeLanguage} title={language.mainTitle}>
           <InputContainer>
          <div className="flex flex-wrap gap-[20px] items-center">
            <CalenderComponent value={startDate} setValue={setStartDate} title={language.startDate} />
            <CalenderComponent value={endDate} setValue={setEndDate}  title={language.endDate} />
            <StationComponent isSearch={isSearch} title={language.station} value={selectedStation} setValue={setSelectedStation} />
         </div>
        <GallonOrLiter titleOne={language.liter} titleTwo={language.gallon} setOklUnit={setOklUnit} isSearch={isSearch} setValue={setFuelUnit} />
        {
          unitError?<p className='flex items-center text-blue-500  text-md'><FcInfo className=' scale-125 mr-3' /> Please Select Liter or Gallon</p>:""
        }
        {
          isSelectedStation && <div className='flex mt-3 animate-[translate-y-6]   duration-200 text-blue-500 gap-[10px] justify-start text-[16px] items-center'><FcInfo/> Please Select Station</div>
        }
             <div className="flex-2">
            <button onClick={handleClick} className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"><FiSearch className=" scale-150" /> {language.search}</button>
          </div>
          </InputContainer>
          {
        okData ? <>
            <TestTable
              selectedStation={selectedStation}
              language={language}
              fuelUnit={fuelUnit}
              fuel92Balance={fuel92Balance}
              fuel95Balance={fuel95Balance}
              fuelDieselBalance={fuelDieselBalance}
              fuelPremiumBalance={fuelPremiumBalance}
              isSearch={isSearch} calenderOne={fromDate}
              calenderTwo={toDate}
              startDate={fromDate.toLocaleDateString()}
              endDate={toDate.toLocaleDateString()}
              okData={okData}
              tableRef={tableRef} />
          
          {/* <div className='flex p-3  text-[16px] mt-[30px] mb-[50px] items-center justify-start gap-3'>
          <button onClick={onDownload} className='flex items-center justify-center gap-2 text-md' >{language.toExcel} <RiFileExcel2Fill size={30} /></button>
          <button onClick={handlePrint} className='flex items-center justify-center gap-2 text-md' >{language.toPrint} <AiFillPrinter size={30}/></button>
          </div> */}
        </> : ""
         }
         
           {
        loading?<Loading/>:''
      }
   </PageContainer>
    </>
  )
}

export default OnlineMonitoringSaleReport