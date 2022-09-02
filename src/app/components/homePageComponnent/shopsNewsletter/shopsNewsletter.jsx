import React from "react";
import style from "./shopsNewsletter.module.scss";

const ShopsNewsLetter = () => {
  return (
    <div className={style.news_letter}>
      <div className={style.news_letter__title}>
        sign up to receive our updates
      </div>
      <div className={style.news_letter__subtitle}>
        Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque
        penatibus et ultrices volutpat.
      </div>
      <div className={style.news_letter__form_wrapper}>
        <form className={style.news_letter__form} action="/" id="newsLetter">
          <input
            className={style.news_letter__form_input}
            form="newsLetter"
            type="email"
            placeholder="Your e-mail"
          />
          <button className={style.news_letter__form_button} type="submit">
            add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopsNewsLetter;
