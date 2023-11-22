import React, { useEffect, useState } from 'react'
import AdminAccDashboard from '../components/AdminAccDashboard'
import AdminStationOpenAccount from '../components/AdminStationOpenAccount';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function AccountDetails() {
  const [navigation, setNavigation] = useState(0);
   const user = useSelector((state) => state.login);
  const navigate = useNavigate();
useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
  }, [ user,navigate]);

  return (

    <div className='w-[100%] min-h-[100svh] bg-slate-100 flex flex-col items-center justify-center'>
    <h3 className='font-bold uppercase mt-[100px]  my-3 text-start w-[95%]'>Account Dashboard</h3>
           {(() => {
        switch (navigation) {
          case 0:
                return <AdminAccDashboard setNavigation={setNavigation} />;
          case 1:
            return <AdminStationOpenAccount setNavigation={setNavigation} />;
          default:
            return null;
        }
      })()}
    </div>
  )
}

export default AccountDetails