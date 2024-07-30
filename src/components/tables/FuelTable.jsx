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
    filename: `Fuel Balance Report`,
    sheet: `Fuel Balance Report`,
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
  const n5Total = okData
    ?.filter((ea) => ea.fuelType == "92 RON")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);
  const hsdTotal = okData
    ?.filter((ea) => ea.fuelType == "HSD")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);
  const phsdTotal = okData
    ?.filter((ea) => ea.fuelType == "PHSD")
    .map((e) => e.cash)
    .reduce((pv, cv) => pv + cv, 0);

  const Total = n2Total + n5Total + hsdTotal + phsdTotal;

  return (
    <>
      <div className="mb-[150px]">
        <table ref={tRef} className="mt-[40px]">
          {calcu ? (
            <thead>
              <tr>
                <th>No</th>
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
              <tr>
                <th>No</th>
                <th>{language.Station_name}</th>
                <th width="50">{language.pprd_no}</th>
                {/* <th>{language.Township}</th> */}
                <th>{language.State}</th>
                <th>{language.tank}</th>
                {/* <th colSpan={2}>{language.date}</th> */}
                <th>{language.fuel_type}</th>
                <th className="w-[150px]">{language.opening1}</th>
                <th>{language.receive_volume1}</th>
                <th className="w-[150px]">{language.closing_stk1}</th>
                <th className="w-[150px]">{language.dif}</th>
                <th className="w-[150px]">{language.sale1}</th>
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
                    {ok?.gl.toFixed(3) || 0}
                  </td>
                  <td className="text-center">Tank Online</td>
                </tr>
              ))}
          <tr className="bg-gray-200">
            <td colSpan={10} className="text-center">
              SubTotal 92Ron
            </td>
            <td colSpan={1} className="text-right">
              {n2Total?.toFixed(3)}
            </td>
            <td colSpan={3} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={10} className="text-center">
              SubTotal 95Ron
            </td>
            <td colSpan={1} className="text-right">
              {n5Total?.toFixed(3)}
            </td>
            <td colSpan={3} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={10} className="text-center">
              SubTotal HSD
            </td>
            <td colSpan={1} className="text-right">
              {hsdTotal?.toFixed(3)}
            </td>
            <td colSpan={3} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={10} className="text-center">
              SubTotal PHSD
            </td>
            <td colSpan={1} className="text-right">
              {phsdTotal?.toFixed(3)}
            </td>
            <td colSpan={3} className="text-right"></td>
          </tr>
          <tr>
            <td colSpan={13} className="text-center"></td>
          </tr>
          <tr className="bg-gray-200">
            <td colSpan={10} className="text-center">
              Grand Total
            </td>
            <td colSpan={1} className="text-right">
              {Total?.toFixed(3)}
            </td>
            <td colSpan={3} className="text-right"></td>
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
