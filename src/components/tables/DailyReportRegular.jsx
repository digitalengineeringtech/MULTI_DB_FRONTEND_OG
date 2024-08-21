import React from 'react'

function DailyReportRegularTable({currentData}) {
  return (
    <div class=" px-[20px] mt-[50px]">
        <h2 className='mb-[30px] text-lg'>Daily Sale Report of </h2>

  <table  class="text-md report-table">
      <thead>
      <tr>
      <th>PPRD License No.</th>
      <th>Vocno</th>
      <th>Sale Date Time</th>
      <th>Vehicle No</th>
      <th>Purpose of Use</th>
      <th>Nozzle Number</th>
      <th>Fuel Type</th>
      <th>Sale Gallon</th>
      <th>Sale Liter</th>
      <th>Sale Price</th>
      <th>Total Price</th>
      <th>Totalizer Liter</th>
      <th>Totalizer Amount</th>
      
      
    </tr>
    </thead>
          <tbody>
                      {
            currentData.map((object, index) => {
             
           const date = new Date(object.createAt);
           const formattedDate = `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

              return <tr  key={index}>
                {/* <th>{object.stationDetailId.}</th>
                 */}
                <td>{object.stationDetailId.lienseNo}</td>
                <td>{object.vocono}</td>
                <td>{formattedDate}</td>
                <td>{object.carNo}</td>
                <td>{object.vehicleType}</td>
                <td>{object.nozzleNo}</td>
                <td>{object.fuelType}</td>
                <td>{object.saleLiter}</td>
                <td>{object.saleLiter}</td>
                <td>{object.salePrice}</td>
                <td>{object.totalPrice}</td>
                <td>{object.devTotalizar_liter}</td>
                <td>{object.devTotalizar_liter}</td>
              </tr>
            })
    }
   </tbody>
  </table>
</div>
  )
}

export default DailyReportRegularTable