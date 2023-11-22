import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  {useHistory}  from 'react-router-dom';


function SelectionCard({ img, title,devicCount,nozzleCount, link,code=1 }) {
   
  const user = useSelector((state) => state.login);


  return (
    <div   className=' drop-shadow cursor-pointer border-[0.5px] bg-white hover:translate-y-[-10px] duration-500  hover:drop-shadow-lg  bg overflow-hidden h-[150px]  group  mx-auto p-1    w-full     '>
    <div className=' w-full h-full relative flex items-center justify-center flex-col'>
    <p className='text-xs absolute top-1 left-1'>Device Count : {devicCount}</p>
    <p className='text-xs absolute top-1 right-1'>Nozzle Count : {nozzleCount}</p>
      
    <img src={img} alt='kd' className='w-[80px]'/>
     {/* {(() => {
      switch (code) {
        case 1:
          return <FirstDesign />;
        case 2:
          return <SecondDesign/>;
        case 3:
          return <ThirdDesign/>;
        case 4:
          return <FourthDesign/>;
        default:
          return <FirstDesign/>;
      }
    })()} */}
    <p className=' z-30 font-extrabold text-[#4b4b4b] uppercase text-xs mb-4'>{title} Station</p>    
        <h5 className='left-2 z-30 bottom-2 absolute text-xs  text-gray-400 mx-auto text-center font-extrabold uppercase tracking-widest'>
          {
            user.language === "မြန်မာ"?<span>ကြည့်မည်</span>:<span>Check Now</span>
          }
        </h5> 
    </div>
              </div>      
  )
}

export default SelectionCard