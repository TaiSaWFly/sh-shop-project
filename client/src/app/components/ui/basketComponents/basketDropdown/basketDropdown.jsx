import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../common/buttonComponent/button";
import Price from "../../../common/priceComponent/price";
import style from "./basketDropdown.module.scss";

const BasketDropdown = ({ basket, dropdown }) => {
  return (
    <div
      className={
        dropdown
          ? style.basket_link__dropdown_wrapper_show
          : style.basket_link__dropdown_wrapper_hide
      }>
      <div className={style.basket_link__dropdown}>
        {basket.map((b) => (
          <div key={b.id} className={style.dropdown}>
            <Link to={`/product/${b.id}`} className={style.basket_img__link}>
              <img alt="pic" src={require(`/src/${b.imgUrl}`)} />
            </Link>
            <div className={style.product_name}>
              <span>{b.name}</span>
            </div>
            <div className={style.product_price}>
              <Price price={b.price} />
            </div>
            {b.quantity > 1 && (
              <div className={style.product_quantity}>
                <span>{b.quantity} qty</span>
              </div>
            )}
            <div className={style.product_delete}>
              <Button className={"button_table__delete"}></Button>
            </div>
          </div>
        ))}
        <div className={style.product_subtotal}>
          <p>subtotal:</p>
          <Price price="124.33" />
        </div>
      </div>
    </div>
  );
};

export default BasketDropdown;
