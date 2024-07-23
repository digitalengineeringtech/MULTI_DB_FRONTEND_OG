import React,{useState,useEffect} from 'react'
import {  useSelector } from 'react-redux';
import useCategoriesHook from '../hooks/Categories.hook';
import { MdAttachMoney } from 'react-icons/md';
import Loading from '../../components/Loading';
import CountUp from 'react-countup';



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

function Balance() {
// eslint-disable-next-line no-unused-vars
  const [endDate, setEndDate] = useState(end);
// eslint-disable-next-line no-unused-vars
 const [startDate, setStartDate] = useState(start);
  const [aggregatedData, setAggregatedData] = useState([{
          price92: null,
          totalLiter: 0,
          totalSale: 0
        },
        {
          price95: 0,
          totalLiter95: 0,
          totalSale95: 0
        },
        {
          priceDiesel: 0,
          totalLiterDiesel: 0,
          totalSaleDiesel: 0
        },
        {
          pricePDiesel: 0,
          totalLiterPDiesel: 0,
          totalSalePDiesel: 0
        }]);
  const user = useSelector((state) => state.login);
  const token = user.token;
 const stationId = user.stationId;




const promise = useCategoriesHook(startDate, endDate, stationId, token);

  
  useEffect(() => {
     promise.then(data => {
       if (data.length > 1) {
        setAggregatedData(data);
       }
    }).catch(error => {
      console.error('Error fetching aggregated data:', error);
    });
  },[promise])





  return (
    <div className='animate-slide-right hover:-translate-y-1 hover:scale-[1.02] duration-300 w-[40%] p-5 h-[400px] bg-white rounded-lg flex-col drop-shadow-lg flex items-center justify-center relative'>
      {
        aggregatedData[0].price92 === null ?<Loading/>:''      }
      {/* <h3 className=''> Fuel Balance Chart</h3>
        <Pie data={userData} /> */}
      <h3 className='mb-3 text-lg'>Today Total Sale - MMK</h3>
      <div className='w-[280px] bg-white drop-shadow-2xl border-[15px] border-blue-400 border-l-green-400 border-t-green-400 h-[280px] rounded-full flex justify-center items-center z-[-1] text-lg font-bold'>

        <p className='flex items-center z-[10]'><MdAttachMoney className='scale-[1.5]'/><span className='  font-semibold text-[24px]'>{<CountUp end={aggregatedData[0].totalSale+aggregatedData[1].totalSale95 +aggregatedData[2].totalSaleDiesel+aggregatedData[3].totalSalePDiesel}/>}</span></p>
      </div>

    </div>
  )
}

export default Balance