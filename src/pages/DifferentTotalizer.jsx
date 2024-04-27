import React,{useState,useEffect} from 'react'
import PageContainer from '../components/PageComponents/PageContainer'
import { EnglishTotalizerDifferent } from '../Language/English/englishTotalizerDifferent';
import { MyanmarTotalizerDifferent } from '../Language/Myanmar/myanamrTotalizerDifferent'
import InputContainer from '../components/PageComponents/InputContainer';
import CalenderComponent from '../components/PageComponents/CalenderComponent';
import FuelTypeComponent from '../components/PageComponents/FuelTypeComponent';
import StationComponent from '../components/PageComponents/StationComponent';
import NozzleComponent from '../components/PageComponents/NozzleComponent';
import { useSelector,useDispatch } from 'react-redux';
import { fetchDailySaleReportByTimeRange, fetchDynamicNozzles, getAllKyawSan027DailySaleReports, removeOldDats } from '../redux/slices/KyawSan027Slice';
import { FiSearch } from 'react-icons/fi';
import { FcInfo } from 'react-icons/fc';
import { LogoutUser } from '../redux/slices/LoginSlice';
import Loading from '../components/Loading';
import DifferentTotalizerTable from '../components/tables/DifferentTotalizer';
import { useNavigate } from 'react-router-dom';


let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end);

function DifferentTotalizer() {
    const [startDate, setStartDate] = useState(start);
    const [endDate, setEndDate] = useState(end);
    const [language, setLanguage] = useState(EnglishTotalizerDifferent);
    const [changeLanguage, setChangeLanguage] = useState();
    const [selectedNozzle, setSelectedNozzle] = useState({name: "All", code: "Please"});
    const [selectedStation, setSelectedStation] = useState({ name: "All", code: "Please" });
    const [isSelectedStation, setIsSelectedStation] = useState(false);
    const [isSearch, setIsSearch] = useState(new Date());
    const [loading, setloading] = useState(false);
    const [okData, setOkData] = useState();
    const navigate = useNavigate();
    


    const datas = useSelector(getAllKyawSan027DailySaleReports);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.login);

    useEffect(() => {
      if (!user.login) {
          navigate("/");
      }
         if (user.language === "Myanmar" || user.language === "မြန်မာ") {
        setLanguage(MyanmarTotalizerDifferent);
      } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
        setLanguage(EnglishTotalizerDifferent);
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


      useEffect(()=>{
        console.log({okData})
      },[okData])

  return (
   <PageContainer language={false} value={changeLanguage} setValue={setChangeLanguage} title={language.mainTitle}>

   <InputContainer>
   <div className="flex flex-wrap gap-[20px]">
   <CalenderComponent value={startDate} setValue={setStartDate} title={language.startDate} />
   <CalenderComponent value={endDate} setValue={setEndDate}  title={language.endDate} />
   {/* <NozzleComponent value={selectedNozzle} setValue={setSelectedNozzle} /> */}
    <StationComponent title={language.station} value={selectedStation} setValue={setSelectedStation} />
  </div>
  {
          isSelectedStation && <div className='flex mt-3 animate-[translate-y-6]   duration-200 text-blue-500 gap-[10px] justify-start text-[16px] items-center'><FcInfo/> Please Select Station</div>
        }
          <div className="flex-2">
          <button onClick={handleClick} className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"><FiSearch className=" scale-150" />{language.search}</button>
          </div>

  
   </InputContainer>

   {
        okData ? <>
              {/* <ShiftLeader selectedStation={selectedStation} isSearch={isSearch} calenderTwo={endDate} tableRef={tableRef} okData={okData}/>
               */}
              <DifferentTotalizerTable language={language} statement okData={okData}/>
        </> : ""
         }

   {
        loading?<Loading/>:''
      }



   </PageContainer>
  )
}

export default DifferentTotalizer