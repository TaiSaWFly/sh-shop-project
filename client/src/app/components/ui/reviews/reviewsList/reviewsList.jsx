import React from "react";
import style from "./reviewsList.module.scss";
import Review from "../review/review";

const ReviewsList = ({ reviews, isAdd }) => {
  return (
    <>
      {reviews.length !== 0 ? (
        reviews.map((r) => <Review key={r.id} {...r} />)
      ) : (
        <>
          {!isAdd && (
            <div className={style.empty_reviews_list}>
              <p>There is no review for this product right now...</p>
              <span>Do you want to add first review?</span>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ReviewsList;
