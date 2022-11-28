import React, { useState, useEffect } from "react";
import style from "./reviewsPage.module.scss";
import ReviewsList from "../../../ui/reviews/reviewsList/reviewsList";
import _ from "lodash";
import AddReview from "../../../ui/reviews/addReview/addReview";
import { nanoid } from "nanoid";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../../common/buttonComponent/button";
import api from "../../../../api";
import Loading from "../../../common/loadingComponent/loading";

const ReviewsPage = ({ productId }) => {
  const { currentUser } = useAuth();
  const [reviews, setReviews] = useState();
  const [isAdd, setAdd] = useState(false);

  useEffect(() => {
    api.reviews
      .getReviewsByProductId(productId)
      .then((data) => setReviews(data));
  }, [productId, currentUser]);

  const toggleAddReview = () => {
    setAdd((prevState) => !prevState);
  };

  const handleSubmit = (data) => {
    const newData = {
      ...data,
      id: nanoid(),
      productId: productId,
      userId: currentUser.id,
      created_at: Date.now(),
    };
    setAdd(false);

    console.log(newData);
  };

  const sortReviews = _.orderBy(reviews, ["created_at"], ["desc"]);

  return (
    <>
      {reviews ? (
        <>
          {currentUser && (
            <>
              <div className={style.reviews_page__add_review}>
                <Button onAction={toggleAddReview}>
                  {!isAdd ? "create review" : "delete review"}
                </Button>
              </div>
              {isAdd && (
                <AddReview {...{ user: currentUser }} onSubmit={handleSubmit} />
              )}
            </>
          )}

          <ReviewsList reviews={sortReviews} {...{ isAdd }} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ReviewsPage;
