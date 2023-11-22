import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';

function WeeklyTable({ calenderOne, calenderTwo,okData,isSearch,selectedStation,language }) {
    const [n2, Setn2] = useState(0);
    const [n5, Setn5] = useState(0);
    const [hsd, Sethsd] = useState(0);
    const [phsd, Setphsd] = useState(0);
    const [time, setTime] = useState(0);
    const tRef  = useRef();
  const [station, setStation] = useState('');
  const [licenseNo, setLicenseNo] = useState('');

    useEffect(() => {
        let ninety2 = 0
    let ninety5 = 0
    let diesel = 0
    let premium = 0
      let stationName = '';
      let license = '';
        
        const Time = new Date(calenderTwo.getDate()) - new Date(calenderOne.getDate());

        setTime(Time);
       
        
      okData.forEach((obj) => {
        stationName = obj.stationDetailId.name;
        license = obj.stationDetailId.lienseNo;
             if (obj.fuelType === "005-Premium Diesel") {
       premium += obj.saleLiter
      }
      if (obj.fuelType === "004-Diesel") {
        diesel += obj.saleLiter
      }
      if (obj.fuelType === "001-Octane Ron(92)") {
        ninety2 += obj.saleLiter
      }
      if (obj.fuelType === "002-Octane Ron(95)") {
        ninety5 += obj.saleLiter
      }
        })

        Setn2(ninety2);
        Setn5(ninety5);
        Sethsd(diesel);
      Setphsd(premium);
      setStation(stationName);
      setLicenseNo(license);
        
    }, [okData, calenderOne, calenderTwo])
  
  
  const handlePrint = useReactToPrint({
    content:()=>tRef.current
  })

   const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Weekly Sale Report`,
    sheet:  `Weekly Sale Report`
   })

  return (
      <div className='mt-[60px]'>
          <table ref={tRef}>
              <thead>
                  <tr>
                      <th rowSpan={2}>{language.no}</th>
                      <th rowSpan={2}>{language.import_company}</th>
                      <th rowSpan={2}>{language.company_name}</th>
                      <th rowSpan={2}>{language.station_name}</th>
                      {/* <th rowSpan={2}>Location</th> */}
                      <th rowSpan={2}>{language.pprd_license}</th>
                      <th colSpan={4}>
                        {
                language.no === "စဉ်" ? <p>{calenderOne.toDateString()}  {language.to} {calenderTwo.toDateString()} {language.total_sale}</p>:<p>Total Sale  from  {calenderOne.toDateString()}  to {calenderTwo.toDateString()}</p>
                        }
                        </th>
                      <th colSpan={4}>{language.average_sale_per_day}</th>


                  </tr>
                  <tr>
                      <th>001-Octane Ron(92) (Li)</th>
                      <th>002-Octane Ron(95) (Li)</th>
                      <th>004-Diesel (Li)</th>
                      <th>005-Premium Diesel (Li)</th>
                       <th>001-Octane Ron(92) (Li)</th>
                      <th>002-Octane Ron(95) (Li)</th>
                      <th>004-Diesel (Li)</th>
                      <th>005-Premium Diesel (Li)</th>


                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>Kyaw San</td>
                      <td>Kyaw San</td>
                      <td>{station}</td>
                      {/* <td>Kyawe Tat Sone Village, Thazi Township</td> */}
                      <td>{licenseNo}</td>
                      <td>{n2?n2.toFixed(3):'-'}</td>
                      <td>{n5?n5.toFixed(3):"-"}</td>
                      <td>{hsd?hsd.toFixed(3):"-"}</td>
                      <td>{phsd?phsd.toFixed(3):'-'}</td>
                      <td>{time === 0 ? n2.toFixed(3):(n2 / time).toFixed(3)}</td>
                      <td>{time === 0 ? n5.toFixed(3):(n5 / time).toFixed(3)}</td>
                      <td>{time === 0 ? hsd.toFixed(3):(hsd / time).toFixed(3)}</td>
                      <td>{time === 0 ? phsd.toFixed(3):(phsd / time).toFixed(3)}</td>


                  </tr>
              </tbody>
      </table>
         <div className='flex p-3  text-[16px] mt-[30px] mb-[50px] items-center justify-start gap-3'>
        <button onClick={() => onDownload()} className='flex items-center justify-center gap-2 text-md' >{language.toExcel}<RiFileExcel2Fill size={30} /></button>
        <button onClick={handlePrint} className='flex items-center justify-center gap-2 text-md' >{language.toPrint}<AiFillPrinter size={30}/></button>
          </div>
    </div>
  )
}

export default WeeklyTable