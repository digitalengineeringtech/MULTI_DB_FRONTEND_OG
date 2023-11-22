import React, { useRef, useState } from 'react'
import { EnglishFuelTypeTotalTabel } from '../../../Language/English/englishFuelTypeTotalTable';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';

function StationUseTable({
    title,
    no,
    fuel_type,
    liter,
    price,
    amount,
    remark,
    toExcel,
    toPrint,
    ninety2Liter,
    ninety2Price,
    ninety5Liter,
    ninety5Price,
    dieselLiter,
    dieselPrice,
    phsdLiter,
    phsdPrice,
}) {
    const [language, setLanguage] = useState(EnglishFuelTypeTotalTabel);

    const tRef = useRef();


  const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: "Station Use",
    sheet: "Station Use"
  })

  const generatePDF = useReactToPrint({
    content: () => tRef.current,
    documentTitle:"Station Use"
  });

  return (
         <div className='w-[100%]  rounded-md p-3'>
                <h3 className='text-2xl font-extralight  mb-5'>{title}</h3>
            <table ref={tRef} className='bg-white'>
                <tr>
                    <th className='w-[10.6%] bg-[#a0a0a0]'>{no}</th>
                    <th className='w-[28.6%] bg-[#a0a0a0]'>{fuel_type}</th>
                    <th className='w-[16.6%] bg-[#a0a0a0]'>{liter}</th>
                    <th className='w-[16.6%] bg-[#a0a0a0]'>{price}</th>
                    <th className='w-[16.6%] bg-[#a0a0a0]'>{amount}</th>
                    <th className='w-[10.6%] bg-[#a0a0a0]'>{remark}</th>
                </tr>
                <tr>
                    <td className='h-[50px]'>1</td>
                    <td>001-Octane Ron(92)</td>
                     <td>{ninety2Liter}</td>
                    <td>{ninety2Price}</td>
                    <td>{(ninety2Liter * ninety2Price).toFixed(3)}</td>
                    <td></td>
                </tr>
                <tr>
                    <td className='h-[50px]'>2</td>
                    <td>002-Octane Ron(95)</td>
                    <td>{ninety5Liter}</td>
                    <td>{ninety5Price}</td>
                    <td>{(ninety5Liter * ninety5Price).toFixed(3)}</td>
                    <td></td>
                </tr>
                <tr>
                    <td className='h-[50px]'>3</td>
                    <td>004-Diesel</td>
                     <td>{dieselLiter}</td>
                    <td>{dieselPrice}</td>
                    <td>{(dieselLiter * dieselPrice).toFixed(3)}</td>
                    <td></td>
                </tr>
                <tr>
                    <td className='h-[50px]'>4</td>
                    <td>005-Premium Diesel</td>
                    <td>{phsdLiter}</td>
                    <td>{phsdPrice}</td>
                    <td>{(phsdLiter * phsdPrice).toFixed(3)}</td>
                    <td></td>
                </tr>
                <tr>
                    <td className='h-[50px]' ></td>
                    <td colSpan={3}>Total All</td>
                    <td rowSpan={2}>{
                   ((ninety2Liter * ninety2Price) +
                   (ninety5Liter * ninety5Price) +
                   (dieselLiter * dieselPrice)+
                   (phsdLiter * phsdPrice)).toFixed(3)
                    }</td>
                    <td rowSpan={2}></td>
                </tr>
 
            </table>
             <div className='flex p-3  text-[16px] mt-[10px] items-center justify-start gap-3'>
              <button className='flex items-center justify-center gap-2 text-md' onClick={() => onDownload()}>{toExcel}<RiFileExcel2Fill size={30} /></button>
              <button onClick={()=>generatePDF()} className='flex items-center justify-center gap-2 text-md' >{toPrint}<AiFillPrinter size={30}/></button>
          </div>
        </div>
  )
}

export default StationUseTable