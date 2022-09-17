import React from "react";
import { Link } from "react-router-dom";
import style from "./aboveHeader.module.scss";
import { ReactComponent as Basket } from "../../../../assets/svg_icons/basket.svg";

const AboveHeader = () => {
  return (
    <div className={style.above_header}>
      <div className={style.above_header__container}>
        <div className={style.above_header__link}>
          <div className={style.above_header__link_currency}>
            Currency : GBP
          </div>
        </div>
        <div className={style.above_header__link}>
          <div className={style.above_header__link__register_sign_in}>
            <Link to="/login" className={style.above_header__link_register}>
              Register
            </Link>
            <Link to="/login" className={style.above_header__link_sign_in}>
              Sign In
            </Link>
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
