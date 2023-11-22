import React, {useRef,useEffect,useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import FuelTable from '../../components/tables/FuelTable';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';
import instance from '../../axios';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { LogoutUser } from '../../redux/slices/LoginSlice';
import TankComponent from '../../components/PageComponents/TankComponent';
import FuelTypeComponent from '../../components/PageComponents/FuelTypeComponent';
import StationComponent from '../../components/PageComponents/StationComponent';
import InputContainer from '../../components/PageComponents/InputContainer';
import { FiSearch } from 'react-icons/fi';
import PageContainer from '../../components/PageComponents/PageContainer';

function FuelDataReport() {
  const tableRef = useRef(null);
  const buttonRef = useRef();
  const [tankNo, setTankNo] = useState();
  const [fuelType, setFuelType] = useState();
  const [tankLevel, setTankLevel] = useState();
  const [okData, setOkData] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [drivername, setDriverName] = useState();
  const [bowser, setBowser] = useState();
  const [searchTankNo, setSearchTankNo] = useState({name: "All", code: "Please"});
  const [searchFuelType, setSearchFuelType] = useState({name: "All", code: "Please"});
  const [loading, setloading] = useState();
  const [station, setStation] = useState();
  const [language, setLanguage] = useState();

  
  const dispatch = useDispatch()


  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Fuel in report",
    sheet: "Fuel in report"
  })

  const generatePDF = useReactToPrint({
    content: () => tableRef.current,
    documentTitle:"Fuel in report"
  });

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!user.login) {
        navigate("/");
    }
     setloading(true)
    const token = user.token;




    instance.get('/fuelIn',{
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }
    })
    .then(function (response) {
      const data = response.data.result;
      setOkData(data.reverse())
      setloading(false);
       })
       .catch(function (error) {
         navigate('/')
         dispatch(LogoutUser())
      setloading(false)
         
       });


  }, [navigate, user, dispatch])
  
  
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



  const handleClick = (e) => {
    e.preventDefault()


    console.log(fuelType)
    console.log(tankNo)

    const token = user.token;
    setloading(true);

    var utcTimeOne = new Date();
    utcTimeOne = utcTimeOne.toLocaleDateString('fr-CA')

    const dataObj = {
      stationId: "6464e9f1c45b82216ab1db6b",
      driver: drivername,
      bowser:bowser,
      tankNo:tankNo,
      fuel_type: fuelType,
      recive_balance: tankLevel,
      receive_date: utcTimeOne,
    }

    console.log(dataObj)

    


    instance.post('/fuelIn',dataObj, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
      }
    }).then(function (response) {
      setloading(false)
      const data = response.data.result;
     
      if (data) {
         window.location.reload()
      }

    }).catch(function (error) {
      setloading(false)
      setErrorMsg(error.response.data.msg)
       });

  }

  const handleSearch = () => {
    const token = user.token;
    setloading(true);

    instance.get('/fuelIn',{
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }
    })
      .then(function (response) {
      setloading(false)
      const data = response.data.result;
      if (data) {
       if (searchTankNo.code === "Please" && searchFuelType.code === "Please") {
         setOkData(data)
         
       } else if (searchTankNo.code !== "Please" && searchFuelType.code !== "Please") {
         const FinalData = data.filter(obj => {
           return obj.fuel_type === searchFuelType.code &&
             obj.tankNo === searchTankNo.code
          
             
         });
         
         setOkData(FinalData.reverse())
       } else if (searchTankNo.code !== "Please") {
          const FinalData = data.filter(obj => {
           return obj.tankNo === searchTankNo.code
          
             
          });
         
         
         setOkData(FinalData.reverse())
       } else if (searchFuelType.code !== "Please") {
          const FinalData = data.filter(obj => {
           return obj.fuel_type === searchFuelType.code
          
             
         });
         
         setOkData(FinalData.reverse())
       }

      }
      
      
      setloading(false);
       })
       .catch(function (error) {
      setloading(false)
       });
  }
  
const label = "w-[160px] mr-[10px] text-md";
  const input = "border-[1px] text-[14px] w-[200px] rounded-md border-gray-400 px-1 py-1";
  const inputContainer = "flex items-center text-md text-[14px]  w-[350px] justify-start";

  return (
    <PageContainer language={false} value={language} setValue={setLanguage} title={"Receive Fuel Report"}>
        {
          errorMsg ? <p className=' container mx-auto uppercase text-red-400 mt-[30px]'>{errorMsg}</p>:""
       }
        {
          user.name === "admin" ? <div className='my-[50px] bg-gray-200 py-[0px] text-md px-[30px]'>
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
        }
        <InputContainer>
          <div className="flex flex-wrap gap-[20px]">
          <TankComponent value={searchTankNo} setValue={setSearchTankNo} />
          <FuelTypeComponent value={searchFuelType} setValue={setSearchFuelType} />
          <StationComponent title="Station" value={station} setValue={setStation} />
        </div>
          <div className="flex-2">
          <button onClick={handleSearch} className="w-[120px] h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"><FiSearch className=" scale-150"/> Search</button>
          </div>
        </InputContainer>
        <FuelTable okData={okData} setOkData={setOkData} tableRef={tableRef} />
      <div className='flex p-3 mt-[30px] mb-[30px] items-center justify-start gap-3'>
          <button className='flex items-center justify-center gap-2 text-md' onClick={() => onDownload()}>To Excel <RiFileExcel2Fill /></button>
      <button className='flex items-center justify-center gap-2 text-md' onClick={()=>generatePDF()}>To Print <AiFillPrinter/></button>
    </div>
      {
        loading?<Loading/>:""
      }
    </PageContainer>

  )
}

export default FuelDataReport