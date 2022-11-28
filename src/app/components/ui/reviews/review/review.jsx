import React, { useState, useEffect } from "react";
import style from "./review.module.scss";
import UserReviewer from "../userReviewer/userReviewer";
import { displayDate } from "../../../../utils/displayDate";
import api from "../../../../api";
import Loading from "../../../common/loadingComponent/loading";

const Review = ({ userId, created_at: created, content }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    api.users.getUserById(userId).then((data) => setUser(data));
  }, [userId]);

  return (
    <>
      {user ? (
        <div className={style.review}>
          <div className={style.review__wrapper}>
            <div className={style.review__user_reviewer}>
              <UserReviewer {...{ user }} />
            </div>

            <div className={style.review__content}>
              <div className={style.review__content_review}>
                <p>{content}</p>
              </div>
              <div className={style.review__content_date}>
                {displayDate(created)}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Review;
