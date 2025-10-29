import React from "react";
import DateTimePicker from "react-datetime-picker";
import classNames from "classnames/bind";

import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import styles from "./DateTimeInput.module.scss";

const cx = classNames.bind(styles);

interface DateTimeInputProps {
  label?: string;
  value: Date | null;
  onChange: (val: Date | null) => void;
}

const DateTimeInput: React.FC<DateTimeInputProps> = ({
  label = "Ngày",
  value,
  onChange,
}) => {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      <DateTimePicker
        className={cx("picker")}
        onChange={onChange}
        value={value}
        format="dd/MM/yyyy HH:mm"
        disableClock={false}
        clearIcon={null}
        calendarIcon={<span className={cx("dropdownIcon")}>▼</span>}
      />
    </div>
  );
};

export default DateTimeInput;
