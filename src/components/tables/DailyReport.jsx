import React, { useRef } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";

function DailyReport({ okData, language }) {
  const tableRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: `Daily Sale Summary  Report`,
    sheet: `Daily Sale Summary  Report`,
  });

  return (
    <div class=" px-[20px] mt-[50px]">
      <table ref={tableRef} class="text-md report-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th colSpan={12}>{language.fuel_type}</th>
          </tr>
          <tr>
            <th></th>
            <th colSpan={2}>001-Octane Ron(92)</th>
            <th colSpan={2}>002-Octane Ron(95)</th>
            <th colSpan={2}>004-Diesel</th>
            <th colSpan={2}>005-Premium Diesel</th>
          </tr>
          <tr>
            <th>{language.date}</th>
            <th>{language.liter}</th>
            <th>{language.price}</th>
            <th>{language.liter}</th>
            <th>{language.price}</th>
            <th>{language.liter}</th>
            <th>{language.price}</th>
            <th>{language.liter}</th>
            <th>{language.price}</th>
          </tr>
        </thead>
        <tbody>
          {okData?.map((object, index) => {
            return (
              <tr key={index}>
                {/* <th>{object.stationDetailId.}</th>
                 */}
                <td>{object.dailyReportDate}</td>
                <td>
                  {object.fuelData["001-Octane Ron(92)"]
                    ? object.fuelData[
                        "001-Octane Ron(92)"
                      ][0].totalSaleLiter.toFixed(3)
                    : "-"}
                </td>
                <td>
                  {object.fuelData["001-Octane Ron(92)"]
                    ? object.fuelData[
                        "001-Octane Ron(92)"
                      ][0].totalPrice?.toLocaleString(undefined, {
                        maximumFractionDigits: 3,
                      })
                    : "-"}
                </td>
                <td>
                  {object.fuelData["002-Octane Ron(95)"]
                    ? object.fuelData[
                        "002-Octane Ron(95)"
                      ][0].totalSaleLiter.toFixed(3)
                    : "-"}
                </td>
                <td>
                  {object.fuelData["002-Octane Ron(95)"]
                    ? object.fuelData[
                        "002-Octane Ron(95)"
                      ][0].totalPrice?.toLocaleString(undefined, {
                        maximumFractionDigits: 3,
                      })
                    : "-"}
                </td>
                <td>
                  {object.fuelData["004-Diesel"]
                    ? object.fuelData["004-Diesel"][0].totalSaleLiter.toFixed(3)
                    : "-"}
                </td>
                <td>
                  {object.fuelData["004-Diesel"]
                    ? object.fuelData[
                        "004-Diesel"
                      ][0].totalPrice?.toLocaleString(undefined, {
                        maximumFractionDigits: 3,
                      })
                    : "-"}
                </td>
                <td>
                  {object.fuelData["005-Premium Diesel"]
                    ? object.fuelData[
                        "005-Premium Diesel"
                      ][0].totalSaleLiter.toFixed(3)
                    : "-"}
                </td>
                <td>
                  {object.fuelData["005-Premium Diesel"]
                    ? object.fuelData[
                        "005-Premium Diesel"
                      ][0].totalPrice?.toLocaleString(undefined, {
                        maximumFractionDigits: 3,
                      })
                    : "-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex p-3 mt-[30px] mb-[50px] items-center justify-start gap-3">
        <button
          onClick={() => onDownload()}
          className="flex items-center justify-center gap-2 text-md"
        >
          {language.toExcel}
          <RiFileExcel2Fill size={30} />
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 text-md"
        >
          {language.toPrint}
          <AiFillPrinter size={30} />
        </button>
      </div>
    </div>
  );
}

export default DailyReport;
