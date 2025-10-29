import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { headerMenu } from "~/features/shared/data/headerMenu";

const cx = classNames.bind(styles);

const Header: React.FC = () => {
  return (
    <header className={cx("header")}>
      <nav className={cx("menu")}>
        {headerMenu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path || "#"}
            className={({ isActive }) => cx("menu-item", { active: isActive })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
