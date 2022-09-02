import React from "react";
import style from "./navList.module.scss";
import { menuItems } from "../../../constants/menuItems";
import { ReactComponent as Search } from "../../../../assets/svg_icons/search.svg";
import NavListMenuItems from "../navListMenuItems/navListMenuItems";

const NavList = () => {
  return (
    <>
      <ul className={style.nav_list}>
        {menuItems.map((menu, index) => (
          <NavListMenuItems items={menu} key={index} />
        ))}
      </ul>

      <div className={style.nav_list__search}>
        <label id="search" className={style.nav_list__search_label}>
          <Search
            className={style.nav_list__search_icon}
            width="16px"
            height="16px"
          />
        </label>
        <input
          className={style.nav_list__search_input}
          id="search"
          type="search"
          placeholder="Search..."
        />
      </div>
    </>
  );
};

export default NavList;
