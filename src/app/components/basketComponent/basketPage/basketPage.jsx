import React from "react";
import { Link } from "react-router-dom";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import BasketTable from "../basketTable/basketTable";
import Address from "../../formsComponent/address/address";
import style from "./basketPage.module.scss";
import NextActionDecor from "../../common/nextActionDecor/nextActionDecor";
import TitleComponent from "../../common/titleComponent/titleComponent";
import Payment from "../../formsComponent/payment/payment";

const BasketPage = () => {
  return (
    <ComponentContainer>
      <h2>BasketPage</h2>
      <div className={style.basket_page__wrapper}>
        <TitleComponent>
          <div>Your shopping bag</div>
          <span>Items reserved for limited time only</span>
        </TitleComponent>
      </div>
      <div className={style.basket_wrapper}>
        <div className={style.basket_container}>
          <BasketTable />
          <div className={style.basket_table__action}>
            <Link to="/">Continue Shopping</Link>
            <button className="button_table__order">order now</button>
          </div>

          <NextActionDecor />
          <Address />
          <NextActionDecor />
          <Payment />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default BasketPage;
