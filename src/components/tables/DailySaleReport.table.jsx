import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


function DailySaleReportTable({ currentData, stationName, tableRef, language }) {

  const [who, setWho] = useState();
  

   const user = useSelector((state) => state.login);
 
  useEffect(() => {
    setWho(user.name);
  },[user])

  return (
      <>
       <div class=" px-[20px] mt-[50px]">
        <h2 className='mb-[30px] text-lg'>
          {
            language.start_date === "စတင်ရက်" ? <p>{stationName}{language.title}</p>:<p>Daily Sale Report Table of {stationName}</p>
          }
        </h2>

  <table ref={tableRef} class="text-md report-table">
      <thead>
      <tr>
      <th>{language.pprd_no}</th>
      <th>{language.vocono}</th>
      <th>{language.sale_date_time}</th>
      <th>{language.vehicle_no}</th>
      <th>{language.purpose_of_use}</th>
      <th>{language.nozzle_no}</th>
      <th>{language.fuel_type}</th>
      <th>{language.sale_gallon}</th>
      <th>{language.sale_liter}</th>
      <th>{language.sale_price}</th>
      <th>{language.total_price}</th>
      <th>{language.totalizer_liter}</th>
      <th>{language.totalizer_amount}</th>
    {
      who === "admin"?<>  <th>Device</th>
      <th>Error</th></>:<></>
    }
      
      
    </tr>
    </thead>
          <tbody>
                      {
              currentData.map((object, index) => {
             
            // const date = new Date(object.createAt);
                // const date = new Date(object.createAt);
            
              
              
                // const formattedDate = `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;


                const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const dateObj = new Date(object?.createAt);
  const day = dateObj?.getUTCDate();
  const month = months[dateObj.getUTCMonth()];
  const year = dateObj?.getUTCFullYear();
  const time = dateObj?.toISOString().slice(11, 19);
         
  const formattedDate = `${day}-${month}-${year} ${time}`;

              return <tr  key={index}>
                {/* <th>{object.stationDetailId.}</th>
                 */}
                <td>{object.stationDetailId?.lienseNo}</td>
                <td>{object?.vocono}</td>
                <td>{formattedDate}</td>
                <td>{object?.carNo}</td>
                <td>{object?.vehicleType}</td>
                <td>{object?.nozzleNo}</td>
                <td>{object?.fuelType}</td>
                <td className=' text-right'>{((parseFloat(object?.saleLiter)/4.16)).toFixed(3)}</td>
                <td className='text-right'>{object?.saleLiter}</td>
                <td className='text-right'>{object?.salePrice.toLocaleString(undefined, { maximumFractionDigits: 3 })}</td>
                <td className='text-right'>{object?.totalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 })}</td>
                <td className='text-right'>{object?.totalizer_liter?.toFixed(3)}</td>
                <td className='text-right'>{object?.totalizer_amount?.toLocaleString(undefined, { maximumFractionDigits: 3 })}</td>
                {
                  who === "admin"?<>    <td className='text-left text-xs uppercase '>{object?.device}</td>
                <td className={`text-right ${object?.isError?"bg-red-300":"bg-green-300"}`}>{object?.isError?"True":"False"}</td></>:<></>
            }
              </tr>
            })
    }
   </tbody>
  </table>
</div>
      </>

  )
}

export default DailySaleReportTable