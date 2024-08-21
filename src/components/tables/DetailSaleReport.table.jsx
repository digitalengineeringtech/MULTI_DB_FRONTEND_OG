import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DetailSaleReportTable({
  currentData,
  stationName,
  pageNo,
  start,
  end,
  tableRef,
  totalLength,
  language,
}) {
  const [who, setWho] = useState();

  const user = useSelector((state) => state.login);

  useEffect(() => {
    setWho(user.name);
  }, [user]);

  console.log(tableRef, "reff");

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
      <div class=" px-[20px] mt-[50px]">
        <h2 className="mb-[30px] text-lg">
          {language.start_date === "စတင်ရက်" ? (
            <p>
              {stationName}
              {language.title}
            </p>
          ) : (
            <p>Sale Detail Report of {stationName}</p>
          )}
        </h2>

        <table ref={tableRef} class="text-md report-table">
          <thead className="hidden">
            <tr>
              <th className="text-center text-xl" colSpan={16}>
                Sale Detail Report of {stationName}
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
          </thead>
          <thead>
            <tr>
              <th>
                Sr
                <br />
                No.
              </th>
              <th>{language.Station_name}</th>
              <th width="50">{language.pprd_no}</th>
              <th>{language.Township}</th>
              <th>{language.State}</th>
              <th>{language.sale_date_time}</th>
              <th>{language.vocono}</th>
              <th>{language.vehicle_no}</th>
              {/* <th>{language.purpose_of_use}</th> */}
              <th>{language.cashType}</th>
              <th width="50">{language.nozzle_no}</th>
              <th>{language.fuel_type}</th>
              <th>{language.sale_price}</th>
              <th>{language.total_price}</th>
              <th>{language.sale_liter}</th>
              <th>{language.sale_gallon}</th>
              <th>{language.totalizer_liter}</th>
              {/* <th>{language.totalizer_amount}</th> */}
              {who === "admin" ? (
                <>
                  <th>Device</th>
                  <th>Error</th>
                </>
              ) : (
                <></>
              )}
            </tr>
          </thead>
          <tbody>
            {currentData.map((object, index) => {
              // const date = new Date(object.createAt);
              // const date = new Date(object.createAt);

              // const formattedDate = `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

              const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ];

              const dateObj = new Date(object?.createAt);

              const day = String(dateObj.getUTCDate()).padStart(2, "0");
              const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
              const year = dateObj.getUTCFullYear();

              const time = dateObj?.toISOString().slice(11, 19);

              const formattedDate = `${day}-${month}-${year} ${time}`;
              // const dateObj = new Date(object?.createAt);
              // const day = dateObj?.getUTCDate();
              // const month = months[dateObj.getUTCMonth()];
              // const year = dateObj?.getUTCFullYear();
              // const time = dateObj?.toISOString().slice(11, 19);

              // const formattedDate = `${dateObj.toLocaleDateString(
              //   `fr-CA`
              // )} ${time}`;

              const state = currentData[0]?.stationDetailId.location.split(",");
              return (
                <tr key={index}>
                  {/* <th>{object.stationDetailId.}</th>
                   */}
                  <td className=" text-left">
                    {pageNo ? index + pageNo : index + 1}
                  </td>
                  <td className=" text-left">
                    {object.stationDetailId?.name + state[0]}
                  </td>
                  <td className=" text-center">
                    {object.stationDetailId?.lienseNo}
                  </td>
                  <td className=" text-left">{state[1]}</td>
                  <td className=" text-center">{state[state.length - 1]}</td>
                  <td className=" text-left">{formattedDate}</td>
                  <td className=" text-left">{object?.vocono}</td>
                  <td className=" text-center">{object?.carNo}</td>
                  <td className=" text-start">{object?.vehicleType}</td>
                  <td className=" text-center">Pump/{object?.nozzleNo}</td>
                  {/* <td className=" text-center">
                    {object?.depNo}/{object?.nozzleNo}
                  </td> */}
                  <td className=" text-center">
                    {object?.fuelType == "001-Octane Ron(92)"
                      ? "92 RON"
                      : object?.fuelType == "002-Octane Ron(95)"
                      ? "95 RON"
                      : object?.fuelType == "004-Diesel"
                      ? "HSD"
                      : object?.fuelType == "005-Premium Diesel"
                      ? "PHSD"
                      : ""}
                  </td>
                  <td className="text-right">
                    {object?.salePrice.toLocaleString(undefined, {
                      maximumFractionDigits: 3,
                    })}
                  </td>
                  <td className="text-right">
                    {object?.totalPrice.toLocaleString(undefined, {
                      maximumFractionDigits: 3,
                    })}
                  </td>
                  <td className="text-right">{object?.saleLiter}</td>
                  <td className=" text-right">
                    {(parseFloat(object?.saleLiter) / 4.16).toFixed(3)}
                  </td>
                  <td className="text-right">
                    {object?.devTotalizar_liter?.toFixed(3)}
                  </td>
                  {/* <td className="text-right">
                    {object?.totalizer_amount?.toLocaleString(undefined, {
                      maximumFractionDigits: 3,
                    })}
                  </td> */}
                  {who === "admin" ? (
                    <>
                      {" "}
                      <td className="text-left text-xs uppercase ">
                        {object?.device}
                      </td>
                      <td
                        className={`text-right ${
                          object?.isError ? "bg-red-300" : "bg-green-300"
                        }`}
                      >
                        {object?.isError ? "True" : "False"}
                      </td>
                    </>
                  ) : (
                    <></>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailSaleReportTable;
