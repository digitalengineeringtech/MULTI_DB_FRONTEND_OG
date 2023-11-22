import React, { useEffect, useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginUser, LogoutUser } from '../redux/slices/LoginSlice';
import { useDispatch } from 'react-redux';
import instance from '../axios';
import Loading from '../components/Loading';

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const usernameRef = useRef();
    const passwordRef = useRef();
    const errorRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(LogoutUser())
    },[dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = usernameRef.current;
        const password = passwordRef.current;
        setIsLoading(true);
        const user = { email: name.value, password: password.value };


       instance.post('/user/login', user)
           .then(function (response) {
               const data = response.data.result;
               setIsLoading(false);
               errorRef.current.innerText = "";


               console.log(response.data.result)
            
               let saver;


               if (data?.stationId) {
                   saver = {
                       name: response.data.result.roles[0].name,
                       token: data.token,
                       stationId: data.stationId,
                       accessDb:data.collectionId.collectionName

                   }
                   //  dispatch(LoginUser({ name:response.data.result.roles[0].name, token: data.token, stationId: data.stationId }));
               } else {
                   saver = {
                       name: response.data.result.roles[0].name,
                       token: data.token,
                       stationId: null,
                       accessDb:data.collectionId.collectionName
                   }
                   //  dispatch(LoginUser({ name:response.data.result.roles[0].name, token: data.token, stationId: null }));
               }


               dispatch(LoginUser(saver));
          

        //     if (response.data.result.roles[0].name === "admin"  ) {
               
        //        navigate("/kyawsan/usermanual");

                  
        //    } else {
        //        navigate("/kyawsan/home")

               //       }

        switch (response.data.result.roles[0].name) {
          case 'manager':
            return navigate(`/${data.collectionId.collectionName}/dashboard`);
          case 'admin':
            return navigate('/admin/home');
          case "kyaw san":
                return navigate(`/${data.collectionId.collectionName}/main-con/dash`);
          case "pprd":
                return navigate('/user/choose')
          case "user":
                return navigate('/user/choose')
          default:
            return navigate(`/kyawsan/home`);
        }
               
               
           }).catch(function (error) {
           console.log(error)
           setIsLoading(false);
           errorRef.current.innerText = "Something Went Wrong!"
       });
    };


  return (
      <div className='w-screen login_page h-[100svh] bg-black flex items-center  justify-center'>
          <div className=' bg-gray-50 w-[600px] h-[300px] p-7 drop-shadow-lg rounded-lg'>
              <h3 className='text-xl'>Please Log in <p ref={errorRef} id="error_text" className=' text-red-500 mt-1 text-md'></p></h3>
          <form onSubmit={handleSubmit} className=' gap-4 relative mt-5 flex flex-col h-[200px]'>
              <input ref={usernameRef} type='text' className=' border-[0.5px] border-gray-600 rounded-md h-[50px] px-2' placeholder='username'></input>  
              <input ref={passwordRef} autoComplete='true' type='password'  className=' border-[0.5px] border-gray-600 rounded-md h-[50px] px-2' placeholder='password'></input>  
              <button type='submit' className='absolute bottom-[15px] right-0 bg-blue-900 p-3 text-sm rounded-lg text-white'>Log in</button>
              </form>
          </div>
      {isLoading?<Loading/>:""}
    </div>
  )
}

export default Login