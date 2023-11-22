import React, { useEffect, useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import instance from '../../axios';
import { useSelector } from 'react-redux';


function StationComponent({ value, setValue, title }) {
  const [selectItems, setSelectItems] = useState([]);
  const [defaultOption, setDefaultOption] = useState();

  const pruposes = selectItems;
  const jj = defaultOption;

  const user = useSelector((state) => state.login);




  
  useEffect(() => {
   
    const token = user.token;


    const fetchData = async () => {
      

      const response = await instance.get(`/station-detail/get/all?accessDb=${user.accessDb}&name=${user.name}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + token
        }
      });

      console.log(response.data)

      const datas = response.data.result;



      const formattedData = datas.map((item) => (
        {
          name: item.name,
          code: item._id,
          location: item.location,
          lienseNo: item.lienseNo
        }
      ));

      let defauilt = [];
      datas.forEach((item) => {
         if (user.name === 'admin' || user.name === 'pprd' || user.name === 'user') {
            defauilt.push({
            name: item.name,
            code: item._id,
            location: item.location,
            lienseNo: item.lienseNo
          });
        }
        if (user.stationId === item._id) {
          defauilt.push({
            name: item.name,
            code: item._id,
            location: item.location,
            lienseNo: item.lienseNo
          });
        }
       
      });

      setSelectItems(formattedData);
      setDefaultOption(defauilt)


      return response;
    };
    fetchData();

  }, [user]);

    

  return (
       <div className="flex-3 ">
          <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    {title}
          </label>
          <div className="calendar-container">
        {
          user.name === "manager" ?
            <Dropdown value={value} onChange={(e) => setValue(e.value)} options={jj} optionLabel="name" 
            className="!h-[30px] w-[250px] flex items-center justify-center" placeholder='Please Select Station' /> :
            <Dropdown value={value} onChange={(e) => setValue(e.value)} options={pruposes} optionLabel="name" 
             className="!h-[30px] w-[250px] flex items-center justify-center" placeholder='Please Select Station' />
          }
         
          </div>
          </div>
  )
}

export default StationComponent