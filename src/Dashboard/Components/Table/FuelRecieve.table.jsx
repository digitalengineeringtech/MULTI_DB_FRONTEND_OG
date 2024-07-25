import React from "react";

function FuelRecieveTableLittle({ okData }) {
  return (
    <div className="bg-white">
      <h3 className="mt-[30px]"></h3>
      <table className="mt-5">
        <tr>
          <th>Receive Date</th>
          <th>Station</th>
          <th>Fuel In Code</th>
          <th>Driver</th>
          <th>Bowser No</th>
          <th>Tank</th>
          <th>Tank Capacity</th>
          <th>Receive Volume(Li)</th>
          <th>Balance</th>
          <th>Receive Volume(Li)</th>
        </tr>
        {okData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.receive_date}</td>
              <td>{item.stationId.name}</td>
              <td>{item.fuel_in_code}</td>
              <td>{item.driver}</td>
              <td>{item.bowser}</td>
              <td>{item.tankNo}</td>
              <td>14580</td>
              <td>{item.recive_balance?.toFixed(3)}</td>
              <td>{item.tank_balance?.toFixed(3)}</td>
              <td>{item.recive_balance?.toFixed(3)}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default FuelRecieveTableLittle;
