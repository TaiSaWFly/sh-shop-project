import React from "react";
import { useHistory } from "react-router-dom";
import ProductDescriptionShort from "../../../common/productDescriptionShort/productDescriptionShort";
import style from "./productItems.module.scss";

const ProductItems = ({ productsItems: products }) => {
  const history = useHistory();
  const handleRedirectToProduct = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <div className={style.product_items}>
      {products.map((p) => (
        <div key={p.id} className={style.product_item_wrapper}>
          <div
            onClick={() => handleRedirectToProduct(p.id)}
            className={style.product_item_wrap}>
            <div className={style.product_item_img}>
              <img alt="pic" src={require(`/src/${p.imgUrl}`)} />
            </div>
            <ProductDescriptionShort
              {...{
                id: p.id,
                name: p.name,
                prices: p.prices,
                newPrice: p.newPrice,
                description: p.description,
                titleSize: "1.2rem",
                textSize: "1.15rem",
                QTYSentences: 2,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItems;
