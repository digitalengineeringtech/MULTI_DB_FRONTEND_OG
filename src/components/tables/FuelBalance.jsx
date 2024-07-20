import React, { useMemo, useEffect, useState } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { COLUMNS } from "../columns/FuelBalance";
import MOC_DATA from "../../assets/data/fuelBalence.json";
import { BsSortNumericDownAlt, BsSortNumericUp } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import instance from "../../axios";
import Loading from "../Loading";

function FuelBalanceTable({ tableRef, okData, setOkData }) {
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);

  const [editingCell, setEditingCell] = useState(null);

  useEffect(() => {}, [navigate, user.token, dispatch]);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => okData, [okData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

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
    prepareRow,
  } = tableInstance;

  function handleInputChange(e, cell, updateMyData) {
    const { value } = e.target;

    updateMyData(cell.row.index, cell.column.id, value);
  }

  function updateMyData(rowIndex, columnId, value) {
    setOkData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex][columnId] = parseInt(value);
      return newData;
    });
  }

  const handleSave = (cell, row) => {
    setloading(true);
    const params = row.original._id;
    const updatedValue = row.original;
    const token = user.token;
    setEditingCell(null);
    instance
      .patch(`/fuel-balance?_id=${params}`, updatedValue, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        const data = response.data.result;
        setOkData(data);
        window.location.reload(true);
        setloading(false);
      })
      .catch(function (error) {
        setloading(false);
      });
  };

  const handleEdit = (cell) => {
    user.name !== "admin" ? setEditingCell(null) : setEditingCell(cell);
  };

  const { pageIndex, pageSize } = state;

  return (
    <>
      <table ref={tableRef} className=" text-sm mt-[50px]" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <BsSortNumericDownAlt />
                      ) : (
                        <BsSortNumericUp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="w-[200px] text-right"
                      onClick={() => handleEdit(cell)}
                      {...cell.getCellProps()}
                    >
                      {cell.column.id === "fuelIn" && editingCell ? (
                        <input
                          className="border-none w-[80px] p-2 bg-gray-100 outline-none "
                          type="number"
                          value={cell.value}
                          onChange={(e) =>
                            handleInputChange(e, cell, updateMyData)
                          }
                          onBlur={() => handleSave(cell, row)}
                        />
                      ) : (
                        <span>{cell.render("Cell")}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <p className="flex justify-end mt-[30px] underline px-[100px] hover:font-semibold">
        <Link
          className="flex gap-3 items-center hover:gap-5 duration-300"
          to="/kyawsan/tankdemo"
        >
          Check with Model <AiOutlineArrowRight />
        </Link>
      </p>

      <div className="flex items-center text-sm justify-center gap-[20px] mt-[20px]">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{""}
          <input
            className="w-[50px] ml-3 border-[0.8px] outline-none px-2 py-1 border-black rounded-md"
            type="text"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          ></input>
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[50, 25, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {" "}
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">> "}
        </button>
      </div>
      {loading ? <Loading /> : ""}
    </>
  );
}

export default FuelBalanceTable;
