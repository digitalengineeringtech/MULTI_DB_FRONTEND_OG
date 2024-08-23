import React, { useEffect, useRef, useState } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";

function RealTimeTankTable({ okData, pprd, time, language }) {
  const tRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => tRef.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Fuel Balance Report`,
    sheet: `Fuel Balance Report`,
  });

  return (
    <div className="mb-[150px]">
      <table id="category_table" ref={tRef} className="mt-[40px]">
        <thead>
          <tr>
            <th rowSpan={2}>No</th>
            <th width="50" rowSpan={2}>
              {language?.pprd_license_no}
            </th>
            <th width="50" rowSpan={2}>
              {language?.tank_no}
            </th>
            <th width="140" rowSpan={2}>
              {language?.tank_max_capacity}
            </th>
            <th rowSpan={2} className="w-[100px]">
              {language?.fuel_type}
            </th>
            <th rowSpan={2} className="w-[150px]">
              {language?.stock_date_time}
            </th>
            <th rowSpan={2}>{language?.tank_level} (mm)</th>
            <th colSpan={2}>{language?.tank_level}</th>
            <th colSpan={2} className="w-[150px] ">
              {language?.tank_vacant}
              <br /> {language?.available_gallon}
            </th>
            <th rowSpan={2} className="w-[150px]">
              {language?.tank_tempature} (Celsius)
            </th>
            <th rowSpan={2} className="w-[150px]">
              {language?.tank_level_status}
            </th>
          </tr>
          <tr>
            <th>{language?.liter}</th>
            <th>{language?.gallon}</th>
            <th>{language?.liter}</th>
            <th>{language?.gallon}</th>
          </tr>
        </thead>
        {okData.map((dataEntry, dataIndex) => (
          <tr key={`dataIndex_${dataIndex}`}>
            <td>{dataIndex + 1}</td>
            <td>{pprd}</td>
            <td>{dataEntry?.id}</td>
            <td>{dataEntry?.volume}</td>
            {/* <td>{dataEntry?.oilType}</td> */}
            <td>
              {dataEntry?.oilType == "92 Octane"
                ? "92 RON"
                : dataEntry?.oilType == "95 Octane"
                ? "95 RON"
                : dataEntry?.oilType == "Diesel"
                ? "HSD"
                : dataEntry?.oilType == "Super Diesel"
                ? "PHSD"
                : ""}
            </td>
            <td>{time}</td>
            <td>{dataEntry?.level}</td>
            <td>{dataEntry?.volume}</td>
            <td>{(Number(dataEntry?.volume) / 4.16).toFixed(3)}</td>
            <td>{(14500 - Number(dataEntry?.volume)).toFixed(3)}</td>
            <td>
              {(14500 / 4.16 - Number(dataEntry?.volume) / 4.16).toFixed(3)}
            </td>
            <td>{dataEntry?.temperature}</td>
            <td>sales</td>
          </tr>
        ))}
      </table>
      <div className="flex text-[16px] p-3 mt-[30px] mb-[50px] items-center justify-start gap-3">
        <button
          onClick={() => onDownload()}
          className="flex items-center justify-center gap-2 text-md"
        >
          {language.toExcel} <RiFileExcel2Fill size={30} />
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 text-md"
        >
          {language.toPrint} <AiFillPrinter size={30} />
        </button>
      </div>
    </div>
  );
}

export default RealTimeTankTable;
