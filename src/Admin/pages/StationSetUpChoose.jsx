import React, { useEffect, useState } from 'react'
import AdminCard from '../components/AdminCard'
import GGIMG from '../../assets/images/gas-station-fuel-svgrepo-com.png';
import UsePost from '../../MainConDas/components/hooks/UsePost';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const StationSetUpChoose = () => {
const user = useSelector((state) => state.login);
const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();
const navigate = useNavigate();
const [okData, setOkData] = useState([]);


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
  }, [data_g,loading_g,error_g]);

  return (
    <div className='container mx-auto py-[150px]'>
      <h3 className='container mx-auto text-[5vh] mb-[20px] font-extrabold'>Station SetUp</h3>

      <div className='flex justify-start gap-5 items-center'>

        {
    okData.map((e, index) => (
       <AdminCard link={`/admin/station-set-up?name=${e.collectionName}`} width={"w-[32.2%]"} img={GGIMG} title={e.collectionName}/>
    ))
   }
      </div>
    </div>
  )
}
