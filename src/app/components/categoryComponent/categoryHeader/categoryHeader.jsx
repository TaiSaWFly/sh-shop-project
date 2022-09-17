import React from "react";
import { Link } from "react-router-dom";
import CategotySelect from "../categotySelect/categotySelect";
import CategoryClothing from "../categoryClothing/categoryClothing";
import style from "./categoryHeader.module.scss";
import CategoryAll from "../categoryAll/categoryAll";

const CategoryHeader = ({ category, categoryUrl, productAll }) => {
  return (
    <>
      <div className={style.category_header}>
        <div className={style.category_header_wrapper}>
          <div className={style.category_header_title}>
            {category.map((item) => item.name)}
          </div>
          <Link to={`/category/${categoryUrl}/product_all`}>show all</Link>
        </div>

        <div className={style.category_header_select}>
          <CategotySelect />
        </div>
      </div>

      {productAll ? (
        <CategoryAll />
      ) : (
        <CategoryClothing clothing={category[0].typesOfClothing} />
      )}
    </>
  );
};

export default CategoryHeader;
