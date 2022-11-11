import React, { useState } from "react";
import style from "./form.module.scss";
import { ReactComponent as EyeSlash } from "../../../../../../node_modules/bootstrap-icons/icons/eye-slash-fill.svg";
import { ReactComponent as Eye } from "../../../../../../node_modules/bootstrap-icons/icons/eye-fill.svg";

const TextField = ({ name, label, subLabel, type, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={style.form__field}>
      <label htmlFor={name}>
        {label} {subLabel ? <span>{subLabel}</span> : null}
      </label>
      <input
        className={
          type === "number" ? style.input__field_number : style.input__field
        }
        type={showPassword ? "text" : type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {type === "password" && (
        <div
          className={
            showPassword ? style.form__show_password : style.form__hide_password
          }
          onClick={toggleShowPassword}>
          {showPassword ? <Eye /> : <EyeSlash />}
        </div>
      )}
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};

export default TextField;
