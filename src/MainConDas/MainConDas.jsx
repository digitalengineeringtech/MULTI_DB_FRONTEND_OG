import React, { useEffect, useState } from 'react'
import Left from './components/Divisions/Left'
import Right from './components/Divisions/Right'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function MainConDas() {
  const [condition, setCondition] = useState(true);
  const [navigation, setNavigation] = useState(0);
   const navigate = useNavigate();


  const user = useSelector((state) => state.login);

   useEffect(() => {
    if (!user.login) {
        navigate("/");
    }

  },[navigate,user])

 

  return (
      <div className='flex duration-700  bg-[#f1f1f1]'>
      <Left
        navigation={navigation}
        setNavigation={setNavigation}
        condition={condition} />
      <Right
        navigation={navigation}
        setNavigation={setNavigation}
        condition={condition}
        setCondition={setCondition} />
      </div>
  )
}

export default MainConDas