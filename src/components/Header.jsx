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
import { TbCircleArrowUpFilled } from "react-icons/tb";

import { Button } from "primereact/button";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { clsx } from "clsx";
import { Dropdown } from "primereact/dropdown";
import UsePost from "../MainConDas/components/hooks/UsePost";
import { myanmarUserChoose } from "../Language/Myanmar/myanmarUserChoose";
import { englishUserChoose } from "../Language/English/englishUserChoose";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { PiWarningCircleFill } from "react-icons/pi";
import { SplitButton } from "primereact/splitbutton";

function Header({ show = true }) {
  const location = useLocation();
  const pathName = location.pathname;
  const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();

  const user = useSelector((state) => state.login);
  const [selectedCity, setSelectedCity] = useState({
    _id: "64e857fabb44c05999793143",
    collectionName: "kyaw_san",
    stationCollection: [
      {
        stationId: "64ce8b0c26c645b891eed1e8",
        stationName: "Kyaw San (ks-031)",
        _id: "6546668adc9a83656c41c7de",
      },
      {
        stationId: "6464e9f1c45b82216ab1db6b",
        stationName: "Kyaw San (ks-027)",
        _id: "6546668ddc9a83656c41c7f4",
      },
      {
        stationId: "64d31aca804931118129d6d8",
        stationName: "Kyaw San (ks-026)",
        _id: "6546668edc9a83656c41c815",
      },
      {
        stationId: "64ec05313a15c3c2bd8c4be2",
        stationName: "Kyaw San (ks-016)",
        _id: "6546668fdc9a83656c41c830",
      },
      {
        stationId: "64def677c9748703bf6f940a",
        stationName: "Kyaw San (ks-029)",
        _id: "6546669ddc9a83656c41c8c0",
      },
      {
        stationId: "651ce24454133c9067dbb463",
        stationName: "Kyaw San (ks-005)",
        _id: "6546669fdc9a83656c41c8e3",
      },
      {
        stationId: "6531edda1b0281853d1c05ef",
        stationName: "Kyaw San (ks-006)",
        _id: "654666a0dc9a83656c41c906",
      },
      {
        stationId: "653fd32d47e9596da7368530",
        stationName: "Kyaw San (ks-012)",
        _id: "654666addc9a83656c41c92a",
      },
      {
        stationId: "6542521b47e9596da73a0faa",
        stationName: "Kyaw San (ks-004)",
        _id: "655b0c4cda5723906664acbe",
      },
      {
        stationId: "65f4b0f64e0a38b089be6813",
        stationName: "Kyaw San (ks-019)",
        _id: "65f6ad684e0a38b089c4dc60",
      },
      {
        stationId: "660770e5fd1f2b7e358444e7",
        stationName: "Kyaw San (ks-020)",
        _id: "660770f7fd1f2b7e35844517",
      },
      {
        stationId: "660e5fa0b9195c15c0f426f7",
        stationName: "Kyaw San  (ks-008)",
        _id: "660e5fc9b9195c15c0f42726",
      },
      {
        stationId: "663aff8ed4d304cf16231356",
        stationName: "Kyaw San (ks-013)",
        _id: "663aff9fd4d304cf16231424",
      },
      {
        stationId: "665a8a5bf7a809de4637f46d",
        stationName: "Kyaw San (ks-014)",
        _id: "665f20f8a5abd66d4c8b1b11",
      },
      {
        stationId: "66607c24a5abd66d4c8edbeb",
        stationName: "Kyaw San (ks-015)",
        _id: "66607c3aa5abd66d4c8edc17",
      },
      {
        stationId: "666b1b88a5abd66d4ccaa8b7",
        stationName: "Kyaw San (ks-034)",
        _id: "666b1b97a5abd66d4ccaa8ec",
      },
      {
        stationId: "6670fe5aed1fc27258af3787",
        stationName: "Kyaw San (ks-009)",
        _id: "6670fe6eed1fc27258af382e",
      },
      {
        stationId: "6671162f32d8020aedfd2867",
        stationName: "Kyaw San(ks-030)",
        _id: "667118c98fbaffd2ed1e5b2f",
      },
      {
        stationId: "66a0ca8b53c73af784172ffc",
        stationName: "Kyaw San (ks-028)",
        _id: "66b1e2a33418a6f8a1fe04e7",
      },
    ],
    permission: ["user", "admin", "pprd"],
    stationImg:
      "https://res.cloudinary.com/dibskb7pp/image/upload/v1699504458/qjan3ucvq8objd7wpjyt.png",
  });

  const list = {
    open: { y: "82px", opacity: 1 },
    close: { y: 0, opacity: 0 },
  };

  const chooseClick = (name) => {
    let saver = {
      name: user.name,
      token: user.token,
      stationId: null,
      accessDb: name,
    };

    // console.log(okData[0]?.collectionName, "name");

    dispatch(LoginUser(saver));
    navigate(`/${name}/${loca}`);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [okData, setOkData] = useState();
  // const [cities, setCities] = useState();

  const loca = pathName.split("/").reverse()[0];

  // const cities = okData;

  // console.log("====================================");
  // console.log(selectedCity);
  // console.log("====================================");

  useEffect(() => {
    console.log("..gg...");
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

  const headerRef = useRef();
  const legit = user.login;
  const [menuTrue, setMenuTrue] = useState(false);
  const [language, setLanguage] = useState("English");
  const lan = ["English", "မြန်မာ"];
  const [state, setState] = useState(false);
  const [nativeLanguage, setNativeLanguage] = useState(EnglishHeader);

  const links = [
    {
      label: "Sale Detail Report",
      path: `/${user.accessDb}/saledetail`,
      command: () => navigate(`/${user.accessDb}/saledetail`),
    },
    {
      label: "Fuel In Report",
      path: `/${user.accessDb}/fueldatareport`,
      command: () => navigate(`/${user.accessDb}/fueldatareport`),
    },
    // {
    //   name: "Fuel In Report",
    //   path: `/${user.accessDb}/fueldatareport`,
    // },
    {
      label: "Daily Sale Report",
      path: `/${user.accessDb}/dailysalereport`,
      command: () => navigate(`/${user.accessDb}/dailysalereport`),
    },
    {
      label: "Pump Report",
      path: `/${user.accessDb}/pumpreport`,
      command: () => navigate(`/${user.accessDb}/pumpreport`),
    },
    {
      label: "Tank Report",
      path: `/${user.accessDb}/real-tank`,
      command: () => navigate(`/${user.accessDb}/real-tank`),
    },
    {
      label: "Daily Sale Categories Report",
      path: `/${user.accessDb}/categoriesreport`,
      command: () => navigate(`/${user.accessDb}/categoriesreport`),
    },
    {
      label: "Weekly Report",
      path: `/${user.accessDb}/weekly`,
      command: () => navigate(`/${user.accessDb}/weekly`),
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

  const toast = useRef(null);

  // const accept = () => {
  //   navigate("/");
  //   dispatch(LogoutUser());
  //   toast.current.show({
  //     severity: "success",
  //     summary: "Success",
  //     detail: "Message Content",
  //     life: 1500,
  //   });
  // };

  return (
    <div className="w-full justify-center flex">
      <header
        id="Header"
        ref={headerRef}
        className="fixed  bg-white   top-0 left-0 right-0  z-50   flex items-center justify-center  bg-transparent shadow-[#007BFF20] shadow-lg"
      >
        {/* {pathName != "/" &&
          pathName != "/user/choose" &&
          pathName != `/${user.accessDb}/home` && (
            <motion.div
              animate={state ? "close" : "open"}
              variants={list}
              className="absolute ps-2 pe-4 gap-2 rounded-3xl bottom-[65px]  h-[40px] shadow-[#007BFF10] shadow-xl flex items-center justify-center bg-white border border-[#007BFF50]"
            >
              <TbCircleArrowUpFilled className="text-3xl text-[#007BFF70]" />
              <div className="text-sm cursor-pointer text-primary/70">
                Hover here{" "}
              </div>
            </motion.div>
          )} */}
        <div className="w-[90%] flex z-30  flex-col justify-between items-center mx-auto">
          <div className="logo w-full flex items-center justify-between">
            <div className="text-lg font-bold bg-re pt-3 mb-2">
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
            {/* <div
              onMouseEnter={() => {
                setState(true);
              }}
              onMouseLeave={() => {
                setState(false);
              }}
              className="md:w-[40%] lg:w-[50%]  h-[87px]"
            ></div> */}
            {show && legit ? (
              <ul className="flex   items-center justify-start text-sm gap-4">
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

                {/* <Link
                  to={
                    user.name === "kyaw san"
                      ? "/kyawsan/main-con/home"
                      : `/${user.accessDb}/home`
                  }
                  className=" text-white z-50  "
                >
                  <li>
                    <Button label={nativeLanguage.home} />
                  </li>
                </Link> */}
                <Toast ref={toast}></Toast>
                <SplitButton
                  label="Home"
                  // icon="pi pi-plus"
                  onClick={() =>
                    navigate(
                      user.name === "kyaw san"
                        ? "/kyawsan/main-con/home"
                        : `/${user.accessDb}/home`
                    )
                  }
                  model={links}
                />
                {/* <Link  to="/kyawsan/home" className='bg-white text-black px-3 py-2 rounded-lg'> <li>Dashboard</li></Link> */}
                {user.name === "pprd" || user.name === "user" ? (
                  // <Link
                  //   to="/user/choose"
                  //   className="  cursor-pointer hover:text-gray-100 hover:bg-blue-900 text-gray-700 px-3 py-2 rounded-lg "
                  // >
                  //   {" "}
                  //   <li>{nativeLanguage.user_choose}</li>
                  // </Link>
                  <div className="">
                    <Dropdown
                      value={selectedCity}
                      onChange={(e) => {
                        setSelectedCity(e.value);
                        // console.log(e.value?.collectionName, "gg");
                        chooseClick(e.value?.collectionName);
                        setState(false);
                      }}
                      options={okData}
                      optionLabel="collectionName"
                      placeholder="Choose Station"
                      className="w-full md:w-14rem"
                      // checkmark={true}
                      // highlightOnSelect={false}
                    />
                  </div>
                ) : (
                  ""
                )}

                {/* {
                who === "admin"?<li className=' cursor-pointer duration-300 hover:bg-white px-3 h-[40px] flex items-center  rounded-md w-[150px] hover:text-black'><Link to="/salesummeryreport">Sale Summery</Link></li>
:''
                     } */}
                {/* htoo */}
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

                {/* <li className="p-2  group ">
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
                  </ul>
                </li> */}
                <div className="">
                  <Dropdown
                    value={language}
                    onChange={(e) => {
                      setLanguage(e.value);
                      // console.log(e.value?.collectionName, "gg");
                      // chooseClick(e.value?.collectionName);
                      setState(false);
                    }}
                    options={lan}
                    // optionLabel="collectionName"
                    placeholder="User Choose"
                    className="w-full md:w-14rem"
                    // checkmark={true}
                    // highlightOnSelect={false}
                  />
                </div>

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
                  className=" cursor-pointer duration-300  h-[40px] flex items-center  rounded-md hover:text-white"
                  onClick={() => {
                    navigate("/");
                    dispatch(LogoutUser());
                  }}
                >
                  <Button
                    severity="danger"
                    outlined
                    label={nativeLanguage.log_out}
                  />
                </li>
              </ul>
            ) : (
              ""
            )}
            {/* khant */}
            {!show && (
              <ul className="flex   items-center justify-start text-sm gap-4">
                {/* <li className="p-2  group ">
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
                  </ul>
                </li> */}
                <div className="">
                  <Dropdown
                    value={language}
                    onChange={(e) => {
                      setLanguage(e.value);
                      // console.log(e.value?.collectionName, "gg");
                      // chooseClick(e.value?.collectionName);
                      setState(false);
                    }}
                    options={lan}
                    // optionLabel="collectionName"
                    placeholder="User Choose"
                    className="w-full md:w-14rem"
                    // checkmark={true}
                    // highlightOnSelect={false}
                  />
                </div>

                <Link
                  to="/usermanual"
                  className="   text-black  hover:text-white  cursor-pointer duration-300  h-[40px] flex items-center  rounded-md  "
                >
                  {" "}
                  <li>
                    <Button label={nativeLanguage.user_manual} />
                  </li>
                </Link>
                <li
                  className=" cursor-pointer   duration-300 hover:text-white h-[40px] flex items-center  rounded-md "
                  onClick={() => {
                    navigate("/");
                    dispatch(LogoutUser());
                  }}
                >
                  <Button
                    severity="danger"
                    outlined
                    label={nativeLanguage.log_out}
                  />
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
      {/* {pathName != "/" &&
        pathName != "/user/choose" &&
        pathName != `/${user.accessDb}/home` && (
          <motion.div
            className="mx-auto z-0 mt-[-40px] flex justify-center h-[110px]  w-[100%] pb-2 rounded-lg  fixed"
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
        )} */}
    </div>
  );
}

export default Header;
