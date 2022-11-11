import React from "react";

const ProductReviews = ({ reviewsLength }) => {
  return (
    <>
      {reviewsLength ? (
        <div>Reviews: {reviewsLength}</div>
      ) : (
        <div>You can add the first review to the product</div>
      )}
    </>
  );
};

export default ProductReviews;
