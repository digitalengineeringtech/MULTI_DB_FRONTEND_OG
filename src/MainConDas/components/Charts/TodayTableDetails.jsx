import React from 'react'

function TodayTableDetails({name,liter,price}) {
  return (
    <div className="border-t-[0.5px]  group px-3 hover:bg-blue-300 duration-300 text-md border-b-[0.5px]  flex justify-between items-center border-[#e3e3e3] h-[40px]">
      <p className=" w-[40%]"> {name}</p>
      <p className="w-[30%] text-right p-2">{liter}</p>
      <p className="h-[40px] text-right p-2 text-[14px] w-[30%] border-l border-dotted border-[#e2e2e2] flex items-center justify-end">
        {price?.toLocaleString(undefined, { maximumFractionDigits: 3 })}
      </p>
    </div>
  );
}

export default TodayTableDetails