import React, { useEffect } from "react";
import { MdCancel, MdFileDownloadDone } from "react-icons/md";

export const StationPermits = ({ e, keye, handleAdd, handleDelete }) => {
  return (
    <li
      className={`bg-gray-300 pl-2 border-[0.5px]  h-[40px] uppercase  flex items-center justify-between  ${
        e.permission?.includes(keye) ? "bg-green-300" : "bg-gray-400"
      }`}
    >
      <p>{keye}</p>
      {e.permission?.includes(keye) ? (
        <button
          onClick={() => handleDelete(e, keye)}
          className="bg-red-500 flex items-center justify-center w-[30%] h-full "
        >
          <MdCancel scale={50} />
        </button>
      ) : (
        <button
          onClick={() => handleAdd(e, keye)}
          className="bg-green-500 flex items-center justify-center w-[30%] h-full "
        >
          <MdFileDownloadDone scale={50} />
        </button>
      )}
    </li>
  );
};
