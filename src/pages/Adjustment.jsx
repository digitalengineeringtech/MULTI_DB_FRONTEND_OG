import React, {useRef,useEffect,useState  } from 'react'
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
import {AiFillCloseCircle} from 'react-icons/ai'
import AdjustmentTable from '../components/tables/Adjustment.table';
import {SlCalender} from 'react-icons/sl';


function Adjustment() {
  const user = useSelector((state) => state.login);
    const navigate = useNavigate();
  const dispatch = useDispatch();


  const tableRef = useRef();
  const tableRef2 = useRef();
    const [closeOne, setCloseOne] = useState(true);
    const [closeTwo, setCloseTwo] = useState(true);
    const [loading, setloading] = useState(false)
    const [okData, setOkData] = useState()
    const [calenderOne, setCalenderOne] = useState(new Date());
    const [calenderTwo, setCalenderTwo] = useState(new Date());
    const [station, setStation] = useState(false);
 


  const handlePrint2 = useReactToPrint({
    content:()=>tableRef2.current
  })

   const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: `Adjustment Report`,
    sheet:  `Adjustment Report`
   })
  
  useEffect(() => {
    if (!user.login) {
        navigate("/");
    }
  }, [navigate, user])

  const handleSearch = () => {
      if (calenderOne && calenderTwo && station) {
        setloading(true)

var utcTimeOne = new Date(calenderOne.getTime());

        // Format the UTC time in the desired format
    
          var utcTimeTwo = new Date(calenderTwo.getTime());
          
          utcTimeOne.setHours(0);
          utcTimeTwo.setHours(24); 
    
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
  const label = "w-[160px] mr-[10px] text-md";
  const input = "border-[1px] gap-3 w-[230px] flex items-center justify-between text-[14px]  rounded-md border-gray-400 px-1 py-1";
  const inputContainer = "flex items-center text-md  w-[300px] justify-start";

    
  
  return (
 <div className='mt-[100px]'>
      <div className='w-[98%] py-[30px] mx-auto'>
              <h3 className=' text-2xl container mx-auto mb-5 font-extrabold'>Adjustment Report </h3>
                 <div className='mt-[50px] container mx-auto'>
                  <div className=' flex flex-col gap-[30px] justify-around'>
                      <div className='gap-[60px] flex'>
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
                    <input className='w-full' readOnly onClick={()=>setCloseTwo(false)}  value={calenderTwo?calenderTwo.toDateString():''} />
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
    <option value="none">Station</option>
    <option value="Kyaw_San">Kyaw San.027(PPRD-2327)</option>                   
          </select>
                          </div>
                      <button onClick={handleSearch} className='bg-blue-900 hover:bg-blue-700 duration-300 text-white w-[100px] p-2 rounded-md'>Search</button>
   </div>
                </div>
                
        </div>
        
              {
          okData ? <>
            <AdjustmentTable calenderOne={calenderOne} calenderTwo={calenderTwo} okData={okData} tableRef={tableRef2} />
               <div className='flex p-3 mt-[30px] mb-[50px] items-center justify-start gap-3'>
          <button onClick={() => onDownload()} className='flex items-center justify-center gap-2 text-md' >To Excel <RiFileExcel2Fill /></button>
      <button onClick={handlePrint2} className='flex items-center justify-center gap-2 text-md' >To Print <AiFillPrinter/></button>
    </div>
          </> : ""
         }
            
              
      </div>
     {
        loading?<Loading/>:''
      }
    </div>
  )
}

export default Adjustment