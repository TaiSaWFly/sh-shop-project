import React from "react";
import style from "./categoryTypes.module.scss";
import ProductItems from "../productItems/productItems";
import { definedLengthArray } from "../../../../utils/definedLengthArray";
import { Link } from "react-router-dom";

const CategoryTypes = ({ url, id, categories }) => {
  const definedCategories = categories.map((c) => ({
    ...c,
    products: definedLengthArray(c.products),
  }));
  return (
    <div>
      {definedCategories.map((c) => (
        <div key={c.id} className={style.category_types__wrapper}>
          <div className={style.category_types__info}>
            <div className={style.category_types__info_title}>{c.name}</div>
            <div className={style.category_types__info_show_more}>
              <Link
                to={{
                  pathname: `/category/${url + "/" + c.name}/products`,
                  state: { categoryId: id, typeId: c.id, name: c.name },
                }}>
                show more
              </Link>
            </div>
          </div>

          <ProductItems productsItems={c.products} />
        </div>
      ))}
    </div>
  );
};

export default CategoryTypes;
