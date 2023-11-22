import React,{useMemo} from 'react'
import { useTable, useSortBy,usePagination } from 'react-table';
import MOCK_DATA from '../../assets/data/SaleSummaryTank.json';
import {COLUMNS } from '../columns/SaleSummaryTank.columns';
import { BsSortNumericDownAlt ,BsSortNumericUp} from 'react-icons/bs';

function SaleSummaryTank({tableRef}) {

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

 const tableInstance =  useTable({
  columns,
  data,
  initialState:{pageIndex : 0 }
 },useSortBy,usePagination);
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow
  } = tableInstance;




  return (
    <>
      <table ref={tableRef} className=' text-[14px] font-extralight mt-[100px]' {...getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span >
                      {
                        column.isSorted? (column.isSortedDesc? <BsSortNumericDownAlt/>:<BsSortNumericUp/>):''
                      }
                    </span>
                  </th> 
                ))
              }
     </tr>
          ))
        }
       
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                })}
         
      </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default SaleSummaryTank