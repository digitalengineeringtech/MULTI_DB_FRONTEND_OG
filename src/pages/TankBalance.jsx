import React, { useEffect,useState } from 'react'
import Container from '../assets/images/steelTank.jpeg';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import instance from '../axios';
import { LogoutUser } from '../redux/slices/LoginSlice';

function TankBalance() {
    const [loading, setloading] = useState(false);
    const [tank1B, setTank1B] = useState(0);
    const [tank2B, setTank2B] = useState(0);
    const [tank3B, setTank3B] = useState(0);
    const [tank4B, setTank4B] = useState(0);
    const [tank5B, setTank5B] = useState(0);
    const [tank6B, setTank6B] = useState(0);
    const [tank7B, setTank7B] = useState(0);
    const [tank8B, setTank8B] = useState(0);
   


    const user = useSelector((state) => state.login);
    const navigate = useNavigate();
     const dispatch = useDispatch();

    useEffect(() => {
         if (!user.login) {
        navigate("/");
         }
        setloading(true)
        var utcTimeOne = new Date();
        utcTimeOne = utcTimeOne.toLocaleDateString('fr-CA')
        const token = user.token;
        

             instance.get(`/fuel-balance?sDate=${utcTimeOne}`,{
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }
    })
    .then(function (response) {
      const data = response.data.result;
      console.log(response.data)
     
        let b1;
        let b2;
        let b3;
        let b4;
        let b5;
        let b6;
        let b7;
        let b8;

        data.forEach((obj) => {
            if (obj.tankNo == 1) {
                b1 = obj.balance
            }
            if (obj.tankNo == 2) {
                b2 = obj.balance
            }
            if (obj.tankNo == 3) {
                b3 = obj.balance
            }
            if (obj.tankNo == 4) {
                b4 = obj.balance
            }
            if (obj.tankNo == 5) {
                b5 = obj.balance
            }
            if (obj.tankNo == 6) {
                b6 = obj.balance
            }
            if (obj.tankNo == 7) {
                b7 = obj.balance
            }
            if (obj.tankNo == 8) {
                b8 = obj.balance
            }
            
        });

        setTank1B(b1.toFixed(3));
        setTank2B(b2.toFixed(3));
        setTank3B(b3.toFixed(3));
        setTank4B(b4.toFixed(3));
        setTank5B(b5.toFixed(3));
        setTank6B(b6.toFixed(3));
        setTank7B(b7.toFixed(3));
        setTank8B(b8.toFixed(3));


     
      
      setloading(false);
       })
       .catch(function (error) {
         setloading(false)
        //  navigate('/')
        //  dispatch(LogoutUser())
       });

   },[navigate,user,dispatch])

    const cardContainer = "flex mt-3 justify-center gap-3 items-center"
    const card = "relative border-[0.5px] border-black drop-shadow-2xl flex justify-center items-center bg-white h-[270px]  p-3 w-[25%]"
    const title = "absolute top-3 font-bold left-0 text-center right-0"
    const balance = "bg-black text-white absolute h-[40px] w-[50%] mx-auto flex justify-center items-center top-[115px]"
  return (
      <div className='h-[100svh]  flex flex-col items-center justify-center'>
           <h3 className=' text-2xl text-center container mt-[80px] mx-auto mb-5 font-extrabold'>Tank Balance</h3>
          <div className='container mx-auto'>
              <div className=''>
                      <div className={cardContainer}>
                      <div className={card}>
                 <h3 className={title}>Octane 92 Tank 1</h3>
                          <img src={Container} alt="container"></img>
                          <p className={balance}>{tank1B} Liters</p>
              </div>
                      <div className={card}>
                            <h3 className={title}>Diesel Tank 2</h3>
                          <img src={Container} alt="container"></img>
                          <p className={balance}>{tank2B}  Liters</p>
                          
              </div>
                      <div className={card}>
                            <h3 className={title}>Diesel Tank 3</h3>
                          
                          <img src={Container} alt="container"></img>
                          <p className={balance}>{tank3B}   Liters</p>
                          
              </div>
                      <div className={card}>
                            <h3 className={title}>Premium Diesel Tank 4</h3>
                          
                          <img src={Container} alt="container"></img>
                          <p className={balance}>{tank4B}  Liters</p>
                          
              </div>
              </div>
                 <div className={cardContainer}>
                      <div className={card}>
                            <h3 className={title}>Diesel Tank 5</h3>
                          <img src={Container} alt="container"></img>
                          <p className={balance}>{tank5B}  Liters</p>
                          
              </div>
                      <div className={card}>
                            <h3 className={title}>Premium Tank 6</h3>
                          
                          <img src={Container} alt="container"></img>
                          <p className={balance}>{tank6B}  Liters</p>
                          
              </div>
                      <div className={card}>
                            <h3 className={title}>Octane 92 Tank 7</h3>
                          
                          <img src={Container} alt="container"></img>
                          <p className={balance}>{tank7B}  Liters</p>
                          
              </div>
                      <div className={card}>
                            <h3 className={title}>Octane 95 Tank 8</h3>
                          
                          <img src={Container} alt="container"></img>
                          <p className={balance}>{tank8B}  Liters</p>
                          
              </div>
           </div>
          </div>
          </div>
           {
        loading?<Loading/>:''
      }
    </div>
  )
}

export default TankBalance