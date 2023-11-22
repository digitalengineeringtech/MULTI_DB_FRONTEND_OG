import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import UseDelete_1 from '../../MainConDas/components/hooks/UseDelete_1';

function AdminDeleteSure({ setDeleteSure,deleteStationCode,deleteStationName,setStationLoading}) {
  

  const [sureLoading, setSureLoading] = useState(false);
  const [confirm, setConfirm] = useState('');
  const [btnDis, setBtnDis] = useState(true);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get('name');
  
  const [{data_de_1,loading_de_1,error_de_1},detIt_1] = UseDelete_1();
  const user = useSelector((state) => state.login);
  const handleDelete = () => {
    detIt_1(`/station-detail?_id=${deleteStationCode}&accessDb=${name}`,user.token)
  };
  
    useEffect(() => {
      setSureLoading(loading_de_1);
      setStationLoading(loading_de_1);
        if (data_de_1.con) {
            setDeleteSure(false);
        }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data_de_1,loading_de_1,error_de_1])
  
    
    useEffect(() => {
    if (confirm === deleteStationName) {
            setBtnDis(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirm]);


    
  return (
    <>
      {
        sureLoading?<Loading/>:''
      }
    <div className=' absolute top-0 h-[100svh] overflow-hidden left-0 right-0 flex items-center justify-center bottom-0 bg-[#7878782f] '>
              <div className=' w-[400px] bg-white mb-[100px] flex flex-col items-center drop-shadow-lg rounded justify-between gap-3  p-3'>
                <p className='mb-[5px]'>Are You Sure To Delete?</p>
                <div className=' w-full'>
                      <p>Enter Station Name : {deleteStationName}</p>
                      <input onpaste="return false;"  value={confirm} onChange={(e)=>setConfirm(e.target.value)} className='border-2 w-full h-[50px] p-2 mt-[10px]' placeholder='Enter Station Name'/>
                </div>
                <div className='flex mt-[10px] items-center justify-between w-full'>
                  <button onClick={handleDelete} className='bg-[#27ae60] p-2 text-white rounded disabled:bg-gray-300' disabled={btnDis?true:false} >Delete</button>
                  <button className='bg-[#c0392b] p-2 text-white rounded' onClick={()=>setDeleteSure(false)}>Cancel</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default AdminDeleteSure