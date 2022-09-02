import React from "react";
import TrendsList from "../trendsList/trendsList";
import style from "./shopTrends.module.scss";
import { trendsClothing } from "../../../constants/trendsClothing";

const ShopTrends = () => {
  return (
    <div className={style.shop_trends}>
      <ul className={style.shop_trends__list}>
        <li className={style.shop_trends__list_item}>popular</li>
        <li className={style.shop_trends__list_item}>new arrivals</li>
        <li className={style.shop_trends__list_item}>best sellers</li>
        <li className={style.shop_trends__list_item}>special offers</li>
        <li className={style.shop_trends__list_item}>comimg soon</li>
      </ul>

      <div className={style.shop_trends__content}>
        {trendsClothing.map((clothesItem, index) => (
          <TrendsList clothes={clothesItem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShopTrends;
