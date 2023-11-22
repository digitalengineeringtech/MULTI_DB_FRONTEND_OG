import React, { useEffect, useState } from 'react'


function TankStockTable({language,okData,endDate}) {
  const [isTrue, setIsTrue] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [keyCollectins, setKeyCollections] = useState([]);


  useEffect(() => {
    let currentDay = new Date().getDate();
    let today = endDate.getDate();

    if (currentDay === today) {
      setIsTrue(true);
    }

    let groupData = okData.reduce((acc, item) => {
      if (acc[item.createAt]) {
        acc[item.createAt].push(item);
      } else {
        acc[item.createAt] = [item];
      }
      return acc;
    }, {}); 


    const orderedKeys = Object.keys(groupData).sort();
  
    setKeyCollections(orderedKeys.reverse());
    setFilterData(groupData);
 
    
  //   const reversedObject = Object.entries(groupData)
  // .reverse()
  // .reduce((acc, [key, value]) => {
  //   acc[key] = value;
  //   console.log("value",value);
  //   console.log("acc",acc[key])
  //   return acc;
  // }, {}); 
    
    // console.log("reversedObject", reversedObject);
    // setFilterData(reversedObject);

  },[endDate,okData])
 


  return (
    <>
      <div className='mb-[100px]'>
        {
          keyCollectins.map((id) => (
            <div id={id} className='mt-[100px]'>
              <h3 className='text-lg container mx-auto font-semibold'>{
                language.start_date === "စတင်ရက်" ? <p>{id}  {language.title}</p> : <p>{language.title} {id}</p>
              }</h3>
              <table className='mt-[40px]'>
               <tr>
          <th>{language.tank}</th>
        <th className='w-[150px]'>{language.fuel_type}</th>
        <th>{language.capacity} ({language.liter})</th>
                  
          <th className='w-[200px]'>{language.opening} ({language.liter})</th>
         <th>{language.receive}</th>
         <th>{language.sale} ({language.liter})</th>
         <th>{language.balance} ({language.liter})</th>
         
                </tr>
      {  
  filterData[id]
  .sort((a, b) => a.tankNo - b.tankNo) // Sort the array by tankNo
  .map((obj) => (
    <tr key={obj.tankNo}>
      <td>{obj.tankNo}</td>
      <td className='text-left'>{obj.fuelType}</td>
      <td className='text-left'>{obj.capacity}</td>      
      <td className='text-right'>{obj.opening.toFixed(3)}</td>
      <td className='text-right'>{obj.fuelIn === 0 ? "-" : obj.fuelIn.toFixed(3)}</td>
      <td className='text-right'>{obj.cash.toFixed(3)}</td>
      <td className='text-right'>{obj.balance.toFixed(3)}</td>
    </tr>
          ))}
            </table>
            </div>
        ))
        }
      </div>
    </>
  )
}

export default TankStockTable