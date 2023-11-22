import React, { useEffect, useState } from 'react'
import AdminCard from '../components/AdminCard'
import GGIMG from '../../assets/images/gas-station-fuel-svgrepo-com.png';
import UseGet_1 from '../../MainConDas/components/hooks/UseGet_1';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const AdminChooseBanned = () => {
  const [collection,setCollection] = useState([]);
  const user = useSelector((state) => state.login);
  const [{ data_get_1, loading_get_1, error_get_1 }, getIt_1] = UseGet_1();
  const navigate = useNavigate();
  

 useEffect(() => {
   getIt_1('/collection', user.token);
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
  
  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
  }, [ user,navigate]);

  useEffect(() => {
    if (data_get_1.result) {
      setCollection(data_get_1.result);
    }
  }, [data_get_1,loading_get_1,error_get_1]);


  return (
    <div className='container mx-auto py-[150px]'>
      <h3 className='container mx-auto text-[5vh] mb-[20px] font-extrabold'>Station Collections</h3>

      <div className='flex justify-start gap-5 items-center'>
      {
        collection.map((e, index) => (
        <AdminCard key={`dd_${index}`} link={`/admin/banned-station?name=${e.collectionName}&id=${e._id}`} width={"w-[32.2%]"} img={GGIMG} title={e.collectionName}/>
        ))
      }
      </div>
    </div>
  )
}
