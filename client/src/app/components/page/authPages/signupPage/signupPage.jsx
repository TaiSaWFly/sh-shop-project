import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../api";
// import countries from "../../../../data/basicData/initCountriesData";
import { signupSchema } from "../../../../utils/yupSchema";
import Button from "../../../common/buttonComponent/button";
import CheckBoxField from "../../../common/fieldCommonents/checkBoxField/checkBoxField";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import TextField from "../../../common/fieldCommonents/textField/textField";
import Loading from "../../../common/loadingComponent/loading";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import style from "./signupPage.module.scss";

const SignupPage = () => {
  const [data, setData] = useState({
    accountName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    licence: false,
  });
  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState();
  const [countriesOptions, setCountriesOptions] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.countriesData.fetchAll().then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    if (countries) {
      const optionCountries = countries.map((c) => ({
        value: c.id,
        label: c.name,
      }));
      setCountriesOptions(optionCountries);
      setIsLoading(false);
    }
  }, [countries]);

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validate = () => {
    signupSchema
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
    <div className={style.signup_page}>
      <TitleComponent title={"sign up"} />
      {!isLoading ? (
        <form onSubmit={handleSubmit}>
          <div>
            <div className={style.signup_form__field}>
              <TextField
                name="accountName"
                label="Account Name"
                value={data.accountName}
                onChange={handleChange}
                error={errors.accountName}
              />
            </div>

            <div className={style.signup_form__field}>
              <TextField
                name="email"
                label="e-mail"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <div className={style.signup_form__field}>
              <TextField
                name="password"
                label="password"
                type="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>

            <div className={style.signup_form__field}>
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={data.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
            </div>
            <div className={style.signup_form__field}>
              <SelectField
                label="country"
                name="country"
                options={countriesOptions}
                value={data.country}
                type="form"
                placeholder="choose your country"
                onChange={handleChange}
                error={errors.country}
              />
            </div>
          </div>

          <div className={style.signup_form__field}>
            <CheckBoxField
              name="licence"
              value={data.licence}
              onChange={handleChange}
              error={errors.licence}>
              <span className={style.signup_form__licence}>
                You agree to our <Link to="/">Privacy Policy</Link>
              </span>
            </CheckBoxField>
          </div>

          <div className={style.signup_form__action}>
            <Button isDisabled={!isValid}>sign up</Button>

            <div>
              <Link to="/auth/login">i have an account</Link>
            </div>
          </div>
        </form>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SignupPage;
