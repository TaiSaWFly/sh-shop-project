import React from "react";
import style from "./dropdownItem.module.scss";
import { types } from "../../../../../data/type";
import { getDataByIds } from "../../../../../utils/getDataByIds";
import { Link } from "react-router-dom";

const DropdownItem = ({ data, category: url, categoryId: id }) => {
  const findCategory = data.find((d) => d.category === id);
  const categoryType = getDataByIds(findCategory.types, types);

  return (
    <>
      {categoryType.map((c) => (
        <Link
          key={c.id}
          className={style.dropdown_list__link}
          to={{
            pathname: `/category${url + "/" + c.name}/products`,
            state: { categoryId: id, typeId: c.id, name: c.name },
          }}>
          {c.name}
        </Link>
      ))}
    </>
  );
};

export default DropdownItem;
