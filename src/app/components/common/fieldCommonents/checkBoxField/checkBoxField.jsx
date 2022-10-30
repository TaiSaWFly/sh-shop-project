import React from "react";
import style from "./checkBoxField.module.scss";

const CheckBoxField = ({ name, value, children, onChange }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };

  return (
    <div className={style.checkbox_field}>
      <input
        className={style.checkbox}
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
        checked={value}
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
};

export default CheckBoxField;
