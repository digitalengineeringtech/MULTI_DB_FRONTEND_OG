import React from "react";
import { Calendar } from "primereact/calendar";

function CalenderComponent({ title, value, setValue }) {
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
          onChange={(e) => setValue(e.value)}
          showTime
          hourFormat="24"
        />
      </div>
    </div>
  );
}

export default CalenderComponent;
