import React from "react";
import style from "./historyProducts.module.scss";
import { getDataByIds } from "../../../../../utils/getDataByIds";
import { products } from "../../../../../data/basicData/products";

const HistoryProducts = ({ productsIds }) => {
  const getProducts = getDataByIds(productsIds, products);

  return (
    <div className={style.history_products}>
      {getProducts.map((p) => (
        <div key={p.id} className={style.product}>
          <div className={style.product_img__wrapper}>
            <div className={style.product_img}>
              <img alt="pic" src={require(`/src/${p.imgUrl}`)} />
            </div>
          </div>

          <div className={style.product_info__wrapper}>
            <div className={style.product_info}>
              <p>{p.name}</p>
              <span>Article: {p.articleNumber}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryProducts;
