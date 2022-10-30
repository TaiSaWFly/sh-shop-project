import React, { useEffect, useState } from "react";
import style from "./popularListItem.module.scss";

const PopularListItem = ({
  listId,
  currentListId: id,
  name,
  idMethod,
  handleFilter,
}) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(id === listId ? true : false);
  }, [id, listId]);

  const handleActiveList = () => {
    handleFilter(idMethod, listId);
  };
  return (
    <li
      className={
        !isActive
          ? style.popular_products__list_item
          : style.popular_products__list_item__active
      }
      onClick={handleActiveList}>
      {name}
    </li>
  );
};

export default PopularListItem;
