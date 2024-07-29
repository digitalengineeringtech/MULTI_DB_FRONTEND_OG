import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from "react-export-table-to-excel";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";

function WeeklyTable({
  calenderOne,
  calenderTwo,
  okData,
  capacity,
  isSearch,
  selectedStation,
  language,
}) {
  const [n2, Setn2] = useState(0);
  const [n5, Setn5] = useState(0);
  const [hsd, Sethsd] = useState(0);
  const [phsd, Setphsd] = useState(0);
  const [time, setTime] = useState(0);
  const tRef = useRef();
  const [station, setStation] = useState("");
  const [licenseNo, setLicenseNo] = useState("");

  useEffect(() => {
    let ninety2 = 0;
    let ninety5 = 0;
    let diesel = 0;
    let premium = 0;
    let stationName = "";
    let license = "";

    console.log(okData, ".//.");

    const Time =
      new Date(calenderTwo.getDate()) - new Date(calenderOne.getDate());

    setTime(Time);

    okData.forEach((obj) => {
      stationName = obj.stationDetailId.name;
      license = obj.stationDetailId.lienseNo;
      if (obj.fuelType === "005-Premium Diesel") {
        premium += obj.saleLiter;
      }
      if (obj.fuelType === "004-Diesel") {
        diesel += obj.saleLiter;
      }
      if (obj.fuelType === "001-Octane Ron(92)") {
        ninety2 += obj.saleLiter;
      }
      if (obj.fuelType === "002-Octane Ron(95)") {
        ninety5 += obj.saleLiter;
      }
    });

    Setn2(ninety2);
    Setn5(ninety5);
    Sethsd(diesel);
    Setphsd(premium);
    setStation(stationName);
    setLicenseNo(license);
  }, [okData, calenderOne, calenderTwo]);

  const state = okData[0]?.stationDetailId.location.split(",");

  const handlePrint = useReactToPrint({
    content: () => tRef.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Weekly Sale Report`,
    sheet: `Weekly Sale Report`,
  });

  return (
    <div className="">
      {okData.length > 0 && (
        <div className="mt-[60px] relative w-full overflow-x-scroll h-[270px]">
          <div className="">
            <table ref={tRef} className="absolute w-[2500px]">
              <thead>
                <tr>
                  {/* <th rowSpan={2}>{language.no}</th> */}
                  <th rowSpan={2}>{language.import_company}</th>
                  <th rowSpan={2}>{language.company_name}</th>
                  <th rowSpan={2}>{language.station_name}</th>
                  {/* <th rowSpan={2}>Location</th> */}
                  <th rowSpan={2}>{language.pprd_license}</th>
                  <th rowSpan={2}>{language.Township}</th>
                  <th rowSpan={2}>{language.State}</th>
                  <th rowSpan={2}>{language.own}</th>
                  <th colSpan={4}>{language.capacity}</th>
                  <th colSpan={4}>
                    {" "}
                    {
                      <p>
                        From {calenderOne.toDateString()} to{" "}
                        {calenderTwo.toDateString()} Balance (Gallon)
                      </p>
                    }
                  </th>
                  <th colSpan={4}>
                    {language.no === "စဉ်" ? (
                      <p>
                        {calenderOne.toDateString()} {language.to}{" "}
                        {calenderTwo.toDateString()} {language.total_sale}
                      </p>
                    ) : (
                      <p>
                        From {calenderOne.toDateString()} to{" "}
                        {calenderTwo.toDateString()} Total Sale Amount (Gallon)
                      </p>
                    )}
                  </th>
                  <th colSpan={4}>{language.average_sale_per_day}</th>
                  <th rowSpan={2}>{language.req}</th>
                  <th rowSpan={2}>{language.Remark}</th>
                </tr>
                <tr>
                  {capacity?.map((e) => (
                    <th>
                      {e?.fuelType == "001-Octane Ron(92)"
                        ? "92 RON"
                        : e?.fuelType == "002-Octane Ron(95)"
                        ? "95 RON"
                        : e?.fuelType == "004-Diesel"
                        ? "HSD"
                        : e?.fuelType == "005-Premium Diesel"
                        ? "PHSD"
                        : ""}
                    </th>
                  ))}
                  {capacity?.map((e) => (
                    <th>
                      {e?.fuelType == "001-Octane Ron(92)"
                        ? "92 RON"
                        : e?.fuelType == "002-Octane Ron(95)"
                        ? "95 RON"
                        : e?.fuelType == "004-Diesel"
                        ? "HSD"
                        : e?.fuelType == "005-Premium Diesel"
                        ? "PHSD"
                        : ""}
                    </th>
                  ))}
                  {capacity?.map((e) => (
                    <th>
                      {e?.fuelType == "001-Octane Ron(92)"
                        ? "92 RON"
                        : e?.fuelType == "002-Octane Ron(95)"
                        ? "95 RON"
                        : e?.fuelType == "004-Diesel"
                        ? "HSD"
                        : e?.fuelType == "005-Premium Diesel"
                        ? "PHSD"
                        : ""}
                    </th>
                  ))}
                  {capacity?.map((e) => (
                    <th>
                      {e?.fuelType == "001-Octane Ron(92)"
                        ? "92 RON"
                        : e?.fuelType == "002-Octane Ron(95)"
                        ? "95 RON"
                        : e?.fuelType == "004-Diesel"
                        ? "HSD"
                        : e?.fuelType == "005-Premium Diesel"
                        ? "PHSD"
                        : ""}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td>1</td> */}
                  <td>Kyaw San Co., ltd.</td>
                  <td>Kyaw San</td>
                  <td>{station}</td>
                  {/* <td>Kyawe Tat Sone Village, Thazi Township</td> */}
                  <td>{licenseNo}</td>
                  <td className=" text-left">{state ? state[0] : "-"}</td>
                  <td className=" text-center">
                    {state ? state[state.length - 1] : "-"}
                  </td>
                  <td className=" text-center">Own Shop</td>
                  {capacity?.map((e) => (
                    <td>{(e.capacity / 4.16).toFixed(3)}</td>
                  ))}
                  {capacity?.map((e) => (
                    <td>{(e.balance / 4.16).toFixed(3)}</td>
                  ))}
                  <td>{n2 ? (n2 / 4.16).toFixed(3) : "0.00"}</td>
                  <td>{n5 ? (n5 / 4.16).toFixed(3) : "0.00"}</td>
                  <td>{hsd ? (hsd / 4.16).toFixed(3) : "0.00"}</td>
                  <td>{phsd ? (phsd / 4.16).toFixed(3) : "0.00"}</td>
                  <td>
                    {time === 0
                      ? (n2 / 4.16).toFixed(3)
                      : (n2 / time / 4.16).toFixed(3)}
                  </td>
                  <td>
                    {time === 0
                      ? (n5 / 4.16).toFixed(3)
                      : (n5 / time / 4.16).toFixed(3)}
                  </td>
                  <td>
                    {time === 0
                      ? (hsd / 4.16).toFixed(3)
                      : (hsd / time / 4.16).toFixed(3)}
                  </td>
                  <td>
                    {time === 0
                      ? (phsd / 4.16).toFixed(3)
                      : (phsd / time / 4.16).toFixed(3)}
                  </td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <div className="flex p-3  text-[16px] mt-[30px] mb-[50px] items-center justify-start gap-3">
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
        </div>
      )}
    </div>
  );
}

export default WeeklyTable;
