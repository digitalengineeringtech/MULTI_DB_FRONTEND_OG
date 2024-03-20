import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { COLUMNS } from "../columns/DailySaleColumns";
import { BsSortNumericDownAlt, BsSortNumericUp } from "react-icons/bs";
import instance from "../../axios";
import Loading from "../Loading";
import { useSelector } from "react-redux";

function DailyTable({ tableRef, okData, setOkData, language }) {
  const [loading, setloading] = useState(false);
  const user = useSelector((state) => state.login);
  const [editingCell, setEditingCell] = useState(null);
  const [totalLiter, setTotalLiter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the sum of "Sale Liter"
    const totalSaleLiter = okData.reduce(
      (total, item) => total + item.saleLiter,
      0
    );
    const totalTotalPrice = okData.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    if (totalSaleLiter) {
      setTotalLiter(totalSaleLiter.toFixed(3));
    }

    if (totalTotalPrice) {
      setTotalPrice(totalTotalPrice);
    }
  }, [okData]);

  const handleEdit = (cell) => {
    user.name !== "admin" ? setEditingCell(null) : setEditingCell(cell);
  };
  function updateMyData(rowIndex, columnId, value) {
    setOkData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex][columnId] = value;
      return newData;
    });
  }
  function handleInputChange(e, cell, updateMyData) {
    const { value } = e.target;

    updateMyData(cell.row.index, cell.column.id, value);
  }
  const handleSave = (cell, row) => {
    setloading(true);
    const params = row.original._id;
    const updatedValue = row.original;
    const token = user.token;
    setEditingCell(null);
    instance
      .patch(`/detail-sale?_id=${params}`, updatedValue, {
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
        console.log(error);
        setloading(false);
      });
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => okData, [okData]);
  const setOkMemo = useMemo(() => setOkData, [setOkData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 50 },
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

  const { pageIndex, pageSize } = state;

  return (
    <>
      <table ref={tableRef} className="text-sm mt-[100px]" {...getTableProps()}>
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
              <tr className=" text-right" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      onClick={() => handleEdit(cell)}
                      {...cell.getCellProps()}
                    >
                      {(cell.column.id === "vehicleType" ||
                        cell.column.id === "carNo") &&
                      editingCell ? (
                        <input
                          className="border-none w-[80px] p-2 bg-gray-100 outline-none "
                          type="text"
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
      <div className="flex items-center text-sm justify-center gap-[20px] mt-[20px]">
        <span>
          Total Price :{" "}
          <span className="font-extrabold text-md">{totalPrice} Kyats</span>
        </span>
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
      <div className="border-t-[0.8px] border-gray-400 mt-[40px]">
        <div className="container mx-auto flex justify-end">
          <p className=" mt-3 text-[18px] text-gray-400">
            Total Record : {okData.length}
          </p>
        </div>
      </div>
      {loading ? <Loading /> : ""}
    </>
  );
}

export default DailyTable;
