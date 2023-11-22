import React, { useRef } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';
import { title } from 'process';

function FuelInTable({ okData, language }) {
  const tRef = useRef();


  const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: "Fuel in report",
    sheet: "Fuel in report"
  })

  const generatePDF = useReactToPrint({
    content: () => tRef.current,
    documentTitle:"Fuel in report"
  });
  return (
     <>
       <div class=" px-[20px] mt-[50px]">

  <table ref={tRef}  class="text-md report-table">
      <thead>
      <tr>
      <th>{language.receive_date}</th>
      <th>{language.station}</th>
      <th>{language.location}</th>
      <th>{language.fuel_in_code}</th>
      <th>{language.fuel_type}</th>
      <th>{language.driver}</th>
      <th>{language.bowser_no}</th>
      <th>{language.tank}</th>
      <th>{language.tank_capacity}</th>
      <th>{language.recive_volume}({language.liter})</th>
      <th>{language.balance}</th>
      <th>{language.recive_volume}({language.gallon})</th>
    </tr>
    </thead>
          <tbody>
                      {
              okData.map((object, index) => {

              return <tr  key={index}>
                {/* <th>{object.stationDetailId.}</th>
                 */}
                <td>{object.receive_date}</td>
                <td>{object.stationId.name}</td>
                <td>{object.stationId.location}</td>
                <td>{object.fuel_in_code}</td>
                <td>{object.fuel_type}</td>
                <td className='text-left'>{object.driver}</td>
                <td>{object.bowser}</td>
                <td>{object.tankNo}</td>
                <td>14580</td>
                <td className='text-right'>{(object.recive_balance).toFixed(3)}</td>
                <td className='text-right'>{(object.tank_balance).toFixed(3)}</td>
                <td className=' text-right'>{(object.recive_balance / 4.546).toFixed(3)}</td>
              </tr>
            })
    }
   </tbody>
        </table>
         <div className='flex p-3 mt-[30px] mb-[30px] items-center justify-start gap-3'>
          <button className='flex items-center justify-center gap-2 text-md' onClick={() => onDownload()}>{language.toExcel} <RiFileExcel2Fill size={30} /></button>
      <button className='flex items-center justify-center gap-2 text-md' onClick={()=>generatePDF()}>{language.toPrint} <AiFillPrinter size={30} /></button>
    </div>
</div>
      </>
  )
}

export default FuelInTable