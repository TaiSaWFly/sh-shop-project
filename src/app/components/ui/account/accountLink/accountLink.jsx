import React from "react";
import { Link } from "react-router-dom";
import style from "./accountLink.module.scss";
import { ReactComponent as Person } from "../../../../../../node_modules/bootstrap-icons/icons/person-circle.svg";

const AccountLink = ({ user, logOut }) => {
  return (
    <div className={style.account_link}>
      <Link to="/account" className={style.account_link__action}>
        <div className={style.account_link__wrapper_icon}>
          <Person className={style.account_link__icon} />
        </div>
        <div>
          <span>Hi, </span>
          <span>{user.userName} </span>
        </div>
      </Link>
      <div onClick={logOut} className={style.account_link__logout}>
        (<span>logout</span>)
      </div>
    </div>
  );
};

export default AccountLink;
