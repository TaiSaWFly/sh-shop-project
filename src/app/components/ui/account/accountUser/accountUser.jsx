import React from "react";
import { usersAddress } from "../../../../data/accountData/usersAddress";
import style from "./accountUser.module.scss";

const AccountUser = ({ user }) => {
  const currentUserAddress = usersAddress.find(
    (a) => a.id === user.currentAddress
  );

  const renderUserAddress = (address) => {
    return `${address.city}, ${address.street}, ${address.house}`;
  };

  return (
    <div className={style.account_user}>
      <div className={style.user_avatar}>
        <img
          // user.avatar
          alt="pic"
          src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`}
        />
      </div>
      <div className={style.user_info}>
        <div>
          <span>name</span>
          <p>{user.userName}</p>
        </div>
        <div>
          <span>e-mail</span>
          <p>{user.email}</p>
        </div>

        {currentUserAddress ? (
          <div>
            <span>current delivery address</span>
            <p>{renderUserAddress(currentUserAddress)}</p>
          </div>
        ) : (
          <div>
            <span>current delivery address</span>
            <p>not used</p>
          </div>
        )}

        <div>
          <span>number phone</span>
          <p>{user.phone}</p>
        </div>
        <div>
          <span>qty comments</span>
          <p>in development</p>
        </div>
        <div>
          <span>favourite</span>
          <p>in development</p>
        </div>
      </div>
    </div>
  );
};

export default AccountUser;
