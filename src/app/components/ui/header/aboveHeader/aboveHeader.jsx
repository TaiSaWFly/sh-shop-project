import React from "react";
import { Link } from "react-router-dom";
import style from "./aboveHeader.module.scss";
import { ReactComponent as Basket } from "../../../../../assets/svg_icons/basket.svg";
import { useAuth } from "../../../hooks/useAuth";
import AccountLink from "../../account/accountLink/accountLink";
import { users } from "../../../../data/accountData/users";

const AboveHeader = () => {
  const { isAuth, currentUserId, handlelogOut } = useAuth();
  const user = users.find((u) => u.id === currentUserId);

  return (
    <div className={style.above_header}>
      <div className={style.above_header__container}>
        <div className={style.above_header__link}>
          <div className={style.above_header__link_currency}>
            Currency : GBP
          </div>
        </div>
        <div className={style.above_header__link}>
          <div className={style.above_header__link__wrapper}>
            {isAuth ? (
              <AccountLink {...{ user, logOut: handlelogOut }} />
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className={style.above_header__link_actions}>
                  Sign In
                </Link>
                <Link
                  to="/auth/signup"
                  className={style.above_header__link_actions}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <Link to="/basket" className={style.above_header__link_basket}>
            <Basket
              className={style.above_header__link_icon}
              width="20px"
              height="20px"
            />
            Basket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboveHeader;
