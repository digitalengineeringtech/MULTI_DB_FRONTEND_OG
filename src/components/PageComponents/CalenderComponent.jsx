import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";

function CalenderComponent({
  title,
  value,
  setValue,
  date,
  // setHour,
  // setMinute,
  // setSecond,
  // hour,
  // minute,
  // second,
}) {
  console.log(date, '.................');
  const [hour, setHour] = useState(date.getHours());
  const [minute, setMinute] = useState(date.getMinutes());
  const [second, setSecond] = useState(date.getSeconds());

  useEffect(() => {
    let start = new Date(value);
    start.setHours(hour);
    start.setMinutes(minute);
    start.setSeconds(second);
    setValue(start);
  }, [hour, minute, second]);

  return (
    <div className="flex-3">
      <label htmlFor="calendar-12h" className="font-bold block mb-2">
        {title}
      </label>
      <div className="calendar-container">
        <Calendar
          def
          id="calendar-12h"
          className="!h-[30px] "
          value={value}
          showIcon
          showSeconds
          onChange={(e) => setValue(e.value)}
          showTime
          hourFormat="24"
        />
      </div>
      <div className="mt-2 flex gap-2">
        {" "}
        <InputText
          // width={20}
          className="h-4 w-12 px-0"
          keyfilter="int"
          placeholder="00"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
        <div className="text-xl font-semibold text-gray-300">:</div>
        <InputText
          // width={20}
          className="h-4 w-12 px-0"
          keyfilter="int"
          placeholder="00"
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
        />
        <div className="text-xl font-semibold text-gray-300">:</div>
        <InputText
          // width={20}
          className="h-4 w-12 px-0"
          keyfilter="int"
          placeholder="00"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
      </div>
    </div>
  );
}

export default CalenderComponent;
