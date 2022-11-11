import React from "react";
import Select from "react-select";
import "./selectField.scss";

const SelectField = ({
  label,
  name,
  options,
  value,
  type,
  placeholder,
  onChange,
}) => {
  const handleChange = (value) => {
    onChange({ name: name, value });
  };

  const getSelectClassPrefix = () => {
    switch (type) {
      case "form":
        return "select_form";
      case "filter":
        return "select_filter";

      default:
        break;
    }
  };

  return (
    <div className="select_field">
      {label ? <label>{label}</label> : null}

      <Select
        classNamePrefix={getSelectClassPrefix()}
        name={name}
        options={options}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        isClearable={true}
        maxMenuHeight={190}
      />
    </div>
  );
};
SelectField.defaultProps = {
  type: "form",
};

export default SelectField;
