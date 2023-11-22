import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/images/splas.png';
import NaviItems from '../Navigations/NaviItems';
import { MdDashboard } from 'react-icons/md';
import { FcDebt } from 'react-icons/fc';
import { FaUserFriends } from 'react-icons/fa';
import { FaGasPump } from 'react-icons/fa';

function Left({condition,setNavigation,navigation}) {
  // eslint-disable-next-line no-unused-vars
  const [tankNav, setTankNav] = useState(true);


  useEffect(() => {
    if (condition === true) {
      setTankNav(false);
    }
  }, [condition]);

  return (
      <div className={`h-[100svh] duration-500  border-b fixed bg-[#1c2b36] ${condition ? 'w-[70px]':'w-[200px]'}`}>
          <div className='h-[60px]  flex items-center justify-center border-[#636e72] gap-[7px] border-b-[0.2px]'>
              <img src={Logo} className='h-[35px]' alt='logo' />
             {
              condition ? '': <p className=' animate-pop-up duration-500 text-[#7698b0] text-[12px]'>Digital Engineering <br/> Tech Ltd.</p>
             }
          </div>
      <nav className=' duration-300'>
        {
          condition? '':  <h3 className='text-xs text-[#7698b0] duration-300 p-4'>Navigation</h3>
       }
        <NaviItems
        onPress={()=>setNavigation(0)}
        no={0}
        navigation={navigation}
        icon={<MdDashboard color='#564aa3' size={20} />}
        title={condition?false:"Dashboard"}
        />
        <NaviItems
        onPress={()=>setNavigation(1)}
        no={1}
        navigation={navigation}
        icon={<FaGasPump color='#564aa3' size={20} />}
        title={condition?false:"Stations"}
        />
        {/* {
          tankNav && <FuelsDropDown/>
        } */}
        {/* <NaviItems
        onPress={()=>setNavigation(4)}
        icon={<FaUserFriends color='#27c24c' size={20} />}
        title={condition?'':"Users"}
        /> */}
        {/* <NaviItems
        onPress={()=>setNavigation(5)}
        icon={<BsFillFuelPumpFill color='#f1c40f' size={20} />}
        title={condition?'':"Stations"}
        /> */}
        {/* <NaviItems
        onPress={()=>setNavigation(5)}
        icon={<FcDebt color='#1797be' size={20} />}
        title={condition?'':"Debt"}
        /> */}
       </nav>
    </div>
  )
}

export default Left