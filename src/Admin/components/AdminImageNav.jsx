import React from 'react'
import { motion } from 'framer-motion';
import { opacity } from './anim';


function AdminImageNav({src,isActive}) {
  return (
      <motion.div variants={opacity} animate={isActive ? "open" : "closed"}>
          <img className='w-[450px] height-[550px]' src={src} alt="kd" />
    </motion.div>
  )
}

export default AdminImageNav