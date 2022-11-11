import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./loginPage.module.scss";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import TextField from "../../../common/fieldCommonents/textField/textField";
import Button from "../../../common/buttonComponent/button";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (target) => {
    setData((prevStare) => ({
      ...prevStare,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={style.login_page}>
      <TitleComponent title={"sign in"} />
      <form onSubmit={handleSubmit}>
        <div className={style.login_form__field}>
          <TextField
            name="email"
            label="e-mail"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className={style.login_form__field}>
          <TextField
            name="password"
            label="password"
            type="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className={style.login_form__action}>
          <Button>log in</Button>
          <div>
            <Link to="/auth/signup">i don't have an account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
