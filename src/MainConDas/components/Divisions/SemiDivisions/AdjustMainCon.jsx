import React, { useEffect, useState } from 'react'
import StockBalance from '../../oneStationComponents/StockBalance'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EnglishCompanyTables } from '../../../../Language/English/englishCompanyTables';
import { MyanamrCompanyTables } from '../../../../Language/Myanmar/myanmarCompanyTables';
import StockInputComponent from '../../oneStationComponents/StockInputComponent';
import UsePatch_1 from '../../hooks/UsePatch';
import { IoMdArrowRoundBack } from 'react-icons/io';


function AdjustMainCon({setNavigation}) {
  const [language, setLanguage] = useState(EnglishCompanyTables);
  const [adjustOpen, setAdjustOpen] = useState(false);
  
 const [adjust, setAdjust] = useState('');
 const [stationId,setStationId] = useState('');
 const [tank, setTank] = useState('');
 const [date,setDate] = useState('');
 const [dataId,setDataId] = useState("");
 const [ogAdjust, setOgAdjust] = useState("");
 const [adjustLoading, setAdjustLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [{data_p_1,loading_p_1,error_p_1},patchIt_1] = UsePatch_1();

    useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
    if (user.language === "Myanmar" || user.language === "မြန်မာ") {
      setLanguage(MyanamrCompanyTables);
    } else if (user.language === "English" || user.language === "အင်္ဂလိပ်") {
      setLanguage(EnglishCompanyTables);
    }
    }, [user, navigate, dispatch]);
    

  const handleAdjust = (e) => {
    console.log(e);
     setStationId(e.stationId._id);
     setTank(e.tank);
     setDate(e.realTime);
     setDataId(e._id);
     setOgAdjust(e.totalGL);
     setAdjustOpen((prev) => !prev);
 };
  
  const makeAdjust = (e) => {
    patchIt_1(`stock-balance/adjust?stationId=${stationId}&_id=${dataId}`, { adjust: adjust }, user.token);
  };

  useEffect(() => {
    setAdjustLoading(loading_p_1);
    if (data_p_1.con) {
      setAdjustOpen(false);
      setSuccess(!success);

    }
    setAdjust('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data_p_1, loading_p_1, error_p_1]);

  return (
    <div className={`w-[97%] min-h-[93svh] ${adjustOpen ? "h-[93svh] overflow-hidden" : ""}`}>
    <p className='w-[90%] cursor-pointer duration-500 hover:gap-5 mb-[-20px] flex items-center  gap-3 mt-[20px] mx-auto' onClick={()=>setNavigation(3)}><IoMdArrowRoundBack/>{language.go_back}</p>
    {
        adjustOpen ? <StockInputComponent tank={tank} date={date} makeAdjust={makeAdjust} setAdjust={setAdjust} adjust={adjust} ogAdjust={ogAdjust}  setAdjustOpen={setAdjustOpen}/>:""
    }
    <StockBalance edit={true} kk={true} success={success}  handleAdjust={handleAdjust} language={language}/>
    </div>
  )
}

export default AdjustMainCon