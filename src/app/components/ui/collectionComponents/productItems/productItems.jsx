import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProductLoadingStatus } from "../../../../store/slices/product";
import ProductDescriptionShort from "../../../common/productDescriptionShort/productDescriptionShort";
import style from "./productItems.module.scss";
import Loading from "../../../common/loadingComponent/loading";

const ProductItems = ({ productsItems: products }) => {
  const history = useHistory();
  const handleRedirectToProduct = (id) => {
    history.push(`/product/${id}`);
  };

  const isLoadingProducts = useSelector(getProductLoadingStatus());

  return (
    <div className={style.product_items}>
      {!isLoadingProducts ? (
        products.map((p) => (
          <div key={p._id} className={style.product_item_wrapper}>
            <div
              onClick={() => handleRedirectToProduct(p._id)}
              className={style.product_item_wrap}>
              <div className={style.product_item_img}>
                <img alt="pic" src={require(`/src/${p.imgUrl}`)} />
              </div>
              <ProductDescriptionShort
                {...{
                  id: p._id,
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
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductItems;
