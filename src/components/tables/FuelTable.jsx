import React, { useRef, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";

function FuelTable({ okData, tank, sd, ed, language, calcu }) {
  const tRef = useRef();
  let isoStartDate = sd.toLocaleDateString("fr-CA");
  let isoEndDate = ed.toLocaleDateString("fr-CA");

  const handlePrint = useReactToPrint({
    content: () => tRef.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Tank Report`,
    sheet: `Tank Report`,
  });

  const { stationId } = okData[0];

  const state = stationId?.location?.split(",");

  const n2 = okData?.filter((ea) => ea.fuelType == "001-Octane Ron(92)");
  const n5 = okData?.filter((ea) => ea.fuelType == "002-Octane Ron(95)");
  const hsd = okData?.filter((ea) => ea.fuelType == "004-Diesel");
  const phsd = okData?.filter((ea) => ea.fuelType == "005-Premium Diesel");

  const n2Total = okData
    ?.filter((ea) => ea.fuelType == "92 RON")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);

  const n2GlTotal = okData
    ?.filter((ea) => ea.fuelType == "92 RON")
    .map((e) => (e.gl ? e.gl : 0))
    .reduce((pv, cv) => pv + cv, 0);

  const n2DifTotal = okData
    ?.filter((ea) => ea.fuelType === "92 RON")
    .map((e) => {
      // Convert to numbers, compute absolute difference, and fix to 3 decimal places
      const opening = parseFloat(e.opening?.toFixed(3)) || 0;
      const balance = parseFloat(e.balance?.toFixed(3)) || 0;
      return Math.abs(opening - balance);
    })
    .reduce((pv, cv) => pv + cv, 0);

  const n5Total = okData
    ?.filter((ea) => ea.fuelType == "92 RON")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);

  const n5GlTotal = okData
    ?.filter((ea) => ea.fuelType == "95 RON")
    .map((e) => (e.gl ? e.gl : 0))
    .reduce((pv, cv) => pv + cv, 0);

  const n5DifTotal = okData
    ?.filter((ea) => ea.fuelType === "95 RON")
    .map((e) => {
      // Convert to numbers, compute absolute difference, and fix to 3 decimal places
      const opening = parseFloat(e.opening?.toFixed(3)) || 0;
      const balance = parseFloat(e.balance?.toFixed(3)) || 0;
      return Math.abs(opening - balance);
    })
    .reduce((pv, cv) => pv + cv, 0);

  const hsdTotal = okData
    ?.filter((ea) => ea.fuelType == "HSD")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);

  const hsdGlTotal = okData
    ?.filter((ea) => ea.fuelType == "HSD")
    .map((e) => (e.gl ? e.gl : 0))
    .reduce((pv, cv) => pv + cv, 0);

  const hsdDifTotal = okData
    ?.filter((ea) => ea.fuelType === "HSD")
    .map((e) => {
      // Convert to numbers, compute absolute difference, and fix to 3 decimal places
      const opening = parseFloat(e.opening?.toFixed(3)) || 0;
      const balance = parseFloat(e.balance?.toFixed(3)) || 0;
      return Math.abs(opening - balance);
    })
    .reduce((pv, cv) => pv + cv, 0);

  const phsdTotal = okData
    ?.filter((ea) => ea.fuelType == "PHSD")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);

  const phsdGlTotal = okData
    ?.filter((ea) => ea.fuelType == "PHSD")
    .map((e) => (e.gl ? e.gl : 0))
    .reduce((pv, cv) => pv + cv, 0);

  const phsdDifTotal = okData
    ?.filter((ea) => ea.fuelType === "PHSD")
    .map((e) => {
      // Convert to numbers, compute absolute difference, and fix to 3 decimal places
      const opening = parseFloat(e.opening?.toFixed(3)) || 0;
      const balance = parseFloat(e.balance?.toFixed(3)) || 0;
      return Math.abs(opening - balance);
    })
    .reduce((pv, cv) => pv + cv, 0);

  const Total = n2Total + n5Total + hsdTotal + phsdTotal;
  const difTotal = n2DifTotal + n5DifTotal + hsdDifTotal + phsdDifTotal;
  const glTotal = n2GlTotal + n5GlTotal + hsdGlTotal + phsdGlTotal;

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
        <table ref={tRef} className="mt-[40px]">
          {calcu ? (
            <thead>
              <tr className="hidden">
                <th className="text-center text-xl" colSpan={16}>
                  Tank Report of {stationId?.name + " " + state[0]}
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
                <th colSpan={3}>{format(sd)}</th>
                <th colSpan={3}>{format(ed)}</th>
              </tr>
              <tr>
                <th>Sr No.</th>
                <th>{language.Station_name}</th>
                <th>{language.pprd_no}</th>
                <th>{language.Township}</th>
                <th>{language.State}</th>
                <th>{language.fuel_type}</th>
                <th className="w-[150px]">{language.opening}</th>
                <th>{language.receive_volume}</th>
                <th className="w-[150px]">{language.sale}</th>
                <th>{language.Adj}</th>
                <th className="w-[150px]">{language.balance}</th>
                <th className="w-[150px]">{language.Remark}</th>
              </tr>
            </thead>
          ) : (
            <thead>
              <tr className="hidden">
                <th className="text-center text-xl" colSpan={16}>
                  Tank Report of {stationId?.name + " " + state[0]}
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
                <th colSpan={3}>{format(sd)}</th>
                <th colSpan={3}>{format(ed)}</th>
              </tr>
              <tr>
                <th>Sr No.</th>
                <th>{language.Station_name}</th>
                <th width="50">{language.pprd_no}</th>
                {/* <th>{language.Township}</th> */}
                <th>{language.State}</th>
                <th>{language.tank_no}</th>
                {/* <th colSpan={2}>{language.date}</th> */}
                <th>{language.fuel_type}</th>
                <th className="w-[150px]">
                  Opening <br /> Liter
                </th>
                <th>
                  Received <br /> Liter
                </th>
                <th className="w-[150px]">
                  Closing <br /> Liter
                </th>
                <th className="w-[150px]">{language.dif}</th>
                <th className="w-[150px]">Sale Liter</th>
                <th>{language.gl1}</th>
                <th>{language.Remark}</th>
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
                  <td className="text-right">{ok.open.toFixed(3)}</td>
                  <td className="text-right">
                    {ok.fuelIn === 0 ? "-" : ok.receiveVolume?.toFixed(3)}
                  </td>
                  <td className="text-right">
                    {ok.fuelIn === 0 ? "-" : ok.totalCash?.toFixed(3)}
                  </td>
                  <td className="text-right">
                    {(
                      ok.close -
                      ok.open -
                      ok.receiveVolume +
                      ok.totalCash
                    ).toFixed(3)}
                  </td>
                  {/* <td className="text-left">{ok.capacity}</td> */}
                  <td className="text-right">{ok.close.toFixed(3)}</td>
                  <td className="text-center">-</td>
                </tr>
              ))
            : okData?.map((ok, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="text-left">{stationId?.name}</td>
                  <td className=" text-center">{stationId?.lienseNo}</td>
                  {/* <td className=" text-left">{state ? state[1] : "-"}</td> */}
                  <td className=" text-center">{state[state?.length - 1]}</td>
                  <td className=" text-center">{ok?.tankNo}</td>
                  {/* <td className=" text-left">{isoStartDate}</td>
                  <td className=" text-left">{isoEndDate}</td> */}
                  <td className="text-left">{ok?.fuelType}</td>
                  <td className="text-right">{ok.opening?.toFixed(3)}</td>
                  <td className="text-right">
                    {ok.fuelIn === 0 ? "0.000" : ok.fuelIn?.toFixed(3)}
                  </td>
                  <td className="text-right">{ok.balance?.toFixed(3)}</td>
                  <td className="text-right">
                    {Math.abs(
                      ok.opening?.toFixed(3) - ok.balance?.toFixed(3)
                    ).toFixed(3)}
                  </td>
                  <td className="text-right">{ok.cash?.toFixed(3)}</td>{" "}
                  <td className="text-right">
                    {/* {Math.abs(
                      (
                        Math.abs(
                          ok.opening?.toFixed(3) - ok.balance?.toFixed(3)
                        ).toFixed(3) - ok.cash?.toFixed(3)
                      ).toFixed(3)
                    )} */}
                    {ok?.gl ? ok?.gl.toFixed(3) : "0.000"}
                  </td>
                  <td className="text-center">Tank Online</td>
                </tr>
              ))}
          <tr className="bg-gray-200">
            <td colSpan={9} className="text-center">
              SubTotal 92 Ron
            </td>
            <td colSpan={1} className="text-right">
              {n2DifTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right">
              {n2Total?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right">
              {n2GlTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={9} className="text-center">
              SubTotal 95 Ron
            </td>
            <td colSpan={1} className="text-right">
              {n5DifTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right">
              {n5Total?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right">
              {n5GlTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={9} className="text-center">
              SubTotal 97 Ron
            </td>
            <td colSpan={1} className="text-right">
              0.000
            </td>
            <td colSpan={1} className="text-right">
              0.000
            </td>
            <td colSpan={1} className="text-right">
              0.000
            </td>
            <td colSpan={1} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={9} className="text-center">
              SubTotal HSD
            </td>
            <td colSpan={1} className="text-right">
              {hsdDifTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right">
              {hsdTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right">
              {hsdGlTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={9} className="text-center">
              SubTotal C-HSD
            </td>
            <td colSpan={1} className="text-right">
              0.000
            </td>
            <td colSpan={1} className="text-right">
              0.000
            </td>
            <td colSpan={1} className="text-right">
              0.000
            </td>
            <td colSpan={1} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={9} className="text-center">
              SubTotal PHSD
            </td>
            <td colSpan={1} className="text-right">
              {phsdDifTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right">
              {phsdTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right">
              {phsdGlTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={9} className="text-center">
              SubTotal C-PHSD
            </td>
            <td colSpan={1} className="text-right">
              0.000
            </td>
            <td colSpan={1} className="text-right">
              0.000
            </td>
            <td colSpan={1} className="text-right">
              0.000
            </td>
            <td colSpan={1} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={9} className="text-center">
              Grand Total
            </td>
            <td colSpan={1} className="text-right">
              {difTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right">
              {Total?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right">
              {glTotal?.toFixed(3)}
            </td>
            <td colSpan={1} className="text-right"></td>
          </tr>
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

export default FuelTable;
