import React, { useEffect, useState } from 'react'
import { InputText } from "primereact/inputtext";
import {RiAddCircleFill} from 'react-icons/ri'
import SureComponent from '../../components/PageComponents/SureComponent';
import { FcInfo } from 'react-icons/fc';
import TankNoComponent from '../../components/PageComponents/TankNoComponent';
import FuelRecieveTableLittle from './Table/FuelRecieve.table';
import instance from '../../axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutUser } from '../../redux/slices/LoginSlice';
import Loading from '../../components/Loading';
import FuelTypeComponent from '../../components/PageComponents/FuelTypeComponent';

function InputPage() {
  const [tankNo, setTankNo] = useState({ name: 'All', code: 'Please' });
  const [okAdd, setOkAdd] = useState(false);
  const [okData, setOkData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [receiveLiters, setReceiveLiters] = useState(null);
  const [driverName, setDriverName] = useState(null);
  const [bowserNo, setBowserNo] = useState(null);
  const [errMsg, setErrMsg] = useState(false);
  const [severErrorMsg, setSeverErrorMsg] = useState('');
  const [fetchNow, setFetchNow] = useState(false);
  const [loading, setloading] = useState();
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const [fuelType, setFuelType] = useState();



  const handleAdd = (e) => { 
    e.preventDefault()
    if (tankNo.code === "Please") {
      setErrMsg(true);
    } else if (tankNo.code !== "Please") {
      setErrMsg(false);
      setOkAdd(true);
    }
    

  
  };

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    setloading(true)
    
    const token = user.token;
    const stationId = user.stationId;
    instance.get(`/fuelIn/pagi/1?stationId=${stationId}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(function (response) {
        let data = response.data.result;
        data = data.splice(0, 3)
        setOkData(data.reverse())
        setloading(false);
      })
      .catch(function (error) {
       console.log(error)
        // navigate('/')
        // dispatch(LogoutUser())
        setloading(false)
         
      });
  }, [success]);


 
 const handleClick = (e) => {


   

    const token = user.token;
    setloading(true);

    var utcTimeOne = new Date();
    utcTimeOne = utcTimeOne.toLocaleDateString('fr-CA')

   const dataObj = {
     stationId: "6464e9f1c45b82216ab1db6b",
     driver: driverName,
     bowser: bowserNo,
     tankNo: tankNo.code,
     fuel_type: fuelType.code,
     recive_balance: receiveLiters,
     receive_date: utcTimeOne,
   };


    


    instance.post(`/fuelIn`,dataObj, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
      }
    }).then(function (response) {
      setloading(false)
      const data = response.data.result;
     
      if (data) {
        //  window.location.reload()
      setSuccess((e) => !e);
      setOkAdd(false);
      setFuelType(null);
      setTankNo(null);
      setReceiveLiters('');
      setDriverName('');
      setBowserNo('');
      }

    }).catch(function (error) {
      setloading(false);
      setSeverErrorMsg(error.response.data.msg);
     
       });

  }



  return (
    <div className=' w-[calc(100%-70px)] relative  dashboard-right mx-auto h-[88svh] overflow-y-scroll p-[20px]'>
      <div className='bg-white p-5 h-[80svh] drop-shadow-2xl '>
        <h3 className='text-lg font-bold mb-3'>Fuel In Form</h3>
        <div className='flex gap-2'>
        <TankNoComponent  value={tankNo} setValue={setTankNo}/>
        <FuelTypeComponent value={fuelType} setValue={setFuelType} />
       </div>
        <form onSubmit={handleAdd} className='mt-[30px]  flex gap-5 flex-wrap items-center'>
          <div className="flex flex-col gap-2">
                <label htmlFor="username">Receive Liters</label>
                <InputText value={receiveLiters} onChange={(e)=>setReceiveLiters(e.target.value)} required={true} className='w-[250px] h-[40px]' id="username" type='number' autoComplete='off' />
          </div>
           <div className="flex flex-col gap-2">
                <label htmlFor="username">Driver Name</label>
                <InputText value={driverName} onChange={(e)=>setDriverName(e.target.value)} required className='w-[250px] h-[40px]' id="username" type='text' autoComplete='off' />
          </div>
             <div className="flex flex-col gap-2">
                <label htmlFor="username">Bowser No</label>
                <InputText value={bowserNo} onChange={(e)=>setBowserNo(e.target.value)} required className='w-[250px] h-[40px]' id="username" type='text' autoComplete='off'/>
          </div> 
          {
            errMsg?<p className='flex  w-[100%]   justify-start px-5 items-center gap-3'><FcInfo/> Please Select Tank No</p>:''
          }
           <div className='w-[100%]'><button type='submit' className=' hover:scale-[1.05] duration-300 border-[0.5px] hover:bg-black hover:text-white border-black mt-2 w-[100px] p-2 flex items-center justify-around rounded-md'> <RiAddCircleFill size={20}/> Add</button></div>
        </form>
           {
          severErrorMsg ? <p className=' container mx-auto uppercase text-red-400 mt-[30px]'>{severErrorMsg}</p>:""
       }
        <FuelRecieveTableLittle okData={okData} />
       
      </div>

      {
        okAdd?<SureComponent handleClick={handleClick} fetchNow={fetchNow} setFetchNow={setFetchNow} data={[tankNo.code,receiveLiters,driverName,bowserNo,fuelType.code]} okAdd={okAdd} setOkAdd={setOkAdd} />:''
      }
      {
        loading?<Loading/>:""
      }
    
    </div>
  )
}

export default InputPage