import React, { useEffect, useState } from "react";
import style from "./navList.module.scss";
import { ReactComponent as Search } from "../../../../../../assets/svg_icons/search.svg";
import NavListMenuItems from "../navListMenuItems/navListMenuItems";
import Loading from "../../../../common/loadingComponent/loading";
import api from "../../../../../api";

const NavList = () => {
  const [menus, setMenus] = useState();

  useEffect(() => {
    api.navigateMenus.getMenusItems().then((data) => setMenus(data));
  }, []);

  return (
    <>
      {menus ? (
        <ul className={style.nav_list}>
          {menus.map((menu) => (
            <NavListMenuItems menu={menu} key={menu.id} />
          ))}
        </ul>
      ) : (
        <Loading />
      )}

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
