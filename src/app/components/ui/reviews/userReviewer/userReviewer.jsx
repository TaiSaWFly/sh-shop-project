import React from "react";
import style from "./userReviewer.module.scss";

const UserReviewer = ({ user }) => {
  return (
    <div className={style.display_user}>
      <div className={style.display_user__avatar}>
        <img
          // user.avatar
          alt="pic"
          src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`}
        />
      </div>
      <div className={style.display_user__name}>{user.userName}</div>
    </div>
  );
};

export default UserReviewer;
