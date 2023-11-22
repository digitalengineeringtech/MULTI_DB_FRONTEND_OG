import React,{useMemo} from 'react'
import { useTable, useSortBy,usePagination } from 'react-table';
import MOCK_DATA from '../../assets/data/SUMMARY_SALE.json';
import {GROUPED_COLUMNS } from '../columns/SummaryColumns';
import { BsSortNumericDownAlt ,BsSortNumericUp} from 'react-icons/bs';

function SaleSummaryTable({tableRef}) {

  const columns = useMemo(() => GROUPED_COLUMNS, []);
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
    footerGroups,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = tableInstance;


  const {pageIndex,pageSize} = state;

  return (
    <>
      <table ref={tableRef} className=' text-xs font-extralight mt-[100px]' {...getTableProps()}>
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
      <tfoot>
        {
          footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {
                footerGroup.headers.map(column => (
                  <td {...column.getFooterProps()}>
                    {
                      column.render('Footer')
                    }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tfoot>
    </table>
      <div className='flex items-center text-sm justify-center gap-[20px] mt-[20px]'>
        <span>
          Page {' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>s
          | Go to page:{''}
          <input className='w-[50px] ml-3 border-[0.8px] outline-none px-2 py-1 border-black rounded-md' type='text' defaultValue={pageIndex + 1} onChange={e => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}></input>
        </span>
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          {
            [10, 25, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}> Show {pageSize}</option>
            ))
          }
        </select>
        <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
        <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={()=>gotoPage(pageCount - 1)} disabled={!canNextPage}>{">> "}</button>

    </div>
    </>
  )
}

export default SaleSummaryTable