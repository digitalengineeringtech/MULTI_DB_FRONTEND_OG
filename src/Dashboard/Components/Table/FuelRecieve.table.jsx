import clsx from "clsx";
import React, { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { AiFillPrinter } from "react-icons/ai";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useReactToPrint } from "react-to-print";

function FuelRecieveTableLittle({
  okData,
  // tableRef,
  start,
  type,
  end,
  language,
  selectedFuelType,
  selectedNozzle,
}) {
  console.log(okData, "reff");
  const fuelArr = okData.map((e) => e.fuel_type);
  const tableRef = useRef();

  const n2 = okData?.filter((ea) => ea.fuel_type == "001-Octane Ron(92)");
  const n5 = okData?.filter((ea) => ea.fuel_type == "002-Octane Ron(95)");
  const hsd = okData?.filter((ea) => ea.fuel_type == "004-Diesel");
  const phsd = okData?.filter((ea) => ea.fuel_type == "005-Premium Diesel");
  const n2Total = okData
    ?.filter((ea) => ea.fuel_type == "001-Octane Ron(92)")
    .map((e) => Number(e.receive_balance))
    .reduce((pv, cv) => pv + cv, 0);

  const n2Test = n2
    ?.filter((ea) => ea.fuel_type == "001-Octane Ron(92)")
    .map((e) => Number(e.pumptest))
    .reduce((pv, cv) => pv + cv, 0);

  const n2Other = n2
    ?.filter((ea) => ea.fuel_type == "001-Octane Ron(92)")
    .map((e) => Number(e.other))
    .reduce((pv, cv) => pv + cv, 0);

  const n5Total = okData
    ?.filter((ea) => ea.fuel_type == "002-Octane Ron(95)")
    .map((e) => Number(e.receive_balance))
    .reduce((pv, cv) => pv + cv, 0);

  const n5Test = n5
    ?.filter((ea) => ea.fuel_type == "002-Octane Ron(95)")
    .map((e) => Number(e.pumptest))
    .reduce((pv, cv) => pv + cv, 0);

  const n5Other = n5
    ?.filter((ea) => ea.fuel_type == "002-Octane Ron(95)")
    .map((e) => Number(e.other))
    .reduce((pv, cv) => pv + cv, 0);

  const hsdTotal = okData
    ?.filter((ea) => ea.fuel_type == "004-Diesel")
    .map((e) => Number(e.receive_balance))
    .reduce((pv, cv) => pv + cv, 0);

  const hsdTest = hsd
    ?.filter((ea) => ea.fuel_type == "004-Diesel")
    .map((e) => Number(e.pumptest))
    .reduce((pv, cv) => pv + cv, 0);
  const hsdOther = hsd
    ?.filter((ea) => ea.fuel_type == "004-Diesel")
    .map((e) => Number(e.other))
    .reduce((pv, cv) => pv + cv, 0);

  const phsdTotal = okData
    ?.filter((ea) => ea.fuel_type == "005-Premium Diesel")
    .map((e) => Number(e.receive_balance))
    .reduce((pv, cv) => pv + cv, 0);

  const phsdTest = phsd
    ?.filter((ea) => ea.fuel_type == "005-Premium Diesel")
    .map((e) => Number(e.pumptest))
    .reduce((pv, cv) => pv + cv, 0);
  const phsdOther = phsd
    ?.filter((ea) => ea.fuel_type == "005-Premium Diesel")
    .map((e) => Number(e.other))
    .reduce((pv, cv) => pv + cv, 0);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Fuel In Report",
    sheet: "Fuel In Report",
  });

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

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
    <div className="bg-white">
      <h3 className="mt-[30px]"></h3>
      <table className="mt-5" ref={tableRef}>
        <thead>
          <tr className="hidden">
            <th className="text-center text-xl" colSpan={16}>
              Fuel In Report of{" "}
              {okData[0].stationId.name +
                " " +
                okData[0].stationId.location.split(",")[0]}
            </th>
          </tr>
          {/* <tr className="hidden">
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
          </tr> */}
        </thead>
        <thead>
          <tr>
            <th>
              Sr <br />
              No.
            </th>
            <th>Station Name</th>
            <th>
              PPRD <br />
              License <br /> No.
            </th>
            <th>Township</th>
            <th>
              State <br />
              /Division
            </th>
            <th colSpan={2}>Date & Time</th>
            <th>Bowser No.</th>
            {/* <th>Driver</th> */}
            <th>Fuel Type</th>
            <th>
              Tank <br /> No.
            </th>
            <th width="85">
              Tank <br /> Capacity <br />{" "}
              {type == "Liter" ? "( Liter )" : "( Gallon )"}
            </th>
            <th width="85">
              Tank <br /> Opening <br />{" "}
              {type == "Liter" ? "( Liter )" : "( Gallon )"}
            </th>
            <th width="85">
              Tank <br /> Received <br />{" "}
              {type == "Liter" ? "( Liter )" : "( Gallon )"}
            </th>
            <th width="85">
              Sale <br /> {type == "Liter" ? "( Liter )" : "( Gallon )"}
            </th>
            <th width="85">
              Tank <br /> Closing <br />{" "}
              {type == "Liter" ? "( Liter )" : "( Gallon )"}
            </th>
            <th width="85">
              Gain/ <br /> Loss <br />{" "}
              {type == "Liter" ? "( Liter )" : "( Gallon )"}
            </th>
          </tr>
        </thead>
        <tbody>
          {okData.map((item, index) => {
            // const dateObj = new Date(item?.createAt);
            // // const day = dateObj?.getUTCDate();
            // // const month = months[dateObj.getUTCMonth()];
            // // const year = dateObj?.getUTCFullYear();
            // const time = dateObj?.toISOString().slice(11, 19);
            // const formattedDate = `${dateObj.toLocaleDateString(
            //   `fr-CA`
            // )} ${time}`;

            const dateObj = new Date(item?.createAt);

            const day = String(dateObj.getUTCDate()).padStart(2, "0");
            const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
            const year = dateObj.getUTCFullYear();

            const time = dateObj?.toISOString().slice(11, 19);

            const formattedDate = `${day}-${month}-${year} ${time}`;

            return (
              <tr
                key={index}
                className={clsx({
                  "!bg-yellow-100": item.tank_balance > 14580,
                })}
              >
                <td>{index + 1}</td>
                <td>
                  {item.stationId.name +
                    " " +
                    item.stationId.location.split(",")[0]}
                </td>
                <td>{item.stationId.lienseNo}</td>
                <td>{item.stationId.location.split(",")[1]}</td>
                <td>{item.stationId.location.split(",")[2]}</td>
                <td>{formattedDate}</td>
                <td>{formattedDate}</td>
                <td>{item.bowser}</td>
                <td>
                  {item?.fuel_type == "001-Octane Ron(92)"
                    ? "92 RON"
                    : item?.fuel_type == "002-Octane Ron(95)"
                    ? "95 RON"
                    : item?.fuel_type == "004-Diesel"
                    ? "HSD"
                    : item?.fuel_type == "005-Premium Diesel"
                    ? "PHSD"
                    : ""}
                </td>
                <td>{item.tankNo}</td>
                <td>
                  {" "}
                  {type == "Liter"
                    ? (14580).toFixed(3)
                    : (14580 / 4.546).toFixed(3)}
                </td>
                <td>
                  {/* {item.opening ? (item.opening / 4.546)?.toFixed(3) : "00.0"} */}
                  {item.opening
                    ? type == "Liter"
                      ? item.opening?.toFixed(3)
                      : (item.opening / 4.546)?.toFixed(3)
                    : "00.0"}
                </td>
                <td>
                  {type == "Liter"
                    ? item.receive_balance?.toFixed(3)
                    : (item.receive_balance / 4.546)?.toFixed(3)}
                  {/* {(item.receive_balance / 4.546)?.toFixed(3)} */}
                </td>
                <td>00.0</td>
                <td>
                  {type == "Liter"
                    ? item.tank_balance?.toFixed(3)
                    : (item.tank_balance / 4.546)?.toFixed(3)}
                  {/* {(item.tank_balance / 4.546)?.toFixed(3)} */}
                </td>
                <td>00.0</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {fuelArr.includes("001-Octane Ron(92)") ? (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total 92 Ron
                </td>
                <td className="text-right font-semibold">
                  {type == "Liter"
                    ? Number(n2Total)?.toFixed(3)
                    : (Number(n2Total) / 4.165)?.toFixed(3)}
                </td>
                <td className="text-right font-semibold">0.00</td>
                <td></td>
                <td>
                  {type == "Liter"
                    ? Number(n2Other)?.toFixed(3) || "0"
                    : (Number(n2Other) / 4.165)?.toFixed(3) || "0"}
                </td>
              </tr>
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          ) : (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total 92 Ron
                </td>
                <td className="text-right font-semibold">0.00</td>
                <td className="text-right font-semibold">0.00</td>
                <td> </td>
                <td> 0.00</td>
              </tr>
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          )}
          {fuelArr.includes("002-Octane Ron(95)") ? (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total 95 Ron
                </td>
                <td className="text-right font-semibold">
                  {type == "Liter"
                    ? Number(n5Total)?.toFixed(3)
                    : (Number(n5Total) / 4.165)?.toFixed(3)}
                </td>
                <td className="text-right font-semibold">0.00</td>
                <td></td>
                <td>0.00</td>
              </tr>{" "}
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          ) : (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total 95 Ron
                </td>
                <td className="text-right font-semibold">0.00</td>
                <td className="text-right font-semibold">0.00</td>
                <td> </td>
                <td> 0.00</td>
              </tr>
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          )}
          {!selectedFuelType && !selectedNozzle && (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total 97 Ron
                </td>
                <td className="text-right font-semibold">0.000</td>
                <td className="text-right font-semibold">0.000</td>
                <td></td>
                <td>0.000</td>
              </tr>
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          )}
          {fuelArr.includes("004-Diesel") ? (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total HSD
                </td>
                <td className="text-right font-semibold">
                  {type == "Liter"
                    ? Number(hsdTotal)?.toFixed(3)
                    : (Number(hsdTotal) / 4.165)?.toFixed(3)}
                </td>
                <td className="text-right font-semibold">0.00</td>
                <td></td>
                <td>0.00</td>
              </tr>
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          ) : (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total HSD
                </td>
                <td className="text-right font-semibold">0.00</td>
                <td className="text-right font-semibold">0.00</td>
                <td> </td>
                <td> 0.00</td>
              </tr>
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          )}
          {fuelArr.includes("005-Premium Diesel") ? (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total PHSD
                </td>
                <td className="text-right font-semibold">
                  {type == "Liter"
                    ? Number(phsdTotal)?.toFixed(3)
                    : (Number(phsdTotal) / 4.165)?.toFixed(3)}
                </td>
                <td className="text-right font-semibold">0.00</td>
                <td></td>
                <td>0.00</td>
              </tr>
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          ) : (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total PHSD
                </td>
                <td className="text-right font-semibold">0.00</td>
                <td className="text-right font-semibold">0.00</td>
                <td> </td>
                <td> 0.00</td>
              </tr>
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          )}
          {!selectedFuelType && !selectedNozzle && (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total C-HSD
                </td>
                <td className="text-right font-semibold">0.000</td>
                <td className="text-right font-semibold">0.000</td>
                <td></td>
                <td>0.000</td>
              </tr>
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          )}
          {!selectedFuelType && !selectedNozzle && (
            <>
              <tr className="bg-gray-200">
                <td colspan={12} className="text-lg">
                  Sub Total C-PHSD
                </td>
                <td className="text-right font-semibold">0.000</td>
                <td className="text-right font-semibold">0.000</td>
                <td></td>
                <td>0.000</td>
              </tr>
              <tr>
                <td className="text-left" colSpan={16}></td>
              </tr>
            </>
          )}
          <tr className="bg-gray-200">
            <td colspan={12} className="text-lg font-semibold">
              Grand Total
            </td>
            <td colspan={1} className="text-center text-lg font-semibold">
              {}
              {type == "Liter"
                ? okData
                    .map((e) => Number(e.receive_balance))
                    .reduce((pv, cv) => pv + cv, 0)
                    ?.toFixed(3)
                : (
                    okData
                      .map((e) => Number(e.receive_balance))
                      .reduce((pv, cv) => pv + cv, 0) / 1.465
                  )?.toFixed(3)}
            </td>
            <td colspan={1} className="text-end  text-lg font-semibold">
              0.00
            </td>
            <td colspan={1} className="text-center text-lg font-semibold"></td>
            <td colspan={1} className="text-center text-lg font-semibold">
              0.00
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="flex p-3  text-[16px] mt-[10px] mb-[50px] items-center justify-start gap-3">
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

export default FuelRecieveTableLittle;
