/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { Link, Navigate, redirect, useLocation, useNavigate } from 'react-router-dom'; 
import { LogoutUser, UpdateLanguage } from '../redux/slices/LoginSlice';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../assets/images/IMG_6843.png'
import { MyanmarHeader } from '../Language/Myanmar/myanmarHeader';
import { EnglishHeader } from '../Language/English/englishHeader';
import { GiReturnArrow } from 'react-icons/gi';


function Header({show=true}) {
  const user = useSelector((state) => state.login);
  const location = useLocation();

  const headerRef = useRef();
  const legit = user.login;
  const dispatch = useDispatch();
  const [menuTrue, setMenuTrue] = useState(false);
  const [language, setLanguage] = useState("English");
  const [nativeLanguage, setNativeLanguage] = useState(EnglishHeader);
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(UpdateLanguage({language}));
  }, [language]);


  useEffect(() => {
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setNativeLanguage(MyanmarHeader);
      setLanguage(user.language);
    } else if(user.language === "English" || user.language === "အင်္ဂလိပ်"){
      setNativeLanguage(EnglishHeader);
      setLanguage(user.language);
    }
  }, [user]);


  const headerPaths = [
    '/kyawsan/main-con/home',
    '/usermanual',
    '/user/choose'
    // Add other paths where you want to show the header
  ];

  const shouldShowHeader = headerPaths.includes(location.pathname);


  
  // function logit() {
  //   if (window.pageYOffset >= 20) {
  //     headerRef.current.style.backgroundColor = 'white';
  //     headerRef.current.style.height = '60px';

  //     titleRef.current.style.display = "none"
  //      headerRef.current.style.color = 'black';
    
  //   } else {
  //     headerRef.current.style.backgroundColor = 'white';
  //     headerRef.current.style.color = 'black';
  //     titleRef.current.style.display = "block";
  //     headerRef.current.style.height = '100px';

  //   }
 
  // }

  // useEffect(() => {
  //   function watchScroll() {
  //     window.addEventListener("scroll", logit);
  //   }
  //   watchScroll();
  //   return () => {
  //     window.removeEventListener("scroll", logit);
  //   };
  // });

  const LinkTheme= "cursor-pointer select-none hover:bg-white px-2 w-full h-[40px] flex items-center  rounded-md hover:text-black";
  const reportBg = menuTrue?"flex select-none  bg-blue-900 text-white px-3 py-2 rounded-lg items-center relative justify-center gap-2 cursor-pointer " :"flex px-3 py-2 rounded-lg items-center relative justify-center gap-2 cursor-pointer "


  return (
    <header id='Header' ref={headerRef} className='fixed  bg-white  top-0 left-0 right-0  z-50   flex items-center justify-center  bg-transparent drop-shadow-md'>
          <div className='w-[90%] flex  flex-col justify-between items-center mx-auto'>
              <div className='logo w-full flex items-center justify-between'>
          <div className='text-lg font-bold pt-3 mb-2'>
            <Link className='flex justify-center items-center gap-2' to={!show?"/user/choose":`/${user.accessDb}/home`}><img className=' w-[50px] h-[50px]' src={Logo} alt='logo' /> 
              <div>
                <p>Digital Engineering Tech Ltd.</p>
            </div>
          </Link></div>
          {
         show &&  legit ? <ul className='flex  w-[55%] items-center justify-start text-sm gap-10'>
              {
                user.name === "kyaw san"?  <Link to={`/${user.accessDb}/main-con/dash`} className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black flex items-center gap-2  px-3 py-2 rounded-lg'><GiReturnArrow/><li>Dash</li></Link>:''
              }
            
              <Link to={user.name === "kyaw san"?"/kyawsan/main-con/home":`/${user.accessDb}/home`} className='bg-blue-900 text-white px-3 py-2 rounded-lg'> <li>{nativeLanguage.home}</li></Link>
              {/* <Link  to="/kyawsan/home" className='bg-white text-black px-3 py-2 rounded-lg'> <li>Dashboard</li></Link> */}

              
              <li onClick={() => setMenuTrue(!menuTrue)} className="px-3 py-2"><p className={reportBg}>{nativeLanguage.reports} <MdOutlineArrowDropDown /></p>
                {
                  menuTrue? <ul className='bg-blue-900 z-50 mt-1  drop-shadow-none !duration-150  group-hover:flex text-white absolute p-3 text-sm rounded-md flex-col items-start gap-2'>
                    <Link className={LinkTheme} to={`/${user.accessDb}/dailysalereport`}><li>{nativeLanguage.daily_sale_report}</li></Link>
                    <Link className={LinkTheme} to={`/${user.accessDb}/categoriesreport`}><li>{nativeLanguage.daily_sale_categories_report}</li></Link>
                    <Link className={LinkTheme} to={`/${user.accessDb}/onlinemonitoringsalereport`}><li>{nativeLanguage.online_monitoring_sale_report}</li></Link>
                    <Link className={LinkTheme} to={`/${user.accessDb}/weekly`}><li>{nativeLanguage.weekly_sale_report}</li></Link>
                    <Link className={LinkTheme} to={`/${user.accessDb}/salessummarbystation`}><li>{nativeLanguage.sale_summary_by_station}</li></Link>
                    <Link className={LinkTheme} to={`/${user.accessDb}/statementreport`}><li>{nativeLanguage.statement_report}</li></Link>
                    <Link className={LinkTheme} to={`/${user.accessDb}/real-tank`}><li>{nativeLanguage.tank_data}</li></Link>
                    <Link className={LinkTheme} to={`/${user.accessDb}/fueldatareport`} ><li>{nativeLanguage.fuel_receive_report}</li></Link>
                    <Link className={LinkTheme} to={`/${user.accessDb}/fuelbalance`}><li>{nativeLanguage.fuel_balance_report}</li></Link>
                    <Link className={LinkTheme} to={`/${user.accessDb}/tankbalancereport`}><li>{nativeLanguage.stock_balance_report}</li></Link>
                    <Link className={LinkTheme} to={`/${user.accessDb}/fueltypebalance`}><li>{nativeLanguage.fuel_type_balance}</li></Link>
                  
                  
                  {/* <Link className={LinkTheme} to="/kyawsan/searchreports"><li>Sale Summary Report</li></Link> */}
                   
                    <Link className={LinkTheme} to={`/${user.accessDb}/dailysalesummaryreport`}><li>{nativeLanguage.daily_sale_summary_report}</li></Link>
                  
                    {/* <Link className={LinkTheme} to="/kyawsan/adjustment"><li>Adjustment Report</li></Link> */}
                              {/* {
                                who === "admin"?<li className=' cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black'><Link to="/salesummeryreport">Sale Summery</Link></li>
:''
                              } */}
                  
                              
                      </ul>:""
              }

                      
              </li>
              {/* {
                who === "admin"?<li className=' cursor-pointer duration-300 hover:bg-white px-3 h-[40px] flex items-center  rounded-md w-[150px] hover:text-black'><Link to="/salesummeryreport">Sale Summery</Link></li>
:''
                     } */}
                {
                user.name === "manager" ? <Link to={`${user.accessDb}/dashboard`} className=' text-black px-3 py-2 rounded-lg'> <li>{nativeLanguage.dashboard}</li></Link>
:''
                }
                   
              <li className='p-2  group '><p className='flex items-center relative justify-center gap-2 cursor-pointer  w-[100px]'>{language}<MdOutlineArrowDropDown /></p>
                <ul className='bg-blue-900 mt-2 z-40 translate-y-6 group-hover:translate-y-0  drop-shadow-none hidden group-hover:flex text-white absolute p-6 text-sm rounded-md flex-col items-start gap-2'>
                  <li onClick={(e) => setLanguage(e.target.innerText)} className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '>{nativeLanguage.english}</li>
                  <li onClick={(e)=>setLanguage(e.target.innerText)}  className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '>{nativeLanguage.myanmar}</li>
                  {/* <li onClick={(e)=>setLanguage(e.target.innerText)} className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '>中国人</li> */}
                  </ul>
              </li>
              <li className='p-2  group '><p className='flex items-center relative justify-center gap-2 cursor-pointer '>{nativeLanguage.setting}<MdOutlineArrowDropDown /></p>
                <ul className='bg-blue-900 mt-2 z-40 translate-y-6 group-hover:translate-y-0  drop-shadow-none hidden group-hover:flex text-white absolute p-6 text-sm rounded-md flex-col items-start gap-2'>
                  {
                    user.name === "pprd" || user.name === "user"? "":   <Link to="/usermanual" className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '> <li>{nativeLanguage.user_manual}</li></Link>
               }
                  {
                    user.name === "pprd" || user.name === "user" ?  <Link to="/user/choose" className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '> <li>{nativeLanguage.user_choose}</li></Link>:''
                 }
                  <li className=' cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black' onClick={() => { 
                     navigate('/')
                    dispatch(LogoutUser());
                   
                    }}>{nativeLanguage.log_out}</li>
                    </ul>
              </li>
                 
              </ul>:''
          }
          {
            !show && <ul className='flex  w-[55%] items-center justify-start text-sm gap-10'>
               <li className='p-2  group '><p className='flex items-center relative justify-center gap-2 cursor-pointer  w-[100px]'>{language}<MdOutlineArrowDropDown /></p>
                <ul className='bg-blue-900 mt-2 z-40 translate-y-6 group-hover:translate-y-0  drop-shadow-none hidden group-hover:flex text-white absolute p-6 text-sm rounded-md flex-col items-start gap-2'>
                  <li onClick={(e) => setLanguage(e.target.innerText)} className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '>{nativeLanguage.english}</li>
                  <li onClick={(e)=>setLanguage(e.target.innerText)}  className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '>{nativeLanguage.myanmar}</li>
                  {/* <li onClick={(e)=>setLanguage(e.target.innerText)} className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '>中国人</li> */}
                  </ul>
              </li>

              <Link to="/usermanual" className='   text-black  cursor-pointer duration-300  px-3  h-[40px] flex items-center  rounded-md hover:text-blue-900 '> <li>{nativeLanguage.user_manual}</li></Link>
              
              <li className='p-2  group'><p className='flex items-center relative justify-center gap-2 cursor-pointer '>{nativeLanguage.setting}<MdOutlineArrowDropDown /></p>
                <ul className='bg-blue-900 mt-2 z-40 translate-y-6 group-hover:translate-y-0  drop-shadow-none hidden group-hover:flex text-white absolute p-6 text-sm rounded-md flex-col items-start gap-2'>
                  <Link to="/user/choose" className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '> <li>{nativeLanguage.user_choose}</li></Link>
                  <li className=' cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black' onClick={() => { dispatch(LogoutUser()) }}>{nativeLanguage.log_out}</li>
                </ul>
              </li> 

            </ul>
            }
              </div>
              {/* <div ref={titleRef} className=' duration-700 text-sm font-extralight w-full'>
              <h3 className='flex gap-3 items-center mb-7'> <RiOilFill/>Fuel Station Central Management System </h3>   
                  </div> */}
             
          </div>     
   </header>
  )
}

export default Header

