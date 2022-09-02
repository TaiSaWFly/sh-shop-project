import React from "react";
import style from "./navListMenuItems.module.scss";
import DropdownList from "../dropdownList/dropdownList";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavListMenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  const hadlerDropdown = (state) => {
    setDropdown((prevState) => (prevState = state));
  };

  return (
    <li
      className={style.menu_items}
      onMouseEnter={() => hadlerDropdown(true)}
      onMouseLeave={() => hadlerDropdown(false)}
    >
      {items.submenu ? (
        <>
          <div
            className={
              !dropdown
                ? style.menu_items__title_arrow
                : style.menu_items__title_arrow_active
            }
          >
            <Link
              className={style.menu_items__title}
              to={items.url ? `/category/${items.url}` : "/"}
            >
              {items.title}
            </Link>
          </div>
          <DropdownList submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link to="/about" className={style.menu_items__title}>
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default NavListMenuItems;
