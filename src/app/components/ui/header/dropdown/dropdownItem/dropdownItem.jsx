import React from "react";
import style from "./dropdownItem.module.scss";
import { category } from "../../../../../data/basicData/category";
import { getDataByIds } from "../../../../../utils/getDataByIds";
import { Link } from "react-router-dom";

const DropdownItem = ({ data, collection: url, collectionId: id }) => {
  const findCollection = data.find((d) => d.collection === id);
  const collectionType = getDataByIds(findCollection.types, category);

  // console.log(data);

  return (
    <>
      {collectionType.map((c) => (
        <Link
          key={c.id}
          className={style.dropdown_list__link}
          to={{
            pathname: `/collection${url + "/" + c.name}/products`,
            state: { collectionId: id, typeId: c.id, name: c.name },
          }}>
          {c.name}
        </Link>
      ))}
    </>
  );
};

export default DropdownItem;
