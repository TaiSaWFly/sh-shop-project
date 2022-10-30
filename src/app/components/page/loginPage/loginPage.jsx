import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./loginPage.module.scss";
import LoginForm from "../../ui/forms/loginForm/loginForm";
import RegisterForm from "../../ui/forms/registerForm/registerForm";

const LoginPage = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.login_page__modal}>
      <div className={style.login_page__modal_wrapper}>
        <div className={style.login_page__logo}>
          <Link to="/">sh</Link>
        </div>

        {pathname === "/login" ? (
          <LoginForm />
        ) : pathname === "/register" ? (
          <RegisterForm />
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
