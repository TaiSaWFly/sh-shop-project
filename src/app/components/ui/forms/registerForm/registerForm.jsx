import React, { useState } from "react";
import Button from "../../../common/buttonComponent/button";
import CheckBoxField from "../../../common/fieldCommonents/checkBoxField/checkBoxField";
import TextField from "../../../common/fieldCommonents/textField/textField";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import { Link } from "react-router-dom";
import style from "./registerForm.module.scss";

const RegisterForm = () => {
  const [data, setData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    licence: "",
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
    <div className={style.register_form}>
      <TitleComponent title={"registration"} />
      <form onSubmit={handleSubmit}>
        <div>
          <div className={style.register_form__field}>
            <TextField
              name="firstName"
              label="First Name"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>

          <div className={style.register_form__field}>
            <TextField
              name="email"
              label="e-mail"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className={style.register_form__field}>
            <TextField
              name="password"
              label="password"
              type="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <div className={style.register_form__field}>
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.register_form__field}>
          <CheckBoxField
            name="licence"
            value={data.licence}
            onChange={handleChange}>
            <span className={style.register_form__licence}>
              You agree to our <Link to="/">Privacy Policy</Link>
            </span>
          </CheckBoxField>
        </div>

        <div className={style.register_form__action}>
          <Button>register</Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
