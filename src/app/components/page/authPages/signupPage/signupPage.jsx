import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import countries from "../../../../data/basicData/initCountriesData";
import Button from "../../../common/buttonComponent/button";
import CheckBoxField from "../../../common/fieldCommonents/checkBoxField/checkBoxField";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import TextField from "../../../common/fieldCommonents/textField/textField";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import style from "./signupPage.module.scss";

const SignupPage = () => {
  const [data, setData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    licence: "",
  });

  const optionCountries = countries.map((c) => ({
    value: c.id,
    label: c.name,
  }));

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
    <div className={style.signup_page}>
      <TitleComponent title={"sign up"} />
      <form onSubmit={handleSubmit}>
        <div>
          <div className={style.signup_form__field}>
            <TextField
              name="firstName"
              label="First Name"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>

          <div className={style.signup_form__field}>
            <TextField
              name="email"
              label="e-mail"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className={style.signup_form__field}>
            <TextField
              name="password"
              label="password"
              type="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <div className={style.signup_form__field}>
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className={style.signup_form__field}>
            <SelectField
              label="country"
              name="country"
              options={optionCountries}
              value={data.country}
              type="form"
              placeholder="choose your country"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.signup_form__field}>
          <CheckBoxField
            name="licence"
            value={data.licence}
            onChange={handleChange}>
            <span className={style.signup_form__licence}>
              You agree to our <Link to="/">Privacy Policy</Link>
            </span>
          </CheckBoxField>
        </div>

        <div className={style.signup_form__action}>
          <Button>sign up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
