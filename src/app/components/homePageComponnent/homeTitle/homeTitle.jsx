import React from "react";
import TitleComponent from "../../common/titleComponent/titleComponent";
import style from "./homeTitle.module.scss";

const HomeTitle = () => {
  return (
    <div className={style.home_title__content}>
      <TitleComponent>
        <h1>Hazy Shade</h1>
        <span>
          Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.
        </span>
      </TitleComponent>
      <div className={style.home_title__button}>
        <button className="button">check new arrivals</button>
      </div>
    </div>
  );
};

export default HomeTitle;
