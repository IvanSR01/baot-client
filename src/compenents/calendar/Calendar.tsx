import React, { FC, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TypePropsCalendar } from "./Calendar.type";
import "./styles.scss";
const MyCalendar: FC<TypePropsCalendar> = ({ setDate, date, setShow, ref }) => {
  const [dateRange, setDateRange] = useState<any>([new Date(), new Date()]);

  const handleDateChange = (value: any) => {
    if (value[0].getDate() >= new Date().getDate()) {
      setDateRange(value);
      setDate(value);
      if (value[0]) setShow && setShow(false);
    } else {
    }
  };

  return (
    <div className={"calendar-container"} ref={ref}>
      <Calendar
        onChange={handleDateChange}
        value={dateRange}
        selectRange={true}
        className={"calendar"}
        navigationLabel={({ date, label, locale, view }) =>
          label.replace("г.", "")
        }
      />
    </div>
  );
};

export default MyCalendar;
