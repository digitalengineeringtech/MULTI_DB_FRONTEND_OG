import React, { useRef, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";

function FuelTableTemp({
  okData,
  type,
  tank,
  start,
  end,
  sd,
  ed,
  language,
  calcu,
}) {
  const tRef = useRef();
  let isoStartDate = sd.toLocaleDateString("fr-CA");
  let isoEndDate = ed.toLocaleDateString("fr-CA");

  const handlePrint = useReactToPrint({
    content: () => tRef.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Daily Sale Report`,
    sheet: `Daily Sale Report`,
  });

  const { stationId } = okData[0];

  const state = stationId?.location?.split(",");

  const n2 = okData?.filter((ea) => ea.fuelType == "001-Octane Ron(92)");
  const n5 = okData?.filter((ea) => ea.fuelType == "002-Octane Ron(95)");
  const hsd = okData?.filter((ea) => ea.fuelType == "004-Diesel");
  const phsd = okData?.filter((ea) => ea.fuelType == "005-Premium Diesel");

  const n2Total = okData
    ?.filter((ea) => ea.fuelType == "001-Octane Ron(92)")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);
  const n5Total = okData
    ?.filter((ea) => ea.fuelType == "002-Octane Ron(95)")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);
  const hsdTotal = okData
    ?.filter((ea) => ea.fuelType == "004-Diesel")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);
  const phsdTotal = okData
    ?.filter((ea) => ea.fuelType == "005-Premium Diesel")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);

  const format = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <div className="mb-[150px]">
        <table ref={tRef} className="mt-[20px]">
          {calcu ? (
            <thead>
              <tr className="hidden">
                <th className="text-center text-xl" colSpan={16}>
                  Daily Sale Report of {stationId?.name} {state[0]}
                </th>
              </tr>
              <tr>
                <th className="text-center" colSpan={2} rowSpan={2}>
                  Date & Time
                </th>
                <th className="text-center" colSpan={3}>
                  From
                </th>
                <th className="text-center" colSpan={3}>
                  To
                </th>
                <th className="text-center" colSpan={9} rowSpan={2}></th>
              </tr>
              <tr>
                <th colSpan={3}>{format(start)}</th>
                <th colSpan={3}>{format(end)}</th>
              </tr>
              <tr>
                <th width="40">Sr No.</th>
                <th>{language.Station_name}</th>
                <th>{language.pprd_no}</th>
                <th>{language.Township}</th>
                <th>{language.State}</th>
                <th>{language.fuel_type}</th>
                <th className="w-[150px]">
                  Opening stock <br />
                  {type == "Liter" ? "( Liter )" : "( Gallon )"}
                </th>
                <th>
                  Received <br />
                  {type == "Liter" ? "( Liter )" : "( Gallon )"}
                </th>
                <th className="w-[150px]">
                  Sale Volume <br />
                  {type == "Liter" ? "( Liter )" : "( Gallon )"}
                </th>
                <th>
                  Adjustment <br />
                  {type == "Liter" ? "( Liter )" : "( Gallon )"}
                </th>
                <th className="w-[150px]">
                  Closing Stock <br />
                  {type == "Liter" ? "( Liter )" : "( Gallon )"}
                </th>
                <th className="w-[150px]">{language.Remark}</th>
              </tr>
            </thead>
          ) : (
            <thead>
              <tr className="hidden">
                <th className="text-center text-xl" colSpan={16}>
                  {/* //hk */}
                  Daily Sale Report of {stationId?.name} {state[0]}
                </th>
              </tr>
              <tr className="hidden">
                <th className="text-center" colSpan={2} rowSpan={2}>
                  Date & Time
                </th>
                <th className="text-center" colSpan={3}>
                  From
                </th>
                <th className="text-center" colSpan={3}>
                  To
                </th>
                <th className="text-center" colSpan={9} rowSpan={2}></th>
              </tr>
              <tr className="hidden">
                <th colSpan={3}>{format(start)}</th>
                <th colSpan={3}>{format(end)}</th>
              </tr>
              <tr>
                <th width="40">Sr No.</th>
                <th>{language.Station_name}</th>
                <th width="50">{language.pprd_no}</th>
                <th>{language.Township}</th>
                <th>{language.State}</th>
                {/* <th colSpan={2}>{language.date}</th> */}
                <th>{language.fuel_type}</th>
                <th className="w-[150px]">
                  Opening stock <br />
                  {type == "Liter" ? "( Liter )" : "( Gallon )"}
                  {/* {language.opening} */}
                </th>
                <th>
                  Received <br />
                  {type == "Liter" ? "( Liter )" : "( Gallon )"}
                </th>
                <th className="w-[150px]">
                  Sale Volume <br />
                  {type == "Liter" ? "( Liter )" : "( Gallon )"}
                </th>
                <th>
                  Adjustment <br />
                  {type == "Liter" ? "( Liter )" : "( Gallon )"}
                </th>
                <th className="w-[150px]">
                  Closing Stock <br />
                  {type == "Liter" ? "( Liter )" : "( Gallon )"}
                </th>
                <th className="w-[150px]">Pump Test</th>
                <th className="w-[150px]">Other</th>
                <th className="w-[150px]">{language.Remark}</th>
              </tr>
            </thead>
          )}

          {calcu
            ? calcu?.map((ok, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="text-left">{stationId?.name}</td>
                  {/* <td className="text-left">Tank {ok.tankNo}</td> */}
                  <td className=" text-center">{stationId?.lienseNo}</td>
                  <td className=" text-left">{state ? state[0] : "-"}</td>
                  <td className=" text-center">{state[state?.length - 1]}</td>
                  <td className="text-left">
                    {ok?.fuelType == "001-Octane Ron(92)"
                      ? "92 RON"
                      : ok?.fuelType == "002-Octane Ron(95)"
                      ? "95 RON"
                      : ok?.fuelType == "004-Diesel"
                      ? "HSD"
                      : ok?.fuelType == "005-Premium Diesel"
                      ? "PHSD"
                      : ""}
                  </td>
                  <td className="text-right">{(ok.open / 4.546).toFixed(3)}</td>
                  <td className="text-right">
                    {ok.fuelIn === 0
                      ? "-"
                      : (ok.receiveVolume / 4.546)?.toFixed(3)}
                  </td>
                  <td className="text-right">
                    {ok.fuelIn === 0 ? "-" : (ok.totalCash / 4.546)?.toFixed(3)}
                  </td>
                  <td className="text-right">
                    {(
                      ok.close / 4.546 -
                      ok.open / 4.546 -
                      ok.receiveVolume / 4.546 +
                      ok.totalCash / 4.546
                    ).toFixed(3)}
                  </td>
                  {/* <td className="text-left">{ok.capacity}</td> */}
                  <td className="text-right">
                    {(ok.close / 4.546).toFixed(3)}
                  </td>
                  <td className="text-center">-</td>
                </tr>
              ))
            : okData?.map((ok, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="text-left">
                    {stationId?.name + " " + state[0]}
                  </td>
                  <td className=" text-center">{stationId?.lienseNo}</td>
                  <td className=" text-left">{state ? state[1] : "-"}</td>
                  <td className=" text-center">{state[state?.length - 1]}</td>
                  {/* <td className=" text-left">{isoStartDate}</td>
                  <td className=" text-left">{isoEndDate}</td> */}
                  <td className="text-left">{ok?.fuelType}</td>
                  <td className="text-right">
                    {type == "Liter"
                      ? ok.tankOpen?.toFixed(3)
                      : (ok.tankOpen / 4.546)?.toFixed(3)}
                    {/* {(ok.opening )?.toFixed(3)} */}
                  </td>
                  <td className="text-right">
                    {ok.fuelIn === 0
                      ? "0.000"
                      : type == "Liter"
                      ? ok.fuelIn?.toFixed(3)
                      : (ok.fuelIn / 4.546)?.toFixed(3)}
                  </td>
                  <td className="text-right">
                    {type == "Liter"
                      ? ok.cash?.toFixed(3)
                      : (ok.cash / 4.546)?.toFixed(3)}
                  </td>{" "}
                  <td className="text-right">
                    {type == "Liter"
                      ? (
                          ok.tankClosing -
                          ok.tankOpen -
                          ok.fuelIn +
                          ok.cash
                        ).toFixed(3)
                      : (
                          (ok.tankClosing - ok.tankOpen - ok.fuelIn + ok.cash ) /
                          // (ok.balance - ok.opening - ok.fuelIn + ok.cash) /
                          4.546
                        ).toFixed(3)}
                  </td>
                  <td className="text-right">
                    {type == "Liter"
                      ? ok.tankClosing?.toFixed(3)
                      : (ok.tankClosing / 4.546)?.toFixed(3)}
                    {/* {(ok.balance )?.toFixed(3)} */}
                  </td>
                  <td className="text-center">{ok.pumpTest}</td>
                  <td className="text-center">{ok.other}</td>
                  <td className="text-center">-</td>
                </tr>
              ))}
        </table>
        {/* <p className='flex justify-end mt-[30px] underline px-[100px] hover:font-semibold'><Link className='flex gap-3 items-center hover:gap-5 duration-300' to="/kyawsan/tankdemo">Check with Model <AiOutlineArrowRight/></Link></p> */}
        <div className="flex text-[16px] p-3 mt-[30px] mb-[50px] items-center justify-start gap-3">
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
    </>
  );
}

export default FuelTableTemp;
