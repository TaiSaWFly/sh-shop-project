import React from "react";
import AddReviewForm from "../../forms/addReviewForm/addReviewForm";
import UserReviewer from "../userReviewer/userReviewer";
import style from "./addReview.module.scss";

const AddReview = ({ user, onSubmit }) => {
  return (
    <div className={style.add_review}>
      <div className={style.add_review__wrapper}>
        <div className={style.add_review__user_reviewer}>
          <UserReviewer {...{ user }} />
        </div>

        <div className={style.add_review__form}>
          <AddReviewForm {...{ onSubmit }} />
        </div>
      </div>
    </div>
  );
};

export default AddReview;
