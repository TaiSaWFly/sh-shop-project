import React from "react";
import style from "./addBasketButton.module.scss";
import { ReactComponent as Basket } from "../../../../../../node_modules/bootstrap-icons/icons/handbag-fill.svg";

const AddBasketButton = () => {
  return (
    <div className={style.add_basket_button}>
      <Basket
        className={style.add_basket_button__icon}
        width="17px"
        height="17px"
      />
    </div>
  );
};

export default AddBasketButton;
