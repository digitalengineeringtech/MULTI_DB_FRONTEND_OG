import React,{useState,useRef,useEffect} from 'react'
import PageContainer from '../components/PageComponents/PageContainer'
import InputContainer from '../components/PageComponents/InputContainer';
import CalenderComponent from '../components/PageComponents/CalenderComponent';
import StationComponent from '../components/PageComponents/StationComponent';
import { FiSearch } from 'react-icons/fi';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutUser } from '../redux/slices/LoginSlice';
import Loading from '../components/Loading';
import ShiftLeader from '../components/tables/ShiftLeader.table';
import { fetchDailySaleReportByTimeRange, fetchDynamicNozzles, getAllKyawSan027DailySaleReports, removeOldDats } from '../redux/slices/KyawSan027Slice';
import { FcInfo } from 'react-icons/fc';
import NozzleTable from '../components/tables/NozzleTable';
import { EnglishStatementReport } from '../Language/English/englishStatementReport';
import { title } from 'process';
import { MyanmarStatementReport } from '../Language/Myanmar/myanmarStatementReport';
import { Button } from 'primereact/button';
import { RiErrorWarningFill } from 'react-icons/ri';



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

function StatementReport() {
    const [startDate, setStartDate] = useState(start);
    const [endDate, setEndDate] = useState(end);
    const [selectedStation, setSelectedStation] = useState({name: "All", code: "Please"});
    const [loading, setloading] = useState(false);
    const [okData, setOkData] = useState();
    const [isSelectedStation, setIsSelectedStation] = useState(false);
    const [isSearch, setIsSearch] = useState(new Date());
    const tableRef = useRef();
    const user = useSelector((state) => state.login);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [language, setLanguage] = useState(EnglishStatementReport);
   const datas = useSelector(getAllKyawSan027DailySaleReports);
  



    useEffect(() => {
    if (!user.login) {
        navigate("/");
    }
       if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarStatementReport);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishStatementReport);
    }
         dispatch(removeOldDats());
        setIsSearch(false);
      return () => {
         dispatch(removeOldDats())
        } 
  }, [navigate,user,endDate,startDate,dispatch])

   const handleClick = () => {
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
            await dispatch(fetchDynamicNozzles(bomb));
            setloading(false);
            setIsSearch(false);
        
          }
          fetchData();
        }
      }


    }

 useEffect(() => {
   if (selectedStation.code !== 'Please') {
          if (datas === "error") {
          dispatch(LogoutUser());
        }
    
   if (datas?.result?.length > 0) {
      setOkData(datas.result);
    }
   }
     
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
          <div className="flex mt-3 animate-[translate-y-6]   duration-200 text-red-400 gap-[10px] justify-start text-[16px] items-center">
            <RiErrorWarningFill className="!text-red-400 " /> Please Select
            Station
          </div>
        )}
        <div className="flex-2 mt-2">
          <Button
            onClick={handleClick}
            className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"
          >
            <FiSearch className=" scale-150" />
            {language.search}
          </Button>
        </div>
      </InputContainer>
      {okData ? (
        <>
          {/* <ShiftLeader selectedStation={selectedStation} isSearch={isSearch} calenderTwo={endDate} tableRef={tableRef} okData={okData}/>
           */}
          <NozzleTable language={language} statement okData={okData} />
        </>
      ) : (
        ""
      )}

      {loading ? <Loading /> : ""}
    </PageContainer>
  );
}

export default StatementReport