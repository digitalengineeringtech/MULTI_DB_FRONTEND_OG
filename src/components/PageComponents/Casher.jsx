import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import instance from "../../axios";
import { useSelector } from "react-redux";

function Casher({ value, setValue, title }) {
  const [selectItems, setSelectItems] = useState([]);
  const [defaultOption, setDefaultOption] = useState();

  const pruposes = selectItems;
  const jj = defaultOption;

  // console.log(pruposes, "this is purposes");

  const user = useSelector((state) => state.login);

  useEffect(() => {
    const token = user.token;
    const fetchData = async () => {
      const { data } = await instance.get(`/casher-code?key=casherCode`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      });
      data.con && setSelectItems(data.result);
      console.log(data);

      return data.result;
    };
    fetchData();
  }, [user]);

  return (
    <div className="flex-3 ">
      <label htmlFor="calendar-12h" className="font-bold block mb-2">
        {title}
      </label>
      <div className="calendar-container">
        {user.name === "manager" ? (
          <Dropdown
            filter
            value={value}
            onChange={(e) => setValue(e.value)}
            // options={jj}
            optionLabel="name"
            className="!h-[30px] w-[250px] flex items-center justify-center"
            placeholder="Cashers"
          />
        ) : (
          <Dropdown
            filter
            value={value}
            onChange={(e) => setValue(e.value)}
            options={pruposes}
            // optionLabel="name"
            className="!h-[30px] w-[250px] flex items-center justify-center"
            placeholder="Cashers"
          />
        )}
      </div>
    </div>
  );
}

export default Casher;
