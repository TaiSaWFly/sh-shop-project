import React, { useState, useEffect } from "react";
import style from "./reviewsPage.module.scss";
import { reviews } from "../../../../data/productReviews_Decription_Data/reviews";
import ReviewsList from "../../../ui/reviews/reviewsList/reviewsList";
import _ from "lodash";
import AddReview from "../../../ui/reviews/addReview/addReview";
import { users } from "../../../../data/accountData/users";
import { nanoid } from "nanoid";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../../common/buttonComponent/button";

const ReviewsPage = ({ productId }) => {
  const { currentUserId } = useAuth();
  const [reviewsArr, setReviews] = useState();
  const [user, setUser] = useState();
  const [isAdd, setAdd] = useState(false);

  useEffect(() => {
    const initReviews = reviews.filter((r) => r.productId === productId);
    const initUser = users.find((u) => u.id === currentUserId);

    setReviews(initReviews);
    setUser(initUser);
  }, [productId, currentUserId]);

  const toggleAddReview = () => {
    setAdd((prevState) => !prevState);
  };

  const handleSubmit = (data) => {
    const newData = {
      ...data,
      id: nanoid(),
      productId: productId,
      userId: currentUserId,
      created_at: Date.now(),
    };
    setAdd(false);

    console.log(newData);
  };

  const sortReviews = _.orderBy(reviewsArr, ["created_at"], ["desc"]);

  return (
    <>
      {/* <h3>reviews {productId}</h3> */}

      <div className={style.reviews_page__add_review}>
        <Button onAction={toggleAddReview}>
          {!isAdd ? "create review" : "delete review"}{" "}
        </Button>
      </div>
      {isAdd ? (
        <>
          {user ? <AddReview {...{ user }} onSubmit={handleSubmit} /> : "load"}
        </>
      ) : null}

      {sortReviews ? (
        <ReviewsList reviews={sortReviews} {...{ isAdd }} />
      ) : (
        "load"
      )}
    </>
  );
};

export default ReviewsPage;
