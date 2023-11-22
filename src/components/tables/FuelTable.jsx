import React,{useMemo,useEffect} from 'react'
import { useTable, useSortBy, usePagination } from 'react-table';
import DATA from '../../assets/data/data.json';
import { COLUMNS } from '../columns/FuelColumns';
import { BsSortNumericDownAlt, BsSortNumericUp } from 'react-icons/bs';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function FuelTable({tableRef,okData,setOkData}) {
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    
  },[navigate,user.token,dispatch]) 

 const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => okData, [okData]);

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
      <table ref={tableRef} className=' text-sm mt-[50px]' {...getTableProps()}>
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
                  return <td {...cell.getCellProps()}>
                      {/* {editingCell ? (
          <input
            className='border-none bg-gray-100 outline-none '
            type="text"
            value={cell.value}
            onChange={e => handleInputChange(e, cell,updateMyData)}
            onBlur={() => handleSave(cell,row)}
          />
                      ) : ( )}*/}
          <span>{cell.render('Cell')}</span>
        
                  </td> 
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
        <span>
          | Go to page:{''}
          <input className='w-[50px] ml-3 border-[0.8px] outline-none px-2 py-1 border-black rounded-md' type='text' defaultValue={pageIndex + 1} onChange={e => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}></input>
        </span>
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          {
            [50,25,10].map(pageSize => (
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

export default FuelTable