import React from "react";
import style from "./dropdownList.module.scss";
import DropdownItem from "../dropdownItem/dropdownItem";
import { typeStyle } from "../../../../../data/style";
import { getDataByIds } from "../../../../../utils/getDataByIds";

const DropdownList = ({ submenus, dropdown, categoryId, category }) => {
  const data = getDataByIds(submenus, typeStyle);

  return (
    <div
      className={
        dropdown ? style.dropdown_list__show : style.dropdown_list__hide
      }>
      {data.map((d) => (
        <ul key={d.id} className={style.dropdown_list__item}>
          <li className={style.dropdown_list__title}>{d.name}</li>

          <DropdownItem
            data={d.typeStyleFor}
            category={category}
            categoryId={categoryId}
          />
        </ul>
      ))}
    </div>
  );
};

export default DropdownList;
