import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Basket } from "../../../../../../node_modules/bootstrap-icons/icons/handbag-fill.svg";
import BasketDropdown from "../basketDropdown/basketDropdown";
import style from "./basketLink.module.scss";

const BasketLink = () => {
  const basket = [
    {
      id: "product_1",
      imgUrl: "assets/img/clothers/burnt3.webp",
      name: "Double-Layered Top",
      price: "29.95",
      articleNumber: "123449992378",
      size: "38",
      color: "red",
      quantity: 1,
    },
    {
      id: "product_2",
      imgUrl: "assets/img/clothers/burnt3.webp",
      name: "Double-Layered Top",
      price: "29.95",
      articleNumber: "123449992378",
      size: "38",
      color: "green",
      quantity: 2,
    },
    {
      id: "product_3",
      imgUrl: "assets/img/clothers/burnt3.webp",
      name: "Double-Layered Top",
      price: "29.95",
      articleNumber: "123449992378",
      size: "38",
      color: "blue",
      quantity: 3,
    },
  ];

  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      className={style.basket_link}>
      <div className={style.basket_link__wrapper}>
        <Link to="/basket" className={style.basket_link__action}>
          <Basket
            className={style.basket_link__icon}
            width="20px"
            height="20px"
          />
          <span>basket</span>
          {basket.length !== 0 && (
            <div className={style.basket_link__products_quantity}>
              <span>{basket.length}</span>
            </div>
          )}
          {dropdown && basket.length !== 0 && (
            <span className={style.basket_link__arrow}></span>
          )}
        </Link>
      </div>
      {basket.length !== 0 && (
        <BasketDropdown basket={basket} dropdown={dropdown} />
      )}
    </div>
  );
};

export default BasketLink;
