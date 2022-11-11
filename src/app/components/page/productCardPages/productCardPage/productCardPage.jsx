import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./productCardPage.module.scss";
import { products } from "../../../../data/basicData/products";
import { reviews } from "../../../../data/productReviews_Decription_Data/reviews";
import Button from "../../../common/buttonComponent/button";
import ProductImage from "../../../ui/productCard/productImage/productImage";
import ProductTitle from "../.././../ui/productCard/productTitle/productTitle";
import ProductPrice from "../../../ui/productCard/productPrice/productPrice";
import ProductReviews from "../../../ui/productCard/productReviews/productReviews";
import ProductDescription from "../../../ui/productCard/productDescription/productDescription";
import Loading from "../../../common/loadingComponent/loading";
import ProductSize from "../../../ui/productCard/productSize/productSize";
import { countDataLengthByDataId } from "../../../../utils/countDataLengthByDataId";
import ProducsColor from "../../../ui/productCard/producsColor/producsColor";
import { commingSoonProducts } from "../../../../data/basicData/commingSoonProducts";

const ProductCardPage = ({ productId }) => {
  const [product, setProduct] = useState();
  const [reviewsLength, setReviewsLength] = useState();

  useEffect(() => {
    const initConstProduct = products.filter((p) => p.id === productId);

    if (initConstProduct.length === 0) {
      const initProduct = commingSoonProducts.filter((p) => p.id === productId);
      setProduct(initProduct);
    } else {
      setProduct(initConstProduct);
    }

    const initReviewsLength = countDataLengthByDataId(
      reviews,
      productId,
      "productId"
    );

    setReviewsLength(initReviewsLength);
  }, [productId]);

  return (
    <>
      <h2>ProductCardPage {productId}</h2>
      <div className={style.product_card_page}>
        {product ? (
          product.map((p) => (
            <div key={p.id} className={style.product_card_page__wrapper}>
              <div className={style.product_card_page__item}>
                <ProductImage imgUrl={p.imgUrl} otherImg={p.otherImg} />
              </div>

              <div className={style.product_card_page__item}>
                <div className={style.product_card_page__item_info}>
                  <ProductTitle name={p.name} articleNumber={p.articleNumber} />
                  <ProductPrice price={p.price} newPrice={p.newPrice} />
                  <ProductReviews {...{ reviewsLength }} />
                  <ProductDescription description={p.description} />
                  <ProducsColor colors={p.color} />
                  <ProductSize sizes={p.size} />
                  <Button>add to card</Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>

      <div className={style.product_card_page__links}>
        <NavLink
          className={(isActive) =>
            isActive
              ? style.product_card_page__navLink_active
              : style.product_card_page__navLink
          }
          to={`/product/${productId}/decription`}>
          description
        </NavLink>

        <NavLink
          className={(isActive) =>
            isActive
              ? style.product_card_page__navLink_active
              : style.product_card_page__navLink
          }
          to={`/product/${productId}/reviews`}>
          reviews {reviewsLength ? <span>({reviewsLength})</span> : null}
        </NavLink>
      </div>
    </>
  );
};

export default ProductCardPage;
