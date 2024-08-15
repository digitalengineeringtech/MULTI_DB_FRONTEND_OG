import React from "react";

function FuelRecieveTableLittle({ okData, tableRef }) {
  return (
    <div className="bg-white">
      <h3 className="mt-[30px]"></h3>
      <table className="mt-5" ref={tableRef}>
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
            Tank <br /> Capacity <br /> ( Gallon )
          </th>
          <th width="85">
            Tank <br /> Opening <br /> ( Gallon )
          </th>
          <th width="85">
            Tank <br /> Received <br /> ( Gallon )
          </th>
          <th width="85">
            Sale <br /> ( Gallon )
          </th>
          <th width="85">
            Tank <br /> Closing <br /> ( Gallon )
          </th>
          <th width="85">
            Gain/ <br /> Lose <br /> ( Gallon )
          </th>
        </tr>
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
            <tr key={index}>
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
              <td>{(14580 / 4.546).toFixed(3)}</td>
              <td>
                {item.opening ? (item.opening / 4.546)?.toFixed(3) : "00.0"}
              </td>
              <td>{(item.receive_balance / 4.546)?.toFixed(3)}</td>
              <td>00.0</td>
              <td>{(item.tank_balance / 4.546)?.toFixed(3)}</td>
              <td>00.0</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default FuelRecieveTableLittle;
