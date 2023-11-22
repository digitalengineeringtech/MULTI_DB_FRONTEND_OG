import React, { useEffect, useState } from 'react'
import { FaUserPlus } from 'react-icons/fa';
import UseGet_1 from '../../MainConDas/components/hooks/UseGet_1';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminAccDetailsRow from './AdminAccDetailsRow';
import AdminAccDelete from './AdminAccDelete';
import UseDelete_1 from '../../MainConDas/components/hooks/UseDelete_1';

function AdminAccDashboard({ setNavigation }) {
  const [isDelete, setIsDelete] = useState(false);
  const [userData, setUserData] = useState([]);
  const [deleteUserCode, setDeleteUserCode] = useState('');

  
  const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();

  const [{ data_de_1, loading_de_1, error_de_1 }, detIt_1] = UseDelete_1();

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const collectionId = urlParams.get('collectionId');

  useEffect(() => {
  if (!user.login) {
    navigate("/");
  }
  getIt_1(`/user?collectionId=${collectionId}`, user.token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data_get_1.result) {
      setUserData(data_get_1.result);
    }
  }, [data_get_1, loading_get_1, error_get_1]);

  const handleDelete = (e) => {
    setDeleteUserCode(e);
    setIsDelete(true);
  };

  const handleSureDelete = () => {
    detIt_1(`/user?_id=${deleteUserCode}`,user.token);
  };


  useEffect(() => {
    if (data_de_1.con) {
      setIsDelete(false);
      getIt_1(`/user?collectionId=${collectionId}`, user.token);

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data_de_1, loading_de_1, error_de_1]);


  return (
    <>
    
    <div className='shadow p-3 mb-[50px] rounded-lg bg-white w-[95%] relative '>
        <h3 className=' my-[10px]'>Account Lists</h3>
  <table className='bg-white  my-[40px]'>
      <tr>
     <th className='w-[3.4%]'>No</th>
     <th className='w-[9.4%]'>Email</th>   
     <th className='w-[14.4%]'>Station Id</th>
     <th className='w-[5.4%]'>Role</th>
     <th className='w-[7.4%]'>Date</th>
     <th className='w-[5.4%]'>Permits</th>   
     <th className='w-[14.4%]'>Actions</th>   
    </tr>
   {
    userData.map((e,index) => (
      <AdminAccDetailsRow handleDelete={handleDelete} no={index+1} userId={e._id} name={e.email} stationId={e.stationId} roles={e.roles} collectionId={e.collectionId} date={e.createdAt} permits={e.permits}  />
    ))
   }

  </table>
  <div className=' flex items-center justify-end px-5  my-[30px] text-sm gap-3'><button onClick={()=>setNavigation(1)} className='flex items-center justify-center gap-3 px-4 p-2 rounded duration-500 h-[50px]  hover:scale-105 hover:bg-gray-800 bg-black text-white'>Create User<FaUserPlus className=' scale-150'/></button></div>
   <div className='bg-white px-5 h-[30px] items-center  bottom-0 flex justify-between left-0 right-0  w-full '>
    <div>
        <p>Total Account - ( {userData.length} )</p>
    </div>
    {/* <div className='flex gap-3 items-center'>
    <button className=' rounded-md bg-blue-500 p-2'><BsArrowLeft/></button>
    <div>3</div>
    <button className=' rounded-md bg-blue-500 p-2'><BsArrowRight/></button>
    </div> */}
   </div>
      </div>
      {
        isDelete?   <AdminAccDelete handleSureDelete={handleSureDelete} setIsDelete={setIsDelete} />:''
   }
    </>
  )
}

export default AdminAccDashboard