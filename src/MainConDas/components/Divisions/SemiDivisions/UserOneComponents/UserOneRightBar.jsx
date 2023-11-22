import React, { useState } from 'react'
import RoleEditor from './RoleEditor';
import UserOnePermits from './UserOnePermits';
import UserOnePermitsEdit from './UserOnePermitsEdit';

function UserOneRightBar() {
    const [roleEditer, setRoleEditer] = useState(false);
    const [permitEditer, setPermitEditer] = useState(false);
    const [role, setRole] = useState({ name: 'Manager', code: '1' });
    

  const handleRoleEditer = () => {
    setRoleEditer((prev) => !prev);
  };

  const handlePermitEditer = () => { 
    setPermitEditer((prev) => !prev);
  };

  return (
    <div className='w-[40%] text-xs p-3 bg-white drop-shadow-md h-[80svh]'>
      <p className=' text-[14px] mb-3'>
      Account Name : Y2KZOE
     </p>
     <p className='text-[14px]'>Gmail : y2kzo3664@gmail.com</p>
          

          <div className=' mt-[40px] flex items-center justify-between'>
              {
                  roleEditer ? <>
                  <RoleEditor onPress={handleRoleEditer} value={role} setValue={setRole}/>
                  </>:<>    <div className='flex gap-2 items-center'>
              <p className='font-bold'> Staff Roles -</p>
              <p className=' bg-green-300 p-3 '> Manager</p>
            </div>
              <div onClick={handleRoleEditer} className='flex'>
                <button className='p-3 bg-blue-400 hover:bg-blue-300'>change role</button>
              </div></>
           }
      </div>

      <div className='mt-[40px]'>
        <p className=' font-bold'>Staff Permits -</p>
        {
          permitEditer ? <>
            <UserOnePermits />
            <button onClick={handlePermitEditer} className='p-3 mt-2  hover:bg-blue-300  bg-blue-400'>Change Permits</button>
          </> :
            <>
              
              <UserOnePermitsEdit />
               <button  onClick={handlePermitEditer} className='p-3 mt-2  hover:bg-blue-300  bg-blue-400'>Cancle Changes</button>
            </>
        }
        
       
      </div>
      
           
    </div>
  )
};

export default UserOneRightBar