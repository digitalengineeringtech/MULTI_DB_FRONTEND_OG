import React from "react";
import { Dropdown } from "primereact/dropdown";

function NozzleComponent({ value, setValue, title = "Nozzle No" }) {
  const nozzles = [
    { name: "All", code: "Please" },
    { name: "Nozzle 1", code: "01" },
    { name: "Nozzle 2", code: "02" },
    { name: "Nozzle 3", code: "03" },
    { name: "Nozzle 4", code: "04" },
    { name: "Nozzle 5", code: "05" },
    { name: "Nozzle 6", code: "06" },
    { name: "Nozzle 7", code: "07" },
    { name: "Nozzle 8", code: "08" },
    { name: "Nozzle 9", code: "09" },
    { name: "Nozzle 10", code: "10" },
    { name: "Nozzle 11", code: "11" },
    { name: "Nozzle 12", code: "12" },
    { name: "Nozzle 13", code: "13" },
    { name: "Nozzle 14", code: "14" },
    { name: "Nozzle 15", code: "15" },
    { name: "Nozzle 16", code: "16" },
    { name: "Nozzle 17", code: "17" },
    { name: "Nozzle 18", code: "18" },
    { name: "Nozzle 19", code: "19" },
    { name: "Nozzle 20", code: "20" },
    { name: "Nozzle 21", code: "21" },
    { name: "Nozzle 22", code: "22" },
    { name: "Nozzle 23", code: "23" },
    { name: "Nozzle 24", code: "24" },
    { name: "Nozzle 25", code: "25" },
    { name: "Nozzle 26", code: "26" },
    { name: "Nozzle 27", code: "27" },
    { name: "Nozzle 28", code: "28" },
    { name: "Nozzle 29", code: "29" },
    { name: "Nozzle 30", code: "30" },
    { name: "Nozzle 31", code: "31" },
    { name: "Nozzle 32", code: "32" },
  ];
  return (
    <div className="flex-3 ">
      <label htmlFor="calendar-12h" className="font-bold block mb-2">
        {title}
      </label>
      <div className="calendar-container">
        <Dropdown
          filter
          value={value}
          onChange={(e) => setValue(e.value)}
          options={nozzles}
          optionLabel="name"
          className="!h-[30px] w-[250px] flex items-center justify-center"
          placeholder="All"
        />
      </div>
    </div>
  );
}

export default NozzleComponent;
