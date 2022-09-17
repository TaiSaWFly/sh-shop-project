import React from "react";
import TitleComponent from "../../common/titleComponent/titleComponent";
import { ReactComponent as Visa } from "../../../../assets/svg_icons/payment_visa.svg";
import { ReactComponent as Mastercard } from "../../../../assets/svg_icons/payment_mastercard.svg";
import style from "./payment.module.scss";

const Payment = () => {
  return (
    <div className={style.payment}>
      <div className={style.payment__wrapper}>
        <TitleComponent>
          <div>payment option</div>
          <span>All fields are required</span>
        </TitleComponent>
        <div className={style.payment_total}>
          <p>
            subtotal: <span>&pound;555</span>
          </p>
          <p>
            shipping: <span>&pound;55</span>
          </p>
          <p className={style.payment_sum_total}>
            total: <span>&pound;454</span>
          </p>
        </div>
      </div>

      <div className={style.form}>
        <div className={style.form__conteiner}>
          <form className={style.form__fields_wrapper}>
            <div className={style.form__field_payment}>
              <label htmlFor="address">
                !!!Select!!! select payment method
              </label>
              <input type="text" id="address" name="address" />
              <div className={style.form__field_payment_icon}>
                <Visa width="100%" height="100%" />
              </div>
              <div className={style.form__field_payment_icon}>
                <Mastercard width="100%" height="100%" />
              </div>
            </div>
            <button className="button_table__order">order now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
