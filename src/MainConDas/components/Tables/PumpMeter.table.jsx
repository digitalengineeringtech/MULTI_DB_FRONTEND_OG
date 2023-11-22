import React, { useRef, useState } from 'react'
import { EnglishFuelTypeTotalTabel } from '../../../Language/English/englishFuelTypeTotalTable';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';

function PumpMeterTable({
  title,
  no,
  fuel_type,
  opening,
  closing,
  isue,
  remark,
  toExcel,
  toPrint,
  ninety2_closing,
  ninety2_opening,
  ninety2_total_liter,
  ninety5_opening,
  ninety5_closing,
  ninety5_total_liter,
  phsd_closing,
  phsd_opening,
  phsd_total_liter,
  diesel_closing,
  diesel_opening,
  diesel_total_liter,
  total_liter
}) {

    const tRef = useRef();


  const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: "Pump Meter ",
    sheet: "Pump Meter"
  })

  const generatePDF = useReactToPrint({
    content: () => tRef.current,
    documentTitle:"Pump Meter"
  });

  return (
    <div className='w-[100%] rounded-md p-3'>
          <h3 className='text-2xl font-extralight  mb-5'>{title}</h3>
         <table ref={tRef} className='bg-white'>
  <tr>
    <th className='w-[10%] bg-[#a0a0a0]'>{no}</th>
    <th className='w-[16%] bg-[#a0a0a0]'>{fuel_type}</th>
    <th className='w-[16%] bg-[#a0a0a0]'>{opening}</th>
    <th className='w-[16%] bg-[#a0a0a0]'>{closing}</th>
    <th className='w-[16%] bg-[#a0a0a0]'>{isue}</th>
    <th className='w-[10%] bg-[#a0a0a0]'>{remark}</th>
  </tr>
  <tr>
    <td className='h-[50px]'>1</td>
    <td>001-Octane Ron(92)</td>
    <td>{ninety2_opening}</td>
    <td>{ninety2_closing}</td>
    <td>{ninety2_total_liter}</td>
    <td></td>
  </tr>
  <tr>
    <td className='h-[50px]'>2</td>
    <td>002-Octane Ron(95)</td>
    <td>{ninety5_opening}</td>
    <td>{ninety5_closing}</td>
    <td>{ninety5_total_liter}</td>
    <td></td>
  </tr>
  <tr>
    <td className='h-[50px]'>3</td>
    <td>004-Diesel</td>
    <td>{diesel_opening}</td>
    <td>{diesel_closing}</td>
    <td>{diesel_total_liter}</td>
    <td></td>
  </tr>
  <tr>
    <td className='h-[50px]'>4</td>
    <td>005-Premium Diesel</td>
    <td>{phsd_opening}</td>
    <td>{phsd_closing}</td>
    <td>{phsd_total_liter}</td>
    <td></td>
  </tr>
  <tr>
    <td className='h-[50px]' ></td>
    <td colSpan={3}>Total All</td>
    <td rowSpan={2}>{total_liter}</td>
    <td rowSpan={2}></td>
  </tr>
 
          </table>
        <div className='flex p-3  text-[16px] mt-[10px]  items-center justify-start gap-3'>
        <button onClick={() => onDownload()} className='flex items-center justify-center gap-2 text-md' >{toExcel}<RiFileExcel2Fill size={30} /></button>
        <button onClick={()=>generatePDF()} className='flex items-center justify-center gap-2 text-md' >{toPrint}<AiFillPrinter size={30}/></button>
          </div>
   </div>
  )
}

export default PumpMeterTable