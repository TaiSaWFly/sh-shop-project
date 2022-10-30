import React, { useState } from "react";
import style from "./addressForm.module.scss";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import TextField from "../../../common/fieldCommonents/textField/textField";
import CheckBoxField from "../../../common/fieldCommonents/checkBoxField/checkBoxField";

const AddressForm = () => {
  const deliveryOption = [
    { value: 1, label: "1 method" },
    { value: 2, label: "2 method" },
    { value: 3, label: "3 method" },
  ];

  const [data, setData] = useState({
    delivery: "",
    firstName: "",
    lastName: "",
    firstAddress: "",
    secondAddress: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
    billing: "",
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={style.address_form}>
      <div className={style.address_form__title}>
        <TitleComponent
          title={"shipping address"}
          subtitle={"All fields are required"}
        />
      </div>

      <div className={style.address_form__conteiner}>
        <form onSubmit={handleSubmit}>
          <div className={style.address_form__field}>
            <SelectField
              label="delivery method"
              name="delivery"
              options={deliveryOption}
              value={data.delivery}
              type="form"
              placeholder="choose method"
              onChange={handleChange}
            />
          </div>

          <div className={style.address_form__field_collective}>
            <div className={style.address_form__field}>
              <TextField
                label="first name"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>

            <div className={style.address_form__field}>
              <TextField
                label="last name"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={style.address_form__field}>
            <TextField
              label="address"
              subLabel="line 1"
              name="firstAddress"
              value={data.firstAddress}
              onChange={handleChange}
            />
          </div>

          <div className={style.address_form__field}>
            <TextField
              label="address"
              subLabel="line 2"
              name="secondAddress"
              value={data.secondAddress}
              onChange={handleChange}
            />
          </div>

          <div className={style.address_form__field_collective}>
            <div className={style.address_form__field}>
              <TextField
                label="city"
                name="city"
                value={data.city}
                onChange={handleChange}
              />
            </div>

            <div className={style.address_form__field}>
              <TextField
                label="postal code"
                name="postalCode"
                value={data.postalCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={style.address_form__field_collective}>
            <div className={style.address_form__field}>
              <TextField
                label="phone number"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className={style.address_form__field}>
              <TextField
                label="e-mail"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <CheckBoxField
            name="billing"
            value={data.billing}
            onChange={handleChange}>
            Use this address for Billing
          </CheckBoxField>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
