import React from "react";
import style from "./productReviews.module.scss";

const ProductReviews = ({ reviewsLength }) => {
  return (
    <>
      {reviewsLength ? (
        <div className={style.product_reviews}>Reviews: {reviewsLength}</div>
      ) : (
        <div className={style.product_reviews__empty}>
          You can add the first review to the product
        </div>
      )}
    </>
  );
};

export default ProductReviews;
