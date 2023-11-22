import { useEffect, useState } from "react";
import instance from "../../axios";


const useSevenDayHook = async (startDate, endDate, stationId, token) => {
    const [addregatedData, setAggregatedData] = useState([]);



  useEffect(() => {


    const fetchData = async () => { 
      await instance.get(`detail-sale/by-date/?sDate=${startDate}&eDate=${endDate}&stationDetailId=${stationId}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(function (response) {
        const data = response.data.result;

    let groupData = data.reduce((acc, item) => {
      if (acc[item.dailyReportDate]) {
        acc[item.dailyReportDate].push(item);
      } else {
        acc[item.dailyReportDate] = [item]
      }
      return acc;
    }, {})
    
    const reversedObject = Object.entries(groupData)
  .reverse()
  .reduce((acc, [key, value]) => {
    acc[key] = value;
      return acc;
      
  }, {});
          
 const totalsByDay = {};

  for (const date in reversedObject) {
  let totalSale = 0;
  let totalLiter = 0;

  reversedObject[date].forEach(entry => {
    totalSale += entry.totalPrice;
    totalLiter += entry.saleLiter;
  });

  totalsByDay[date] = { totalSale, totalLiter };
};
          setAggregatedData(totalsByDay);
      })
      .catch(function (error) {
        console.log(error);
        //  navigate('/')  
        //  dispatch(LogoutUser())
      });
    };

       fetchData();
   
   
  }, [startDate, endDate, stationId, token]);

    return addregatedData;

    
};

export default useSevenDayHook;