import React from "react";
import { Route, Switch } from "react-router-dom";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import AccountEdit from "../../ui/account/accountEdit/accountEdit";
import style from "./accountLayout.module.scss";
import AccountUser from "../../ui/account/accountUser/accountUser";
import AccountMenu from "../../ui/account/accountMenu/accountMenu";
import TitleComponent from "../../common/titleComponent/titleComponent";
import AccountHistory from "../../ui/account/accountHistory/accountHistory";
import AccountFavourite from "../../ui/account/accountFavourite/accountFavourite";
import { users } from "../../../data/accountData/users";
import { useAuth } from "../../hooks/useAuth";

const AccountLayout = () => {
  const { currentUserId } = useAuth();
  const currentUser = users.find((u) => u.id === currentUserId);

  return (
    <ComponentContainer>
      <div className={style.account_title}>
        <TitleComponent title="Account" />
      </div>

      <div className={style.account_layout}>
        <div className={style.account_user}>
          <AccountUser user={currentUser} />
        </div>

        <div className={style.account_menus}>
          <Switch>
            <Route exact path="/account" component={AccountMenu} />
            <Route
              path="/account/edit"
              component={() => AccountEdit({ ...{ user: currentUser } })}
            />
            <Route path="/account/favourite" component={AccountFavourite} />
            <Route
              path="/account/history"
              component={() => AccountHistory({ ...{ user: currentUser } })}
            />
          </Switch>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default AccountLayout;
