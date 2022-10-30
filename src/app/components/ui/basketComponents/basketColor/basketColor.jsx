import React from "react";
import style from "./basketColor.module.scss";

const BasketColor = ({ color }) => {
  return <div className={style.basket_color}>{color}</div>;
};

export default BasketColor;
