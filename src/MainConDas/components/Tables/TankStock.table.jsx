import React from 'react'
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';

function TankStockTable({
    title,
    no,
    tankNo,
    opening,
    isue,
    balance,
    today_tank,
    yesterday_tank,
    tank_isue,
    today_gl,
    monthly_gl,
    toExcel,
    toPrint
}) {
return (
     <div className='w-[100%]  rounded-md p-3'>
                <h3 className='text-2xl font-extralight  mb-5'>{title}</h3>
            <table className='bg-white'>
                <tr>
                    <th className='w-[5%] bg-[#a0a0a0]'>{no}</th>
                    <th className='w-[10%] bg-[#a0a0a0]'>{tankNo}</th>
                    <th className='w-[10%] bg-[#a0a0a0]'>{opening}</th>
                    <th className='w-[10%] bg-[#a0a0a0]'>{isue}</th>
                    <th className='w-[10%] bg-[#a0a0a0]'>{balance}</th>
                    <th className='w-[10%] bg-[#a0a0a0]'>{today_tank}</th>
                    <th className='w-[10%] bg-[#a0a0a0]'>{yesterday_tank}</th>
                    <th className='w-[10%] bg-[#a0a0a0]'>{tank_isue}</th>
                    <th className='w-[12%] bg-[#a0a0a0]'>{today_gl}</th>
                    <th className='w-[13%] bg-[#a0a0a0]'>{monthly_gl}</th>
                </tr>
                <tr>
                    <td className='h-[50px]'>1</td>
                    <td>001-Octane Ron(92)</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='h-[50px]'>2</td>
                    <td>002-Octane Ron(95)</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='h-[50px]'>3</td>
                    <td>004-Diesel</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='h-[50px]'>4</td>
                    <td>005-Premium Diesel</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='h-[50px]' ></td>
                    <td colSpan={3}>Total All</td>
                    <td rowSpan={2}>0</td>
                    <td rowSpan={2}></td>
                </tr>
 
            </table>
             <div className='flex p-3  text-[16px] mt-[10px] items-center justify-start gap-3'>
            <button className='flex items-center justify-center gap-2 text-md' >{toExcel}<RiFileExcel2Fill size={30} /></button>
        <button  className='flex items-center justify-center gap-2 text-md' >{toPrint}<AiFillPrinter size={30}/></button>
          </div>
        </div>
  )
}

export default TankStockTable