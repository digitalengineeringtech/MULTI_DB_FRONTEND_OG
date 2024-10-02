import React from 'react'

function TodayVehicleDetails({no,name,liter=0,price=0}) {
  return (
    <div className="border-t-[0.5px] group px-3 hover:bg-blue-300 duration-300 text-md border-b-[0.5px]  flex justify-between items-center border-[#e3e3e3] h-[40px]">
      <p className="w-[10%]">{no}.</p>
      <p className="w-[50%]">{name}</p>
      <p className="h-[40px] text-[14px] w-[20%] border-l border-dotted border-[#e2e2e2] flex items-center p-2 justify-end">
        {liter.toFixed(3)}
      </p>
      <p className="h-[40px] text-[14px] w-[20%] border-l border-dotted border-[#e2e2e2] flex items-center  p-2 justify-end">
        {price?.toLocaleString(undefined, { maximumFractionDigits: 3 })}
      </p>
    </div>
  );
}

export default TodayVehicleDetails