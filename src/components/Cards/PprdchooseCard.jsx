import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginUser } from '../../redux/slices/LoginSlice';


export const PprdchooseCard = ({ img, title, route, collectionName }) => {
  
  const user = useSelector((state) => state.login);


  const dispatch = useDispatch();

  const handleClick = () => {
    

    let saver = {
      name:user.name,
      token:user.token,
      stationId:null,
      accessDb: collectionName
    };


    console.log(collectionName);
    


    dispatch(LoginUser(saver));
  }

  return (
    <Link to={route} onClick={handleClick}  className='w-[23%]  p-2 shadow-md bg-white border-gray hover:drop-shadow-md duration-300 cursor-pointer  h-[300px]'>
          <div className=' bg-slate-200 p-5 flex justify-center items-center'>
          <img className='w-[60%] h-[130px]' src={img} alt='kd' />
    </div>
          <div className='mt-5'>
          <h3 className=' text-xl font-extrabold'>{title}</h3>
          </div>
    </Link> 
  )
}
