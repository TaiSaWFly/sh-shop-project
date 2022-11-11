import React, { useState, useEffect } from "react";
import style from "./review.module.scss";
import UserReviewer from "../userReviewer/userReviewer";
import { users } from "../../../../data/accountData/users";
import { displayDate } from "../../../../utils/displayDate";

const Review = ({ userId, created_at: created, content }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const initUser = users.find((u) => u.id === userId);
    setUser(initUser);
  }, [userId]);

  return (
    <div className={style.review}>
      {user ? (
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
      ) : (
        "load"
      )}
    </div>
  );
};

export default Review;
