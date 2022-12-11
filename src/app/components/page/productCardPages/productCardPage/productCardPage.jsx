import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./productCardPage.module.scss";
import { reviews } from "../../../../data/productReviews_Decription_Data/reviews";
import Button from "../../../common/buttonComponent/button";
import ProductImage from "../../../ui/productCard/productImage/productImage";
import ProductTitle from "../.././../ui/productCard/productTitle/productTitle";
import ProductReviews from "../../../ui/productCard/productReviews/productReviews";
import ProductDescription from "../../../ui/productCard/productDescription/productDescription";
import ProductSize from "../../../ui/productCard/productSize/productSize";
import { countDataLengthByDataId } from "../../../../utils/countDataLengthByDataId";
import ProducsColor from "../../../ui/productCard/producsColor/producsColor";
import RenderPrice from "../../../common/priceComponent/renderPrice/renderPrice";

const ProductCardPage = ({ product, productId }) => {
  const {
    imgUrl,
    otherImg,
    name,
    articleNumber,
    prices,
    description,
    size,
    color,
  } = product;

  const [reviewsLength, setReviewsLength] = useState();
  const [addProduct, setAddProduct] = useState();

  useEffect(() => {
    const initReviewsLength = countDataLengthByDataId(
      reviews,
      productId,
      "productId"
    );

    setReviewsLength(initReviewsLength);
    setAddProduct({
      id: productId,
      imgUrl: product.imgUrl,
      name: product.name,
      price: product.prices
        ? product.prices.newPrice
          ? product.prices.newPrice
          : product.prices.price
        : null,
      articleNumber: product.articleNumber,
      quantity: 1,
    });
  }, [productId, product]);

  const handleChange = (data) => {
    setAddProduct((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const handleAddProduct = () => {
    console.log(addProduct);
  };

  return (
    <>
      <h2>ProductCardPage {productId}</h2>
      <div className={style.product_card_page}>
        <div className={style.product_card_page__wrapper}>
          <div className={style.product_card_page__item}>
            <ProductImage {...{ imgUrl, otherImg }} />
          </div>

          <div className={style.product_card_page__item}>
            <div className={style.product_card_page__item_info}>
              <ProductTitle {...{ name, articleNumber }} />
              <RenderPrice {...{ prices }} />
              <ProductReviews {...{ reviewsLength }} />
              <ProductDescription {...{ description }} />
              <ProductSize onChange={handleChange} sizes={size} />
              <ProducsColor onChange={handleChange} colors={color} />

              <Button onAction={handleAddProduct}>add to basket</Button>
            </div>
          </div>
        </div>
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
