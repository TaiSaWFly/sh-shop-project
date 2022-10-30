import React, { useState } from "react";
import style from "./paymentForm.module.scss";
import { ReactComponent as Visa } from "../../../../../assets/svg_icons/payment_visa.svg";
import { ReactComponent as Mastercard } from "../../../../../assets/svg_icons/payment_mastercard.svg";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import Button from "../../../common/buttonComponent/button";

const PaymentForm = () => {
  const paymentOptions = [
    { value: 1, label: "1 method" },
    { value: 2, label: "2 method" },
    { value: 3, label: "3 method" },
  ];
  const [data, setData] = useState({
    paymentMethod: "",
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <div className={style.payment_form}>
      <div className={style.payment_form__wrapper}>
        <TitleComponent
          title={"payment option"}
          subtitle={"All fields are required"}
        />

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
      <div className={style.form__conteiner}>
        <form>
          <div className={style.payment_form__field}>
            <SelectField
              label="select payment method"
              name="paymentMethod"
              options={paymentOptions}
              value={data.paymentMethod}
              type="form"
              placeholder="choose payment"
              onChange={handleChange}
            />
          </div>

          <Button className="button_table__order">order now</Button>
        </form>
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

export default PaymentForm;
