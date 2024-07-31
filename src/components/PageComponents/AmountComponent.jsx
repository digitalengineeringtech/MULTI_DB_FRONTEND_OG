import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import React, { useState } from "react";

const AmountComponent = ({
  title,
  value,
  setValue,
  ingredient,
  setIngredient,
  kyat,
  setKyat,
}) => {
  //   const [ingredient, setIngredient] = useState("equal");
  const fueltypes = [
    { name: "Kyats", code: true },
    { name: "Liters", code: false },
  ];

  return (
    <div className="flex-3 ">
      <label htmlFor="calendar-12h" className="font-bold block mb-2">
        {title}
      </label>
      <div className="flex gap-4 items-center">
        <Dropdown
          value={kyat}
          onChange={(e) => {
            setKyat(e.value);
          }}
          options={fueltypes}
          optionLabel="name"
          className="!h-[30px] w-[120px] flex items-center justify-center"
          placeholder="Kyats"
        />

        <InputText
          keyfilter="int"
          className="!h-[30px] w-[100px]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Amount"
        />

        <div className="card flex justify-content-center">
          <div className="flex flex-wrap gap-3">
            <div className="flex align-items-center">
              <RadioButton
                inputId="ingredient3"
                name="pizza"
                value="equal"
                onChange={(e) => setIngredient(e.value)}
                checked={ingredient === "equal"}
              />
              <label htmlFor="ingredient3" className="ml-2">
                Equal
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton
                inputId="ingredient1"
                name="pizza"
                value="greate"
                onChange={(e) => setIngredient(e.value)}
                checked={ingredient === "greate"}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Greater
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton
                inputId="ingredient2"
                name="pizza"
                value="less"
                onChange={(e) => setIngredient(e.value)}
                checked={ingredient === "less"}
              />
              <label htmlFor="ingredient2" className="ml-2">
                Less
              </label>
            </div>
          </div>
        </div>
        {/* <Dropdown
          filter
          inputId="claender-12h"
          value={value}
          onChange={(e) => setValue(e.value)}
          options={fueltypes}
          optionLabel="name"
          className="!h-[30px] w-[250px] flex items-center justify-center"
          placeholder="All"
        /> */}
      </div>
    </div>
  );
};

export default AmountComponent;
