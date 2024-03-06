import React, { FC, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TypePropsCalendar } from "./Calendar.type";
import "./styles.scss";
const MyCalendar: FC<TypePropsCalendar> = ({ setDate, date, setShow, ref }) => {
  const [dateRange, setDateRange] = useState<any>([new Date(), new Date()]);

  const handleDateChange = (value: any) => {
    if (date[0] && date[1]) setShow && setShow(false);
    setDateRange(value);
    setDate(value);
  };

  return (
    <div className={"calendar-container"} ref={ref}>
      <Calendar
        onChange={handleDateChange}
        value={dateRange}
        selectRange={true}
        className={"calendar"}
        // calendarType="ISO 8601"
      />
    </div>
  );
};

export default MyCalendar;
