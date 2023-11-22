import React,{useState} from 'react'
import { MdDashboard } from 'react-icons/md';
import { RxInput } from 'react-icons/rx';
import { TbZoomMoney } from 'react-icons/tb';

function Items({ setFuelIn,isMenu }) {

   const [selectedItem, setSelectedItem] = useState("item1");

    const handleItemClick = (item) => {
        if (item === "item1") {
            setFuelIn(1);
        }
        if (item === "item2") {
            setFuelIn(2);
        }
        if (item === "item3") {
            setFuelIn(3);
        }
  setSelectedItem(item);
  };
    
  return (
    <div className='mt-[30px] duration-500 w-full '>
          {/* <h3 className=' border-2 p-3 text-center'>Manage</h3> */}
          <ul id="manage" className='mt-[20px] flex gap-2 flex-col w-full'>
              <li onClick={() => handleItemClick('item1')} className={`${selectedItem === "item1" ? 'my-2 gap-4 cursor-pointer bg-black text-white h-[40px] flex px-2 items-center justify-start' : ' cursor-pointer my-2 gap-4 h-[40px] flex px-2 items-center justify-start'}`}><MdDashboard className={isMenu?' scale-150':'scale-150 mx-auto'}  />{isMenu?'Dash':''}  </li>
              {/* Dashboard */}

              <li onClick={() => handleItemClick('item2')} className={`${selectedItem === "item2" ? 'my-2 gap-4 cursor-pointer bg-black text-white h-[40px] flex px-2 items-center justify-start' : ' cursor-pointer my-2 gap-4 h-[40px] flex px-2 items-center justify-start'}`}><RxInput className={isMenu?' scale-150':'scale-150 mx-auto'}  />{isMenu?'Fuel In':''}</li>
              
              <li onClick={() => handleItemClick('item3')} className={`${selectedItem === "item3" ? 'my-2 gap-4 cursor-pointer bg-black text-white h-[40px] flex px-2 items-center justify-start' : ' cursor-pointer my-2 gap-4 h-[40px] flex px-2 items-center justify-start'}`}><TbZoomMoney className={isMenu?' scale-150':'scale-150 mx-auto'}  />{isMenu?'Budget':''}</li>
          </ul>
    </div>
  )
}

export default Items