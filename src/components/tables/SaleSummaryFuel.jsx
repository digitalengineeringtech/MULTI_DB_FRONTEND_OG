import React,{useEffect, useState} from 'react'

function SaleSummaryFuel({tableRef,okData}) {
  const [ninety2LotalLiter, SetNinety2LotalLiter] = useState(0);
  const [ninety2Price, SetNinety2Price] = useState(0);

  const [ninety5LotalLiter, SetNinety5LotalLiter] = useState(0);
  const [ninety5Price, SetNinety5Price] = useState(0);

  const [dieselLotalLiter, SetDieselLotalLiter] = useState(0);
  const [dieselPrice, SetdieselPrice] = useState(0);

  const [phsdLotalLiter, SetphshLotalLiter] = useState(0);
  const [phsdPrice, SetphsdPrice] = useState(0);


 function litersToGallons(liters) {
  const conversionFactor = 4.546;;
  const gallons = liters / conversionFactor;
  return gallons?.toFixed(3);
 }
  
  
  useEffect(() => {
    let ninety2 = 0
    let ninety2pricee = 0

    let ninety5 = 0
    let ninety5pricee = 0

    let diesel = 0
    let dieselpricee = 0

    let premium = 0
    let premiumpricee = 0

    okData.forEach((obj) => {
      if (obj.fuelType === "005-Premium Diesel") {
        premium += obj.saleLiter
        premiumpricee = obj.salePrice

      }
      if (obj.fuelType === "004-Diesel") {
        diesel += obj.saleLiter
        dieselpricee = obj.salePrice
      }
      if (obj.fuelType === "001-Octane Ron(92)") {
        ninety2 += obj.saleLiter
        ninety2pricee = obj.salePrice
      }
      if (obj.fuelType === "002-Octane Ron(95)") {
        ninety5 += obj.saleLiter
        ninety5pricee = obj.salePrice
      }
    });
    
 
    SetDieselLotalLiter(diesel?.toFixed(3));
    SetphshLotalLiter(premium?.toFixed(3));
    SetNinety2LotalLiter(ninety2?.toFixed(3));
    SetNinety5LotalLiter(ninety5?.toFixed(3));

    SetdieselPrice(dieselpricee);
    SetNinety2Price(ninety2pricee);
    SetNinety5Price(ninety5pricee);
    SetphsdPrice(premiumpricee)

    
  }, [okData])
  


  

  return (
    <>
    <table className='mt-[40px]'>
  <tr>
    <th>Fuel Type</th>
    <th>Price</th>
    <th>Liter</th>
    <th>Gallon</th>
    <th>Amount</th>
  </tr>
  <tr>
    <td>001-Octane Ron(92)</td>
          <td>{ninety2Price}</td>
    <td>{ninety2LotalLiter}</td>
    <td>{litersToGallons(ninety2LotalLiter)}</td>
    <td>{(ninety2LotalLiter * ninety2Price).toFixed(0)} Kyats</td>
  </tr>
  <tr>
    <td>002-Octane Ron(95)</td>
          <td>{ninety5Price}</td>
    <td>{ninety5LotalLiter}</td>
          <td>{litersToGallons(ninety5LotalLiter)}</td>
          <td>{(ninety5LotalLiter * ninety5Price).toFixed(0)} Kyats</td>
  </tr>
  <tr>
    <td>004-Diesel</td>
          <td>{dieselPrice}</td>
    <td>{dieselLotalLiter}</td>
          <td>{litersToGallons(dieselLotalLiter)}</td>
          <td>{(dieselLotalLiter * dieselPrice).toFixed(0)} Kyats</td>
  </tr>
  <tr>
    <td>005-Premium Diesel</td>
          <td>{phsdPrice}</td>
    <td>{phsdLotalLiter}</td>
    <td>{litersToGallons(phsdLotalLiter)}</td>
          <td>{(phsdLotalLiter * phsdPrice).toFixed(0)} Kyats</td>
  </tr>
</table>
    </>
  )
}

export default SaleSummaryFuel