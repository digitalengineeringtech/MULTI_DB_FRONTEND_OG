import React from "react";

function FuelRecieveTableLittle({ okData }) {
  return (
    <div className="bg-white">
      <h3 className="mt-[30px]"></h3>
      <table className="mt-5">
        <tr>
          <th>
            Sir <br />
            No.
          </th>
          <th>Station Name</th>
          <th>
            PPRD <br />
            License <br /> No.
          </th>
          <th>Township</th>
          <th>State/Division</th>
          <th>Date & Time</th>
          <th>Bowser No</th>
          {/* <th>Driver</th> */}
          <th>Fuel Type</th>
          <th>
            Tank <br /> No.
          </th>
          <th>
            Tank <br /> Capacity <br /> ( Gallon )
          </th>
          <th>
            Tank <br /> Opening <br /> ( Gallon )
          </th>
          <th>
            Tank <br /> Received <br /> ( Gallon )
          </th>
          <th>
            Sale <br /> ( Gallon )
          </th>
          <th>
            Tank <br /> Closing <br /> ( Gallon )
          </th>
          <th>
            Gain/ <br /> Lose <br /> ( Gallon )
          </th>
        </tr>
        {okData.map((item, index) => {
          const dateObj = new Date(item?.createAt);
          // const day = dateObj?.getUTCDate();
          // const month = months[dateObj.getUTCMonth()];
          // const year = dateObj?.getUTCFullYear();
          const time = dateObj?.toISOString().slice(11, 19);
          const formattedDate = `${dateObj.toLocaleDateString(
            `fr-CA`
          )} ${time}`;
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.stationId.name}</td>
              <td>{item.stationId.lienseNo}</td>
              <td>{item.stationId.location.split(",")[1]}</td>
              <td>{item.stationId.location.split(",")[2]}</td>
              <td>{formattedDate}</td>
              <td>{item.bowser}</td>
              <td>{item.fuel_type}</td>
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
