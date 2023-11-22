import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GGIMG from '../../assets/images/gas-station-fuel-svgrepo-com.png';
import AdminCard from '../components/AdminCard';
import { useSelector } from 'react-redux';
import UsePost from '../../MainConDas/components/hooks/UsePost';

function AccountAd() {
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
      <h3 className='container mx-auto text-[5vh] mb-[20px] font-extrabold'>Station Accounts</h3>
      <div className='flex items-center justify-start'>
         {
    okData.map((e, index) => (
        <AdminCard link={`/admin/account/details?collectionId=${e._id}&name=${e.collectionName}`}  width={"w-[32.2%]"} img={GGIMG} title={e.collectionName}/>
    ))
   }
      {/* <AdminCard link={'/admin/account/details?collectionId=64e857fabb44c05999793143&name=kyaw_san'}  width={"w-[32.2%]"} img={GGIMG} title={"Kyaw San"}/>
      <AdminCard link={'/admin/account/details?collectionId=64e9660e981a612a570cac13&name=common'} width={"w-[32.2%]"} img={GGIMG} title={"Common"}/>
      <AdminCard width={"w-[32.2%]"} img={GGIMG} title={"Coming Soon!"}/> */}
      </div>
    </div>
  )
}

export default AccountAd