import React from "react";
import { useHistory } from "react-router-dom";
import style from "./popularItems.module.scss";
import PopularItem from "../popularItem/popularItem";

const PopularItems = ({ products }) => {
  const history = useHistory();
  const handleRedirectToProduct = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <div className={style.popular_items}>
      {products.map((product) => (
        <PopularItem
          key={product.id}
          product={product}
          redirectToProduct={handleRedirectToProduct}
        />
      ))}
    </div>
  );
};

export default PopularItems;
