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
import { useAuth } from "../../hooks/useAuth";
import Loading from "../../common/loadingComponent/loading";

const AccountLayout = () => {
  const { currentUser, isLoading } = useAuth();

  return (
    <ComponentContainer>
      <div className={style.account_title}>
        <TitleComponent title="Account" />
      </div>

      {!isLoading ? (
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
      ) : (
        <Loading />
      )}
    </ComponentContainer>
  );
};

export default AccountLayout;
