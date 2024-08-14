import React from "react";
import { Paginator } from "primereact/paginator";

function PaginatorComponent({
  onPageChange,
  first,
  rows,
  totalLength,
  totalPrice,
  language,
}) {
  return (
    <div className="my-[20px]">
      <div className="flex justify-between px-5">
        <p className="text-[16px] text-gray-500">
          {"Total Amount"} :{" "}
          <span className="text-[20px]">
            {totalPrice.toLocaleString(undefined, {
              maximumFractionDigits: 3,
            })}{" "}
            MMK
          </span>
        </p>
        <p className="text-[16px] text-gray-500">
          {"Total Records"} :{" "}
          <span className="text-[20px]">({totalLength})</span>
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
