import React from "react";
import TrendListActions from "../trendListActions/trendListActions";
import { Link } from "react-router-dom";
import style from "./trendsList.module.scss";

const TrendsList = ({ clothes }) => {
  const { imgUrl, otherImg, clothingName, price, newPrice, description } =
    clothes;

  return (
    <div className={style.trends_list}>
      <div className={style.trends_list__wrapper}>
        <Link
          to="/category/categoryDebug/productIDDebug"
          className={style.trends_list__item}>
          <div className={style.trends_list__img}>
            <img alt="pic" src={require(`/src/${imgUrl}`)} />
            <div className={style.trends_list__img_other}>
              {otherImg.map((img) => (
                <div className={style.product_card__item__wrapper_img_other}>
                  <img alt="pic" src={require(`/src/${img.imgUrl}`)} />
                </div>
              ))}
            </div>
            {newPrice ? (
              <span className={style.trends_list__img_price}>
                <span className={style.trends_list__img_price_old}>
                  &pound;{price}
                </span>

                <span>&pound;{newPrice}</span>
              </span>
            ) : (
              <span className={style.trends_list__img_price}>
                &pound;{price}
              </span>
            )}
          </div>

          <div className={style.trends_list__description}>
            <div className={style.trends_list__description_title}>
              {clothingName}{" "}
              {newPrice ? (
                <div>
                  <span className={style.trends_list__img_price_old}>
                    &pound;{price}
                  </span>
                  <span>&pound;{newPrice}</span>
                </div>
              ) : (
                <span>&pound;{price}</span>
              )}
            </div>

            <div className={style.trends_list__description_description}>
              {description}
            </div>

            <div className={style.trends_list__description_action}>
              <TrendListActions />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrendsList;
