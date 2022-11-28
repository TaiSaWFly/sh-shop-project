import React, { useEffect, useState } from "react";
import style from "./historyProducts.module.scss";
import api from "../../../../../api";
import Loading from "../../../../common/loadingComponent/loading";

const HistoryProducts = ({ productsIds }) => {
  const [product, setProducts] = useState();
  useEffect(() => {
    api.products.getProductByIds(productsIds).then((data) => setProducts(data));
  }, [productsIds]);

  return (
    <div className={style.history_products}>
      {product ? (
        product.map((p) => (
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
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HistoryProducts;
