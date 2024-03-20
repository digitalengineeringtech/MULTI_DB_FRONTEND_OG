import React from "react";
import Drop from "../../../../../assets/images/ezgif.com-webp-to-png.png";

function NozzlesOne({ no, totalizer, fuelType, number }) {
  return (
    <div className="w-[23%] duration-500 bg-white h-[110px] rounded-lg border-[#1e3a8a]   p-4  border-[1px] hover:drop-shadow-md hover:scale-[1.015] flex  flex-col items-center justify-center gap-3 relative">
      <div className="flex absolute top-2 left-2  z-20 gap-5 justify-between right-2  items-center">
        <div className="">
          <div className="flex items-center justify-between">
            <p className="text-xs">{fuelType}</p>
          </div>
          <p className="text-xs  mb-2 mt-1">{totalizer}_closing:</p>
        </div>
        <div className=" text-xl">{no}</div>
      </div>
      <div>
        <p className=" text-xl mt-10">
          {number.toLocaleString(undefined, { maximumFractionDigits: 3 })}
        </p>
      </div>
    </div>
  );
}

export default NozzlesOne;
