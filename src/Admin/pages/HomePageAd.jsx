import React, { useEffect, useRef, useState } from 'react'
import StationsAdmin from './StationsAdmin'
import KyawSan from '../../assets/images/kyawsanStation.png';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { scaleAnimation } from '../components/anim';
import { Link } from 'react-router-dom';
import UsePost from '../../MainConDas/components/hooks/UsePost';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../../redux/slices/LoginSlice';



function HomePageAd() {
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const [active, setActive] = useState(false);
  const [okData, setOkData] = useState([]);
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [{data_g,loading_g,error_g},fetchIt] = UsePost();

  useEffect(() => { 
   const moveCursor = (x, y) => {
      gsap.to(cursor.current, { left: x, top: y, duration: 0.5, ease: 'power1.out' });
     gsap.to(cursorLabel.current, { left: x, top: y, duration: 0.45, ease: 'power1.out' });

   };
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;


      moveCursor(clientX, clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => { 
    fetchIt(`collection?name=${user.name}`, user.token);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    console.log(data_g, loading_g, error_g);
    if (data_g?.result) {
      setOkData(data_g?.result);
    }
  }, [data_g, loading_g, error_g]);

const handleClick = (e) => {
    

    let saver = {
      name:user.name,
      token:user.token,
      stationId:null,
      accessDb: e.collectionName
    };


    dispatch(LoginUser(saver));
  }
  

  return (
    <>
     <div className=' bg-gray-100'>
      <StationsAdmin />
      <div className=' container text-2xl mt-[30px] mx-auto'>Stations</div>
        <div className='py-5 mb-[40px] relative container   gap-2 flex flex-wrap justify-start  mx-auto'>
        
      
          
         {
    okData.map((e, index) => (
          <div onClick={()=>handleClick(e)} onMouseOver={()=>{setActive(true)}}
            onMouseLeave={() => { setActive(false) }} className='w-[32%] animate-pop-up p-2  relative bg-white hover:drop-shadow-md duration-300  cursor-pointer h-[370px]'>
              <Link to="/admin/station/home">
          <div className=' bg-gray-100 flex justify-center items-center'>
               <img className='w-[60%]' src={e.stationImg} alt='kd' />
        </div>
          <div className='mt-5'>
          <h3 className=' text-lg font-extrabold'>{e.collectionName}</h3>
              </div>
              </Link>
          </div>
    ))
   }
        {/* <div onMouseOver={()=>{setActive(true)}}
          onMouseLeave={() => {setActive(false) }}  className='w-[32%] animate-pop-up p-2 mx-auto  bg-white hover:drop-shadow-md duration-300 cursor-pointer  h-[370px]'>
          <div className=' bg-gray-100 flex justify-center items-center'>
               <img className='w-[60%]' src={KyawSan} alt='kd' />
        </div>
          <div className='mt-5'>
          <h3 className=' text-lg font-extrabold'>SOON!</h3>
          </div>
        </div> */}
        {/* <div onMouseOver={()=>{setActive(true)}}
          onMouseLeave={() => {setActive(false) }}  className='w-[32%] animate-pop-up relative p-2 mx-auto hover:drop-shadow-md duration-300 cursor-pointer  bg-white  h-[370px]'>
          <div className=' bg-gray-100 flex justify-center items-center'>
               <img className='w-[60%]' src={KyawSan} alt='kd' />
        </div>
          <div className='mt-5'>
          <h3 className=' text-lg font-extrabold'>SOON!</h3>
          </div>
        </div> */}
      
      </div>
      </div>
        <motion.div variants={scaleAnimation} initial="initial" animate={active?"open":"closed"} ref={cursor} className='cursor absolute top-0'></motion.div>
          <motion.div ref={cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "open" : "closed"} className='cursor_label w-[80px] h-[80px] top-0 bg-blue-600 absolute pointer-events-none rounded-full flex justify-center items-center text-white '>View</motion.div>
    </>
  )
}

export default HomePageAd