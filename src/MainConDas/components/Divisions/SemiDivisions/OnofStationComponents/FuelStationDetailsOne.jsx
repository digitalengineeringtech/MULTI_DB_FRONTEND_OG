import React from "react";
import Station from "../../../../../assets/images/maincon_banner.webp";

function FuelStationDetailsOne({
  title,
  total,
  totalPrice,
  ninety2,
  ninety5,
  diesel,
  pdiesel,
}) {
  return (
    <div className="w-[97%] p-3 bg-white h-[400px] drop-shadow-md gap-5 mt-4 flex mx-auto">
      <div className="w-[50%] rounded-lg p-6 flex-col gap-4  bg-[#1c2b36] flex justify-start Alfie hellobg-whit">
        <h3 className="text-[24px] text-[#5EB1FA] text-center font-extrabold">
          {title}
        </h3>
        <div className="grid grid-cols-6 grid-rows-6 gap-7 h-full ">
          <div className="col-span-2 row-span-3 rounded-2xl flex flex-col items-center justify-center bg-[#FBFBFB]">
            <div className=" font-semibold text-gray-500 text-[1.1rem]">
              Premium Diesel
            </div>
            <div className="font-bold text-[1.4rem] my-1 text-[#5EB1FA]">
              {/* {pdiesel ? Number(pdiesel).toFixed(2) : "0.00"} */}
              {pdiesel
                ? pdiesel.toLocaleString(undefined, {
                    maximumFractionDigits: 3,
                  })
                : "0.00"}
            </div>
            <div className="font-semibold text-gray-500 text-[1.1rem]">
              Liter
            </div>
          </div>
          <div className="col-span-2 row-span-3 rounded-2xl flex flex-col items-center justify-center bg-[#5EB1FA]">
            <div className=" font-semibold text-[#eeee] text-[1.1rem]">
              Octane Ron (92)
            </div>
            <div className="font-bold text-[1.4rem] my-1 text-white">
              {/* {ninety2 ? Number(ninety2)?.toFixed(2) : "0.00"} */}
              {ninety2
                ? ninety2.toLocaleString(undefined, {
                    maximumFractionDigits: 3,
                  })
                : "0.00"}
            </div>
            <div className="font-semibold text-[#eeee] text-[1.1rem]">
              Liter
            </div>
          </div>
          <div className="col-span-2 row-span-3 rounded-2xl flex flex-col items-center justify-center bg-[#5EB1FA]">
            <div className=" font-semibold text-[#eeee] text-[1.1rem]">
              Octane Ron (95)
            </div>
            <div className="font-bold text-[1.4rem] my-1 text-white">
              {/* {ninety5 ? Number(ninety5)?.toFixed(2) : "0.00"} */}
              {ninety5
                ? ninety5.toLocaleString(undefined, {
                    maximumFractionDigits: 3,
                  })
                : "0.00"}
            </div>
            <div className="font-semibold text-[#eeee] text-[1.1rem]">
              Liter
            </div>
          </div>
          <div className="col-span-4 row-span-3 rounded-2xl flex flex-col items-center justify-center bg-[#5EB1FA]">
            <div className=" font-semibold text-[#eeee] text-[1.1rem]">
              {total}
            </div>
            <div className="font-bold text-[1.4rem] my-1 text-white">
              {/* {totalPrice ? Number(totalPrice)?.toFixed(2) : "0.00"} */}
              {totalPrice
                ? totalPrice.toLocaleString(undefined, {
                    maximumFractionDigits: 3,
                  })
                : "0.00"}
            </div>
            <div className="font-semibold text-[#eeee] text-[1.1rem]">MMK</div>
          </div>
          <div className="col-span-2 row-span-3 rounded-2xl flex flex-col items-center justify-center bg-[#FBFBFB]">
            <div className=" font-semibold text-gray-500 text-[1.1rem]">
              Diesel
            </div>
            <div className="font-bold text-[1.4rem] my-1 text-[#5EB1FA]">
              {/* {pdiesel ? Number(pdiesel).toFixed(2) : "0.00"} */}
              {pdiesel
                ? pdiesel.toLocaleString(undefined, {
                    maximumFractionDigits: 3,
                  })
                : "0.00"}
            </div>
            <div className="font-semibold text-gray-500 text-[1.1rem]">
              Liter
            </div>
          </div>
        </div>
        {/* <ul className='mt-[30px] text-left text-[white] flex flex-col gap-3 items-start'>
        <p className='text-[20px] text-[#4ade80] text-center font-extrabold'>{total} : <span  className=' text-2xl'>{totalPrice ?totalPrice:"..."} mmk</span></p>
        <p className='text-[20px] text-[#4ade80] text-center font-extrabold'>Octane Ron (92) : <span className='text-2xl'>{(ninety2  ?ninety2:"...")} li</span></p>
        <p className='text-[20px] text-[#4ade80] text-center font-extrabold'>Octane Ron (95) : <span className='text-2xl'>{(ninety5 ? ninety5:"...")} li</span></p>
        <p className='text-[20px] text-[#4ade80] text-center font-extrabold'>Diesel : <span className='text-2xl'>{(diesel ?diesel:"...")} li</span></p>
        <p className='text-[20px] text-[#4ade80] text-center font-extrabold'>Premium Diesel : <span className='text-2xl'>{(pdiesel ?pdiesel:'...')} li</span></p>
      </ul> */}
      </div>
      <img className="w-[50%]" src={Station} alt="station" />
    </div>
  );
}

export default FuelStationDetailsOne;
