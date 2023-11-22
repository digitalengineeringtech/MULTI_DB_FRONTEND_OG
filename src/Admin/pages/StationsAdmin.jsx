import React, { useEffect } from 'react'
import Banner from '../../assets/images/miro-hero-banner.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function StationsAdmin() {

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
  }, [ user,navigate,dispatch]);

  return (
    <div className='h-[97svh] bg-white pt-[90px] drop-shadow-md gap-[20px]  '>
      <div className=' container mx-auto overflow-hidden flex justify-center items-center'>
         <div className='w-[40%]  flex flex-col items-start justify-center h-[100%]'>
              <h3 className='admin-banner-h animate-pop-up font-extrabold text-[9vh] '>Welcome to <span className='font-bold'>DET</span> Ad<span className=' text-[7vh] uppercase font-extrabold text-purple-400 mr-1'><i>M</i></span>in</h3>
              <p className=' mt-[25px] text-[3vh] animate-pop-up'>The DET admin will create interactive stations and solve fuel station problems!</p>
          </div>
          <div className='w-[60%] flex  justify-center items-center relative h-[100%]'>
              <img className=' animate-pop-up' alt="kd" src={Banner} />
              {/* <img alt="kd" src={Img} className='absolute top-[10%] left-[4%] w-[250px]' /> */}
          </div>
         </div>
    </div>
  )
}

export default StationsAdmin