import React from "react";
import style from "./basketTable.module.scss";
import { ReactComponent as Increment } from "../../../../assets/svg_icons/increment.svg";
import { ReactComponent as Decrement } from "../../../../assets/svg_icons/decrement.svg";

const BasketTable = () => {
  const basket = [
    {
      imgUrl: "assets/img/burnt1.webp",
      clothingName: "Double-Layered Top",
      price: "29.95",
      articleNumber: "123449992378",
      reviews: "3",
      size: "38",
      description: "Classic casual ",
      color: "red",
      value: 1,
    },
    {
      imgUrl: "assets/img/burnt2.webp",
      clothingName: "Double-Layered Top",
      price: "29.95",
      articleNumber: "123449992378",
      newPrice: "23.85",
      reviews: "3",
      size: "38",
      description: "Classic casual ",
      color: "green",
      value: 2,
    },
    {
      imgUrl: "assets/img/burnt3.webp",
      clothingName: "Double-Layered Top",
      price: "29.95",
      articleNumber: "123449992378",
      newPrice: "23.85",
      reviews: "3",
      size: "38",
      description: "Classic casual ",
      color: "blue",
      value: 3,
    },
  ];

  return (
    <>
      <div className={style.basket_table}>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Color</th>
              <th>Size</th>
              <th>Qty</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item) => (
              <tr>
                <td>
                  <div className={style.table__img}>
                    <img alt="pic" src={require(`/src/${item.imgUrl}`)} />
                  </div>
                </td>
                <td>
                  <div className={style.basket_table__description}>
                    <p className={style.basket_table__description_title}>
                      {item.description}
                    </p>
                    <p className={style.basket_table__description_article}>
                      <span>Article:</span> {item.articleNumber}
                    </p>
                  </div>
                </td>
                <td>
                  <div className={style.basket_table__color}>{item.color}</div>
                </td>
                <td>{item.size}</td>
                <td>
                  <div className={style.basket_table__QTY}>
                    <span>{item.value}</span>
                    <div>
                      <button className="button_table">
                        <Increment
                          className={style.basket_table__action_icon}
                          width="100%"
                          height="100%"
                        />
                      </button>
                      <button className="button_table">
                        <Decrement
                          className={style.basket_table__action_icon}
                          width="100%"
                          height="100%"
                        />
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  {item.newPrice ? (
                    <>&pound; {item.newPrice}</>
                  ) : (
                    <>&pound; {item.price}</>
                  )}
                </td>
                <td>
                  <button className="button_table__delete"></button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4"></td>
              <td>Subtotal:</td>
              <td>
                <span>&pound; 124.33</span>
              </td>
              <td colspan="7"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default BasketTable;
