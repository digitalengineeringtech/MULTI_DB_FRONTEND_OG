import React from "react";
import { Dropdown } from "primereact/dropdown";

function FuelTypeComponent({ value, setValue, title = "Fuel Type" }) {
  const fueltypes = [
    { name: "All", code: "Please" },
    { name: "92 RON", code: "001-Octane Ron(92)" },
    { name: "95 RON", code: "002-Octane Ron(95)" },
    { name: "97 RON", code: "003-Octane Ron(97)" },
    { name: "HSD", code: "004-Diesel" },
    { name: "PHSD", code: "005-Premium Diesel" },
    { name: "C-HSD", code: "C-HSD" },
    { name: "C-PHSD", code: "C-PHSD" },
  ];
  return (
    <div className="flex-3 ">
      <label htmlFor="calendar-12h" className="font-bold block mb-2">
        {title}
      </label>
      <div className="calendar-container">
        <Dropdown
          filter
          inputId="claender-12h"
          value={value}
          onChange={(e) => setValue(e.value)}
          options={fueltypes}
          optionLabel="name"
          className="!h-[30px] w-[210px] flex items-center justify-center"
          placeholder="All"
        />
      </div>
    </div>
  );
}

export default FuelTypeComponent;
