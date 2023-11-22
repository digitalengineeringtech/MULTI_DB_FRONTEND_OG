import React, { useEffect, useState } from 'react'
import UseGet_1 from '../../MainConDas/components/hooks/UseGet_1'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UseGet_2 from '../../MainConDas/components/hooks/UseGet_2';
import UseGet_3 from '../../MainConDas/components/hooks/UseGet_3';

function AdminStation({stationId,setStaionId,collectionId,setCollectionId,roleId,setRoleId,name}) {

const [stations,setStations] = useState([]);
const [collection,setColleciton] = useState([]);
const [roles,setRoles] = useState([]);

    const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
    const [{ data_get_2, loading_get_2, error_get_2 }, getIt_2] = UseGet_2();
    const [{ data_get_3, loading_get_3, error_get_3 }, getIt_3] = UseGet_3();
   
const user = useSelector((state) => state.login);
const navigate = useNavigate();

useEffect(()=>{
    if(!user.login){
        navigate('/');
    }
    getIt_1(`/station-detail/get/all?accessDb=${name}`, user.token);
    getIt_2(`/collection`, user.token);
    getIt_3('/role', user.token);

// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);
    
useEffect(()=>{
    if (data_get_1.result) {
        setStations(data_get_1.result)
    }
},[data_get_1,loading_get_1,error_get_1]);

useEffect(()=>{
    if (data_get_2.result) {
        setColleciton(data_get_2.result);
    }
},[data_get_2, loading_get_2, error_get_2]);

useEffect(()=>{
 if (data_get_3.result) {
        setRoles(data_get_3.result);
}
},[data_get_3,loading_get_3,error_get_3]);

  return (
     <div className=' w-[33.33%] gap-3  flex flex-col '>
    <div>
       <label for="stations">Station Id:</label>
       <select onChange={(e)=>setStaionId(e.target.value)}  value={stationId} id="stations" name="stations" className='w-[100%] px-3 h-[50px] border-[1px]'>
       <option value='none'>none</option>
       {
        stations.map((e)=>(
            <option value={e._id}>{e.name}</option>
        ))
       }
      </select>
    </div>
    <div>
       <label for="Collections">Collection Id:</label>
       <select value={collectionId} onChange={(e)=>setCollectionId(e.target.value)} id="Collections" name="Collections" className='w-[100%] px-3 h-[50px] border-[1px]'>
        <option value="none">none</option>
      {
        collection.map((e)=>(
              <option value={e._id}>{e.collectionName}</option>
        ))
      }
      </select>
    </div>
    <div>
       <label for="role">Role Id:</label>
       <select value={roleId} onChange={(e)=>setRoleId(e.target.value)} id="role" name="role" className='w-[100%] px-3 h-[50px] border-[1px]'>
       <option value="none">none</option>
     {
        roles.map((e) => (
          <option value={e._id}>{e.name}</option>   
        ))
     }
      </select>
    </div>
    </div>  
  )
}

export default AdminStation