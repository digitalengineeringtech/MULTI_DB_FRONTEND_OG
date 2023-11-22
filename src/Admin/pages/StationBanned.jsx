/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { AdminGoPprd } from '../components/AdminGoPprd'
import UsePost from '../../MainConDas/components/hooks/UsePost'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UsePatch_1 from '../../MainConDas/components/hooks/UsePatch_1';


function StationBanned() {
  const [okData,setOkData] = useState([]);
  const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();
   const [{ data_pt_1, loading_pt_1, error_pt_1 }, patchIt_1] = UsePatch_1();
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
     if (!user.login) {
      navigate("/");
     }
    
    fetchIt(`collection?name=${user.name}`, user.token);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate]);
  
  useEffect(() => {
    if (data_g?.result) {
      setOkData(data_g?.result);
    }
  }, [data_g, loading_g, error_g]);

  const handleClick = (e) => {
    patchIt_1(`collection/pprd`,{collectionId:e,name:'pprd'},user.token)
  };

   useEffect(() => { 
    // if (data_pt_1?.con) {
    //    fetchIt(`collection?name=${user.name}`, user.token);
     // }
     if (data_pt_1.con) {
        fetchIt(`collection?name=${user.name}`, user.token);
     }

  }, [data_pt_1, loading_pt_1, error_pt_1]);

  return (
    <div className='container  bg-white mx-auto py-[150px]'>
    <h2 className=' font-bold text-[3vh]'>PPRD COLLECTIONS</h2>  
      <div className='flex flex-wrap  gap-3 py-[30px]'>
        {
          okData.map((e, index) => (
            <AdminGoPprd img={e.stationImg} handleClick={handleClick} collectionId={e._id} key={`key_${index}`} permission={e.permission.includes('pprd')} title={e.collectionName} st={e.stationCollection.length}/>
          ))
        }
      </div> 
    </div>
  )
}

export default StationBanned