import React from "react";
import HomeTitle from "../homeTitle/homeTitle";
import ShopsNewsLetter from "../shopsNewsletter/shopsNewsletter";
import ShopTrends from "../shopTrends/shopTrends";
import style from "./homePage.module.scss";

const HomePage = () => {
  return (
    <div className={style.home_page}>
      <div className={style.home_page__conteiner}>
        <HomeTitle />
        <ShopTrends />
        <ShopsNewsLetter />
      </div>
    </div>
  );
};

export default HomePage;
