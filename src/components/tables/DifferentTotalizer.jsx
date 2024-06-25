import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import React, { useEffect, useRef } from "react";

function DifferentTotalizerTable({ okData, statement, language }) {
  const tRef = useRef();
  const handlePrintTwo = useReactToPrint({
    content: () => tRef.current,
  });

  const onDownloadTwo = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Different Totalizer by Station Nozzle Report`,
    sheet: `Different Totalizer by Station Nozzle Report`,
  });
  return (
    <div className="mt-[70px]">
      <table ref={tRef}>
        <tr>
          <th>{language.station_name}</th>
          <th>{language.nozzle_no}</th>
          <th>{language.fuel_type}</th>
          <th>
            {language.total_sale_liter} ({language.liter})
          </th>
          {statement ? (
            <>
              <th>
                {language.totalizer_opening} ({language.liter})
              </th>
              <th>
                {language.totalizer_closing} ({language.liter})
              </th>
              <th>
                {language.totalizer_different} ({language.liter})
              </th>
            </>
          ) : (
            <></>
          )}
          {/* .toLocaleString(undefined, { maximumFractionDigits: 3 }) */}
        </tr>
        {okData.map((e, index) => (
          <tr key={`key_${index}`}>
            <td className="text-left">{e.stationId}</td>
            <td className="text-left">{e.nozzle}</td>
            <td className="text-left">{e.fuelType}</td>
            <td className="text-right">
              {e.totalSaleLiter == 0 ? "-" : e.totalSaleLiter}
            </td>
            {statement ? (
              <>
                <td className="text-right">{e.totalizer_opening}</td>
                <td className="text-right">{e.totalizer_closing}</td>
                <td className="text-right">
                  {/* {isNaN(e.totalizer_opening - e.totalizer_closing)
                    ? "-"
                    : (e.totalizer_opening - e.totalizer_closing).toFixed(3)} */}
                  {e.totalizer_different || "-"}
                </td>
              </>
            ) : (
              <></>
            )}
          </tr>
        ))}
      </table>
      <div className="flex p-3  text-[16px] mt-[30px] mb-[50px] items-center justify-start gap-3">
        <button
          onClick={() => onDownloadTwo.onDownload()}
          className="flex items-center justify-center gap-2 text-md"
        >
          {language.toExcel}
          <RiFileExcel2Fill size={30} />
        </button>
        <button
          onClick={handlePrintTwo}
          className="flex items-center justify-center gap-2 text-md"
        >
          {language.toPrint}
          <AiFillPrinter size={30} />
        </button>
      </div>
    </div>
  );
}

export default DifferentTotalizerTable;
