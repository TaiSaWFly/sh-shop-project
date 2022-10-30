import React, { useState } from "react";
import RenderPrice from "../../../common/priceComponent/renderPrice";
import DropdownDescription from "../dropdownDescription/dropdownDescription";
import style from "./popularItem.module.scss";

const PopularItem = ({ product, redirectToProduct }) => {
  const { id, imgUrl, otherImg, newPrice, price } = product;
  const [dataDescription, setData] = useState();

  const handleDropdown = (state) => {
    setData(state);
  };

  return (
    <div className={style.popular_item}>
      <div className={style.popular_item__wrapper}>
        <div
          onMouseEnter={() => handleDropdown(true)}
          onMouseLeave={() => handleDropdown(false)}
          className={style.popular_item__link}>
          <div
            className={style.popular_item__img}
            onClick={() => redirectToProduct(id)}>
            <img alt="pic" src={require(`/src/${imgUrl}`)} />
            <div className={style.popular_item__imgs}>
              {otherImg.map((img, index) => (
                <div key={index} className={style.product_imgs}>
                  <img alt="pic" src={require(`/src/${img.imgUrl}`)} />
                </div>
              ))}
            </div>
            {newPrice ? (
              <span className={style.popular_item__price}>
                <span className={style.popular_item__price_old}>
                  <RenderPrice price={price} />
                </span>
                <RenderPrice price={newPrice} />
              </span>
            ) : (
              <span className={style.popular_item__price}>
                <RenderPrice price={price} />
              </span>
            )}
          </div>

          <DropdownDescription {...{ product }} dropdown={dataDescription} />
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
