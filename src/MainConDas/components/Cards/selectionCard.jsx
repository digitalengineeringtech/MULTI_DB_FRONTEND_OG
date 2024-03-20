import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import image from "../../../assets/images/gas-station.png";
import "./style.css";
import { LuMenu } from "react-icons/lu";
import instance from "../../../axios";
import UseGet_11 from "../hooks/UseGet_B_1";

function SelectionCard({
  img,
  title,
  devicCount,
  nozzleCount,
  link,
  obj,
  onClick,
  loc,
  code = 1,
}) {
  const user = useSelector((state) => state.login);

  function truncateIfNeeded(word) {
    if (word.length > 15) {
      return word.substring(0, 15) + "...";
    } else {
      return word.padEnd(15, " ");
    }
  }
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get("name");
  const [{ data_g_11, loading_g_11, error_g_11 }, fetchIt_G_11] = UseGet_11();
  const [mChecked, setMChecked] = useState(obj.permission?.includes("manager"));
  const [pChecked, setPChecked] = useState(obj.permission?.includes("manager"));
  console.log(mChecked, "this is mcheck");

  const handleAdd = (e, keye) => {
    // patchIt_1(``, { _id: e._id, keye: keye }, user.token)
    instance
      .patch(
        `/station-detail/permission?accessDb=${name}`,
        { _id: e._id, keye: keye },
        {
          headers: {
            Authorization: "Bearer " + user.token,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.data.con) {
          fetchIt_G_11(`/station-detail/get/all`, name, user.token);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
          <div className="font-mono text-[#40a3fb] font-semibold">
            {truncateIfNeeded(loc)}
          </div>
          <div className="font-mono text-sm">Device Count : {devicCount}</div>
          <div className="font-mono  text-sm">Nozzle Count : {nozzleCount}</div>
        </div>
      </div>
      <div
        className={`col-span-8 flex-col flex rounded-lg w-full mt-4 p-4 ${
          mChecked ? "bg-[#e0f6ff]" : "bg-[#f3f3f3]"
        } justify-center`}
      >
        <div
          className={`${
            mChecked
              ? "text-[#40a3fb]  bg-[#e0f6ff] "
              : "text-gray-400 bg-[#f3f3f3] "
          } font-mono  flex justify-between items-center  font-semibold `}
        >
          Manager
          <label class="switch">
            <input
              checked={mChecked}
              onChange={(event) => setMChecked(event.currentTarget.checked)}
              type="checkbox"
            />
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <div
        className={`col-span-8 flex-col flex rounded-lg w-full mt-3 p-4 ${
          pChecked ? "bg-[#e0f6ff]" : "bg-[#f3f3f3]"
        } justify-center`}
      >
        <div
          className={`font-mono ${
            pChecked
              ? "text-[#40a3fb]  bg-[#e0f6ff] "
              : "text-gray-400 bg-[#f3f3f3] "
          } flex justify-between items-center font-semibold `}
        >
          PPRD{" "}
          <label class="switch">
            <input
              checked={pChecked}
              onChange={(event) => setPChecked(event.currentTarget.checked)}
              type="checkbox"
            />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SelectionCard;
