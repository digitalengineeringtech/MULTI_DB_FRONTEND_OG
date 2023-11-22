import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';

function TestTable({ calenderOne, calenderTwo,okData,fuel92Balance,fuel95Balance,fuelDieselBalance,fuelPremiumBalance,endDate,startDate,fuelUnit,language,selectedStation,isSearch}) {
    const [n2, Setn2] = useState(0);
    const [n5, Setn5] = useState(0);
    const [hsd, Sethsd] = useState(0);
    const [phsd, Setphsd] = useState(0);
    const [time, setTime] = useState(0);
  const [station, setStation] = useState('');
  const [stationLocation, setStationLocation] = useState('');
  const tRef = useRef();

  useEffect(() => {
    let ninety2 = 0
    let ninety5 = 0
    let diesel = 0
    let premium = 0
    let stationName = ''
    let staLoc = ''
        
    const Time = new Date(calenderTwo.getDate()) - new Date(calenderOne.getDate());

    setTime(Time);

       
        
    okData.forEach((obj) => {
      stationName = obj.stationDetailId.name;
      staLoc = obj.stationDetailId.location
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
    setStationLocation(staLoc);
        
  }, [okData, calenderOne, calenderTwo]);


   const handlePrint = useReactToPrint({
    content:()=>tRef.current
  })

  const { onDownload } = useDownloadExcel({
    currentTableRef:tRef.current,
    filename: `Online Monitoring Sale Report`,
    sheet:  `Online Monitoring Sale Report`
   })

  return (
    <>
     <div  className='mt-[60px]  pb-[30px] overflow-x-scroll '>
          <table ref={tRef} className='text-[14px]'>
                  <tr>
                      <th rowSpan={2}>{language.no}</th>
                      <th rowSpan={2}>{language.importCompany}</th>
                      <th rowSpan={2}>{language.companyName}</th>
                      <th rowSpan={2}>{language.stationName}</th>
                      <th rowSpan={2}>{language.location}</th>
                      <th rowSpan={2}>{language.divisionState}</th>
                      <th rowSpan={2}>{language.pprdLicense}</th>
                      <th rowSpan={2}>{language.ownShopPartnerShop}</th>
                      <th className=' h-[60px]' colSpan={5}>{language.storageCapacity} ({fuelUnit}) </th>
                      <th colSpan={5}> {endDate} {language.fuelBalance} ({fuelUnit})</th>
            {
              language.no === "စဉ်"?  <th colSpan={5}>{startDate} မှ {endDate} အထိရောင်းအား ({fuelUnit})</th>:<th colSpan={5}>Sales from {startDate} to {endDate} ({fuelUnit})</th>
            }
                      <th colSpan={5}>{language.averageSale} ({fuelUnit})</th>
                      <th rowSpan={2}>{language.remark}</th>


                  </tr>
                  <tr>
                      <th>92</th>
                      <th>95</th>
                      <th>97</th>
                      <th>HSD</th>
                      <th>PHSD</th>
                      <th>92</th>
                      <th>95</th>
                      <th>97</th>
                      <th>HSD</th>
                      <th>PHSD</th>
                       <th>92</th>
                      <th>95</th>
                      <th>97</th>
                      <th>HSD</th>
                      <th>PHSD</th>
                      <th>92</th>
                      <th>95</th>
                      <th>97</th>
                      <th>HSD</th>
                      <th>PHSD</th>


                  </tr>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>Kyaw San</td>
                      <td>Kyaw San</td>
                      <td>{station}</td>
                      <td>{stationLocation}</td>
                      <td>Mandalay  </td>
                      <td>2327</td>
                      <td>Own Shop</td>
                      <td className='px-3'>{fuelUnit[0] === "gallon"?(14580 / 4.546).toFixed(3) : 14580}</td>
                      <td className='px-3'>{fuelUnit[0] === "gallon"?(14580 / 4.546).toFixed(3) : 14580}</td>
                      <td className='px-3'>{fuelUnit[0] === "gallon"?(14580 / 4.546).toFixed(3) : 14580}</td>
                      <td className='px-3'>{fuelUnit[0] === "gallon"?(14580 / 4.546).toFixed(3) : 14580}</td>
                      <td className='px-3'>{fuelUnit[0] === "gallon"?(14580 / 4.546).toFixed(3) : 14580}</td>
                      <td className='px-3'>{fuelUnit[0] === "gallon"?fuel92Balance? (parseInt(fuel92Balance) / 4.546).toFixed(3):'':fuel92Balance? fuel92Balance.toFixed(3):''}</td>
                      <td className='px-3'>{fuelUnit[0] === "gallon"?fuel95Balance? (parseInt(fuel95Balance) / 4.546).toFixed(3):'':fuel95Balance? fuel95Balance.toFixed(3):''}</td>
                      <td className='px-3'>00.000</td>
                      
                      <td className='px-3'>{fuelUnit[0] === "gallon"?fuelDieselBalance?(parseInt(fuelDieselBalance) / 4.546).toFixed(3):'':fuelDieselBalance?fuelDieselBalance.toFixed(3):''}</td>
                      
                      <td className='px-3'>{fuelUnit[0] === "gallon"?fuelPremiumBalance?(parseInt(fuelPremiumBalance) / 4.546).toFixed(3):'':fuelPremiumBalance?fuelPremiumBalance.toFixed(3):''}</td>
                     <td>{fuelUnit[0] === "gallon"?n2?parseInt(n2/4.546).toFixed(3):'':n2?n2.toFixed(3):''}</td>
                      <td>{fuelUnit[0] === "gallon"?n5?parseInt(n5 / 4.546).toFixed(3):"":n5?n5.toFixed(3):""}</td>
                      <td>00.000</td>
                      <td>{fuelUnit[0] === "gallon"?hsd?parseInt(hsd/4.546).toFixed(3):"":hsd?hsd.toFixed(3):""}</td>
                      <td>{fuelUnit[0] === "gallon"?phsd?parseInt(phsd / 4.546).toFixed(3):'':phsd?phsd.toFixed(3):''}</td>
                      <td>{time === 0 ? fuelUnit[0] === "gallon"? parseInt(n2/4.546).toFixed(3):n2.toFixed(3): fuelUnit[0] === "gallon"?((n2 / 4.546) / time).toFixed(3):(n2 / time).toFixed(3)} </td>
                      <td>{time === 0 ? fuelUnit[0] === "gallon"?parseInt(n5/4.546).toFixed(3):n5.toFixed(3):fuelUnit[0] === "gallon"?parseInt((n5/4.546) / time).toFixed(3):parseInt(n5/time).toFixed(3)} </td>
                      <td>00.000</td>
                      <td>{time === 0 ? fuelUnit[0] === "gallon"? parseInt(hsd/4.546).toFixed(3):hsd.toFixed(3):fuelUnit[0] === "gallon"?parseInt((hsd/4.546) / time).toFixed(3):parseInt(hsd/time).toFixed(3)} </td>
                      <td>{time === 0 ?fuelUnit[0] === "gallon"? parseInt(phsd/4.546).toFixed(3):phsd.toFixed(3):(phsd / time).toFixed(3)} </td>
                      <td>Remark</td>

                  </tr>
              </tbody>
      </table>
      
      </div>
       <div className='flex p-3  text-[16px] mt-[30px] mb-[50px] items-center justify-start gap-3'>
          <button onClick={onDownload} className='flex items-center justify-center gap-2 text-md' >{language.toExcel} <RiFileExcel2Fill size={30} /></button>
          <button onClick={handlePrint} className='flex items-center justify-center gap-2 text-md' >{language.toPrint} <AiFillPrinter size={30}/></button>
          </div>
    </>
  )
}

export default TestTable