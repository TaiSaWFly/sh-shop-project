import React, { useState, useEffect } from "react";
import PopularItems from "../popularItems/popularItems";
import style from "./popularProducts.module.scss";
import { popular } from "../../../../data/basicData/popular";
import { products } from "../../../../data/basicData/products";
import { filterProductsByIdMethod } from "../../../../utils/filterProductsByIdMethod";
import PopularListItem from "../popularListItem/popularListItem";

const PopularProducts = () => {
  const [currentListId, setCurrentId] = useState();
  const [productItems, setProducts] = useState();

  useEffect(() => {
    const defaultData = popular.find((_, index) => index === 0);
    const initProductItems = filterProductsByIdMethod(
      products,
      defaultData.idMethod
    );
    setProducts(initProductItems);
    setCurrentId(defaultData.id);
  }, []);

  const handleFilterPopularProducts = (idMethod, currentId) => {
    const popularProducts = filterProductsByIdMethod(products, idMethod);

    setCurrentId(currentId);
    setProducts(popularProducts);
  };

  return (
    <div className={style.popular_products}>
      <ul className={style.popular_products__list}>
        {popular.map((c) => (
          <PopularListItem
            key={c.id}
            listId={c.id}
            currentListId={currentListId}
            name={c.name}
            idMethod={c.idMethod}
            handleFilter={handleFilterPopularProducts}
          />
        ))}
      </ul>

      {productItems ? <PopularItems products={productItems} /> : "Load"}
    </div>
  );
};

export default PopularProducts;
