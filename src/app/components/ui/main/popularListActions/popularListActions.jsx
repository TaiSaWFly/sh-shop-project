import React from "react";
import style from "./popularListActions.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Basket } from "../../../../../assets/svg_icons/basket.svg";
import { ReactComponent as Favorite } from "../../../../../assets/svg_icons/favorite.svg";
import { ReactComponent as Info } from "../../../../../assets/svg_icons/info.svg";

const PopularListActions = ({ productId }) => {
  return (
    <div className={style.popular_list_actions__wrapper}>
      <div className={style.popular_list_actions__wrap}>
        <Basket
          className={style.popular_list_actions__icon}
          width="20px"
          height="20px"
        />
      </div>
      <div className={style.popular_list_actions__wrap}>
        <Favorite
          className={style.popular_list_actions__icon}
          width="20px"
          height="20px"
        />
      </div>
      <Link
        to={`/product/${productId}`}
        className={style.popular_list_actions__wrap}>
        <Info
          className={style.popular_list_actions__icon}
          width="20px"
          height="20px"
        />
      </Link>
    </div>
  );
};

export default PopularListActions;
