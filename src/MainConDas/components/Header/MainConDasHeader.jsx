import React, { useEffect, useState } from 'react'
import { CgMenuRightAlt,CgMenuRight } from 'react-icons/cg';
import { AiFillCaretDown } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateLanguage } from '../../../redux/slices/LoginSlice';


function MainConDasHeader({ setCondition, condition }) {

  const [language, setLanguage] = useState("မြန်မာ");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);

   useEffect(() => {
    dispatch(UpdateLanguage({language}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);



  
  return (
    <div className={`bg-[white] duration-500 z-40 fixed right-0  drop-shadow-lg ${condition?'left-[70px]':'left-[200px]'}`}>
      <div className='w-[90%] duration-300 h-[60px] flex items-center justify-between mx-auto'>
        {
          condition ? <CgMenuRight size={30} onClick={()=>setCondition((prev)=>!prev)} className=' cursor-pointer'/>:  <CgMenuRightAlt size={30} onClick={()=>setCondition((prev)=>!prev)} className=' cursor-pointer'/>
        }
        {
          language === 'မြန်မာ'?  <p>ဆီဆိုင်နှင့်အချက်အလက်ဆိုင်ရာဆီမံခန့်ခွဲမှု့စနစ်</p>:  <p>Fuel Station Management System</p> 
        }
      
       
        <div className='flex gap-5'>
        <ul className='  w-[100px]'>
            <li className='relative flex group  py-[15px] items-center gap-2 cursor-pointer justify-center'>{language}
              <AiFillCaretDown/>
            <ul className='bg-blue-800 hidden group-hover:flex flex-col border-2 rounded-md absolute mt-[140px] w-[110px] p-3'>
            <li onClick={(e)=>setLanguage(e.target.innerText)} className='mb-2 text-white hover:text-black  hover:bg-white px-2 p-1 rounded duration-500 cursor-pointer'>မြန်မာ</li>
            <li onClick={(e)=>setLanguage(e.target.innerText)}  className='mb-2  text-white hover:text-black hover:bg-white px-2 p-1 rounded duration-500 cursor-pointer'>English</li>
            </ul>

          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default MainConDasHeader