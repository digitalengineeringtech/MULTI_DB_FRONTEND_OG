import React, { useRef } from 'react'
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter, AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillWrenchAdjustableCircleFill } from 'react-icons/bs';
import StockInputComponent from '../oneStationComponents/StockInputComponent';
import PaginatorComponent from '../../../components/PageComponents/PaginatorComponent';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';

function StockBalanceTableMain({
  language,
  okData,
  setNavigation,
  edit,
  kk,
  handleAdjust,
  onPageChange,
  totalLength,
  first,
  rows
}) {

const tRef = useRef();


  const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: "Stock Balance",
    sheet: "Stock Balance"
  })

  const generatePDF = useReactToPrint({
    content: () => tRef.current,
    documentTitle:"Fuel Type Total"
  });

  return (
      <>
          <div className='w-[97%] rounded-md p-3'>
   <h3 className='text-2xl font-extralight  mb-5'>{language.stock_balance_report}</h3>
  <div className='bg-white'>
           <table ref={tRef} className='bg-white'>
  <tr>
    <th className='w-[4%] bg-[#a0a0a0]'>{language.no}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.tank}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.opening}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.receive}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.issue}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.adjust}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.balance}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.today_tank}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.yesterday_tank}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.total_issue}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.today_gl}</th>
    <th className='w-[7.6%] bg-[#a0a0a0]'>{language.total_gl}</th>
   {
    edit ? <th className='w-[7.6%] bg-[#a0a0a0]'>Adjust</th>:""
   }
  </tr>
   {
            okData.map((e, index) => (
              <tr>
            <td className='text-center h-[60px]'>{index + 1}</td>
            <td className='text-left'>{e.tank}</td> 
            <td className='text-right'>{e.opening}</td>
            <td className='text-right'>{e.receive}</td>
            <td className='text-right'>{e.issue}</td>
            <td className='text-right'>{e.adjust}</td>
            <td className='text-right'>{e.balance}</td>
            <td className='text-right'>{e.todayTank}</td>
            <td className='text-right'>{e.yesterdayTank}</td>
            <td className='text-right'>{e.totalIssue}</td>
            <td className='text-right'>{e.todayGL}</td>
            <td className='text-right p-3'>{e.totalGL}</td>
          {
            edit?  <td className='text-right '>
            <p onClick={()=>{handleAdjust(e)}} className='bg-blue-700 hover:bg-green-700 cursor-pointer text-white p-2 rounded gap-2 flex items-center justify-center'>
            <BsFillWrenchAdjustableCircleFill/>
            Adjust</p>
            </td>:""
          }
            </tr> 
            ))
        }
        </table>
          <PaginatorComponent language={language} totalLength={totalLength} onPageChange={onPageChange} first={first} rows={rows} />
  </div>
        <div className='flex p-3  text-[16px] mt-[10px]  items-center justify-between gap-3'>
        <div className='flex p-3  text-[16px]   items-center justify-start gap-3'>
              <button  className='flex items-center justify-center gap-2 text-md'  onClick={() => onDownload()}>{language.toExcel}<RiFileExcel2Fill size={30} /></button>
        <button  className='flex items-center justify-center gap-2 text-md' onClick={()=>generatePDF()}>{language.toPrint}<AiFillPrinter size={30}/></button>
        </div>
          {
            kk? "":<p onClick={()=>setNavigation(7)} className='flex group duration-500 items-center cursor-pointer gap-3'>{language.to_adjust}<AiOutlineArrowRight className=' group-hover:ml-5 duration-500'/>
              </p>
             }
          </div>
          </div>
      </>
  )
}

export default StockBalanceTableMain