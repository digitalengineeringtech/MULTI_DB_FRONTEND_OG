import React from "react";
import { Paginator } from "primereact/paginator";

function PaginatorComponent({
  onPageChange,
  first,
  rows,
  totalLiter,
  totalLength,
  totalPrice,
  language,
}) {
  return (
    <div className="my-[20px]">
      <div className="flex justify-between px-5">
        <div className=" flex gap-6">
          <p className="text-[16px] text-gray-500">
            {"Total Amount"} :{" "}
            <span className="text-[20px] font-semibold">
              {totalPrice?.toLocaleString(undefined, {
                maximumFractionDigits: 3,
              })}{" "}
            </span>{" "}
            MMK
          </p>
          <div className="text-2xl text-gray-400">/</div>
          <p className="text-[16px] text-gray-500">
            {"Total Liters"} :{" "}
            <span className="text-[20px]  font-semibold">
              {totalLiter?.toFixed(3)}
            </span>{" "}
            Liters
          </p>
        </div>
        <p className="text-[16px] text-gray-500">
          {"Total Records"} : ({" "}
          <span className="text-[20px] font-semibold">{totalLength}</span> )
        </p>
      </div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={totalLength}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default PaginatorComponent;
