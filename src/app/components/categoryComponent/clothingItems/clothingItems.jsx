import React from "react";
import { Link } from "react-router-dom";
import style from "./categoryItems.module.scss";

const ClothingItems = ({ clothes }) => {
  return (
    <div className={style.clothing_item}>
      {clothes.map((item, index) => (
        <div key={index} className={style.clothing_item_wrapper}>
          <Link
            to={`/product/productIDFromCat`}
            className={style.clothing_item_wrap}>
            <div className={style.clothing_item_img}>
              <img alt="pic" src={require(`/src/${item.imgUrl}`)} />
            </div>
            <span>{item.clothingName}</span>
            <span>&pound; {item.price}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ClothingItems;
