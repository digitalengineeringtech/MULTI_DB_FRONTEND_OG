import React, { useRef } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";

function FuelBalanceReportTable({
  okData,
  tank,
  language,
  calcu,
  fuelbalance,
}) {
  const tRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => tRef.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Fuel Balance Report`,
    sheet: `Fuel Balance Report`,
  });

  console.log('====================================');
  console.log(okData);
  console.log('====================================');

  const { stationId } = okData ? okData[0] : "0";
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

  return (
    <>
      <div className="mb-[150px]">
        <table ref={tRef} className="mt-[40px]">
          {calcu ? (
            <thead>
              <tr>
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
                <th>{language.Station_name}</th>
                <th>{language.pprd_no}</th>
                <th>{language.State}</th>
                <th>{language.tank}</th>
                <th>{language.fuel_type}</th>
                <th className="w-[150px]">{language.opening}</th>
                <th>{language.receive_volume}</th>
                <th className="w-[150px]">{language.closing_li}</th>
                <th className="w-[150px]">{language.dif}</th>
                <th className="w-[150px]">{language.sale}</th>
                <th>{language.gl}</th>
                <th className="w-[150px]">{language.Remark}</th>
              </tr>
            </thead>
          )}

          {!fuelbalance
            ? calcu?.map((ok, index) => (
                <tr key={index}>
                  <td className="text-left">{stationId?.name}</td>
                  {/* <td className="text-left">Tank {ok.tankNo}</td> */}
                  <td className=" text-center">{stationId?.lienseNo}</td>
                  <td className=" text-left">{state[0]}</td>
                  <td className=" text-center">{state[state?.length - 1]}</td>
                  <td className="text-left">{ok.fuelType}</td>
                  <td className="text-right">{(ok.open / 4.546).toFixed(3)}</td>
                  <td className="text-right">
                    {ok.fuelIn === 0
                      ? "-"
                      : (ok.receiveVolume / 4.546)?.toFixed(3) }
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
                  <td className="text-left">{stationId?.name}</td>
                  <td className=" text-center">{stationId?.lienseNo}</td>
                  <td className=" text-center">{state[state?.length - 1]}</td>
                  <td className="text-left">Tank {ok.tankNo}</td>
                  <td className="text-left">{ok.fuelType}</td>
                  <td className="text-right">{ok.opening?.toFixed(3)}</td>
                  <td className="text-right">
                    {ok.fuelIn === 0 ? "-" : ok.fuelIn?.toFixed(3)}
                  </td>
                  <td className="text-right">{ok.balance?.toFixed(3)}</td>
                  {/* <td className="text-right">
                    {(ok.opening - ok.balance)?.toFixed(3)}
                  </td> */}
                  <td className="text-right">{ok.cash?.toFixed(3)}</td>
                  <td className="text-right">{ok.cash?.toFixed(3)}</td>
                  <td className="text-right">
                    {(ok.balance - ok.opening - ok.fuelIn + ok.cash).toFixed(3)}
                  </td>
                  <td className="text-right">-</td>
                </tr>
              ))}
          {!calcu && (
            <tr className="bg-gray-200">
              <td colspan={9} className="text-lg">
                Sub Total Octane Ron 92
              </td>
              <td className="text-center font-semibold">
                {n2Total.toFixed(3)}
              </td>
              <td colspan={2}> </td>
            </tr>
          )}

          {fuelbalance &&
            okData?.length > 0 &&
            n2?.map((ok, index) => (
              <tr key={index}>
                <td className="text-left">{stationId?.name}</td>
                <td className=" text-center">{stationId?.lienseNo}</td>
                <td className=" text-center">{state[state?.length - 1]}</td>
                <td className="text-left">Tank {ok.tankNo}</td>
                <td className="text-left">{ok.fuelType}</td>
                <td className="text-right">{ok.opening?.toFixed(3)}</td>
                <td className="text-right">
                  {ok.fuelIn === 0 ? "-" : ok.fuelIn?.toFixed(3)}
                </td>
                <td className="text-right">{ok.balance?.toFixed(3)}</td>
                {/* <td className="text-right">
                    {(ok.opening - ok.balance)?.toFixed(3)}
                  </td> */}
                <td className="text-right">{ok.cash?.toFixed(3)}</td>
                <td className="text-right">{ok.cash?.toFixed(3)}</td>
                <td className="text-right">
                  {(ok.balance - ok.opening - ok.fuelIn + ok.cash).toFixed(3)}
                </td>
                <td className="text-right">-</td>
              </tr>
            ))}
          {!calcu && (
            <tr className="bg-gray-200">
              <td colspan={9} className="text-lg">
                Sub Total Octane Ron 95
              </td>
              <td className="text-center font-semibold">
                {n5Total.toFixed(3)}
              </td>
              <td colspan={2}></td>
            </tr>
          )}
          {fuelbalance &&
            okData?.length > 0 &&
            n5?.map((ok, index) => (
              <tr key={index}>
                <td className="text-left">{stationId?.name}</td>
                <td className=" text-center">{stationId?.lienseNo}</td>
                <td className=" text-center">{state[state?.length - 1]}</td>
                <td className="text-left">Tank {ok.tankNo}</td>
                <td className="text-left">{ok.fuelType}</td>
                <td className="text-right">{ok.opening?.toFixed(3)}</td>
                <td className="text-right">
                  {ok.fuelIn === 0 ? "-" : ok.fuelIn?.toFixed(3)}
                </td>
                <td className="text-right">{ok.balance?.toFixed(3)}</td>
                {/* <td className="text-right">
                    {(ok.opening - ok.balance)?.toFixed(3)}
                  </td> */}
                <td className="text-right">{ok.cash?.toFixed(3)}</td>
                <td className="text-right">{ok.cash?.toFixed(3)}</td>
                <td className="text-right">
                  {(ok.balance - ok.opening - ok.fuelIn + ok.cash).toFixed(3)}
                </td>
                <td className="text-right">-</td>
              </tr>
            ))}
          {!calcu && (
            <tr className="bg-gray-200">
              <td colspan={9} className="text-lg">
                Sub Total Diesel
              </td>
              <td className="text-center font-semibold">
                {hsdTotal.toFixed(3)}
              </td>
              <td colspan={2}></td>
            </tr>
          )}
          {fuelbalance &&
            okData?.length > 0 &&
            hsd?.map((ok, index) => (
              <tr key={index}>
                <td className="text-left">{stationId?.name}</td>
                <td className=" text-center">{stationId?.lienseNo}</td>
                <td className=" text-center">{state[state?.length - 1]}</td>
                <td className="text-left">Tank {ok.tankNo}</td>
                <td className="text-left">{ok.fuelType}</td>
                <td className="text-right">{ok.opening?.toFixed(3)}</td>
                <td className="text-right">
                  {ok.fuelIn === 0 ? "-" : ok.fuelIn?.toFixed(3)}
                </td>
                <td className="text-right">{ok.balance?.toFixed(3)}</td>
                {/* <td className="text-right">
                    {(ok.opening - ok.balance)?.toFixed(3)}
                  </td> */}
                <td className="text-right">{ok.cash?.toFixed(3)}</td>
                <td className="text-right">{ok.cash?.toFixed(3)}</td>
                <td className="text-right">
                  {(ok.balance - ok.opening - ok.fuelIn + ok.cash).toFixed(3)}
                </td>
                <td className="text-right">-</td>
              </tr>
            ))}
          {!calcu && (
            <tr className="bg-gray-200">
              <td colspan={9} className="text-lg">
                Sub Total Premium Diesel
              </td>
              <td className="text-center font-semibold">
                {phsdTotal.toFixed(3)}
              </td>
              <td colspan={2}></td>
            </tr>
          )}
          {fuelbalance &&
            okData?.length > 0 &&
            phsd?.map((ok, index) => (
              <tr key={index}>
                <td className="text-left">{stationId?.name}</td>
                <td className=" text-center">{stationId?.lienseNo}</td>
                <td className=" text-center">{state[state?.length - 1]}</td>
                <td className="text-left">Tank {ok.tankNo}</td>
                <td className="text-left">{ok.fuelType}</td>
                <td className="text-right">{ok.opening?.toFixed(3)}</td>
                <td className="text-right">
                  {ok.fuelIn === 0 ? "-" : ok.fuelIn?.toFixed(3)}
                </td>
                <td className="text-right">{ok.balance?.toFixed(3)}</td>
                {/* <td className="text-right">
                    {(ok.opening - ok.balance)?.toFixed(3)}
                  </td> */}
                <td className="text-right">{ok.cash?.toFixed(3)}</td>
                <td className="text-right">{ok.cash?.toFixed(3)}</td>
                <td className="text-right">
                  {(ok.balance - ok.opening - ok.fuelIn + ok.cash).toFixed(3)}
                </td>
                <td className="text-right">-</td>
              </tr>
            ))}
          {!calcu && (
            <tr className="bg-gray-200">
              <td colspan={9} className="text-lg">
                Grand Total
              </td>
              <td className="text-center font-semibold">
                {okData
                  ?.map((e) => e.cash)
                  .reduce((pv, cv) => pv + cv, 0)
                  .toFixed(3)}
              </td>
              <td colspan={2}></td>
            </tr>
          )}
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

export default FuelBalanceReportTable;
