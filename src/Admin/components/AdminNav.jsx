import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { height } from './anim';
import AdminBody from './AdminBody';
import Svg from '../../assets/images/kyawsanStation.png';
import AdminImageNav from './AdminImageNav';
import DataSearching from '../../assets/images/data-searching-find-document-magnifier-searching-document-text-searching-svgrepo-com.png'
import DashBoard from '../../assets/images/earths-interior.png'
import AdminFooter from './AdminFooter';
import Bann from '../../assets/images/cancel-svgrepo-com.png';
import Remove from '../../assets/images/remove-folder-svgrepo-com.png'

function AdminNav({setIsActive}) {
   const links = [
        {
            title: "admin",
            href: '/admin/home',
            src: DataSearching
        },
        {
            title: "banned",
            href: '/admin/banned-choose',
            src:Remove
        },
        {
            title: "stations-set-up",
            href: '/admin/station-set-up/choose',
            src: Svg
        },
        {
            title: "Collections",
            href: '/admin/choose-collection',
            src: Svg
        },
        {
            title: "PPRD",
            href: '/admin/station/pprd',
            src: Bann
        },
        {
            title: "accounts",
            href: '/admin/accounts',
            src: Svg
        }
   ];
  
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });
  
  return (
      <motion.div variants={height}   initial="initial" animate="enter" exit="exit" className=' z-[99]  relative overflow-hidden'>
        <div  className='m-0 flex'>
         <div className='mt-[20px]'>
          <AdminBody setIsActive={setIsActive} links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} /> 
           <AdminFooter/>
        </div>
        <AdminImageNav src={links[selectedLink.index].src} isActive={selectedLink.isActive} /> 
      </div>
     
    </motion.div>
  )
}

export default AdminNav