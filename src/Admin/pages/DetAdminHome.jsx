import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { opacityR } from '../components/anim';
import { gsap } from 'gsap';
import SaleSummary from '../../assets/images/laptop-document-svgrepo-com (1).png'
import ChartBarChart from '../../assets/images/chart-bar-chart-svgrepo-com.png'
import BarChartStand from '../../assets/images/bars-chart-stand-svgrepo-com.png'
import ChartGraphic from '../../assets/images/chart-graphic-svgrepo-com.png'
import GasStation from '../../assets/images/gas-station-svgrepo-com.png'
import ShiftLeader from '../../assets/images/gas-station-svgrepo-com-2.png'
import Category from '../../assets/images/car-repair-car-svgrepo-com.png'
import Calender from '../../assets/images/weekly-calendar-day-svgrepo-com.png';
import Speed from '../../assets/images/speedometer-svgrepo-com.png';
import TankStock from '../../assets/images/stockchart-svgrepo-com.png'
import Monitoring from '../../assets/images/monitoring-seo-and-web-svgrepo-com.png';
import ATG from '../../assets/images/tank-svgrepo-com.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



function DetAdminHome({station="kyawsan"}) {

const cursor = useRef(null);
const cursorLabel = useRef(null);
const [active, setActive] = useState(false);

    
const user = useSelector((state) => state.login);
const navigate = useNavigate();
const dispatch = useDispatch()

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
  }, [ user,navigate,dispatch]);

    const links = [
        {
            title: "Daily Sale Report",
            href: `/${user.accessDb}/dailysalereport`,
            src: ChartBarChart,
            name:station
        },
        {
            title: "Daily Sale Categories Report",
            href: `/${user.accessDb}/categoriesreport`,
            src: Category,
            name:station
        },
        {
            title: "Online Monitoring Sale Report",
            href: `/${user.accessDb}/onlinemonitoringsalereport`,
            src: Monitoring,
            name:station
        }
        ,
        {
            title: "Weekly Sale Report",
            href: `/${user.accessDb}/weekly`,
            src: Calender,
            name:station
        }
        ,
        {
            title: "Sale Summary  Station Report",
            href: `/${user.accessDb}/salessummarbystation`,
            src: GasStation,
            name:station
        }
        ,
        {
            title: "Nozzle Detais Report",
            href: `/${user.accessDb}/statementreport`,
            src: ShiftLeader,
            name:station
        }
        ,
        {
            title: "Fuel Balance Report",
            href: `/${user.accessDb}/fuelbalance`,
            src: Speed,
            name:station
        }
        ,
        {
            title: "Fuel Receive Report",
            href: `/${user.accessDb}/fueldatareport`,
            src: BarChartStand,
            name:station
        }
        ,
      
        {
            title: "Stock Balance Report",
            href: `/${user.accessDb}/tankbalancereport`,
            src: ChartGraphic,
            name:station
        }
        ,
        {
            title: "Fuel Type Balance Report",
            href: `/${user.accessDb}/fueltypebalance`,
            src: TankStock,
            name:station
        }
        ,
        {
            title: "Daily Sale Summary Report",
            href: `/${user.accessDb}/dailysalesummaryreport`,
            src: SaleSummary,
            name:station
        },
        {
          title: "ATG Tank Data",
          href: `/${user.accessDb}/real-tank`,
          src: ATG,
          name:station
        }
    ];
    
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


  return (
      <div className=' bg-slate-200 pt-[150px]'>
          <div className='container mx-auto text-[5vh] mb-[50px] font-extrabold'>Station Reports {station}</div>
          <div className='container gap-3  mx-auto pb-[60px] items-start  flex flex-wrap'>
                {
              links.map((data, index) => (
                  <Link to={data.href} onMouseOver={()=>{setActive(true)}}
          onMouseLeave={() => {setActive(false) }} className={`  group relative hover:drop-shadow-lg bg-[#f9f9f9] duration-300 cursor-pointer p-3 h-[300px]   w-[23.5%] mx-auto ${index === 0 || index === 1 || index === 2?'border-t-[1px]':''}`}  key={`sl_${index}`}>
                      <div className=' h-[70%] py-[30px] bg-slate-200 flex items-center justify-center'>
                      <img className='  h-[100%] duration-1000' src={data.src} alt="d" />
                      </div>
                      <div className='h-[30%] flex items-center'>
                       <h3 className='text-[#333] font-medium text-[2.2vh]'>{data.title}</h3>
                      </div>
                      <div className='bg-blue-500 duration-300 hidden group-hover:flex  justify-center items-center text-[2.2vh] absolute top-0 right-0 left-0 bottom-0'>
                      <motion.h3 onMouseOver={()=>{setActive(true)}}
          onMouseLeave={() => {setActive(false) }}  variants={opacityR} initial="initial"animate={active?"open":"closed"}>     {data.title}</motion.h3>
                      </div>
                  </Link>
              ))
              }
        </div>
    </div>
  )
}

export default DetAdminHome