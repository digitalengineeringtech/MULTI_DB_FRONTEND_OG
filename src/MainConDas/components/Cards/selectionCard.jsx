import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import image from "../../../assets/images/gas-station.png";
import "./style.css";
import { LuMenu } from "react-icons/lu";

function SelectionCard({
  img,
  title,
  devicCount,
  nozzleCount,
  link,
  onClick,
  code = 1,
}) {
  const user = useSelector((state) => state.login);

  return (
    // <div className=" drop-shadow cursor-pointer border-[0.5px] bg-white hover:translate-y-[-10px] duration-500  hover:drop-shadow-lg  bg overflow-hidden h-[150px]  group  mx-auto p-1    w-full     ">
    //   <div className=" w-full h-full relative flex items-center justify-center flex-col">
    //     <p className="text-xs absolute top-1 left-1">
    //       Device Count : {devicCount}
    //     </p>
    //     <p className="text-xs absolute top-1 right-1">
    //       Nozzle Count : {nozzleCount}
    //     </p>

    //     <img src={img} alt="kd" className="w-[80px]" />
    //     {/* {(() => {
    //   switch (code) {
    //     case 1:
    //       return <FirstDesign />;
    //     case 2:
    //       return <SecondDesign/>;
    //     case 3:
    //       return <ThirdDesign/>;
    //     case 4:
    //       return <FourthDesign/>;
    //     default:
    //       return <FirstDesign/>;
    //   }
    // })()} */}
    //     <p className=" z-30 font-extrabold text-[#4b4b4b] uppercase text-xs mb-4">
    //       {title} Station
    //     </p>
    //     <h5 className="left-2 z-30 bottom-2 absolute text-xs  text-gray-400 mx-auto text-center font-extrabold uppercase tracking-widest">
    //       {user.language === "မြန်မာ" ? (
    //         <span>ကြည့်မည်</span>
    //       ) : (
    //         <span>Check Now</span>
    //       )}
    //     </h5>
    //   </div>
    // </div>
    <div className="bg-white flex px-3 justify-center  py-4 flex-col hover:scale-105 duration-200   w-[300px] rounded-2xl ">
      <div className="text-lg px-2 font-semibold text-[#40a3fb] mb-3 flex justify-between">
        {title}
        <div onClick={onClick} className="">
          <LuMenu className="text-3xl cursor-pointer  active:scale-75" />
        </div>
      </div>
      <div className="grid grid-cols-12 w-full  gap-2 h-[80px]">
        <div className="col-span-4 rounded-lg bg-[#e0f6ff]">
          <img src={image} className="w-full p-3" alt="dfdf" />
        </div>
        <div className="col-span-8 flex-col flex rounded-lg bg-[#e0f6ff] ps-4 justify-center">
          <div className="font-mono text-[#40a3fb] font-semibold">.....</div>
          <div className="font-mono text-sm">Device Count : {devicCount}</div>
          <div className="font-mono  text-sm">Nozzle Count : {nozzleCount}</div>
        </div>
      </div>
      <div className="col-span-8 flex-col flex rounded-lg w-full mt-4 p-4 bg-[#e0f6ff] justify-center">
        <div className="font-mono bg-[#e0f6ff] flex justify-between items-center text-[#40a3fb] font-semibold ">
          Manager{" "}
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <div className="col-span-8 flex-col flex rounded-lg w-full mt-3 p-4 bg-[#f3f3f3] justify-center">
        <div className="font-mono bg-[#f3f3f3] flex justify-between items-center text-gray-400 font-semibold ">
          PPRD{" "}
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SelectionCard;
