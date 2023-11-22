import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';

function SaleSummaryByStation({okData,calenderOne,calenderTwo,language}) {
  const [ninety2LotalLiter, SetNinety2LotalLiter] = useState(0);
  const [ninety5LotalLiter, SetNinety5LotalLiter] = useState(0);
  const [dieselLotalLiter, SetDieselLotalLiter] = useState(0);
  const [phsdLotalLiter, SetphshLotalLiter] = useState(0);
  const [totalLiter, SettotalLiter] = useState(0);
  const [totalPrice, SetTotalPrice] = useState(0);
  const [station, setStation] = useState({
    name:'',
    license:'',
    addres:''
  })
  const tRef = useRef();

  useEffect(() => {



    let ninety2 = 0
    let ninety5 = 0
    let diesel = 0
    let premium = 0
    let totalLiter = 0
    let totalPrice = 0
    let name = ''
    let liNo = ''
    let loca = ''
      
    okData.forEach((obj) => {
      name = obj.stationDetailId.name;
      liNo = obj.stationDetailId.lienseNo;
      loca = obj.stationDetailId.location;
        
      if (obj.fuelType === '001-Octane Ron(92)') {
        ninety2 += obj.saleLiter;
      }
      if (obj.fuelType === '002-Octane Ron(95)') {
          
        ninety5 += obj.saleLiter;
      }
      if (obj.fuelType === '004-Diesel') {
        diesel += obj.saleLiter;
      }
      if (obj.fuelType === '005-Premium Diesel') {
        premium += obj.saleLiter;
      }
      totalPrice += obj.totalPrice;
    });
      
      
    SetNinety2LotalLiter(ninety2)
    SetNinety5LotalLiter(ninety5)
    SetDieselLotalLiter(diesel)
    SetphshLotalLiter(premium)
    SettotalLiter(totalLiter)
    SetTotalPrice(totalPrice)

    setStation({
      name: name,
      license: liNo,
      addres: loca
    })
    
  }, [okData, calenderOne, calenderTwo]);
  

  const handlePrint = useReactToPrint({
    content:()=>tRef.current
  })

   const {onDownload}  = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Daily Sale Summary by Station Nozzle Report`,
    sheet:  `Daily Sale Summary by Station Nozzle Report`
   })


  return (
    <>
    <table ref={tRef} className='mt-[50px]'>
  <tr>
    <th>{language.station_name}</th>
    <th>{language.license_no}</th>
    <th>{language.address}</th>
    <th>{language.date_time}</th>
    <th>Octane Ron(92) ({language.liter})</th>
    <th>Octane Ron(95) ({language.liter})</th>
    <th>Diesel ({language.liter})</th>
    <th>Premium Diesel ({language.liter})</th>
    <th>{language.total_price}({language.kyat})</th>
  </tr>
  <tr>
    <td>{station.name}</td>
    <td>{station.license}</td>
    <td>{station.addres}</td>
    <td>{calenderOne?calenderOne.toDateString():''} | {calenderTwo?calenderTwo.toDateString():''}</td>
           <td>{ninety2LotalLiter?ninety2LotalLiter.toFixed(3):"-"}</td>
          <td>{ninety5LotalLiter?ninety5LotalLiter.toFixed(3):"-"}</td>
          <td>{dieselLotalLiter?dieselLotalLiter.toFixed(3):"-"}</td>
          <td>{phsdLotalLiter ? phsdLotalLiter.toFixed(3) : "-"}</td>       
          <td>{totalPrice ? totalPrice : "-"}</td>   
          
  </tr>
      </table>
         <div className='flex p-3  text-[16px] mt-[30px] mb-[50px] items-center justify-start gap-3'>
        <button onClick={() => onDownload()} className='flex items-center justify-center gap-2 text-md' >{language.toExcel}<RiFileExcel2Fill size={30} /></button>
        <button onClick={handlePrint} className='flex items-center justify-center gap-2 text-md' >{language.toPrint}<AiFillPrinter size={30}/></button>
                 </div>
    </>
  )
}

export default SaleSummaryByStation