import React from 'react'
import LanguageComponent from './LanguageComponent'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BiArrowBack } from 'react-icons/bi';

function PageContainer({ title, setValue, children, value, language }) {
  
  const user = useSelector((state) => state.login);
  

  return (
    <div className='text-[13px] pt-[120px]'>
      {/* <div className='  mb-[10px] mt-[20px] h-[45px] flex items-center justify-start px-[20px] bg-white'>
        <h3 className='container  flex items-center gap-2  mx-auto text-lg text-slate-600'>
         
          {
            user.name === "admin"?<Link to={`/admin/station/home`}> <BiArrowBack size={30}/></Link>:<Link to={`/kyawsan/home`}> <BiArrowBack size={30}/></Link>
          }
         </h3>
      </div> */}
      <div className='px-[20px]'>
            <div className='flex px-[20px] justify-end'>
      {language&&  <LanguageComponent value={value} setValue={setValue} />}
      </div>
          <h3 className={` ${language?"text-xl":"text-2xl"} container mx-auto font-extrabold`}>{title}</h3>
      {children}
      </div>
      </div>
  )
}

export default PageContainer