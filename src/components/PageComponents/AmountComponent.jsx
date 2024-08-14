import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import React, { useState } from "react";

const AmountComponent = ({
  title,
  value,
  setValue,
  lValue,
  setLValue,
  ingredient,
  setIngredient,
  kyat,
  setKyat,
  liter,
  setLiter,
}) => {
  //   const [ingredient, setIngredient] = useState("equal");
  const state = [
    { name: "Equal (=)", code: "equal" },
    { name: "Greater (>)", code: "greate" },
    { name: "Less (<)", code: "less" },
  ];

  return (
    <>
      <div className="flex-3 ">
        <label htmlFor="calendar-12h" className="font-bold block mb-2">
          Amount 
        </label>
        <div className="flex gap-4 items-center">
          {" "}
          <Dropdown
            value={kyat}
            onChange={(e) => {
              setKyat(e.value);
            }}
            options={state}
            optionLabel="name"
            className="!h-[30px] w-[140px] flex items-center justify-center"
            placeholder="="
          />
          <InputText
            keyfilter="int"
            className="!h-[30px] w-[100px]"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Amount"
          />
          {/* <div className="card flex justify-content-center">
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
        </div> */}
          {/* <Dropdown
          filter
          inputId="claender-12h"
          value={value}
          onChange={(e) => setValue(e.value)}
          options={state}
          optionLabel="name"
          className="!h-[30px] w-[250px] flex items-center justify-center"
          placeholder="All"
        /> */}
        </div>
      </div>
      <div className="flex-3 ">
        <label htmlFor="calendar-12h" className="font-bold block mb-2">
          Liters
        </label>
        <div className="flex gap-4 items-center">
          {" "}
          <Dropdown
            value={liter}
            onChange={(e) => {
              setLiter(e.value);
            }}
            options={state}
            optionLabel="name"
            className="!h-[30px] w-[140px] text-xl font-bold flex items-center justify-center"
            placeholder="="
          />
          <InputText
            keyfilter="int"
            className="!h-[30px] w-[100px]"
            value={lValue}
            onChange={(e) => setLValue(e.target.value)}
            placeholder="Liters"
          />
          {/* <div className="card flex justify-content-center">
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
        </div> */}
          {/* <Dropdown
          filter
          inputId="claender-12h"
          value={value}
          onChange={(e) => setValue(e.value)}
          options={state}
          optionLabel="name"
          className="!h-[30px] w-[250px] flex items-center justify-center"
          placeholder="All"
        /> */}
        </div>
      </div>
    </>
  );
};

export default AmountComponent;
