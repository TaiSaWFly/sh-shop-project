import React from "react";
import { Link } from "react-router-dom";
import RenderPrice from "../../../common/priceComponent/renderPrice";
import style from "./productItems.module.scss";

const ProductItems = ({ productsItems }) => {
  return (
    <div className={style.product_items}>
      {productsItems.map((p) => (
        <div key={p.id} className={style.product_item_wrapper}>
          <Link to={`/product/${p.id}`} className={style.product_item_wrap}>
            <div className={style.product_item_img}>
              <img alt="pic" src={require(`/src/${p.imgUrl}`)} />
            </div>
            <span>{p.name}</span>
            <RenderPrice price={p.newPrice ? p.newPrice : p.price} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductItems;
