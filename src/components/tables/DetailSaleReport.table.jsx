import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DetailSaleReportTable({
  currentData,
  stationName,
  tableRef,
  language,
}) {
  const [who, setWho] = useState();

  const user = useSelector((state) => state.login);

  useEffect(() => {
    setWho(user.name);
  }, [user]);

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
            <p>Sale Detail Report Table of {stationName}</p>
          )}
        </h2>

        <table ref={tableRef} class="text-md report-table">
          <thead>
            <tr>
              <th>No</th>
              <th>{language.Station_name}</th>
              <th>{language.pprd_no}</th>
              <th>{language.Township}</th>
              <th>{language.State}</th>
              <th>{language.sale_date_time}</th>
              <th>{language.vocono}</th>
              <th>{language.vehicle_no}</th>
              {/* <th>{language.purpose_of_use}</th> */}
              <th>{language.cashType}</th>
              <th>{language.nozzle_no}</th>
              <th>{language.fuel_type}</th>
              <th>{language.sale_price}</th>
              <th>{language.total_price}</th>
              <th>{language.sale_liter}</th>
              <th>{language.sale_gallon}</th>
              <th>{language.totalizer_liter}</th>
              {/* <th>{language.totalizer_amount}</th> */}
              {who === "admin" ? (
                <>
                  {" "}
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
              const day = dateObj?.getUTCDate();
              const month = months[dateObj.getUTCMonth()];
              const year = dateObj?.getUTCFullYear();
              const time = dateObj?.toISOString().slice(11, 19);

              const formattedDate = `${day}-${month}-${year} ${time}`;
              const state = currentData[0]?.stationDetailId.location.split(",");
              return (
                <tr key={index}>
                  {/* <th>{object.stationDetailId.}</th>
                   */}
                  <td className=" text-left">
                    {object?.vocono.split("/")[3] -
                      (object?.vocono.split("/")[3] - (index + 1))}
                  </td>

                  <td className=" text-left">{object.stationDetailId?.name}</td>
                  <td className=" text-center">
                    {object.stationDetailId?.lienseNo}
                  </td>
                  <td className=" text-left">{state[0]}</td>
                  <td className=" text-center">{state[state.length - 1]}</td>
                  <td className=" text-left">{formattedDate}</td>
                  <td className=" text-left">{object?.vocono}</td>
                  <td className=" text-center">{object?.carNo}</td>
                  <td className=" text-center">{object?.cashType}</td>
                  <td className=" text-center">{object?.nozzleNo}</td>
                  <td className=" text-left">{object?.fuelType}</td>
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
                    {object?.totalizer_liter?.toFixed(3)}
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
