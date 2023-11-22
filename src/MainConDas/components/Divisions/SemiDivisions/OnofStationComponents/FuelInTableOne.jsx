import React, { useEffect, useRef, useState } from 'react'
import { EnglishFuelReceiveReport } from '../../../../../Language/English/englishFuelReceiveReport';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MyanmarFuelReceiveReport } from '../../../../../Language/Myanmar/myanmarFuelReceiveReport';
// import { useDownloadExcel } from 'react-export-table-to-excel';
// import { useReactToPrint } from 'react-to-print';
// import { RiFileExcel2Fill } from 'react-icons/ri';
// import { AiFillPrinter } from 'react-icons/ai';
import Empty from '../../../../../assets/images/empty.png';



function FuelInTableOne({ okData=[], tableRef,station,totalLength }) {
  const tRef = useRef();
  const [language, setLanguage] = useState(EnglishFuelReceiveReport);
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();


  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanmarFuelReceiveReport);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishFuelReceiveReport);
    }



  }, [user, navigate]);
  
  useEffect(() => {
    console.log("Hello this is me")
    console.log(okData);
  }, [okData]);

  // const { onDownload } = useDownloadExcel({
  //   currentTableRef: tRef.current,
  //   filename: "Fuel in report",
  //   sheet: "Fuel in report"
  // })

  // const generatePDF = useReactToPrint({
  //   content: () => tRef.current,
  //   documentTitle:"Fuel in report"
  // });


  return (
     <>
    {
        okData.length === 0 ? <div className='mt-[30px] flex items-center justify-center'>
        <div className='text-center p-3 rounded-md'>
        <img className='w-[50px] mx-auto' src={Empty} alt='empty' />
        <p>No Data With that Date</p>
        <p>Pick a Date!</p>
        </div>
        </div> : <div class="mt-[50px] ">

  <table ref={tRef}  class="text-md report-table bg-white">
      <thead>
      <tr>
      <th>{language.receive_date}</th>
      <th>{language.fuel_in_code}</th>
      <th>{language.fuel_in_code}</th>
      <th>{language.driver}</th>
      <th>{language.bowser_no}</th>
      <th>{language.tank}</th>
      <th>{language.tank_capacity}</th>
      <th>{language.receive_volume}({language.liter})</th>
      <th>{language.balance}</th>
    </tr>
    </thead>
          <tbody>
                {
                  okData.map((e, index) => (
                    <tr >
                      <td>{e.receive_date}</td>
                      <td>{e.fuel_in_code}</td>
                      <td>{e.fuel_type}</td>
                      <td>{e.driver}</td>
                      <td className='text-left'>{e.bowser}</td>
                      <td>{e.tankNo}</td>
                      <td>14580</td>
                      <td>{e.recive_balance}</td>
                      <td className='text-right'>{e.tank_balance?.toFixed(3)}</td>
                    </tr>
                  ))}
    
   </tbody>
        </table>
         {/* <div className='flex p-3 mt-[30px] mb-[30px] items-center justify-start gap-3'>
          <button className='flex items-center justify-center gap-2 text-md' onClick={() => onDownload()}>To Excel <RiFileExcel2Fill size={30} /></button>
      <button className='flex items-center justify-center gap-2 text-md' onClick={()=>generatePDF()}>To Print <AiFillPrinter size={30} /></button>
    </div> */}
</div>
    } 
    </>
  )
}

export default FuelInTableOne