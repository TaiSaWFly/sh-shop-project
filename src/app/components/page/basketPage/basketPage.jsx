import React from "react";
import { Link } from "react-router-dom";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import BasketTable from "../../ui/basketComponents/basketTable/basketTable";
import style from "./basketPage.module.scss";
import NextActionDecor from "../../common/nextActionDecor/nextActionDecor";
import TitleComponent from "../../common/titleComponent/titleComponent";
import Button from "../../common/buttonComponent/button";
import AddressForm from "../../ui/forms/addressForm/addressForm";
import PaymentForm from "../../ui/forms/paymentForm/paymentForm";

const BasketPage = () => {
  return (
    <ComponentContainer>
      <h2>BasketPage</h2>
      <div className={style.basket_page__wrapper}>
        <TitleComponent
          title={"Your shopping bag"}
          subtitle={"Items reserved for limited time only"}
        />
      </div>
      <div className={style.basket_wrapper}>
        <div className={style.basket_container}>
          <BasketTable />
          <div className={style.basket_table__action}>
            <Link to="/">Continue Shopping</Link>
            <Button className={"button_table__order"}>order now</Button>
          </div>

          <NextActionDecor />
          <AddressForm />
          <NextActionDecor />
          <PaymentForm />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default BasketPage;
