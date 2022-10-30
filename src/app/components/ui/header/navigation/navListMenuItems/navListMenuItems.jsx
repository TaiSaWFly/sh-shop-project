import React, { useEffect, useState } from "react";
import style from "./navListMenuItems.module.scss";
import DropdownList from "../../dropdown/dropdownList/dropdownList";
import { Link } from "react-router-dom";
import { category } from "../../../../../data/category";

const NavListMenuItems = ({ menu }) => {
  const [dropdown, setDropdown] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (menu.submenu) {
      setData(category.find((d) => d.id === menu.category));
    } else {
      setData(category.find((d) => d.id === menu.category));
    }

    if (!menu.category) {
      setData(menu);
    }
  }, [menu]);

  const handleDropdown = (state) => {
    setDropdown((prevState) => (prevState = state));
  };

  return data ? (
    <li
      className={style.menu_items}
      onMouseEnter={() => handleDropdown(true)}
      onMouseLeave={() => handleDropdown(false)}>
      {menu.submenu && menu.category ? (
        <>
          <div
            className={
              !dropdown
                ? style.menu_items__title_arrow
                : style.menu_items__title_arrow_active
            }>
            <Link
              className={style.menu_items__title}
              to={{
                pathname: `/category${data.url}`,
                state: { categoryId: data.id, name: data.name },
              }}>
              {data.name}
            </Link>
          </div>

          <DropdownList
            submenus={menu.submenu.typeStyle}
            dropdown={dropdown}
            category={data.url}
            categoryId={data.id}
          />
        </>
      ) : menu.category ? (
        <Link
          className={style.menu_items__title}
          to={{
            pathname: `/category${data.url}`,
            state: { categoryId: data.id, name: data.name },
          }}>
          {data.name}
        </Link>
      ) : (
        <Link className={style.menu_items__title} to={`${data.url}`}>
          {data.name}
        </Link>
      )}
    </li>
  ) : (
    "load"
  );
};

export default NavListMenuItems;
