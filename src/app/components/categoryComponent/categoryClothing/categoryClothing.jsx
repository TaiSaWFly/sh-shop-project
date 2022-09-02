import React from "react";
import ClothingItems from "../clothingItems/clothingItems";
import style from "./categoryClothing.module.scss";

const CategoryClothing = ({clothing, categoryUrl}) => {
  return (
    <div className={style.category_clothing}>
      {clothing.map((item, index) => (
        <div key={index} className={style.category_clothing__wrapper}>
          <div className={style.category_clothing__info}>
            <div className={style.category_clothing__info_title}>
              {item.title}
            </div>
            <div className={style.category_clothing__info_show_more}>
              <a href="/">show more</a>
            </div>
          </div>

          <ClothingItems clothes={item.clothing} categoryUrl={categoryUrl} />
        </div>
      ))}
    </div>
  );
};

export default CategoryClothing;
