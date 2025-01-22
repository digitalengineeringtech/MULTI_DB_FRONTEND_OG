import React from "react";
import AdminInput from "../adminTheme/Admininput";
import { FaGasPump } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsGrid1X2Fill } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { GiPistolGun } from "react-icons/gi";
import { GiFuelTank } from "react-icons/gi";
import { Calendar } from "primereact/calendar";

function RightSetupAd({
  isSetUp,
  setStationSetUp,
  stationSetup,
  addStation,
  stationError,
}) {
  // console.log(stationSetup, "This is Station Setup");

  return (
    <form className="mt-[20px]  h-[100%] flex flex-col">
      <fieldset className="h-[80%] flex gap-4 flex-col justify-center ">
        <h1 className="text-4xl font-extrabold text-white mb-[20px]">
          Station Setup
        </h1>
        {stationError ? (
          <p className=" text-red-400 border-[1px] p-2">{stationError}</p>
        ) : (
          ""
        )}
        <AdminInput
          isSetUp={isSetUp}
          icon={<FaGasPump className=" scale-125" />}
          placeholder={"Station Name"}
          value={stationSetup.name}
          onChange={(e) =>
            setStationSetUp((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <div className="flex gap-3">
          <AdminInput
            isSetUp={isSetUp}
            width={50}
            icon={<AiOutlineFieldNumber className=" scale-150" />}
            placeholder={"Liense No"}
            value={stationSetup.lienseNo}
            onChange={(e) =>
              setStationSetUp((prev) => ({ ...prev, lienseNo: e.target.value }))
            }
          />
          <AdminInput
            isSetUp={isSetUp}
            width={50}
            icon={<BsGrid1X2Fill />}
            placeholder={"Devices"}
            value={stationSetup.deviceCount}
            onChange={(e) =>
              setStationSetUp((prev) => ({
                ...prev,
                deviceCount: Number(e.target.value),
              }))
            }
          />
        </div>
        <AdminInput
          isSetUp={isSetUp}
          width={100}
          icon={<BiLocationPlus className=" scale-125" />}
          placeholder={"Location"}
          value={stationSetup.location}
          onChange={(e) =>
            setStationSetUp((prev) => ({ ...prev, location: e.target.value }))
          }
        />
        <div className="flex gap-3">
          <AdminInput
            isSetUp={isSetUp}
            width={50}
            icon={<GiPistolGun className=" scale-150" />}
            placeholder={"Nozzles"}
            value={stationSetup.nozzleCount}
            onChange={(e) =>
              setStationSetUp((prev) => ({
                ...prev,
                nozzleCount: Number(e.target.value),
              }))
            }
          />
          <AdminInput
            isSetUp={isSetUp}
            width={50}
            icon={<GiFuelTank className=" scale-150" />}
            placeholder={"Tanks"}
            value={stationSetup.tankCount}
            onChange={(e) =>
              setStationSetUp((prev) => ({
                ...prev,
                tankCount: Number(e.target.value),
              }))
            }
          />
        </div>
        <div className="flex gap-3">
          <Calendar
            className={`${isSetUp ? "animate-pop-up" : ""}`}
            placeholder="Start Date"
            value={stationSetup.startDate}
            onChange={(e) =>
              setStationSetUp((prev) => ({
                ...prev,
                startDate: e.target.value,
              }))
            }
            showIcon
          />
          <Calendar
            className={`${isSetUp ? "animate-pop-up" : ""}`}
            placeholder="Expire Date"
            value={stationSetup.expireDate}
            onChange={(e) =>
              setStationSetUp((prev) => ({
                ...prev,
                expireDate: e.target.value,
              }))
            }
            showIcon
          />
        </div>
        <button
          onClick={addStation}
          className="rounded bg-blue-700 hover:bg-blue-600 duration-150 text-white text-center   mt-[20px] p-3 w-[200px]"
        >
          Set Up
        </button>
      </fieldset>
    </form>
  );
}

export default RightSetupAd;
