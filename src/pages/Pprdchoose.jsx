import React, { useEffect, useState } from 'react'
import KyawSan from '../assets/images/Unknown-removebg-preview (1).png';
import { PprdchooseCard } from '../components/Cards/PprdchooseCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { englishUserChoose } from '../Language/English/englishUserChoose';
import { myanmarUserChoose } from '../Language/Myanmar/myanmarUserChoose';
import UsePost from '../MainConDas/components/hooks/UsePost';


export const Pprdchoose = () => {
const [language, setLanguage] = useState(englishUserChoose);
const navigate = useNavigate();
const dispatch = useDispatch();
const user = useSelector((state) => state.login);
const [okData, setOkData] = useState([]);

const [{data_g,loading_g,error_g},fetchIt] = UsePost();

useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(myanmarUserChoose);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(englishUserChoose);
    }
    
  fetchIt(`collection?name=${user.name}`, user.token);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ user,navigate,dispatch]);
  
  useEffect(() => {
    if (data_g?.result) {
    setOkData(data_g?.result);
      
    }
  }, [data_g,loading_g,error_g]);

  return (
    <div className=' w-[90%] mx-auto mt-[100px]  min-h-[86svh]  pb-[100px]'>
    <h3 className='text-2xl font-extrabold mt-[110px] mb-[30px] '>{language.main_title}</h3>
    <div className='flex items-start justify-start  flex-wrap w-full gap-5'>
   {
    okData.map((e, index) => (
       <PprdchooseCard img={e.stationImg} collectionName={e.collectionName} route={`/${e.collectionName}/home`} title={e.collectionName}/>
    ))
   }
    </div>   
          
    </div>
  )
}
