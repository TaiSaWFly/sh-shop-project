import React from "react";
import style from "./dropdownList.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../../../../api";
import Loading from "../../../../common/loadingComponent/loading";

const DropdownList = ({
  submenus,
  dropdown,
  collectionPath: path,
  collectionName: name,
}) => {
  const [submenusItems, setSubmenusItems] = useState();

  useEffect(() => {
    api.collectionCategories
      .getCategoryByCollectionCategoryId(...submenus)
      .then((data) => setSubmenusItems(data));
  }, [submenus]);

  return (
    <div
      className={
        dropdown ? style.dropdown_list__show : style.dropdown_list__hide
      }>
      <div className={style.dropdown_list__title}>{name}</div>
      <ul className={style.dropdown_list__item}>
        {submenusItems ? (
          submenusItems.map((s) => (
            <li key={s.id} className={style.dropdown_list__wrapper}>
              <Link
                key={s.id}
                className={style.dropdown_list__link}
                to={{
                  pathname: `/collection/${path + "/" + s.path}/products`,
                }}>
                {s.name}
              </Link>
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
};

export default DropdownList;
