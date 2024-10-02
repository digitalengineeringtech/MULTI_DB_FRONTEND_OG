import React from 'react'

function TodayCategoryDetail({index,category,liter=0,count,total=0}) {
  return (
    <div className="border-t-[0.5px] group px-3 hover:bg-blue-300 duration-300 text-xs border-b-[0.5px]  flex justify-between items-center border-[#e3e3e3] h-[40px]">
      {" "}
      <p>{index}</p>
      <p className=" px-3 w-[25%]">{category}</p>
      <p className="w-[25%]">{Number(liter).toFixed(3)} - L</p>
      <p className="h-[40px] w-[25%]  text-[14px]  border-l border-dotted border-[#e2e2e2] flex items-center justify-end px-2">
        {count} - count
      </p>
      <p className="h-[40px] w-[25%] text-[14px] border-l border-dotted border-[#e2e2e2] flex items-center justify-end ">
        {total?.toLocaleString()}-$
      </p>
    </div>
  );
}

export default TodayCategoryDetail