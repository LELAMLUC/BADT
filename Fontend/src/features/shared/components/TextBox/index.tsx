import React from "react";
import classNames from "classnames/bind";
import styles from "./TextBox.module.scss";

const cx = classNames.bind(styles);

interface TextBoxProps {
  value: string | number;
  onChange: (value: string) => void;
  width: string;
  height: string;
  backgroundColor?: string;
  placeholder?: string;
  type?: "text" | "number";
  showArrow?: boolean;
  label: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  value,
  onChange,
  width = "150px",
  height = "auto",
  backgroundColor = "#fff",
  placeholder = "",
  type = "text",
  showArrow = false,
  label,
}) => {
  return (
    <div className={cx("textbox-wrapper")}>
      <p className={cx("label")}>{label}</p>
      <div
        className={cx("textbox-container", { "has-arrow": showArrow })}
        style={{ width, height, backgroundColor }}
      >
        <input
          className={cx("textbox-input")}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        {showArrow && <div className={cx("textbox-arrow")}>▼</div>}
      </div>
    </div>
  );
};

export default TextBox;
