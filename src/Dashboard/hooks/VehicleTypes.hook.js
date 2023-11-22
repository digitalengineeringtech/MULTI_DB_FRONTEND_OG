import React, { useEffect, useState } from 'react'
import instance from '../../axios';


const useVehicleHook =async(startDate,endDate,stationId,token)=> {
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
        const initialValue = [
        {
            vehicleType: 'Cycle',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Cycle ( 3 Wheels )',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Car',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Bus ( City )',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Bus ( High Way )',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Light Truck ( City )',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Light Truck ( High way )',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Heavy Truck ( City )',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Heavy Truck ( High way )',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Trailer ( City )',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Trailer ( High way )',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Htawlargyi',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Tractor',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Small Tractor',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Heavy Machinery',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Commercial Vehicle',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Phone Tower',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Industrial Zone',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Generator Industry',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Agriculture Machine',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Generator ( Home Use )',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Hospital',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'School',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Super Market',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Hotel',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Housing',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ,
        {
            vehicleType: 'Boat',
            totalLiter: 0,
            totalSale:0,
            totalCount: 0,
            count92: 0,
            count95: 0,
            count97: 0,
            counthsd: 0,
            countphsd:0
        }
        ];
        
          

        const aggregatedData = data.reduce((acc, e) => {
            if (e.vehicleType === 'Cycle') {
                acc[0].totalLiter += e.saleLiter;
                acc[0].totalSale += e.totalPrice;
                acc[0].totalCount += 1;
                acc[0].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[0].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[0].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[0].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[0].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Cycle ( 3 Wheels )') {
                acc[1].totalLiter += e.saleLiter;
                acc[1].totalSale += e.totalPrice;
                acc[1].totalCount += 1;
                acc[1].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[1].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[1].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[1].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[1].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Car') {
                acc[2].totalLiter += e.saleLiter;
                acc[2].totalSale += e.totalPrice;
                acc[2].totalCount += 1;
                acc[2].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[2].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[2].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[2].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[2].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Bus ( City )') {
                acc[3].totalLiter += e.saleLiter;
                acc[3].totalSale += e.totalPrice;
                acc[3].totalCount += 1;
                acc[3].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[3].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[3].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[3].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[3].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Bus ( High Way )') {
                acc[4].totalLiter += e.saleLiter;
                acc[4].totalSale += e.totalPrice;
                acc[4].totalCount += 1;
                acc[4].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[4].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[4].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[4].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[4].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Light Truck ( City )') {
                acc[5].totalLiter += e.saleLiter;
                acc[5].totalSale += e.totalPrice;
                acc[5].totalCount += 1;
                acc[5].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[5].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[5].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[5].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[5].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Light Truck ( High way )') {
                acc[6].totalLiter += e.saleLiter;
                acc[6].totalSale += e.totalPrice;
                acc[6].totalCount += 1;
                acc[6].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[6].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[6].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[6].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[6].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Heavy Truck ( City )') {
                acc[7].totalLiter += e.saleLiter;
                acc[7].totalSale += e.totalPrice;
                acc[7].totalCount += 1;
                acc[7].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[7].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[7].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[7].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[7].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Heavy Truck ( High way )') {
                acc[8].totalLiter += e.saleLiter;
                acc[8].totalSale += e.totalPrice;
                acc[8].totalCount += 1;
                acc[8].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[8].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[8].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[8].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[8].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Trailer ( City )') {
                acc[9].totalLiter += e.saleLiter;
                acc[9].totalSale += e.totalPrice;
                acc[9].totalCount += 1;
                acc[9].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[9].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[9].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[9].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[9].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Trailer ( High way )') {
                acc[10].totalLiter += e.saleLiter;
                acc[10].totalSale += e.totalPrice;
                acc[10].totalCount += 1;
                acc[10].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[10].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[10].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[10].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[10].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Htawlargyi') {
                acc[11].totalLiter += e.saleLiter;
                acc[11].totalSale += e.totalPrice;
                acc[11].totalCount += 1;
                acc[11].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[11].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[11].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[11].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[11].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Tractor') {
                acc[12].totalLiter += e.saleLiter;
                acc[12].totalSale += e.totalPrice;
                acc[12].totalCount += 1;
                acc[12].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[12].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[12].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[12].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[12].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Small Tractor') {
                acc[13].totalLiter += e.saleLiter;
                acc[13].totalSale += e.totalPrice;
                acc[13].totalCount += 1;
                acc[13].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[13].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[13].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[13].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[13].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Heavy Machinery') {
                acc[14].totalLiter += e.saleLiter;
                acc[14].totalSale += e.totalPrice;
                acc[14].totalCount += 1;
                acc[14].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[14].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[14].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[14].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[14].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Commercial Vehicle') {
                acc[15].totalLiter += e.saleLiter;
                acc[15].totalSale += e.totalPrice;
                acc[15].totalCount += 1;
                acc[15].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[15].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[15].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[15].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[15].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Phone Tower') {
                acc[16].totalLiter += e.saleLiter;
                acc[16].totalSale += e.totalPrice;
                acc[16].totalCount += 1;
                acc[16].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[16].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[16].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[16].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[16].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Industrial Zone') {
                acc[17].totalLiter += e.saleLiter;
                acc[17].totalSale += e.totalPrice;
                acc[17].totalCount += 1;
                acc[17].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[17].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[17].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[17].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[17].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Generator Industry') {
                acc[18].totalLiter += e.saleLiter;
                acc[18].totalSale += e.totalPrice;
                acc[18].totalCount += 1;
                acc[18].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[18].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[18].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[18].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[18].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Agriculture Machine') {
                acc[19].totalLiter += e.saleLiter;
                acc[19].totalSale += e.totalPrice;
                acc[19].totalCount += 1;
                acc[19].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[19].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[19].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[19].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[19].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Generator ( Home Use )') {
                acc[20].totalLiter += e.saleLiter;
                acc[20].totalSale += e.totalPrice;
                acc[20].totalCount += 1;
                acc[20].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[20].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[20].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[20].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[20].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Hospital') {
                acc[21].totalLiter += e.saleLiter;
                acc[21].totalSale += e.totalPrice;
                acc[21].totalCount += 1;
                acc[21].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[21].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[21].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[21].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[21].countphsd += 1;
                }
            }
            if (e.vehicleType === 'School') {
                acc[22].totalLiter += e.saleLiter;
                acc[22].totalSale += e.totalPrice;
                acc[22].totalCount += 1;
                acc[22].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[22].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[22].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[22].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[22].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Super Market') {
                acc[23].totalLiter += e.saleLiter;
                acc[23].totalSale += e.totalPrice;
                acc[23].totalCount += 1;
                acc[23].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[23].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[23].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[23].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[23].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Hotel') {
                acc[24].totalLiter += e.saleLiter;
                acc[24].totalSale += e.totalPrice;
                acc[24].totalCount += 1;
                acc[24].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[24].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[24].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[24].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[24].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Housing') {
                acc[25].totalLiter += e.saleLiter;
                acc[25].totalSale += e.totalPrice;
                acc[25].totalCount += 1;
                acc[25].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[25].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[25].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[25].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[25].countphsd += 1;
                }
            }
            if (e.vehicleType === 'Boat') {
                acc[26].totalLiter += e.saleLiter;
                acc[26].totalSale += e.totalPrice;
                acc[26].totalCount += 1;
                acc[26].vehicleType = e.vehicleType
            
                if (e.fuelType === "001-Octane Ron(92)") {
                    acc[26].count92 += 1;
                }
                if (e.fuelType === "002-Octane Ron(95)") {
                    acc[26].count95 += 1;
                }
                if (e.fuelType === "004-Diesel") {
                    acc[26].counthsd += 1;
                }
                if (e.fuelType === "005-Premium Diesel") {
                    acc[26].countphsd += 1;
                }
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
}

export default useVehicleHook