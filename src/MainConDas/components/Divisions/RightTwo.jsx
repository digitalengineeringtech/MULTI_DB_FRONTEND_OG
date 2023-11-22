import React from 'react'
import Station from '../../../assets/images/stations.png';
import KyawsanStation from '../RightTwoSide/kyawsanStations';

function RightTwo({setNavigation,navigation}) {
  return (
    <div className='w-[17%] drop-shadow-md bg-white'>
    <div className='h-[60px] border-b-[1px] px-3 flex bg-white items-center drop-shadow-sm gap-[10px]'>
              <img className='w-[40px]' src={Station} alt='station' />
              <p className='text-[#333] text-[13px]'>Stations</p>
    </div>
     <p className='text-xs mx-1 my-3'>Stations Lists</p>
    <div className=''>
     <KyawsanStation
      navigation={navigation}
      setNavigation={setNavigation}
      title={'Kyawsan_026'}
      no={1}
     />
     <KyawsanStation
      navigation={navigation}
      setNavigation={setNavigation}
      title={'Kyawsan_031'}
      no={2}
     />
     <KyawsanStation
      navigation={navigation}
      setNavigation={setNavigation}
      title={'Kyawsan_027'}
      no={3}
     />
     <KyawsanStation
      navigation={navigation}
      setNavigation={setNavigation}
      title={'Kyawsan_016'}
      no={6}
     />
     <KyawsanStation
      navigation={navigation}
      setNavigation={setNavigation}
      title={'Kyawsan_029'}
      no={7}
     />
    </div>
   <div className='flex mt-4 justify-center'>
     <button className='bg-[#1c2b36] '>
       <p className='text-white text-[12px] p-2 px-4'>More Stations</p>
    </button>
   </div>
    </div>
  )
}

export default RightTwo