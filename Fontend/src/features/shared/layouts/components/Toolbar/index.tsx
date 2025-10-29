import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faTrash,
  faSave,
  faBan,
  faPowerOff,
  faList,
  faSearch,
  faSync,
  faPrint,
  faEye,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Toolbar.module.scss";

const cx = classNames.bind(styles);

interface ToolButton {
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface ToolbarProps {
  onAction?: (key: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAction }) => {
  const buttons: ToolButton[] = [
    { key: "add", icon: faPlus, label: "Thêm" },
    { key: "edit", icon: faPen, label: "Sửa" },
    { key: "delete", icon: faTrash, label: "Xóa" },
    { key: "save", icon: faSave, label: "Lưu", disabled: true },
    { key: "cancel", icon: faBan, label: "Bỏ qua", disabled: true },
    { key: "close", icon: faPowerOff, label: "Đóng" },
    { key: "list", icon: faList, label: "Danh Sách" },
    { key: "search", icon: faSearch, label: "Tìm Kiếm" },
    { key: "refresh", icon: faSync, label: "Làm Tươi" },
    { key: "print", icon: faPrint, label: "In" },
    { key: "view", icon: faEye, label: "Xem" },
    { key: "layout", icon: faTableCellsLarge, label: "Giao Diện" },
  ];

  return (
    <div className={cx("toolbar")}>
      {buttons.map((btn) => (
        <button
          key={btn.key}
          className={cx("tool-btn", { disabled: btn.disabled })}
          onClick={() => !btn.disabled && onAction?.(btn.key)}
          disabled={btn.disabled}
        >
          <FontAwesomeIcon icon={btn.icon} className={cx("icon")} />
          <span className={cx("label")}>{btn.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
