import React,{useEffect, useState} from 'react'

function AdjustmentTable({tableRef,okData,calenderOne,calenderTwo}) {
    const [f921, Setf921] = useState(0);
    const [f927, Setf927] = useState(0);
    const [f958, Setf958] = useState(0);
    const [hsd2, Sethsd2] = useState(0);
    const [hsd3, Sethsd3] = useState(0);
    const [hsd5, Sethsd5] = useState(0);
    const [pd4, Setpd4] = useState(0);
    const [pd6, Setpd6] = useState(0);



    useEffect(() => {

        let v921 = 0;
        let v927 = 0;
        let v958 = 0;
        let vhsd2 = 0;
        let vhsd3 = 0;
        let vhsd5 = 0;
        let vpd4 = 0;
        let vpd6 = 0;
   

    okData.forEach((obj) => {
     if (obj.nozzleNo === 1) {
        vpd4 += obj.saleLiter
     }
        if (obj.nozzleNo === 2) {
        vhsd3 += obj.saleLiter
        }
        if (obj.nozzleNo === 3) {
        vhsd3 += obj.saleLiter
        }
        if (obj.nozzleNo === 4) {
        vpd4 += obj.saleLiter
        }
        if (obj.nozzleNo === 5) {
        v921 += obj.saleLiter
        }
        if (obj.nozzleNo === 6) {
        vhsd2 += obj.saleLiter
        }
        if (obj.nozzleNo === 7) {
        vhsd2 += obj.saleLiter
        }
        if (obj.nozzleNo === 8) {
            v921 += obj.saleLiter
        }
        if (obj.nozzleNo === 9) {
            vpd6 += obj.saleLiter
        }
        if (obj.nozzleNo === 10) {
            vhsd5 += obj.saleLiter
        }
        if (obj.nozzleNo === 11) {
            vhsd5 += obj.saleLiter
        }
        if (obj.nozzleNo === 12) {
            vpd6 += obj.saleLiter
        }
        if (obj.nozzleNo === 13) {
            v927 += obj.saleLiter
        }
        if (obj.nozzleNo === 14) {
            v958 += obj.saleLiter
        }
        if (obj.nozzleNo === 15) {
            v958 += obj.saleLiter
        }
        if (obj.nozzleNo === 16) {
            v927 += obj.saleLiter
        }


    });
        
        Setf921(v921);
        Setf927(v927);
        Setf958(v958);
        Sethsd2(vhsd2);
        Sethsd3(vhsd3);
        Sethsd5(vhsd5);
        Setpd4(vpd4);
        Setpd6(vpd6);
        
        
    
  }, [okData,calenderOne,calenderTwo])
  

  

  return (
      <>
          <p className='mx-auto font-bold text-center mt-[40px]'>Date Start from {calenderOne?calenderOne.toDateString():"__"} to {calenderTwo?calenderTwo.toDateString():"__"} </p>
    <table ref={tableRef} className='mt-[20px]'>
  <tr>
    <th>Tank</th>
    <th>Volume</th>
    <th>Price</th>
    <th>Amount</th>
    <th>TLG Volume</th>
    <th>Remark</th>
  </tr>
  <tr>
    <td>92 Tank 1</td>
          <td>- {f921?f921.toFixed(3):"--"} Liter</td>
          <td>00.000</td>
          <td>00.000</td>
          <td>0.000</td>       
          <td></td>
          
    
              </tr>
              <tr>
    <td>HSD Tank 2</td>
          <td>- {hsd2?hsd2.toFixed(3):"--"} Liter</td>
          <td>0.000</td>
          <td>0.000</td>
          <td>0.000</td>       
          <td></td>
          
    
              </tr>
               <tr>
    <td>HSD Tank 3</td>
          <td>- {hsd3?hsd3.toFixed(3):"--"} Liter</td>
          <td>0.000</td>
          <td>0.000</td>
          <td>0.000</td>       
          <td></td>
          
    
              </tr>
        <tr>
    <td>PD Tank 4</td>
          <td>- {pd4?pd4.toFixed(3):"--"} Liter</td>
          <td>0.000</td>
          <td>0.000</td>
          <td>0.000</td>       
          <td></td>
          
    
              </tr>    
  <tr>
    <td>HSD Tank 5</td>
          <td>- {hsd5?hsd5.toFixed(3):"--"} Liter</td>
          <td>0.000</td>
          <td>0.000</td>
          <td>0.000</td>       
          <td></td>
          
    
              </tr>
  <tr>
    <td>PD Tank 6</td>
          <td>- {pd6?pd6.toFixed(3):"--"} Liter</td>
         <td>0.000</td>
          <td>0.000</td>
          <td>0.000</td>       
          <td></td>
          
    
  </tr>            
  <tr>
    <td>92 Tank 7</td>
          <td>- {f927?f927.toFixed(3):"--"} Liter</td>
          <td>0.000</td>
          <td>0.000</td>
          <td>0.000</td>       
          <td></td>
          
    
  </tr>
<tr>
    <td>95 Tank 8</td>
          <td>- {f958?f958.toFixed(3):"--"} </td>
         <td>0.000</td>
          <td>0.000</td>
          <td>0.000</td>       
          <td></td>
          
    
  </tr>
  
  
  
 
  
</table>
    </>
  )
}

export default AdjustmentTable