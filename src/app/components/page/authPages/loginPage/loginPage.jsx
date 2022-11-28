import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./loginPage.module.scss";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import TextField from "../../../common/fieldCommonents/textField/textField";
import Button from "../../../common/buttonComponent/button";
import { useEffect } from "react";
import { loginSchema } from "../../../../utils/yupSchema";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validate = () => {
    loginSchema
      .validate(data)
      .then(() => setErrors({}))
      .catch((error) => setErrors({ [error.path]: error.message }));
    return Object.keys(errors).length === 0;
  };

  const handleChange = (target) => {
    setData((prevStare) => ({
      ...prevStare,
      [target.name]: target.value,
    }));
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
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
            error={errors.email}
          />
        </div>

        <div className={style.login_form__field}>
          <TextField
            name="password"
            label="password"
            type="password"
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
        </div>

        <div className={style.login_form__action}>
          <Button isDisabled={!isValid}>log in</Button>
          <div>
            <Link to="/auth/signup">i don't have an account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
