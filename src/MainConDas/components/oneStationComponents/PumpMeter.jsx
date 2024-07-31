import React, { useEffect, useState } from 'react'
import CalenderComponent from '../../../components/PageComponents/CalenderComponent';
import PumpMeterTable from '../Tables/PumpMeter.table';
import UsePost from '../hooks/UsePost';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import Loading from '../../../components/Loading';



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


function PumpMeter({language}) {
  const [endDate, setEndDate] = useState(end)
  const [startDate, setStartDate] = useState(start);
  const [station, setStation] = useState(0);
  const [okData, setOkData] = useState([]);
  const [pumpMeterLoading, setPumpMeterLoading] = useState(true);

  const [ninety2_closing, setNinety2_closing] = useState(0);
  const [ninety2_opening, setNinety2_opening] = useState(0);
  const [ninety2_total_liter, setNinety2_total_liter] = useState(0);

  const [ninety5_closing, setNinety5_closing] = useState(0);
  const [ninety5_opening, setNinety5_opening] = useState(0);
  const [ninety5_total_liter, setNinety5_total_liter] = useState(0);

  const [diesel_closing, setDiesel_closing] = useState(0);
  const [diesel_opening, setDiesel_opening] = useState(0);
  const [diesel_total_liter, setDiesel_total_liter] = useState(0);

  const [phsd_closing, setPhsd_closing] = useState(0);
  const [phsd_opening, setPhsd_opening] = useState(0);
  const [phsd_total_liter, setPhsd_total_liter] = useState(0);

  const [total_liter, setTotal_liter] = useState(0);
   
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();

  const [{ data_g, loading_g, error_g }, fetchIt] = UsePost();

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const station = urlParams.get('station');
    setStation(station);
    
    fetchIt(`/detail-sale/statement-report?sDate=${startDate}&eDate=${endDate}&stationDetailId=${station}`,user.token)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleSearch = () => {
     fetchIt(`/detail-sale/statement-report?sDate=${startDate}&eDate=${endDate}&stationDetailId=${station}`,user.token)
  }


  useEffect(() => {
    if (data_g.result) {
      setOkData(data_g.result);

    }
    setPumpMeterLoading(loading_g);
  }, [
    data_g,loading_g,error_g
  ]);

  useEffect(() => {

    let ninety2 = 0;
    let ninety2_closing = 0;
    let ninety2_opening = 0;

    let ninety5 = 0;
    let ninety5_closing = 0;
    let ninety5_opening = 0;

    let diesel = 0;
    let diesel_closing = 0;
    let diesel_opening = 0;

    let premium = 0;
    let premium_closing = 0;
    let premium_opening = 0;

    let totalPrice = 0;

    if (okData) {

      okData.forEach((obj) => {
        
      if (obj.fuelType === '001-Octane Ron(92)') {
          ninety2 += obj.totalSaleLiter;
          ninety2_closing += obj.totalizer_closing;
          ninety2_opening += obj.totalizer_opening;
        }
      if (obj.fuelType === '002-Octane Ron(95)') {
          ninety5 += obj.totalSaleLiter;
          ninety5_closing += obj.totalizer_closing;
          ninety5_opening += obj.totalizer_closing;

        }
      if (obj.fuelType === '004-Diesel') {
          diesel += obj.totalSaleLiter;
          diesel_closing += obj.totalizer_closing;
          diesel_opening += obj.totalizer_opening;
        }
      if (obj.fuelType === '005-Premium Diesel') {
          premium += obj.totalSaleLiter;
          premium_closing += obj.totalizer_closing;
          premium_opening += obj.totalizer_opening;
        }
        totalPrice += obj.totalSaleLiter;
      });
    }

    setNinety2_total_liter(ninety2.toFixed(3));
    setNinety2_closing(ninety2_closing.toFixed(3));
    setNinety2_opening(ninety2_opening.toFixed(3));

    setNinety5_total_liter(ninety5.toFixed(3));
    setNinety5_closing(ninety5_closing.toFixed(3));
    setNinety5_opening(ninety5_opening.toFixed(3));

    setDiesel_total_liter(diesel.toFixed(3));
    setDiesel_closing(diesel_closing.toFixed(3));
    setDiesel_opening(diesel_opening.toFixed(3));

    setPhsd_total_liter(premium.toFixed(3));
    setPhsd_closing(premium_closing.toFixed(3));
    setPhsd_opening(premium_opening.toFixed(3));

    setTotal_liter(totalPrice.toFixed(3));

  }, [okData]);
  

  return (
    <div className="w-[50%]">
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
      <div className="w-[97%] mx-auto px-7">
        <button
          onClick={handleSearch}
          className="flex gap-1 text-sm items-center justify-center bg-blue-800 hover:bg-blue-700 text-white mt-8 p-2 rounded"
        >
          <AiOutlineSearch size={20} />
          SEARCH
        </button>
      </div>
      <div className="w-[97%]  drop-shadow-md py-5   overflow-hidden gap-5  flex flex-wrap justify-center items-center mx-auto relative mt-5">
        {pumpMeterLoading ? <Loading /> : ""}
        <PumpMeterTable
          title={language.pump_meter}
          no={language.no}
          fuel_type={language.fuel_type}
          opening={language.opening}
          closing={language.closing}
          isue={language.isue}
          remark={language.remark}
          toExcel={language.toExcel}
          toPrint={language.toPrint}
          ninety2_closing={ninety2_closing}
          ninety2_opening={ninety2_opening}
          ninety2_total_liter={ninety2_total_liter}
          ninety5_opening={ninety5_opening}
          ninety5_closing={ninety5_closing}
          ninety5_total_liter={ninety5_total_liter}
          phsd_closing={phsd_closing}
          phsd_opening={phsd_opening}
          phsd_total_liter={phsd_total_liter}
          diesel_closing={diesel_closing}
          diesel_opening={diesel_opening}
          diesel_total_liter={diesel_total_liter}
          total_liter={total_liter}
        />
      </div>
    </div>
  );
}

export default PumpMeter