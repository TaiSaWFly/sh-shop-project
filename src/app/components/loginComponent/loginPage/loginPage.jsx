import React from "react";
import { Link } from "react-router-dom";
import TitleComponent from "../../common/titleComponent/titleComponent";
import style from "./loginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={style.login_page__modal}>
      <div className={style.login_page__modal_wrapper}>
        <div className={style.login_page__logo}>
          <Link to="/">sh</Link>
        </div>
        <div className={style.login_page__sign_in}>
          <TitleComponent>
            <div>sign in</div>
          </TitleComponent>
          <form>
            <div className={style.form__field}>
              <label htmlFor="address">e-mail</label>
              <input type="text" id="address" name="address" />
            </div>

            <div className={style.form__field}>
              <label htmlFor="address">password</label>
              <input type="text" id="address" name="address" />
            </div>
            <div className={style.login_page__sign_in_action}>
              <button className="button_table__order">log in</button>
              <div>
                <Link to="/">i don't have an account</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
