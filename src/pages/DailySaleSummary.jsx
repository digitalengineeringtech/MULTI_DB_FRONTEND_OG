import React, {useRef,useState,useEffect  } from 'react'
import 'react-calendar/dist/Calendar.css';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { useDownloadExcel } from 'react-export-table-to-excel';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import instance from '../axios';
import { LogoutUser } from '../redux/slices/LoginSlice';
import Loading from '../components/Loading';
import SaleSummaryFuel from '../components/tables/SaleSummaryFuel';
import {AiFillCloseCircle} from 'react-icons/ai'
import {SlCalender} from 'react-icons/sl';



function DailySaleSummary() {
  const user = useSelector((state) => state.login);
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSame,setIsSame] = useState(new Date());
  const [errmsg, setErrmsg] = useState("");


    const tableRef = useRef();
    const [closeOne, setCloseOne] = useState(true);
  const [closeTwo, setCloseTwo] = useState(true);
    const [closeThree, setCloseThree] = useState(true);
  
    const [loading, setloading] = useState(false)
    const [okData, setOkData] = useState()
    const [okDataTwo, setOkDataTwo] = useState()
    const [calenderOne, setCalenderOne] = useState(new Date());
    const [calenderTwo, setCalenderTwo] = useState(new Date());
  const [station, setStation] = useState(false);
    const [stationTwo, setStationTwo] = useState(false);
  
    
  const [tank1opening, setTank1opening] = useState(0);
  const [tank1recieve, setTank1revieve] = useState(0);
  const [tank1sale, setTank1sale] = useState(0);
  const [tank1balance, setTank1balance] = useState(0);
  const [tank1close, setTank1close] = useState(0);
  const [tank1fuelType, setTank1fuelType] = useState(0);


   const [tank2opening, setTank2opening] = useState(0);
  const [tank2recieve, setTank2revieve] = useState(0);
  const [tank2sale, setTank2sale] = useState(0);
  const [tank2balance, setTank2balance] = useState(0);
  const [tank2close, setTank2close] = useState(0);
  const [tank2fuelType, setTank2fuelType] = useState(0);


  const [tank3opening, setTank3opening] = useState(0);
  const [tank3recieve, setTank3revieve] = useState(0);
  const [tank3sale, setTank3sale] = useState(0);
  const [tank3balance, setTank3balance] = useState(0);
  const [tank3close, setTank3close] = useState(0);
  const [tank3fuelType, setTank3fuelType] = useState(0);


   const [tank4opening, setTank4opening] = useState(0);
  const [tank4recieve, setTank4revieve] = useState(0);
  const [tank4sale, setTank4sale] = useState(0);
  const [tank4balance, setTank4balance] = useState(0);
  const [tank4close, setTank4close] = useState(0);
  const [tank4fuelType, setTank4fuelType] = useState(0);
  

   const [tank5opening, setTank5opening] = useState(0);
  const [tank5recieve, setTank5revieve] = useState(0);
  const [tank5sale, setTank5sale] = useState(0);
  const [tank5balance, setTank5balance] = useState(0);
  const [tank5close, setTank5close] = useState(0);
  const [tank5fuelType, setTank5fuelType] = useState(0);


   const [tank6opening, setTank6opening] = useState(0);
  const [tank6recieve, setTank6revieve] = useState(0);
  const [tank6sale, setTank6sale] = useState(0);
  const [tank6balance, setTank6balance] = useState(0);
  const [tank6close, setTank6close] = useState(0);
  const [tank6fuelType, setTank6fuelType] = useState(0);


   const [tank7opening, setTank7opening] = useState(0);
  const [tank7recieve, setTank7revieve] = useState(0);
  const [tank7sale, setTank7sale] = useState(0);
  const [tank7balance, setTank7balance] = useState(0);
  const [tank7close, setTank7close] = useState(0);
  const [tank7fuelType, setTank7fuelType] = useState(0);


   const [tank8opening, setTank8opening] = useState(0);
  const [tank8recieve, setTank8revieve] = useState(0);
  const [tank8sale, setTank8sale] = useState(0);
  const [tank8balance, setTank8balance] = useState(0);
  const [tank8close, setTank8close] = useState(0);
  const [tank8fuelType, setTank8fuelType] = useState(0);


  const [calenderThree, setCalenderThree] = useState(new Date());
 

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

   const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: `${calenderOne} to ${calenderTwo}`,
    sheet:  `${calenderOne} to ${calenderTwo}`
  })

  useEffect(() => {
    if (!user.login) {
        navigate("/");
    }
  }, [navigate, user])

  const handleSearch = () => {
      if (calenderOne && calenderTwo && station) {
        setloading(true)

var utcTimeOne = new Date(calenderOne);

        // Format the UTC time in the desired format
        // var formattedTimeOne = utcTimeOne.toISOString().split("T")[0] + "T00:00:00.365Z";
    
        var utcTimeTwo = new Date(calenderTwo);

        utcTimeOne.setHours(0);
        utcTimeTwo.setHours(24);

        // var formattedTimeTwo =  utcTimeTwo.toISOString().split("T")[0] + "T24:00:00.00Z";
    

         const token = user.token; 
        instance.get(`/detail-sale`,{
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }
    })
    .then(function (response) {
     const data = response.data.result;
       const filteredData = data.filter(obj => {
         const date = new Date(obj.createAt);
         return date >= utcTimeOne && date <= utcTimeTwo;
       });
        setOkData(filteredData.reverse())
      setloading(false);
       })
       .catch(function (error) {
         setloading(false)
         navigate('/')  
         dispatch(LogoutUser())
       });

     }

  }
  
  const handleSearchTwo = () => {
    
    
    let currentDate = calenderThree.getDate();
    let toDay = new Date().getDate();


    if (currentDate === toDay) {
      setIsSame(true);
    }



    let tank1op = 0;
    let tank1rec = 0;
    let tank1sale = 0;
    let tank1bal = 0;
    let tank1FuelType = 0;

    let tank2op = 0;
    let tank2rec = 0;
    let tank2sale = 0;
    let tank2bal = 0;
    let tank2FuelType = 0;



     let tank3op = 0;
    let tank3rec = 0;
    let tank3sale = 0;
    let tank3bal = 0;
    let tank3FuelType = 0;



     let tank4op = 0;
    let tank4rec = 0;
    let tank4sale = 0;
    let tank4bal = 0;
    let tank4FuelType = 0;



     let tank5op = 0;
    let tank5rec = 0;
    let tank5sale = 0;
    let tank5bal = 0;
    let tank5FuelType = 0;



     let tank6op = 0;
    let tank6rec = 0;
    let tank6sale = 0;
    let tank6bal = 0;
    let tank6FuelType = 0;



     let tank7op = 0;
    let tank7rec = 0;
    let tank7sale = 0;
    let tank7bal = 0;
    let tank7FuelType = 0;
    

     let tank8op = 0;
    let tank8rec = 0;
    let tank8sale = 0;
    let tank8bal = 0;
    let tank8FuelType = 0;





    if (calenderThree && stationTwo) {
 
      setloading(true);
      
      
      const token = user.token;
      
       var utcTimeOne = new Date(calenderThree);
        utcTimeOne = utcTimeOne.toLocaleDateString('fr-CA')

        
        instance.get(`/fuel-balance?sDate=${utcTimeOne}`,{
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }
    })
    .then(function (response) {
      const data = response.data.result;
      setErrmsg(``)
      setOkDataTwo(data);

      data.forEach((obj) => {
        if (obj.tankNo === 1) {

          tank1op = obj.opening;
          tank1FuelType = obj.fuelType;
          tank1rec = obj.fuelIn;
          tank1sale = obj.cash;
          tank1bal = obj.balance;
        }
        if (obj.tankNo === 2) {
          setTank2fuelType(obj.fuelType);
          tank2op = obj.opening;
          tank2rec = obj.fuelIn;
          tank2sale = obj.cash;
          tank2bal = obj.balance;
          }
        if (obj.tankNo === 3) {
          setTank3fuelType(obj.fuelType);
            
          tank3op = obj.opening;
          tank3rec = obj.fuelIn;
          tank3sale = obj.cash;
          tank3bal = obj.balance;
          }
          if (obj.tankNo === 4) {
            tank4op = obj.opening;
          setTank4fuelType(obj.fuelType);
            
          tank4rec = obj.fuelIn;
          tank4sale = obj.cash;
          tank4bal = obj.balance;
          }
        if (obj.tankNo === 5) {
          setTank5fuelType(obj.fuelType);
            
          tank5op = obj.opening;
          tank5rec = obj.fuelIn;
          tank5sale = obj.cash;
          tank5bal = obj.balance;
          }
        if (obj.tankNo === 6) {
          setTank6fuelType(obj.fuelType);
            
          tank6op = obj.opening;
          tank6rec = obj.fuelIn;
          tank6sale = obj.cash;
          tank6bal = obj.balance;
          }
        if (obj.tankNo === 7) {
          setTank7fuelType(obj.fuelType);
            
          tank7op = obj.opening;
          tank7rec = obj.fuelIn;
          tank7sale = obj.cash;
          tank7bal = obj.balance;
          }
        if (obj.tankNo === 8) {
          setTank8fuelType(obj.fuelType);
           
          tank8op = obj.opening;
          tank8rec = obj.fuelIn;
          tank8sale = obj.cash;
          tank8bal = obj.balance;
        }
      })


      setTank1opening(tank1op)
     setTank1revieve(tank1rec)
     setTank1sale(tank1sale)
     setTank1balance(tank1bal)
      setTank1close(tank1close)
      setTank1fuelType(tank1FuelType);

      
        setTank2opening(tank2op)
     setTank2revieve(tank2rec)
     setTank2sale(tank2sale)
     setTank2balance(tank2bal)
      setTank2close(tank2close)
      
      setTank3opening(tank3op)
     setTank3revieve(tank3rec)
     setTank3sale(tank3sale)
     setTank3balance(tank3bal)
      setTank3close(tank3close)
      
        
      setTank4opening(tank4op)
     setTank4revieve(tank4rec)
     setTank4sale(tank4sale)
     setTank4balance(tank4bal)
     setTank4close(tank4close)

        setTank5opening(tank5op)
     setTank5revieve(tank5rec)
     setTank5sale(tank5sale)
     setTank5balance(tank5bal)
      setTank5close(tank5close)
      
       setTank6opening(tank6op)
     setTank6revieve(tank6rec)
     setTank6sale(tank6sale)
     setTank6balance(tank6bal)
      setTank6close(tank6close)
      
       setTank7opening(tank7op)
     setTank7revieve(tank7rec)
     setTank7sale(tank7sale)
     setTank7balance(tank7bal)
      setTank7close(tank7close)
      
       setTank8opening(tank8op)
     setTank8revieve(tank8rec)
     setTank8sale(tank8sale)
     setTank8balance(tank8bal)
     setTank8close(tank8close)


      

      setloading(false);
       })
       .catch(function (error) {
         setloading(false)

         if (error.response.data.msg === "Error: you can't get that date") {
           setErrmsg(`${calenderThree.toLocaleDateString('fr-CA')} have no data ! `)
           setOkDataTwo();

         } else {
              navigate('/')  
         dispatch(LogoutUser())
         }
      
       });

    
    }
  }
  const label = "w-[160px] mr-[10px] text-md";
  const input = "border-[1px] w-[230px] flex items-center justify-between gap-3 text-[14px] gap-3  rounded-md border-gray-400 px-1 py-1";
  const inputContainer = "flex items-center text-md  w-[300px] justify-start";
    
  
  return (
 <div className=''>
      <div className='w-[98%] py-[30px] mx-auto'>
              {/* <h3 className=' text-2xl container mx-auto mb-5 font-extrabold'>Fuel Type Sale Reports </h3> */}
                 {/* <div className='mt-[50px] container mx-auto'>
                  <div className=' flex  justify-around'>
                           <div className='relative'>
                      <div className={inputContainer}>
                      <p className={label}>Start Date:</p>
                    <div className={input}>
                      <SlCalender/>
                     <input readOnly className='w-full' onClick={()=>setCloseOne(false)} value={calenderOne?calenderOne.toDateString():""} />
                     </div>
                      </div>
               
                      {
                          closeOne ? "" : (
                              <>
                                 <p onClick={()=>setCloseOne(true)} className='absolute z-10 top-[35px] text-md text-red-500 cursor-pointer right-[20px]'><AiFillCloseCircle/></p>
                              <Calendar className='absolute p-3' onChange={setCalenderOne} value={calenderOne} />
                              </>
                             )
              }
                  </div>      
              <div className='relative'>
                      <div className={inputContainer}>
                      <p className={label}>End Date:</p>
                <div className={input}>
                     <SlCalender/>
                     <input className='w-full' readOnly onClick={()=>setCloseTwo(false)} value={calenderTwo?calenderTwo.toDateString():''} />
                   </div>
                      </div>
               
                      {
                          closeTwo ? "" : (
                              <>
                                 <p onClick={()=>setCloseTwo(true)} className='absolute z-10 top-[35px] text-md text-red-500 cursor-pointer right-[20px]'><AiFillCloseCircle/></p>
                              <Calendar className='absolute p-3' onChange={setCalenderTwo} value={calenderTwo} />
                              </>
                             )
              }
                  </div>   
                  <div className={inputContainer}>
                      <p className={label}>Station:</p>
                    <select name="prupose_of_use" value={station} onChange={(e)=>setStation(e.target.value)} className={input}>
    <option value="none">Station ...</option>
    <option value="Kyaw_San">Kyaw San.027(PPRD-2327)</option>                   
          </select>
                      </div>
                      <button onClick={handleSearch} className='bg-blue-900 hover:bg-blue-700 duration-300 text-white w-[100px] p-2 rounded-md'>Search</button>
                </div>
                
        </div> */}
        {/* {
          okData?(<> <SaleSummaryFuel okData={okData} tableRef={tableRef}/>
              </>):""
        } */}
                   <div className='mt-[120px]  container mx-auto'>
                <h3 className=' text-2xl container mx-auto mb-[50px] font-extrabold'>Tank Balance Reports </h3>
                  <div className=' flex gap-[50px] justify-start'>
                           <div className='relative'>
                      <div className={inputContainer}>
                      <p className={label}>Start Date:</p>
                    <div className={input}>
                      <SlCalender/>
                     <input readOnly className='w-full' onClick={()=>setCloseThree(false)} value={calenderThree?calenderThree.toDateString():""} />
                     </div>
                      </div>
               
                      {
                          closeThree ? "" : (
                              <>
                                 <p onClick={()=>setCloseThree(true)} className='absolute z-10 top-[35px] text-md text-red-500 cursor-pointer right-[20px]'><AiFillCloseCircle/></p>
                              <Calendar className='absolute p-3' onChange={setCalenderThree} value={calenderThree} />
                              </>
                             )
              }
                  </div>      
                  <div className={inputContainer}>
                      <p className={label}>Station:</p>
                    <select name="prupose_of_use" value={stationTwo} onChange={(e)=>setStationTwo(e.target.value)} className={input}>
    <option value="none">Station ...</option>
    <option value="Kyaw_San">Kyaw San.027(PPRD-2327)</option>                   
          </select>
                      </div>
                      <button onClick={handleSearchTwo} className='bg-blue-900 hover:bg-blue-700 duration-300 text-white w-[100px] p-2 rounded-md'>Search</button>
          </div>
        
                
        </div>
        {
          errmsg ? <p className='text-lg mt-[30px] text-red-400 text-center'>{errmsg}</p>:""
        }
  {
            okDataTwo? <table ref={tableRef} className=' text-[14px] font-extralight mt-[100px]'>
       <tr>
    <th>Station</th>
    <th>Tank</th>
    <th className='w-[200px]'>Fuel Type</th>
    <th>Opening</th>
    <th className='w-[150px]'>Receive Volume (li)</th>
    <th className='w-[150px]'>Receive Volume (Gallon)</th>
    
    <th>Sale</th>
    <th>Balance	</th>
              {
                isSame?"":<th>Closing Balance</th>
    }
    
  </tr>
            <tr>
               <td>kyaw san (ks-027)	</td>
              <td>Tank 1</td>
              <td>{tank1fuelType}</td>
              <td>{tank1opening.toFixed(3)}</td>
              <td>{tank1recieve.toFixed(3)}</td>
              <td>{(tank1recieve / 4.546).toFixed(3)}</td>
              <td>{tank1sale.toFixed(3)}</td>
              <td>{tank1balance.toFixed(3)}</td>
               {
                isSame?"":   <td>{tank1balance.toFixed(3)}</td>
    }
           
    
    
  </tr>
            <tr>
               <td>kyaw san (ks-027)	</td>
              <td>Tank 2</td>
              <td>{tank2fuelType}</td>
              <td>{tank2opening.toFixed(3)}</td>
              <td>{tank2recieve.toFixed(3)}</td>
              <td>{(tank2recieve / 4.546).toFixed(3)}</td>
              <td>{tank2sale.toFixed(3)}</td>
              <td>{tank2balance.toFixed(3)}</td>
                  {
                isSame?"":   <td>{tank2balance.toFixed(3)}</td>
    }
             
  </tr>
            <tr>
               <td>kyaw san (ks-027)	</td>
              <td>Tank 3</td>
              <td>{tank3fuelType}</td>
              <td>{tank3opening.toFixed(3)}</td>
              <td>{tank3recieve.toFixed(3)}</td>
              <td>{(tank3recieve / 4.546).toFixed(3)}</td>
              <td>{tank3sale.toFixed(3)}</td>
              <td>{tank3balance.toFixed(3)}</td>
                   {
                isSame?"":  <td>{tank3balance.toFixed(3)}</td>
    }
             
  </tr>
            <tr>
               <td>kyaw san (ks-027)	</td>
              <td>Tank 4</td>
              <td>{tank4fuelType}</td>
              <td>{tank4opening.toFixed(3)}</td>
              <td>{tank4recieve.toFixed(3)}</td>
              <td>{(tank4recieve / 4.546).toFixed(3)}</td>
              <td>{tank4sale.toFixed(3)}</td>
              <td>{tank4balance.toFixed(3)}</td>
                    {
                isSame?"": <td>{tank4balance.toFixed(3)}</td>
    }
             
            </tr>
            <tr>
               <td>kyaw san (ks-027)	</td>
              <td>Tank 5</td>
              <td>{tank5fuelType}</td>
              <td>{tank5opening.toFixed(3)}</td>
              <td>{tank5recieve.toFixed(3)}</td>
              <td>{(tank5recieve / 4.546).toFixed(3)}</td>
              <td>{tank5sale.toFixed(3)}</td>
              <td>{tank5balance.toFixed(3)}</td>
               {
                isSame?"":   <td>{tank5balance.toFixed(3)}</td>
    }
            
            </tr>
            <tr>
               <td>kyaw san (ks-027)	</td>
              <td>Tank 6</td>
              <td>{tank6fuelType}</td>
              <td>{tank6opening.toFixed(3)}</td>
              <td>{tank6recieve.toFixed(3)}</td>
              <td>{(tank6recieve / 4.546).toFixed(3)}</td>
              <td>{tank6sale.toFixed(3)}</td>
              <td>{tank6balance.toFixed(3)}</td>
                {
                isSame?"":   <td>{tank6balance.toFixed(3)}</td>
    }
           
            </tr>
            <tr>
               <td>kyaw san (ks-027)	</td>
              <td>Tank 7</td>
              <td>{tank7fuelType}</td>
              
              <td>{tank7opening.toFixed(3)}</td>
              <td>{tank7recieve.toFixed(3)}</td>
              <td>{(tank7recieve / 4.546).toFixed(3)}</td>
              <td>{tank7sale.toFixed(3)}</td>
              <td>{tank7balance.toFixed(3)}</td>
                {
                isSame?"":    <td>{tank7balance.toFixed(3)}</td>
    }
            
            </tr>
            <tr>
               <td>kyaw san (ks-027)	</td>
              <td>Tank 8</td>
              <td>{tank8fuelType}</td>
              <td>{tank8opening.toFixed(3)}</td>
              <td>{tank8recieve.toFixed(3)}</td>
              <td>{(tank8recieve / 4.546).toFixed(3)}</td>
              <td>{tank8sale.toFixed(3)}</td>
              <td>{tank8balance.toFixed(3)}</td>
              {
                  isSame?"":    <td>{tank8balance.toFixed(3)}</td>
              }
            
  </tr>
    </table>:""
          }

              
      </div>
      <div className='flex p-3 mt-[30px] mb-[50px] items-center justify-start gap-3'>
          <button onClick={() => onDownload()} className='flex items-center justify-center gap-2 text-md' >To Excel <RiFileExcel2Fill /></button>
      <button onClick={handlePrint} className='flex items-center justify-center gap-2 text-md' >To Print <AiFillPrinter/></button>
    </div>
     {
        loading?<Loading/>:''
      }
    </div>
  )
}

export default DailySaleSummary