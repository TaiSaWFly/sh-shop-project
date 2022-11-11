import React from "react";
import RenderPrice from "../../../common/priceComponent/renderPrice";
import style from "./productPrice.module.scss";

const ProductPrice = ({ price, newPrice }) => {
  return (
    <div className={style.product_price}>
      {newPrice ? (
        <>
          <span className={style.product_price_old}>
            <RenderPrice price={price} />
          </span>
          <RenderPrice price={newPrice} />
        </>
      ) : (
        <RenderPrice price={price} />
      )}
    </div>
  );
};

export default ProductPrice;
