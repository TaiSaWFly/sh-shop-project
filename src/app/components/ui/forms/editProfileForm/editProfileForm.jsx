import React, { useEffect, useState } from "react";
import TextField from "../../../common/fieldCommonents/textField/textField";
import style from "./editProfileForm.module.scss";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import Button from "../../../common/buttonComponent/button";
import BackButton from "../../../common/buttonComponent/backButton";
// import { usersAddress } from "../../../../data/accountData/usersAddress";
import Loading from "../../../common/loadingComponent/loading";
import AddNewAddressForm from "../addNewAddressForm/addNewAddressForm";
import api from "../../../../api";

const defaultOptions = [
  {
    value: "add",
    label: "Add New Address",
  },
];

const EditProfileForm = ({ user }) => {
  const [data, setData] = useState();
  const [options, setOptions] = useState(defaultOptions);
  const [addAddress, setAddAddress] = useState(false);
  const [address, setAddress] = useState();
  const [currentAddress, setCurrentAddress] = useState();
  const [currentUser, setUser] = useState();

  useEffect(() => {
    api.usersAddress
      .getUsersAddressesByUserId(user.id)
      .then((data) => setAddress(data));
    api.usersAddress
      .getCurrentAddressById(user.currentAddress)
      .then((data) => setCurrentAddress(data));

    setUser(user);
  }, [user]);

  useEffect(() => {
    if (address && currentAddress && user) {
      const transformAddresses = address.map((a) => ({
        value: a.id,
        label: renderUserAddress(a),
      }));

      setData({
        userName: user.userName,
        email: user.email,
        address: currentAddress
          ? {
              value: currentAddress.id,
              label: renderUserAddress(currentAddress),
            }
          : "",
      });
      setOptions((prevStare) => [...prevStare, ...transformAddresses]);
    }
  }, [address, currentAddress, user]);

  useEffect(() => {
    if (data) {
      if (data.address !== null) {
        data.address.value === "add"
          ? setAddAddress(true)
          : setAddAddress(false);
      } else {
        setAddAddress(false);
      }
    }
  }, [data]);

  const handleChange = (target) => {
    setData((prevStare) => ({
      ...prevStare,
      [target.name]: target.value,
    }));
    console.log(target.value.value);
  };

  function renderUserAddress(address) {
    return `City: ${address.city}, 
    Street: ${address.street}, 
    House: ${address.house}, 
    Flat: ${address.flat},
    Floor: ${address.floor}, 
    Intercom: ${address.intercom},
    Entrance: ${address.entrance}`;
  }

  const handleAddAddress = (data, billing) => {
    const createNewAddress = [
      {
        userId: user.id,
        ...data,
      },
    ];

    const transformAddresses = createNewAddress.map((a) => ({
      value: a.id,
      label: renderUserAddress(a),
    }));

    setOptions((prevStare) => [...prevStare, ...transformAddresses]);

    if (billing) {
      setUser((prevStare) => ({
        ...prevStare,
        currentAddress: data.id,
      }));

      setAddress((prevStare) => [...prevStare, ...createNewAddress]);
    } else {
      setAddress((prevStare) => [...prevStare, ...createNewAddress]);
    }

    setAddAddress(false);
  };

  useEffect(() => {
    if (address) {
      const currentAddressUser = address.find(
        (a) => a.id === currentUser.currentAddress
      );
      if (currentAddressUser) {
        const transformAddresses = {
          value: currentAddressUser.id,
          label: renderUserAddress(currentAddressUser),
        };
        setData((prevStare) => ({
          ...prevStare,
          address: transformAddresses,
        }));
      }
    }
  }, [currentUser, address]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={style.edit_profile_form__wrapper}>
      <div className={style.edit_profile_form}>
        <BackButton
          className={style.edit_profile__back_button}
          urlBack="/account">
          go back
        </BackButton>

        <div className={style.profile_form__title}>Edit Profile</div>
        {data && options ? (
          <>
            <form onSubmit={handleSubmit}>
              <div className={style.edit_form__field}>
                <TextField
                  name="userName"
                  label="Your Name"
                  value={data.userName}
                  onChange={handleChange}
                />
              </div>

              <div className={style.edit_form__field}>
                <TextField
                  name="email"
                  label="e-mail"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>

              <div className={style.edit_form__field}>
                <SelectField
                  label="current delivery address "
                  name="address"
                  options={options}
                  value={data.address}
                  type="form"
                  placeholder="you can edit current delivery address"
                  onChange={handleChange}
                />
              </div>
              {!addAddress ? <Button>submit</Button> : null}
            </form>

            <>
              {addAddress ? (
                <AddNewAddressForm addAddress={handleAddAddress} />
              ) : null}
            </>
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </div>
  );
};

export default EditProfileForm;
