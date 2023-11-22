import React from 'react'
import { Paginator } from 'primereact/paginator';

function PaginatorComponent({onPageChange,first,rows,totalLength,language}) {
  

  return (
    <div className="my-[20px]">
      <div className='text-right px-5'>
        <p className='text-[16px] text-gray-500'>{"Total Records"} : <span className='text-[20px]'>({totalLength})</span></p>
      </div>
      <Paginator first={first} rows={rows} totalRecords={totalLength} onPageChange={onPageChange}/>
     </div>
  )
}

export default PaginatorComponent