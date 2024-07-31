import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import React, { useEffect, useRef } from "react";

function PumpTableTemp({
  okData,
  statement,
  sDate,
  data_g_2,
  eDate,
  language,
}) {
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

  const dateFormat = (date) => {
    // Parse the date string into a Date object
    const dateObj = new Date(date);

    // Extract day, month, and year
    const day = String(dateObj.getUTCDate()).padStart(2, "0");
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = dateObj.getUTCFullYear();

    // Format the date as dd mm yyyy
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  const n2 = okData?.filter((ea) => ea.fuelType == "001-Octane Ron(92)");
  const n5 = okData?.filter((ea) => ea.fuelType == "002-Octane Ron(95)");
  const hsd = okData?.filter((ea) => ea.fuelType == "004-Diesel");
  const phsd = okData?.filter((ea) => ea.fuelType == "005-Premium Diesel");

  console.log(okData, "........");

  const n2Total = okData
    ?.filter((ea) => ea.fuelType == "001-Octane Ron(92)")
    .map((e) => Number(e.totalSaleLiter))
    .reduce((pv, cv) => pv + cv, 0);
  const n2Test = n2
    ?.filter((ea) => ea.fuelType == "001-Octane Ron(92)")
    .map((e) => Number(e.pumptest))
    .reduce((pv, cv) => pv + cv, 0);
  const n2Other = n2
    ?.filter((ea) => ea.fuelType == "001-Octane Ron(92)")
    .map((e) => Number(e.other))
    .reduce((pv, cv) => pv + cv, 0);

  const n5Total = okData
    ?.filter((ea) => ea.fuelType == "002-Octane Ron(95)")
    .map((e) => Number(e.totalSaleLiter))
    .reduce((pv, cv) => pv + cv, 0);

  const n5Test = n5
    ?.filter((ea) => ea.fuelType == "002-Octane Ron(95)")
    .map((e) => Number(e.pumptest))
    .reduce((pv, cv) => pv + cv, 0);
  const n5Other = n5
    ?.filter((ea) => ea.fuelType == "002-Octane Ron(95)")
    .map((e) => Number(e.other))
    .reduce((pv, cv) => pv + cv, 0);

  const hsdTotal = okData
    ?.filter((ea) => ea.fuelType == "004-Diesel")
    .map((e) => Number(e.totalSaleLiter))
    .reduce((pv, cv) => pv + cv, 0);

  const hsdTest = hsd
    ?.filter((ea) => ea.fuelType == "004-Diesel")
    .map((e) => Number(e.pumptest))
    .reduce((pv, cv) => pv + cv, 0);
  const hsdOther = hsd
    ?.filter((ea) => ea.fuelType == "004-Diesel")
    .map((e) => Number(e.other))
    .reduce((pv, cv) => pv + cv, 0);

  const phsdTotal = okData
    ?.filter((ea) => ea.fuelType == "005-Premium Diesel")
    .map((e) => Number(e.totalSaleLiter))
    .reduce((pv, cv) => pv + cv, 0);

  const phsdTest = phsd
    ?.filter((ea) => ea.fuelType == "005-Premium Diesel")
    .map((e) => Number(e.pumptest))
    .reduce((pv, cv) => pv + cv, 0);
  const phsdOther = phsd
    ?.filter((ea) => ea.fuelType == "005-Premium Diesel")
    .map((e) => Number(e.other))
    .reduce((pv, cv) => pv + cv, 0);

  console.log(n2Total, "G.....");

  return (
    <div className="mt-[70px]">
      <table ref={tRef}>
        <tr>
          <th>{language.station_name}</th>
          <th width="50">{language.pprd_no}</th>
          <th>{language.State}</th>
          <th width="50">{language.nozzle_no}</th>
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
        {okData.length > 0 ? (
          okData.map((e, index) => (
            <tr key={`key_${index}`}>
              <td className="text-left">{e.stationId}</td>
              <td className="text-left">{e.station[0].lienseNo}</td>
              {/* <td className="text-left">{e.station[0].location.split(',')}</td> */}
              <td className=" text-center">{state[state.length - 1]}</td>
              <td className="text-left">{e.nozzle}</td>
              <td className="text-left">
                {e?.fuelType == "001-Octane Ron(92)"
                  ? "92 RON"
                  : e?.fuelType == "002-Octane Ron(95)"
                  ? "95 RON"
                  : e?.fuelType == "004-Diesel"
                  ? "HSD"
                  : e?.fuelType == "005-Premium Diesel"
                  ? "PHSD"
                  : ""}
              </td>
              {/* <td className=" text-left">{state[0]}</td> */}
              <td className=" text-center">
                {e.date != "-" ? dateFormat(e.date) : "-"}
              </td>
              <td className="text-right">{e.price == 0 ? "0" : e.price}</td>
              {statement ? (
                <>
                  <td className="text-right">
                    {Number(e.totalizer_opening).toFixed(3)}
                  </td>
                  <td className="text-right">
                    {Number(e.totalizer_closing).toFixed(3)}
                  </td>
                  <td className="text-right">
                    {/* {isNaN(Number(e.totalizer_opening).toFixed(3) - Number(e.totalizer_closing).toFixed(3))
                    ? "0"
                    : (Number(e.totalizer_opening).toFixed(3) - Number(e.totalizer_closing).toFixed(3))?.toFixed(3)} */}
                    {Number(e.totalizer_different).toFixed(3) || "0"}
                  </td>
                </>
              ) : (
                <></>
              )}
              <td className="text-right">
                {e.totalSaleLiter == 0 ? "0" : e.totalSaleLiter}
              </td>
              <td className="text-right">
                {e.totalSaleLiter == 0
                  ? "0"
                  : (e.totalSaleLiter / 4.16)?.toFixed(3)}
              </td>
              <td className="text-center">
                {(e.pumptest == 0 ? "0" : e.pumptest) || "0"}
              </td>
              <td className="text-center">
                {Number(e.other)?.toFixed(3) == "NaN"
                  ? "0"
                  : Number(e.other)?.toFixed(3)}
              </td>
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
              {/* {isNaN(Number(e.totalizer_opening).toFixed(3) - Number(e.totalizer_closing).toFixed(3))
                    ? "0"
                    : (Number(e.totalizer_opening).toFixed(3) - Number(e.totalizer_closing).toFixed(3))?.toFixed(3)} */}
            </td>

            <td className="text-right"></td>
            <td className="text-right"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        )}
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total 92 Ron
          </td>
          <td className="text-right font-semibold">
            {Number(n2Total)?.toFixed(3)}
          </td>
          <td className="text-right font-semibold">
            {(n2Total / 4.16)?.toFixed(3)}
          </td>
          <td>{Number(n2Test)?.toFixed(3) || "0"}</td>
          <td>{n2Other?.toFixed(3) || "0"}</td>
        </tr>
        <tr>
          <td className="text-left" colSpan={14}></td>
        </tr>
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total 95 Ron
          </td>
          <td className="text-right font-semibold">{n5Total?.toFixed(3)}</td>
          <td className="text-right font-semibold">
            {(n5Total / 4.16)?.toFixed(3)}
          </td>
          <td>{n5Test?.toFixed(3) || "0"}</td>
          <td>{n5Other?.toFixed(3) || "0"}</td>
        </tr>
        <tr>
          <td className="text-left" colSpan={14}></td>
        </tr>
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total 97 Ron
          </td>
          <td className="text-right font-semibold">0.000</td>
          <td className="text-right font-semibold">0.000</td>
          <td>0.000</td>
          <td>0.000</td>
        </tr>
        <tr>
          <td className="text-left" colSpan={14}></td>
        </tr>
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total HSD
          </td>
          <td className="text-right font-semibold">
            {Number(hsdTotal)?.toFixed(3)}
          </td>
          <td className="text-right font-semibold">
            {(Number(hsdTotal) / 4.16)?.toFixed(3)}
          </td>
          <td>{Number(hsdTest)?.toFixed(3) || "0"}</td>
          <td>{hsdOther?.toFixed(3) || "0"}</td>
        </tr>
        <tr>
          <td className="text-left" colSpan={14}></td>
        </tr>
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total C-HSD
          </td>
          <td className="text-right font-semibold">0.000</td>
          <td className="text-right font-semibold">0.000</td>
          <td>0.000</td>
          <td>0.000</td>
        </tr>
        <tr>
          <td className="text-left" colSpan={14}></td>
        </tr>
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total PHSD
          </td>
          <td className="text-right font-semibold">
            {Number(phsdTotal)?.toFixed(3)}
          </td>
          <td className="text-right font-semibold">
            {(phsdTotal / 4.16)?.toFixed(3)}
          </td>
          <td>{Number(phsdTest)?.toFixed(3) || "0"}</td>
          <td>{phsdOther?.toFixed(3) || "0"}</td>
        </tr>
        <tr>
          <td className="text-left" colSpan={14}></td>
        </tr>
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg">
            Sub Total C-PHSD
          </td>
          <td className="text-right font-semibold">0.000</td>
          <td className="text-right font-semibold">0.000</td>
          <td>0.000</td>
          <td>0.000</td>
        </tr>
        <tr>
          <td className="text-left" colSpan={14}></td>
        </tr>
        <tr className="bg-gray-200">
          <td colspan={10} className="text-lg font-semibold">
            Grand Total
          </td>
          <td colspan={1} className="text-center text-lg font-semibold">
            {okData
              .map((e) => Number(e.totalSaleLiter))
              .reduce((pv, cv) => pv + cv, 0)
              ?.toFixed(3)}
          </td>
          <td colspan={1} className="text-center text-lg font-semibold">
            {(
              okData
                .map((e) => Number(e.totalSaleLiter))
                .reduce((pv, cv) => pv + cv, 0) / 4.16
            )?.toFixed(3)}
          </td>
          <td colspan={1} className="text-center text-lg font-semibold">
            {(
              okData
                .map((e) => Number(e.pumptest))
                .reduce((pv, cv) => pv + cv, 0) / 4.16
            )?.toFixed(3)}
          </td>
          <td colspan={1} className="text-center text-lg font-semibold">
            {okData
              .map((e) => Number(e.other))
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

export default PumpTableTemp;
