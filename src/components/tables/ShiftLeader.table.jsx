import React, { useEffect, useRef, useState } from 'react'
import {useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { AiFillPrinter } from 'react-icons/ai';

function ShiftLeader({ okData, tableRef, calenderTwo, isSearch,selectedStation }) {
    const tRef = useRef();

    const [station, setStation] = useState();

    const [pump1SalePrice, setPump1SalePrice] = useState(0);
    const [pump1SaleLiter, setPump1SaleLiter] = useState(0);
    const [pump1FuelType, setPump1FuelType] = useState('');
    const [pump1gallon, Setpump1gallon] = useState(0);
    const [pump1opening, Setpump1opening] = useState(0);
    const [pump1price, Setpump1price] = useState(0);
    const [pump1No, setPump1No] = useState(0);



    const [pump2SalePrice, SetPump2SalePrice] = useState(0);
    const [pump2gallon, Setpump2gallon] = useState(0);
    const [pump2opening, Setpump2opening] = useState(0);
    const [pump2price, Setpump2price] = useState(0);
    const [pump2SaleLiter, setPump2SaleLiter] = useState(0);
    const [pump2FuelType, setPump2FuelType] = useState('');
    const [pump2No, setPump2No] = useState(0);
  


    
    const [pump3SalePrice, SetPump3SalePrice] = useState(0);
    const [pump3gallon, Setpump3gallon] = useState(0);
    const [pump3opening, Setpump3opening] = useState(0);
    const [pump3price, Setpump3price] = useState(0);
    const [pump3SaleLiter, setPump3SaleLiter] = useState(0);
    const [pump3FuelType, setPump3FuelType] = useState('');
    const [pump3No, setPump3No] = useState(0);
    


    const [pump4SalePrice, SetPump4SalePrice] = useState(0);
    const [pump4gallon, Setpump4gallon] = useState(0);
    const [pump4opening, Setpump4opening] = useState(0);
    const [pump4price, Setpump4price] = useState(0);
    const [pump4SaleLiter, setPump4SaleLiter] = useState(0);
    const [pump4FuelType, setPump4FuelType] = useState('');
    const [pump4No, setPump4No] = useState(0);



    const [pump5SalePrice, SetPump5SalePrice] = useState(0);
    const [pump5gallon, Setpump5gallon] = useState(0);
     const [pump5opening, Setpump5opening] = useState(0);
    const [pump5price, Setpump5price] = useState(0);
    const [pump5SaleLiter, setPump5SaleLiter] = useState(0);
    const [pump5FuelType, setPump5FuelType] = useState('');
    const [pump5No, setPump5No] = useState(0);




    const [pump6SalePrice, SetPump6SalePrice] = useState(0);
    const [pump6gallon, Setpump6gallon] = useState(0);
  const [pump6opening, Setpump6opening] = useState(0);
    const [pump6price, Setpump6price] = useState(0);
    const [pump6SaleLiter, setPump6SaleLiter] = useState(0);
    const [pump6FuelType, setPump6FuelType] = useState('');
    const [pump6No, setPump6No] = useState(0);



    const [pump7SalePrice, SetPump7SalePrice] = useState(0);
    const [pump7gallon, Setpump7gallon] = useState(0);
    const [pump7opening, Setpump7opening] = useState(0);
    const [pump7price, Setpump7price] = useState(0);
    const [pump7SaleLiter, setPump7SaleLiter] = useState(0);
    const [pump7FuelType, setPump7FuelType] = useState('');
    const [pump7No, setPump7No] = useState(0);




    const [pump8SalePrice, SetPump8SalePrice] = useState(0);
    const [pump8gallon, Setpump8gallon] = useState(0);
    const [pump8opening, Setpump8opening] = useState(0);
    const [pump8price, Setpump8price] = useState(0);
    const [pump8SaleLiter, setPump8SaleLiter] = useState(0);
    const [pump8FuelType, setPump8FuelType] = useState('');
    const [pump8No, setPump8No] = useState(0);



    const [pump9SalePrice, SetPump9SalePrice] = useState(0);
    const [pump9gallon, Setpump9gallon] = useState(0);
    const [pump9opening, Setpump9opening] = useState(0);
    const [pump9price, Setpump9price] = useState(0);
    const [pump9SaleLiter, setPump9SaleLiter] = useState(0);
    const [pump9FuelType, setPump9FuelType] = useState('');
    const [pump9No, setPump9No] = useState(0);



    const [pump10SalePrice, SetPump10SalePrice] = useState(0);
    const [pump10gallon, Setpump10gallon] = useState(0);
    const [pump10opening, Setpump10opening] = useState(0);
    const [pump10price, Setpump10price] = useState(0);
    const [pump10SaleLiter, setPump10SaleLiter] = useState(0);
    const [pump10FuelType, setPump10FuelType] = useState('');
    const [pump10No, setPump10No] = useState(0);


    

    const [pump11SalePrice, SetPump11SalePrice] = useState(0);
    const [pump11gallon, Setpump11gallon] = useState(0);
    const [pump11opening, Setpump11opening] = useState(0);
    const [pump11price, Setpump11price] = useState(0);
    const [pump11SaleLiter, setPump11SaleLiter] = useState(0);
    const [pump11FuelType, setPump11FuelType] = useState('');
    const [pump11No, setPump11No] = useState(0);



    const [pump12SalePrice, SetPump12SalePrice] = useState(0);
    const [pump12gallon, Setpump12gallon] = useState(0);
    const [pump12opening, Setpump12opening] = useState(0);
    const [pump12price, Setpump12price] = useState(0);
    const [pump12SaleLiter, setPump12SaleLiter] = useState(0);
    const [pump12FuelType, setPump12FuelType] = useState('');
    const [pump12No, setPump12No] = useState(0);


    
    const [pump13SalePrice, SetPump13SalePrice] = useState(0);
    const [pump13gallon, Setpump13gallon] = useState(0);
    const [pump13opening, Setpump13opening] = useState(0);
    const [pump13price, Setpump13price] = useState(0);
    const [pump13SaleLiter, setPump13SaleLiter] = useState(0);
    const [pump13FuelType, setPump13FuelType] = useState('');
    const [pump13No, setPump13No] = useState(0);



    const [pump14SalePrice, SetPump14SalePrice] = useState(0);
    const [pump14gallon, Setpump14gallon] = useState(0);
    const [pump14opening, Setpump14opening] = useState(0);
    const [pump14price, Setpump14price] = useState(0);
    const [pump14SaleLiter, setPump14SaleLiter] = useState(0);
    const [pump14FuelType, setPump14FuelType] = useState('');
    const [pump14No, setPump14No] = useState(0);


    const [pump15SalePrice, SetPump15SalePrice] = useState(0);
    const [pump15gallon, Setpump15gallon] = useState(0);
    const [pump15opening, Setpump15opening] = useState(0);
    const [pump15price, Setpump15price] = useState(0);
    const [pump15SaleLiter, setPump15SaleLiter] = useState(0);
    const [pump15FuelType, setPump15FuelType] = useState('');
    const [pump15No, setPump15No] = useState(0);

  
    const [pump16SalePrice, SetPump16SalePrice] = useState(0);
    const [pump16gallon, Setpump16gallon] = useState(0);
    const [pump16opening, Setpump16opening] = useState(0);
    const [pump16price, Setpump16price] = useState(0);
    const [pump16SaleLiter, setPump16SaleLiter] = useState(0);
    const [pump16FuelType, setPump16FuelType] = useState('');
    const [pump16No, setPump16No] = useState(0);
    
  
    const [pump17SalePrice, SetPump17SalePrice] = useState(0);
    const [pump17gallon, Setpump17gallon] = useState(0);
    const [pump17opening, Setpump17opening] = useState(0);
    const [pump17price, Setpump17price] = useState(0);
    const [pump17SaleLiter, setPump17SaleLiter] = useState(0);
    const [pump17FuelType, setPump17FuelType] = useState('');
    const [pump17No, setPump17No] = useState(0);
  
    
    const [pump18SalePrice, SetPump18SalePrice] = useState(0);
    const [pump18gallon, Setpump18gallon] = useState(0);
    const [pump18opening, Setpump18opening] = useState(0);
    const [pump18price, Setpump18price] = useState(0);
    const [pump18SaleLiter, setPump18SaleLiter] = useState(0);
    const [pump18FuelType, setPump18FuelType] = useState('');
    const [pump18No, setPump18No] = useState(0);
  
    
    const [pump19SalePrice, SetPump19SalePrice] = useState(0);
    const [pump19gallon, Setpump19gallon] = useState(0);
    const [pump19opening, Setpump19opening] = useState(0);
    const [pump19price, Setpump19price] = useState(0);
    const [pump19SaleLiter, setPump19SaleLiter] = useState(0);
    const [pump19FuelType, setPump19FuelType] = useState('');
    const [pump19No, setPump19No] = useState(0);
  
    
    const [pump20SalePrice, SetPump20SalePrice] = useState(0);
    const [pump20gallon, Setpump20gallon] = useState(0);
    const [pump20opening, Setpump20opening] = useState(0);
    const [pump20price, Setpump20price] = useState(0);
    const [pump20SaleLiter, setPump20SaleLiter] = useState(0);
    const [pump20FuelType, setPump20FuelType] = useState('');
    const [pump20No, setPump20No] = useState(0);
  
    
    const [pump21SalePrice, SetPump21SalePrice] = useState(0);
    const [pump21gallon, Setpump21gallon] = useState(0);
    const [pump21opening, Setpump21opening] = useState(0);
    const [pump21price, Setpump21price] = useState(0);
    const [pump21SaleLiter, setPump21SaleLiter] = useState(0);
    const [pump21FuelType, setPump21FuelType] = useState('');
    const [pump21No, setPump21No] = useState(0);
    
    
    const [pump22SalePrice, SetPump22SalePrice] = useState(0);
    const [pump22gallon, Setpump22gallon] = useState(0);
    const [pump22opening, Setpump22opening] = useState(0);
    const [pump22price, Setpump22price] = useState(0);
    const [pump22SaleLiter, setPump22SaleLiter] = useState(0);
    const [pump22FuelType, setPump22FuelType] = useState('');
    const [pump22No, setPump22No] = useState(0);
  
    
    const [pump23SalePrice, SetPump23SalePrice] = useState(0);
    const [pump23gallon, Setpump23gallon] = useState(0);
    const [pump23opening, Setpump23opening] = useState(0);
    const [pump23price, Setpump23price] = useState(0);
    const [pump23SaleLiter, setPump23SaleLiter] = useState(0);
    const [pump23FuelType, setPump23FuelType] = useState('');
    const [pump23No, setPump23No] = useState(0);
    
    
    const [pump24SalePrice, SetPump24SalePrice] = useState(0);
    const [pump24gallon, Setpump24gallon] = useState(0);
    const [pump24opening, Setpump24opening] = useState(0);
    const [pump24price, Setpump24price] = useState(0);
    const [pump24SaleLiter, setPump24SaleLiter] = useState(0);
    const [pump24FuelType, setPump24FuelType] = useState('');
    const [pump24No, setPump24No] = useState(0);
  
    
    const [pump25SalePrice, SetPump25SalePrice] = useState(0);
    const [pump25gallon, Setpump25gallon] = useState(0);
    const [pump25opening, Setpump25opening] = useState(0);
    const [pump25price, Setpump25price] = useState(0);
    const [pump25SaleLiter, setPump25SaleLiter] = useState(0);
    const [pump25FuelType, setPump25FuelType] = useState('');
    const [pump25No, setPump25No] = useState(0);
  
    
    const [pump26SalePrice, SetPump26SalePrice] = useState(0);
    const [pump26gallon, Setpump26gallon] = useState(0);
    const [pump26opening, Setpump26opening] = useState(0);
    const [pump26price, Setpump26price] = useState(0);
    const [pump26SaleLiter, setPump26SaleLiter] = useState(0);
    const [pump26FuelType, setPump26FuelType] = useState('');
    const [pump26No, setPump26No] = useState(0);
  
  
    const [pump27SalePrice, SetPump27SalePrice] = useState(0);
    const [pump27gallon, Setpump27gallon] = useState(0);
    const [pump27opening, Setpump27opening] = useState(0);
    const [pump27price, Setpump27price] = useState(0);
    const [pump27SaleLiter, setPump27SaleLiter] = useState(0);
    const [pump27FuelType, setPump27FuelType] = useState('');
    const [pump27No, setPump27No] = useState(0);
    
    
    const [pump28SalePrice, SetPump28SalePrice] = useState(0);
    const [pump28gallon, Setpump28gallon] = useState(0);
    const [pump28opening, Setpump28opening] = useState(0);
    const [pump28price, Setpump28price] = useState(0);
    const [pump28SaleLiter, setPump28SaleLiter] = useState(0);
    const [pump28FuelType, setPump28FuelType] = useState('');
    const [pump28No, setPump28No] = useState(0);
    
    
    const [pump29SalePrice, SetPump29SalePrice] = useState(0);
    const [pump29gallon, Setpump29gallon] = useState(0);
    const [pump29opening, Setpump29opening] = useState(0);
    const [pump29price, Setpump29price] = useState(0);
    const [pump29SaleLiter, setPump29SaleLiter] = useState(0);
    const [pump29FuelType, setPump29FuelType] = useState('');
    const [pump29No, setPump29No] = useState(0);
    
    
    const [pump30SalePrice, SetPump30SalePrice] = useState(0);
    const [pump30gallon, Setpump30gallon] = useState(0);
    const [pump30opening, Setpump30opening] = useState(0);
    const [pump30price, Setpump30price] = useState(0);
    const [pump30SaleLiter, setPump30SaleLiter] = useState(0);
    const [pump30FuelType, setPump30FuelType] = useState('');
    const [pump30No, setPump30No] = useState(0);
    
    
    const [pump31SalePrice, SetPump31SalePrice] = useState(0);
    const [pump31gallon, Setpump31gallon] = useState(0);
    const [pump31opening, Setpump31opening] = useState(0);
    const [pump31price, Setpump31price] = useState(0);
    const [pump31SaleLiter, setPump31SaleLiter] = useState(0);
    const [pump31FuelType, setPump31FuelType] = useState('');
    const [pump31No, setPump31No] = useState(0);
    
    
    const [pump32SalePrice, SetPump32SalePrice] = useState(0);
    const [pump32gallon, Setpump32gallon] = useState(0);
    const [pump32opening, Setpump32opening] = useState(0);
    const [pump32price, Setpump32price] = useState(0);
    const [pump32SaleLiter, setPump32SaleLiter] = useState(0);
    const [pump32FuelType, setPump32FuelType] = useState('');
    const [pump32No, setPump32No] = useState(0);
    


    const [todayDate, SettodayDate] = useState(new Date().getDate());
    const [currentDate, SetCurrentDate] = useState(calenderTwo.getDate());

    const user = useSelector((state) => state.login);

  
  useEffect(() => {
    let nozzle1TotalPrice = 0;
    let nozzle1Opening = 0;
    let nozzle1price = 0;
    let nozzle1SaleLiter = 0;
    let nozzle1FuelType = 0;
    let nozzle1No = 0;

    let nozzle2TotalPrice = 0;
    let nozzle2Opening = 0;
    let nozzle2price = 0;
    let nozzle2SaleLiter = 0;
    let nozzle2FuelType = 0;
    let nozzle2No = 0;

    let nozzle3TotalPrice = 0;
    let nozzle3Opening = 0;
    let nozzle3price = 0;
    let nozzle3SaleLiter = 0;
    let nozzle3FuelType = 0;
    let nozzle3No = 0;

    let nozzle4TotalPrice = 0;
    let nozzle4Opening = 0;
    let nozzle4price = 0;
    let nozzle4SaleLiter = 0;
    let nozzle4FuelType = 0;
    let nozzle4No = 0;
      

    let nozzle5TotalPrice = 0;
    let nozzle5Opening = 0;
    let nozzle5price = 0;
    let nozzle5SaleLiter = 0;
    let nozzle5FuelType = 0;
    let nozzle5No = 0;
        

    let nozzle6TotalPrice = 0;
    let nozzle6Opening = 0;
    let nozzle6price = 0;
    let nozzle6SaleLiter = 0;
    let nozzle6FuelType = 0;
    let nozzle6No = 0;
        

    let nozzle7TotalPrice = 0;
    let nozzle7Opening = 0;
    let nozzle7price = 0;
    let nozzle7SaleLiter = 0;
    let nozzle7FuelType = 0;
    let nozzle7No = 0;
        

    let nozzle8TotalPrice = 0;
    let nozzle8Opening = 0;
    let nozzle8price = 0;
    let nozzle8SaleLiter = 0;
    let nozzle8FuelType = 0;
    let nozzle8No = 0;
        

    let nozzle9TotalPrice = 0;
    let nozzle9Opening = 0;
    let nozzle9price = 0;
    let nozzle9SaleLiter = 0;
    let nozzle9FuelType = 0;
    let nozzle9No = 0;
        

    let nozzle10TotalPrice = 0;
    let nozzle10Opening = 0;
    let nozzle10price = 0;
    let nozzle10SaleLiter = 0;
    let nozzle10FuelType = 0;
    let nozzle10No = 0;
        

    let nozzle11TotalPrice = 0;
    let nozzle11Opening = 0;
    let nozzle11price = 0;
    let nozzle11SaleLiter = 0;
    let nozzle11FuelType = 0;
    let nozzle11No = 0;
        

    let nozzle12TotalPrice = 0;
    let nozzle12Opening = 0;
    let nozzle12price = 0;
    let nozzle12SaleLiter = 0;
    let nozzle12FuelType = 0;
    let nozzle12No = 0;
        

    let nozzle13TotalPrice = 0;
    let nozzle13Opening = 0;
    let nozzle13price = 0;
    let nozzle13SaleLiter = 0;
    let nozzle13FuelType = 0;
    let nozzle13No = 0;
        

    let nozzle14TotalPrice = 0;
    let nozzle14Opening = 0;
    let nozzle14price = 0;
    let nozzle14SaleLiter = 0;
    let nozzle14FuelType = 0;
    let nozzle14No = 0;
        

    let nozzle15TotalPrice = 0;
    let nozzle15Opening = 0;
    let nozzle15price = 0;
    let nozzle15SaleLiter = 0;
    let nozzle15FuelType = 0;
    let nozzle15No = 0;
        

    let nozzle16TotalPrice = 0;
    let nozzle16Opening = 0;
    let nozzle16price = 0;
    let nozzle16SaleLiter = 0;
    let nozzle16FuelType = 0;
    let nozzle16No = 0;
        
      
    let nozzle17TotalPrice = 0;
    let nozzle17Opening = 0;
    let nozzle17price = 0;
    let nozzle17SaleLiter = 0;
    let nozzle17FuelType = 0;
    let nozzle17No = 0;
        
      
    let nozzle18TotalPrice = 0;
    let nozzle18Opening = 0;
    let nozzle18price = 0;
    let nozzle18SaleLiter = 0;
    let nozzle18FuelType = 0;
    let nozzle18No = 0;
        
        
    let nozzle19TotalPrice = 0;
    let nozzle19Opening = 0;
    let nozzle19price = 0;
    let nozzle19SaleLiter = 0;
    let nozzle19FuelType = 0;
    let nozzle19No = 0;
        
        
    let nozzle20TotalPrice = 0;
    let nozzle20Opening = 0;
    let nozzle20price = 0;
    let nozzle20SaleLiter = 0;
    let nozzle20FuelType = 0;
    let nozzle20No = 0;
        
        
    let nozzle21TotalPrice = 0;
    let nozzle21Opening = 0;
    let nozzle21price = 0;
    let nozzle21SaleLiter = 0;
    let nozzle21FuelType = 0;
    let nozzle21No = 0;
        
        
    let nozzle22TotalPrice = 0;
    let nozzle22Opening = 0;
    let nozzle22price = 0;
    let nozzle22SaleLiter = 0;
    let nozzle22FuelType = 0;
    let nozzle22No = 0;
        
        
    let nozzle23TotalPrice = 0;
    let nozzle23Opening = 0;
    let nozzle23price = 0;
    let nozzle23SaleLiter = 0;
    let nozzle23FuelType = 0;
    let nozzle23No = 0;
        
        
    let nozzle24TotalPrice = 0;
    let nozzle24Opening = 0;
    let nozzle24price = 0;
    let nozzle24SaleLiter = 0;
    let nozzle24FuelType = 0;
    let nozzle24No = 0;
        
        
    let nozzle25TotalPrice = 0;
    let nozzle25Opening = 0;
    let nozzle25price = 0;
    let nozzle25SaleLiter = 0;
    let nozzle25FuelType = 0;
    let nozzle25No = 0;
        
        
    let nozzle26TotalPrice = 0;
    let nozzle26Opening = 0;
    let nozzle26price = 0;
    let nozzle26SaleLiter = 0;
    let nozzle26FuelType = 0;
    let nozzle26No = 0;
        
        
    let nozzle27TotalPrice = 0;
    let nozzle27Opening = 0;
    let nozzle27price = 0;
    let nozzle27SaleLiter = 0;
    let nozzle27FuelType = 0;
    let nozzle27No = 0;
        
        
    let nozzle28TotalPrice = 0;
    let nozzle28Opening = 0;
    let nozzle28price = 0;
    let nozzle28SaleLiter = 0;
    let nozzle28FuelType = 0;
    let nozzle28No = 0;
        
      
    let nozzle29TotalPrice = 0;
    let nozzle29Opening = 0;
    let nozzle29price = 0;
    let nozzle29SaleLiter = 0;
    let nozzle29FuelType = 0;
    let nozzle29No = 0;
        
        
    let nozzle30TotalPrice = 0;
    let nozzle30Opening = 0;
    let nozzle30price = 0;
    let nozzle30SaleLiter = 0;
    let nozzle30FuelType = 0;
    let nozzle30No = 0;
        
      
    let nozzle31TotalPrice = 0;
    let nozzle31Opening = 0;
    let nozzle31price = 0;
    let nozzle31SaleLiter = 0;
    let nozzle31FuelType = 0;
    let nozzle31No = 0;
        
        
    let nozzle32TotalPrice = 0;
    let nozzle32Opening = 0;
    let nozzle32price = 0;
    let nozzle32SaleLiter = 0;
    let nozzle32FuelType = 0;
    let nozzle32No = 0;
        
      
      

      
    let stationNo = '';




    okData.forEach((obj) => {
      stationNo = obj.stationDetailId.name;
      if (obj.nozzleNo === '01') {
        nozzle1TotalPrice += obj.totalPrice
        nozzle1Opening = obj.totalizer_liter
        nozzle1price = obj.salePrice
        nozzle1SaleLiter += obj.saleLiter
        nozzle1FuelType = obj.fuelType
        nozzle1No = obj.nozzleNo
      }
      if (obj.nozzleNo === '02') {

        nozzle2TotalPrice += obj.totalPrice
        nozzle2Opening = obj.totalizer_liter
        nozzle2price = + obj.salePrice
        nozzle2SaleLiter = obj.saleLiter
        nozzle2FuelType = obj.fuelType
        nozzle2No = obj.nozzleNo
      }
      if (obj.nozzleNo === "03") {
        nozzle3TotalPrice += obj.totalPrice
        nozzle3Opening = obj.totalizer_liter
        nozzle3price = obj.salePrice
        nozzle3SaleLiter += obj.saleLiter
        nozzle3FuelType = obj.fuelType
        nozzle3No = obj.nozzleNo
      }
      if (obj.nozzleNo === "04") {

        nozzle4TotalPrice += obj.totalPrice
        nozzle4Opening = obj.totalizer_liter
        nozzle4price = obj.salePrice
        nozzle4SaleLiter += obj.saleLiter
        nozzle4FuelType = obj.fuelType
        nozzle4No = obj.nozzleNo
      }
      if (obj.nozzleNo === "05") {
        nozzle5TotalPrice += obj.totalPrice
        nozzle5Opening = obj.totalizer_liter
        nozzle5price = obj.salePrice
        nozzle5SaleLiter += obj.saleLiter
        nozzle5FuelType = obj.fuelType
        nozzle5No = obj.nozzleNo
      }
      if (obj.nozzleNo === "06") {
        nozzle6TotalPrice += obj.totalPrice
        nozzle6Opening = obj.totalizer_liter
        nozzle6price = obj.salePrice
        nozzle6SaleLiter += obj.saleLiter
        nozzle6FuelType = obj.fuelType
        nozzle6No = obj.nozzleNo
      }
      if (obj.nozzleNo === "07") {
        nozzle7TotalPrice += obj.totalPrice
        nozzle7Opening = obj.totalizer_liter
        nozzle7price = obj.salePrice
        nozzle7SaleLiter += obj.saleLiter
        nozzle7FuelType = obj.fuelType
        nozzle7No = obj.nozzleNo
      }
      if (obj.nozzleNo === "08") {
        nozzle8TotalPrice += obj.totalPrice
        nozzle8Opening = obj.totalizer_liter
        nozzle8price = obj.salePrice
        nozzle8SaleLiter += obj.saleLiter
        nozzle8FuelType = obj.fuelType
        nozzle8No = obj.nozzleNo
                 
      }
      if (obj.nozzleNo === "09") {
        nozzle9TotalPrice += obj.totalPrice
        nozzle9Opening = obj.totalizer_liter
        nozzle9price = obj.salePrice
        nozzle9SaleLiter += obj.saleLiter
        nozzle9FuelType = obj.fuelType
        nozzle9No = obj.nozzleNo
      }
      if (obj.nozzleNo === "10") {
        nozzle10TotalPrice += obj.totalPrice
        nozzle10Opening = obj.totalizer_liter
        nozzle10price = obj.salePrice
        nozzle10SaleLiter += obj.saleLiter
        nozzle10FuelType = obj.fuelType
        nozzle10No = obj.nozzleNo
      }
      if (obj.nozzleNo === "11") {
        nozzle11TotalPrice += obj.totalPrice
        nozzle11Opening = obj.totalizer_liter
        nozzle11price = obj.salePrice
        nozzle11SaleLiter += obj.saleLiter
        nozzle11FuelType = obj.fuelType
        nozzle11No = obj.nozzleNo
      }
      if (obj.nozzleNo === "12") {
        nozzle12TotalPrice += obj.totalPrice
        nozzle12Opening = obj.totalizer_liter
        nozzle12price = obj.salePrice
        nozzle12SaleLiter += obj.saleLiter
        nozzle12FuelType = obj.fuelType
        nozzle12No = obj.nozzleNo
      }
      if (obj.nozzleNo === "13") {
        nozzle13TotalPrice += obj.totalPrice
        nozzle13Opening = obj.totalizer_liter
        nozzle13price += obj.salePrice
        nozzle13SaleLiter = obj.saleLiter
        nozzle13FuelType = obj.fuelType
        nozzle13No = obj.nozzleNo
      }
      if (obj.nozzleNo === "14") {
        nozzle14TotalPrice += obj.totalPrice
        nozzle14Opening = obj.totalizer_liter
        nozzle14price = obj.salePrice
        nozzle14SaleLiter += obj.saleLiter
        nozzle14FuelType = obj.fuelType
        nozzle14No = obj.nozzleNo
      }
      if (obj.nozzleNo === "15") {
        nozzle15TotalPrice += obj.totalPrice
        nozzle15Opening = obj.totalizer_liter
        nozzle15price = obj.salePrice
        nozzle15SaleLiter += obj.saleLiter
        nozzle15FuelType = obj.fuelType
        nozzle15No = obj.nozzleNo
      }
      if (obj.nozzleNo === "16") {
        nozzle16TotalPrice += obj.totalPrice
        nozzle16Opening = obj.totalizer_liter
        nozzle16price = obj.salePrice
        nozzle16SaleLiter += obj.saleLiter
        nozzle16FuelType = obj.fuelType
        nozzle16No = obj.nozzleNo
      }
      if (obj.nozzleNo === "17") {
        nozzle17TotalPrice += obj.totalPrice
        nozzle17Opening = obj.totalizer_liter
        nozzle17price = obj.salePrice
        nozzle17SaleLiter += obj.saleLiter
        nozzle17FuelType = obj.fuelType
        nozzle17No = obj.nozzleNo
      }
      if (obj.nozzleNo === "18") {
        nozzle18TotalPrice += obj.totalPrice
        nozzle18Opening = obj.totalizer_liter
        nozzle18price = obj.salePrice
        nozzle18SaleLiter += obj.saleLiter
        nozzle18FuelType = obj.fuelType
        nozzle18No = obj.nozzleNo
      }
      if (obj.nozzleNo === "19") {
        nozzle19TotalPrice += obj.totalPrice
        nozzle19Opening = obj.totalizer_liter
        nozzle19price = obj.salePrice
        nozzle19SaleLiter += obj.saleLiter
        nozzle19FuelType = obj.fuelType
        nozzle19No = obj.nozzleNo
      }
      if (obj.nozzleNo === "20") {
        nozzle20TotalPrice += obj.totalPrice
        nozzle20Opening = obj.totalizer_liter
        nozzle20price = obj.salePrice
        nozzle20SaleLiter += obj.saleLiter
        nozzle20FuelType = obj.fuelType
        nozzle20No = obj.nozzleNo
      }
      if (obj.nozzleNo === "21") {
        nozzle21TotalPrice += obj.totalPrice
        nozzle21Opening = obj.totalizer_liter
        nozzle21price = obj.salePrice
        nozzle21SaleLiter += obj.saleLiter
        nozzle21FuelType = obj.fuelType
        nozzle21No = obj.nozzleNo
      }
      if (obj.nozzleNo === "22") {
        nozzle22TotalPrice += obj.totalPrice
        nozzle22Opening = obj.totalizer_liter
        nozzle22price = obj.salePrice
        nozzle22SaleLiter += obj.saleLiter
        nozzle22FuelType = obj.fuelType
        nozzle22No = obj.nozzleNo
      }
      if (obj.nozzleNo === "23") {
        nozzle23TotalPrice += obj.totalPrice
        nozzle23Opening = obj.totalizer_liter
        nozzle23price = obj.salePrice
        nozzle23SaleLiter += obj.saleLiter
        nozzle23FuelType = obj.fuelType
        nozzle23No = obj.nozzleNo
      }
      if (obj.nozzleNo === "24") {
        nozzle24TotalPrice += obj.totalPrice
        nozzle24Opening = obj.totalizer_liter
        nozzle24price = obj.salePrice
        nozzle24SaleLiter += obj.saleLiter
        nozzle24FuelType = obj.fuelType
        nozzle24No = obj.nozzleNo
      }
      if (obj.nozzleNo === "25") {
        nozzle25TotalPrice += obj.totalPrice
        nozzle25Opening = obj.totalizer_liter
        nozzle25price = obj.salePrice
        nozzle25SaleLiter += obj.saleLiter
        nozzle25FuelType = obj.fuelType
        nozzle25No = obj.nozzleNo
      }
      if (obj.nozzleNo === "26") {
        nozzle26TotalPrice += obj.totalPrice
        nozzle26Opening = obj.totalizer_liter
        nozzle26price = obj.salePrice
        nozzle26SaleLiter += obj.saleLiter
        nozzle26FuelType = obj.fuelType
        nozzle26No = obj.nozzleNo
      }
      if (obj.nozzleNo === "27") {
        nozzle27TotalPrice += obj.totalPrice
        nozzle27Opening = obj.totalizer_liter
        nozzle27price = obj.salePrice
        nozzle27SaleLiter += obj.saleLiter
        nozzle27FuelType = obj.fuelType
        nozzle27No = obj.nozzleNo
      }
      if (obj.nozzleNo === "28") {
        nozzle28TotalPrice += obj.totalPrice
        nozzle28Opening = obj.totalizer_liter
        nozzle28price = obj.salePrice
        nozzle28SaleLiter += obj.saleLiter
        nozzle28FuelType = obj.fuelType
        nozzle28No = obj.nozzleNo
      }
      if (obj.nozzleNo === "29") {
        nozzle29TotalPrice += obj.totalPrice
        nozzle29Opening = obj.totalizer_liter
        nozzle29price = obj.salePrice
        nozzle29SaleLiter += obj.saleLiter
        nozzle29FuelType = obj.fuelType
        nozzle29No = obj.nozzleNo
      }
      if (obj.nozzleNo === "30") {
        nozzle30TotalPrice += obj.totalPrice
        nozzle30Opening = obj.totalizer_liter
        nozzle30price = obj.salePrice
        nozzle30SaleLiter += obj.saleLiter
        nozzle30FuelType = obj.fuelType
        nozzle30No = obj.nozzleNo
      }
      if (obj.nozzleNo === "31") {
        nozzle31TotalPrice += obj.totalPrice
        nozzle31Opening = obj.totalizer_liter
        nozzle31price = obj.salePrice
        nozzle31SaleLiter += obj.saleLiter
        nozzle31FuelType = obj.fuelType
        nozzle31No = obj.nozzleNo
      }
      if (obj.nozzleNo === "32") {
        nozzle32TotalPrice += obj.totalPrice
        nozzle32Opening = obj.totalizer_liter
        nozzle32price = obj.salePrice
        nozzle32SaleLiter += obj.saleLiter
        nozzle32FuelType = obj.fuelType
        nozzle32No = obj.nozzleNo
      }
    })


    setPump1SalePrice(nozzle1TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump1opening(nozzle1Opening.toFixed(3));
    Setpump1price(nozzle1price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump1SaleLiter(nozzle1SaleLiter.toFixed(3));
    setPump1FuelType(nozzle1FuelType);
    setPump1No(nozzle1No);

    nozzle1SaleLiter = nozzle1SaleLiter / 4.16;
    nozzle1SaleLiter = nozzle1SaleLiter.toFixed(3);
    Setpump1gallon(nozzle1SaleLiter)


    SetPump2SalePrice(nozzle2TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump2opening(nozzle2Opening.toFixed(3));
    Setpump2price(nozzle2price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump2SaleLiter(nozzle2SaleLiter.toFixed(3));
    setPump2FuelType(nozzle2FuelType);
    setPump2No(nozzle2No);
        

    nozzle2SaleLiter = nozzle2SaleLiter / 4.16;
    nozzle2SaleLiter = nozzle2SaleLiter.toFixed(3);
    Setpump2gallon(nozzle2SaleLiter)


    setStation(stationNo);


    SetPump3SalePrice(nozzle3TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump3opening(nozzle3Opening.toFixed(3));
    Setpump3price(nozzle3price.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    setPump3SaleLiter(nozzle3SaleLiter.toFixed(3));
    setPump3FuelType(nozzle3FuelType);
    setPump3No(nozzle3No);
        

    nozzle3SaleLiter = nozzle3SaleLiter / 4.16;
    nozzle3SaleLiter = nozzle3SaleLiter.toFixed(3);
    Setpump3gallon(nozzle3SaleLiter)

    SetPump4SalePrice(nozzle4TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    Setpump4opening(nozzle4Opening.toFixed(3));
    Setpump4price(nozzle4price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump4SaleLiter(nozzle4SaleLiter.toFixed(3));
    setPump4FuelType(nozzle4FuelType);
    setPump4No(nozzle4No);
        

    nozzle4SaleLiter = nozzle4SaleLiter / 4.16;
    nozzle4SaleLiter = nozzle4SaleLiter.toFixed(3);
    Setpump4gallon(nozzle4SaleLiter)
    //  if (nozzle4Premium !== 0.000 && nozzle4Premium) {
    //     nozzle4Premium = nozzle4Premium / 3.78541;
    //     nozzle4Premium = nozzle4Premium.toFixed(3);
    //     Setpump4gallon(nozzle4Premium)
    // }

    SetPump5SalePrice(nozzle5TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    Setpump5opening(nozzle5Opening.toFixed(3));
    Setpump5price(nozzle5price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump5SaleLiter(nozzle5SaleLiter.toFixed(3));
    setPump5FuelType(nozzle5FuelType)
    setPump5No(nozzle5No);
      
    nozzle5SaleLiter = nozzle5SaleLiter / 4.16;
    nozzle5SaleLiter = nozzle5SaleLiter.toFixed(3);
    Setpump5gallon(nozzle5SaleLiter)
    // if (nozzle5Premium !== 0.000 && nozzle5Premium) {
    //     nozzle5Premium = nozzle5Premium / 3.78541;
    //     nozzle5Premium = nozzle5Premium.toFixed(3);
    //     Setpump5gallon(nozzle5Premium)
    // }


    SetPump6SalePrice(nozzle6TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump6opening(nozzle6Opening.toFixed(3));
    Setpump6price(nozzle6price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump6SaleLiter(nozzle6SaleLiter.toFixed(3));
    setPump6FuelType(nozzle6FuelType);
    setPump6No(nozzle6No);

    nozzle6SaleLiter = nozzle6SaleLiter / 4.16;
    nozzle6SaleLiter = nozzle6SaleLiter.toFixed(3);
    Setpump6gallon(nozzle6SaleLiter)
    //  if (nozzle6Diesel !== 0.000 && nozzle6Diesel) {
    //     nozzle6Diesel = nozzle6Diesel / 3.78541;
    //     nozzle6Diesel = nozzle6Diesel.toFixed(3);
    //     Setpump6gallon(nozzle6Diesel)
    // }

    SetPump7SalePrice(nozzle7TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    Setpump7opening(nozzle7Opening.toFixed(3));
    Setpump7price(nozzle7price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump7SaleLiter(nozzle7SaleLiter.toFixed(3));
    setPump7FuelType(nozzle7FuelType);
    setPump7No(nozzle7No);
      
    nozzle7SaleLiter = nozzle7SaleLiter / 4.16;
    nozzle7SaleLiter = nozzle7SaleLiter.toFixed(3);
    Setpump7gallon(nozzle7SaleLiter)
    //  if (nozzle7Diesel !== 0.000 && nozzle7Diesel) {
    //     nozzle7Diesel = nozzle7Diesel / 3.78541;
    //     nozzle7Diesel = nozzle7Diesel.toFixed(3);
    //     Setpump7gallon(nozzle7Diesel)
    // }

    SetPump8SalePrice(nozzle8TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump8opening(nozzle8Opening.toFixed(3));
    Setpump8price(nozzle8price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump8SaleLiter(nozzle8SaleLiter.toFixed(3));
    setPump8FuelType(nozzle8FuelType);
    setPump8No(nozzle8No);

    nozzle8SaleLiter = nozzle8SaleLiter / 3.78541;
    nozzle8SaleLiter = nozzle8SaleLiter.toFixed(3);
    Setpump8gallon(nozzle8SaleLiter)
    //   if (nozzle8Diesel !== 0.000 && nozzle8Diesel) {
    //     nozzle8Diesel = nozzle8Diesel / 3.78541;
    //     nozzle8Diesel = nozzle8Diesel.toFixed(3);
    //     Setpump8gallon(nozzle8Diesel)
    // }

    SetPump9SalePrice(nozzle9TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump9opening(nozzle9Opening.toFixed(3));
    Setpump9price(nozzle9price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump9SaleLiter(nozzle9SaleLiter.toFixed(3));
    setPump9FuelType(nozzle9FuelType);
    setPump9No(nozzle9No);


    nozzle9SaleLiter = nozzle9SaleLiter / 4.16;
    nozzle9SaleLiter = nozzle9SaleLiter.toFixed(3);
    Setpump9gallon(nozzle9SaleLiter)

    //   if (nozzle9Premium !== 0.000 && nozzle9Premium) {
    //     nozzle9Premium = nozzle9Premium / 3.78541;
    //     nozzle9Premium = nozzle9Premium.toFixed(3);
    //     Setpump9gallon(nozzle9Premium)
    // }

    SetPump10SalePrice(nozzle10TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump10opening(nozzle10Opening.toFixed(3));
    Setpump10price(nozzle10price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump10SaleLiter(nozzle10SaleLiter.toFixed(3));
    setPump10FuelType(nozzle10FuelType);
    setPump10No(nozzle10No);


    nozzle10SaleLiter = nozzle10SaleLiter / 4.16;
    nozzle10SaleLiter = nozzle10SaleLiter.toFixed(3);
    Setpump10gallon(nozzle10SaleLiter)

    //   if (nozzle10Diesel !== 0.000 && nozzle10Diesel) {
    //     nozzle10Diesel = nozzle10Diesel / 3.78541;
    //     nozzle10Diesel = nozzle10Diesel.toFixed(3);
    //     Setpump10gallon(nozzle10Diesel)
    // }

    SetPump11SalePrice(nozzle11TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump11opening(nozzle11Opening.toFixed(3));
    Setpump11price(nozzle11price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump11SaleLiter(nozzle11SaleLiter.toFixed(3));
    setPump11FuelType(nozzle11FuelType);
    setPump11No(nozzle11No);
        


    nozzle11SaleLiter = nozzle11SaleLiter / 4.16;
    nozzle11SaleLiter = nozzle11SaleLiter.toFixed(3);
    Setpump11gallon(nozzle11SaleLiter)

    //  if (nozzle11Diesel !== 0.000 && nozzle11Diesel) {
    //     nozzle11Diesel = nozzle11Diesel / 3.78541;
    //     nozzle11Diesel = nozzle11Diesel.toFixed(3);
    //     Setpump11gallon(nozzle11Diesel)
    // }

    SetPump12SalePrice(nozzle12TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump12opening(nozzle12Opening.toFixed(3));
    Setpump12price(nozzle12price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump12SaleLiter(nozzle12SaleLiter.toFixed(3));
    setPump12FuelType(nozzle12FuelType);
    setPump12No(nozzle12No);
      
 
    nozzle12SaleLiter = nozzle12SaleLiter / 4.16;
    nozzle12SaleLiter = nozzle12SaleLiter.toFixed(3);
    Setpump12gallon(nozzle12SaleLiter)
    //    if (nozzle12Premium !== 0.000 && nozzle12Premium) {
    //     nozzle12Premium = nozzle12Premium / 3.78541;
    //     nozzle12Premium = nozzle12Premium.toFixed(3);
    //     Setpump12gallon(nozzle12Premium)
    // }

    SetPump13SalePrice(nozzle13TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump13opening(nozzle13Opening.toFixed(3));
    Setpump13price(nozzle13price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump13SaleLiter(nozzle13SaleLiter.toFixed(3));
    setPump13FuelType(nozzle13FuelType);
    setPump13No(nozzle13No);
      

    nozzle13SaleLiter = nozzle13SaleLiter / 4.16;
    nozzle13SaleLiter = nozzle13SaleLiter.toFixed(3);
    Setpump13gallon(nozzle13SaleLiter)

    //  if (nozzle1392 !== 0.000 && nozzle1392) {
    //     nozzle1392 = nozzle1392 / 3.78541;
    //     nozzle1392 = nozzle1392.toFixed(3);
    //     Setpump13gallon(nozzle1392)
    // }




    SetPump14SalePrice(nozzle14TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump14opening(nozzle14Opening.toFixed(3));
    Setpump14price(nozzle14price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump14SaleLiter(nozzle14SaleLiter.toFixed(3));
    setPump14FuelType(nozzle14FuelType);
    setPump14No(nozzle14No);

    nozzle14SaleLiter = nozzle14SaleLiter / 4.16;
    nozzle14SaleLiter = nozzle14SaleLiter.toFixed(3);
    Setpump14gallon(nozzle14SaleLiter)

    //    if (nozzle1495 !== 0.000 && nozzle1495) {
    //     nozzle1495 = nozzle1495 / 3.78541;
    //     nozzle1495 = nozzle1495.toFixed(3);
    //     Setpump14gallon(nozzle1495)
    // }

    SetPump15SalePrice(nozzle15TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump15opening(nozzle15Opening.toFixed(3));
    Setpump15price(nozzle15price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump15SaleLiter(nozzle15SaleLiter.toFixed(3));
    setPump15FuelType(nozzle15FuelType);
    setPump15No(nozzle15No);


    nozzle15SaleLiter = nozzle15SaleLiter / 4.16;
    nozzle15SaleLiter = nozzle15SaleLiter.toFixed(3);
    Setpump15gallon(nozzle15SaleLiter)

    //  if (nozzle1595 !== 0.000 && nozzle1595) {
    //     nozzle1595 = nozzle1595 / 3.78541;
    //     nozzle1595 = nozzle1595.toFixed(3);
    //     Setpump15gallon(nozzle1595)
    // }



    SetPump16SalePrice(nozzle16TotalPrice.toLocaleString(undefined, { maximumFractionDigits: 3 }));
    Setpump16opening(nozzle16Opening.toFixed(3));
    Setpump16price(nozzle16price.toLocaleString(undefined, { maximumFractionDigits: 3 }))
    setPump16SaleLiter(nozzle16SaleLiter.toFixed(3));
    setPump16FuelType(nozzle16FuelType);
    setPump16No(nozzle16No);


    nozzle16SaleLiter = nozzle16SaleLiter / 4.16;
    nozzle16SaleLiter = nozzle16SaleLiter.toFixed(3);
    Setpump16gallon(nozzle16SaleLiter)

    //    if (nozzle1692 !== 0.000 && nozzle1692) {
    //     nozzle1692 = nozzle1692 / 3.78541;
    //     nozzle1692 = nozzle1692.toFixed(3);
    //     Setpump16gallon(nozzle1692)
    // }
       
       
    SetCurrentDate(isSearch);


      
    const pureObj = [
      {
        stationNo: station,
        nozzleNo: '01',
        fuelType: pump1FuelType,
        salePrice: pump1price,
        opening: (parseFloat(pump1opening) - parseFloat(pump1SaleLiter)) === 0 ? "-" : (parseFloat(pump1opening) - parseFloat(pump1SaleLiter)).toFixed(3),
        closing: ((parseFloat(pump1opening) - parseFloat(pump1SaleLiter)) + parseFloat(pump1SaleLiter)).toFixed(3)
      }

    ]



  }, [okData, currentDate, todayDate, calenderTwo, isSearch]);


  useEffect(() => { }, [
    
  ]);


  const handlePrint = useReactToPrint({
    content:()=>tRef.current
  })

  const { onDownload } = useDownloadExcel({
    currentTableRef: tRef.current,
    filename: `Statement Report`,
    sheet:  `Statement Report`
   })



  return (
      <div className='mt-[70px]'>
    <table ref={tRef}>
  <tr>
    <th className='w-[100px]'>Station</th>
    <th>Nozzle</th>
    <th className='w-[200px]'>Fuel Type</th>
    <th className='w-[100px]'>Price (Kyats)</th>
                  <th>Totalizer Opening (Li)</th>
                  {
                      currentDate !== todayDate ? <th>Totalizer Closing (Li)</th>:<></>
                  }
                  {
                      user.name === "admin"?   currentDate !== todayDate ? <th>Difference Liters (Li)</th>:<></>:""
                  }
                 
   
    <th>Sale Liters (Li)</th>
    <th>Total Gallon (Gallon)</th>
    <th>Total Price (Kyats)</th>
    
  </tr>
              <tr>
          <td className='text-left '>{station}</td>
          <td className='text-left'>Nozzle {pump1No}</td>
                  <td className='text-left'>{pump1FuelType == "0"?"-":pump1FuelType}</td>
                  <td className='text-right'>{pump1price === "0"?"-":pump1price}</td>
                  <td className='text-right'>{(parseFloat(pump1opening) - parseFloat(pump1SaleLiter)) === 0?"-":(parseFloat(pump1opening) - parseFloat(pump1SaleLiter)).toFixed(3)}</td>
                  {
                      currentDate !== todayDate?  <td className='text-right'>{ (( parseFloat(pump1opening) - parseFloat(pump1SaleLiter))  + parseFloat(pump1SaleLiter)).toFixed(3) }</td>:<></>
                  }
                  {
                    user.name === "admin"?  currentDate !== todayDate?  <td className='text-right'>{ ((( parseFloat(pump1opening) - parseFloat(pump1SaleLiter))  + parseFloat(pump1SaleLiter)) - (parseFloat(pump1opening) - parseFloat(pump1SaleLiter))).toFixed(3) } L</td>:<></>:""
                  }
                
                  <td className='text-right'>{pump1SaleLiter}</td>
                  <td className='text-right'>{pump1gallon}</td>
                  <td className='text-right'>{pump1SalePrice}</td>
              </tr>
              <tr> 
                  <td className='text-left'>{station}</td>
                  <td className='text-left'>Nozzle {pump2No}</td>
                  <td className='text-left'>{pump2FuelType == "0"?'-':pump2FuelType}</td>
                   <td className='text-right'>{pump2price === "0"?"-":pump2price}</td>
                  <td className='text-right'>{(parseFloat(pump2opening) - parseFloat(pump2SaleLiter)) === 0?"-":(parseFloat(pump2opening) - parseFloat(pump2SaleLiter)).toFixed(3)}</td>
                  {
                      currentDate !== todayDate ?  <td className='text-right'>{ ((parseFloat(pump2opening) - parseFloat(pump2SaleLiter))  + parseFloat(pump2SaleLiter)).toFixed(3) }</td>:<></>
                  }
                    {
                    user.name === "admin"?  currentDate !== todayDate ?  <td className='text-right'>{ (((parseFloat(pump2opening) - parseFloat(pump2SaleLiter))  + parseFloat(pump2SaleLiter)) -(parseFloat(pump2opening) - parseFloat(pump2SaleLiter))).toFixed(3)} L</td>:<></>:""
                  }
   
                  <td className='text-right'>{pump2SaleLiter}</td>
                  <td className='text-right'>{pump2gallon}</td>
                  <td className='text-right'>{pump2SalePrice}</td>
   
                  
  </tr>
              <tr>
                   <td className='text-left'>{station}</td>
                  
                  <td className='text-left'>Nozzle {pump3No}</td>
                  <td className='text-left'>{pump3FuelType == "0"?"-":pump3FuelType}</td>
    <td className='text-right'>{pump3price === "0"?"-":pump3price} </td>
                  <td className='text-right'>{(parseFloat(pump3opening) - parseFloat(pump3SaleLiter)) === 0 ? "-":(parseFloat(pump3opening) - parseFloat(pump3SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ?    <td className='text-right'>{( (parseFloat(pump3opening) - parseFloat(pump3SaleLiter))  + parseFloat(pump3SaleLiter)).toFixed(3) }</td>:<></>
                  }
                   {
                   user.name === "admin"? currentDate !== todayDate ?    <td className='text-right'>{(( (parseFloat(pump3opening) - parseFloat(pump3SaleLiter))  + parseFloat(pump3SaleLiter)) -(parseFloat(pump3opening) - parseFloat(pump3SaleLiter))).toFixed(3)} L</td>:<></>:""
                  }
 
                  <td className='text-right'>{pump3SaleLiter}</td>
                  <td className='text-right'>{pump3gallon}</td>
                  
  <td className='text-right'>{pump3SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{station}</td>
                  
                  <td className='text-left'>Nozzle {pump4No}</td>
                  <td className='text-left'>{pump4FuelType == '0' ? '-':pump4FuelType}</td>
    <td className='text-right'>{pump4price === "0"?"-":pump4price}</td>
                  <td className='text-right'>{(parseFloat(pump4opening) - parseFloat(pump4SaleLiter)) === 0?"-":(parseFloat(pump4opening) - parseFloat(pump4SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ?<td className='text-right'>{ ((parseFloat(pump4opening) - parseFloat(pump4SaleLiter))  + parseFloat(pump4SaleLiter)).toFixed(3) }</td> :<></>
                  }
                   {
                     user.name === "admin"? currentDate !== todayDate ?<td className='text-right'>{ (((parseFloat(pump4opening) - parseFloat(pump4SaleLiter))  + parseFloat(pump4SaleLiter))-(parseFloat(pump4opening) - parseFloat(pump4SaleLiter))).toFixed(3) }</td> :<></>:""
                  }
   
                  <td className='text-right'>{pump4SaleLiter}</td>
                  <td className='text-right'>{pump4gallon}</td>


  <td className='text-right'>{pump4SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{station}</td>
                  
                  <td className='text-left'>Nozzle {pump5No}</td>
                  <td className='text-left'>{pump5FuelType == '0'?'-':pump5FuelType}</td>
                  
    <td className='text-right'>{pump5price == "0"?"-":pump5price}</td>
                  <td className='text-right'>{(parseFloat(pump5opening) - parseFloat(pump5SaleLiter))=== 0?"-":(parseFloat(pump5opening) - parseFloat(pump5SaleLiter))}</td>
                   {
                      currentDate !== todayDate ?  <td className='text-right'>{( (parseFloat(pump5opening) - parseFloat(pump5SaleLiter))  + parseFloat(pump5SaleLiter)).toFixed(3) }</td> :<></>
                  }
                   {
                    user.name === "admin"?  currentDate !== todayDate ?  <td className='text-right'>{(( (parseFloat(pump5opening) - parseFloat(pump5SaleLiter))  + parseFloat(pump5SaleLiter)) -(parseFloat(pump5opening) - parseFloat(pump5SaleLiter)) ).toFixed(3)}</td> :<></>:""
                  }
  
                  <td className='text-right'>{pump5SaleLiter}</td>
                  <td className='text-right'>{pump5gallon}</td>

  <td className='text-right'>{pump5SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{station}</td>
                  <td className='text-left'>Nozzl {pump6No}</td>
                  <td className='text-left'>{pump6FuelType == "0"?'-':pump6FuelType}</td>
      <td className='text-right'>{pump6price == "0"?"-":pump6price}</td>
                  {/* <td className='text-right'>{(parseFloat(pump6opening) - parseFloat(pump6SaleLiter)) === 0?"-":(parseFloat(pump6opening) - parseFloat(pump6SaleLiter)).toFixed(3)}</td> */}
                  <td className='text-right'>{(parseFloat(pump6opening) - parseFloat(pump6SaleLiter)) === 0?"-":(parseFloat(pump6opening) - parseFloat(pump6SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ?  <td className='text-right'>{( (parseFloat(pump6opening) - parseFloat(pump6SaleLiter))  + parseFloat(pump6SaleLiter)).toFixed(3) }</td> :<></>
                  }
                   {
                    user.name === "admin"?  currentDate !== todayDate ?  <td className='text-right'>{(( (parseFloat(pump6opening) - parseFloat(pump6SaleLiter))  + parseFloat(pump6SaleLiter)) -(parseFloat(pump6opening) - parseFloat(pump6SaleLiter)) ).toFixed(3)}</td> :<></>:""
                  }
              
                  <td className='text-right'>{pump6SaleLiter}</td>
                  <td className='text-right'>{pump6gallon}</td>
                  

  <td className='text-right'>{pump6SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{selectedStation.name}</td>
                  
                  <td className='text-left'>Nozzle {pump7No}</td>
                  <td className='text-left'>{pump7FuelType == "0"?'-':pump7FuelType}</td>
                  
     <td className='text-right'>{pump7price === "0"? "-":pump7price}</td>
                  <td className='text-right'>{(parseFloat(pump7opening) - parseFloat(pump7SaleLiter)) === 0?"-":(parseFloat(pump7opening) - parseFloat(pump7SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ?  <td className='text-right'>{ ((parseFloat(pump7opening) - parseFloat(pump7SaleLiter))  + parseFloat(pump7SaleLiter)).toFixed(3) }</td>:<></>
                  }
                   {
                     user.name === "admin"? currentDate !== todayDate ?  <td className='text-right'>{( ((parseFloat(pump7opening) - parseFloat(pump7SaleLiter))  + parseFloat(pump7SaleLiter))-(parseFloat(pump7opening) - parseFloat(pump7SaleLiter))).toFixed(3) }</td>:<></>:""
                  }
                  
                     
    <td className='text-right'>{pump7SaleLiter}</td>
                  <td className='text-right'>{pump7gallon}</td>

  <td className='text-right'>{pump7SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{selectedStation.name}</td>
                  
                  <td className='text-left'>Nozzle {pump8FuelType}</td>
                  <td className='text-left'>{pump8FuelType == "0"?"-":pump8FuelType}</td>
                  
    <td className='text-right'>{pump8price === "0"?"-":pump8price}</td>
                  <td className='text-right'>{(parseFloat(pump8opening) - parseFloat(pump8SaleLiter)) === 0 ?"-":(parseFloat(pump8opening) - parseFloat(pump8SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ? <td className='text-right'>{((parseFloat(pump8opening) - parseFloat(pump8SaleLiter)) + parseFloat(pump8SaleLiter)).toFixed(3)}</td> :<></>
                  }
                   {
                    user.name === "admin"?    currentDate !== todayDate ? <td className='text-right'>{(((parseFloat(pump8opening) - parseFloat(pump8SaleLiter)) + parseFloat(pump8SaleLiter)) - (parseFloat(pump8opening) - parseFloat(pump8SaleLiter))).toFixed(3)}</td> :<></>:""
                  }
      
                  
                  <td className='text-right'>{pump8SaleLiter}</td>
                  <td className='text-right'>{pump8gallon}</td>

  <td className='text-right'>{pump8SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{selectedStation.name}</td>
                  
                  <td className='text-left'>Nozzle {pump9No}</td>
                  <td className='text-left'>{pump9FuelType == "0"?"-":pump9FuelType}</td>
    <td className='text-right'>{pump9price === "0"? "-":pump9price}</td>
                  <td className='text-right'>{(parseFloat(pump9opening) - parseFloat(pump9SaleLiter)) === 0?"-":(parseFloat(pump9opening) - parseFloat(pump9SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ? <td className='text-right'>{((parseFloat(pump9opening) - parseFloat(pump9SaleLiter)) + parseFloat(pump9SaleLiter)).toFixed(3)}</td>:<></>
                  }
                     {
                      user.name=== "admin"?currentDate !== todayDate ? <td className='text-right'>{(((parseFloat(pump9opening) - parseFloat(pump9SaleLiter)) + parseFloat(pump9SaleLiter)) - (parseFloat(pump9opening) - parseFloat(pump9SaleLiter))).toFixed(3)}</td>:<></>:""
                  }
  
                  <td className='text-right'>{pump9SaleLiter}</td>
                  <td className='text-right'>{pump9gallon}</td>

  <td className='text-right'>{pump9SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{selectedStation.name}</td>
                  
                  <td className='text-left'>Nozzle {pump10No}</td>
                  <td className='text-left'>{pump10FuelType == "0"?"-":pump10FuelType}</td>
    <td className='text-right'>{pump10price === "0"?"-":pump10price}</td>
                  <td className='text-right'>{(parseFloat(pump10opening) - parseFloat(pump10SaleLiter)) === 0?"-":(parseFloat(pump10opening) - parseFloat(pump10SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ? <td className='text-right'>{((parseFloat(pump10opening) - parseFloat(pump10SaleLiter)) + parseFloat(pump10SaleLiter)).toFixed(3)}</td> :<></>
                  }
                  {
                     user.name === "admin"? currentDate !== todayDate ? <td className='text-right'>{(((parseFloat(pump10opening) - parseFloat(pump10SaleLiter)) + parseFloat(pump10SaleLiter)) -(parseFloat(pump10opening) - parseFloat(pump10SaleLiter)) ).toFixed(3)}</td> :<></>:""
                  }
                 
    <td className='text-right'>{pump10SaleLiter}</td>
                  <td className='text-right'>{pump10gallon}</td>
  <td className='text-right'>{pump10SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{selectedStation.name}</td>
                  
                  <td className='text-left'>Nozzle {pump11No}</td>
                  <td className='text-left'>{pump11FuelType == "0"?"-":pump11FuelType}</td>
    <td className='text-right'>{pump11price === "0"?"-":pump11price}</td>
                  <td className='text-right'>{(parseFloat(pump11opening) - parseFloat(pump11SaleLiter)) === 0?"-":(parseFloat(pump11opening) - parseFloat(pump11SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ?     <td className='text-right'>{((parseFloat(pump11opening) - parseFloat(pump11SaleLiter)) + parseFloat(pump11SaleLiter)).toFixed(3)}</td> :<></>
                  }
                   {
                    user.name === "admin"?  currentDate !== todayDate ?     <td className='text-right'>{(((parseFloat(pump11opening) - parseFloat(pump11SaleLiter)) + parseFloat(pump11SaleLiter)) - (parseFloat(pump11opening) - parseFloat(pump11SaleLiter))).toFixed(3)}</td> :<></>:''
                  }
                
    <td className='text-right'>{pump11SaleLiter}</td>
                  <td className='text-right'>{pump11gallon}</td>

  <td className='text-right'>{pump11SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{selectedStation.name}</td>
                  
                  <td className='text-left'>Nozzle {pump12No}</td>
                  <td className='text-left'>{pump12FuelType == "0"?"-":pump12FuelType}</td>
    <td className='text-right'>{pump12price === "0"?"-":pump12price}</td>
                  <td className='text-right'>{(parseFloat(pump12opening) - parseFloat(pump12SaleLiter)) === 0?"-":(parseFloat(pump12opening) - parseFloat(pump12SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ?   <td className='text-right'>{((parseFloat(pump12opening) - parseFloat(pump12SaleLiter)) + parseFloat(pump12SaleLiter)).toFixed(3)}</td> :<></>
                  }
                   {
                     user.name=== "admin"? currentDate !== todayDate ?   <td className='text-right'>{(((parseFloat(pump12opening) - parseFloat(pump12SaleLiter)) + parseFloat(pump12SaleLiter)) - (parseFloat(pump12opening) - parseFloat(pump12SaleLiter))).toFixed(3)}</td> :<></>:""
                  }
                     
                  <td className='text-right'>{pump12SaleLiter}</td>
                  <td className='text-right'>{pump12gallon}</td>

  <td className='text-right'>{pump12SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{selectedStation.name}</td>
                  
                  <td className='text-left'>Nozzle {pump13No}</td>
                  <td className='text-left'>{pump13FuelType =="0"? '-':pump13FuelType}</td>
    <td className='text-right'>{pump13price === "0"?"-":pump13price}</td>
                  <td className='text-right'>{(parseFloat(pump13opening) - parseFloat(pump13SaleLiter)) === 0?"-":(parseFloat(pump13opening) - parseFloat(pump13SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ? <td className='text-right'>{((parseFloat(pump13opening) - parseFloat(pump13SaleLiter)) + parseFloat(pump13SaleLiter)).toFixed(3)}</td> :<></>
                  }
                   {
                     user.name === "admin"?   currentDate !== todayDate ? <td className='text-right'>{(((parseFloat(pump13opening) - parseFloat(pump13SaleLiter)) + parseFloat(pump13SaleLiter)) - (parseFloat(pump13opening) - parseFloat(pump13SaleLiter))).toFixed(3)}</td> :<></>:''
                  }
      
    <td className='text-right'>{pump13SaleLiter}</td>
                  <td className='text-right'>{pump13gallon}</td>

  <td className='text-right'>{pump13SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{selectedStation.name}</td>
                  
                  <td className='text-left'>Nozzle {pump14No}</td>
                  <td className='text-left'>{pump14FuelType == "0"? '-':pump14FuelType}</td>
    <td className='text-right'>{pump14price === "0"?"-":pump14price}</td>
                  <td className='text-right'>{(parseFloat(pump14opening) - parseFloat(pump14SaleLiter)) === 0?"-":(parseFloat(pump14opening) - parseFloat(pump14SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ?  <td className='text-right'>{((parseFloat(pump14opening) - parseFloat(pump14SaleLiter)) + parseFloat(pump14SaleLiter)).toFixed(3)}</td>:<></>
                  }
                  {
                    user.name === "admin"?  currentDate !== todayDate ?  <td className='text-right'>{(((parseFloat(pump14opening) - parseFloat(pump14SaleLiter)) + parseFloat(pump14SaleLiter)) - (parseFloat(pump14opening) - parseFloat(pump14SaleLiter))).toFixed(3)}</td>:<></>:""
                  }
        
    <td className='text-right'>{pump14SaleLiter}</td>
                  <td className='text-right'>{pump14gallon}</td>

  <td className='text-right'>{pump14SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{selectedStation.name}</td>
                  
          <td className='text-left'>Nozzle {pump15No}</td>
                  <td className='text-left'>{pump15FuelType == "0"? "-":pump15FuelType}</td>
     <td className='text-right'>{pump15price === "0"? "-":pump15price}</td>
                  <td className='text-right'>{(parseFloat(pump15opening) - parseFloat(pump15SaleLiter)) === 0?"-":(parseFloat(pump15opening) - parseFloat(pump15SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ?  <td className='text-right'>{((parseFloat(pump15opening) - parseFloat(pump15SaleLiter)) + parseFloat(pump15SaleLiter)).toFixed(3)}</td> :<></>
                  }
                   {
                     user.name === "admin"? currentDate !== todayDate ?  <td className='text-right'>{(((parseFloat(pump15opening) - parseFloat(pump15SaleLiter)) + parseFloat(pump15SaleLiter)) - (parseFloat(pump15opening) - parseFloat(pump15SaleLiter))).toFixed(3)}</td> :<></>:""
                  }
       
    <td className='text-right'>{pump15SaleLiter}</td>
                  <td className='text-right'>{pump15gallon}</td>

  <td className='text-right'>{pump15SalePrice}</td>
                  
  </tr>
              <tr>
                   <td className='text-left'>{selectedStation.name}</td>
                  
                  <td className='text-left'>Nozzle {pump16No}</td>
                  <td className='text-left'>{pump16FuelType == "0"?'_':pump16FuelType}</td>
     <td className='text-right'>{pump16price === "0"?"-":pump16price}</td>
                  <td className='text-right'>{(parseFloat(pump16opening) - parseFloat(pump16SaleLiter))=== 0?"-":(parseFloat(pump16opening) - parseFloat(pump16SaleLiter)).toFixed(3)}</td>
                   {
                      currentDate !== todayDate ?<td className='text-right'>{((parseFloat(pump16opening) - parseFloat(pump16SaleLiter)) + parseFloat(pump16SaleLiter)).toFixed(3)}</td> :<></>
                  }
                   {
                      user.name === "admin"?currentDate !== todayDate ?<td className='text-right'>{(((parseFloat(pump16opening) - parseFloat(pump16SaleLiter)) + parseFloat(pump16SaleLiter)) - (parseFloat(pump16opening) - parseFloat(pump16SaleLiter))).toFixed(3)}</td> :<></>:""
                  }
    
     <td className='text-right'>{pump16SaleLiter}</td>
                  <td className='text-right'>{pump16gallon}</td>

  <td className='text-right'>{pump16SalePrice}</td>
              </tr>
          </table>
          <div className='flex p-3  text-[16px] mt-[30px] mb-[50px] items-center justify-start gap-3'>
          <button onClick={onDownload} className='flex items-center justify-center gap-2 text-md' >To Excel <RiFileExcel2Fill size={30} /></button>
          <button onClick={handlePrint} className='flex items-center justify-center gap-2 text-md' >To Print <AiFillPrinter size={30}/></button>
          </div>
    </div>
  )
}

export default ShiftLeader