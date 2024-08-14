/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  Link,
  Navigate,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  LoginUser,
  LogoutUser,
  UpdateLanguage,
} from "../redux/slices/LoginSlice";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../assets/images/IMG_6843.png";
import { MyanmarHeader } from "../Language/Myanmar/myanmarHeader";
import { EnglishHeader } from "../Language/English/englishHeader";
import { GiReturnArrow } from "react-icons/gi";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { Dropdown } from "primereact/dropdown";
import UsePost from "../MainConDas/components/hooks/UsePost";
import { myanmarUserChoose } from "../Language/Myanmar/myanmarUserChoose";
import { englishUserChoose } from "../Language/English/englishUserChoose";

function Header({ show = true }) {
  const location = useLocation();
  const pathName = location.pathname;
  const [com, setCom] = useState();
  const user = useSelector((state) => state.login);
  const [selectedCity, setSelectedCity] = useState(com);
  const list = {
    open: { y: "65px", opacity: 1 },
    close: { y: 0, opacity: 0 },
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [okData, setOkData] = useState([]);
  // const [cities, setCities] = useState();

  const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();

  // const cities = okData;

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    // if (user.language === "Myanmar" || user.language === "မြန်မာ") {
    //   setLanguage(myanmarUserChoose);
    // } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
    //   setLanguage(englishUserChoose);
    // }

    fetchIt(`collection?name=${user.name}`, user.token);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate, dispatch]);

  useEffect(() => {
    if (data_g?.result) {
      setOkData(data_g?.result);
    }
  }, [data_g, loading_g, error_g]);

  const handleClick = () => {
    let saver = {
      name: user.name,
      token: user.token,
      stationId: null,
      accessDb: okData[0]?.collectionName,
    };

    // console.log(collectionName);

    dispatch(LoginUser(saver));
  };

  useEffect(() => {
    if (data_g?.result) {
      const obj = data_g?.result?.filter(
        (e) => e.collectionName == pathName.split("/")[1]
      );
      setCom(obj[0]);
    }
  }, []);

  const headerRef = useRef();
  const legit = user.login;
  const [menuTrue, setMenuTrue] = useState(false);
  const [language, setLanguage] = useState("English");
  const [state, setState] = useState(false);
  const [nativeLanguage, setNativeLanguage] = useState(EnglishHeader);

  const links = [
    {
      name: "Sale Detail Report",
      path: `/${user.accessDb}/saledetail`,
    },
    {
      name: "Fuel In Report",
      path: `/${user.accessDb}/fueldatareport`,
    },
    {
      name: "Daily Sale Report",
      path: `/${user.accessDb}/dailysalereport`,
    },
    {
      name: "Pump Report",
      path: `/${user.accessDb}/pumpreport`,
    },
    {
      name: "Tank Report",
      path: `/${user.accessDb}/real-tank`,
    },
    {
      name: "Daily Sale Categories Report",
      path: `/${user.accessDb}/categoriesreport`,
    },
    {
      name: "Weekly Report",
      path: `/${user.accessDb}/weekly`,
    },
  ];

  useEffect(() => {
    dispatch(UpdateLanguage({ language }));
  }, [language]);

  useEffect(() => {
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setNativeLanguage(MyanmarHeader);
      setLanguage(user.language);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setNativeLanguage(EnglishHeader);
      setLanguage(user.language);
    }
  }, [user]);

  const headerPaths = [
    "/kyawsan/main-con/home",
    "/usermanual",
    "/user/choose",
    // Add other paths where you want to show the header
  ];

  const shouldShowHeader = headerPaths.includes(location.pathname);
  console.log(okData, "this is path");

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

  const LinkTheme =
    "cursor-pointer select-none hover:bg-white px-2 w-full h-[40px] flex items-center  rounded-md hover:text-black";
  const reportBg = menuTrue
    ? "flex select-none  bg-blue-900 text-white px-3 py-2 rounded-lg items-center relative justify-center gap-2 cursor-pointer "
    : "flex px-3 py-2 rounded-lg items-center relative justify-center gap-2 cursor-pointer ";

  return (
    <div className="w-full justify-center flex">
      <header
        id="Header"
        ref={headerRef}
        className="fixed  bg-white  top-0 left-0 right-0  z-50   flex items-center justify-center  bg-transparent drop-shadow-md"
        onMouseEnter={() => {
          setState(true);
        }}
        onMouseLeave={() => {
          setState(false);
        }}
      >
        <div className="w-[90%] flex z-30  flex-col justify-between items-center mx-auto">
          <div className="logo w-full flex items-center justify-between">
            <div className="text-lg font-bold pt-3 mb-2">
              <Link
                className="flex justify-center items-center gap-2"
                to={!show ? "/user/choose" : `/${user.accessDb}/home`}
              >
                <img className=" w-[50px] h-[50px]" src={Logo} alt="logo" />
                <div>
                  <p>Digital Engineering Tech Ltd.</p>
                </div>
              </Link>
            </div>
            {show && legit ? (
              <ul className="flex  w-[55%] items-center justify-start text-sm gap-10">
                {user.name === "kyaw san" ? (
                  <Link
                    to={`/${user.accessDb}/main-con/dash`}
                    className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black flex items-center gap-2  px-3 py-2 rounded-lg"
                  >
                    <GiReturnArrow />
                    <li>Dash</li>
                  </Link>
                ) : (
                  ""
                )}

                <Link
                  to={
                    user.name === "kyaw san"
                      ? "/kyawsan/main-con/home"
                      : `/${user.accessDb}/home`
                  }
                  className="bg-blue-900 text-white z-50 px-3 py-2 relative rounded-lg"
                >
                  <li>{nativeLanguage.home}</li>
                </Link>
                {/* <Link  to="/kyawsan/home" className='bg-white text-black px-3 py-2 rounded-lg'> <li>Dashboard</li></Link> */}
                {user.name === "pprd" || user.name === "user" ? (
                  <Link
                    to="/user/choose"
                    className="  cursor-pointer hover:text-gray-100 hover:bg-blue-900 text-gray-700 px-3 py-2 rounded-lg "
                  >
                    {" "}
                    <li>{nativeLanguage.user_choose}</li>
                  </Link>
                ) : (
                  ""
                )}
                {/* <div className="">
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.value);
                      console.log("hello");
                    }}
                    options={okData}
                    optionLabel="collectionName"
                    placeholder="Select a City"
                    className="w-full md:w-14rem"
                    checkmark={true}
                    highlightOnSelect={false}
                  />
                </div> */}

                {/* {
                who === "admin"?<li className=' cursor-pointer duration-300 hover:bg-white px-3 h-[40px] flex items-center  rounded-md w-[150px] hover:text-black'><Link to="/salesummeryreport">Sale Summery</Link></li>
:''
                     } */}
                {user.name === "manager" ? (
                  <Link
                    to={`${user.accessDb}/dashboard`}
                    className=" text-black px-3 py-2 rounded-lg"
                  >
                    {" "}
                    <li>{nativeLanguage.dashboard}</li>
                  </Link>
                ) : (
                  ""
                )}

                <li className="p-2  group ">
                  <p className="flex items-center relative justify-center gap-2 cursor-pointer  w-[100px]">
                    {language}
                    <MdOutlineArrowDropDown />
                  </p>
                  <ul className="bg-blue-900 mt-2 z-40 translate-y-6 group-hover:translate-y-0  drop-shadow-none hidden group-hover:flex text-white absolute p-6 text-sm rounded-md flex-col items-start gap-2">
                    <li
                      onClick={(e) => setLanguage(e.target.innerText)}
                      className="  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black "
                    >
                      {nativeLanguage.english}
                    </li>
                    <li
                      onClick={(e) => setLanguage(e.target.innerText)}
                      className="  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black "
                    >
                      {nativeLanguage.myanmar}
                    </li>
                    {/* <li onClick={(e)=>setLanguage(e.target.innerText)} className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '>中国人</li> */}
                  </ul>
                </li>
                {/* <li className="p-2  group ">
                <p className="flex items-center relative justify-center gap-2 cursor-pointer ">
                  {nativeLanguage.setting}
                  <MdOutlineArrowDropDown />
                </p>
                <ul className="bg-blue-900 mt-2 z-40 translate-y-6 group-hover:translate-y-0  drop-shadow-none hidden group-hover:flex text-white absolute p-6 text-sm rounded-md flex-col items-start gap-2">
                  {user.name === "pprd" || user.name === "user" ? (
                    ""
                  ) : (
                    <Link
                      to="/usermanual"
                      className="  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black "
                    >
                      {" "}
                      <li>{nativeLanguage.user_manual}</li>
                    </Link>
                  )}
                  {user.name === "pprd" || user.name === "user" ? (
                    <Link
                      to="/user/choose"
                      className="  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black "
                    >
                      {" "}
                      <li>{nativeLanguage.user_choose}</li>
                    </Link>
                  ) : (
                    ""
                  )}
                  <li
                    className=" cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black"
                    onClick={() => {
                      navigate("/");
                      dispatch(LogoutUser());
                    }}
                  >
                    {nativeLanguage.log_out}
                  </li>
                </ul>
              </li> */}
                <li
                  className=" cursor-pointer duration-300 hover:bg-red-400  px-3  h-[40px] flex items-center  rounded-md hover:text-white"
                  onClick={() => {
                    navigate("/");
                    dispatch(LogoutUser());
                  }}
                >
                  {nativeLanguage.log_out}
                </li>
              </ul>
            ) : (
              ""
            )}
            {!show && (
              <ul className="flex  w-[55%] items-center justify-start text-sm gap-10">
                <li className="p-2  group ">
                  <p className="flex items-center relative justify-center gap-2 cursor-pointer  w-[100px]">
                    {language}
                    <MdOutlineArrowDropDown />
                  </p>
                  <ul className="bg-blue-900 mt-2 z-40 translate-y-6 group-hover:translate-y-0  drop-shadow-none hidden group-hover:flex text-white absolute p-6 text-sm rounded-md flex-col items-start gap-2">
                    <li
                      onClick={(e) => setLanguage(e.target.innerText)}
                      className="  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black "
                    >
                      {nativeLanguage.english}
                    </li>
                    <li
                      onClick={(e) => setLanguage(e.target.innerText)}
                      className="  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black "
                    >
                      {nativeLanguage.myanmar}
                    </li>
                    {/* <li onClick={(e)=>setLanguage(e.target.innerText)} className='  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black '>中国人</li> */}
                  </ul>
                </li>

                <Link
                  to="/usermanual"
                  className="   text-black hover:bg-blue-900 hover:text-white  cursor-pointer duration-300  px-3  h-[40px] flex items-center  rounded-md  "
                >
                  {" "}
                  <li>{nativeLanguage.user_manual}</li>
                </Link>
                <li
                  className=" cursor-pointer hover:bg-red-400  duration-300 px-3 hover:text-white h-[40px] flex items-center  rounded-md "
                  onClick={() => {
                    navigate("/");
                    dispatch(LogoutUser());
                  }}
                >
                  {nativeLanguage.log_out}
                </li>
                {/* <li className="p-2  group">
                <p className="flex items-center relative justify-center gap-2 cursor-pointer ">
                  {nativeLanguage.setting}
                  <MdOutlineArrowDropDown />
                </p>
                <ul className="bg-blue-900 mt-2 z-40 translate-y-6 group-hover:translate-y-0  drop-shadow-none hidden group-hover:flex text-white absolute p-6 text-sm rounded-md flex-col items-start gap-2">
                  <Link
                    to="/user/choose"
                    className="  cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black "
                  >
                    {" "}
                    <li>{nativeLanguage.user_choose}</li>
                  </Link>
                  <li
                    className=" cursor-pointer duration-300 hover:bg-white px-3 w-full h-[40px] flex items-center  rounded-md hover:text-black"
                    onClick={() => {
                      dispatch(LogoutUser());
                    }}
                  >
                    {nativeLanguage.log_out}
                  </li>
                </ul>
              </li> */}
              </ul>
            )}
          </div>
          {/* <div ref={titleRef} className=' duration-700 text-sm font-extralight w-full'>
              <h3 className='flex gap-3 items-center mb-7'> <RiOilFill/>Fuel Station Central Management System </h3>   
                  </div> */}
        </div>
      </header>
      {pathName != "/" &&
        pathName != "/user/choose" &&
        pathName != `/${user.accessDb}/home` && (
          <motion.div
            className="mx-auto z-0 mt-[-40px] flex justify-start h-[100px]  w-[100%]  rounded-lg  absolute"
            onMouseEnter={() => {
              setState(true);
            }}
            onMouseLeave={() => {
              setState(false);
            }}
            animate={state ? "open" : "close"}
            variants={list}
          >
            <div className="   mb-2 ms-3 rounded-lg flex gap-2 mt-auto">
              {links.map((e) => (
                <Link
                  to={e.path}
                  className={clsx(
                    `p-2  px-3  hover:bg-[#E0F6FF] hover:text-[#007BFF] duration-100  tracking-wide text-sm font-semibold  hover:border-[#007BFF] rounded-lg`,
                    {
                      "bg-[#E0F6FF] text-[#007BFF] border border-[#007BFF]":
                        pathName == e.path,
                      "bg-white border text-gray-500 border-gray-400":
                        pathName != e.path,
                    }
                  )}
                >
                  {e.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
    </div>
  );
}

export default Header;
