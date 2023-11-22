import React, { useEffect,useRef,useState  } from 'react'
import 'react-calendar/dist/Calendar.css';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { useDownloadExcel } from 'react-export-table-to-excel';
import SearchReportsTable from '../components/tables/SearchReports.Table';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import instance from '../axios';
import { LogoutUser } from '../redux/slices/LoginSlice';
import Loading from '../components/Loading';
import {AiFillCloseCircle} from 'react-icons/ai'
import {SlCalender} from 'react-icons/sl';


function SearchReports() {
  const user = useSelector((state) => state.login);
    const navigate = useNavigate();
  const dispatch = useDispatch();


    const tableRef = useRef();
    const [closeOne, setCloseOne] = useState(true);
    const [closeTwo, setCloseTwo] = useState(true);
    const [loading, setloading] = useState(false)
    const [okData, setOkData] = useState([])
    const [calenderOne, setCalenderOne] = useState();
    const [calenderTwo, setCalenderTwo] = useState();
    
 

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
    setloading(true)

var utcTimeOne = new Date(calenderOne);
    
      var utcTimeTwo = new Date(calenderTwo);

      utcTimeOne.setHours(0);
      utcTimeTwo.setHours(24);


      console.log(utcTimeOne.toISOString())
      console.log(utcTimeTwo.toISOString())

      const oe = utcTimeOne.toISOString();
      const ew = utcTimeTwo.toISOString();


    //   const utcDateOne = new Date(utcTimeOne.getTime() - (utcTimeOne.getTimezoneOffset() * 60000));
    //   const utcDateTwo = new Date(utcTimeTwo.getTime() - (utcTimeTwo.getTimezoneOffset() * 60000));

    //  const isoStringone = utcDateOne.toISOString().split("T")[0] + "T00:00:00.365Z"
    //   const isoStringTwo = utcDateTwo.toISOString().split("T")[0] + "T23:00:00.000Z"

        const token = user.token;
        
        instance.get(`/daily-report/by-date?sDate=${oe}&eDate=${ew}`,{
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
      setloading(false)
         navigate('/')  
           dispatch(LogoutUser())
       });


    }
  
  
  const label = "w-[160px] mr-[10px] text-md";
  const input = "border-[1px] gap-3 flex w-[230px] items-center justify-between text-[14px] rounded-md border-gray-400 px-1 py-1";
  const inputContainer = "flex items-center text-md  w-[300px] justify-start";
  
  return (
 <div className='mt-[100px]'>
      <div className='w-[98%] py-[30px] mx-auto'>
              <h3 className=' text-2xl container mx-auto mb-5 font-extrabold'>Sale Summary Reports </h3>
                 <div className='flex justify-between mt-[50px] container mx-auto'>
                  <div className='relative'>
                      <div className={inputContainer}>
                      <p className={label}>Start Date:</p>
              <div className={input}>
                <SlCalender/>
                   <input className='w-full' readOnly onClick={()=>setCloseOne(false)} value={calenderOne?calenderOne.toDateString():""} />
                      </div>
                      </div>
               
                      {
                          closeOne ? "" : (
                              <>
                                 <p onClick={()=>setCloseOne(true)} className='absolute z-10 top-[50px] text-md text-red-500 cursor-pointer right-[20px]'><AiFillCloseCircle/></p>
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
                  <input className='w-full' readOnly onClick={()=>setCloseTwo(false)} value={calenderTwo?calenderTwo.toDateString():""} />
                  </div>
                      </div>
               
                      {
                          closeTwo ? "" : (
                              <>
                                 <p onClick={()=>setCloseTwo(true)} className='absolute z-10 top-[50px] text-md text-red-500 cursor-pointer right-[20px]'><AiFillCloseCircle/></p>
                              <Calendar className='absolute p-3' onChange={setCalenderTwo} value={calenderTwo} />
                              </>
                             )
              }
                  </div>   
                  <div className='flex items-center justify-center'>
                      <button onClick={handleSearch} className='bg-blue-900 hover:bg-blue-700 duration-300 text-white w-[100px] p-2 rounded-md'>Search</button>
                  </div>
       </div>
       <SearchReportsTable okData={okData} tableRef={tableRef}/>
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

export default SearchReports