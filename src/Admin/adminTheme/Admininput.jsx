import React from 'react'

function AdminInput({icon,placeholder,width=100,isSetUp,value,onChange}) {
  return (
     <div className={`bg-white  rounded-md  w-[${width}%] flex items-center gap-4 p-3 ${isSetUp?'animate-pop-up':''}`}>
            {icon}
          <input onChange={onChange} value={value} placeholder={placeholder} className={` w-[100%] outline-none `} />
    </div>
  )
}

export default AdminInput