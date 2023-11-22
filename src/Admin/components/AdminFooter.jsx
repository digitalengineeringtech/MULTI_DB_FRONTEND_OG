import React from 'react'
import { translate } from './anim'
import { motion } from 'framer-motion';

function AdminFooter() {


    const list = 'hover:underline cursor-pointer';
  return (
      <div className='flex mt-[30px] mb-[20px] uppercase justify-around flex-wrap  duration-500'>
          <ul>
              <motion.li className={list} variants={translate} custom={[0.2,0]} initial="initial" animate="open" exit="closed" >
                  <span>Made By : DET</span>
              </motion.li>
          </ul>
          <ul>
             <motion.li className={list} variants={translate} custom={[0.2,0]} initial="initial" animate="open" exit="closed" >
                  <span>Admin Manual</span>
              </motion.li>
          </ul>
          <ul>
               <motion.li className={list} variants={translate} custom={[0.2,0]} initial="initial" animate="open" exit="closed" >
                  <span>Contact</span>
              </motion.li>
          </ul>
          <ul>
               <motion.li className={list} variants={translate} custom={[0.2,0]} initial="initial" animate="open" exit="closed" >
                  <span>Copyright</span>
              </motion.li>
          </ul>
    </div>
  )
}

export default AdminFooter