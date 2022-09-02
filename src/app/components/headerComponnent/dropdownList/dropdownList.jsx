import React from "react";
import style from "./dropdownList.module.scss";

const DropdownList = ({ submenus, dropdown }) => {
  return (
    <div
      className={
        dropdown ? style.dropdown_list__show : style.dropdown_list__hide
      }
    >
      {submenus.map((submenu, index) => (
        <ul key={index} className={style.dropdown_list__item}>
          <li className={style.dropdown_list__title}>{submenu.title}</li>
          {submenu.style &&
            submenu.style.map((item, index) => (
              <li key={index} className={style.dropdown_list__link}>
                {item.name}
              </li>
            ))}
        </ul>
      ))}
    </div>
  );
};

export default DropdownList;
