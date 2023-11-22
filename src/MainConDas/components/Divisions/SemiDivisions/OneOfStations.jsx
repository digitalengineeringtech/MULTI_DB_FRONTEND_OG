/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sparse-arrays */
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import FuelStationDetailsOne from './OnofStationComponents/FuelStationDetailsOne.jsx'
import FuelInTableOne from './OnofStationComponents/FuelInTableOne.jsx'
import NozzlesOne from './OnofStationComponents/NozzlesOne.jsx'
import FuelBalanceTankOne from './OnofStationComponents/FuelBalanceTankOne.jsx'
import { MdExpandLess } from 'react-icons/md';
import CalenderComponent from '../../../../components/PageComponents/CalenderComponent.jsx'
import PaginatorComponent from '../../../../components/PageComponents/PaginatorComponent.jsx'
import { AiOutlineSearch } from 'react-icons/ai';
import UsePost from '../../hooks/UsePost';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import HeadCap from '../../HeadCap';
import { EnglishOneOfStation } from '../../../../Language/English/englishOneOfStation';
import { MyanmarOneOfStation } from '../../../../Language/Myanmar/myanmarOneOfStations';
import Loading from '../../../../components/Loading';
import UsePost_1 from '../../hooks/UsePost_1';
import UsePost_2 from '../../hooks/UsePost_2';
import UsePost_3 from '../../hooks/UsePost_3';



let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end);

function OneOfStations({ title, navigation, setNavigation }) {
  const [moreNozzle, setMoreNozzle] = useState(false);
  const [stationId, setStationId] = useState();
  const [loading, setLoading] = useState(false);
  const [fuelInStartDate, setFuelInStartDate] = useState(start);
  const [fuelInEndDate, setFuelInEndDate] = useState(end);
  const [fuelBalanceStartDate, setFuelBalanceStartDate] = useState(start);
  const [fuelPumpStartDate, setFuelPumpStartDate] = useState(start);
  const [fuelPumpEndDate, setFuelPumpEndDate] = useState(end);
  const [pumpData,setPumpData] = useState([]);
  const [language, setLanguage] = useState(EnglishOneOfStation);
  const [fuelInData, setFuelInData] = useState([]);
  const [totalLength, setTotalLength] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(50);
  const [fuelBalanceData, setFuelBalanceData] = useState([]);
  const fuelBalanceButton = useRef(null);
  const pumpSearchButton = useRef(null);
  const [stationTotalData, setStationTotalData] = useState('');
  const [stationName, setStationName] = useState('');
  const [ninety2TotalLiter, SetNinety2LotalLiter] = useState('');
  const [ninety5LotalLiter, SetNinety5LotalLiter] = useState('');
  const [dieselLotalLiter,SetDieselLotalLiter] = useState('');
  const [phsdLotalLiter,SetphshLotalLiter] = useState('');
  const [totalLiter,SettotalLiter] = useState('');
  const [totalPrice, SetTotalPrice] = useState('');
  const [fuelBalanceLoading, setFuelBalanceLoading] = useState(true);
  const [nozzleLoading, setNozzleLoading] = useState(true);
  const [fuelInLoading, setFuelInLoading] = useState(true);
  const [station, setStation] = useState({
    name: '',
    license: '',
    addres: ''
  });

  const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();
  const [{ data_g_1, loading_g_1, error_g_1 }, fetchIt_1] = UsePost_1();
  const [{ data_g_2, loading_g_2, error_g_2 }, fetchIt_2] = UsePost_2();
  const [{ data_g_3, loading_g_3, error_g_3 }, fetchIt_3] = UsePost_3();

  
 const user = useSelector((state) => state.login);
 const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarOneOfStation);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishOneOfStation);
    }
  }, [ user,navigate,dispatch]);

  const handleClick = () => {
    setMoreNozzle((prev) => !prev);
  };


  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const station = urlParams.get('station');
    const name = urlParams.get('name');
    let isoStartDate = fuelBalanceStartDate.toLocaleDateString('fr-CA');

    setStationName(name);
    setStationId(station);

    fetchIt_1(`fuelIn/pagi/by-date/1?sDate=${fuelInStartDate}&eDate=${fuelInEndDate}&stationId=${station}&accessDb=${user.accessDb}`, user.token);
    
    fetchIt_2(`/fuel-balance/pagi/1?sDate=${isoStartDate}&stationId=${station}&accessDb=${user.accessDb}`, user.token);
    fetchIt(`/detail-sale/statement-report?sDate=${fuelPumpStartDate}&eDate=${fuelPumpEndDate}&stationDetailId=${station}&accessDb=${user.accessDb}`, user.token);
    fetchIt_3(`/detail-sale/by-date/?sDate=${start}&eDate=${end}&stationDetailId=${station}&accessDb=${user.accessDb}`, user.token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const handleFuelInSearch = () => {
    fetchIt_1(`fuelIn/pagi/by-date/1?sDate=${fuelInStartDate}&eDate=${fuelInEndDate}&stationId=${stationId}`, user.token);
  };

  const handleFuelBalanceSearch = () => {
    let isoStartDate = fuelBalanceStartDate.toLocaleDateString('fr-CA');
    fetchIt_2(`/fuel-balance/pagi/1?sDate=${isoStartDate}&stationId=${stationId}`, user.token);
  };

  const handlePumpMeterSearch = () => {
    fetchIt(`/detail-sale/statement-report?sDate=${fuelPumpStartDate}&eDate=${fuelPumpEndDate}&stationDetailId=${stationId}`, user.token);
  };

  useEffect(() => {
    if (data_g.msg === "final data") {
      console.log("This is nozzle details", data_g.result);
      setNozzleLoading(loading_g);
      setPumpData(data_g.result);
    }    
  }, [data_g, loading_g, error_g]);


  useEffect(() => {
    if (data_g_3) {
      setStationTotalData(data_g_3.result);
    }
  }, [data_g_3, loading_g_3, error_g_3]);

  useEffect(() => {

    if(data_g_1.msg === "fuel balance between two date"){
    setTotalLength(data_g_1.totalCount);
    setFuelInData(data_g_1.result);
    setFuelInLoading(loading_g_1);}
    
  }, [data_g_1, loading_g_1, error_g_1])
  
  useEffect(() => {
    if (data_g_2.msg === "fuelBalance find") {
      setFuelBalanceData(data_g_2.result);
      setFuelBalanceLoading(loading_g_2)
    }

  },[data_g_2,loading_g_2,error_g_2])


  
  useEffect(() => {



    let ninety2 = 0
    let ninety5 = 0
    let diesel = 0
    let premium = 0
    let totalLiter = 0
    let totalPrice = 0
    let name = ''
    let liNo = ''
    let loca = ''



    if (stationTotalData ) {
       stationTotalData.forEach((obj) => {
      name = obj.stationDetailId.name;
      liNo = obj.stationDetailId.lienseNo;
      loca = obj.stationDetailId.location;
        
      if (obj.fuelType === '001-Octane Ron(92)') {
        ninety2 += obj.saleLiter;
      }
      if (obj.fuelType === '002-Octane Ron(95)') {
          
        ninety5 += obj.saleLiter;
      }
      if (obj.fuelType === '004-Diesel') {
        diesel += obj.saleLiter;
      }
      if (obj.fuelType === '005-Premium Diesel') {
        premium += obj.saleLiter;
      }
      totalPrice += obj.totalPrice;
    });
      
      
    SetNinety2LotalLiter(ninety2.toFixed(3));
    SetNinety5LotalLiter(ninety5.toFixed(3));
    SetDieselLotalLiter(diesel.toFixed(3));
    SetphshLotalLiter(premium.toFixed(3));
    SettotalLiter(totalLiter.toFixed(3));
    SetTotalPrice(totalPrice.toFixed(3));

    setStation({
      name: name,
      license: liNo,
      addres: loca
    })
    }
      
   
    
  }, [stationTotalData]);


  return (
    <>
    
      <div className='w-[100%] pb-[100px] relative'>
        {
          loading ? <div className=' h-[90svh] w-[100%] bg-[#e0dfdfac] absolute top-0 z-50 left-0 right-0 bottom-0'>
            <div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
          </div> : <>
       <HeadCap station={language.stations}  setNavigation={setNavigation} title={language.station_over_view}/>
              <FuelStationDetailsOne
              total={language.total_sales} 
              title={stationName}
              totalPrice={totalPrice}
              ninety2={ninety2TotalLiter}
              ninety5={ninety5LotalLiter}
              diesel={dieselLotalLiter}
              pdiesel={phsdLotalLiter}
              />
    
    <div onClick={()=>setNavigation(3)} className='bg-blue-900 text-white mt-2 ml-5 p-2 flex items-center cursor-pointer hover:gap-4 hover:rounded-lg duration-700 gap-3 justify-center  text-lg '>{language.to_table}<AiOutlineArrowRight/></div>

   {/* nozzles */}
   {
    language.stations === "စတေရှင်"? <h3 className=' text-xl mt-[40px] text-left  w-[97%] mx-auto font-extrabold uppercase text-[#333]'>{stationName} {language.the_pump_meter}</h3>: <h3 className='text-left text-xl mt-[40px]  w-[97%] mx-auto font-extrabold uppercase text-[#333]'>{language.the_pump_meter}{stationName}</h3>
   }
     
       <div className='w-[97%] mb-[40px]  drop-shadow-md  gap-5 mt-[30px]  flex justify-around items-center mx-auto relative'>
          <CalenderComponent value={fuelPumpStartDate} setValue={setFuelPumpStartDate} title={language.start_date} />
          <CalenderComponent value={fuelPumpEndDate} setValue={setFuelPumpEndDate} title={language.end_date} />
          <button ref={pumpSearchButton}  onClick={handlePumpMeterSearch} className='border-2 mt-8 text-white  rounded-md px-4 p-2 bg-blue-800 hover:bg-blue-700 flex  items-center justify-center gap-2'> <AiOutlineSearch size={20}/>{language.search}</button>
              </div>
      <div className={`w-[97%] bg-white drop-shadow-md py-5 px-3  overflow-hidden gap-5  flex flex-wrap justify-center items-center mx-auto relative mt-5 ${moreNozzle?'':'h-[280px]'}`}>
        {
          nozzleLoading?<Loading/>:""
        }
        {
         pumpData.map((e) => <NozzlesOne
                    fuelType={e.fuelType}
                    no={e.nozzle}
                    number={e.totalizer_closing}
                    totalizer={language.totalizer}
                 />)
        }
        {
                  moreNozzle ? <p onClick={handleClick} className="absolute bottom-0 cursor-pointer px-4 t ext-[13px] py-1  bg-blue-900 flex items-center group justify-center text-[white] gap-3 ">{language.less_nozzle_meter}<MdExpandLess className='scale-[1.5] duration-500 group-hover:rotate-180' /></p> : <p onClick={handleClick} className="absolute bottom-0 cursor-pointer px-4 t ext-[13px] py-1 rounded-t-md bg-blue-900 flex items-center justify-center text-[white] gap-3 group">{language.more_nozzle_meter}<MdExpandLess  className='scale-[1.5] group-hover:rotate-180 duration-700' /></p>
       }
      </div>
      {/* nozzles */}

              {/* fuelin */}
        {
          language.stations === "စတေရှင်"?<h3 className='text-left w-[97%] mx-auto mb-[40px] mt-[60px] border-dashed font-extrabold text-xl  uppercase text-[#333]'>{stationName} {language.the_fuel_in_of_kyawsan}</h3>:
          <h3 className='text-left  w-[97%] mx-auto mb-[40px] mt-[60px] border-dashed font-extrabold  text-xl  uppercase text-[#333]'>{language.the_fuel_in_of_kyawsan}{title}</h3>
        }
       <div className='w-[97%] mb-[40px]  drop-shadow-md  gap-5 mt-4 flex justify-around items-center mx-auto relative'>
          <CalenderComponent value={fuelInStartDate} setValue={setFuelInStartDate} title={language.start_date} />
          <CalenderComponent value={fuelInEndDate} setValue={setFuelInEndDate} title={language.end_date} />
          <button onClick={handleFuelInSearch} className=' border-2 mt-8 text-white  rounded-md px-4 p-2 bg-blue-800 hover:bg-blue-700 flex  items-center justify-center gap-2'><AiOutlineSearch size={20} />{language.search}</button>
      </div>
    
      <div className='w-[97%] drop-shadow-md rounded-md bg-white  mx-auto  p-[10px]'>
        {
          fuelInLoading? <Loading/>:""
        }
        <FuelInTableOne  okData={fuelInData} />
        <PaginatorComponent totalLength={totalLength} language={language} first={first} rows={rows}/>
      </div>
      {/* fuelin */}

      {/* Tank balance */}
      {
        language.stations === "စတေရှင်"? <h3 className='text-left  w-[97%] mx-auto mb-5 mt-[60px] font-extrabold uppercase text-[#333] text-xl'>{stationName} {language.the_fuel_balance_}</h3>: <h3 className='text-left  w-[97%] mx-auto mb-5 mt-[60px] font-extrabold uppercase text-[#333] text-xl'>{language.the_fuel_balance_} {stationName}</h3>
      }
       <div className='w-[97%] mb-[40px]  drop-shadow-md  gap-5 mt-4 flex justify-around items-center mx-auto relative'>
          <CalenderComponent value={fuelBalanceStartDate} setValue={setFuelBalanceStartDate} title={"Date"} />
          <button ref={fuelBalanceButton} onClick={handleFuelBalanceSearch} className='border-2 mt-8 text-white  rounded-md px-4 p-2 bg-blue-800 hover:bg-blue-700 flex  items-center justify-center gap-2'> <AiOutlineSearch size={20}/>{language.search}</button>
      </div>
      <div className='w-[97%] flex items-center justify-center gap-3 flex-wrap mt-[20px] drop-shadow-md  mx-auto   p-[10px]'>
        {
          fuelBalanceLoading? <Loading/>:''
        }
       {
          fuelBalanceData.length === 0 ? <h3 className='text-center mb-5 mt-[40px] font-extrabold uppercase text-[#333] text-[25px]'>{title} {language.the_fuel_balance_}</h3> : <div className='flex flex-wrap justify-center gap-4'>
            
            {
              fuelBalanceData.map((e, index) => (
                <FuelBalanceTankOne title={e.balance.toFixed(3)} />
              ))
          }
          </div>
     }
      </div></>
        }
      {/* Tank Balance */}
    
    </div>
    </>
  )
}

export default OneOfStations