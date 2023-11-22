import React, { useEffect, useState } from 'react'
import UseGet_1 from '../../MainConDas/components/hooks/UseGet_1';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AdminPermits({permitOne,setPermitOne,permitTwo,setPermitTwo,permitThree,setPermitThree,permitFour,setPermitFour}) {
const [permit1, setPermit1] = useState([]);
const [permit2, setPermit2] = useState([]);
const [permit3, setPermit3] = useState([]);
const [permit4, setPermit4] = useState([]);
const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
const user = useSelector((state)=>state.login);
const navigate = useNavigate();
    
useEffect(() => {
if(!user.login){
    navigate(`/`);
}      
    getIt_1('/permit', user.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
    
useEffect(()=>{
if (data_get_1.result) {
setPermit1(data_get_1.result);
setPermit2(data_get_1.result);
setPermit3(data_get_1.result);
setPermit4(data_get_1.result);
}
},[data_get_1,loading_get_1,error_get_1]);

  return (
     <div className=' w-[33.33%] flex gap-3  flex-col '>
    <div>
       <label for="permit">Permit:</label>
       <select value={permitOne} onChange={(e)=>setPermitOne(e.target.value)} id="permit" name="permit" className='w-[100%] h-[50px] px-3 border-[1px]'>
       <option value="none">None</option>
       {
        permit1.map((e)=>(
          <option value={e._id}>{e.name}</option>    
        ))
       }
      </select>
    </div>
    <div>
       <label for="permit2">Permit:</label>
       <select value={permitTwo} onChange={(e)=>setPermitTwo(e.target.value)} id="permit2" name="permit2" className='w-[100%] h-[50px] px-3 border-[1px]'>
       <option value="none">None</option>
      {
        permit2.map((e)=>(
          <option value={e._id}>{e.name}</option>    
        ))
       }
      </select>
    </div>
   <div>
       <label for="permit3">Permit:</label>
       <select value={permitThree} onChange={(e)=>setPermitThree(e.target.value)} id="permit3" name="permit3" className='w-[100%] h-[50px] px-3 border-[1px]'>
       <option value="none">None</option>
      {
        permit3.map((e)=>(
          <option value={e._id}>{e.name}</option>    
        ))
       }
      </select>
    </div>
    <div>
       <label for="permit4">Permit:</label>
       <select value={permitFour} onChange={(e)=>setPermitFour(e.target.value)} id="permit4" name="permit4" className='w-[100%] h-[50px] px-3 border-[1px]'>
         <option value="none">None</option>
      {
        permit4.map((e)=>(
          <option value={e._id}>{e.name}</option>    
        ))
       }
      </select>
    </div>
    </div>  
  )
}

export default AdminPermits