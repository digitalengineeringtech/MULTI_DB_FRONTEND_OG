import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import React, { useState } from "react";

const Input = ({
  title,
  value,
  setValue,
  ingredient,
  setIngredient,
}) => {
  //   const [ingredient, setIngredient] = useState("equal");

  return (
    <div className="flex-3 ">
      <label htmlFor="calendar-12h" className="font-bold block mb-2">
        {title}
      </label>
      <div className="flex">
        <InputText
          className="!h-[30px] w-[150px]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Bowser No."
        />
      </div>
    </div>
  );
};

export default Input;
