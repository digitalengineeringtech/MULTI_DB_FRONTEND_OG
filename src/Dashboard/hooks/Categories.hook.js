import { useEffect, useState } from 'react';
import instance from '../../axios';




const useCategoriesHook = async (startDate, endDate, stationId, token) => {

  const [aggregatedData, setAggregatedData] = useState([]);
  
  

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
        const initialValue = [{
          price92: 0,
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
        }];
          

        const aggregatedData = data.reduce((acc, e) => {
          if (e.fuelType === '001-Octane Ron(92)') {
            acc[0].price92 = e.salePrice;
            acc[0].totalLiter += e.saleLiter;
            acc[0].totalSale += e.totalPrice;
          } else if (e.fuelType === '002-Octane Ron(95)') {
            acc[1].price95 = e.salePrice;
            acc[1].totalLiter95 += e.saleLiter;
            acc[1].totalSale95 += e.totalPrice;
          } else if (e.fuelType === '004-Diesel') {
            acc[2].priceDiesel = e.salePrice;
            acc[2].totalLiterDiesel += e.saleLiter;
            acc[2].totalSaleDiesel += e.totalPrice;
          } else if (e.fuelType === '005-Premium Diesel') {
            acc[3].pricePDiesel = e.salePrice;
            acc[3].totalLiterPDiesel += e.saleLiter;
            acc[3].totalSalePDiesel += e.totalPrice;
          }
          return acc;
        }, initialValue);
        setAggregatedData(aggregatedData);
          

      })
      .catch(function (error) {
        console.log(error);
        //  navigate('/')  
        //  dispatch(LogoutUser())
      });
    };

       fetchData();
   
   
  }, [startDate, endDate, stationId, token]);

 
      
   
  return aggregatedData;
 

};

export default useCategoriesHook