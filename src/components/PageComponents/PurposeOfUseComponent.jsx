import React from "react";
import { Dropdown } from "primereact/dropdown";

function PurposeOfUseComponent({ value, setValue, title = "Purpose Of Use" }) {
  const pruposes = [
    { name: "All", code: "Please" },
    { name: "Cycle", code: "Cycle" },
    { name: "Cycle ( 3 Wheels )", code: "Cycle ( 3 Wheels )" },
    { name: "Car", code: "Car" },
    { name: "Bus ( City )", code: "Bus ( City )" },
    { name: "Bus ( High Way )", code: "Bus ( High Way )" },
    { name: "Light Truck ( City )", code: "Light Truck ( City )" },
    { name: "Light Truck ( High way )", code: "Light Truck ( High way )" },
    { name: "Heavy Truck ( City )", code: "Heavy Truck ( City )" },
    { name: "Heavy Truck ( High way )", code: "Heavy Truck ( High way )" },
    { name: "Trailer ( City )", code: "Trailer ( City )" },
    { name: "Trailer ( High way )", code: "Trailer ( High way )" },
    { name: "Htawlargyi", code: "Htawlargyi" },
    { name: "Tractor", code: "Tractor" },
    { name: "Small Tractor", code: "Small Tractor" },
    { name: "Heavy Machinery", code: "Heavy Machinery" },
    { name: "Commercial Vehicle", code: "Commercial Vehicle" },
    { name: "Phone Tower", code: "Phone Tower" },
    { name: "Industrial Zone", code: "Industrial Zone" },
    { name: "Generator Industry", code: "Generator Industry" },
    { name: "Agriculture Machine", code: "Agriculture Machine" },
    { name: "Generator ( Home Use )", code: "Generator ( Home Use )" },
    { name: "Hospital", code: "Hospital" },
    { name: "School", code: "School" },
    { name: "Super Market", code: "Super Market" },
    { name: "Hotel", code: "Hotel" },
    { name: "Housing", code: "Housing" },
    { name: "Boat", code: "Boat" },
    { name: "Pump Test", code: "Pump Test" },
    { name: "Office Use ( Bowser Car )", code: "Office Use ( Bowser Car )" },
    { name: "Station Use", code: "Station Use" },
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
          options={pruposes}
          optionLabel="name"
          className="!h-[30px] w-[250px] flex items-center justify-center"
          placeholder="All"
        />
      </div>
    </div>
  );
}

export default PurposeOfUseComponent;
