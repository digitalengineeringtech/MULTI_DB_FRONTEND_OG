'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { background, opacity } from './anim'
import AdminNav from './AdminNav';
import Logo from '../../assets/images/splas.png';
import { useDispatch } from 'react-redux';
import { LogoutUser } from '../../redux/slices/LoginSlice';
import { Link, useLocation } from 'react-router-dom';



function AdminHeader() {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => { 
    if (location.pathname === "/admin/station/home") {
      setIsHome(true);
    }
  }, [location.pathname]);
  
  return (
    <div className='header p-[20px] fixed w-[100%] bg-white drop-shadow-xl z-50'>
          <div className='flex items-center justify-between uppercase'>
        <Link to="/admin/home" className='  w-[33.33%] flex  items-center gap-2'><img className='w-[35px]' src={Logo} alt='2' />Digital Engineering Tech</Link> 
          
          <div onClick={()=>{setIsActive(!isActive)}} className='el cursor-pointer  w-[33.33%]   flex items-center'>
              <div className='label text-center mx-auto relative flex'>
                  <motion.p variants={opacity} animate={isActive?"closed":"open"} className='absolute '>Menu</motion.p>
                  <motion.p variants={opacity} animate={!isActive?"closed":"open"} className='m-0  opacity-0'>Close</motion.p>
              </div>
          </div>

              <div className='shop  w-[33.33%] text-center  right-0 flex   items-center'>
                  <div  onClick={()=>{dispatch(LogoutUser())}} className='label text-center mx-auto cursor-pointer relative flex'>
                         <motion.button variants={opacity} animate={isActive?"closed":"open"}  className='m-0 absolute cursor-pointer ' >Logout</motion.button>
              <motion.p variants={opacity} animate={!isActive?"closed":"open"} className='m-0  opacity-0'>Logout</motion.p>
                   </div>
          </div>
          </div>
        
          <AnimatePresence mode='wait'>
        {isActive && <AdminNav setIsActive={setIsActive} />}
      </AnimatePresence>
        <motion.div variants={background} initial="initial" animate={isActive?"open":"closed"} className=' h-[100%] w-[100%] z-[30] mt-[20px] left-0 right-0  absolute bg-gray-800 opacity-[0.5]'></motion.div>
        
    </div>
  )
}

export default AdminHeader