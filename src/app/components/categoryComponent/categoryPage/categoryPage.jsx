import React from "react";
import { categoryFor } from "../../../constants/category";
import CategoryClothing from "../categoryClothing/categoryClothing";
import style from "./categoryPage.module.scss";

const CategoryPage = ({ categoryUrl }) => {
  const category = categoryFor.filter((item) => item.url === categoryUrl);

  return (
    <div className={style.category_page_conteiner}>
      <div className={style.category_page}>
        <h2>CategoryPage</h2>
        {category.map((item, index) => (
          <CategoryClothing
            key={index}
            clothing={item.typesOfClothing}
            categoryUrl={categoryUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
