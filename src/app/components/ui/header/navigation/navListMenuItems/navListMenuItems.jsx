import React, { useEffect, useState } from "react";
import style from "./navListMenuItems.module.scss";
import DropdownList from "../../dropdown/dropdownList/dropdownList";
import { Link } from "react-router-dom";
import { collection } from "../../../../../data/basicData/collection";
import { collectionCategories } from "../../../../../data/basicData/collectionCategories";
import { findDataId } from "../../../../../utils/findDataId";

const NavListMenuItems = ({ menu }) => {
  const [dropdown, setDropdown] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (menu.submenu) {
      const findCollection = collection.find((c) => c.id === menu.collection);
      const getCollectionsCategoriesIds = findDataId(
        menu.submenu.collectionCategories,
        collectionCategories
      );
      const newData = {
        ...findCollection,
        categories: getCollectionsCategoriesIds.categories,
      };
      setData(newData);
    } else {
      setData(menu);
    }
  }, [menu]);
  // console.log(data);

  const handleDropdown = (state) => {
    setDropdown((prevState) => (prevState = state));
  };

  return data ? (
    <li
      className={style.menu_items}
      onMouseEnter={() => handleDropdown(true)}
      onMouseLeave={() => handleDropdown(false)}>
      {menu.submenu ? (
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
                pathname: `/collection${data.url}`,
                state: {
                  collectionId: data.id,
                  name: data.name,
                  categoriesIds: data.categories,
                },
              }}>
              {data.name}
            </Link>
          </div>

          <DropdownList
            submenus={data.categories}
            dropdown={dropdown}
            collectionUrl={data.url}
            collectionId={data.id}
            collectionName={data.name}
          />
        </>
      ) : (
        <Link className={style.menu_items__title} to={data.url}>
          {data.name}
        </Link>
      )}
    </li>
  ) : (
    "load"
  );
};

export default NavListMenuItems;
