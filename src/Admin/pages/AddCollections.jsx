/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import UseGet_1 from '../../MainConDas/components/hooks/UseGet_1';
import UseGet_2 from '../../MainConDas/components/hooks/UseGet_2';
import UsePatch_1 from '../../MainConDas/components/hooks/UsePatch';
import UseGet_11 from '../../MainConDas/components/hooks/UseGet_B_1';
import { useNavigate } from 'react-router-dom';


export const AddCollections = () => {
  
    const [collectionsData, setCollectionData] = useState([]);
    const [stationData, setStationData] = useState([]);
    const [collectionName, setCollectionName] = useState('');
    const [collectionId,setCollectionId] = useState('');
    const user = useSelector((state) => state.login);

    const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
  
    const [{ data_g_11, loading_g_11, error_g_11 }, fetchIt_G_11] = UseGet_11();
  
  
    const [{data_p_1,loading_p_1,error_p_1},patchIt_1] = UsePatch_1();
    const navigate = useNavigate();
  
  
  
  
  useEffect(() => {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const station = urlParams.get('id');
   const name = urlParams.get('name');

    setCollectionName(name);
    setCollectionId(station);
    
    getIt_1(`/collection?collectionName=${name}`, user.token);
    // getIt_2('/station-detail/get/all', user.token);
    fetchIt_G_11('/station-detail/get/all', name, user.token);
      
 

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
  }, [ user,navigate]);

    useEffect(() => {
    if (data_get_1.result) {
      setCollectionData(data_get_1.result[0].stationCollection);
      
    if (data_g_11.result) {
    const filteredList = data_g_11.result.filter(obj => {
    return !data_get_1.result[0]?.stationCollection.some(filterObj => obj._id === filterObj.stationId);
});

  if (filteredList) {
  setStationData(filteredList);
  }


        }
    }
      

    }, [data_get_1, loading_get_1, error_get_1,data_g_11, loading_g_11, error_g_11]);
  





  const handleClick = (e) => {
        patchIt_1('/collection/add/stations', { stationId: e._id,collectionId:collectionId,stationName:e.name }, user.token);
    };

  const handleRemove = (e) => {
        patchIt_1('/collection/remove/stations', { stationId: e.stationId, collectionId:collectionId,stationName:e.stationName }, user.token);
    };

    useEffect(() => {
        if (data_p_1) {
        if (data_p_1.con) {
    getIt_1(`/collection?collectionName=${collectionName}`, user.token);
    // getIt_2('/station-detail/get/all', user.token);
    fetchIt_G_11('/station-detail/get/all', collectionName, user.token);   
        }
        }
    }, [data_p_1, loading_p_1, error_p_1]);
  

    
  return (
<div className='pt-[70px] border-2 flex'>
<div className='min-h-[90svh] p-[30px] bg-white drop-shadow-md w-[50%]'>
<h3 className='text-[4vh] my-[20px]'><span className=' uppercase'>{collectionName}</span> Collections</h3>
<table className='bg-white drop-shadow-md my-[40px]'>
  <tr>
    <th>No</th>
    <th>Station Id</th>
    <th>Name</th>
    <th>Action</th>
  </tr>
  {
    collectionsData.map((e,index)=>(
    <tr className='h-[60px]'>
    <td>{index + 1}</td>
    <td className='text-left text-[16px]'>{e.stationId}</td>
    <td className='text-left text-[16px]'>{e.stationName}</td>
    <td className='text-left text-[16px] p-2'><button className='bg-red-500 hover:text-white hover:bg-red-600 duration-300 py-2 rounded-md w-full' onClick={()=>handleRemove(e)}>Remove</button></td>
  </tr>    
    ))
  }
</table>
</div>
<div className='bg-gray-100 h-full p-[30px] w-[50%]'>
<h3 className='text-[4vh] my-[20px]'>Station Id For Collections</h3> 
{
 stationData.length  === 0?<div className='content'>
<p className='text-[3vh] font-bold my-[30px]'>- No <span className=' uppercase'>{collectionName}</span>  Stations IDs.</p>
</div>:<div className='content'>
    
<table className='bg-white drop-shadow-md my-[40px]'>
  <tr>
    <th>No</th>
    <th>Station Id</th>
    <th>Name</th>
    <th>Action</th>
  </tr>
  {
    stationData.map((e,index)=>(
 <tr className='h-[60px]'>
    <td>{index}</td>
    <td className='text-left text-[16px]'>{e._id}</td>
    <td className='text-left text-[16px]'>{e.name}</td>
    <td className='text-left text-[16px] p-2'>
    <button onClick={()=>handleClick(e)}
    className='bg-green-500 hover:text-white hover:bg-green-600 duration-300 py-2 rounded-md w-full'>Add</button></td>
  </tr>    
    ))
  }
</table>
<p className='text-[3vh] font-bold my-[30px] flex items-center'>- You need to add those IDs to Kyawsan's collections.</p>

</div>
}

</div>
    </div>
  )
}
