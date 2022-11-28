import React from "react";
import style from "./productListActions.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Favorite } from "../../../../../node_modules/bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as Info } from "../../../../../node_modules/bootstrap-icons/icons/info-lg.svg";
import AddBasketButton from "../../ui/basketComponents/addBasketButton/addBasketButton";

const ProductListActions = ({ productId }) => {
  return (
    <div className={style.popular_list_actions__wrapper}>
      <AddBasketButton />

      <div className={style.popular_list_actions__wrap}>
        <Favorite
          className={style.popular_list_actions__icon}
          width="17px"
          height="17px"
        />
      </div>
      <Link
        to={`/product/${productId}`}
        className={style.popular_list_actions__wrap}>
        <Info
          className={style.popular_list_actions__icon}
          width="22px"
          height="22px"
        />
      </Link>
    </div>
  );
};

export default ProductListActions;
