import React from "react";
import style from "./dropdownList.module.scss";
// import DropdownItem from "../dropdownItem/dropdownItem";
import { category } from "../../../../../data/basicData/category";
import { getDataByIds } from "../../../../../utils/getDataByIds";
import { Link } from "react-router-dom";

const DropdownList = ({
  submenus,
  dropdown,
  collectionId: id,
  collectionUrl: url,
  collectionName: name,
}) => {
  const data = getDataByIds(submenus, category);

  return (
    <div
      className={
        dropdown ? style.dropdown_list__show : style.dropdown_list__hide
      }>
      <div className={style.dropdown_list__title}>{name}</div>
      <ul className={style.dropdown_list__item}>
        {data.map((d) => (
          <li key={d.id} className={style.dropdown_list__wrapper}>
            <Link
              key={d.id}
              className={style.dropdown_list__link}
              to={{
                pathname: `/collection${url + "/" + d.name}/products`,
                state: { collectionId: id, categoryId: d.id, name: d.name },
              }}>
              {d.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
