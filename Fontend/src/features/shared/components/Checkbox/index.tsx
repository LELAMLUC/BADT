import React from "react";
import classNames from "classnames/bind";
import styles from "./Checkbox.module.scss";

const cx = classNames.bind(styles);

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  labelPosition?: "left" | "right";
  width?: string | number;
  disabled?: boolean;
  variant?: "default" | "important"; // ✅ thêm kiểu
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  labelPosition = "right",
  width = 18,
  disabled = false,
  variant = "default",
}) => {
  return (
    <label
      className={cx("checkbox", {
        left: labelPosition === "left",
        disabled,
        important: variant === "important", // ✅ thêm class
      })}
      style={{ gap: 6 }}
    >
      {label && labelPosition === "left" && (
        <span className={cx("label")}>{label}</span>
      )}

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof width === "number" ? `${width}px` : width,
        }}
      />

      {label && labelPosition === "right" && (
        <span className={cx("label")}>{label}</span>
      )}
    </label>
  );
};

export default Checkbox;
