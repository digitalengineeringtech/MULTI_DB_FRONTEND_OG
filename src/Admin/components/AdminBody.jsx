import React from 'react'
import {motion} from 'framer-motion'
import { translate } from './anim';
import { Link } from 'react-router-dom';
import { blur } from './anim';


function AdminBody({links,selectedLink,setSelectedLink,setIsActive}) {
   
    const getChar = (title) => {
        const charts = [];
        title.split("").forEach((char, index) => {
            charts.push(
                <motion.span variants={translate} custom={[index * 0.008,(title.length - index) * 0.01]} initial='initial' animate='open' exit='closed' key={`l_${index}`}>
                    {char}
                </motion.span>
            )
        });
        return charts;
    };
  return (
      <div className='flex flex-wrap w-[60%]  mt-[40px]'>
          {
              links.map((link, index) => { 
                  const { title } = link;
                  return <Link
                      onClick={() => {
                          setIsActive(false)
                      }}
                      onMouseOver={()=>{setSelectedLink({isActive:true,index})}}
                      onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }} className=' overflow-hidden' to={link.href}>
                      <motion.p variants={blur} initial="initial" animate={selectedLink.isActive && selectedLink.index !== index ? "open":"closed"}  className='text-[40px] ml-[40px] mb-[40px] mr-[10px]  flex uppercase'>{getChar(title)}</motion.p>
                  </Link>
              })
          }
    </div>
  )
}

export default AdminBody