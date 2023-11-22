import React, { useEffect, useState } from 'react'
import Banned from '../../assets/images/banned-sign-svgrepo-com.png';
import keyHole from '../../assets/images/key-hole-svgrepo-com.svg';
import AddStation from '../../assets/images/add-circle-svgrepo-com.png';
import activeBanCard from '../../assets/images/balloon-svgrepo-com.png'
import UsePost from '../../MainConDas/components/hooks/UsePost';
import UseGet_1 from '../../MainConDas/components/hooks/UseGet_1';
import UsePost_11 from '../../MainConDas/components/hooks/UsePost_11';
import { useSelector } from 'react-redux';
import { useLottie } from 'lottie-react';
import SNAP from "../../assets/images/Animation - 1700557870965.json"

export const ActivateBanCard = ({setOkData}) => {
    const [isBind, setIsBind] = useState(true);
    const [station, setStation] = useState('');
    const [mode, setMode] = useState('allow');
    const [error, setError] = useState(false);
    const [{ data_p_11, loading_p_11, error_p_11 }, fetchIt_11] = UsePost_11();
    const [{data_get_1,loading_get_1,error_get_1},getIt_1] = UseGet_1();
    const [loading, setLoading] = useState(false);
    const user = useSelector((state) => state.login);

    const handleBind = () => {
      if (station === '') {
          setError(true);
      } else {
          setError(false);
          const body = {stationDetailId:station,mode:mode};
          fetchIt_11(`/close-permission/add-permission`,body,user.token);
          setMode('allow');
          setStation('');
      }
    };

    useEffect(() => {
        setLoading(loading_p_11);
        if (data_p_11?.con) {
              getIt_1('/close-permission', user.token);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data_p_11, loading_p_11, error_p_11]);

    useEffect(() => {
        if (data_get_1?.result) {
            setOkData(data_get_1?.result);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data_get_1, loading_get_1, error_get_1]);
    
    const options = {
    animationData: SNAP,
    loop: true,
  };
    const {View} = useLottie(options);

  return (
      <div className=' w-[23%] relative hover:translate-y-[-10px] duration-300 leading-8 p-5 bg-[#e0e0e0] animate-pop-up'>
        <p className='font-bold text-[18px] mb-2'>Bind Station</p>
      {
              isBind ? <>
        <div className='bann_button_inactive  flex items-center justify-center w-[150px] h-[150px] '>
        <img onClick={()=>setIsBind(false)} alt='Banned' className='w-[100px] hover:scale-105 duration-500 cursor-pointer h-[100px]' src={AddStation} />
        </div>
        <p className='text-[16.2px] mt-2'>Set Up</p>
        <div className='cursor-pointer hover:drop-shadow-lg flex group items-center justify-between'>
        <p className='text-[20px] font-bold'>Intital State Ban --</p>
        <img src={activeBanCard} className='w-[40px] text-green-600 duration-500 group-hover:rotate-180' alt='key' />
        </div>
        </> :
<div className='h-[90%]  flex flex-col justify-center'>
{
    error&&<p className='text-red-500 font-bold'> - Need Station</p>
}
<input value={station} onChange={(e)=>setStation(e.target.value)} className=' w-full  px-3 h-[50px] rounded-md' placeholder='Station Id'/>
 <div className='flex gap-3 my-[20px]'>
  <div>
  <input onChange={e=>setMode(e.target.value)} checked type="radio" id="allow" name="fav_language" value="allow"/>
  <label for="allow">Allow</label>
  </div>
   <div className=''>
  <input  onChange={e=>setMode(e.target.value)} type="radio" id="dead" name="fav_language" value="dead"/>
  <label for="dead">Dead</label>
  </div>
  </div>     
 <div className='flex flex-col gap-2 items-center justify-end'>
     <button onClick={handleBind} className=' bg-yellow-500 px-4 h-[45px] w-full rounded-md'>Bind</button>
     <button onClick={()=>setIsBind(true)} className=' bg-red-600 text-white px-4 h-[45px] w-full rounded-md'>Back</button>
 </div>
  {
    loading&& <div className='absolute top-0 flex items-center justify-center left-0 bottom-0 right-0 bg-[#33333366]'>{View}</div>
  }
    </div>
      }
    </div>
  )
}
