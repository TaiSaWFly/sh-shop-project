import React from "react";
import style from "./homeTitle.module.scss";

const HomeTitle = () => {
  return (
    <div className={style.home_title__content}>
      <h1 className={style.home_title__content_title}>Hazy Shade</h1>
      <h2 className={style.home_title__content_subtitle}>
        Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.
      </h2>
      <div className={style.home_title__content_button}>
        <button className="button">check new arrivals</button>
      </div>
    </div>
  );
};

export default HomeTitle;
