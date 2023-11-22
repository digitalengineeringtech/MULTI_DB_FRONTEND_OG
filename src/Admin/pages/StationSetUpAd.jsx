import React, { useEffect, useState } from 'react'
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import StationDetailTable from '../Tables/StationDetails.tables';
import { FcCancel } from 'react-icons/fc';
import AdminSure from '../components/AdminSure';
import RightSetupAd from '../components/RightSetupAd';
import UsePost_11 from '../../MainConDas/components/hooks/UsePost_11';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import AdminDeleteSure from '../components/AdminDeleteSure';
import { useNavigate } from 'react-router-dom';

function StationSetUpAd() {
  const [station, setStationId] = useState(
    {
  "_id":"64ce8b0c26c645b891eed1e8",
  "name": "Kyaw San (ks-031)",
  "location": "Ohn Chaw",
  "lienseNo": "2647",
  "__v": 0,
  "deviceCount": 4,
  "nozzleCount": 32
}
  );
  const [isSetUp, setIsSetUp] = useState(false);
  const [data, setData] = useState(false);
  const [isSure, setIsSure] = useState(false);
  const [stationCode, setStationCode] = useState('');
  const [stationName, setStationName] = useState([]);
  const [stationLiense, setStationLiense] = useState([]);
  const [stationLocation, setStationLocation] = useState([]);
  const [stationDeviceCount, setStationDeviceCount] = useState([]);
  const [stationNozzleCount, setStationNozzleCount] = useState([]);
  const [stationSetup, setStationSetUp] = useState({
  name:'',
  location:'',
  lienseNo:'',
  deviceCount:'',
  nozzleCount:'',
  }); 
  const [stationError, setStationError] = useState('');
  const [stationLoading, setStationLoading] = useState(false);
  const [deleteSure, setDeleteSure] = useState(false);
  const [deleteStationName, setDeleteStationName] = useState('');
  const [deleteStationCode, setDeleteStationCode] = useState('');

  const [{ data_p_11, loading_p_11, error_p_11 }, fetchIt_11] = UsePost_11();
  const user = useSelector((state) => state.login);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get('name');
const navigate = useNavigate();
 
  const handleEdit = (e) => {
    setStationCode(e._id);
    setStationName(e.name);
    setStationLiense(e.lienseNo);
    setStationLocation(e.location);
    setStationDeviceCount(e.deviceCount);
    setStationNozzleCount(e.nozzleCount)
    setData(prevData => {
      // Toggle between e._id and false
    return prevData === e._id ? 11 : e._id;
    });
  };


  const addStation = (e) => {
    e.preventDefault();
    const obj = {
      name: stationSetup.name,
      lienseNo:stationSetup.lienseNo,
      location: stationSetup.location,
      deviceCount: Number(stationSetup.deviceCount),
      nozzleCount:Number(stationSetup.nozzleCount)
    }
    fetchIt_11(`/station-detail?accessDb=${name}`,obj,user.token);
  };

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    setStationLoading(loading_p_11);
    
    if (error_p_11) {
      setStationError(error_p_11.response.data.msg);
    }

    if (data_p_11.con) {
      setStationSetUp({
        name: '',
        location: '',
        lienseNo: '',
        deviceCount: '',
        nozzleCount: ''
      });
      setStationError('');
    }

  },[ data_p_11, loading_p_11, error_p_11 ])

  const deleteStation = (e) => {
    setDeleteStationCode(e._id);
    setDeleteStationName(e.name);
    setDeleteSure(true);
  };
   

  return (
    <div className={`pt-[75px] bg-gray-100 min-h-[100svh]  flex justify-center text-blue duration-500 pb-[100px]  ${isSure || deleteSure?'h-[100svh] overflow-hidden':''} `}>
    <div className={` fixed top-[75px] left-0 bottom-0 overflow-hidden  duration-500 bg-blue-900 h-[90svh] ${isSetUp?'w-[40%] p-[50px] ' : 'w-[0]'} `}>
   <RightSetupAd stationError={stationError} addStation={addStation} setStationSetUp={setStationSetUp} stationSetup={stationSetup}  isSetUp={isSetUp}/>
    </div>
    <div className={`relative duration-500 p-[50px]  bg-gray-00 ${isSetUp?'w-[60%]  ml-[40%]' : 'w-[100%]'}`}>
     <div onClick={() => {
      setIsSetUp((e) => !e);
      setData(false);
    }} className=' hover:rounded-md duration-300 bg-blue-600 cursor-pointer absolute top-0 left-0 p-3'>
      <AiOutlineAppstoreAdd className={` text-black scale-[2] duration-500  ${isSetUp?'rotate-180':''}`} />
    </div>
        <div className='h-[100%]  mt-[20px]'>
         
          <div className=' flex items-center justify-between'>
             <p className='text-2xl font-bold mb-[20px]'>Stations Details</p>
            <button onClick={() => {
              setData(11);
              setStationName('');
              setStationLiense('');
              setStationLocation('');
              setStationDeviceCount('');
              setStationNozzleCount('');
            }} className='p-2 text-white bg-red-300  w-[80px] hover:bg-red-400 flex items-center justify-center py-3'>
              <FcCancel className=' scale-150'/>
            </button>
          </div>
          <StationDetailTable setIsSure={setIsSure} handleEdit={handleEdit} data={data} station={station} isSetUp={isSetUp} setStationName={setStationName} 
          stationName={stationName}
          stationLiense={stationLiense}
          setStationLiense={setStationLiense} 
          stationLocation={stationLocation}
          setStationLocation={setStationLocation} 
          stationDeviceCount={stationDeviceCount}
          setStationDeviceCount={setStationDeviceCount} 
          stationNozzleCount={stationNozzleCount}
          setStationNozzleCount={setStationNozzleCount}
          stationLoading={stationLoading}
          deleteStation={deleteStation}
          />
          {
            isSure ? <AdminSure stationName={stationName} stationLiense={stationLiense} stationLocation={stationLocation} stationDeviceCount={stationDeviceCount} stationNozzleCount={stationNozzleCount} setIsSure={setIsSure} stationCode={stationCode} setStationLoading={setStationLoading} setData={setData} />:''
          }
          {
            deleteSure ? <AdminDeleteSure setDeleteSure={setDeleteSure} deleteStationCode={deleteStationCode} deleteStationName={deleteStationName} setStationLoading={setStationLoading} />:''
          }
          {/* <PaginatorComponent onPageChange={0} first={0} rows={0} totalLength={0} language={0}/> */}
        </div>
        {
          stationLoading?<Loading/>:''
        }
    </div>
    </div>
  )
}

export default StationSetUpAd