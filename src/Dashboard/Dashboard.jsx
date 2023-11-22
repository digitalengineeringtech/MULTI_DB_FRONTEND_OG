import React,{useState,useEffect} from 'react'
import SideNavBar from './Components/SideNavBar'
import RightPage from './Components/RightPage'
import InputPage from './Components/InputPage';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MiniBudget } from './Components/MiniBudget';



function Dashboard() {

  const [fuelInForm, setFuelIn] = useState(1);
  const [isMenu, setIsMenu] = useState(false);
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
     
  }, [user, navigate]);
  

  return (
    <div className='flex w-full mt-[75px] bg-gray-100'>
      <SideNavBar isMenu={isMenu} setIsMenu={setIsMenu} setFuelIn={setFuelIn} />
        {(() => {
        switch (fuelInForm) {
          case 1:
            return <RightPage isMenu={isMenu} />;
          case 2:
            return <InputPage isMenu={isMenu}/>;
          case 3:
            return <MiniBudget isMenu={isMenu}/>;
          default:
            return null;
        }
      })()}
    </div>
  )
}

export default Dashboard