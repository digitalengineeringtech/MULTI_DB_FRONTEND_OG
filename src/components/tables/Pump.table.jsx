import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import React, { useEffect, useRef } from "react";

function PumpTable({ okData, statement, sDate, eDate, language }) {
  const tRef = useRef();
  const handlePrintTwo = useReactToPrint({
    content: () => tRef.current,
  });
  // const dateObj = new Date(object?.createAt);
  // const day = dateObj?.getUTCDate();
  // const month = months[dateObj.getUTCMonth()];
  // const year = dateObj?.getUTCFullYear();
  // const time = dateObj?.toISOString().slice(11, 19);

  // const formattedDate = `${day}-${month}-${year} ${time}`;
  const state = okData[0]?.station[0].location.split(",");

  let isoStartDate = sDate.toLocaleDateString("fr-CA");
  let isoEndDate = eDate.toLocaleDateString("fr-CA");

  const onDownloadTwo = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Different Totalizer by Station Nozzle Report`,
    sheet: `Different Totalizer by Station Nozzle Report`,
  });

  const n2 = okData?.filter((ea) => ea.fuelType == "001-Octane Ron(92)");
  const n5 = okData?.filter((ea) => ea.fuelType == "002-Octane Ron(95)");
  const hsd = okData?.filter((ea) => ea.fuelType == "004-Diesel");
  const phsd = okData?.filter((ea) => ea.fuelType == "005-Premium Diesel");

  console.log(n2, n5, hsd, phsd);

  const n2Total = okData
    ?.filter((ea) => ea.fuelType == "001-Octane Ron(92)")
    .map((e) => e.totalSaleLiter)
    .reduce((pv, cv) => pv + cv, 0);
  const n5Total = okData
    ?.filter((ea) => ea.fuelType == "002-Octane Ron(95)")
    .map((e) => e.totalSaleLiter)
    .reduce((pv, cv) => pv + cv, 0);
  const hsdTotal = okData
    ?.filter((ea) => ea.fuelType == "004-Diesel")
    .map((e) => e.totalSaleLiter)
    .reduce((pv, cv) => pv + cv, 0);
  const phsdTotal = okData
    ?.filter((ea) => ea.fuelType == "005-Premium Diesel")
    .map((e) => e.totalSaleLiter)
    .reduce((pv, cv) => pv + cv, 0);

  return (
    <div className="mt-[70px]">
      <table ref={tRef}>
        <tr>
          <th>{language.station_name}</th>
          <th>{language.pprd_no}</th>
          <th>{language.State}</th>
          <th>{language.nozzle_no}</th>
          <th>{language.fuel_type}</th>
          <th>{language.sale_date_time}</th>
          <th>{language.price}</th>
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
          <th>
            {language.total_sale_liter} ({language.liter})
          </th>
          <th>{language.sale_gallon}</th>
          <th>{language.pump_test}</th>
          <th>{language.other}</th>
          {/* .toLocaleString(undefined, { maximumFractionDigits: 3 }) */}
        </tr>
        {n2.length > 0 ? (
          n2.map((e, index) => (
            <tr key={`key_${index}`}>
              <td className="text-left">{e.stationId}</td>
              <td className="text-left">{e.station[0].lienseNo}</td>
              {/* <td className="text-left">{e.station[0].location.split(',')}</td> */}
              <td className=" text-center">{state[state.length - 1]}</td>
              <td className="text-left">{e.nozzle}</td>
              <td className="text-left">{e.fuelType}</td>
              {/* <td className=" text-left">{state[0]}</td> */}
              <td className=" text-left">
                From <span> {isoStartDate}</span> to <span>{isoEndDate}</span>
              </td>
              <td className="text-right">{e.price == 0 ? "-" : e.price}</td>
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
              <td className="text-right">
                {e.totalSaleLiter == 0 ? "-" : e.totalSaleLiter}
              </td>
              <td className="text-right">
                {e.totalSaleLiter == 0
                  ? "-"
                  : (e.totalSaleLiter / 4.16).toFixed(3)}
              </td>
              <td className="text-center">
                {(e.pumptest == 0 ? "-" : e.pumptest) || "-"}
              </td>
              <td className="text-center">-</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-left"></td>
            <td className="text-left"></td>
            {/* <td className="text-left">{e.station[0].location.split(',')}</td> */}
            <td className=" text-center"></td>
            <td className="text-left"></td>
            <td className="text-left"></td>
            {/* <td className=" text-left">{state[0]}</td> */}
            <td className=" text-left"></td>
            <td className="text-right"></td>

            <td className="text-right"></td>
            <td className="text-right"></td>
            <td className="text-right">
              {/* {isNaN(e.totalizer_opening - e.totalizer_closing)
                    ? "-"
                    : (e.totalizer_opening - e.totalizer_closing).toFixed(3)} */}
            </td>

            <td className="text-right"></td>
            <td className="text-right"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        )}
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total Octane Ron 92
          </td>
          <td className="text-right font-semibold">{n2Total.toFixed(3)}</td>
          <td className="text-right font-semibold">
            {(n2Total / 4.16).toFixed(3)}
          </td>
          <td>-</td>
          <td>-</td>
        </tr>
        {n5.length > 0 ? (
          n5.map((e, index) => (
            <tr key={`key_${index}`}>
              <td className="text-left">{e.stationId}</td>
              <td className="text-left">{e.station[0].lienseNo}</td>
              {/* <td className="text-left">{e.station[0].location.split(',')}</td> */}
              <td className=" text-center">{state[state.length - 1]}</td>
              <td className="text-left">{e.nozzle}</td>
              <td className="text-left">{e.fuelType}</td>
              {/* <td className=" text-left">{state[0]}</td> */}
              <td className=" text-left">
                From <span> {isoStartDate}</span> to <span>{isoEndDate}</span>
              </td>
              <td className="text-right">{e.price == 0 ? "-" : e.price}</td>
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
              <td className="text-right">
                {e.totalSaleLiter == 0 ? "-" : e.totalSaleLiter}
              </td>
              <td className="text-right">
                {e.totalSaleLiter == 0
                  ? "-"
                  : (e.totalSaleLiter / 4.16).toFixed(3)}
              </td>
              <td className="text-center">
                {(e.pumptest == 0 ? "-" : e.pumptest) || "-"}
              </td>
              <td className="text-center">-</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-left"></td>
            <td className="text-left"></td>
            {/* <td className="text-left">{e.station[0].location.split(',')}</td> */}
            <td className=" text-center"></td>
            <td className="text-left"></td>
            <td className="text-left"></td>
            {/* <td className=" text-left">{state[0]}</td> */}
            <td className=" text-left"></td>
            <td className="text-right"></td>

            <td className="text-right"></td>
            <td className="text-right"></td>
            <td className="text-right">
              {/* {isNaN(e.totalizer_opening - e.totalizer_closing)
                    ? "-"
                    : (e.totalizer_opening - e.totalizer_closing).toFixed(3)} */}
            </td>

            <td className="text-right"></td>
            <td className="text-right"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        )}
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total Octane Ron 95
          </td>
          <td className="text-right font-semibold">{n5Total}</td>
          <td className="text-right font-semibold">
            {(n5Total / 4.16).toFixed(3)}
          </td>
          <td>-</td>
          <td>-</td>
        </tr>
        {hsd.length > 0 ? (
          hsd.map((e, index) => (
            <tr key={`key_${index}`}>
              <td className="text-left">{e.stationId}</td>
              <td className="text-left">{e.station[0].lienseNo}</td>
              {/* <td className="text-left">{e.station[0].location.split(',')}</td> */}
              <td className=" text-center">{state[state.length - 1]}</td>
              <td className="text-left">{e.nozzle}</td>
              <td className="text-left">{e.fuelType}</td>
              {/* <td className=" text-left">{state[0]}</td> */}
              <td className=" text-left">
                From <span> {isoStartDate}</span> to <span>{isoEndDate}</span>
              </td>
              <td className="text-right">{e.price == 0 ? "-" : e.price}</td>
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
              <td className="text-right">
                {e.totalSaleLiter == 0 ? "-" : e.totalSaleLiter}
              </td>
              <td className="text-right">
                {e.totalSaleLiter == 0
                  ? "-"
                  : (e.totalSaleLiter / 4.16).toFixed(3)}
              </td>
              <td className="text-center">
                {(e.pumptest == 0 ? "-" : e.pumptest) || "-"}
              </td>
              <td className="text-center">-</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-left"></td>
            <td className="text-left"></td>
            {/* <td className="text-left">{e.station[0].location.split(',')}</td> */}
            <td className=" text-center"></td>
            <td className="text-left"></td>
            <td className="text-left"></td>
            {/* <td className=" text-left">{state[0]}</td> */}
            <td className=" text-left"></td>
            <td className="text-right"></td>

            <td className="text-right"></td>
            <td className="text-right"></td>
            <td className="text-right">
              {/* {isNaN(e.totalizer_opening - e.totalizer_closing)
                    ? "-"
                    : (e.totalizer_opening - e.totalizer_closing).toFixed(3)} */}
            </td>

            <td className="text-right"></td>
            <td className="text-right"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        )}
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total Diesel
          </td>
          <td className="text-right font-semibold">{hsdTotal}</td>
          <td className="text-right font-semibold">
            {(hsdTotal / 4.16).toFixed(3)}
          </td>
          <td>-</td>
          <td>-</td>
        </tr>
        {phsd.length > 0 ? (
          phsd.map((e, index) => (
            <tr key={`key_${index}`}>
              <td className="text-left">{e.stationId}</td>
              <td className="text-left">{e.station[0].lienseNo}</td>
              {/* <td className="text-left">{e.station[0].location.split(',')}</td> */}
              <td className=" text-center">{state[state.length - 1]}</td>
              <td className="text-left">{e.nozzle}</td>
              <td className="text-left">{e.fuelType}</td>
              {/* <td className=" text-left">{state[0]}</td> */}
              <td className=" text-left">
                From <span> {isoStartDate}</span> to <span>{isoEndDate}</span>
              </td>
              <td className="text-right">{e.price == 0 ? "-" : e.price}</td>
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
              <td className="text-right">
                {e.totalSaleLiter == 0 ? "-" : e.totalSaleLiter}
              </td>
              <td className="text-right">
                {e.totalSaleLiter == 0
                  ? "-"
                  : (e.totalSaleLiter / 4.16).toFixed(3)}
              </td>
              <td className="text-center">
                {(e.pumptest == 0 ? "-" : e.pumptest) || "-"}
              </td>
              <td className="text-center">-</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-left"></td>
            <td className="text-left"></td>
            {/* <td className="text-left">{e.station[0].location.split(',')}</td> */}
            <td className=" text-center"></td>
            <td className="text-left"></td>
            <td className="text-left"></td>
            {/* <td className=" text-left">{state[0]}</td> */}
            <td className=" text-left"></td>
            <td className="text-right"></td>

            <td className="text-right"></td>
            <td className="text-right"></td>
            <td className="text-right">
              {/* {isNaN(e.totalizer_opening - e.totalizer_closing)
                    ? "-"
                    : (e.totalizer_opening - e.totalizer_closing).toFixed(3)} */}
            </td>

            <td className="text-right"></td>
            <td className="text-right"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        )}
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total Premium Diesel
          </td>
          <td className="text-right font-semibold">{phsdTotal}</td>
          <td className="text-right font-semibold">
            {(phsdTotal / 4.16).toFixed(3)}
          </td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg font-semibold">
            Grand Total
          </td>
          <td colspan={4} className="text-center text-lg font-semibold">
            {okData
              .map((e) => e.totalSaleLiter)
              .reduce((pv, cv) => pv + cv, 0)
              ?.toFixed(3)}
          </td>
        </tr>
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

export default PumpTable;
