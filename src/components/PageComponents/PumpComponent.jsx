import React from "react";
import { Dropdown } from "primereact/dropdown";

function PumpComponent({ value, setValue, title = "Pump No" }) {
  const Pumps = [
    { name: "All", code: "Please" },
    { name: "Pump 1", code: "1" },
    { name: "Pump 2", code: "2" },
    { name: "Pump 3", code: "3" },
    { name: "Pump 4", code: "4" },
    { name: "Pump 5", code: "5" },
    { name: "Pump 6", code: "6" },
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
          options={Pumps}
          optionLabel="name"
          className="!h-[30px] w-[250px] flex items-center justify-center"
          placeholder="All"
        />
      </div>
    </div>
  );
}

export default PumpComponent;
