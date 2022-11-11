import React from "react";
import { useHistory } from "react-router-dom";
import ProductDescriptionShort from "../../common/productDescriptionShort/productDescriptionShort";
import style from "./newProducts.module.scss";

const NewProducts = ({ dataProducts: products }) => {
  const history = useHistory();

  const handleRedirectToProduct = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <div className={style.products}>
      {products.map((p) => (
        <div key={p.id} className={style.product_item}>
          <div className={style.product_wrapper}>
            <div
              onClick={() => handleRedirectToProduct(p.id)}
              className={style.product_img}>
              <img alt="pic" src={require(`/src/${p.imgUrl}`)} />
            </div>

            <ProductDescriptionShort
              {...{
                id: p.id,
                name: p.name,
                price: p.price,
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

export default NewProducts;
