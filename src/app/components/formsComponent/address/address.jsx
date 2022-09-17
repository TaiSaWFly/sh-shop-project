import React from "react";
import TitleComponent from "../../common/titleComponent/titleComponent";
import style from "./address.module.scss";

const Address = () => {
  return (
    <div className={style.address}>
      <div className={style.address__wrapper}>
        <TitleComponent>
          <div>shipping address</div>
          <span>All fields are required</span>
        </TitleComponent>
      </div>

      <div className={style.form}>
        <div className={style.form__conteiner}>
          <form className={style.form__fields_wrapper}>
            <div className={style.form__field}>
              <label htmlFor="address">!!!Select!!! delivery method</label>
              <input type="text" id="address" name="address" />
            </div>

            <div className={style.form__field_collective}>
              <div className={style.form__field}>
                <label htmlFor="address">FIRST NAME </label>
                <input type="text" id="address" name="address" />
              </div>
              <div className={style.form__field}>
                <label htmlFor="address">last name</label>
                <input type="text" id="address" name="address" />
              </div>
            </div>

            <div className={style.form__field}>
              <label htmlFor="address">
                address <span>(line 1)</span>
              </label>
              <input type="text" id="address" name="address" />
            </div>

            <div className={style.form__field}>
              <label htmlFor="address">
                address <span>(line 2)</span>
              </label>
              <input type="text" id="address" name="address" />
            </div>

            <div className={style.form__field_collective}>
              <div className={style.form__field}>
                <label htmlFor="address">city</label>
                <input type="text" id="address" name="address" />
              </div>
              <div className={style.form__field}>
                <label htmlFor="address">postal code</label>
                <input type="text" id="address" name="address" />
              </div>
            </div>

            <div className={style.form__field_collective}>
              <div className={style.form__field}>
                <label htmlFor="address">phone number</label>
                <input type="text" id="address" name="address" />
              </div>
              <div className={style.form__field}>
                <label htmlFor="address">e-mail</label>
                <input type="text" id="address" name="address" />
              </div>
            </div>
            <div className={style.form__field_checkbox}>
              <input
                className={style.form__field_custom_checkbox}
                type="checkbox"
                id="check"
                name="checkbox"
              />
              <label htmlFor="check">Use this address for Billing</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
