import React, { useEffect, useState } from 'react'
import AdminForm from './AdminForm'
import AdminStation from './AdminStation'
import AdminPermits from './AdminPermits'
import UsePost_11 from '../../MainConDas/components/hooks/UsePost_11'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminAccDelete from './AdminAccDelete'

function AdminStationOpenAccount({setNavigation}) {

    const [userEmail, setEmail] = useState();
    const [userPhone, setUserPhone] = useState();
    const [userName, setUserName] = useState();
    const [userPassword, setUserPassword] = useState();
    const [userPasConfirmation,setUserPasConfirmation] = useState();
    const [stationId, setStaionId] = useState();
    const[collectionId, setCollectionId] = useState();
    const [roleId, setRoleId] = useState();
    const [permitOne, setPermitOne] = useState();
    const [permitTwo, setPermitTwo] = useState();
    const [permitThree, setPermitThree] = useState();
    const [permitFour, setPermitFour] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    
  const [{ data_p_11, loading_p_11, error_p_11 }, fetchIt_11] = UsePost_11();

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get('name');

  console.log(name);

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const handleClick = () => {

    

      const data = new FormData();
      data.append("email", userEmail);
      data.append("phone", userPhone);
      data.append("name", userName);
      data.append("password", userPassword);
      data.append("comparePassword", userPasConfirmation);
      if (stationId !== undefined) {
      data.append("stationId", stationId);
      }
      data.append("roles", roleId);
      data.append("permits", permitOne);
      data.append("permits", permitTwo);
      data.append("permits", permitThree);
      data.append("permits", permitFour);
      data.append("collectionId", collectionId);

      fetchIt_11(`/user/register`, data, user.token);
    };
  
  
  useEffect(() => {

    if (data_p_11.con === true) {
      setEmail('');
      setUserPhone('');
      setUserName('');
      setUserPassword('');
      setUserPasConfirmation('');
      setStaionId('');
      setCollectionId('');
      setRoleId('');
      setPermitOne('');
      setPermitTwo('');
      setPermitFour('');
    } 
     
    if (error_p_11) {
      setErrorMessage(error_p_11.response.data.msg);
    }
    
  }, [data_p_11, loading_p_11, error_p_11]);
  

  return (
    <>
      <div className='shadow my-[50px] p-5 rounded-lg bg-white w-[95%] relative '>
      
      <div className=' flex items-center justify-start gap-3'>
          <button onClick={()=>setNavigation(0)} className='bg-black text-xs  text-white p-2 hover:scale-105 duration-500 hover:rounded-md'>Go Back</button>
          <h3>Open New Account For <span className=' font-bold uppercase'>{name}</span> </h3>
      </div>
       <p className='my-[20px] text-red-600'>{errorMessage}</p>
        <div className='my-[30px] gap-3 flex justify-center items-start'>
        <AdminForm
         userEmail={userEmail}
         setUserEmail={setEmail}
         userPhone={userPhone}
         setUserPhone={setUserPhone}
         setUserName={setUserName}
         userName={userName}
         userPassword={userPassword}
         setUserPassword={setUserPassword}
         userPasConfirmation={userPasConfirmation}
         setUserPasConfirmation={setUserPasConfirmation}
        />
        <AdminStation 
        stationId={stationId}
        setStaionId={setStaionId}
        collectionId={collectionId}
        setCollectionId={setCollectionId}
        roleId={roleId}
        setRoleId={setRoleId}
        name={name}
        />
        <AdminPermits
          permitOne={permitOne}
          setPermitOne={setPermitOne}
          permitTwo={permitTwo}
          setPermitTwo={setPermitTwo}
          permitThree={permitThree}
          setPermitThree={setPermitThree}
          permitFour={permitFour}
          setPermitFour={setPermitFour}
        />
        </div>
        <div>
        <button onClick={handleClick} className='bg-blue-800 p-3 hover:scale-105 duration-300 rounded-md text-white'>Create Account</button>
          </div>
    </div>
    </>
  )
}

export default AdminStationOpenAccount