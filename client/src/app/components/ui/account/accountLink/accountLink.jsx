import React from "react";
import { Link } from "react-router-dom";
import style from "./accountLink.module.scss";
import { ReactComponent as Person } from "../../../../../../node_modules/bootstrap-icons/icons/person-circle.svg";
import Loading from "../../../common/loadingComponent/loading";
import { useAuth } from "../../../hooks/useAuth";

const AccountLink = () => {
  const { isAuth, currentUser, handlelogOut, isLoading } = useAuth();

  return (
    <div className={style.account_link__wrapper}>
      {isAuth ? (
        <>
          {!isLoading ? (
            <div className={style.account_link}>
              <Link to="/account" className={style.account_link__action}>
                <div className={style.account_link__wrapper_icon}>
                  <Person className={style.account_link__icon} />
                </div>
                <div>
                  <span>Hi, </span>
                  <span>{currentUser.userName} </span>
                </div>
              </Link>
              <div
                onClick={handlelogOut}
                className={style.account_link__logout}>
                (<span>logout</span>)
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <>
          <Link to="/auth/login" className={style.account_link__actions}>
            Sign In
          </Link>
          <Link to="/auth/signup" className={style.account_link__actions}>
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default AccountLink;
