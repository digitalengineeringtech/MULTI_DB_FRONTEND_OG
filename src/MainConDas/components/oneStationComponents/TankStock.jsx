import React, { useState } from 'react'
import CalenderComponent from '../../../components/PageComponents/CalenderComponent';
import TankStockTable from '../Tables/TankStock.table';



let start = new Date();
start.setHours(0);
start.setMinutes(0);
start.setSeconds(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(59);
end.setSeconds(59);

end = new Date(end);
function TankStock({language}) {
    const [endDate, setEndDate] = useState(end)
  const [startDate, setStartDate] = useState(start);
  return (
    <div className="w-[100%]">
      <div className=" drop-shadow-md  gap-5 mt-4 flex justify-around items-center mx-auto relative">
        <CalenderComponent
          date={start}
          start={true}
          value={startDate}
          setValue={setStartDate}
          title={language.start_date}
        />
        <CalenderComponent
          date={end}
          value={endDate}
          setValue={setEndDate}
          title={language.end_date}
        />
      </div>

      <div className="w-[97%]  drop-shadow-md py-5   overflow-hidden gap-5  flex flex-wrap justify-center items-center mx-auto relative mt-5">
        {/* updateing */}
        {/* <div className='loading fixed top-0 left-0 right-0 bottom-0 bg-gray-200 flex items-center justify-center bg-opacity-[0.6] z-50'>
              <div >
                 <div class="spinner-icon">Working!</div>
              </div>
  </div>    */}
        {/* updateing */}
        <TankStockTable
          title={language.station_tank_balance}
          no={language.no}
          tankNo={language.tank_no}
          opening={language.opening}
          isue={language.isue}
          balance={language.blance}
          today_tank={language.today_tank}
          yesterday_tank={language.yesterday_tank}
          tank_isue={language.tank_isue}
          today_gl={language.today_gl}
          monthly_gl={language.monthly_gl}
          toExcel={language.toExcel}
          toPrint={language.toPrint}
        />
      </div>
    </div>
  );
}

export default TankStock