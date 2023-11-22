import React, { useRef } from 'react'
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';
import { useReactToPrint } from 'react-to-print';
import { useDownloadExcel } from 'react-export-table-to-excel';
import PaginatorComponent from '../PageComponents/PaginatorComponent';

function StockBalanceTable({ okData,tank,language, onPageChange,
  totalLength,
  first,
  rows }) {
  const tRef = useRef();


  const handlePrint = useReactToPrint({
    content: () => tRef.current,
  });



   const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Fuel Balance Report`,
    sheet:  `Fuel Balance Report`
  })

  return (
    <>
      <div className='mb-[150px]'>
              <table ref={tRef} className='mt-[40px]'>
            <thead>
               <tr>
      <th className='w-[5.33%]'>{language.no}</th>
      <th className='w-[12.33%]'>{language.tank}</th>
      <th className='w-[8.33%]' >{language.opening}</th>
      <th className='w-[8.33%]'>{language.receive}</th>
      <th className='w-[8.33%]'>{language.issue}</th>
      <th className='w-[8.33%]'>{language.adjust}</th>
      <th className='w-[8.33%]'>{language.balance}</th>
      <th className='w-[8.33%]'>{language.today_tank}</th>
      <th className='w-[8.33%]'>{language.yesterday_tank}</th>
      <th className='w-[8.33%]'>{language.total_issue}</th>
      <th className='w-[8.33%]'>{language.today_gl}</th>
      <th className='w-[8.33%]'>{language.total_gl}</th>
                </tr>    
            </thead>
          {
            okData.map((e, index) => (
              <tr >
            <td className='text-left'>{index + 1}</td>
            <td className='text-left'>{e.tank}</td> 
            <td className='text-left'>{e.opening}</td>
            <td className='text-left'>{e.receive}</td>
            <td className='text-right'>{e.issue}</td>
            <td className='text-right'>{e.adjust}</td>
            <td className='text-right'>{e.balance}</td>
            <td className='text-right'>{e.todayTank}</td>
            <td className='text-right'>{e.yesterdayTank}</td>
            <td className='text-right'>{e.totalIssue}</td>
            <td className='text-right'>{e.todayGL}</td>
            <td className='text-right'>{e.totalGL}</td>
            </tr> 
            ))
        }
              </table>
         <PaginatorComponent language={language} totalLength={totalLength} onPageChange={onPageChange} first={first} rows={rows} />
         <div className='flex text-[16px] p-3 mt-[30px] mb-[50px] items-center justify-start gap-3'>
          <button onClick={() => onDownload()} className='flex items-center justify-center gap-2 text-md' >{language.toExcel}<RiFileExcel2Fill size={30} /></button>
          <button onClick={handlePrint} className='flex items-center justify-center gap-2 text-md' >{language.toPrint}<AiFillPrinter size={30}/></button>
          </div>
            </div>

    </>
  )
}

export default StockBalanceTable