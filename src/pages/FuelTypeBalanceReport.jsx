import React, {useRef,useState,useEffect  } from 'react'
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import instance from '../axios';
import { LogoutUser } from '../redux/slices/LoginSlice';
import Loading from '../components/Loading';
import TankStockTable from '../components/tables/TankStock';
import PageContainer from '../components/PageComponents/PageContainer';
import CalenderComponent from '../components/PageComponents/CalenderComponent';
import StationComponent from '../components/PageComponents/StationComponent';
import { FiSearch } from 'react-icons/fi';
import InputContainer from '../components/PageComponents/InputContainer';
import {FcInfo} from 'react-icons/fc'
import { EnglishFuelTypeBalanceReport } from '../Language/English/englishFuelTypeBalanceReport';
import { MyanmarFuelTypeBalanceReport } from '../Language/Myanmar/myanmarFuelTypeBalanceReport';


let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end);

function FuelTypeBalanceReport() {
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(EnglishFuelTypeBalanceReport);
  const [isStation, setIsStaion] = useState(false);



  const tableRef = useRef();
    const [loading, setloading] = useState(false)
    const [okData, setOkData] = useState()
    const [calenderOne,setCalenderOne] = useState(start)
    const [calenderTwo, setCalenderTwo] = useState(end);
    const [station, setStation] = useState({name: "All", code: "Please"});
 
 
  useEffect(() => {
    if (!user.login) {
        navigate("/");
    }
     if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarFuelTypeBalanceReport);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishFuelTypeBalanceReport);
    }
  }, [navigate, user])

  const handleSearch = () => {

    if (calenderOne && calenderTwo) {
      if (station.code === "Please") {
        setIsStaion(true);
      } else {
        setIsStaion(false);
             setloading(true)

        var utcTimeOne = calenderOne;
        var utcTimeTwo = calenderTwo;
        const token = user.token;

        
        instance.get(`/fuel-balance/by-date?sDate=${utcTimeOne}&eDate=${utcTimeTwo}&stationId=${station.code}&accessDb=${user.accessDb}`,{
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
      }
     }

    }
    
  return (
 <PageContainer language={false} value={language} setValue={setLanguage} title={language.main_title}>
         <InputContainer>
        <div  className="flex flex-wrap gap-[20px]">
          <CalenderComponent title={language.start_date} value={calenderOne} setValue={setCalenderOne} /> 
          <CalenderComponent title={language.end_date} value={calenderTwo} setValue={setCalenderTwo} /> 
          <StationComponent title={language.station} value={station} setValue={setStation} />
        </div>
         {
            isStation && <div className='flex animate-[translate-y-6]   duration-200 text-blue-500 gap-[10px] justify-start text-[16px] items-center'><FcInfo/> Please Select Station</div>
           }
          <div className="flex-2">
          <button onClick={handleSearch} className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"><FiSearch className=" scale-150" /> {language.search}</button>
          </div>
        </InputContainer>
        {
          okData?(<> 
          <TankStockTable language={language} tableRef={tableRef} okData={okData} endDate={calenderTwo} />
        </>) : ""
            }
              
     
     {
        loading?<Loading/>:''
      }
    </PageContainer>
  )
}

export default FuelTypeBalanceReport