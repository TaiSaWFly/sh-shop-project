import React from "react";
import style from "./basketTable.module.scss";
import Table from "../../../common/tableComponent/table/table";
import BasketProductImage from "../basketProductImage/backetProductImage";
import BasketDecription from "../basketDecription/basketDecription";
import BasketColor from "../basketColor/basketColor";
import BasketQuantity from "../basketQuantity/basketQuantity";
import Button from "../../../common/buttonComponent/button";
import RenderPrice from "../../../common/priceComponent/renderPrice";

const BasketTable = () => {
  const total = 124.33;
  const basket = [
    {
      id: "product_1",
      imgUrl: "assets/img/clothers/burnt3.webp",
      name: "Double-Layered Top",
      price: "29.95",
      articleNumber: "123449992378",
      size: "38",
      color: "red",
      quantity: 1,
    },
    {
      id: "product_2",
      imgUrl: "assets/img/clothers/burnt3.webp",
      name: "Double-Layered Top",
      price: "29.95",
      articleNumber: "123449992378",
      size: "38",
      color: "green",
      quantity: 2,
    },
    {
      id: "product_3",
      imgUrl: "assets/img/clothers/burnt3.webp",
      name: "Double-Layered Top",
      price: "29.95",
      articleNumber: "123449992378",
      size: "38",
      color: "blue",
      quantity: 3,
    },
  ];

  const columns = {
    product: {
      name: "product",
      component: (b) => <BasketProductImage id={b.id} imgUrl={b.imgUrl} />,
    },
    decription: {
      name: "decription",
      component: (b) => (
        <BasketDecription id={b.id} name={b.name} article={b.articleNumber} />
      ),
    },
    color: {
      name: "color",
      component: (b) => <BasketColor color={b.color} />,
    },
    size: {
      name: "size",
      path: "size",
    },
    quantity: {
      name: "qty",
      component: (b) => <BasketQuantity quantity={b.quantity} />,
      footer: {
        name: "subtotal:",
      },
    },
    amount: {
      name: "amount",
      component: (b) => <RenderPrice price={b.price} />,
      footer: {
        component: (data) => <RenderPrice price={data} />,
      },
    },
    delete: {
      name: "",
      component: () => <Button className={"button_table__delete"}></Button>,
    },
  };

  return (
    <div className={style.basket_table}>
      <Table columns={columns} dataBody={basket} dataFooter={total} />
    </div>
  );
};

export default BasketTable;
