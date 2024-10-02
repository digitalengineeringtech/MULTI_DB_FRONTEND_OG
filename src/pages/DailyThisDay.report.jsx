import React, { useEffect,useRef,useState  } from 'react'
import 'react-calendar/dist/Calendar.css';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import DailyReport from '../components/tables/DailyReport';
import PageContainer from '../components/PageComponents/PageContainer';
import InputContainer from '../components/PageComponents/InputContainer';
import { FcInfo } from 'react-icons/fc';
import { FiSearch } from 'react-icons/fi';
import CalenderComponent from '../components/PageComponents/CalenderComponent';
import StationComponent from '../components/PageComponents/StationComponent';
import instance from '../axios';
import { LogoutUser } from '../redux/slices/LoginSlice';
import PaginatorComponent from '../components/PageComponents/PaginatorComponent';
import Loading from '../components/Loading';
import { EnglishDailySaleSummaryByStation } from '../Language/English/englishDailySaleSummaryByStation';
import { MyanamrDailySaleSummaryReport } from '../Language/Myanmar/myanmarDailySaleSummaryReport';
import { EnglishDailySaleSummaryReport } from '../Language/English/englishDailySaleSummaryReport';
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

function DailyThisDay() {
  const user = useSelector((state) => state.login);
  const [startDate, setStartDate] = useState(start);
  const [endDate,setEndDate] = useState(end)
  const navigate = useNavigate();
   const tableRef = useRef();
  const [language, setLanguage] = useState(EnglishDailySaleSummaryByStation);
  const [selectedStation, setSelectedStation] = useState({ name: "All", code: "Please" });
  const [isSelectedStation, setIsSelectedStation] = useState(false);
  const [loading, setloading] = useState(false)
  const [totalCount, setTotalCount] = useState(0);
  const dispatch = useDispatch();
  const [okData, setOkData] = useState([])
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(50);

    
var currentDate = new Date();
var localString = currentDate?.toLocaleString();

  
  const handleClick = () => {
    if (selectedStation.code === "Please") {
      setIsSelectedStation(true);
    } else { 
      setloading(true)
      setIsSelectedStation(false);
      
      const token = user.token;
      const isoStartDate = startDate;
      const isoEndDate = endDate;

    instance.get(`/detail-sale/daily-sale/by-date/1?sDate=${isoStartDate}&eDate=${isoEndDate}&stationDetailId=${selectedStation.code}`,{
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }
    })
    .then(function (response) {
      const data = response.data.result;
      setTotalCount(response.data.totalCount)

      if (data?.length > 0) {
        setOkData(data);
      } else {
        setOkData([]);
     }
      setloading(false);
       })
      .catch(function (error) {
        console.log(error);
      // setloading(false)
      //    navigate('/')  
      //      dispatch(LogoutUser())
       }); 
    }

   
  }

  const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
         
      const pageNo = event.page + 1;
         
    setloading(true)
    const token = user.token;
    const isoStartDate = startDate;
    const isoEndDate = endDate;




    instance.get(`/detail-sale/daily-sale/by-date/${pageNo}?sDate=${isoStartDate}&eDate=${isoEndDate}&stationDetailId=${selectedStation.code}`,{
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }
    })
    .then(function (response) {
     const data = response.data.result;
      setOkData(data)
      setloading(false);
       })
       .catch(function (error) {
      setloading(false)
         navigate('/')  
           dispatch(LogoutUser())
       });
      

        const fetchData = async () => {

    }
    fetchData();


    };


  useEffect(() => {
    if (!user.login) {
      navigate('/')
    }
     if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanamrDailySaleSummaryReport);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishDailySaleSummaryReport);
    }
  }, [navigate, user])


 
  
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
            start={true}
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
            value={selectedStation}
            setValue={setSelectedStation}
            title={language.station}
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
      {okData?.length > 0 ? (
        <>
          <DailyReport
            language={language}
            okData={okData}
            tableRef={tableRef}
          />
          {/* <PaginatorComponent totalLength={totalCount} onPageChange={onPageChange} first={first} rows={rows} /> */}
        </>
      ) : (
        <></>
      )}
      {loading ? <Loading /> : ""}
    </PageContainer>
  );
}

export default DailyThisDay